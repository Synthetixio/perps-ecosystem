import { useQuery } from '@apollo/client';
import {
  OrderDirection,
  LiquidationOrderBy,
  LiquidationFilter,
} from '../v3_perp/__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { v3_LIQUIDATION } from '../v3_baseQueries/v3_Liquidation';
import { Liquidation } from '../v3_types/liquidation';
import { utils } from 'ethers';

interface UseV3BaseLiquidationProps {
  first?: number;
  orderBy: LiquidationOrderBy;
  orderDirection: OrderDirection;
  liquidationFilters: LiquidationFilter;
}

export const useV3Baseliquidation = ({
  first = 100,
  orderBy,
  orderDirection,
  liquidationFilters,
}: UseV3BaseLiquidationProps) => {
  const variables = {
    first,
    orderBy,
    orderDirection,
    where: liquidationFilters,
  };

  const { loading, error, data } = useQuery(v3_LIQUIDATION, {
    variables,
  });

  const processedData: Liquidation[] = data
    ? data.liquidations.map((liquidation) => ({
        id: liquidation.id,
        timestamp: liquidation.timestamp,
        transactionHash: liquidation.transactionHash,
        accountId: liquidation.account.id,
        accountOwner: liquidation.account.owner,
        marketId: liquidation.market.id,
        marketName: liquidation.market.marketName,
        marketSymbol: liquidation.market.marketSymbol,
        marketPrice: wei(liquidation.marketPrice, 18, true),
        amountLiquidated: wei(liquidation.amountLiquidated, 18, true),
        liquidationType: liquidation.liquidationType,
        currentPositionSize: wei(liquidation.currentPositionSize, 18, true),
        notionalAmount: wei(liquidation.notionalAmount, 18, true),
        positionId: liquidation.position?.id ?? null,
        positionIsLiquidated: liquidation.position?.isLiquidated ?? null,
        positionDirection: liquidation.position?.direction ?? null,
        positionRealizedPnl: liquidation.position?.totalFees
          ? wei(liquidation.position.totalFees, 18, true)
          : null,
        positionAverageEntryPrice: liquidation.position?.totalFees
          ? wei(liquidation.position.averageEntryPrice, 18, true)
          : null,
        positionTotalTrades: liquidation.position?.totalTrades
          ? wei(liquidation.position.totalTrades)
          : null,
        positionTotalVolume: liquidation.position?.totalVolume
          ? wei(liquidation.position.totalVolume, 18, true)
          : null,
        positionTotalFees: liquidation.position?.totalFees
          ? wei(liquidation.position.totalFees, 18, true)
          : null,
        positionTrackingCode: liquidation.position?.trackingCode
          ? utils.parseBytes32String(liquidation.position.trackingCode)
          : null,
        positionStatus: liquidation.position?.status ? liquidation.position.status : null,
      }))
    : [];

  return {
    loading,
    error,
    data: data ? processedData : [],
  };
};
