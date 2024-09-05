import { TableContainer, Table, Thead, Tr, Td, Tbody, Text } from '@chakra-ui/react';
import { TableHeaderCell, PnL } from '../../../components';
import { V3BasePositionPrice } from '../v3BasePositionPrice';
import { useV3BasePosition } from '../../../v3_hooks/useV3BasePosition';
import { V3BasePositionSize } from '../v3BasePositionSize';
import {
  PositionOrderBy,
  OrderDirection,
  PositionStatus,
} from '../../../v3_perp/__generated__/graphql';
import { V3BasePositionPnl } from '../v3BasePositionPnl';
import { useSearchParams, /* useNavigate */ } from 'react-router-dom';
import { V3BaseMarket } from '../../markets/v3BaseMarket';
import { V3BaseTableLoading } from '../../shared/loading/v3BaseTableLoading';
import { TrackingCodeIcon } from '../../shared/trackingCode/v3BaseTrackingCode';
import { V3BasePositionFees } from '../v3BasePositionFees';

interface V3BaseOwnerOpenPositionTableProps {
  accountId: string;
}

export const V3BaseOwnerOpenPositionTable = ({ accountId }: V3BaseOwnerOpenPositionTableProps) => {
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Extracting filters and sorting options from the URL
  const market = searchParams.get('markets')?.split(',') ?? undefined;
  const orderBy = (searchParams.get('orderby') as PositionOrderBy) ?? 'lastTradeTimestamp';
  const orderDirection = (searchParams.get('direction') as OrderDirection) ?? 'desc';

  // need URL params to update the filter
  const positionFilters = {
    status: PositionStatus.OPEN,
    market_in: market,
    account: accountId,
  };

  const { error, loading, data } = useV3BasePosition({
    first: 10,
    orderBy,
    orderDirection,
    positionFilters,
  });

   // Get the selected positionId from the searchParams
   const selectedPositionId = searchParams.get('positionId');

  const handleRowClick = (positionId: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    
    if (selectedPositionId === positionId) {
      // Clear the filter if the same position is clicked again
      newParams.delete('positionId');
    } else {
      // Set the positionId filter
      newParams.set('positionId', positionId);
    }

    setSearchParams(newParams);
    // navigate({
    //   search: `?${newParams.toString()}`,
    // });
  };

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
                <TableHeaderCell>Unrealized PNL</TableHeaderCell>
                <TableHeaderCell>Realized PNL</TableHeaderCell>
                <TableHeaderCell>Average Entry Price</TableHeaderCell>
                <TableHeaderCell>Total Fees</TableHeaderCell>
                <TableHeaderCell>Accrued Funding</TableHeaderCell>
                <TableHeaderCell>Source</TableHeaderCell>
              </Tr>
            </Thead>
            <Tbody>
              {loading && <V3BaseTableLoading rows={5} columns={9} />}

              {!loading && error && (
                <Tr borderTopWidth="1px">
                  <Td border={'none'} colSpan={8} textAlign="center" borderColor="gray.900">
                    <Text
                      fontFamily="inter"
                      fontWeight="500"
                      fontSize="14px"
                      color="gray.500"
                      m={6}
                    >
                      Error loading position data. Check back later
                    </Text>
                  </Td>
                </Tr>
              )}

              {!loading && !error && data?.length === 0 && (
                <Tr borderTopWidth="1px">
                  <Td border={'none'} colSpan={8} textAlign="center">
                    <Text
                      fontFamily="inter"
                      fontWeight="500"
                      fontSize="14px"
                      color="gray.500"
                      m={6}
                    >
                      No Position Data Available. Check Back Later
                    </Text>
                  </Td>
                </Tr>
              )}
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
                    realizedPnlWithFees,
                    unrealizedPnl,
                    unrealizedPnlFE,
                    totalFees,
                    trackingCode,
                    accountId,
                    marketId,
                    direction,
                  },
                  index: number
                ) => {
                  const isSelected = id === selectedPositionId;
                  return (
                    <Tr
                      key={accountId?.concat(index.toString())}
                      borderTopWidth="1px"
                      onClick={() => handleRowClick(id)}
                      _hover={{ cursor: 'pointer', backgroundColor: 'gray.800' }}
                      bg={isSelected ? 'blue.900' : 'transparent'}
                    >
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
                      {/* Unrealized PNL */}
                      <PnL pnl={unrealizedPnlFE.toNumber()} />
                      {/* Realized PNL */}
                      <V3BasePositionPnl pnl={realizedPnlWithFees.toNumber()} />
                      {/* Average Entry Price */}
                      <V3BasePositionPrice price={averageEntryPrice.toNumber()} />
                      {/* Total Fees */}
                      <V3BasePositionFees fees={totalFees.toNumber()} />
                      {/* Accrued Funding */}
                      <V3BasePositionPnl pnl={accruedFunding.toNumber()} />
                      {/* Source */}
                      <TrackingCodeIcon trackingCode={trackingCode} />
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
