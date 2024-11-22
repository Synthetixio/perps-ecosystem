import { Flex, Text, Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import { useMemo } from 'react';
import { V3BaseAccountPnlChart } from '../pnlChart';
import useTabHandler from '../../../hooks/helpers/useTabHandler';
import TabHeader, { TabHeaderItemProps } from '../../../components/Tab';
import { V3BaseTradingStats } from './V3BaseTradingStats';
import { Account } from '../../../v3_types';

enum TabKeyEnum {
  TRADING = 'trading',
  // STAKING = 'staking',
}

interface V3BaseStatsProps {
  account: Account;
}

const TAB_NAME: string = 'stats';
export const V3BaseStats = ({ account }: V3BaseStatsProps) => {
  const { tab, handleTab } = useTabHandler(TabKeyEnum.TRADING, true, TAB_NAME);
  const tabHeaders = useMemo(() => {
    return [
      { tabKey: TabKeyEnum.TRADING, title: 'Trading' },
      // { tabKey: TabKeyEnum.STAKING, title: 'Staking' },
    ] as TabHeaderItemProps[];
  }, []);
  const selectedTabIndex = useMemo(
    () => tabHeaders.findIndex((e) => e.tabKey === tab),
    [tabHeaders, tab]
  );

  return (
    <Flex flexDir="column" my={{ base: '16px', md: '40px' }}>
      <Text mb="10px" fontSize="18px" fontWeight="700">
        Stats
      </Text>
      <Tabs isManual isLazy index={selectedTabIndex} variant="soft-rounded" colorScheme="blue.900">
        <TabHeader tabs={tabHeaders} activeTab={tab} onTabChange={handleTab} />
        <TabPanels>
          <TabPanel p={0}>
            {tab === TabKeyEnum.TRADING && (
              <Flex my={3} flexDir={['column', 'column', 'column', 'row', 'row']} gap={3}>
                <V3BaseTradingStats account={account} />
                <V3BaseAccountPnlChart account={account} />
              </Flex>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default V3BaseStats;
