import { useQuery } from '@apollo/client';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { RealtimeContext } from '../utils';
import { useContext, useMemo } from 'react';

export interface ProcessedPnlData {
  pnl: number;
  totalPnl: number;
  openTimestamp: string;
  closeTimestamp: string;
  date: string;
  market: string;
  long: boolean;
  txHash: string;
  leverage: string;
  positionId: string;
  walletAddress: string;
  trades: string;
}

type Period = 'W' | 'M' | 'Y';

export const useTraderPnl = (accountAddress?: string, period?: Period) => {
  const accountAddressLowerCase = accountAddress?.toLowerCase();
  const { arePricesReady } = useContext(RealtimeContext);

  const getTimestamp = getUnixTimestamp(period ?? 'M');

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
        openTimestamp_gte: getTimestamp,
      },
      orderBy: 'openTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
    },
    pollInterval: 100000,
    skip: !arePricesReady,
  });

  const processedData = useMemo(() => {
    if (!traderPnlData || traderPnlQueryLoading) {
      return [];
    }
    const sortedAndFilteredData2 = [...traderPnlData.futuresPositions]
      .sort((a, b) => parseInt(a.openTimestamp) - parseInt(b.openTimestamp))
      .filter((item) => !item.isOpen);
    return sortedAndFilteredData2
      .map((item) => {
        const formatCloseTimestamp = new Date(
          parseInt(item.openTimestamp) * 1000
        ).toLocaleDateString('default', { month: '2-digit', day: 'numeric' });
        return {
          pnl: wei(item.realizedPnl, 18, true).toNumber(),
          closeTimestamp: item.closeTimestamp as string,
          openTimestamp: item.openTimestamp,
          date: formatCloseTimestamp,
          market: item.market.asset,
          long: item.long,
          txHash: item.txHash,
          leverage: item.leverage,
          positionId: item.id,
          walletAddress: item.trader.id,
          trades: item.trades,
        };
      })
      .reduce((acc: ProcessedPnlData[], item) => {
        const runningTotalPnl = acc.length > 0 ? acc[acc.length - 1].totalPnl + item.pnl : item.pnl;

        acc.push({
          ...item,
          totalPnl: runningTotalPnl,
        });

        return acc;
      }, []);
  }, [traderPnlData, traderPnlQueryLoading]);

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
