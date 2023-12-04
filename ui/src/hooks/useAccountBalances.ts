import { mainnetNetworkId, networkId } from '../utils/ProviderContext';
import { useTokenPrices } from './web3/useTokenPrices';
import { useEscrowBalance } from './web3/useEscrowBalance';
import { useDebtData } from './web3/useDebtData';
import { useMemo } from 'react';
import { useSUSDBalance } from './web3/useSUSDBalance';
import { SUSD_ADDRESS } from './contracts/constants';

export function useAccountBalances(walletAddress?: string) {
  const { data: tokenPrices } = useTokenPrices();
  const { data: debtData } = useDebtData({ networkId, walletAddress });
  const { data: escrowBalanceData } = useEscrowBalance({ networkId, walletAddress });
  const { data: mainnetEscrowBalanceData } = useEscrowBalance({
    networkId: mainnetNetworkId,
    walletAddress,
  });
  const { data: sUSDFeeBalance } = useSUSDBalance({ networkId, walletAddress: SUSD_ADDRESS });
  const { data: mainnetSUSDFeeBalance } = useSUSDBalance({
    networkId: mainnetNetworkId,
    walletAddress: SUSD_ADDRESS,
  });
  const { data: sUSDBalance } = useSUSDBalance({ networkId, walletAddress });
  const feeSUSD = useMemo(
    () =>
      (sUSDFeeBalance?.susdBalance?.toNumber() ?? 0) +
      (mainnetSUSDFeeBalance?.susdBalance?.toNumber() ?? 0),
    [sUSDFeeBalance, mainnetSUSDFeeBalance]
  );
  const userSUSD = useMemo(() => sUSDBalance?.susdBalance?.toNumber() ?? 0, [sUSDBalance]);
  const snxPrice = useMemo(() => tokenPrices?.snxPrice?.toNumber() ?? 0, [tokenPrices]);
  const sdsPrice = useMemo(() => tokenPrices?.sdsPrice?.toNumber() ?? 0, [tokenPrices]);
  const userSNX = useMemo(
    () => (debtData?.snxBalance?.toNumber() ?? 0) + (debtData?.snxMainnetBalance?.toNumber() ?? 0),
    [debtData]
  );
  const userSDS = useMemo(
    () => (debtData?.sdsBalance?.toNumber() ?? 0) + (debtData?.sdsMainnetBalance?.toNumber() ?? 0),
    [debtData]
  );
  const totalSDS = useMemo(
    () =>
      (debtData?.sdsTotalSupply?.toNumber() ?? 0) +
      (debtData?.sdsMainnetTotalSupply?.toNumber() ?? 0),
    [debtData]
  );
  const userEscrowSNX = useMemo(
    () =>
      (escrowBalanceData?.susdBalance?.toNumber() ?? 0) +
      (mainnetEscrowBalanceData?.susdBalance?.toNumber() ?? 0),
    [escrowBalanceData, mainnetEscrowBalanceData]
  );
  const protocolIssuanceRatio = useMemo(() => debtData?.issuanceRatio?.toNumber() ?? 0, [debtData]);
  const userIssuanceRatio = useMemo(() => {
    const issuanceRatio = (userSDS + sdsPrice) / ((userSNX + userEscrowSNX) * snxPrice);
    return issuanceRatio > 0.2 ? 0.2 : issuanceRatio;
  }, [snxPrice, userSNX, userSDS, userEscrowSNX, sdsPrice]);
  const snxStakedAmount = useMemo(
    () =>
      userIssuanceRatio
        ? (userIssuanceRatio / protocolIssuanceRatio) * (userSNX + userEscrowSNX)
        : 0,
    [protocolIssuanceRatio, userIssuanceRatio, userSNX, userEscrowSNX]
  );
  const totalSNX = useMemo(() => userSNX + userEscrowSNX, [userSNX, userEscrowSNX]);
  const estimatedUserFee = useMemo(
    () => (totalSDS ? feeSUSD * (userSDS / totalSDS) : undefined),
    [feeSUSD, userSDS, totalSDS]
  );
  const totalDebt = useMemo(() => userSDS * sdsPrice, [userSDS, sdsPrice]);

  return {
    totalSNX,
    snxStakedAmount,
    userSUSD,
    feeSUSD,
    estimatedUserFee,
    totalDebt,
  };
}
