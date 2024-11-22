import { Fade, Td, Text } from '@chakra-ui/react';

interface PositionTypeProps {
  size: number;
}

export const V3BasePositionType = ({ size }: PositionTypeProps) => {
  const orderType = size > 0 ? 'LONG' : 'SHORT';

  return (
    <Td border="none">
      <Fade in>
        <Text fontSize="14px" lineHeight="20px" fontFamily="heading" fontWeight={500}>
          {orderType}
        </Text>
      </Fade>
    </Td>
  );
};
