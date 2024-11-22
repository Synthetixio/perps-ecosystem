import { gql } from '../v3_perp/__generated__';

export const v3_ACCOUNT_FULL = gql(`
  query v3AccountFull(
    $first: Int! 
    $orderBy: Account_orderBy,
    $orderDirection: OrderDirection,
    $where: Account_filter,
    $positionFirst: Int!,
    $positionOrderBy: Position_orderBy,
    $positionOrderDirection: OrderDirection,
    $positionWhere: Position_filter,
    $liquidationFirst: Int!,
    $liquidationOrderBy: Liquidation_orderBy,
    $liquidationOrderDirection: OrderDirection,
    $liquidationWhere: Liquidation_filter,
    ) {
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
        positions(
            first:$positionFirst 
            orderBy:$positionOrderBy 
            orderDirection:$positionOrderDirection
            where: $positionWhere
            )
                {
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
                    trades {
                      id
                      sizeDelta
                      pnl
                    }
                }
                liquidations(first: $liquidationFirst where: $liquidationWhere orderBy: $liquidationOrderBy orderDirection: $liquidationOrderDirection) {
                        id
    	                timestamp
    	                transactionHash
    	                account {
                            id
                        }
    	                market {
                            id
                            marketName
                            marketSymbol
                            price
                        }
    	                amountLiquidated
    	                liquidationType
    	                currentPositionSize
    	                notionalAmount
    	                marketPrice
    	              
                }
    }
  }
`);
