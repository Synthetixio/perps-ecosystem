import { SimpleGrid } from '@chakra-ui/react';
import CardStats from './CardStats';
import { useTraderStats } from '../../hooks/useTraderStats';

export const TradingStats = () => {
  const { traderTotalStats } = useTraderStats();
  return (
    <SimpleGrid column={1} minChildWidth="500px" spacing="16px">
      <CardStats
        label={'Total Volume'}
        value={traderTotalStats?.totalVolume?.toNumber()}
        prefix={'$'}
        tooltip={'Total Volume'}
      />
      <CardStats
        label={'Total PNL'}
        value={traderTotalStats?.totalPnl?.toNumber()}
        tooltip={'Total PNL'}
      />
      <CardStats
        label={'Total Fees'}
        value={traderTotalStats?.totalFees?.toNumber()}
        prefix={'$'}
        tooltip={'Total Fees'}
      />
      <CardStats
        label={'Total Liquidations'}
        value={traderTotalStats?.totalLiquidations?.toNumber()}
        minDigit={0}
        maxDigit={0}
        tooltip={'Total Liquidations'}
      />
    </SimpleGrid>
  );
};

export default TradingStats;
