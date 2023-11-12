import { Text, Tooltip, type TextProps } from '@chakra-ui/react';
import { useEnsName } from '../../../hooks/useEnsName';
import useAccountFavorites from '../../../hooks/store/useAccountFavorites';
import { truncateAddress } from '../../../utils';
import { useMemo } from 'react';

export const AccountName = ({ address, ...props }: { address: string } & TextProps) => {
  const { names } = useAccountFavorites();
  const { addressEnsName } = useEnsName(address);
  const accountName = useMemo(
    () => (names[address] ? names[address] : addressEnsName ?? truncateAddress(address)),
    [address, names, addressEnsName]
  );

  return (
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
      label={address}
      hasArrow
    >
      <Text {...props}>{accountName}</Text>
    </Tooltip>
  );
};
