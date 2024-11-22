import { gql } from '../v3_perp/__generated__';

export const v3_LIQUIDATION = gql(`
  query v3Liquidation($first: Int!, $orderBy: Liquidation_orderBy, $orderDirection: OrderDirection, $where: Liquidation_filter) {
    liquidations(first: $first where: $where orderBy: $orderBy orderDirection: $orderDirection) {
      id
    	timestamp
    	transactionHash
    	account {
            id
            owner
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
    	position {
            id
            isLiquidated
            direction
            status
            realizedPnl
            totalFees
            accruedFunding
            totalTrades
            totalVolume
            averageEntryPrice
            trackingCode

      }
    }
  }
`);
