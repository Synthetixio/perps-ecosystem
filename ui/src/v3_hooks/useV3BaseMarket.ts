import { useQuery } from '@apollo/client';
import { wei } from '@synthetixio/wei';
import { calculateSkew } from '../utils';
import { v3_MARKET } from '../v3_baseQueries/v3_Market';
import { Market } from '../v3_types';
import { MarketFilter, MarketOrderBy, OrderDirection } from '../v3_perp/__generated__/graphql';

interface UseV3BaseMarketProps {
  first?: number;
  orderBy: MarketOrderBy;
  orderDirection: OrderDirection;
  marketFilters: MarketFilter;
}

export function useV3BaseMarket({
  first = 100,
  orderBy,
  orderDirection,
  marketFilters,
}: UseV3BaseMarketProps) {
  const variables = {
    first,
    orderBy,
    orderDirection,
    where: marketFilters,
  };

  const { loading, data, error } = useQuery(v3_MARKET, {
    variables,
  });

  const v3MarketData: Market[] = data
    ? data.markets
        .map((item) => {
          const longOI = wei(item.size, 18, true)
            .add(wei(item.skew, 18, true))
            .div(2);
          const shortOI = wei(item.size, 18, true)
            .sub(wei(item.skew, 18, true))
            .div(2);
          const skewVal = calculateSkew(longOI, shortOI);

          return {
            id: item.id,
            perpsMarketId: item.perpsMarketId,
            currentMarketPrice: item.price,
            marketName: item.marketName,
            marketSymbol: item.marketSymbol,
            price: wei(item.price, 18, true).toNumber(),
            skew: wei(item.skew, 18, true).toNumber(),
            skewScale: wei(item.skewScale, 18, true).toNumber(),
            size: wei(item.size, 18, true).toNumber(),
            sizeDelta: wei(item.sizeDelta, 18, true).toNumber(),
            currentFundingRate: wei(item.currentFundingRate, 18, true).toNumber(),
            currentFundingVelocity: wei(item.currentFundingVelocity, 18, true).toNumber(),
            hourlyFundingRate: wei(item.currentFundingRate, 18, true).div(24).toNumber(), // hourlyFundingRate.toNumber(),
            hourlyFundingVelocity: wei(item.currentFundingVelocity, 18, true).div(24).toNumber(), // hourlyFundingVelocity.toNumber(),
            fundingRateApr: wei(item.currentFundingRate, 18, true).mul(365).toNumber(), // fundingRateApr.toNumber(),
            skewVal,
            marketSize: wei(item.size, 18, true)
              .mul(wei(item.price, 18, true))
              .toNumber(),
            longOI: wei(item.size, 18, true)
              .add(wei(item.skew, 18, true))
              .div(2)
              .toNumber(),
            shortOI: wei(item.size, 18, true)
              .sub(wei(item.skew, 18, true))
              .div(2)
              .toNumber(),
          };
        })
        .sort((a, b) => b.marketSize - a.marketSize)
    : [];

  return {
    loading,
    data: v3MarketData,
    error,
  };
}
