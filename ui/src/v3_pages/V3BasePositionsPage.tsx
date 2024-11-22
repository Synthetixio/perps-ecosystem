import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3BaseClient } from '../apollo/v3baseClient';
import { V3BasePositionTable } from '../v3_components/positions/v3BasePositionTable';
import { V3BaseOpenPositionsFilter } from '../v3_components/filter/positionFilter';
import { Box, Heading } from '@chakra-ui/react';

export const V3BasePositionsPage = () => {
  return (
    <V3Provider client={V3BaseClient}>
      <Box px={{ base: '16px', md: '40px' }}>
        <Heading my={8} fontSize="36px">
          {' '}
          Positions{' '}
        </Heading>
        <V3BaseOpenPositionsFilter route="v3/positions" />
        <V3BasePositionTable />
      </Box>
    </V3Provider>
  );
};
