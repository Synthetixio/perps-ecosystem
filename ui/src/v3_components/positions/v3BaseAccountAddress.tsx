import { Td, useDisclosure, Flex, Popover, PopoverContent, Text, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { WalletIcon } from '../../components';

interface V3BaseAccountAddressProps {
  address: string;
}

export const V3BaseAccountAddress = ({ address }: V3BaseAccountAddressProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Td border="none" onMouseEnter={onOpen} onMouseLeave={onClose} position="relative">
      <Flex height="100%">
        <WalletIcon color="white" />
      </Flex>
      <Popover isOpen={isOpen}>
        <PopoverContent
          position="absolute"
          left={-375}
          top={-5}
          zIndex={10}
          bg="none"
          _focus={{ outline: 'none', boxShadow: 'none' }}
        >
          <RouterLink to={`/v3/account/${address}`}>
            <Box
              borderRadius="4px"
              bg="gray.900"
              width="fit-content"
              _focus={{ outline: 'none', boxShadow: 'none' }}
              px={4}
              py={3}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              <Text color="gray.50" fontSize="14px" fontWeight={400}>
                {address}
              </Text>
            </Box>
          </RouterLink>
        </PopoverContent>
      </Popover>
    </Td>
  );
};
