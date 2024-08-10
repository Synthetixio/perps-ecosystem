import { Fade, Td, Text } from '@chakra-ui/react';
import { formatNumberToUsd } from '@synthetixio/formatters';

interface TotalOpenInterestProps {
  oi: number;
  skew: number;
  decimals?: number;
}

export const V3TotalOpenInterest = ({ oi, skew, decimals }: TotalOpenInterestProps) => {
  return (
    <Td border="none">
      <Fade in>
        <Text
          fontFamily="heading"
          fontWeight={500}
          fontSize="14px"
          lineHeight="20px"
          color={skew > 0 ? 'green.500' : 'red.500'}
        >
          {formatNumberToUsd(oi, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })}
        </Text>
      </Fade>
    </Td>
  );
};
