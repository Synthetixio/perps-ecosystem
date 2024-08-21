import { Divider, Flex, Text } from '@chakra-ui/react';
import { KeyColour } from '../../../components/Dashboard';
import { CurrencyIcon } from '../../../components/CurrencyIcon';
import { AccountAggregateStat } from '../../../v3_types';

interface PnlTooltipProps {
  payload?: any[];
  active?: boolean;
  label?: string;
}

export const V3BaseAccountPnlTooltip = ({ payload }: PnlTooltipProps) => {
  if (!payload ?? !payload?.length) {
    return null;
  }

  const pnlInfo = payload?.[0]?.payload satisfies AccountAggregateStat;
  console.log(pnlInfo);
  const formatNumberOptions = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  if (!pnlInfo) {
    return null;
  }
  console.log('payloadyo');
  console.log(payload);

  const date = new Date(pnlInfo.timestamp * 1000).toLocaleDateString();
  console.log(date);

  // const positions: AccountAggregateStat[] = useMemo(
  //   () =>
  //     Object.values(pnlInfo.positions as Record<string, Position>)?.sort((x, y) =>
  //       x.marketName < y.marketName ? -1 : x.marketName > y.marketName ? 1 : 0
  //     ),
  //   [pnlInfo]
  // );

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
      <Flex justifyContent="space-between" alignItems={'center'} gap={2}>
        <Flex gap={2}>
          <CurrencyIcon currencyKey={pnlInfo.marketSymbol} width={24} height={24} />
          <KeyColour label={pnlInfo.marketName ?? ''} />
        </Flex>
        <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="center">
          {date}
        </Text>
      </Flex>

      <Flex justifyContent="space-between" w="100%">
        <KeyColour label="Account PNL To Date" fontWeight={700} lineHeight="16px" />
        <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="right">
          ${pnlInfo.accountPnl.toLocaleString('en-US', formatNumberOptions)}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" w="100%">
        <KeyColour label="Position PNL" fontWeight={700} lineHeight="16px" />
        <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="right">
          ${pnlInfo.positionPnl.toLocaleString('en-US', formatNumberOptions)}
        </Text>
      </Flex>
      <Divider />
    </Flex>
  );
};
