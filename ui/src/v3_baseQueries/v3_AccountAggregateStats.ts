import { gql } from '../v3_perp/__generated__';

export const v3_ACCOUNT_AGGREGATE_STAT = gql(`
  query v3AccountAggregateStat($first: Int! $orderBy: AccountAggregateStat_orderBy $orderDirection: OrderDirection $where:AccountAggregateStat_filter) {
    accountAggregateStats(
        first:$first 
        orderBy:$orderBy 
        orderDirection:$orderDirection
        where: $where
    ) {
      id
      account {
        id
      }
      market {
        id
        marketName
        perpsMarketId
        marketSymbol
      }
      positionPnl
      accountPnl
      timestamp
      block
    }
  }
`);
