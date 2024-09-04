import { Td, useDisclosure, Flex, Popover, PopoverContent, Text, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { WalletIcon } from '../../components';

interface V3BaseAccountAddressProps {
  accountId: string;
  owner: string;
}

export const V3BaseAccountAddress = ({ accountId, owner }: V3BaseAccountAddressProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Td border="none" onMouseEnter={onOpen} onMouseLeave={onClose} position="relative">
      <Flex height="100%">
        <WalletIcon color="white" />
      </Flex>
      <Popover isOpen={isOpen}>
        <PopoverContent
          position="absolute"
          right={0}
          top={2}
          
          zIndex={10}
          width={"max-content"}
          bg="none"
          border={2}
          _focus={{ outline: 'none', boxShadow: 'none' }}
        >
          <RouterLink to={`/v3/owner/${owner}?accountId=${accountId}`}>
            <Box
              borderRadius="4px"
              bg="gray.900"
             
              
              _focus={{ outline: 'none', boxShadow: 'none' }}
              px={4}
              py={3}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              <Text color="gray.50" fontSize="14px" fontWeight={400} textAlign={"center"}>
                {accountId}
              </Text>
            </Box>
          </RouterLink>
        </PopoverContent>
      </Popover>
    </Td>
  );
};
