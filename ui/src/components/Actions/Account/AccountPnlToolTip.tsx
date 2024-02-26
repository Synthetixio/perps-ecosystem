import { Divider, Flex, Text } from '@chakra-ui/react';
import { KeyColour } from '../../Dashboard';
import { ChartPnlData, ProcessedPnlData } from '../../../hooks';
import { useMemo } from 'react';
import { CurrencyIcon } from '../../CurrencyIcon';
interface PnlTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export const AccountPnlTooltip = ({ payload }: PnlTooltipProps) => {
  const pnlInfo = payload?.[0]?.payload satisfies ChartPnlData;
  const formatNumberOptions = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  if (!pnlInfo) {
    return null;
  }

  const positions: ProcessedPnlData[] = useMemo(
    () =>
      Object.values(pnlInfo.positions as Record<string, ProcessedPnlData>)?.sort((x, y) =>
        x.marketName < y.marketName ? -1 : x.marketName > y.marketName ? 1 : 0
      ),
    [pnlInfo]
  );

  return (
    <Flex
      flexDirection="column"
      bg="navy.900"
      padding={4}
      minWidth="190px"
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.900"
      gap="10px"
      color="gray.500"
    >
      <Text fontFamily="heading" fontSize="12px" fontWeight={700} lineHeight="16px">
        {pnlInfo.day}
      </Text>
      <Flex justifyContent="space-between" w="100%">
        <KeyColour label="Total PNL" fontWeight={700} lineHeight="16px" />
        <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="right">
          ${pnlInfo.totalPnl.toLocaleString('en-US', formatNumberOptions)}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" w="100%">
        <KeyColour label="Daily PNL" fontWeight={700} lineHeight="16px" />
        <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="right">
          ${pnlInfo.dailyTotalPnl.toLocaleString('en-US', formatNumberOptions)}
        </Text>
      </Flex>
      <Divider />
      {positions?.map((position: any) => (
        <Flex key={position.positionId} justifyContent="space-between" w="100%">
          <Flex alignItems="center" gap={1}>
            <CurrencyIcon currencyKey={position.marketName} width={12} height={12} />
            <KeyColour label={position.marketName ?? ''} />
          </Flex>
          <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="center">
            ${position.pnl.toLocaleString('en-US', formatNumberOptions)} |{' '}
            {position.leverage.toLocaleString('en-US', formatNumberOptions)}x |{' '}
            {position.long ? 'LONG' : 'SHORT'}
            {position.liquidated && ` (LIQUIDATED)`}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
