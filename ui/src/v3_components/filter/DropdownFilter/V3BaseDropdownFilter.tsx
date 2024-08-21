import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuList, Flex } from '@chakra-ui/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { V3BaseDropdownCheckbox } from './V3BaseDropdownCheckbox';

interface DropdownOption {
  value: string;
  display: string;
}

interface V3BaseDropdownProps {
  route: string;
  options: DropdownOption[];
  queryParam: string;
  label: string;
}

export const V3BaseDropdownFilter = ({
  route,
  options,
  queryParam,
  label,
}: V3BaseDropdownProps) => {
  const [searchParams] = useSearchParams();
  const initialOptionValue = searchParams.get(queryParam) ?? options[0].value;

  const [activeOptionValue, setActiveOptionValue] = useState<string>(initialOptionValue);

  const navigate = useNavigate();

  const onClick = (optionValue: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(queryParam, optionValue);
    navigate({
      pathname: `/${route}`,
      search: `?${newParams.toString()}`,
    });
    setActiveOptionValue(optionValue);
  };

  return (
    <Menu>
      <MenuButton
        color="gray.500"
        fontSize="16px"
        lineHeight="24px"
        fontWeight={400}
        width="225px"
        _hover={{ background: 'none' }}
        _active={{ background: 'none' }}
        textAlign="start"
        bg="none"
        borderWidth="1px"
        borderColor="gray.900"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {label}: {options.find((option) => option.value === activeOptionValue)?.display}
      </MenuButton>
      <MenuList>
        <Flex
          bg="navy.900"
          p={1}
          borderColor="gray.900"
          borderWidth="1px"
          borderRadius="md"
          flexDirection="column"
        >
          {options.map((option) => (
            <V3BaseDropdownCheckbox
              key={option.value}
              label={option.display}
              onChange={() => onClick(option.value)}
              isChecked={activeOptionValue === option.value}
            />
          ))}
        </Flex>
      </MenuList>
    </Menu>
  );
};
