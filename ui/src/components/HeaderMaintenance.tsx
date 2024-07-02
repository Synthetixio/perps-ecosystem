import { type FC, useEffect } from 'react';
import {
  Flex,

  useColorMode,
} from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import { SNXIcon } from './Icons/';
import { PerpsStats } from './PerpsStats';


export const HeaderMaintenance: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

 




  useEffect(() => {
    if (colorMode === 'light') {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  return (
    <>
      <Flex
        as="header"
        px={{ base: '16px', md: '40px' }}
        py={2}
        bg="navy.900"
        height="65px"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth="1px"
        borderBottomColor="gray.900"
        borderTopWidth="1px"
        borderTopColor="transparent"
      >
        <Flex alignItems="center" sx={{ gap: { base: '8px', md: '24px' } }}>
          <RouterLink to="/" style={{ whiteSpace: 'nowrap' }}>
            <Flex alignItems="center">
              <SNXIcon fill="cyan.400" />
              <PerpsStats ml="10px" display={{ base: 'none', c900: 'initial' }} />
            </Flex>
          </RouterLink>
         
         
        </Flex>
      </Flex>
    </>
  );
};