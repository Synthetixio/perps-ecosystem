import { TableContainer, Table, Thead, Tr, Td, Tbody, Text, Box } from '@chakra-ui/react';
import { TableHeaderCell } from '../../../components';
import { V3BasePositionPrice } from '../v3BasePositionPrice';
import { useV3BasePosition } from '../../../v3_hooks/useV3BasePosition';
import {
  PositionOrderBy,
  OrderDirection,
  PositionStatus,
} from '../../../v3_perp/__generated__/graphql';
import { V3BasePositionPnl } from '../v3BasePositionPnl';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { V3BaseMarket } from '../../markets/v3BaseMarket';

export const V3BaseAccountClosedPositionTable = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { accountId } = useParams();

  // Extracting filters and sorting options from the URL
  const market = searchParams.get('markets')?.split(',') ?? undefined;
  const orderBy = (searchParams.get('orderby') as PositionOrderBy) ?? 'lastTradeTimestamp';
  const orderDirection = (searchParams.get('direction') as OrderDirection) ?? 'desc';

  const currentPage = parseInt(searchParams.get('page') ?? '1', 10);
  const itemsPerPage = 10;

  // Calculate the offset for pagination
  const skip = (currentPage - 1) * itemsPerPage;

  // need URL params to update the filter
  const positionFilters = {
    status: PositionStatus.CLOSED,
    market_in: market,
    account: accountId,
  };

  const { error, loading, data } = useV3BasePosition({
    first: itemsPerPage,
    skip,
    orderBy,
    orderDirection,
    positionFilters,
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
                <TableHeaderCell>Average Entry Price</TableHeaderCell>
                <TableHeaderCell>Exit Price</TableHeaderCell>
                <TableHeaderCell>Realized PNL</TableHeaderCell>
                <TableHeaderCell>Total Fees</TableHeaderCell>
                <TableHeaderCell>Accrued Funding</TableHeaderCell>
                <TableHeaderCell>Total Trades</TableHeaderCell>
                <TableHeaderCell>Total Volume</TableHeaderCell>
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
                    averageEntryPrice,
                    lastFillPrice,
                    exitPrice,
                    size,
                    notionalAmount,
                    accruedFunding,
                    realizedPnl,
                    unrealizedPnl,
                    unrealizedPnlFE,
                    status,
                    direction,
                    totalFees,
                    totalTrades,
                    totalVolume,
                    trackingCode,
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
                        direction={direction}
                      />

                      {/* Average Entry Price */}
                      <V3BasePositionPrice price={averageEntryPrice.toNumber()} />

                      {/* Exit Price or Last Fill Price */}
                      <V3BasePositionPrice
                        price={exitPrice ? exitPrice.toNumber() : lastFillPrice.toNumber()}
                      />

                      {/* Realized PNL */}
                      <V3BasePositionPnl pnl={realizedPnl.toNumber()} />

                      {/* Total Fees */}
                      <V3BasePositionPnl pnl={totalFees.toNumber()} />

                      {/* Accrued Funding */}
                      <V3BasePositionPnl pnl={accruedFunding.toNumber()} />

                      {/* Total Trades */}
                      <Td>{totalTrades.toNumber()}</Td>

                      {/* Total Volume */}
                      <V3BasePositionPrice price={totalVolume.toNumber()} />

                      {/* Source */}
                      <Td>{trackingCode}</Td>
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
