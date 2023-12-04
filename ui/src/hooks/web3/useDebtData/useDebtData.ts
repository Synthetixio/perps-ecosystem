import { useQuery } from '@tanstack/react-query';
import { wei } from '@synthetixio/wei';
import { BigNumber } from 'ethers';
import { useSynthetix, useSynthetixDebtShare } from '../useSynthetixContracts';
import { useSystemSettings } from '../useSynthetixContracts/useSystemSettings';
import { mainnetNetworkId } from '../../../utils/ProviderContext';
import { QUERY_KEYS } from '../../../utils';

const processQueryData = (
  result: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
) => {
  const [
    issuanceRatio,
    snxBalance,
    snxMainnetBalance,
    sdsBalance,
    sdsMainnetBalance,
    sdsTotalSupply,
    sdsMainnetTotalSupply,
  ] = result.map((item) => wei(item));
  return {
    issuanceRatio,
    snxBalance,
    snxMainnetBalance,
    sdsBalance,
    sdsMainnetBalance,
    sdsTotalSupply,
    sdsMainnetTotalSupply,
  };
};

export const useDebtData = ({
  networkId,
  walletAddress,
}: {
  networkId?: number;
  walletAddress?: string;
}) => {
  const { data: SystemSettings } = useSystemSettings({
    networkId: mainnetNetworkId,
    walletAddress,
  });
  const { data: Synthetix } = useSynthetix({ networkId, walletAddress });
  const { data: MainnetSynthetix } = useSynthetix({ networkId: mainnetNetworkId, walletAddress });
  const { data: SynthetixDebtShare } = useSynthetixDebtShare({
    networkId,
    walletAddress,
  });
  const { data: MainnetSynthetixDebtShare } = useSynthetixDebtShare({
    networkId: mainnetNetworkId,
    walletAddress,
  });
  return useQuery(
    [QUERY_KEYS.GET_DEBT_DATA, networkId, walletAddress],
    async () => {
      if (
        !walletAddress ||
        !Synthetix ||
        !SystemSettings ||
        !MainnetSynthetix ||
        !SynthetixDebtShare ||
        !MainnetSynthetixDebtShare
      )
        throw Error('Query should not be enabled if contracts are missing');

      return await Promise.all([
        SystemSettings.issuanceRatio(),
        Synthetix.balanceOf(walletAddress),
        MainnetSynthetix.balanceOf(walletAddress),
        SynthetixDebtShare.balanceOf(walletAddress),
        MainnetSynthetixDebtShare.balanceOf(walletAddress),
        SynthetixDebtShare.totalSupply(),
        MainnetSynthetixDebtShare.totalSupply(),
      ]);
    },
    {
      enabled: Boolean(
        networkId &&
          walletAddress !== null &&
          Synthetix &&
          SystemSettings &&
          MainnetSynthetix &&
          SynthetixDebtShare &&
          MainnetSynthetixDebtShare
      ),
      select: processQueryData,
      staleTime: 10000,
      retry: 0,
    }
  );
};
