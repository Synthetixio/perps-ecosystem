import Wei, { wei } from '@synthetixio/wei';
import { useWalletAddress } from './useWalletAddress';
import { useQuery } from '@apollo/client';
import { TRADER_STATS } from '../queries/trader';

interface Trader {
  __typename: string;
  id: string;
  lastTradeTimestamp: string;
  feesPaidToSynthetix: string;
  margin: string;
  realizedPnl: string;
  totalLiquidations: string;
  totalMarginLiquidated: string;
  totalVolume: string;
}

interface TraderTotalStats {
  totalPnl: Wei;
  totalVolume: Wei;
  totalLiquidations: Wei;
  totalFees: Wei;
  totalMarginLiquidated: Wei;
}

export const useTraderStats = () => {
  // get all addresses belonging to the account
  const { allAddresses } = useWalletAddress();

  // query the trader stats
  const {
    data: traderStats,
    loading: traderStatsLoading,
    error: traderStatsError,
  } = useQuery(TRADER_STATS, {
    variables: {
      ids: allAddresses,
    },
    pollInterval: 100000,
    skip: !allAddresses || allAddresses.length === 0,
  });

  const traderTotalStats: TraderTotalStats = traderStats?.traders.reduce(
    (acc: TraderTotalStats, trader: Trader) => {
      return {
        totalPnl: wei(acc.totalPnl, 18, true).add(wei(trader.realizedPnl, 18, true)),
        totalVolume: wei(acc.totalVolume, 18, true).add(wei(trader.totalVolume, 18, true)),
        totalLiquidations: wei(acc.totalLiquidations, 18, true).add(trader.totalLiquidations),
        totalFees: wei(acc.totalFees, 18, true).add(wei(trader.feesPaidToSynthetix, 18, true)),
        totalMarginLiquidated: wei(acc.totalMarginLiquidated, 18, true).add(
          wei(trader.totalMarginLiquidated, 18, true)
        ),
      };
    },
    {
      totalPnl: '0',
      totalVolume: '0',
      totalLiquidations: '0',
      totalFees: '0',
      totalMarginLiquidated: '0',
    }
  );

  return {
    traderStats,
    traderStatsLoading,
    traderStatsError,
    traderTotalStats,
  };
};
