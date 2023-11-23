import { useQuery } from '@apollo/client';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWalletAddress } from './useWalletAddress';
// import { TRADER_POSITIONS_QUERY } from '../queries/trader';

export interface ProcessedClosedTradeData {
  pnl: number;
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

export interface ClosedPositionsWithPageInfo {
  data: ProcessedClosedTradeData[];
  hasNextPage: boolean;
}

export const useTraderClosedPositions = () => {
  const { allAddresses } = useWalletAddress();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('pg')) || 1;

  const ITEMS_PER_PAGE = 6;
  const EXTRA_ITEM = 1;

  const {
    data: traderClosedPositionData,
    loading: traderClosedPositionQueryLoading,
    error: traderClosedPositionQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: {
      first: ITEMS_PER_PAGE + EXTRA_ITEM,
      where: {
        isOpen: false,
        trader_in: [...allAddresses],
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
      skip: (page - 1) * 6,
    },
    pollInterval: 100000,
  });

  const processedClosedPositionData: ClosedPositionsWithPageInfo = useMemo(() => {
    if (
      !traderClosedPositionData ||
      traderClosedPositionQueryLoading ||
      traderClosedPositionQueryError
    ) {
      return { data: [], hasNextPage: false };
    }

    const processedClosedPositions = [...traderClosedPositionData.futuresPositions]
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
        };
      });

    const hasNextPage = processedClosedPositions.length > ITEMS_PER_PAGE;

    const slicedData = processedClosedPositions.slice(0, ITEMS_PER_PAGE);

    return {
      data: slicedData,
      hasNextPage,
    };
  }, [traderClosedPositionData, traderClosedPositionQueryLoading, traderClosedPositionQueryError]);

  return {
    processedClosedPositionData,
    traderClosedPositionQueryLoading,
    traderClosedPositionQueryError,
  };
};
