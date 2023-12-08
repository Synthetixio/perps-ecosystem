import { Flex, Text } from '@chakra-ui/react';
import { KeyColour } from '../../Dashboard';
import { ChartPnlData, ProcessedPnlData } from '../../../hooks';
import { useMemo } from 'react';
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
    >
      <Text mb={2} fontFamily="heading" color="gray.500" fontSize="12px" lineHeight="16px">
        {pnlInfo.day}
      </Text>
      {positions?.map((position: any) => (
        <Flex key={position.positionId} mt={2} justifyContent="space-between" w="100%">
          <KeyColour label={position.marketName ?? ''} colour={position.color ?? ''} />
          <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="center">
            ${position.pnl.toLocaleString('en-US', formatNumberOptions)} |{' '}
            {position.leverage.toLocaleString('en-US', formatNumberOptions)}x |{' '}
            {position.long ? 'LONG' : 'SHORT'}
            {position.liquidated && ` (LIQUIDATED)`}
          </Text>
        </Flex>
      ))}
      <Flex mt={2} justifyContent="space-between" w="100%">
        <KeyColour
          label="Daily PNL"
          colour={pnlInfo.dailyTotalPnl > 0 ? '#4FD1C5' : '#F471FF'}
          fontWeight={700}
        />
        <Text
          ml={3}
          fontFamily="heading"
          fontSize="12px"
          lineHeight="16px"
          textAlign="center"
          fontWeight={700}
        >
          ${pnlInfo.dailyTotalPnl.toLocaleString('en-US', formatNumberOptions)}
        </Text>
      </Flex>
      <Flex mt={2} justifyContent="space-between" w="100%">
        <KeyColour label="Total PNL" colour="whiteAlpha.400" fontWeight={700} />
        <Text
          ml={3}
          fontFamily="heading"
          fontSize="12px"
          lineHeight="16px"
          textAlign="center"
          fontWeight={700}
        >
          ${pnlInfo.totalPnl.toLocaleString('en-US', formatNumberOptions)}
        </Text>
      </Flex>
    </Flex>
  );
};
