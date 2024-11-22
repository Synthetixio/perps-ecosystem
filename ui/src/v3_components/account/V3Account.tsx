import { Flex, Heading, Button, Box, Link, IconButton, Text } from '@chakra-ui/react';
import { ArrowBackIcon, ExternalLinkIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { basescanLink } from '../../utils';
import useAccountFavorites from '../../hooks/store/useAccountFavorites';
import CopyButton from '../../components/Shared/CopyButton/CopyButton';
import { StarOutlinedIcon } from '../../components/Icons/StarOutlinedIcon';
import V3BaseStats from './Trader/V3BaseStats';
import { V3BaseTraderAccountStats } from './Trader/V3BaseTraderAccountStats';
import { useV3BaseAccountOne } from '../../v3_hooks/useV3BaseAccountOne';
import { V3BaseAccountName } from './accountComponents/V3BaseAccountName';

interface V3AccountProps {
  accountId: string;
}

export const V3Account = ({ accountId }: V3AccountProps) => {
  const navigate = useNavigate();

  // Even if accountId is undefined, call the hook with a default value
  const { data: account, loading, error } = useV3BaseAccountOne({ id: accountId });

  const { isFavorite, saveAccountFavorite, removeAccountFavorite } = useAccountFavorites(
    account?.owner
  );

  if (loading) {
    return (
      <Box px={{ base: '16px', md: '40px' }}>
        <Text>Loading data...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box px={{ base: '16px', md: '40px' }}>
        <Text>Error loading data: {error.message}</Text>
      </Box>
    );
  }

  if (!account) {
    return (
      <Box px={{ base: '16px', md: '40px' }}>
        <Text>No Account Data Available</Text>
      </Box>
    );
  }

  return (
    <Flex flexDir="column" px={{ base: '16px', md: '40px' }} py={2}>
      <Box mt={12}>
        <Button
          variant="ghost"
          fontWeight="700"
          onClick={() => {
            if (window.history.state && window.history.state.idx > 0) {
              navigate(-1);
            } else {
              navigate('/', { replace: true });
            }
          }}
          leftIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Box>
      <Flex mt={8} justifyContent="space-between" flexWrap="wrap">
        <Flex flexDirection="column">
          <Flex alignItems="center" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            <Heading fontSize={{ base: '14px', md: '24px' }} p={0} mr={2}>
              Account:{' '}
              <V3BaseAccountName
                address={account.owner}
                accountId={account.id}
                display="inline-block"
              />
            </Heading>
            <CopyButton
              variant="ghost"
              size="sm"
              color="white"
              iconSize="16px"
              value={account ? account.owner : ''}
            />
            <Link
              alignItems="center"
              href={basescanLink(account ? account.owner : '')}
              target="_blank"
            >
              <IconButton
                aria-label="external-link"
                variant="ghost"
                icon={<ExternalLinkIcon fontSize="16px" />}
                color="white"
                size="sm"
              />
            </Link>
            <IconButton
              aria-label="favorites"
              variant="ghost"
              icon={
                isFavorite ? <StarIcon fontSize="16px" /> : <StarOutlinedIcon fontSize="16px" />
              }
              color="white"
              size="sm"
              onClick={() => {
                if (isFavorite) {
                  removeAccountFavorite(account ? account.owner : '');
                } else {
                  saveAccountFavorite(account ? account.owner : '');
                }
              }}
            />
          </Flex>
        </Flex>
      </Flex>
      <V3BaseStats account={account} />
      <V3BaseTraderAccountStats account={account} />
    </Flex>
  );
};

export default V3Account;
