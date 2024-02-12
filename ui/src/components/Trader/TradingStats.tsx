import { SimpleGrid } from '@chakra-ui/react';
import CardStats from './CardStats';

export const TradingStats = () => {
  return (
    <SimpleGrid column={1} minChildWidth="500px" spacing="16px">
      <CardStats label={'Total Volume'} value={23839.31} prefix={'$'} tooltip={'Total Volume'} />
      <CardStats label={'Total PNL'} value={426.5} tooltip={'Total PNL'} />
      <CardStats label={'Total Fees'} value={426.5} prefix={'$'} tooltip={'Total Fees'} />
      <CardStats label={'Total Trades'} value={1021} tooltip={'Total Trades'} />
    </SimpleGrid>
  );
};

export default TradingStats;
