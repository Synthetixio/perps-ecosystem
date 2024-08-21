import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3BaseClient } from '../apollo/v3baseClient';
import V3Account from '../v3_components/account/V3Account';
import { useParams } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

export const V3AccountPage = () => {
  const { accountId } = useParams<{ accountId: string }>();

  // If accountId is undefined, return early
  if (!accountId) {
    return (
      <Box px={{ base: '16px', md: '40px' }}>
        <Text>No Account ID provided.</Text>
      </Box>
    );
  }
  return (
    <V3Provider client={V3BaseClient}>
      <V3Account accountId={accountId} />
    </V3Provider>
  );
};
