import { Flex, Text } from '@chakra-ui/react';
import { MarketsCard } from './MarketsCard';
import { useV3BaseMarket } from '../../../v3_hooks/useV3BaseMarket';
import { MarketOrderBy, OrderDirection } from '../../../v3_perp/__generated__/graphql';

export const V3DashboardMarkets = () => {
  const marketFilters = {
    price_not: null,
    size_not: null,
    currentFundingRate_not: null,
  };

  const { data, loading, error } = useV3BaseMarket({
    first: 250,
    orderBy: 'size' as MarketOrderBy,
    orderDirection: 'desc' as OrderDirection,
    marketFilters,
  });

  if (loading) {
    return (
      <Flex px={{ base: '16px', md: '40px' }}>
        <Text>Loading markets...</Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        justifyContent="space-between"
        width="100%"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Text>Error loading markets: {error.message}</Text>
      </Flex>
    );
  }

  if (!data ?? !data.length) {
    return (
      <Flex
        justifyContent="space-between"
        width="100%"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Text>No Market Data Available</Text>
      </Flex>
    );
  }

  return (
    <Flex
      mt={2}
      justifyContent="space-between"
      width="100%"
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      {data
        .slice(0, 3)
        .map(
          ({ id, marketName, marketSymbol, price, marketSize, fundingRateApr }, index: number) => (
            <MarketsCard
              key={id} // Add a unique key prop to each mapped component
              my={4}
              marketName={marketName}
              marketPrice={price}
              marketSymbol={marketSymbol}
              marketSize={marketSize}
              fundingRateApr={fundingRateApr}
              number={index + 1}
              width={{ base: '100%', lg: '32%' }}
            />
          )
        )}
    </Flex>
  );
};
