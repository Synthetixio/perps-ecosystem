import { TableContainer, Table, Thead, Tr, Td, Tbody, Text } from '@chakra-ui/react';
import { TableHeaderCell } from '../../../components';
import { V3BasePositionPrice } from '../v3BasePositionPrice';
import { V3BasePositionSize } from '../v3BasePositionSize';
import { LiquidationOrderBy, OrderDirection } from '../../../v3_perp/__generated__/graphql';
import { V3BasePositionPnl } from '../v3BasePositionPnl';
import { useSearchParams /* useNavigate */ } from 'react-router-dom';
import { useV3Baseliquidation } from '../../../v3_hooks/useV3BaseLiquidation';
import { V3BaseMarket } from '../../markets/v3BaseMarket';
import { V3BaseTableLoading } from '../../shared/loading/v3BaseTableLoading';
import { TrackingCodeIcon } from '../../shared/trackingCode/v3BaseTrackingCode';

interface V3BaseOwnerLiquidatedPositionTableProps {
  accountId: string;
}
export const V3BaseOwnerLiquidatedPositionTable = ({
  accountId,
}: V3BaseOwnerLiquidatedPositionTableProps) => {
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Extracting filters and sorting options from the URL
  const market = searchParams.get('markets')?.split(',') ?? undefined;
  const orderBy = (searchParams.get('orderby') as LiquidationOrderBy) ?? 'timestamp';
  const orderDirection = (searchParams.get('direction') as OrderDirection) ?? 'desc';

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
              {loading && <V3BaseTableLoading rows={5} columns={8} />}

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
                    positionAverageEntryPrice,
                    positionRealizedPnl,
                    positionDirection,
                    positionStatus,
                    positionId,
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
                  const isSelected = positionId === selectedPositionId;
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
                      <Td border={'none'}>{liquidationType}</Td>

                      {/* Amount Liquidated */}
                      <V3BasePositionPrice price={amountLiquidated.toNumber()} />

                      {/* Market Price At Liquidation */}
                      <V3BasePositionPrice price={marketPrice.toNumber()} />

                      {/* Source */}
                      <TrackingCodeIcon trackingCode={positionTrackingCode ?? ''} />
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
