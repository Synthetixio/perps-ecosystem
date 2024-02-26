import { TableContainer, Table, Thead, Tr, Tbody } from '@chakra-ui/react';
import { Currency, Funding, PnL, TableHeaderCell } from '../Shared';
import { PositionType } from '../../hooks';

import Wei, { wei } from '@synthetixio/wei';
import { PositionStatsLoading } from './PositionStatsLoading';
export interface OpenStats {
  currentOI: Wei;
  totalUnrealisedPnl: Wei;
  totalRealisedPnl: Wei;
  totalMargin: Wei;
  totalFunding: Wei;
}
export const PositionStatsTable = ({ data, loading }: { data: any[]; loading?: boolean }) => {
  const openStats: OpenStats | undefined = data?.reduce(
    (acc: OpenStats, position: PositionType) => {
      return {
        currentOI: wei(acc.currentOI, 18, true).add(
          wei(position.size.abs().mul(position.marketPrice), 18, true)
        ),
        totalUnrealisedPnl: wei(acc.totalUnrealisedPnl, 18, true).add(
          wei(position.unrealizedPnl, 18, true)
        ),
        totalRealisedPnl: wei(acc.totalRealisedPnl, 18, true).add(position.realizedPnl),
        totalMargin: wei(acc.totalMargin, 18, true).add(wei(position.remainingMargin, 18, true)),
        totalFunding: wei(acc.totalFunding, 18, true).add(wei(position.funding, 18, true)),
      };
    },
    {
      currentOI: wei(0),
      totalUnrealisedPnl: wei(0),
      totalRealisedPnl: wei(0),
      totalMargin: wei(0),
      totalFunding: wei(0),
    }
  );

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
                <TableHeaderCell>Current OI</TableHeaderCell>
                <TableHeaderCell>Total Unrealized</TableHeaderCell>
                <TableHeaderCell>Total Realized</TableHeaderCell>
                <TableHeaderCell>Total Margin</TableHeaderCell>
                <TableHeaderCell>Total Funding</TableHeaderCell>
              </Tr>
            </Thead>
            <Tbody>
              {loading && (
                <>
                  <PositionStatsLoading />
                </>
              )}
              {!loading && openStats && (
                <Tr borderTopWidth="1px">
                  <Currency amount={openStats?.currentOI?.toNumber()} />
                  <PnL pnl={openStats?.totalUnrealisedPnl?.toNumber()} />
                  <PnL pnl={openStats?.totalRealisedPnl?.toNumber()} />
                  <Currency amount={openStats?.totalMargin?.toNumber()} />
                  <Funding amount={openStats?.totalFunding.toNumber()} />
                </Tr>
              )}
            </Tbody>
          </Table>
        </>
      </TableContainer>
    </>
  );
};
