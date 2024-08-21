import { gql } from '../v3_perp/__generated__';

export const v3_MARKET = gql(`
  query v3Market($first: Int! $orderBy: Market_orderBy $orderDirection: OrderDirection $where: Market_filter) {
    markets(first: $first orderBy: $orderBy orderDirection: $orderDirection where: $where) {
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
        interestRate
        feedId
        maxFundingVelocity
        skewScale
        lockedOiPercent
        initialMarginRatioD18
        minimumInitialMarginRatioD18
        flagRewardRatioD18
        minimumPositionMargin
        maxSecondsInLiquidationWindow
        makerFee
        takerFee 
    }
  }
`);
