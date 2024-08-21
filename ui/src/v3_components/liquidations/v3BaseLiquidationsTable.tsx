import { TableContainer, Table, Thead, Tr, Tbody, Flex, Text } from '@chakra-ui/react';
import { Currency, TableHeaderCell, Size, Age } from '../../components/Shared';
import { V3Market } from '../markets/v3Market';
import { wei } from '@synthetixio/wei';
import { useV3Baseliquidation } from '../../v3_hooks/useV3BaseLiquidation';
import { useParams, useSearchParams } from 'react-router-dom';
import { LiquidationOrderBy, OrderDirection } from '../../v3_perp/__generated__/graphql';

export const V3BaseLiquidationsTable = () => {
  const [searchParams] = useSearchParams();

  // Extracting filters and sorting options from the URL
  const market = searchParams.get('markets')?.split(',') ?? undefined;
  const orderBy = (searchParams.get('orderby') as LiquidationOrderBy) ?? 'timestamp';
  const orderDirection = (searchParams.get('direction') as OrderDirection) ?? 'desc';
  const { accountId } = useParams();

  // URL params to update the filter
  const liquidationFilters = {
    market_in: market,
    account: accountId,
  };

  const { error, loading, data } = useV3Baseliquidation({
    first: 100,
    orderBy,
    orderDirection,
    liquidationFilters,
  });

  return (
    <>
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
              <TableHeaderCell>Age</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Size</TableHeaderCell>
            </Tr>
          </Thead>
          <Tbody>
            {loading && (
              <>
                <Text>Data Loading</Text>
              </>
            )}

            {data?.map(
              ({
                id,
                timestamp,
                accountId,
                marketId,
                amountLiquidated,
                currentPositionSize,
                marketName,
                marketSymbol,
                marketPrice,
              }) => {
                return (
                  <Tr key={id} borderTopWidth="1px">
                    <V3Market asset={marketName} assetKey={marketSymbol} />
                    <Age timestamp={timestamp} />
                    <Currency amount={wei(marketPrice, 18, true).toNumber() || null} />
                    <Size
                      size={amountLiquidated.toNumber()}
                      marketPrice={marketPrice ? wei(marketPrice, 18, true).toNumber() : null}
                    />
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
        {((!loading && data?.length === 0) || error) && (
          <Flex width="100%" justifyContent="center" bg="navy.700" borderTopWidth="1px">
            <Text fontFamily="inter" fontWeight="500" fontSize="14px" color="gray.500" m={6}>
              No Liquidations
            </Text>
          </Flex>
        )}
      </TableContainer>
    </>
  );
};
