import { TableContainer, Table, Thead, Tr, Tbody, Text, Box, Heading } from '@chakra-ui/react';
import { TableHeaderCell } from '../../../components/Shared';
import { V3BasePositionPrice } from '../v3BasePositionPrice';
import { useV3BasePosition } from '../../../v3_hooks/useV3BasePosition';
import { V3BaseAccountAddress } from '../v3BaseAccountAddress';
import {
  OrderDirection,
  PositionOrderBy,
  PositionStatus,
} from '../../../v3_perp/__generated__/graphql';
import { V3BasePositionPnl } from '../v3BasePositionPnl';
import { V3BaseMarket } from '../../markets/v3BaseMarket';

export const V3BaseLargestLossPositionTable = () => {
  const currentTimestamp = Math.floor(Date.now() / 1000); // Current Unix timestamp in seconds
  const timestampOneDayAgo = currentTimestamp - 259200; // Subtract 86400 seconds (24 hours)

  const orderBy = 'realizedPnl' as PositionOrderBy;
  const orderDirection = 'asc' as OrderDirection;

  // need URL params to update the filter
  const positionFilters = {
    status: PositionStatus.CLOSED,
    closeTimestamp_gte: timestampOneDayAgo.toString(),
  };

  const { error, loading, data } = useV3BasePosition({
    first: 3,
    orderBy,
    orderDirection,
    positionFilters,
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
        <Text>No Active Order Data Available</Text>
      </Box>
    );
  }

  return (
    <>
      <TableContainer
        maxW="100%"
        my={6}
        p={1}
        borderColor="gray.900"
        borderWidth="1px"
        borderRadius="5px"
        sx={{
          borderCollapse: 'separate !important',
          borderSpacing: 0,
        }}
      >
        <Heading fontSize="24px" p={2}>
          Largest Loss
        </Heading>
        <>
          <Table bg="navy.700">
            <Thead>
              <Tr>
                <TableHeaderCell>Market</TableHeaderCell>
                <TableHeaderCell>Average Entry Price</TableHeaderCell>
                <TableHeaderCell>PNL</TableHeaderCell>
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
                    entryPrice,
                    size,
                    notionalAmount,
                    accruedFunding,
                    realizedPnl,
                    unrealizedPnl,
                    unrealizedPnlFE,
                    trackingCode,
                    accountId,
                    marketId,
                    direction,
                  },
                  index: number
                ) => {
                  return (
                    <Tr key={accountId?.concat(index.toString())} borderTopWidth="1px">
                      {/* Market and Direction */}
                      <V3BaseMarket
                        asset={marketName}
                        assetKey={marketSymbol}
                        isPosition={true}
                        direction={direction}
                      />
                      {/* Entry Price */}
                      <V3BasePositionPrice price={averageEntryPrice.toNumber()} />

                      {/* Realized PNL */}
                      <V3BasePositionPnl pnl={realizedPnl.toNumber()} />

                      {/* Address */}
                      <V3BaseAccountAddress address={accountId} />
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