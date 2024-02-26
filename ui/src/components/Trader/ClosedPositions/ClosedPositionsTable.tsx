import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Flex,
  Text,
  type FlexProps,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { TableHeaderCell } from '../../Shared';
import { parseBytes32String } from 'ethers/lib/utils';
import { useTraderClosedPositions } from '../../../hooks';
import { ClosedPositionsLoading } from './ClosedPositionsLoading';
import { useEffect } from 'react';
import { ProcessedPositionData } from '../../../types';
import ClosedPositionItem from '../ClosedPositionItem';
import { PaginationWithLimit } from '../../Pagination';

interface ClosedPositionsTableProps extends FlexProps {
  actionsRef: React.RefObject<HTMLDivElement>;
  actionFilter: boolean;
  resetActionFilters: () => void;
  updateTradeId: (
    tradeId: string,
    timestampOpen: string,
    market: string,
    timestampClose?: string
  ) => void;
  currentPosition?: ProcessedPositionData;
  onSelectPosition: (position: ProcessedPositionData) => void;
}

export const ClosedPositionsTable = ({
  actionsRef,
  actionFilter,
  resetActionFilters,
  updateTradeId,
  currentPosition,
  onSelectPosition,
  ...props
}: ClosedPositionsTableProps) => {
  const [searchParams] = useSearchParams();

  const {
    processedClosedPositionData: processedData,
    traderClosedPositionQueryLoading: loading,
    traderClosedPositionQueryError: error,
    currentPage,
    currentLimit,
    changeCurrentPage,
    changeCurrentLimit,
    paginationConfig,
  } = useTraderClosedPositions({ isLiquidated: false });

  const closedPositionData = [...processedData.data];

  const noProcessedData = !processedData.data?.length;

  const tradeIdParam = searchParams.get('tradeId');

  useEffect(() => {
    if (
      !tradeIdParam ||
      !closedPositionData?.length ||
      currentPosition?.positionId === tradeIdParam
    )
      return;
    const position = closedPositionData.find((e) => e.positionId === tradeIdParam);
    if (position) {
      onSelectPosition(position);
    }
  }, [tradeIdParam, currentPosition, closedPositionData]);

  return (
    <>
      <TableContainer
        maxW="100%"
        mt={5}
        mb={1}
        borderColor="gray.900"
        borderWidth="1px"
        borderRadius="5px"
        sx={{
          borderCollapse: 'separate !important',
          borderSpacing: 0,
        }}
        overflowY="auto"
        bg="navy.700"
      >
        <>
          <Table bg="navy.700">
            <Thead>
              <Tr>
                <TableHeaderCell>Market</TableHeaderCell>
                <TableHeaderCell>Size</TableHeaderCell>
                <TableHeaderCell>Realised PnL</TableHeaderCell>
                <TableHeaderCell>Funding</TableHeaderCell>
                <TableHeaderCell>Fees</TableHeaderCell>
                <TableHeaderCell>Avg Entry Price</TableHeaderCell>
                <TableHeaderCell>Avg Exit Price</TableHeaderCell>
              </Tr>
            </Thead>
            <Tbody>
              {loading && (
                <>
                  <ClosedPositionsLoading />
                </>
              )}
              {closedPositionData?.map((position, index) => {
                const marketId = parseBytes32String(position.market);
                const isSelected = position.positionId === searchParams.get('tradeId');
                return (
                  <ClosedPositionItem
                    key={position.walletAddress?.concat(index.toString())}
                    position={position}
                    isSelected={isSelected}
                    onSelect={() => {
                      updateTradeId(position.positionId, position.openTimestamp, marketId);
                      onSelectPosition(position);
                    }}
                  />
                );
              })}
            </Tbody>
          </Table>
          <PaginationWithLimit
            currentPage={currentPage}
            currentLimit={currentLimit}
            onPageChange={changeCurrentPage}
            onLimitChange={changeCurrentLimit}
            config={paginationConfig}
            py={3}
            px={6}
            width="100%"
            justifyContent="center"
            bg="navy.700"
            borderTopWidth="1px"
          />

          {!loading && !error && noProcessedData && (
            <Flex width="100%" justifyContent="center" bg="navy.700" borderTopWidth="1px">
              <Text fontFamily="inter" fontWeight="500" fontSize="14px" color="gray.500" m={6}>
                No closed positions
              </Text>
            </Flex>
          )}
          {error && noProcessedData && (
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
