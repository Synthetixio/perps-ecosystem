import { useQuery } from '@apollo/client';
import { MARKETS_QUERY_V3 } from '../v3queries/marketsV3';
import Wei, { wei } from '@synthetixio/wei';
import { calculateSkew } from '../utils';

export function useMarketV3() {
  const { loading, data, error } = useQuery(MARKETS_QUERY_V3, {
    variables: { first: 250 },
  });

  const v3MarketData = data?.markets
    .map((item) => {
      const hourlyFundingRate = wei(item.currentFundingRate, 18, true).div(24);
      const hourlyFundingVelocity = wei(item.currentFundingVelocity, 18, true).div(24);
      const fundingRateApr = wei(item.currentFundingRate, 18, true).mul(365);
      const size = wei(item.size, 18, true);
      const skew = wei(item.skew, 18, true);
      const marketSize = wei(item.size, 18, true)
        .mul(wei(item.price, 18, true))
        .toNumber();
      const openInterest = calculateLongsAndShorts(size, skew);
      const skewVal = calculateSkew(openInterest.long, openInterest.short);

      return {
        id: item.id,
        perpsMarketId: item.perpsMarketId,
        marketName: item.marketName,
        marketSymbol: item.marketSymbol,
        price: wei(item.price, 18, true).toNumber(),
        skew: wei(item.skew, 18, true).toNumber(),
        skewScale: wei(item.skewScale, 18, true).toNumber(),
        size: wei(item.size, 18, true).toNumber(),
        sizeDelta: wei(item.sizeDelta, 18, true).toNumber(),
        currentFundingRate: wei(item.currentFundingRate, 18, true).toNumber(),
        currentFundingVelocity: wei(item.currentFundingVelocity, 18, true).toNumber(),
        hourlyFundingRate: hourlyFundingRate.toNumber(),
        hourlyFundingVelocity: hourlyFundingVelocity.toNumber(),
        fundingRateApr: fundingRateApr.toNumber(),
        openInterest,
        skewVal,
        marketSize,
      };
    })
    .sort((a, b) => b.marketSize - a.marketSize);

  return {
    loading,
    data,
    error,
    v3MarketData,
  };
}

function calculateLongsAndShorts(openInterest: Wei, skew: Wei) {
  const long = openInterest.add(skew).div(2);
  const short = openInterest.sub(skew).div(2);
  return { long, short };
}
