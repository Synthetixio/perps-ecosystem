import { wei } from '@synthetixio/wei';
import { useQuery } from '@tanstack/react-query';
import { Contract } from 'ethers';
import { useGlobalProvidersWithFallback } from '@synthetixio/use-global-providers';
import { snxAbi, snxPoolAddressMainnet } from '../../contracts/snx';
import { sdsAbi, sdsPoolAddressMainnet } from '../../contracts/sds';
import { QUERY_KEYS } from '../../../utils';

export const useTokenPrices = () => {
  const { globalProviders, toggleRpc, usingInfura } = useGlobalProvidersWithFallback();
  return useQuery({
    queryKey: [QUERY_KEYS.GET_TOKEN_PRICES],
    queryFn: async () => {
      const snxContract = new Contract(snxPoolAddressMainnet, snxAbi, globalProviders.mainnet);
      const sdsContract = new Contract(sdsPoolAddressMainnet, sdsAbi, globalProviders.mainnet);

      const [snxPriceBn, sdsPriceBn] = await Promise.all([
        snxContract.latestAnswer(),
        sdsContract.latestAnswer(),
      ]);
      const snxPrice = wei(snxPriceBn, 8);
      const sdsPrice = wei(sdsPriceBn, 27);

      return {
        snxPrice,
        sdsPrice,
      };
    },
    onError: () => (usingInfura ? toggleRpc() : null),
    staleTime: 10000,
    retry: 0,
  });
};
