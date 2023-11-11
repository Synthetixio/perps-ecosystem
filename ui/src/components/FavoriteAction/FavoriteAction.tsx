import { CloseIcon, EditIcon, StarIcon } from '@chakra-ui/icons';
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
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Modal,
} from '@chakra-ui/react';
import useAccountFavorites from '../../hooks/store/useAccountFavorites';
import { StarOutlinedIcon } from '../Icons/StarOutlinedIcon';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AccountName } from '../Shared/AccountName/AccountName';

export const FavoriteAction = () => {
  const {
    names,
    accountFavorites,
    saveAccountFavorite,
    removeAccountFavorite,
    saveAccountName,
    removeAccountName,
  } = useAccountFavorites();
  const [options, setOptions] = useState<string[] | undefined>(accountFavorites);
  const [isOpen, setIsOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<string | undefined>();
  const currentName = currentAddress ? names[currentAddress] : undefined;

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

  const onRequestName = (address: string) => {
    setCurrentAddress(address);
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setCurrentAddress(undefined);
    setIsOpen(false);
  };

  const onRemoveName = (address: string) => {
    removeAccountName(address);
    onCloseModal();
  };

  return (
    <>
      <Menu closeOnSelect={false} onOpen={onReset} onClose={onReset}>
        <MenuButton
          color="white"
          fontSize="16px"
          _hover={{ background: 'none' }}
          _active={{ background: 'none' }}
          bg="none"
          borderWidth="1px"
          borderColor="gray.900"
          size="md"
          ml={3}
          p={0}
          as={Button}
        >
          <StarOutlinedIcon />
        </MenuButton>
        <MenuList>
          <Flex
            bg="navy.900"
            borderColor="gray.900"
            borderWidth="1px"
            borderRadius="md"
            flexDirection="column"
            width="216px"
          >
            {options && options.length > 0 ? (
              options.map((account) => {
                const isFavorite = accountFavorites.includes(account);
                return (
                  <MenuItem key={account}>
                    <Flex width="100%" alignItems="center" justifyContent="space-between" gap={3}>
                      <Link to={`/${account}`}>
                        <AccountName
                          address={account}
                          fontSize="14px"
                          _hover={{ textDecoration: 'underline' }}
                        />
                      </Link>
                      <Flex alignItems="center">
                        <Tooltip
                          placement="top"
                          maxWidth="450px"
                          py={2}
                          px={4}
                          bg="gray.900"
                          color="white"
                          fontSize="14px"
                          fontFamily="heading"
                          borderRadius="4px"
                          label="Add a custom name to this account"
                          hasArrow
                        >
                          <IconButton
                            size="xs"
                            _hover={{ background: 'none' }}
                            _active={{ background: 'none' }}
                            aria-label="edit-name"
                            variant="ghost"
                            color="white"
                            icon={<EditIcon />}
                            onClick={() => onRequestName(account)}
                          />
                        </Tooltip>
                        <IconButton
                          size="xs"
                          _hover={{ background: 'none' }}
                          _active={{ background: 'none' }}
                          aria-label="favorite"
                          variant="ghost"
                          color="white"
                          icon={isFavorite ? <StarIcon /> : <StarOutlinedIcon />}
                          onClick={() => {
                            onSubmit(account);
                          }}
                        />
                      </Flex>
                    </Flex>
                  </MenuItem>
                );
              })
            ) : (
              <Text px={4} py="40px" textAlign="center" color="gray.500">
                No favorite accounts
              </Text>
            )}
          </Flex>
        </MenuList>
      </Menu>
      {currentAddress && (
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            onReset();
          }}
        >
          <ModalOverlay />
          <ModalContent bg="navy.700" border="1px" borderColor="gray.900" borderRadius="5px" p={2}>
            <Flex
              _hover={{ cursor: 'pointer' }}
              justifyContent="flex-end"
              pr={1}
              pt={1}
              onClick={onCloseModal}
            >
              <CloseIcon />
            </Flex>
            <ModalHeader>Add Account Name</ModalHeader>
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const accountName = (
                  e.currentTarget.elements.namedItem('accountName') as HTMLInputElement
                )?.value;
                saveAccountName({ address: currentAddress, name: accountName });
                onCloseModal();
              }}
            >
              <ModalBody>
                <Flex flexDirection="column">
                  <Input
                    defaultValue={currentName}
                    placeholder="Input account name"
                    type="text"
                    name="accountName"
                    required
                  />
                </Flex>
              </ModalBody>
              <ModalFooter gap={3}>
                {currentName && (
                  <Button
                    variant="outline"
                    color="red.400"
                    borderColor="red.400"
                    type="button"
                    onClick={() => onRemoveName(currentAddress)}
                  >
                    Remove
                  </Button>
                )}
                <Button variant="outline" type="submit">
                  Save
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
