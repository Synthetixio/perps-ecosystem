import { useQuery } from '@apollo/client';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWalletAddress } from './useWalletAddress';
import { ProcessedPositionData } from '../types';
// import { TRADER_POSITIONS_QUERY } from '../queries/trader';

export interface LiquidatedPositionsWithPageInfo {
  data: ProcessedPositionData[];
  hasNextPage: boolean;
}

export const useTraderLiquidatedPositions = () => {
  const { allAddresses } = useWalletAddress();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('pg')) || 1;

  const ITEMS_PER_PAGE = 6;
  const EXTRA_ITEM = 1;

  const {
    data: traderLiquidatedPositionData,
    loading: traderLiquidatedPositionQueryLoading,
    error: traderLiquidatedPositionQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: {
      first: ITEMS_PER_PAGE + EXTRA_ITEM,
      where: {
        isOpen: false,
        isLiquidated: true,
        trader_in: [...allAddresses],
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
      skip: (page - 1) * 6,
    },
    pollInterval: 100000,
  });

  const processedLiquidatedPositionData: LiquidatedPositionsWithPageInfo = useMemo(() => {
    if (
      !traderLiquidatedPositionData ||
      traderLiquidatedPositionQueryLoading ||
      traderLiquidatedPositionQueryError
    ) {
      return { data: [], hasNextPage: false };
    }

    const processedLiquidatedPositions = [...traderLiquidatedPositionData.futuresPositions]
      .filter((item) => !item.isOpen)
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
          fees: wei(item.feesPaidToSynthetix, 18, true).toNumber(),
          size: wei(item.size, 18, true).toNumber(),
          entryPrice: wei(item.entryPrice, 18, true).toNumber(),
          avgEntryPrice: wei(item.avgEntryPrice, 18, true).toNumber(),
          exitPrice: wei(item.exitPrice, 18, true).toNumber(),
          lastPrice: wei(item.lastPrice, 18, true).toNumber(),
        };
      });

    const hasNextPage = processedLiquidatedPositions.length > ITEMS_PER_PAGE;

    const slicedData = processedLiquidatedPositions.slice(0, ITEMS_PER_PAGE);

    return {
      data: slicedData,
      hasNextPage,
    };
  }, [
    traderLiquidatedPositionData,
    traderLiquidatedPositionQueryLoading,
    traderLiquidatedPositionQueryError,
  ]);

  return {
    processedLiquidatedPositionData,
    traderLiquidatedPositionQueryLoading,
    traderLiquidatedPositionQueryError,
  };
};
