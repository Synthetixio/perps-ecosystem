import { useQuery } from '@apollo/client';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { useMemo } from 'react';
import { useWalletAddress } from './useWalletAddress';
import { ProcessedPositionData } from '../types';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';

export const useTraderPositionClosedLiq = ({ isLiquidated = false }: { isLiquidated: boolean }) => {
  const { allAddresses } = useWalletAddress();

  const {
    data,
    loading: traderClosedPositionQueryLoading,
    error: traderClosedPositionQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: {
      first: 10,
      where: {
        isOpen: false,
        isLiquidated,
        trader_in: [...allAddresses],
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
    },
  });

  const processedClosedPositionData = useMemo(() => {
    if (!data || traderClosedPositionQueryLoading || traderClosedPositionQueryError) {
      return [] as ProcessedPositionData[];
    }

    return data.futuresPositions.map((item) => {
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
        fees: wei(item.feesPaidToSynthetix, 18, true).toNumber(),
        size: wei(item.size, 18, true).toNumber(),
        entryPrice: wei(item.entryPrice, 18, true).toNumber(),
        avgEntryPrice: wei(item.avgEntryPrice, 18, true).toNumber(),
        exitPrice: wei(item.exitPrice, 18, true).toNumber(),
        lastPrice: wei(item.lastPrice, 18, true).toNumber(),
      };
    });
  }, [data, traderClosedPositionQueryLoading, traderClosedPositionQueryError]);

  return {
    processedClosedPositionData,
    traderClosedPositionQueryLoading,
    traderClosedPositionQueryError,
  };
};
