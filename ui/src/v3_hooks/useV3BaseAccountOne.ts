import { useQuery } from '@apollo/client';
import Wei, { wei } from '@synthetixio/wei';
import { Account } from '../v3_types';
import { v3_ACCOUNT_ONE } from '../v3_baseQueries/v3_AccountOne';

export interface AccountInterface {
  id: string;
  owner: string;
  feesPaid: Wei;
  pnl: Wei;
  totalLiquidations: Wei;
  totalTrades: Wei;
  totalVolume: Wei;
  totalOpenPositions: Wei;
  totalClosedPositions: Wei;
}

interface UseV3BaseAccountOneProps {
  id: string;
}

export function useV3BaseAccountOne({ id }: UseV3BaseAccountOneProps) {
  const variables = {
    id,
  };

  const { loading, data, error } = useQuery(v3_ACCOUNT_ONE, {
    variables,
  });

  const processedData: Account | null = data?.account
    ? {
        id: data.account.id,
        owner: data.account.owner,
        feesPaid: wei(data.account.feesPaid, 18, true),
        pnl: wei(data.account.pnl, 18, true),
        totalLiquidations: wei(data.account.totalLiquidations),
        totalTrades: wei(data.account.totalTrades),
        totalVolume: wei(data.account.totalVolume, 18, true),
        totalOpenPositions: wei(data.account.totalOpenPositions),
        totalClosedPositions: wei(data.account.totalClosedPositions),
      }
    : null;

  return {
    loading,
    data: processedData,
    error,
  };
}
