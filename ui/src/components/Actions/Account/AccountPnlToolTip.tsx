import { Flex, Text } from '@chakra-ui/react';
import { KeyColour } from '../../Dashboard/KeyColour';

interface PnlTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export const AccountPnlTooltip = ({ payload }: PnlTooltipProps) => {
  const pnlInfo = payload?.[0]?.payload;
  const formatNumberOptions = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  if (!pnlInfo) {
    return null;
  }
  const tooltipDate = new Date(parseInt(pnlInfo.closeTimestamp) * 1000).toISOString().slice(0, 10);

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
        {tooltipDate}
      </Text>
      <Flex mt={2} justifyContent="space-between" w="100%">
        <KeyColour
          label={pnlInfo.pnl > 0 ? 'Profit' : 'Loss'}
          colour={pnlInfo.pnl > 0 ? '#4FD1C5' : '#F471FF'}
        />
        <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="center">
          ${pnlInfo.pnl.toLocaleString('en-US', formatNumberOptions)}
        </Text>
      </Flex>
      <Flex mt={2} justifyContent="space-between" w="100%">
        <KeyColour label="Total PNL" colour="whiteAlpha.400" />
        <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="center">
          ${pnlInfo.totalPnl.toLocaleString('en-US', formatNumberOptions)}
        </Text>
      </Flex>
      <Flex mt={2} justifyContent="space-between" w="100%">
        <KeyColour label="Timestamp" colour="gray.500" />
        <Text ml={3} fontFamily="heading" fontSize="12px" lineHeight="16px" textAlign="center">
          {pnlInfo.closeTimestamp}
        </Text>
      </Flex>
    </Flex>
  );
};
