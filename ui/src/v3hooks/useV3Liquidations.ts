import { useQuery } from '@apollo/client';
import { wei } from '@synthetixio/wei';
import { LIQUIDATIONS_QUERY_V3 } from '../v3queries/liquidationsV3';
import { useMarketV3 } from './useV3Markets';
import { OrderDirection, PositionLiquidatedOrderBy } from '../v3/__generated__/graphql';

export function useLiquidationsV3() {
  const { loading, data, error } = useQuery(LIQUIDATIONS_QUERY_V3, {
    variables: { first: 250, orderBy: 'timestamp' as PositionLiquidatedOrderBy, orderDirection: 'desc' as OrderDirection },
  });

  const { v3MarketData } = useMarketV3();

  const v3Liquidations = data?.positionLiquidateds.map((item) => {
    const market = v3MarketData?.find((marketItem) => marketItem.id === item.marketId);
    return {
      id: item.id,
      timestamp: item.timestamp,
      accountId: item.accountId,
      marketId: item.marketId,
      marketName: market?.marketName,
      marketSymbol: market?.marketSymbol,
      marketPrice: market?.currentMarketPrice,
      amountLiquidated: wei(item.amountLiquidated, 18, true),
      currentPositionSize: wei(item.currentPositionSize,18,true)
    };
  });

  return {
    loading,
    data,
    error,
    v3Liquidations,
  };
}
