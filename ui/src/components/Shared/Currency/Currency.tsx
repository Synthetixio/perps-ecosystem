import { Fade, Flex, FlexProps, Td } from '@chakra-ui/react';
import { formatNumberToCurrencyBasedOnSize } from '@synthetixio/formatters';
import { ReactNode } from 'react';

interface CurrencyProps {
  amount: number | null;
  decimals?: number;
  suffix?: ReactNode;
  sx?: FlexProps;
}

export const Currency = ({ amount, suffix, sx }: CurrencyProps) => {
  return (
    <Td border="none" fontSize="14px" lineHeight="20px" fontFamily="heading" fontWeight={500}>
      <Fade in>
        <Flex alignItems="center" gap={3} sx={{ ...sx }}>
          {amount ? formatNumberToCurrencyBasedOnSize(amount) : '-'} {suffix}
        </Flex>
      </Fade>
    </Td>
  );
};
