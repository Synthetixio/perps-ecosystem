import { Fade, Td, Text } from '@chakra-ui/react';
import { formatNumberToCurrencyBasedOnSize } from '@synthetixio/formatters';

interface V3BasePositionSizeProps {
  size: number;
  marketPrice: number | null;
}

export const V3BasePositionSize = ({ size, marketPrice }: V3BasePositionSizeProps) => {
  const sizeAbs = Math.abs(size);
  const total = marketPrice ? sizeAbs * marketPrice : 0;
  return (
    <Td border="none">
      <Fade in>
        <Text fontSize="14px" lineHeight="20px" fontFamily="heading" fontWeight={500}>
          {formatNumberToCurrencyBasedOnSize(total)}
        </Text>
        <Text color="gray.500" fontSize="12px" lineHeight="16px" fontFamily="heading">
          {sizeAbs.toFixed(4)}
        </Text>
      </Fade>
    </Td>
  );
};
