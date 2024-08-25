import { useQuery } from '@apollo/client';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { useMemo } from 'react';
import { useWalletAddress } from './useWalletAddress';
import { ProcessedPositionData } from '../types';
import { usePageChangeWithLimit } from './helpers/usePageChange';
import { pageToOffset, PaginationConfigProps, totalToPages } from '../components/Pagination';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';

export interface ClosedPositionsWithPageInfo {
  data: ProcessedPositionData[];
  hasNextPage: boolean;
}

export const useTraderClosedPositions = ({ isLiquidated = false }: { isLiquidated: boolean }) => {
  const { allAddresses } = useWalletAddress();
  // const [searchParams] = useSearchParams();
  // const page = Number(searchParams.get('pg')) || 1;

  const ITEMS_PER_PAGE = 5;
  const EXTRA_ITEM = 1;

  const { currentPage, changeCurrentPage, currentLimit, changeCurrentLimit } =
    usePageChangeWithLimit({ pageName: 'pg', limitName: 'limit', defaultLimit: ITEMS_PER_PAGE });

  const ITEMS = 200;
  const {
    data,
    loading: traderClosedPositionQueryLoading,
    error: traderClosedPositionQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: {
      first: ITEMS + EXTRA_ITEM,
      where: {
        isOpen: false,
        isLiquidated,
        trader_in: [...allAddresses],
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
      skip: pageToOffset(currentPage, 200),
    },
  });

  const processedClosedPositionData: ClosedPositionsWithPageInfo = useMemo(() => {
    if (!data || traderClosedPositionQueryLoading || traderClosedPositionQueryError) {
      return { data: [], hasNextPage: false };
    }

    const processedClosedPositions = data.futuresPositions.map((item) => {
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

    const hasNextPage = processedClosedPositions.length > currentLimit;

    const slicedData = processedClosedPositions.slice(0, currentLimit);

    return {
      data: slicedData,
      hasNextPage,
    };
  }, [currentLimit]);

  const paginationConfig = useMemo(() => {
    const totalRecords = data ? data.futuresPositions.length : 0;
    return {
      limit: currentLimit,
      offset: pageToOffset(currentPage, currentLimit),
      total: totalRecords,
      totalPages: totalToPages(totalRecords, currentLimit),
    } satisfies PaginationConfigProps;
  }, [currentLimit, currentPage]);

  return {
    processedClosedPositionData,
    traderClosedPositionQueryLoading,
    traderClosedPositionQueryError,
    currentPage,
    currentLimit,
    changeCurrentPage,
    changeCurrentLimit,
    paginationConfig,
  };
};
