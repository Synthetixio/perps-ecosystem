import { Button, Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { /* KwentaIcon, */ PolynomialIcon } from '../Icons';
import { KwentaIcon as V3KwentaIcon } from '../../v3_components/shared/icons';
import { InfinexIcon } from '../Icons/InfinexIcon';
import {
  TRADE_ON_CYBERDEX_URL,
  TRADE_ON_INFINEX_URL,
  TRADE_ON_KWENTA_URL,
  TRADE_ON_POLYNOMIAL_URL,
  TRADE_ON_TLX_URL,
} from '../../utils';
import { TlxIcon } from '../Icons/TlxIcon';
import { CyberdexIcon } from '../Icons/CyberdexIcon';

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
        Start Trading Perpetual Futures Now
      </Text>
      <Flex alignItems="center" gap={2} flexWrap="wrap">
        <TradeOnItem
          url={TRADE_ON_KWENTA_URL}
          title={'Trade on Kwenta'}
          icon={<V3KwentaIcon width="18px" height="18px" border="none" borderRadius="unset" />}
        />
        <TradeOnItem
          url={TRADE_ON_POLYNOMIAL_URL}
          title={'Trade on Polynomial'}
          icon={<PolynomialIcon width="18px" height="18px" border="none" borderRadius="unset" />}
        />
        <TradeOnItem
          url={TRADE_ON_INFINEX_URL}
          title={'Trade on Infinex'}
          icon={<InfinexIcon width="14px" height="14px" />}
        />
        <TradeOnItem
          url={TRADE_ON_TLX_URL}
          title={'Trade on TLX'}
          icon={<TlxIcon width="18px" height="18px" />}
        />
        <TradeOnItem
          url={TRADE_ON_CYBERDEX_URL}
          title={'Trade on Cyberdex'}
          icon={<CyberdexIcon width="18px" height="18px" />}
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
      display="flex"
      alignItems="center"
      gap={2}
      width={['100%', 'auto']}
      as={'a'}
      href={url}
      target="_blank"
    >
      {icon}
      <Text fontSize="14px" lineHeight="20px" color="white" fontWeight={700}>
        {title}
      </Text>
    </Button>
  );
};
