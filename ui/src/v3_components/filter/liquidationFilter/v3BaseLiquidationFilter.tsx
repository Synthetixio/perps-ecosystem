import { Stack } from '@chakra-ui/react';
import { useV3BaseMarket } from '../../../v3_hooks/useV3BaseMarket';
import { V3BaseMarketSelect } from '../MarketSelect';
import { MarketOrderBy, OrderDirection } from '../../../v3_perp/__generated__/graphql';

interface V3BaseTradeFilterProps {
  route: string;
}

export const V3BaseLiquidationFilter = ({ route }: V3BaseTradeFilterProps) => {
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
    </Stack>
  );
};
