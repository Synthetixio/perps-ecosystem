import { Fade, Td } from '@chakra-ui/react';
import { formatPercent } from '@synthetixio/formatters';

interface FundingProps {
  amount: number;
  time: 1 | 24;
}

export const V3Funding = ({ amount, time }: FundingProps) => {
  const isPositive = amount >= 0;

  return (
    <Td
      border="none"
      fontSize="14px"
      lineHeight="20px"
      fontFamily="heading"
      fontWeight={500}
      color={isPositive ? 'green.500' : 'red.500'}
    >
      <Fade in>
        {
          time === 1 ?
            formatPercent(amount, { maximumFractionDigits: 6 }) :
            formatPercent(amount, { maximumFractionDigits: 4 })
        }

      </Fade>
    </Td>
  );
};
