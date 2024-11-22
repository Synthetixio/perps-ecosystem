import { useQuery } from '@apollo/client';
import Wei, { wei } from '@synthetixio/wei';
import { Account } from '../v3_types';
import { v3_ACCOUNT } from '../v3_baseQueries/v3_Account';
import { AccountFilter } from '../v3_perp/__generated__/graphql';

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
  first: number;
  accountFilter: AccountFilter;
}

export function useV3BaseAccounts({ first = 100, accountFilter }: UseV3BaseAccountOneProps) {
  const variables = {
    first,
    where: accountFilter,
  };

  const { loading, data, error } = useQuery(v3_ACCOUNT, {
    variables,
  });

  const processedData: Account[] = data
    ? data.accounts?.map((account) => ({
        id: account.id,
        owner: account.owner,
        feesPaid: wei(account.feesPaid, 18, true),
        pnl: wei(account.pnl, 18, true),
        totalLiquidations: wei(account.totalLiquidations),
        totalTrades: wei(account.totalTrades),
        totalVolume: wei(account.totalVolume, 18, true),
        totalOpenPositions: wei(account.totalOpenPositions),
        totalClosedPositions: wei(account.totalClosedPositions),
      }))
    : [];

  return {
    loading,
    data: processedData,
    error,
  };
}
