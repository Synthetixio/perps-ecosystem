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
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { TableHeaderCell, PnL, Market } from '../Shared';
import { PositionsLoading } from './PositionsLoading';
import { useTraderPnl } from '../../hooks';
import { wei } from '@synthetixio/wei';
import { parseBytes32String } from 'ethers/lib/utils';
import { Action } from '../Shared/Action';

export const ClosedPositionsTable = ({ ...props }: FlexProps) => {
  const { walletAddress } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  console.log(navigate);
  const updateTradeId = (
    tradeId: string,
    timestampOpen: string,
    market: string,
    timestampClose?: string
  ) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('tradeId', tradeId.toString());
    newParams.set('openTimestamp', timestampOpen.toString());
    newParams.set('markets', market.toString());
    timestampClose
      ? newParams.set('closeTimestamp', timestampClose.toString())
      : newParams.delete('closeTimestamp');
    setSearchParams(newParams);
  };

  const { processedData, loading, error } = useTraderPnl(walletAddress, 'M');

  const closedPositionData = [...processedData].toReversed();

  const noProcessedData = !processedData?.length;

  return (
    <>
      <TableContainer
        width="100%"
        minW={500}
        height={500}
        my={5}
        borderColor="gray.900"
        borderWidth="1px"
        borderRadius="5px"
        sx={{
          borderCollapse: 'separate !important',
          borderSpacing: 0,
        }}
        overflowY="auto"
      >
        <>
          <Table bg="navy.700">
            <Thead>
              <Tr>
                <TableHeaderCell>Position</TableHeaderCell>
                <TableHeaderCell>Market</TableHeaderCell>
                <TableHeaderCell>PNL</TableHeaderCell>

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
                  },
                  index
                ) => {
                  const marketId = parseBytes32String(market);
                  return (
                    <Tr key={walletAddress?.concat(index.toString())} borderTopWidth="1px">
                      {/* Market and Direction */}
                      <Action
                        label={long ? 'Long' : 'Short'}
                        timestamp={parseInt(openTimestamp)}
                        txHash={txHash}
                      />
                      <Market
                        asset={market}
                        leverage={wei(leverage, 18, true).toNumber()}
                        direction={long ? 'LONG' : 'SHORT'}
                      />

                      <PnL pnl={pnl} />

                      <Td border="none">
                        <Button
                          width={50}
                          onClick={() => {
                            updateTradeId(positionId, openTimestamp, marketId, closeTimestamp);
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
    </>
  );
};
