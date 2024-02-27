import { Flex, Heading, Button, Box, Link, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ExternalLinkIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { optimisticEthercanLink } from '../utils/constants';
import { useKwentaAccount } from '../hooks/useKwentaAccount';
import { usePolynomialAccount } from '../hooks/usePolynomialAccount';
import { useOwnerKwenta, useOwnerPolynomial } from '../hooks/useOwnerBySmartId';
import { useEnsName } from '../hooks/useEnsName';
import { SmartWallet } from '../components/Shared';
import useAccountFavorites from '../hooks/store/useAccountFavorites';
import CopyButton from '../components/Shared/CopyButton/CopyButton';
import { StarOutlinedIcon } from '../components/Icons/StarOutlinedIcon';
import { AccountName } from '../components/Shared/AccountName/AccountName';
import { TraderAccountStats } from '../components/Trader/TraderAccountStats';
import Stats from '../components/Trader/Stats';
import { FC } from 'react';

export const Account: FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data: kwentaAccount } = useKwentaAccount(params?.walletAddress);
  const { data: polynomialAccount } = usePolynomialAccount(params?.walletAddress);

  const { kwentaOwner } = useOwnerKwenta(params?.walletAddress);

  const { polynomialOwner } = useOwnerPolynomial(params?.walletAddress);

  const { addressEnsName: kwentaEnsName } = useEnsName(kwentaOwner);
  const { addressEnsName: polynomialEnsName } = useEnsName(polynomialOwner);

  const { isFavorite, saveAccountFavorite, removeAccountFavorite } = useAccountFavorites(
    params?.walletAddress
  );

  const walletAddress = params.walletAddress ?? '';

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
              Account: <AccountName address={walletAddress} display="inline-block" />
            </Heading>
            <CopyButton
              variant="ghost"
              size="sm"
              color="white"
              iconSize="16px"
              value={walletAddress}
            />
            <Link alignItems="center" href={optimisticEthercanLink(walletAddress)} target="_blank">
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
                  removeAccountFavorite(walletAddress);
                } else {
                  saveAccountFavorite(walletAddress);
                }
              }}
            />
          </Flex>
          <Flex mt={8} wrap="wrap">
            {kwentaAccount && (
              <SmartWallet label="Kwenta Smart Account" account={kwentaAccount.account} />
            )}
            {kwentaOwner && (
              <SmartWallet label={kwentaEnsName ?? 'EOA Account'} account={kwentaOwner} />
            )}
            {polynomialOwner && (
              <SmartWallet label={polynomialEnsName ?? 'EOA Account'} account={polynomialOwner} />
            )}
            {polynomialAccount && (
              <SmartWallet
                ml="30px"
                label="Polynomial Smart Wallet"
                account={polynomialAccount.account}
              />
            )}
          </Flex>
        </Flex>
      </Flex>

      <Stats walletAddress={walletAddress} />
      {/* Open Positions, Account PNL, Closed Positions, Actions */}
      <TraderAccountStats
        kwentaAccount={kwentaAccount?.account ?? ''}
        polynomialAccount={polynomialAccount?.account ?? ''}
      />
    </Flex>
  );
};

export default Account;
