import { TableContainer, Table, Thead, Tr, Tbody, Flex, Text } from '@chakra-ui/react';
import { useParams, useSearchParams } from 'react-router-dom';
import { TableHeaderCell } from '../Shared';
import { PositionsLoading } from './PositionsLoading';
import { PositionType, usePositions } from '../../hooks';
import { parseBytes32String } from 'ethers/lib/utils';
import OpenPositionItem from '../Trader/OpenPositionItem';
import { useEffect } from 'react';

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
}

export const PositionsTable = ({
  kwentaAccount,
  polynomialAccount,
  updateTradeId,
  currentPosition,
  onSelectPosition,
}: PositionsProps) => {
  const [searchParams] = useSearchParams();
  const { walletAddress } = useParams();

  const {
    data: walletData,
    error: walletError,
    loading: walletLoading,
  } = usePositions(walletAddress, 'wallet', false);

  const {
    data: kwentaData,
    error: kwentaError,
    loading: kwentaLoading,
  } = usePositions(kwentaAccount, 'kwenta', false);

  const {
    data: polyData,
    error: polyError,
    loading: polyLoading,
  } = usePositions(polynomialAccount, 'poly', false);

  const loading = walletLoading || kwentaLoading || polyLoading;
  const error = walletError ?? kwentaError ?? polyError;
  const data = [...(walletData || []), ...(kwentaData || []), ...(polyData || [])];

  const noData = !data.length;

  const tradeIdParam = searchParams.get('tradeId');

  useEffect(() => {
    if (!tradeIdParam || !data?.length || currentPosition?.id === tradeIdParam) return;
    const position = data.find((e) => e.id === tradeIdParam);
    if (position) {
      onSelectPosition(position);
    }
  }, [tradeIdParam, currentPosition, data]);

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
              {data?.map((position, index) => {
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
