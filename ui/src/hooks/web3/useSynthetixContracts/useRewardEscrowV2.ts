import { useQuery } from '@tanstack/react-query';
import { ethers } from 'ethers';
import { Provider } from '@ethersproject/providers';
import { isSupportedNetworkId, NetworkIdByName, NetworkNameById } from './common';

import type { RewardEscrowV2 } from '@synthetixio/contracts/build/mainnet/deployment/RewardEscrowV2';
import type { RewardEscrowV2 as RewardEscrowV2Ovm } from '@synthetixio/contracts/build/mainnet-ovm/deployment/RewardEscrowV2';
import { useGlobalProvidersWithFallback } from '@synthetixio/use-global-providers';
import { QUERY_KEYS } from '../../../utils';

const contracts = {
  mainnet: async () =>
    await import('@synthetixio/contracts/build/mainnet/deployment/RewardEscrowV2'),
  'mainnet-ovm': async () =>
    await import('@synthetixio/contracts/build/mainnet-ovm/deployment/RewardEscrowV2'),
  goerli: async () => await import('@synthetixio/contracts/build/goerli/deployment/RewardEscrowV2'),
  'goerli-ovm': async () =>
    await import('@synthetixio/contracts/build/goerli-ovm/deployment/RewardEscrowV2'),
};

export const getRewardEscrowV2 = async ({
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
  return new ethers.Contract(address, abi, signerOrProvider) as RewardEscrowV2 | RewardEscrowV2Ovm;
};
export const useRewardEscrowV2 = ({
  networkId,
  walletAddress,
}: {
  networkId?: number;
  walletAddress?: string;
}) => {
  const { globalProviders } = useGlobalProvidersWithFallback();
  return useQuery({
    queryKey: [QUERY_KEYS.GET_REWARD_ESCROW_V2, { networkId, walletAddress }],
    queryFn: async () => {
      if (!networkId) throw Error('Network id required');

      const provider =
        networkId === NetworkIdByName.mainnet ? globalProviders.mainnet : globalProviders.optimism;

      return await getRewardEscrowV2({ networkId, provider });
    },
    staleTime: Infinity,
    enabled: Boolean(networkId && walletAddress),
    retry: 0,
  });
};
