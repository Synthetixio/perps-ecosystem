import { useQuery } from '@tanstack/react-query';
import { ethers } from 'ethers';
import { Provider } from '@ethersproject/providers';
import { isSupportedNetworkId, NetworkIdByName, NetworkNameById } from './common';
import type { SystemSettings } from '@synthetixio/contracts/build/mainnet/deployment/SystemSettings';
import type { SystemSettings as SystemSettingsOvm } from '@synthetixio/contracts/build/mainnet-ovm/deployment/SystemSettings';
import { useGlobalProvidersWithFallback } from '@synthetixio/use-global-providers';

const contracts = {
  mainnet: async () =>
    await import('@synthetixio/contracts/build/mainnet/deployment/SystemSettings'),
  'mainnet-ovm': async () =>
    await import('@synthetixio/contracts/build/mainnet-ovm/deployment/SystemSettings'),
  goerli: async () => await import('@synthetixio/contracts/build/goerli/deployment/SystemSettings'),
  'goerli-ovm': async () =>
    await import('@synthetixio/contracts/build/goerli-ovm/deployment/SystemSettings'),
};

export const getSystemSettings = async ({
  networkId,
  signer,
  provider,
}: {
  networkId: number;
  signer?: ethers.Signer | null;
  provider: Provider;
}) => {
  const signerOrProvider = signer ?? provider;

  const supportedNetworkId = isSupportedNetworkId(networkId);
  if (!supportedNetworkId) {
    throw Error(`${networkId} is not supported`);
  }
  const networkName = NetworkNameById[networkId];
  const { address, abi } = await contracts[networkName]();
  return new ethers.Contract(address, abi, signerOrProvider) as SystemSettings | SystemSettingsOvm;
};
export const useSystemSettings = ({
  networkId,
  walletAddress,
}: {
  networkId?: number;
  walletAddress?: string;
}) => {
  const { globalProviders } = useGlobalProvidersWithFallback();

  return useQuery({
    queryKey: ['useSystemSettings', { networkId, walletAddress }],
    queryFn: async () => {
      if (!networkId) throw Error('Network id required');

      const provider =
        networkId === NetworkIdByName.mainnet ? globalProviders.mainnet : globalProviders.optimism;
      return await getSystemSettings({ networkId, provider });
    },
    staleTime: Infinity,
    enabled: Boolean(networkId && walletAddress),
    retry: 0,
  });
};
