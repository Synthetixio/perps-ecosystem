import { useQuery } from '@tanstack/react-query';
import { ethers } from 'ethers';
import { Provider } from '@ethersproject/providers';
import { isSupportedNetworkId, NetworkIdByName, NetworkNameById } from './common';
import type { ProxyERC20sUSD } from '@synthetixio/contracts/build/mainnet/deployment/ProxyERC20sUSD';
import type { ProxyERC20sUSD as ProxyERC20sUSDOvm } from '@synthetixio/contracts/build/mainnet-ovm/deployment/ProxyERC20sUSD';
import { useGlobalProvidersWithFallback } from '@synthetixio/use-global-providers';
import { QUERY_KEYS } from '../../../utils';

const contracts = {
  mainnet: async () =>
    await import('@synthetixio/contracts/build/mainnet/deployment/ProxyERC20sUSD'),
  'mainnet-ovm': async () =>
    await import('@synthetixio/contracts/build/mainnet-ovm/deployment/ProxyERC20sUSD'),
  goerli: async () => await import('@synthetixio/contracts/build/goerli/deployment/ProxysUSD'),
  'goerli-ovm': async () =>
    await import('@synthetixio/contracts/build/goerli-ovm/deployment/ProxysUSD'),
};

export const getProxyERC20sUSD = async ({
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
  return new ethers.Contract(address, abi, signerOrProvider) as ProxyERC20sUSDOvm | ProxyERC20sUSD;
};
export const useProxyERC20sUSD = ({
  networkId,
  walletAddress,
}: {
  networkId?: number;
  walletAddress?: string;
}) => {
  const { globalProviders } = useGlobalProvidersWithFallback();
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PROXY_ERC20_SUSD, { networkId, walletAddress }],
    queryFn: async () => {
      if (!networkId) throw Error('Network id required');
      const provider =
        networkId === NetworkIdByName.mainnet ? globalProviders.mainnet : globalProviders.optimism;

      return await getProxyERC20sUSD({ networkId, provider });
    },
    staleTime: Infinity,
    enabled: Boolean(networkId && walletAddress),
    retry: 0,
  });
};
