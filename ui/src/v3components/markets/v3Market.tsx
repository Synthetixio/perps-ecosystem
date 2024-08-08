import { Box, Fade, Flex, Td, Text } from '@chakra-ui/react';
import { CurrencyIcon } from '../../components/CurrencyIcon';


interface V3MarketProps {
  asset: string;
  assetKey: string;
  protocol?: string;
  direction?: 'LONG' | 'SHORT';
  isPosition?: boolean;
}

export const V3Market = ({
  asset,
  assetKey,
  protocol,
  direction,
  isPosition
}: V3MarketProps) => {
  const isLong = direction === 'LONG';

  return (
    <Td border="none">
      <Fade in>
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Box style={{ position: 'relative', width: '30px' }}>
              <CurrencyIcon currencyKey={assetKey} />
              <Box
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                }}
              >
              </Box>
            </Box>

            <Box ml={3}>
              <Text
                fontFamily="heading"
                fontSize="14px"
                lineHeight="20px"
                fontWeight={500}
                color="gray.50"
              >{`${asset.toUpperCase()}-PERP`}</Text>
              {Boolean(isPosition && direction) && (
                <Flex alignItems="center" gap={1}>
                  <Text
                    as="span"
                    fontSize="12px"
                    lineHeight="16px"
                    fontFamily="heading"
                    color={isLong ? 'green.500' : 'red.500'}
                  >
                    {direction}
                  </Text>

                </Flex>
              )}
            </Box>
          </Flex>
        </Flex>
      </Fade>
    </Td>
  );
};
