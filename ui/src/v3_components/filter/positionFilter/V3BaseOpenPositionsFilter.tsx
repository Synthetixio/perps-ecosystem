import { Box, Spinner, Stack, Text } from '@chakra-ui/react';
// import { PageFilter } from './V3BasePageFilter';
import { useV3BaseMarket } from '../../../v3_hooks/useV3BaseMarket';
import { V3BaseMarketSelect } from '../MarketSelect';
import { V3BaseDropdownFilter } from '../DropdownFilter';
import { V3BaseSizeFilter } from '../sizeFilter';
import { MarketOrderBy, OrderDirection } from '../../../v3_perp/__generated__/graphql';

interface DropdownInterface {
  value: string;
  display: string;
}

const ORDER_BY_CATEGORIES: DropdownInterface[] = [
  { value: 'notionalAmount', display: 'Size' },
  { value: 'unrealizedPnl', display: 'Unrealized PNL' },
  { value: 'realizedPnl', display: 'Realized PNL' },
];

const ORDER_DIRECTIONS: DropdownInterface[] = [
  { value: 'desc', display: 'Desc' },
  { value: 'asc', display: 'Asc' },
];

interface V3BaseOpenPositionsFilterProps {
  route: string;
}

export const V3BaseOpenPositionsFilter = ({ route }: V3BaseOpenPositionsFilterProps) => {
  const marketFilters = {
    price_not: null,
    size_not: null,
    currentFundingRate_not: null,
  };

  const {
    data: markets,
    loading,
    error,
  } = useV3BaseMarket({
    first: 200,
    orderBy: 'size' as MarketOrderBy,
    orderDirection: 'desc' as OrderDirection,
    marketFilters,
  });

  if (loading) {
    return (
      <Box>
        <Spinner size="lg" />
        <Text>Loading markets...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Text color="red.500">Error loading markets: {error.message}</Text>
      </Box>
    );
  }

  if (!markets || markets.length === 0) {
    return (
      <Box>
        <Text>No markets available</Text>
      </Box>
    );
  }

  // const markets = data ? data.map((item) => item.marketSymbol ) : []

  return (
    <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 5, md: 10 }} width="100%">
      <V3BaseMarketSelect markets={markets} route={route} />

      <V3BaseDropdownFilter
        route={route}
        options={ORDER_BY_CATEGORIES}
        queryParam="orderby"
        label="Order By"
      />

      <V3BaseDropdownFilter
        route={route}
        options={ORDER_DIRECTIONS}
        queryParam="direction"
        label="Sort Order"
      />

      <V3BaseSizeFilter route={route} />
    </Stack>
  );
};
