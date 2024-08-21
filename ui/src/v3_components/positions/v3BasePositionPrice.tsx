import { Fade, Td, Text } from '@chakra-ui/react';
import { formatNumberToCurrencyBasedOnSize } from '@synthetixio/formatters';

interface PositionPriceProps {
  price: number;
}

export const V3BasePositionPrice = ({ price }: PositionPriceProps) => {
  return (
    <Td border="none">
      <Fade in>
        <Text fontFamily="heading" fontWeight={500} fontSize="14px" lineHeight="20px">
          {formatNumberToCurrencyBasedOnSize(price)}
        </Text>
      </Fade>
    </Td>
  );
};
