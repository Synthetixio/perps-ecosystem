import { gql } from '../v3/__generated__';

export const MARKETS_QUERY_V3 = gql(`
  query MarketsQueryV3($first: Int! $where: Market_filter) {
    markets(first: $first where: $where) {
      id
      perpsMarketId
      marketName
      marketSymbol
      price
      skew
      size
      sizeDelta
      currentFundingRate
      currentFundingVelocity
      feedId
      maxFundingVelocity
      skewScale
      lockedOiPercent
      marketOwner
      owner
      initialMarginRatioD18
      maintenanceMarginRatioD18
      liquidationRewardRatioD18
      maxSecondsInLiquidationWindow
      minimumPositionMargin
      maxLiquidationLimitAccumulationMultiplier
      makerFee
      takerFee
      factoryInitialized
    }
  }
`);
