import { Box, Flex, type ThemeTypings, Text, type FlexProps } from '@chakra-ui/react';

interface KeyColourProps extends FlexProps {
  colour?: ThemeTypings['colors'];
  label: string;
}

export const KeyColour = ({ colour, label, ...props }: KeyColourProps) => {
  return (
    <Flex alignItems="center" gap={2} {...props}>
      {colour && <Box width="8px" height="8px" bg={colour} borderRadius="full" />}
      <Text fontSize="12px" lineHeight="16px" fontFamily="heading" color="gray.500">
        {label}
      </Text>
    </Flex>
  );
};
