import { SimpleGrid } from '@chakra-ui/react';
import CardStats from './V3BaseCardStats';
import { Account } from '../../../v3_types';

interface V3BaseTradingStatsProps {
  account: Account;
}

export const V3BaseTradingStats = ({ account }: V3BaseTradingStatsProps) => {
  const totalVolume = account?.totalVolume ? account.totalVolume.toNumber() : 0;
  const totalPnl = account?.pnl ? account.pnl.toNumber() : 0;
  const totalFees = account?.feesPaid ? account.feesPaid.toNumber() : 0;
  const totalLiquidations = account?.totalLiquidations ? account.totalLiquidations.toNumber() : 0;

  return (
    <SimpleGrid column={1} minChildWidth="500px" spacing="16px">
      <CardStats label={'Total Volume'} value={totalVolume} prefix={'$'} tooltip={'Total Volume'} />
      <CardStats label={'Total PNL'} value={totalPnl} tooltip={'Total PNL'} />
      <CardStats label={'Total Fees'} value={totalFees} prefix={'$'} tooltip={'Total Fees'} />
      <CardStats
        label={'Total Liquidations'}
        value={totalLiquidations}
        minDigit={0}
        maxDigit={0}
        tooltip={'Total Liquidations'}
      />
    </SimpleGrid>
  );
};

export default V3BaseTradingStats;
