import { Fade, Td, Text } from '@chakra-ui/react';
import { formatNumberToUsd } from '@synthetixio/formatters';

interface OpenInterestProps {
  totalOI: number;
  longOI: number;
  shortOI: number;
  price: number;
  decimals?: number;
}

export const V3OpenInterest = ({ totalOI, longOI, shortOI, price, decimals }: OpenInterestProps) => {
  return (
    <Td border="none">
      <Fade in>
        <Text
          fontFamily="heading"
          fontWeight={500}
          fontSize="14px"
          lineHeight="20px"
          color="green.500"
        >
          {formatNumberToUsd(longOI * price, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })}
        </Text>
      </Fade>
      <Fade in>
        <Text
          fontFamily="heading"
          fontWeight={500}
          fontSize="14px"
          lineHeight="20px"
          color="red.500"
        >
          {formatNumberToUsd(shortOI * price, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })}
        </Text>
      </Fade>
    </Td>
  );
};
