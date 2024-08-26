import { TableContainer, Table, Thead, Tr, Tbody, Flex, Text } from '@chakra-ui/react';
import { useParams, useSearchParams } from 'react-router-dom';
import { TableHeaderCell } from '../Shared';
import { PositionsLoading } from './PositionsLoading';
import { PositionType } from '../../hooks';
import { parseBytes32String } from 'ethers/lib/utils';
import OpenPositionItem from '../Trader/OpenPositionItem';
import { useEffect } from 'react';
import { PositionStatsTable } from './PositionStatsTable';
import { useTraderOpenPositions } from '../../hooks/useTraderOpenPositions';

interface PositionsProps {
  kwentaAccount?: string;
  polynomialAccount?: string;
  actionsRef: React.RefObject<HTMLDivElement>;
  actionFilter: boolean;
  resetActionFilters: () => void;
  updateTradeId: (
    tradeId: string,
    timestampOpen: string,
    market: string,
    timestampClose?: string
  ) => void;
  currentPosition?: PositionType;
  onSelectPosition: (position: PositionType) => void;
  totalOpenPositions?: number;
  setTotalOpenPositions?: (total?: number) => void;
}

export const PositionsTable = ({
  kwentaAccount,
  polynomialAccount,
  updateTradeId,
  currentPosition,
  onSelectPosition,
  totalOpenPositions,
  setTotalOpenPositions,
}: PositionsProps) => {
  const [searchParams] = useSearchParams();
  const { walletAddress } = useParams();

  const { data: allData, error, loading } = useTraderOpenPositions(walletAddress, 'wallet', false);

  const noData = !allData;

  const tradeIdParam = searchParams.get('tradeId');

  useEffect(() => {
    if (!tradeIdParam || !allData || currentPosition?.id === tradeIdParam) return;
    const position = allData.find((e: { id: string }) => e.id === tradeIdParam);
    if (position) {
      onSelectPosition(position);
    }
  }, [tradeIdParam, currentPosition, allData]);

  useEffect(() => {
    if (totalOpenPositions) return;
    setTotalOpenPositions && setTotalOpenPositions(allData?.length ?? 0);
  }, [totalOpenPositions, allData]);

  return (
    <>
      <PositionStatsTable data={allData} loading={loading} />
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
                <TableHeaderCell>Mark Price</TableHeaderCell>
                <TableHeaderCell>Size</TableHeaderCell>
                <TableHeaderCell>Unrealized PNL</TableHeaderCell>
                <TableHeaderCell>Realized PNL</TableHeaderCell>
                <TableHeaderCell>Remaining Margin</TableHeaderCell>
                <TableHeaderCell>Funding</TableHeaderCell>
                <TableHeaderCell>Fees</TableHeaderCell>
                <TableHeaderCell>Avg Entry Price</TableHeaderCell>
                <TableHeaderCell>Liquidation Price</TableHeaderCell>
              </Tr>
            </Thead>
            <Tbody>
              {loading && (
                <>
                  <PositionsLoading />
                  <PositionsLoading />
                  <PositionsLoading />
                </>
              )}
              {allData?.map((position, index) => {
                const marketId = parseBytes32String(position.asset);
                const isSelected = position.id === searchParams.get('tradeId');
                return (
                  <OpenPositionItem
                    key={position.address?.concat(index.toString())}
                    position={position}
                    isSelected={isSelected}
                    onSelect={() => {
                      updateTradeId(position.id, position.openTimestamp, marketId);
                      onSelectPosition(position);
                    }}
                  />
                );
              })}
            </Tbody>
          </Table>

          {!loading && !error && noData && (
            <Flex width="100%" justifyContent="center" bg="navy.700" borderTopWidth="1px">
              <Text fontFamily="inter" fontWeight="500" fontSize="14px" color="gray.500" m={6}>
                No open positions
              </Text>
            </Flex>
          )}
          {error && noData && (
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
