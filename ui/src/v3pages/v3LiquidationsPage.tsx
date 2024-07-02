import { Box } from '@chakra-ui/react';
import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3Client } from '../apollo/v3client';
import { V3LiquidationsTable } from '../v3components/liquidations/v3Liquidations';

export const V3LiquidationsPage = () => {

  return (

    <V3Provider client={V3Client}>
      <Box px={{ base: '16px', md: '40px' }}>
        <V3LiquidationsTable />
      </Box>
    </V3Provider>

  );
};
