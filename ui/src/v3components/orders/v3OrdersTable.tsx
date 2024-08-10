import { TableContainer, Table, Thead, Tr, Td, Tbody, Text, Box } from '@chakra-ui/react';
import { TableHeaderCell, PnL, Size, WalletTooltip } from '../../components/Shared';
import { V3Market } from '../markets/v3Market';
import { useV3OrdersSettled } from '../../v3hooks/useV3OrdersSettled';
import { V3Price } from './v3OrderPrice';
import { V3OrderType } from './v3OrderType';

export const V3OrdersTable = () => {
  const { error, loading, orderData } = useV3OrdersSettled();

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

  if (!orderData?.length) {
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
                <TableHeaderCell>Direction</TableHeaderCell>
                <TableHeaderCell>Market Price</TableHeaderCell>
                <TableHeaderCell>Fill Price</TableHeaderCell>
                <TableHeaderCell>Size</TableHeaderCell>
                <TableHeaderCell>Accrued Funding</TableHeaderCell>
                <TableHeaderCell>Position PNL</TableHeaderCell>
                <TableHeaderCell>Source</TableHeaderCell>
              </Tr>
            </Thead>
            <Tbody>
              {orderData?.map(
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
                    isOpen,
                    orderPnl,
                    totalFees,
                    referralFees,
                    collectedFees,
                    settlementReward,
                    trackingCode,
                    settler,
                  },
                  index: number
                ) => {
                  return (
                    <Tr key={accountId?.concat(index.toString())} borderTopWidth="1px">
                      {/* Market and Direction */}
                      <V3Market
                        asset={marketName ?? ''}
                        assetKey={marketSymbol ?? ''}
                        direction={newSize.toNumber() > 0 ? 'LONG' : 'SHORT'}
                      />
                      <V3OrderType size={newSize.toNumber()} />
                      {/* Market Price */}
                      <V3Price price={marketPrice} />
                      {/* Fill Price */}
                      <V3Price price={fillPrice.toNumber()} />
                      <Size size={newSize.toNumber()} marketPrice={fillPrice.toNumber()} />

                      {/* Accrued Funding */}
                      <PnL pnl={accruedFunding.toNumber()} />
                      {/* PNL */}
                      <PnL
                        pnl={orderPnl.orderSettledPnl.toNumber()}
                        pnlPercentage={orderPnl.orderSettledPercentage.toNumber()} //
                      />

                      {/* Source */}
                      <Td>{trackingCode}</Td>
                      {/* Address */}
                      <WalletTooltip address={accountId} />
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
