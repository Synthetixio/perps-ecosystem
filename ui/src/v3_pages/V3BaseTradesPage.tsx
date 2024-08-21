import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3BaseClient } from '../apollo/v3baseClient';
import { V3BaseTradeTable } from '../v3_components/trades/v3TradeTable';
import { Box, Heading } from '@chakra-ui/react';
import { V3BaseTradeFilter } from '../v3_components/filter/tradeFilter';

export const V3BaseTradesPage = () => {
  return (
    <V3Provider client={V3BaseClient}>
      <Box px={{ base: '16px', md: '40px' }}>
        <Heading my={8} fontSize="36px">
          {' '}
          Trades{' '}
        </Heading>
        <V3BaseTradeFilter route="v3/trades" />
        <V3BaseTradeTable />
      </Box>
    </V3Provider>
  );
};
