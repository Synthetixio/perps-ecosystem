import { gql } from '../v3_perp/__generated__';

export const v3_POSITION = gql(`
  query v3Position($first: Int!, $orderBy: Position_orderBy, $orderDirection: OrderDirection, $where: Position_filter) {
    positions(
        first:$first 
        orderBy:$orderBy 
        orderDirection:$orderDirection
        where: $where
        ){
          id
          trackingCode
          isOpen
          isLiquidated
          status
          direction
          openTimestamp
          closeTimestamp
          entryPrice
          exitPrice
          lastFillPrice
          size
          notionalAmount
          realizedPnl
          totalFees
          totalVolume
          totalTrades
          accruedFunding
          interestCharged
          averageEntryPrice
          unrealizedPnl
          market {
            id
            marketName
            marketSymbol
            price
          }
          account {
            id
            accountId
            owner
          }
          trades {
            id
            sizeDelta
            pnl
          }
          liquidation {
            id
            timestamp
            amountLiquidated
          }
      }
  }
  `);
