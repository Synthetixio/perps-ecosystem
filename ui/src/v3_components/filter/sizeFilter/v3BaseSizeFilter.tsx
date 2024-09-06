import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Menu, MenuButton, MenuList, Input, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

interface V3BaseSizeFilterProps {
  route: string;
}

interface SizeState {
  min: string;
  max: string;
}

export const V3BaseSizeFilter = ({ route }: V3BaseSizeFilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const min = searchParams.get('min') ?? '';
  const max = searchParams.get('max') ?? '';
  console.log(`min; ${min} max; ${max}`);

  const sizeDisplay = (() => {
    if (min === '' && max === '') return 'Size';
    if (min !== '' && max !== '') return `$${min} - $${max}`;
    if (min !== '') return `$${min} - `;
    if (max !== '') return `$${max}`;
  })();

  const [size, setSize] = useState<SizeState>({
    min,
    max,
  });

  // Function to update the size state when the user inputs a value
  const update = (input: 'min' | 'max', value: number) => {
    const newSize = { ...size, [input]: value || '' };
    setSize(newSize);
  };

  const updateSize = (key: 'min' | 'max', value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    setSearchParams(newParams);
  };

  const clear = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete('min');
    newParams.delete('max');
    setSearchParams(newParams);
    setSize({ min: '', max: '' });
  };

  return (
    <Menu>
      <MenuButton
        marginLeft={4}
        color="gray.500"
        fontSize="16px"
        lineHeight="24px"
        fontWeight={400}
        width="25%"
        _hover={{
          background: 'none',
        }}
        _active={{
          background: 'none',
        }}
        textAlign="start"
        bg="none"
        borderWidth="1px"
        borderColor="gray.900"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {sizeDisplay}
      </MenuButton>
      <MenuList>
        <Flex
          bg="navy.900"
          borderColor="gray.900"
          borderWidth="1px"
          borderRadius="md"
          p={4}
          flexDirection="column"
          alignItems="flex-start"
        >
          <Flex alignItems="center">
            <Input
              mr={2}
              _placeholder={{
                color: 'whiteAlpha.600',
                fontSize: '14px',
                lineHeight: '20px',
                fontFamily: 'heading',
              }}
              placeholder="Min"
              type="number"
              onChange={(e) => update('min', e.target.valueAsNumber)}
              value={size.min}
              onBlur={(e) => updateSize('min', e.target.value)}
            />
            <Text fontFamily="heading" fontSize="16px" lineHeight="24px" color="gray.50">
              to
            </Text>
            <Input
              _placeholder={{
                color: 'whiteAlpha.600',
                fontSize: '14px',
                lineHeight: '20px',
                fontFamily: 'heading',
              }}
              ml={2}
              placeholder="Max"
              type="number"
              onChange={(e) => update('max', e.target.valueAsNumber)}
              value={size.max}
              onBlur={(e) => updateSize('max', e.target.value)}
            />
          </Flex>
          <Button
            color="cyan.500"
            mt={2}
            variant="link"
            onClick={() => {
              clear();
            }}
          >
            Clear
          </Button>
        </Flex>
      </MenuList>
    </Menu>
  );
};
