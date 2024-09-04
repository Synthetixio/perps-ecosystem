import { useQuery } from '@apollo/client';
import { wei } from '@synthetixio/wei';
import { OrderDirection, PositionFilter, PositionOrderBy } from '../v3_perp/__generated__/graphql';
import { v3_POSITION } from '../v3_baseQueries/v3_Position';
import { Position } from '../v3_types/position';
import { safeDecodeTrackingCode } from '../v3_utils/safeDecodeTrackingCode';

interface UseV3BasePositionProps {
  first?: number;
  skip?: number;
  orderBy: PositionOrderBy;
  orderDirection: OrderDirection;
  positionFilters: PositionFilter;
}

export function useV3BasePosition({
  first = 100,
  skip = 0,
  orderBy,
  orderDirection,
  positionFilters,
}: UseV3BasePositionProps) {
  const variables = {
    first,
    skip,
    orderBy,
    orderDirection,
    where: positionFilters,
  };

  const { loading, data, error } = useQuery(v3_POSITION, {
    variables,
  });

  const processedData: Position[] = data
    ? data.positions?.map((position) => {
        const marketPrice = wei(position.market.price, 18, true);
        const averageEntryPrice = wei(position.averageEntryPrice, 18, true);
        const size = wei(position.size, 18, true);

        // Calculate unrealized PnL based on direction (LONG or SHORT)
        let unrealizedPnlFE;
        if (position.direction === 'LONG') {
          unrealizedPnlFE = marketPrice.sub(averageEntryPrice).mul(size);
        } else if (position.direction === 'SHORT') {
          unrealizedPnlFE = averageEntryPrice.sub(marketPrice).mul(size.abs());
        }

        return {
          id: position.id,
          trackingCode: safeDecodeTrackingCode(position.trackingCode ?? ''),
          isOpen: position.isOpen,
          isLiquidated: position.isLiquidated,
          status: position.status,
          direction: position.direction,
          openTimestamp: position.openTimestamp,
          closeTimestamp: position.closeTimestamp,
          entryPrice: wei(position.entryPrice, 18, true),
          exitPrice: position.exitPrice ? wei(position.exitPrice, 18, true) : null,
          lastFillPrice: wei(position.lastFillPrice, 18, true),
          averageEntryPrice: wei(position.averageEntryPrice, 18, true),
          size: wei(position.size, 18, true),
          notionalAmount: wei(position.notionalAmount, 18, true),
          realizedPnl: wei(position.realizedPnl, 18, true),
          realizedPnlWithFees: wei(position.realizedPnlWithFees, 18, true),
          positionPnl: wei(position.positionPnl, 18, true),
          unrealizedPnl: wei(position.unrealizedPnl, 18, true),
          unrealizedPnlFE: wei(unrealizedPnlFE, 18, true),
          totalFees: wei(position.totalFees, 18, true),
          totalVolume: wei(position.totalVolume, 18, true),
          totalTrades: wei(position.totalTrades),
          accruedFunding: wei(position.accruedFunding, 18, true),
          interestCharged: position.interestCharged
            ? wei(position.interestCharged, 18, true)
            : null,
          marketId: position.market.id,
          marketName: position.market.marketName,
          marketSymbol: position.market.marketSymbol,
          marketPrice: wei(position.market.price, 18, true),
          accountId: position.account.id,
          accountOwner: position.account.owner,
          liquidationId: position.liquidation ? position.liquidation.id : null,
        };
      })
    : [];

  return {
    loading,
    data: processedData,
    error,
  };
}
