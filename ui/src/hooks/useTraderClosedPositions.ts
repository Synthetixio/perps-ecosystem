import { useQuery } from '@apollo/client';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWalletAddress } from './useWalletAddress';

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

export const useTraderClosedPositions = () => {
  const { allAddresses } = useWalletAddress();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('pg')) || 1;

  const {
    data: traderClosedPositionData,
    loading: traderClosedPositionQueryLoading,
    error: traderClosedPositionQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: {
      first: 6,
      where: {
        isOpen: false,
        trader_: {
          id_in: [...allAddresses],
        },
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
      skip: (page - 1) * 6,
    },
    pollInterval: 100000,
  });

  const processedClosedPositionData: ProcessedClosedTradeData[] = useMemo(() => {
    if (
      !traderClosedPositionData ||
      traderClosedPositionQueryLoading ||
      traderClosedPositionQueryError
    ) {
      return [];
    }

    const processClosedPositions = [...traderClosedPositionData.futuresPositions].filter(
      (item) => !item.isOpen
    );

    return processClosedPositions.map((item) => {
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
  }, [traderClosedPositionData]);

  return {
    processedClosedPositionData,
    traderClosedPositionQueryLoading,
    traderClosedPositionQueryError,
  };
};
