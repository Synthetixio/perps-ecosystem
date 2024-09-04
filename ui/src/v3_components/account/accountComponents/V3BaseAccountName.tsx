import { Text, Tooltip, type TextProps } from '@chakra-ui/react';
// import { useEnsName } from '../../../hooks/useEnsName';
// import useAccountFavorites from '../../../hooks/store/useAccountFavorites';
import { truncateAddress } from '../../../utils';
import { useMemo } from 'react';

interface V3BaseAccountNameProps extends TextProps {
  address: string;
  ensName?: string | null;
  accountId: string;
}

export const V3BaseAccountName = ({ address, accountId, ensName, ...props }: V3BaseAccountNameProps) => {

  const accountName = useMemo(
    () => ensName ?? truncateAddress(address), // Use ENS name if available, otherwise truncate
    [address]
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
