import { useQuery } from '@apollo/client';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { useEffect, useMemo, useState } from 'react';
import { useWalletAddress } from './useWalletAddress';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';

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
  liquidated: boolean;
  funding: number;
}

type Period = 'W' | 'M' | 'Y';

export const useTraderPnlStats = (period?: Period) => {
  const { allAddresses } = useWalletAddress();
  const [timestamp, setTimestamp] = useState(getUnixTimestamp(period ?? 'M'));

  useEffect(() => {
    setTimestamp(getUnixTimestamp(period ?? 'M'));
  }, [period]);

  const queryVariables = useMemo(
    () => ({
      first: 1000,
      where: {
        isOpen: false,
        trader_: {
          id_in: [...allAddresses],
        },
        openTimestamp_gte: timestamp,
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
    }),
    [allAddresses, timestamp]
  );

  const {
    data: traderPnlData,
    loading: traderPnlQueryLoading,
    error: traderPnlQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    // TRADER_POSITIONS_QUERY
    variables: queryVariables,
    pollInterval: 10000,
  });

  const processedData = useMemo(() => {
    if (!traderPnlData || traderPnlQueryLoading || traderPnlQueryError) {
      return [];
    }
    const sortedAndFilteredData = [...traderPnlData.futuresPositions]
      .filter((item) => !item.isOpen)
      .sort((a, b) => parseInt(a.closeTimestamp as string) - parseInt(b.closeTimestamp as string));

    return sortedAndFilteredData
      .map((item) => {
        const formatCloseTimestamp = new Date(
          parseInt(item.closeTimestamp as string) * 1000
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
          liquidated: item.isLiquidated,
          funding: wei(item.netFunding, 18, true).toNumber(),
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
  }, [traderPnlData]);

  return {
    processedData,
    traderPnlQueryError,
    traderPnlQueryLoading,
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
