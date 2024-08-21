import { gql } from '../v3_perp/__generated__';

export const v3_ACCOUNT = gql(`
  query v3Account($first: Int! $orderBy: Account_orderBy $orderDirection: OrderDirection $where: Account_filter) {
    accounts(first: $first orderBy: $orderBy orderDirection: $orderDirection where: $where) {
        id
        owner
        feesPaid
        pnl
        totalLiquidations
        totalTrades
        totalVolume
        totalOpenPositions
        totalClosedPositions
    }
  }
`);
