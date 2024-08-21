import { gql } from '../v3_perp/__generated__';

export const v3_TRADE = gql(`
  query v3Trade($first: Int!, $orderBy: Trade_orderBy, $orderDirection: OrderDirection, $where: Trade_filter) {
    trades(first: $first orderBy: $orderBy orderDirection: $orderDirection where: $where) {
        id 
    	position {
            id
        }
    	account {
            id
        }
    	market {
            id
            marketName
            marketSymbol
            price
        }
        fillPrice
        pnl
        accruedFunding
        sizeDelta
        newSize
    	volume
    	notionalAmount
        totalFees
        referralFees
        collectedFees
        settlementReward
        trackingCode
        settler
        block
        timestamp
        transactionHash
        interestCharged
        tradeType
    }
  }
`);
