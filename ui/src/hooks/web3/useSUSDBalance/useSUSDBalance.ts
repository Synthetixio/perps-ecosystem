import { wei } from '@synthetixio/wei';
import { useQuery } from '@tanstack/react-query';
import { useProxyERC20sUSD } from '../useSynthetixContracts/useProxyERC20sUSD';
import { QUERY_KEYS } from '../../../utils';

export const useSUSDBalance = ({
  networkId,
  walletAddress,
}: {
  networkId?: number;
  walletAddress?: string;
}) => {
  const { data: ProxyERC20sUSD } = useProxyERC20sUSD({ networkId, walletAddress });
  return useQuery(
    [QUERY_KEYS.GET_SUSD_BALANCE, { networkId, walletAddress }],
    async () => {
      if (!networkId || !walletAddress || !ProxyERC20sUSD) {
        throw Error('Query should not be enabled when missing network, wallet or contract');
      }
      const susdBalanceBn = await ProxyERC20sUSD?.balanceOf(walletAddress);
      return {
        susdBalance: wei(susdBalanceBn || 0),
      };
    },
    {
      enabled: Boolean(networkId && walletAddress && ProxyERC20sUSD),
      retry: 0,
    }
  );
};
