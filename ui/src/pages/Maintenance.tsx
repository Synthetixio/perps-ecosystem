
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { DashboardBanner } from '../components/DashboardBanner';

export const Maintenance: FC = () => {

  return (
    <Box>
      <DashboardBanner />
      <Box px={{ base: '16px', md: '40px' }}>
        <Heading mt={6} fontSize="36px">
          Under Maintenance
        </Heading>
        <Flex
          pt={6}
          pb={2}
          justifyContent="space-between"
          flexDirection={{ base: 'column-reverse', lg: 'row' }}
        >
            <Text> Updates Coming Soon</Text>
   
        
        </Flex>
      </Box>
    </Box>
  );
};

export default Maintenance;
