import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { V3DashboardMarkets } from '../../v3_components/dashboard/Markets';
import { V3DashboardTradeTable } from '../../v3_components/trades/dashboardTrades/v3DashboardTrades';
import { V3BaseLargestLossPositionTable } from '../../v3_components/positions/dashboardPositions/v3BaseLargestLossPositionTable';
import { V3BaseLargestWinsPositionTable } from '../../v3_components/positions/dashboardPositions/v3BaseLargestWinsPositionTable';
import { V3BaseLargetOpenPositionTable } from '../../v3_components/positions/dashboardPositions/v3BaseLargestOpenPositionTable';

export const V3Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box px={{ base: '16px', md: '40px' }}>
      <Flex
        pt={6}
        pb={2}
        justifyContent="space-between"
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
      >
        <Flex flexDir="column" width={{ base: '100%', lg: '60%' }}>
          <Flex mt={2} justifyContent="space-between">
            <Heading fontSize="30px">Top Markets</Heading>
            <Button onClick={() => navigate('/v3/markets')} variant="outline">
              See all markets
            </Button>
          </Flex>
          <V3DashboardMarkets />
          <Flex mt={8} justifyContent="space-between">
            <Heading fontSize="30px">Latest Actions</Heading>
            <Button onClick={() => navigate('/v3/trades')} variant="outline">
              See all actions
            </Button>
          </Flex>
          <V3DashboardTradeTable />
        </Flex>
        <Flex
          flexDir="column"
          mr={{ base: 0, lg: 4 }}
          ml={{ base: 0, lg: 8 }}
          width={{ base: '100%', lg: '40%' }}
        >
          <Flex mt={2} justifyContent="space-between">
            <Heading fontSize="30px">Leaderboard</Heading>
            <Button onClick={() => navigate('/v3/positions')} variant="outline">
              See all Positions
            </Button>
          </Flex>

          <V3BaseLargetOpenPositionTable />

          <V3BaseLargestWinsPositionTable />

          <V3BaseLargestLossPositionTable />
        </Flex>
      </Flex>
    </Box>
  );
};

export default V3Dashboard;
