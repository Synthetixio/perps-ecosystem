import { TableContainer, Table, Thead, Tr, Tbody, Text, Td } from '@chakra-ui/react';
import { MarkPrice, Skew, TableHeaderCell } from '../../components/Shared';
import { V3Market } from './v3Market';
import { V3Funding } from './v3Funding';
import { V3OpenInterest } from './v3OpenInterest';
import { useV3BaseMarket } from '../../v3_hooks/useV3BaseMarket';
import { MarketOrderBy, OrderDirection } from '../../v3_perp/__generated__/graphql';
import { V3BaseTableLoading } from '../shared/loading/v3BaseTableLoading';

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
          {loading && <V3BaseTableLoading rows={5} columns={8} />}

          {!loading && error && (
            <Tr borderTopWidth="1px">
              <Td border={'none'} colSpan={8} textAlign="center" borderColor="gray.900">
                <Text fontFamily="inter" fontWeight="500" fontSize="14px" color="gray.500" m={6}>
                  Error Loading Market Data. Check Back Later
                </Text>
              </Td>
            </Tr>
          )}

          {!loading && !error && data?.length === 0 && (
            <Tr borderTopWidth="1px">
              <Td border={'none'} colSpan={8} textAlign="center">
                <Text fontFamily="inter" fontWeight="500" fontSize="14px" color="gray.500" m={6}>
                  No Market Data Available. Check Back Later
                </Text>
              </Td>
            </Tr>
          )}
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
