import { Stack } from '@chakra-ui/react';
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
  { value: 'timestamp', display: 'Date' },
  { value: 'volume', display: 'Volume' },
];

const ORDER_DIRECTIONS: DropdownInterface[] = [
  { value: 'desc', display: 'Desc' },
  { value: 'asc', display: 'Asc' },
];

interface V3BaseTradeFilterProps {
  route: string;
}

export const V3BaseTradeFilter = ({ route }: V3BaseTradeFilterProps) => {
  const marketFilters = {
    price_not: null,
    size_not: null,
    currentFundingRate_not: null,
  };

  const { data: markets } = useV3BaseMarket({
    first: 200,
    orderBy: 'size' as MarketOrderBy,
    orderDirection: 'desc' as OrderDirection,
    marketFilters,
  });

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
