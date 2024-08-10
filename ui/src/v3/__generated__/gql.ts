/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query LiquidationsQueryV3($first: Int!, $orderBy: PositionLiquidated_orderBy, $orderDirection: OrderDirection, $where: PositionLiquidated_filter) {\n    positionLiquidateds(\n        first: $first \n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        where: $where\n        ) {\n        id\n        timestamp\n        accountId\n        marketId\n        amountLiquidated   \n        currentPositionSize\n    }\n  }\n':
    types.LiquidationsQueryV3Document,
  '\n  query MarketsQueryV3($first: Int! $where: Market_filter) {\n    markets(first: $first where: $where) {\n      id\n      perpsMarketId\n      marketName\n      marketSymbol\n      price\n      skew\n      size\n      sizeDelta\n      currentFundingRate\n      currentFundingVelocity\n      feedId\n      maxFundingVelocity\n      skewScale\n      lockedOiPercent\n      marketOwner\n      owner\n      initialMarginRatioD18\n      maintenanceMarginRatioD18\n      liquidationRewardRatioD18\n      maxSecondsInLiquidationWindow\n      minimumPositionMargin\n      maxLiquidationLimitAccumulationMultiplier\n      makerFee\n      takerFee\n      factoryInitialized\n    }\n  }\n':
    types.MarketsQueryV3Document,
  '\n  query OrdersSettledQueryV3($first: Int!, $orderBy: OrderSettled_orderBy, $orderDirection: OrderDirection, $where: OrderSettled_filter) {\n    orderSettleds(\n        first:$first \n        orderBy:$orderBy \n        orderDirection:$orderDirection\n        where: $where\n        ){\n        id\n        timestamp\n        marketId\n        accountId\n        fillPrice\n        accruedFunding\n        sizeDelta\n        newSize\n        totalFees\n        referralFees\n        collectedFees\n        settlementReward\n        trackingCode\n        settler\n\n      }\n  }\n  ':
    types.OrdersSettledQueryV3Document,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query LiquidationsQueryV3($first: Int!, $orderBy: PositionLiquidated_orderBy, $orderDirection: OrderDirection, $where: PositionLiquidated_filter) {\n    positionLiquidateds(\n        first: $first \n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        where: $where\n        ) {\n        id\n        timestamp\n        accountId\n        marketId\n        amountLiquidated   \n        currentPositionSize\n    }\n  }\n'
): (typeof documents)['\n  query LiquidationsQueryV3($first: Int!, $orderBy: PositionLiquidated_orderBy, $orderDirection: OrderDirection, $where: PositionLiquidated_filter) {\n    positionLiquidateds(\n        first: $first \n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        where: $where\n        ) {\n        id\n        timestamp\n        accountId\n        marketId\n        amountLiquidated   \n        currentPositionSize\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query MarketsQueryV3($first: Int! $where: Market_filter) {\n    markets(first: $first where: $where) {\n      id\n      perpsMarketId\n      marketName\n      marketSymbol\n      price\n      skew\n      size\n      sizeDelta\n      currentFundingRate\n      currentFundingVelocity\n      feedId\n      maxFundingVelocity\n      skewScale\n      lockedOiPercent\n      marketOwner\n      owner\n      initialMarginRatioD18\n      maintenanceMarginRatioD18\n      liquidationRewardRatioD18\n      maxSecondsInLiquidationWindow\n      minimumPositionMargin\n      maxLiquidationLimitAccumulationMultiplier\n      makerFee\n      takerFee\n      factoryInitialized\n    }\n  }\n'
): (typeof documents)['\n  query MarketsQueryV3($first: Int! $where: Market_filter) {\n    markets(first: $first where: $where) {\n      id\n      perpsMarketId\n      marketName\n      marketSymbol\n      price\n      skew\n      size\n      sizeDelta\n      currentFundingRate\n      currentFundingVelocity\n      feedId\n      maxFundingVelocity\n      skewScale\n      lockedOiPercent\n      marketOwner\n      owner\n      initialMarginRatioD18\n      maintenanceMarginRatioD18\n      liquidationRewardRatioD18\n      maxSecondsInLiquidationWindow\n      minimumPositionMargin\n      maxLiquidationLimitAccumulationMultiplier\n      makerFee\n      takerFee\n      factoryInitialized\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query OrdersSettledQueryV3($first: Int!, $orderBy: OrderSettled_orderBy, $orderDirection: OrderDirection, $where: OrderSettled_filter) {\n    orderSettleds(\n        first:$first \n        orderBy:$orderBy \n        orderDirection:$orderDirection\n        where: $where\n        ){\n        id\n        timestamp\n        marketId\n        accountId\n        fillPrice\n        accruedFunding\n        sizeDelta\n        newSize\n        totalFees\n        referralFees\n        collectedFees\n        settlementReward\n        trackingCode\n        settler\n\n      }\n  }\n  '
): (typeof documents)['\n  query OrdersSettledQueryV3($first: Int!, $orderBy: OrderSettled_orderBy, $orderDirection: OrderDirection, $where: OrderSettled_filter) {\n    orderSettleds(\n        first:$first \n        orderBy:$orderBy \n        orderDirection:$orderDirection\n        where: $where\n        ){\n        id\n        timestamp\n        marketId\n        accountId\n        fillPrice\n        accruedFunding\n        sizeDelta\n        newSize\n        totalFees\n        referralFees\n        collectedFees\n        settlementReward\n        trackingCode\n        settler\n\n      }\n  }\n  '];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
