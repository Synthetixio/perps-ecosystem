import { useQuery } from '@apollo/client';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { useMemo } from 'react';
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

type TradeNum = number;

export const useTraderPnlStats = (tradeNum: TradeNum) => {
  const { allAddresses } = useWalletAddress();

  const queryVariables = useMemo(
    () => ({
      first: tradeNum ?? 1000,
      where: {
        isOpen: false,
        trader_in: [...allAddresses],
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
    }),
    [allAddresses, tradeNum]
  );

  const {
    data: traderPnlData,
    loading: traderPnlQueryLoading,
    error: traderPnlQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
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
