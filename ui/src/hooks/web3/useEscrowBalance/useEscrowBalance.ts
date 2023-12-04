import { wei } from '@synthetixio/wei';
import { useQuery } from '@tanstack/react-query';
import { useRewardEscrowV2 } from '../useSynthetixContracts';

export const useEscrowBalance = ({
  networkId,
  walletAddress,
}: {
  networkId?: number;
  walletAddress?: string;
}) => {
  const { data: RewardEscrowV2 } = useRewardEscrowV2({ networkId, walletAddress });
  return useQuery(
    [walletAddress, networkId, 'useEscrowBalance'],
    async () => {
      if (!networkId || !walletAddress || !RewardEscrowV2) {
        throw Error('Query should not be enabled when missing network, wallet or contract');
      }
      const escrowBalanceBn = await RewardEscrowV2?.balanceOf(walletAddress);
      return {
        susdBalance: wei(escrowBalanceBn || 0),
      };
    },
    {
      enabled: Boolean(networkId && walletAddress && RewardEscrowV2),
    }
  );
};
