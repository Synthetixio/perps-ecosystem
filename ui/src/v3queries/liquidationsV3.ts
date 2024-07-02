import { gql } from '../v3/__generated__';

export const LIQUIDATIONS_QUERY_V3 = gql(`
  query LiquidationsQueryV3($first: Int!, $orderBy: PositionLiquidated_orderBy, $orderDirection: OrderDirection, $where: PositionLiquidated_filter) {
    positionLiquidateds(
        first: $first 
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
        ) {
        id
        timestamp
        accountId
        marketId
        amountLiquidated   
        currentPositionSize
    }
  }
`);
