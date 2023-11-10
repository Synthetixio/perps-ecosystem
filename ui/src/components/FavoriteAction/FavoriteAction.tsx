import { StarIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import useAccountFavorites from '../../hooks/store/useAccountFavorites';
import { truncateAddress } from '../../utils';
import { StarOutlinedIcon } from '../Icons/StarOutlinedIcon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const FavoriteAction = () => {
  const { accountFavorites, saveAccountFavorite, removeAccountFavorite } = useAccountFavorites();
  const [options, setOptions] = useState<string[] | undefined>(accountFavorites);
  const onSubmit = async (address: string) => {
    if (accountFavorites.includes(address)) {
      removeAccountFavorite(address);
    } else {
      saveAccountFavorite(address);
    }
  };

  const onReset = () => {
    setOptions(accountFavorites);
  };

  return (
    <Menu closeOnSelect={false} onOpen={onReset} onClose={onReset}>
      <MenuButton
        color='white'
        fontSize='16px'
        _hover={{ background: 'none' }}
        _active={{ background: 'none' }}
        bg='none'
        borderWidth='1px'
        borderColor='gray.900'
        size='md'
        ml={3}
        p={0}
        as={Button}
      >
        <StarOutlinedIcon />
      </MenuButton>
      <MenuList>
        <Flex
          bg='navy.900'
          borderColor='gray.900'
          borderWidth='1px'
          borderRadius='md'
          flexDirection='column'
          width='200px'
        >
          {options && options.length > 0 ? options.map((account) => {
            const isFavorite = accountFavorites.includes(account);
            return <MenuItem key={account}>
              <Flex width='100%' alignItems='center' justifyContent='space-between' gap={3}>
                <Link to={`/${account}`}>
                  <Tooltip
                    placement='top'
                    maxWidth='450px'
                    py={2}
                    px={4}
                    bg='gray.900'
                    color='white'
                    fontSize='14px'
                    fontFamily='heading'
                    borderRadius='4px'
                    label={account}
                    hasArrow
                  >
                    <Text fontSize='14px' _hover={{ textDecoration: 'underline' }}>
                      {truncateAddress(account)}
                    </Text>
                  </Tooltip>
                </Link>
                <IconButton size='xs' _hover={{ background: 'none' }}
                            _active={{ background: 'none' }} aria-label='favorite' variant='ghost' color='white'
                            icon={isFavorite ? <StarIcon /> : <StarOutlinedIcon />} onClick={() => onSubmit(account)} />
              </Flex>
            </MenuItem>;
          }) : <Text px={4} py='40px' textAlign='center' color='gray.500'>No favorite accounts</Text>}
        </Flex>
      </MenuList>
    </Menu>
  );
};
