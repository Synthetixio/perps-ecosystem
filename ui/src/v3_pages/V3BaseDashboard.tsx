import { Box } from '@chakra-ui/react';
import { DashboardBanner } from '../components/DashboardBanner';
import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3BaseClient } from '../apollo/v3baseClient';
import V3Dashboard from '../v3_components/dashboard/V3Dashboard';

export const V3BaseDashboard = () => {
  return (
    <V3Provider client={V3BaseClient}>
      <Box>
        <DashboardBanner />

        <V3Dashboard />
      </Box>
    </V3Provider>
  );
};

export default V3BaseDashboard;
