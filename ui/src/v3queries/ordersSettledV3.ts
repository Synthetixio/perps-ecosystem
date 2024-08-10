import { gql } from '../v3/__generated__';

export const ORDERS_SETTLED_QUERY_V3 = gql(`
  query OrdersSettledQueryV3($first: Int!, $orderBy: OrderSettled_orderBy, $orderDirection: OrderDirection, $where: OrderSettled_filter) {
    orderSettleds(
        first:$first 
        orderBy:$orderBy 
        orderDirection:$orderDirection
        where: $where
        ){
        id
        timestamp
        marketId
        accountId
        fillPrice
        accruedFunding
        sizeDelta
        newSize
        totalFees
        referralFees
        collectedFees
        settlementReward
        trackingCode
        settler

      }
  }
  `);
