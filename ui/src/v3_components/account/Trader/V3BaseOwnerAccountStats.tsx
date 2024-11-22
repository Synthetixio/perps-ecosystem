import {
  Flex,
  Heading,
  Box,
  Tabs,
  TabPanels,
  TabPanel,
  Text,
  Circle,
  Tab,
  TabList,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { Account } from '../../../v3_types';
import { useEffect, useRef } from 'react';
import { V3BaseOwnerOpenPositionTable } from '../../positions/ownerPositions/v3BaseOwnerOpenPositionsTable';
import { V3BaseOwnerClosedPositionTable } from '../../positions/ownerPositions/v3BaseOwnerClosedPositionsTabe';
import { V3BaseOwnerLiquidatedPositionTable } from '../../positions/ownerPositions/v3BaseOwnerLiquidatedPositionsTable';
import { V3BaseOwnerTradeTable } from '../../trades/ownerTrades/v3BaseOwnerTradeTable';

interface V3BaseOwnerAccountStatsProps {
  account: Account;
}

enum TabKeyEnum {
  OPEN = 'open',
  CLOSED = 'closed',
  LIQUIDATED = 'liquidated',
}

export const V3BaseOwnerAccountStats = ({ account }: V3BaseOwnerAccountStatsProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('position') ?? TabKeyEnum.OPEN;

  const tradeTableRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: TabKeyEnum) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('position', tab);
    setSearchParams(newParams);
  };

  useEffect(() => {
    const positionId = searchParams.get('positionId');
    if (positionId && tradeTableRef.current) {
      tradeTableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  if (!account) {
    return (
      <Box px={{ base: '16px', md: '40px' }}>
        <Text>No Account Found</Text>
      </Box>
    );
  }

  return (
    <>
      <Text mb="10px" fontSize="18px" fontWeight="700">
        Positions
      </Text>

      <Tabs
        isManual
        isLazy
        tabIndex={currentTab === TabKeyEnum.OPEN ? 0 : currentTab === TabKeyEnum.CLOSED ? 1 : 2}
        variant="soft-rounded"
        colorScheme="blue.900"
        onChange={(index) => {
          const tabKey =
            index === 0 ? TabKeyEnum.OPEN : index === 1 ? TabKeyEnum.CLOSED : TabKeyEnum.LIQUIDATED;
          handleTabChange(tabKey);
        }}
      >
        <TabList gap={1}>
          {[
            { label: 'Open', key: TabKeyEnum.OPEN, count: account.totalOpenPositions.toNumber() },
            {
              label: 'Closed',
              key: TabKeyEnum.CLOSED,
              count: account.totalClosedPositions.toNumber(),
            },
            {
              label: 'Liquidated',
              key: TabKeyEnum.LIQUIDATED,
              count: account.totalLiquidations.toNumber(),
            },
          ].map((tab) => (
            <Tab
              key={tab.key}
              _selected={{
                bg: 'whiteAlpha.300',
                color: 'white',
                fontWeight: '700',
              }}
              _hover={{ bg: 'gray.900' }}
              borderRadius="full"
              px={4}
              py={2}
              fontWeight="bold"
              color="gray.400"
              fontSize="12px"
            >
              <Flex alignItems="center" gap={2}>
                <Text mr={2}>{tab.label}</Text>
                <Circle
                  size="18px"
                  bg={currentTab === tab.key ? 'white' : 'gray.500'}
                  color="black"
                  fontSize="8px"
                  fontWeight="700"
                  display="flex"
                  justifyContent="center"
                >
                  {tab.count > 999 ? '1K+' : tab.count}
                </Circle>
              </Flex>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <V3BaseOwnerOpenPositionTable accountId={account.id} />
          </TabPanel>
          <TabPanel p={0}>
            <V3BaseOwnerClosedPositionTable accountId={account.id} />
          </TabPanel>
          <TabPanel p={0}>
            <V3BaseOwnerLiquidatedPositionTable accountId={account.id} />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box mt={6}>
        <Flex mb="10px" justifyContent={'space-between'} ref={tradeTableRef}>
          <Heading fontSize="18px" lineHeight="28px">
            Trades
          </Heading>
        </Flex>
        <V3BaseOwnerTradeTable accountId={account.id} />
      </Box>
    </>
  );
};
