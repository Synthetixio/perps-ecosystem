import { TableContainer, Table, Thead, Tr, Tbody, Text, Box } from '@chakra-ui/react';
import { MarkPrice, Skew, TableHeaderCell } from '../../components/Shared';
import { V3Market } from './v3Market';
import { V3Funding } from './v3Funding';
import { V3OpenInterest } from './v3OpenInterest';
import { useV3BaseMarket } from '../../v3_hooks/useV3BaseMarket';
import { MarketOrderBy, OrderDirection } from '../../v3_perp/__generated__/graphql';

export const V3BaseMarketsTable = () => {
  const marketFilters = {
    price_not: null,
    size_not: null,
    currentFundingRate_not: null,
  };

  const { data, loading, error } = useV3BaseMarket({
    first: 200,
    orderBy: 'size' as MarketOrderBy,
    orderDirection: 'desc' as OrderDirection,
    marketFilters,
  });

  if (loading) {
    return (
      <Box px={{ base: '16px', md: '40px' }}>
        <Text>Loading data...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box px={{ base: '16px', md: '40px' }}>
        <Text>Error loading data: {error.message}</Text>
      </Box>
    );
  }

  if (!data?.length) {
    return (
      <Box px={{ base: '16px', md: '40px' }}>
        <Text>No Active Market Data Available</Text>
      </Box>
    );
  }

  return (
    <TableContainer
      maxW="100%"
      my={5}
      borderColor="gray.900"
      borderWidth="1px"
      borderRadius="5px"
      sx={{
        borderCollapse: 'separate !important',
        borderSpacing: 0,
      }}
    >
      <Table bg="navy.700">
        <Thead>
          <Tr>
            <TableHeaderCell>Market</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Open Interest</TableHeaderCell>
            <TableHeaderCell>Skew</TableHeaderCell>
            <TableHeaderCell>1H Funding Rate</TableHeaderCell>
            <TableHeaderCell>24H Funding Rate</TableHeaderCell>
            <TableHeaderCell>Funding Velocity</TableHeaderCell>
            <TableHeaderCell>APR</TableHeaderCell>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item) => {
            const {
              perpsMarketId,
              marketName,
              marketSymbol,
              price,
              currentFundingRate,
              currentFundingVelocity,
              hourlyFundingRate,
              fundingRateApr,
              skewVal,
              marketSize,
              longOI,
              shortOI,
            } = item;

            return (
              <Tr key={perpsMarketId} borderTopWidth="1px">
                <V3Market asset={marketName ?? ''} assetKey={marketSymbol ?? ''} />
                <MarkPrice markPrice={price} indexPrice={price} />
                <V3OpenInterest
                  longOI={longOI}
                  shortOI={shortOI}
                  totalOI={marketSize}
                  price={price}
                />
                <Skew skew={skewVal} />
                <V3Funding amount={hourlyFundingRate} time={1} />
                <V3Funding amount={currentFundingRate} time={24} />
                <V3Funding amount={currentFundingVelocity} time={24} />
                <V3Funding amount={fundingRateApr} time={24} />
              </Tr>
            );
          })}
        </Tbody>
        {loading && <Text>Data Loading</Text>}
        {error && <Text>Data Error</Text>}
      </Table>
    </TableContainer>
  );
};
