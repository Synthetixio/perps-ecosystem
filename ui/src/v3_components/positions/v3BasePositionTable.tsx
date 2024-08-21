import { TableContainer, Table, Thead, Tr, Td, Tbody, Text, Box } from '@chakra-ui/react';
import { TableHeaderCell, PnL } from '../../components/Shared';
import { V3BasePositionPrice } from './v3BasePositionPrice';
import { useV3BasePosition } from '../../v3_hooks/useV3BasePosition';
import { V3BasePositionSize } from './v3BasePositionSize';
import { V3BaseAccountAddress } from './v3BaseAccountAddress';
import {
  OrderDirection,
  PositionOrderBy,
  PositionStatus,
} from '../../v3_perp/__generated__/graphql';
import { V3BasePositionPnl } from './v3BasePositionPnl';
import { useSearchParams } from 'react-router-dom';
import { V3BaseMarket } from '../markets/v3BaseMarket';
import { wei } from '@synthetixio/wei';

export const V3BasePositionTable = () => {
  const [searchParams] = useSearchParams();

  // Extracting filters and sorting options from the URL
  const market = searchParams.get('markets')?.split(',') ?? undefined;
  const orderBy = (searchParams.get('orderby') as PositionOrderBy) ?? 'lastTradeTimestamp';
  const orderDirection = (searchParams.get('direction') as OrderDirection) ?? 'desc';
  const minNotionalAmount = searchParams.get('min') ?? undefined;
  const maxNotionalAmount = searchParams.get('max') ?? undefined;

  // need URL params to update the filter
  const positionFilters = {
    status: PositionStatus.OPEN,
    market_in: market,
    notionalAmount_gte: minNotionalAmount ? wei(minNotionalAmount).toBN().toString() : undefined,
    notionalAmount_lte: maxNotionalAmount ? wei(maxNotionalAmount).toBN().toString() : undefined,
  };

  const { error, loading, data } = useV3BasePosition({
    first: 100,
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
                <TableHeaderCell>Market Price</TableHeaderCell>
                <TableHeaderCell>Size</TableHeaderCell>
                <TableHeaderCell>Accrued Funding</TableHeaderCell>
                <TableHeaderCell>Average Entry Price</TableHeaderCell>
                <TableHeaderCell>Realized PNL</TableHeaderCell>
                <TableHeaderCell>Unrealized PNL</TableHeaderCell>
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
                      {/* Market Price */}
                      <V3BasePositionPrice price={marketPrice.toNumber()} />
                      {/* Size Val */}
                      <V3BasePositionSize
                        size={size.toNumber()}
                        marketPrice={marketPrice.toNumber()}
                      />
                      {/* Accrued Funding */}
                      <V3BasePositionPnl pnl={accruedFunding.toNumber()} />
                      {/* Average Entry Price */}
                      <V3BasePositionPrice price={averageEntryPrice.toNumber()} />
                      {/* Realized PNL */}
                      <V3BasePositionPnl pnl={realizedPnl.toNumber()} />
                      {/* Unrealized PNL */}
                      <PnL pnl={unrealizedPnlFE.toNumber()} />
                      {/* Source */}
                      <Td>{trackingCode}</Td>
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
