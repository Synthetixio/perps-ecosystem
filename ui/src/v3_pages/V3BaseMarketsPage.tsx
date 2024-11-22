import { Box, Heading } from '@chakra-ui/react';
import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3BaseClient } from '../apollo/v3baseClient';
import { V3BaseMarketsTable } from '../v3_components/markets/v3BaseMarketsTable';

export const V3BaseMarketsPage = () => {
  return (
    <V3Provider client={V3BaseClient}>
      <Box px={{ base: '16px', md: '40px' }}>
        <Heading my={8} fontSize="36px">
          {' '}
          Markets{' '}
        </Heading>
        <V3BaseMarketsTable />
      </Box>
    </V3Provider>
  );
};
