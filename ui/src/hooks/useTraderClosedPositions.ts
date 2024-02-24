import { useQuery } from '@apollo/client';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { useEffect, useMemo, useState } from 'react';
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

  const [tempPage, setTempPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const { currentPage, changeCurrentPage, currentLimit, changeCurrentLimit } =
    usePageChangeWithLimit({ pageName: 'pg', limitName: 'limit', defaultLimit: ITEMS_PER_PAGE });

  const ITEMS = 200;
  const { data, loading, error } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: {
      first: ITEMS + EXTRA_ITEM,
      where: {
        isOpen: false,
        isLiquidated,
        trader_in: [...allAddresses],
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
      skip: pageToOffset(tempPage, ITEMS),
    },
  });

  useEffect(() => {
    if (loading || !!error || !data?.futuresPositions) return;
    setTotalRecords(totalRecords + Math.min(data.futuresPositions.length, ITEMS));
    setTempPage(tempPage + 1);
  }, [data]);

  const {
    data: traderClosedPositionData,
    loading: traderClosedPositionQueryLoading,
    error: traderClosedPositionQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: {
      first: currentLimit,
      where: {
        isOpen: false,
        isLiquidated,
        trader_in: [...allAddresses],
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
      skip: pageToOffset(currentPage, currentLimit),
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
  }, [traderClosedPositionData, traderClosedPositionQueryLoading, traderClosedPositionQueryError]);

  const paginationConfig = useMemo(() => {
    return {
      limit: currentLimit,
      offset: pageToOffset(currentPage, currentLimit),
      total: totalRecords,
      totalPages: totalToPages(totalRecords, currentLimit),
    } satisfies PaginationConfigProps;
  }, [currentLimit, currentPage, totalRecords]);

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
