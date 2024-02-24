import { Flex, Text, Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import { useMemo } from 'react';
import { AccountPnl } from '../Actions/Account';
import useTabHandler from '../../hooks/helpers/useTabHandler';
import TabHeader, { TabHeaderItemProps } from '../Tab';
import { WalletBalances } from '../WalletBalances';
import TradingStats from './TradingStats';

enum TabKeyEnum {
  TRADING = 'trading',
  STAKING = 'staking',
}
const TAB_NAME: string = 'stats';
export const Stats = ({ walletAddress }: { walletAddress?: string }) => {
  const { tab, handleTab } = useTabHandler(TabKeyEnum.TRADING, true, TAB_NAME);
  const tabHeaders = useMemo(() => {
    return [
      { tabKey: TabKeyEnum.TRADING, title: 'Trading' },
      { tabKey: TabKeyEnum.STAKING, title: 'Staking' },
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
                <TradingStats />
                <AccountPnl />
              </Flex>
            )}
          </TabPanel>
          <TabPanel p={0}>
            {tab === TabKeyEnum.STAKING && !!walletAddress && (
              <WalletBalances walletAddress={walletAddress} />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Stats;
