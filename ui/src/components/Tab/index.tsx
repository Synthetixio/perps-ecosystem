import React, { ReactNode } from 'react';
import { Badge, Flex, SystemStyleObject, TabList } from '@chakra-ui/react';
import TabItem from './TabItem';
import { formatNumber } from '@synthetixio/formatters';

export interface TabHeaderItemProps {
  tabKey: string;
  title: ReactNode;
  badgeNumber?: number;
}

export interface TabHeaderProps {
  tabs: TabHeaderItemProps[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  sx?: SystemStyleObject;
}

const TabHeader: React.FC<TabHeaderProps> = ({ tabs, activeTab, onTabChange, sx }) => {
  return (
    <TabList gap={1} sx={sx}>
      {tabs.map((tab, index) => {
        const isActive = tab.tabKey === activeTab;
        return (
          <TabItem key={index} tabKey={tab.tabKey} onTabClick={onTabChange}>
            <Flex alignItems="center" gap={2}>
              {tab.title}
              {tab.badgeNumber !== undefined && (
                <Badge
                  borderRadius="9px"
                  width="18px"
                  height="18px"
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  fontSize="8px"
                  fontWeight="700"
                  bgColor={isActive ? 'white' : 'gray.500'}
                  color="black"
                >
                  {tab.badgeNumber > 999
                    ? '1K+'
                    : formatNumber(tab.badgeNumber ?? 0, {
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      })}
                </Badge>
              )}
            </Flex>
          </TabItem>
        );
      })}
    </TabList>
  );
};

export default TabHeader;
