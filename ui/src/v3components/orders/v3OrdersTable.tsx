import { TableContainer, Table, Thead, Tr, Td, Tbody, Flex, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { TableHeaderCell, PnL, Size, WalletTooltip } from '../../components/Shared';
import { V3Market } from '../markets/v3Market';
import { useV3OrdersSettled } from '../../v3hooks/useV3OrdersSettled';
import { useState, useEffect, useMemo } from 'react';
import { V3Price } from './v3OrderPrice';
import { V3OrderType } from './v3OrderType';

export const V3OrdersTable = () => {
  const [storedParams, setStoredParams] = useState<string>('');
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const [searchParams] = useSearchParams();
  const currentParams = useMemo(() => searchParams.toString(), [searchParams]);

  const { data, error, loading, orderData } = useV3OrdersSettled();
  const noData = !data?.orderSettleds.length

  // we are loading lots of data, only show loading component on inital render or when params have changed
  useEffect(() => {
    if (storedParams !== currentParams) {
      setShowLoading(true);
      setStoredParams(currentParams);
    }
  }, [currentParams, storedParams]);

  useEffect(() => {
    if (data) {
      setShowLoading(false);
    }
  }, [data]);

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
              {showLoading && (
                <>
                  <Text>Data Loading</Text>
                </>
              )}
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
                        asset={marketName ?? ""}
                        assetKey={marketSymbol ?? ""}
                        direction={newSize.toNumber() > 0 ? 'LONG' : 'SHORT'}
                      />
                      <V3OrderType size={newSize.toNumber()} />
                      {/* Market Price */}
                      <V3Price
                        price={marketPrice}
                      />
                       {/* Fill Price */}
                       <V3Price
                        price={fillPrice.toNumber()}
                      />
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

          {!loading && !error && noData && (
            <Flex width="100%" justifyContent="center" bg="navy.700" borderTopWidth="1px">
              <Text fontFamily="inter" fontWeight="500" fontSize="14px" color="gray.500" m={6}>
                No open positions
              </Text>
            </Flex>
          )}

          {error && noData && !loading && (
            <Flex width="100%" justifyContent="center" bg="navy.700" borderTopWidth="1px">
              <Text fontFamily="inter" fontWeight="500" fontSize="14px" color="gray.500" m={6}>
                We&apos;re having problem loading the position data
              </Text>
            </Flex>
          )}
        </>
      </TableContainer>
    </>
  );
};
