import { gql } from '@apollo/client';

export const TRADER_STATS = gql(`
query TraderStats($ids: [ID!]) {
  traders(where: {
    id_in: $ids
  }) {
    id
    lastTradeTimestamp
    feesPaidToSynthetix
    margin
    realizedPnl
    totalLiquidations
    totalMarginLiquidated
    totalVolume
  }
}
 `);
