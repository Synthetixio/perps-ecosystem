import { Fade, Td, Text } from '@chakra-ui/react';

interface OrderTypeProps {
  size: number;
}

export const V3OrderType = ({ size }: OrderTypeProps) => {

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
