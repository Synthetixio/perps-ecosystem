import { Box } from '@chakra-ui/react';
import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3MarketsTable } from '../v3components/markets/v3MarketsTable';
import { V3Client } from '../apollo/v3client';

export const V3MarketsPage = () => {

  return (

    <V3Provider client={V3Client}>
      <Box px={{ base: '16px', md: '40px' }}>
        <V3MarketsTable />
      </Box>
    </V3Provider>

  );
};
