import { TableContainer, Table, Thead, Tr, Td, Tbody, Text, Box } from '@chakra-ui/react';
import { TableHeaderCell } from '../../../components/Shared';
import { useV3BaseTrade } from '../../../v3_hooks/useV3BaseTrade';
import { OrderDirection, TradeOrderBy } from '../../../v3_perp/__generated__/graphql';
import { useParams, useSearchParams } from 'react-router-dom';
import { V3BaseMarket } from '../../markets/v3BaseMarket';
import { V3BasePositionPrice } from '../../positions/v3BasePositionPrice';
import { V3BasePositionSize } from '../../positions/v3BasePositionSize';
import { V3BaseTradeDetails } from '../tradeDetails/v3BaseTradeDetails';
import { V3BaseAccountAddress } from '../../positions/v3BaseAccountAddress';
import { wei } from '@synthetixio/wei';

export const V3BaseAccountTradeTable = () => {
  const [searchParams] = useSearchParams();
  const { accountId } = useParams();

  // Extracting filters and sorting options from the URL
  const market = searchParams.get('markets')?.split(',') ?? undefined;
  const orderBy = (searchParams.get('orderby') as TradeOrderBy) ?? 'timestamp';
  const orderDirection = (searchParams.get('direction') as OrderDirection) ?? 'desc';
  const minVolumeAmount = searchParams.get('min') ?? undefined;
  const maxVolumeAmount = searchParams.get('max') ?? undefined;
  const positionId = searchParams.get('positionId') ?? undefined;

  // Construct the filters based on URL params
  const tradeFilters = {
    account: accountId,
    position: positionId,
    market_in: market,
    volume_gte: minVolumeAmount ? wei(minVolumeAmount).toBN().toString() : undefined,
    volume_lte: maxVolumeAmount ? wei(maxVolumeAmount).toBN().toString() : undefined,
  };
  const { error, loading, data } = useV3BaseTrade({
    first: 100,
    orderBy,
    orderDirection,
    tradeFilters,
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
                <TableHeaderCell>Trade Details</TableHeaderCell>
                <TableHeaderCell>Market</TableHeaderCell>
                <TableHeaderCell>Fill Price</TableHeaderCell>
                <TableHeaderCell>Size</TableHeaderCell>
                <TableHeaderCell>Fees</TableHeaderCell>
                <TableHeaderCell>Source</TableHeaderCell>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map(
                (
                  {
                    id,
                    timestamp,
                    marketName,
                    marketId,
                    marketPrice,
                    marketSymbol,
                    accountId,
                    fillPrice,
                    accruedFunding,
                    sizeDelta,
                    newSize,
                    pnl,
                    totalFees,
                    referralFees,
                    collectedFees,
                    settlementReward,
                    trackingCode,
                    transactionHash,
                    settler,
                    tradeType,
                    notionalAmount,
                    volume,
                  },
                  index: number
                ) => {
                  return (
                    <Tr key={accountId?.concat(index.toString())} borderTopWidth="1px">
                      {/* Market and Direction */}
                      <V3BaseTradeDetails
                        label={tradeType}
                        txHash={transactionHash}
                        timestamp={timestamp}
                      />
                      <V3BaseMarket asset={marketName ?? ''} assetKey={marketSymbol ?? ''} />

                      {/* Fill Price */}
                      <V3BasePositionPrice price={fillPrice.toNumber()} />
                      {/* Size - Notional Value and Volume */}
                      <V3BasePositionSize
                        size={sizeDelta.toNumber()}
                        marketPrice={fillPrice.toNumber()}
                      />

                      {/* Fees */}
                      <V3BasePositionPrice price={totalFees.toNumber()} />

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
