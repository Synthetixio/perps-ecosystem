import { SimpleGrid } from '@chakra-ui/react';
import { useAccountBalances } from '../../hooks/useAccountBalances';
import CardStats from '../Trader/CardStats';

export const WalletBalances = ({ walletAddress }: { walletAddress: string }) => {
  const { totalSNX, userSUSD, feeSUSD, estimatedUserFee, totalDebt } =
    useAccountBalances(walletAddress);

  return (
    <SimpleGrid mt="10px" minChildWidth="300px" spacing="10px">
      <CardStats label={'sUSD Balance on'} value={userSUSD} hasOptimism />
      <CardStats
        label={'SNX Balance on'}
        value={totalSNX}
        tooltip={'Escrow + User'}
        hasMainnet
        hasOptimism
      />
      <CardStats label={'Total Debt on '} value={totalDebt} prefix={'$'} hasMainnet hasOptimism />
      <CardStats
        label={'Current Estimated Epoch Fees'}
        value={estimatedUserFee}
        prefix={'$'}
        tooltip={'Fee earned from SNX Staking'}
      />
      <CardStats
        label={'Current Total Epoch Fees on'}
        value={feeSUSD}
        prefix={'$'}
        hasMainnet
        hasOptimism
      />
    </SimpleGrid>
  );
};
