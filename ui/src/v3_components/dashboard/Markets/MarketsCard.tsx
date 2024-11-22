import { Flex, type FlexProps, Text } from '@chakra-ui/react';
import { formatNumberToUsd, formatPercent } from '@synthetixio/formatters';

import { CurrencyIcon } from '../../../components/CurrencyIcon';

interface MarketsCardProp extends FlexProps {
  marketSymbol: string;
  marketName: string;
  marketPrice: number;
  marketSize: number;
  fundingRateApr: number;
  number: number;
}

export const MarketsCard = ({
  marketSymbol,
  marketName,
  marketPrice,
  marketSize,
  fundingRateApr,
  number,
  ...props
}: MarketsCardProp) => {
  return (
    <Flex
      minHeight={117}
      justifyContent="center"
      alignItems="center"
      bg="navy.700"
      borderWidth="1px"
      borderColor="gray.900"
      borderRadius="5px"
      p={4}
      {...props}
    >
      <Flex width="100%" flexDirection="column" justifyContent="space-between">
        <Flex justifyContent="space-between" width="100%">
          <Flex alignItems="center">
            <CurrencyIcon currencyKey={marketSymbol} />
            <Text
              fontFamily="heading"
              fontSize="18px"
              fontWeight={700}
              lineHeight="28px"
              color="gray.50"
              ml={2}
            >{`${marketName.toUpperCase()}-PERP`}</Text>
          </Flex>
          <Text
            fontFamily="heading"
            fontWeight={700}
            fontSize="18px"
            lineHeight="28px"
            color="gray.500"
          >
            #{number}
          </Text>
        </Flex>
        <Flex mt={6} justifyContent="space-between">
          <Flex flexDirection="column">
            <Text fontSize="12px" fontWeight={700} fontFamily="heading" color="gray.500">
              Volume
            </Text>
            <Text color="gray.50" fontSize="14px" fontWeight={500} lineHeight="20px">
              {formatNumberToUsd(marketSize)}
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="flex-start">
            <Text fontSize="12px" fontWeight={700} fontFamily="heading" color="gray.500">
              Funding APR
            </Text>
            <Text
              color={fundingRateApr >= 0 ? 'green.500' : 'red.500'}
              fontSize="14px"
              fontWeight={500}
              lineHeight="20px"
            >
              {fundingRateApr >= 0 ? '+' : '-'}
              {formatPercent(fundingRateApr)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
