import { Box, Heading } from '@chakra-ui/react';
import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3BaseClient } from '../apollo/v3baseClient';
import { V3BaseLiquidationsTable } from '../v3_components/liquidations/v3BaseLiquidationsTable';

export const V3BaseLiquidationsPage = () => {
  return (
    <V3Provider client={V3BaseClient}>
      <Box px={{ base: '16px', md: '40px' }}>
        <Heading my={8} fontSize="36px">
          {' '}
          Liquidations{' '}
        </Heading>
        <V3BaseLiquidationsTable />
      </Box>
    </V3Provider>
  );
};
