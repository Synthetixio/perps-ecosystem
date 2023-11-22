import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Flex,
  Text,
  Button,
  Td,
  type FlexProps,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { TableHeaderCell, PnL, Market, Funding } from '../Shared';
import { PositionsLoading } from './PositionsLoading';
import { wei } from '@synthetixio/wei';
import { parseBytes32String } from 'ethers/lib/utils';
import { Action } from '../Shared/Action';
import { useTraderClosedPositions } from '../../hooks';
import { ClosedPositionsPagination } from './ClosedPositionsPagination';

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
}

export const ClosedPositionsTable = ({
  actionsRef,
  actionFilter,
  resetActionFilters,
  updateTradeId,
  ...props
}: ClosedPositionsTableProps) => {
  const [searchParams] = useSearchParams();

  const {
    processedClosedPositionData: processedData,
    traderClosedPositionQueryLoading: loading,
    traderClosedPositionQueryError: error,
  } = useTraderClosedPositions();

  const closedPositionData = [...processedData.data];

  const noProcessedData = !processedData.data?.length;

  const hasNextPage = processedData.hasNextPage;

  return (
    <>
      <TableContainer
        width="100%"
        minW={500}
        height={500}
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
                <TableHeaderCell>Position</TableHeaderCell>
                <TableHeaderCell>Market</TableHeaderCell>
                <TableHeaderCell>PNL</TableHeaderCell>
                <TableHeaderCell>Funding</TableHeaderCell>
                <TableHeaderCell>Trades</TableHeaderCell>
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
              {closedPositionData?.map(
                (
                  {
                    pnl,
                    closeTimestamp,
                    openTimestamp,
                    market,
                    long,
                    txHash,
                    leverage,
                    positionId,
                    walletAddress,
                    trades,
                    liquidated,
                    funding,
                  },
                  index
                ) => {
                  const marketId = parseBytes32String(market);
                  return (
                    <Tr key={walletAddress?.concat(index.toString())} borderTopWidth="1px">
                      {/* Market and Direction */}
                      <Action
                        label={`${long ? 'Long' : 'Short'}${liquidated ? ' Liquidated' : ''} `}
                        timestamp={parseInt(closeTimestamp)}
                        txHash={txHash}
                      />
                      <Market
                        asset={market}
                        leverage={wei(leverage, 18, true).toNumber()}
                        direction={long ? 'LONG' : 'SHORT'}
                      />

                      <PnL pnl={pnl} />

                      <Funding amount={funding} />

                      <Td border="none">
                        <Button
                          width={50}
                          variant="outline"
                          colorScheme={positionId === searchParams.get('tradeId') ? 'teal' : 'gray'}
                          onClick={() => {
                            actionFilter
                              ? resetActionFilters()
                              : updateTradeId(positionId, openTimestamp, marketId, closeTimestamp);
                          }}
                        >
                          {trades}
                        </Button>
                      </Td>
                    </Tr>
                  );
                }
              )}
            </Tbody>
          </Table>

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
      <Flex justifyContent="flex-end" width="100%" p="1">
        <ClosedPositionsPagination pageParam="pg" hasNextPage={hasNextPage} />
      </Flex>
    </>
  );
};
