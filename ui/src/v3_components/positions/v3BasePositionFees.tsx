import { Fade, Td, Text } from '@chakra-ui/react';
import { formatNumberToUsd } from '@synthetixio/formatters';

interface PnLProps {
  fees: number;
}

export const V3BasePositionFees = ({ fees }: PnLProps) => {
  return (
    <Td border="none">
      <Fade in>
        <Text
          fontFamily="heading"
          fontWeight={500}
          fontSize="14px"
          lineHeight="20px"
          color={'red.500'}
        >
          {`-${formatNumberToUsd(fees)}`}
        </Text>
      </Fade>
    </Td>
  );
};
