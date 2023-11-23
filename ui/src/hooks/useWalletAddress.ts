import { useParams } from 'react-router-dom';
import { useKwentaAccount } from './useKwentaAccount';
import { usePolynomialAccount } from './usePolynomialAccount';
import { useOwnerKwenta, useOwnerPolynomial } from './useOwnerBySmartId';

export const useWalletAddress = () => {
  const { walletAddress } = useParams();

  const { data: kwentaAccount } = useKwentaAccount(walletAddress?.toLowerCase());
  const { kwentaOwner } = useOwnerKwenta(walletAddress?.toLowerCase());
  const { data: polynomialAccount } = usePolynomialAccount(walletAddress?.toLowerCase());
  const { polynomialOwner } = useOwnerPolynomial(walletAddress?.toLowerCase());

  // get all possible addresses belonging to a single account
  const potentialAddresses = [
    walletAddress?.toLowerCase(),
    kwentaAccount?.account, //
    kwentaAccount?.owner,
    kwentaOwner,
    polynomialAccount?.account,
    polynomialAccount?.owner,
    polynomialOwner,
  ].filter((address): address is string => Boolean(address));

  // remove any duplicate addresses
  const uniqueAddresses = Array.from(new Set(potentialAddresses));
  const allAddresses = uniqueAddresses.sort();

  return {
    allAddresses,
  };
};
