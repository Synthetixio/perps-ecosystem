import { Button, Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { KwentaIcon, PolynomialIcon } from '../Icons';
import { InfinexIcon } from '../Icons/InfinexIcon';
import { TRADE_ON_INFINEX_URL, TRADE_ON_KWENTA_URL, TRADE_ON_POLYNOMIAL_URL } from '../../utils';

export const DashboardBanner = () => {
  return (
    <Flex
      px={{ base: '16px', md: '40px' }}
      py={4}
      borderBottom="1px solid"
      borderColor="gray.900"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      gap={3}
    >
      <Text fontSize="14px" lineHeight="20px" color="gray.50" fontWeight={700}>
        Gain exposure to a variety of assets with up to 50x leverage and deep liquidity
      </Text>
      <Flex alignItems="center" gap={2} flexWrap="wrap">
        <TradeOnItem
          url={TRADE_ON_KWENTA_URL}
          title={'Trade on Kwenta'}
          icon={<KwentaIcon width="14px" height="14px" border="none" borderRadius="unset" />}
        />
        <TradeOnItem
          url={TRADE_ON_POLYNOMIAL_URL}
          title={'Trade on Polynomial'}
          icon={<PolynomialIcon width="14px" height="14px" border="none" borderRadius="unset" />}
        />
        <TradeOnItem
          url={TRADE_ON_INFINEX_URL}
          title={'Trade on Infinex'}
          icon={<InfinexIcon width="14px" height="14px" />}
        />
      </Flex>
    </Flex>
  );
};

interface TradeOnItemProps {
  url: string;
  title: ReactNode;
  icon: ReactNode;
}
const TradeOnItem = ({ url, title, icon }: TradeOnItemProps) => {
  return (
    <Button
      variant="outline"
      colorScheme="gray"
      onClick={() => window.open(url, '_blank')}
      display="flex"
      alignItems="center"
      gap={2}
    >
      {icon}
      <Text fontSize="14px" lineHeight="20px" color="white" fontWeight={700}>
        {title}
      </Text>
    </Button>
  );
};
