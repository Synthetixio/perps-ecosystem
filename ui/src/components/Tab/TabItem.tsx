import React, { ReactNode } from 'react';
import { SystemStyleObject, Tab } from '@chakra-ui/react';

interface TabItemProps {
  tabKey: string;
  children: ReactNode;
  onTabClick: (title: string) => void;
  sx?: SystemStyleObject;
  activeSx?: SystemStyleObject;
}

const TabItem: React.FC<TabItemProps> = ({ tabKey, children, onTabClick, sx, activeSx }) => {
  return (
    <Tab
      onClick={() => {
        onTabClick(tabKey);
      }}
      color="gray.500"
      fontSize="12px"
      _selected={{
        color: 'white',
        backgroundColor: 'whiteAlpha.300',
        fontWeight: '700',
        ...activeSx,
      }}
      _focus={{ boxShadow: 'none' }}
      sx={sx}
    >
      {children}
    </Tab>
  );
};

export default TabItem;
