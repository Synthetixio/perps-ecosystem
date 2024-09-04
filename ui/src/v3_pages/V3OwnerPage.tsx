import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3BaseClient } from '../apollo/v3baseClient';
import { useParams } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import V3Owner from '../v3_components/account/V3Owner';

export const V3OwnerPage = () => {
  const { owner } = useParams<{ owner: string }>();

  // If accountId is undefined, return early
  if (!owner) {
    return (
      <Box px={{ base: '16px', md: '40px' }}>
        <Text>No Account provided.</Text>
      </Box>
    );
  }
  return (
    <V3Provider client={V3BaseClient}>
      <V3Owner />
    </V3Provider>
  );
};
