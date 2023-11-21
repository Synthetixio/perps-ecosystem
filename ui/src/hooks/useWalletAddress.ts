import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useKwentaAccount } from './useKwentaAccount';
import { usePolynomialAccount } from './usePolynomialAccount';
import { useOwnerKwenta, useOwnerPolynomial } from './useOwnerBySmartId';

export const useWalletAddress = () => {
  const { walletAddress } = useParams();
  const [address, setAddress] = useState<string | null>(null);
  const [allAddresses, setallAddresses] = useState<string[]>([]);

  const { data: kwentaAccount } = useKwentaAccount(walletAddress?.toLowerCase());
  const { kwentaOwner } = useOwnerKwenta(walletAddress?.toLowerCase());
  const { data: polynomialAccount } = usePolynomialAccount(walletAddress?.toLowerCase());
  const { polynomialOwner } = useOwnerPolynomial(walletAddress?.toLowerCase());

  useEffect(() => {
    if (walletAddress && walletAddress.toLowerCase() !== address) {
      setAddress(walletAddress.toLowerCase());

      const potentialAddresses = [
        walletAddress?.toLowerCase(),
        kwentaAccount?.account,
        kwentaAccount?.owner,
        kwentaOwner,
        polynomialAccount?.account,
        polynomialAccount?.owner,
        polynomialOwner,
      ].filter((address): address is string => Boolean(address));

      const uniqueAddresses = Array.from(new Set(potentialAddresses));

      const newArr = JSON.stringify(uniqueAddresses.sort());
      const stateArr = JSON.stringify(allAddresses.sort());

      if (newArr !== stateArr) {
        setallAddresses(uniqueAddresses);
      }
    }
  }, [walletAddress]);

  return {
    address,
    allAddresses,
  };
};
