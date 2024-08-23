import { useQuery } from '@apollo/client';
import { v3_ACCOUNT_AGGREGATE_STAT } from '../v3_baseQueries/v3_AccountAggregateStats';
import { wei } from '@synthetixio/wei';
import { AccountStat } from '../v3_types';
import {
  AccountAggregateStatFilter,
  AccountAggregateStatOrderBy,
  OrderDirection,
} from '../v3_perp/__generated__/graphql';

interface UseV3BaseAccountAggregateStatsProps {
  first?: number;
  orderBy: AccountAggregateStatOrderBy;
  orderDirection: OrderDirection;
  accountAggregateStatFilter: AccountAggregateStatFilter;
}

export function useV3BaseAccountAggregateStat({
  first = 100,
  orderBy,
  orderDirection,
  accountAggregateStatFilter,
}: UseV3BaseAccountAggregateStatsProps) {
  const { loading, data, error } = useQuery(v3_ACCOUNT_AGGREGATE_STAT, {
    variables: {
      first,
      orderBy,
      orderDirection,
      where: accountAggregateStatFilter,
    },
  });

  const processedData: AccountStat[] = data
    ? data.accountAggregateStats.map((stat: any) => {
        return {
          id: stat.id,
          accountId: stat.account.id,
          accountPnl: wei(stat.accountPnl, 18, true).toNumber(),
          marketId: stat.market.id,
          marketName: stat.market.marketName,
          marketSymbol: stat.market.marketSymbol,
          positionPnl: wei(stat.positionPnl, 18, true).toNumber(),
          timestamp: stat.timestamp,
          block: stat.block,
          date: new Date(stat.timestamp * 1000).toLocaleDateString(),
        };
      })
    : [];

  return {
    loading,
    data: processedData,
    error,
  };
}
