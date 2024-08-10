import { TableContainer, Table, Thead, Tr, Tbody, Flex, Text } from '@chakra-ui/react';
import { Currency, TableHeaderCell, Size, Age } from '../../components/Shared';
import { useLiquidationsV3 } from '../../v3hooks/useV3Liquidations';
import { V3Market } from '../markets/v3Market';
import { wei } from '@synthetixio/wei';

export const V3LiquidationsTable = () => {
  const { loading, error, v3Liquidations } = useLiquidationsV3();

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
        <Table bg="navy.700">
          <Thead>
            <Tr>
              <TableHeaderCell>Market</TableHeaderCell>
              <TableHeaderCell>Age</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Size</TableHeaderCell>
            </Tr>
          </Thead>
          <Tbody>
            {loading && (
              <>
                <Text>Data Loading</Text>
              </>
            )}

            {v3Liquidations?.map(
              ({
                id,
                timestamp,
                accountId,
                marketId,
                amountLiquidated,
                currentPositionSize,
                marketName,
                marketSymbol,
                marketPrice,
              }) => {
                return (
                  <Tr key={id} borderTopWidth="1px">
                    <V3Market asset={marketName ?? ''} assetKey={marketSymbol ?? ''} />
                    <Age timestamp={timestamp} />
                    <Currency amount={wei(marketPrice, 18, true).toNumber() || null} />
                    <Size
                      size={amountLiquidated.toNumber()}
                      marketPrice={marketPrice ? wei(marketPrice, 18, true).toNumber() : null}
                    />
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
        {((!loading && v3Liquidations?.length === 0) || error) && (
          <Flex width="100%" justifyContent="center" bg="navy.700" borderTopWidth="1px">
            <Text fontFamily="inter" fontWeight="500" fontSize="14px" color="gray.500" m={6}>
              No Liquidations
            </Text>
          </Flex>
        )}
      </TableContainer>
    </>
  );
};
