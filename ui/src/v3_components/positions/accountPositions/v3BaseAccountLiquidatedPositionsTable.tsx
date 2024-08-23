import { TableContainer, Table, Thead, Tr, Td, Tbody, Text, Box } from '@chakra-ui/react';
import { TableHeaderCell } from '../../../components';
import { V3BasePositionPrice } from '../v3BasePositionPrice';
import { V3BasePositionSize } from '../v3BasePositionSize';
import { LiquidationOrderBy, OrderDirection } from '../../../v3_perp/__generated__/graphql';
import { V3BasePositionPnl } from '../v3BasePositionPnl';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useV3Baseliquidation } from '../../../v3_hooks/useV3BaseLiquidation';
import { V3BaseMarket } from '../../markets/v3BaseMarket';

export const V3BaseAccountLiquidatedPositionTable = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Extracting filters and sorting options from the URL
  const market = searchParams.get('markets')?.split(',') ?? undefined;
  const orderBy = (searchParams.get('orderby') as LiquidationOrderBy) ?? 'timestamp';
  const orderDirection = (searchParams.get('direction') as OrderDirection) ?? 'desc';
  const { accountId } = useParams();

  // need URL params to update the filter
  const liquidationFilters = {
    market_in: market,
    account: accountId,
  };

  const { error, loading, data } = useV3Baseliquidation({
    first: 10,
    orderBy,
    orderDirection,
    liquidationFilters,
  });

  const handleRowClick = (positionId: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('positionId', positionId);
    setSearchParams(newParams);
    navigate({
      search: `?${newParams.toString()}`,
    });
  };

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
        <Text>No Active Order Data Available</Text>
      </Box>
    );
  }

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
        <>
          <Table bg="navy.700">
            <Thead>
              <Tr>
                <TableHeaderCell>Market</TableHeaderCell>
                <TableHeaderCell>Size</TableHeaderCell>
                <TableHeaderCell>Realized PNL</TableHeaderCell>
                <TableHeaderCell>Average Entry Price</TableHeaderCell>
                <TableHeaderCell>Liquidation Type</TableHeaderCell>
                <TableHeaderCell>Amount Liquidated</TableHeaderCell>
                <TableHeaderCell>Market Price at Liquidation</TableHeaderCell>
                <TableHeaderCell>Source</TableHeaderCell>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map(
                (
                  {
                    id,
                    marketName,
                    marketSymbol,
                    marketPrice,
                    positionAverageEntryPrice,
                    positionRealizedPnl,
                    positionDirection,
                    positionStatus,
                    liquidationType,
                    amountLiquidated,
                    currentPositionSize,
                    notionalAmount,
                    positionTrackingCode,
                    accountId,
                    marketId,
                  },
                  index: number
                ) => {
                  return (
                    <Tr
                      key={accountId?.concat(index.toString())}
                      borderTopWidth="1px"
                      onClick={() => handleRowClick(id)}
                      _hover={{ cursor: 'pointer', backgroundColor: 'gray.800' }}
                    >
                      {/* Market and Direction */}
                      <V3BaseMarket
                        asset={marketName}
                        assetKey={marketSymbol}
                        isPosition={true}
                        direction={positionDirection ?? 'LIQUIDATED'}
                      />

                      {/* Size Val */}
                      <V3BasePositionSize
                        size={currentPositionSize.toNumber()}
                        marketPrice={marketPrice.toNumber()}
                      />

                      {/* Realized PNL */}
                      <V3BasePositionPnl pnl={positionRealizedPnl?.toNumber() ?? 0} />

                      {/* Average Entry Price */}
                      <V3BasePositionPrice price={positionAverageEntryPrice?.toNumber() ?? 0} />

                      {/* Liquidation Type */}
                      <Td>{liquidationType}</Td>

                      {/* Amount Liquidated */}
                      <V3BasePositionPrice price={amountLiquidated.toNumber()} />

                      {/* Market Price At Liquidation */}
                      <V3BasePositionPrice price={marketPrice.toNumber()} />

                      {/* Source */}
                      <Td>{positionTrackingCode}</Td>
                    </Tr>
                  );
                }
              )}
            </Tbody>
          </Table>
        </>
      </TableContainer>
    </>
  );
};
