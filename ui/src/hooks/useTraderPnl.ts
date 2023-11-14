import { useQuery } from '@apollo/client';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { RealtimeContext } from '../utils';
import { useContext, useEffect, useState } from 'react';

export interface ProcessedPnlData {
  pnl: number;
  totalPnl: number;
  timestamp: string;
  date: string;
}

type Period = 'W' | 'M' | 'Y';

export const useTraderPnl = (accountAddress?: string, period?: Period) => {
  const accountAddressLowerCase = accountAddress?.toLowerCase();
  const { arePricesReady } = useContext(RealtimeContext);

  const [processedData, setProcessedData] = useState<ProcessedPnlData[]>([]);

  const timestamper = getUnixTimestamp(period ?? 'M');

  const {
    data: traderPnlData,
    loading: traderPnlQueryLoading,
    error: traderPnlQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: {
      first: 100,
      where: {
        isOpen: false,
        trader: accountAddressLowerCase,
        openTimestamp_gte: timestamper,
      },
      orderBy: 'openTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
    },
    pollInterval: 100000,
    skip: !arePricesReady,
  });

  useEffect(() => {
    if (traderPnlData && !traderPnlQueryLoading) {
      const sortedAndFilteredData = traderPnlData.futuresPositions
        .sort((a, b) => parseInt(a.openTimestamp) - parseInt(b.openTimestamp))
        .filter((item) => !item.isOpen);

      const processedData = sortedAndFilteredData

        .map((item) => {
          const formatCloseTimestamp = new Date(
            parseInt(item.openTimestamp) * 1000
          ).toLocaleDateString('default', { month: '2-digit', day: 'numeric' });

          return {
            pnl: wei(item.realizedPnl, 18, true).toNumber(),
            timestamp: item.closeTimestamp as string,
            openTimestamp: item.openTimestamp,
            date: formatCloseTimestamp,
          };
        })

        .reduce((acc: ProcessedPnlData[], item) => {
          const runningTotalPnl =
            acc.length > 0 ? acc[acc.length - 1].totalPnl + item.pnl : item.pnl;

          acc.push({
            ...item,
            totalPnl: runningTotalPnl,
          });

          return acc;
        }, []);

      setProcessedData(processedData);
    }
  }, [traderPnlData, period]);

  return {
    data: traderPnlData,
    loading: traderPnlQueryLoading,
    error: traderPnlQueryError,
    processedData,
  };
};

function getUnixTimestamp(period: string): string {
  const date = new Date();

  switch (period) {
    case 'Y':
      date.setFullYear(date.getFullYear() - 1);
      break;
    case 'M':
      date.setMonth(date.getMonth() - 1);
      break;
    case 'W':
      date.setDate(date.getDate() - 7);
      break;
    default:
      throw new Error(`Invalid period: ${period}`);
  }

  const unixTimestamp = Math.floor(date.getTime() / 1000);

  return unixTimestamp.toString();
}
