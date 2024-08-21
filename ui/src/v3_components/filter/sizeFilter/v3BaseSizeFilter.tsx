import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Menu, MenuButton, MenuList, Input, Text } from '@chakra-ui/react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface SizeState {
  min: string;
  max: string;
}

interface V3BaseSizeFilterProps {
  route: string;
}

export const V3BaseSizeFilter = ({ route }: V3BaseSizeFilterProps) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const initialMin = searchParams.get('min') ?? '';
  const initialMax = searchParams.get('max') ?? '';
  const [size, setSize] = useState<SizeState>({
    min: initialMin,
    max: initialMax,
  });

  // Function to update the state when the user types in the min or max input fields
  const updateSize = (input: 'min' | 'max', value: string) => {
    setSize((prevSize) => ({ ...prevSize, [input]: value })); // Update the state for min or max
  };

  // Function to update the URL parameters when the user is done editing (onBlur event)
  const onClose = () => {
    const newParams = new URLSearchParams(searchParams.toString()); // Clone existing URL parameters

    // Set or remove the 'min' parameter based on user input
    if (size.min !== '') {
      newParams.set('min', size.min);
    } else {
      newParams.delete('min');
    }

    // Set or remove the 'max' parameter based on user input
    if (size.max !== '') {
      newParams.set('max', size.max);
    } else {
      newParams.delete('max');
    }

    // Navigate to the updated URL with the modified search parameters
    navigate({
      pathname: `/${route}`,
      search: `?${newParams.toString()}`,
    });
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
        {size.min === '' && size.max === '' && 'Size'}
        {size.min !== '' && `$${size.min} - `}
        {size.max !== '' && `$${size.max}`}
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
              onChange={(e) => updateSize('min', e.target.value)}
              value={size.min}
              onBlur={() => onClose()}
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
              onChange={(e) => updateSize('max', e.target.value)}
              value={size.max}
              onBlur={() => onClose()}
            />
          </Flex>
          <Button
            color="cyan.500"
            mt={2}
            variant="link"
            onClick={() => {
              setSize({ min: '', max: '' });
              onClose();
            }}
          >
            Clear
          </Button>
        </Flex>
      </MenuList>
    </Menu>
  );
};
