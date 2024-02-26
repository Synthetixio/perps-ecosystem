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

export const TRADERS_TOTAL_PNL = gql(`
query TradersData($id: ID!) {
    traders(
      where: {id: $id}
    ) {
      feesPaidToSynthetix
      id
      lastTradeTimestamp
      margin
      realizedPnl
      totalLiquidations
      totalMarginLiquidated
      totalVolume
    }, 
  }
  `);

export const TRADER_TOTAL_PNL = gql(`
query TraderDataPNL($id: ID!) {
    trader(
      id: $id
    ) {
      feesPaidToSynthetix
      id
      lastTradeTimestamp
      margin
      realizedPnl
      totalLiquidations
      totalMarginLiquidated
      totalVolume
    }, 
  }
  `);

export const TRADER_FUTURES_POSITION = gql(`
query FuturesQuery($id: ID) {
    futuresPositions(
      where: {trader_: {id: $id}}
      orderBy: closeTimestamp
      orderDirection: desc
    ) {
      avgEntryPrice
      id
      fundingIndex
      feesPaidToSynthetix
      exitPrice
      entryPrice
      closeTimestamp
      initialMargin
      isLiquidated
      isOpen
      lastPrice
      leverage
      long
      margin
      netFunding
      netTransfers
      openTimestamp
      realizedPnl
      size
      skew
      totalVolume
      trades
      txHash
      unrealizedPnl
      market {
        id
        marketKey
        asset
      }
    }
  }
  `);

export const TRADER_POSITIONS_QUERY = gql(`
  query TraderPositionsMarket($where: FuturesPosition_filter, $skip: Int, $first: Int, $orderBy: FuturesPosition_orderBy, $orderDirection: OrderDirection) {
    futuresPositions(first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, where: $where) {
      market {
        id
        marketKey
        asset
      }
      trader {
        id
        totalLiquidations
      }
      isOpen
      entryPrice
      avgEntryPrice
      leverage
      feesPaidToSynthetix
      id
      realizedPnl
      unrealizedPnl
      feesPaidToSynthetix
      exitPrice
      lastPrice
      netFunding
      long
      size
      isLiquidated
      openTimestamp
      closeTimestamp
      trades
      txHash
    }
  }
`);
