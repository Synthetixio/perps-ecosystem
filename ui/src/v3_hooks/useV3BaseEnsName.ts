import { useEffect, useState } from 'react';
import { useGlobalProvidersWithFallback } from '@synthetixio/use-global-providers';

// Cache object to store ENS names for addresses
const ensCache = new Map<string, string | null>();
console.log('ensCache');
console.log(ensCache);

export const useV3BaseEnsName = (address?: string | null) => {
  const { globalProviders } = useGlobalProvidersWithFallback();
  const [addressEnsName, setAddressEnsName] = useState<string | null>(null);

  useEffect(() => {
    async function resolve() {
      if (!address || !globalProviders.mainnet) {
        setAddressEnsName(null);
        return;
      }

      // Check if the ENS name for this address is already cached
      if (ensCache.has(address)) {
        setAddressEnsName(ensCache.get(address) ?? null);
        return;
      }

      // Fetch the ENS name
      try {
        const name = await globalProviders.mainnet.lookupAddress(address);
        ensCache.set(address, name ?? null); // Cache the result
        setAddressEnsName(name);
      } catch (error) {
        console.error('Error fetching ENS name:', error);
        setAddressEnsName(null);
      }
    }
    resolve();
  }, [address, globalProviders]);

  return { addressEnsName };
};
