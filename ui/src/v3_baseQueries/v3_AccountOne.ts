import { gql } from '../v3_perp/__generated__';

export const v3_ACCOUNT_ONE = gql(`
  query v3AccountOne($id: ID!) {
    account(id: $id) {
        id
        owner
        feesPaid
        pnl
        totalLiquidations
        totalMargin
        totalTrades
        totalVolume
        totalOpenPositions
        totalClosedPositions
    }
  }
`);
