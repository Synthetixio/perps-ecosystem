import { useQuery } from '@tanstack/react-query';
import { ethers } from 'ethers';
import { Provider } from '@ethersproject/providers';
import { isSupportedNetworkId, NetworkIdByName, NetworkNameById } from './common';

import type { SynthetixDebtShare } from '@synthetixio/contracts/build/mainnet/deployment/SynthetixDebtShare';
import type { SynthetixDebtShare as SynthetixDebtShareOvm } from '@synthetixio/contracts/build/mainnet-ovm/deployment/SynthetixDebtShare';
import { useGlobalProvidersWithFallback } from '@synthetixio/use-global-providers';
import { QUERY_KEYS } from '../../../utils';

const contracts = {
  mainnet: async () =>
    await import('@synthetixio/contracts/build/mainnet/deployment/SynthetixDebtShare'),
  'mainnet-ovm': async () =>
    await import('@synthetixio/contracts/build/mainnet-ovm/deployment/SynthetixDebtShare'),
  goerli: async () =>
    await import('@synthetixio/contracts/build/goerli/deployment/SynthetixDebtShare'),
  'goerli-ovm': async () =>
    await import('@synthetixio/contracts/build/goerli-ovm/deployment/SynthetixDebtShare'),
};

export const getSynthetixDebtShare = async ({
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
  return new ethers.Contract(address, abi, signerOrProvider) as
    | SynthetixDebtShare
    | SynthetixDebtShareOvm;
};
export const useSynthetixDebtShare = ({
  networkId,
  walletAddress,
}: {
  networkId?: number;
  walletAddress?: string;
}) => {
  const { globalProviders } = useGlobalProvidersWithFallback();
  return useQuery({
    queryKey: [QUERY_KEYS.GET_SYNTHETIX_DEBT_SHARE, { networkId, walletAddress }],
    queryFn: async () => {
      if (!networkId) throw Error('Network id required');

      const provider =
        networkId === NetworkIdByName.mainnet ? globalProviders.mainnet : globalProviders.optimism;
      return await getSynthetixDebtShare({ networkId, provider });
    },
    staleTime: Infinity,
    enabled: Boolean(networkId && walletAddress),
    retry: 0,
  });
};
