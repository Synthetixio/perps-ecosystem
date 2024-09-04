/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: string; output: string; }
  BigInt: { input: string; output: string; }
  Bytes: { input: string; output: string; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  accountId: Scalars['BigInt']['output'];
  feesPaid: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidations: Maybe<Array<Liquidation>>;
  owner: Scalars['Bytes']['output'];
  pnl: Scalars['BigInt']['output'];
  positions: Maybe<Array<Position>>;
  totalClosedPositions: Scalars['BigInt']['output'];
  totalLiquidations: Scalars['BigInt']['output'];
  totalMargin: Scalars['BigInt']['output'];
  totalOpenPositions: Scalars['BigInt']['output'];
  totalTrades: Scalars['BigInt']['output'];
  totalVolume: Scalars['BigInt']['output'];
};


export type AccountLiquidationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidationOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LiquidationFilter>;
};


export type AccountPositionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PositionFilter>;
};

export type AccountAggregateStat = {
  __typename?: 'AccountAggregateStat';
  account: Account;
  accountPnl: Scalars['BigInt']['output'];
  block: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  market: Market;
  positionPnl: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type AccountAggregateStatFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  accountPnl?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account_?: InputMaybe<AccountFilter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AccountAggregateStatFilter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<MarketFilter>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AccountAggregateStatFilter>>>;
  positionPnl?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccountAggregateStatOrderBy {
  account = 'account',
  accountPnl = 'accountPnl',
  account__accountId = 'account__accountId',
  account__feesPaid = 'account__feesPaid',
  account__id = 'account__id',
  account__owner = 'account__owner',
  account__pnl = 'account__pnl',
  account__totalClosedPositions = 'account__totalClosedPositions',
  account__totalLiquidations = 'account__totalLiquidations',
  account__totalMargin = 'account__totalMargin',
  account__totalOpenPositions = 'account__totalOpenPositions',
  account__totalTrades = 'account__totalTrades',
  account__totalVolume = 'account__totalVolume',
  block = 'block',
  id = 'id',
  market = 'market',
  market__currentFundingRate = 'market__currentFundingRate',
  market__currentFundingVelocity = 'market__currentFundingVelocity',
  market__feedId = 'market__feedId',
  market__flagRewardRatioD18 = 'market__flagRewardRatioD18',
  market__id = 'market__id',
  market__initialMarginRatioD18 = 'market__initialMarginRatioD18',
  market__interestRate = 'market__interestRate',
  market__liquidationRewardRatioD18 = 'market__liquidationRewardRatioD18',
  market__lockedOiPercent = 'market__lockedOiPercent',
  market__maintenanceMarginRatioD18 = 'market__maintenanceMarginRatioD18',
  market__makerFee = 'market__makerFee',
  market__marketName = 'market__marketName',
  market__marketSymbol = 'market__marketSymbol',
  market__maxFundingVelocity = 'market__maxFundingVelocity',
  market__maxLiquidationLimitAccumulationMultiplier = 'market__maxLiquidationLimitAccumulationMultiplier',
  market__maxSecondsInLiquidationWindow = 'market__maxSecondsInLiquidationWindow',
  market__minimumInitialMarginRatioD18 = 'market__minimumInitialMarginRatioD18',
  market__minimumPositionMargin = 'market__minimumPositionMargin',
  market__perpsMarketId = 'market__perpsMarketId',
  market__price = 'market__price',
  market__size = 'market__size',
  market__sizeDelta = 'market__sizeDelta',
  market__skew = 'market__skew',
  market__skewScale = 'market__skewScale',
  market__takerFee = 'market__takerFee',
  positionPnl = 'positionPnl',
  timestamp = 'timestamp'
}

export type AccountFlaggedForLiquidation = {
  __typename?: 'AccountFlaggedForLiquidation';
  account: Account;
  accountId: Scalars['BigInt']['output'];
  availableMargin: Scalars['BigInt']['output'];
  flagReward: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidationReward: Scalars['BigInt']['output'];
  requiredMaintenanceMargin: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AccountFlaggedForLiquidationFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account_?: InputMaybe<AccountFilter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AccountFlaggedForLiquidationFilter>>>;
  availableMargin?: InputMaybe<Scalars['BigInt']['input']>;
  availableMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  availableMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  availableMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  availableMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  availableMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  availableMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  availableMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flagReward?: InputMaybe<Scalars['BigInt']['input']>;
  flagReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flagReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flagReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flagReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flagReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flagReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  flagReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidationReward?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountFlaggedForLiquidationFilter>>>;
  requiredMaintenanceMargin?: InputMaybe<Scalars['BigInt']['input']>;
  requiredMaintenanceMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  requiredMaintenanceMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  requiredMaintenanceMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requiredMaintenanceMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  requiredMaintenanceMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  requiredMaintenanceMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  requiredMaintenanceMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AccountFlaggedForLiquidationOrderBy {
  account = 'account',
  accountId = 'accountId',
  account__accountId = 'account__accountId',
  account__feesPaid = 'account__feesPaid',
  account__id = 'account__id',
  account__owner = 'account__owner',
  account__pnl = 'account__pnl',
  account__totalClosedPositions = 'account__totalClosedPositions',
  account__totalLiquidations = 'account__totalLiquidations',
  account__totalMargin = 'account__totalMargin',
  account__totalOpenPositions = 'account__totalOpenPositions',
  account__totalTrades = 'account__totalTrades',
  account__totalVolume = 'account__totalVolume',
  availableMargin = 'availableMargin',
  flagReward = 'flagReward',
  id = 'id',
  liquidationReward = 'liquidationReward',
  requiredMaintenanceMargin = 'requiredMaintenanceMargin',
  timestamp = 'timestamp',
  transactionHash = 'transactionHash'
}

export type AccountLiquidated = {
  __typename?: 'AccountLiquidated';
  accountId: Scalars['BigInt']['output'];
  fullyLiquidated: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  liquidationReward: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type AccountLiquidatedFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountLiquidatedFilter>>>;
  fullyLiquidated?: InputMaybe<Scalars['Boolean']['input']>;
  fullyLiquidated_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  fullyLiquidated_not?: InputMaybe<Scalars['Boolean']['input']>;
  fullyLiquidated_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidationReward?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountLiquidatedFilter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccountLiquidatedOrderBy {
  accountId = 'accountId',
  fullyLiquidated = 'fullyLiquidated',
  id = 'id',
  liquidationReward = 'liquidationReward',
  timestamp = 'timestamp'
}

export type AccountFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  feesPaid?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesPaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidations_?: InputMaybe<LiquidationFilter>;
  or?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positions_?: InputMaybe<PositionFilter>;
  totalClosedPositions?: InputMaybe<Scalars['BigInt']['input']>;
  totalClosedPositions_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClosedPositions_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClosedPositions_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClosedPositions_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClosedPositions_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClosedPositions_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalClosedPositions_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidations?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidations_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalMargin?: InputMaybe<Scalars['BigInt']['input']>;
  totalMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOpenPositions?: InputMaybe<Scalars['BigInt']['input']>;
  totalOpenPositions_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOpenPositions_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOpenPositions_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOpenPositions_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOpenPositions_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOpenPositions_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOpenPositions_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTrades?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTrades_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccountOrderBy {
  accountId = 'accountId',
  feesPaid = 'feesPaid',
  id = 'id',
  liquidations = 'liquidations',
  owner = 'owner',
  pnl = 'pnl',
  positions = 'positions',
  totalClosedPositions = 'totalClosedPositions',
  totalLiquidations = 'totalLiquidations',
  totalMargin = 'totalMargin',
  totalOpenPositions = 'totalOpenPositions',
  totalTrades = 'totalTrades',
  totalVolume = 'totalVolume'
}

export type Action = {
  __typename?: 'Action';
  account: Account;
  accountId: Scalars['BigInt']['output'];
  accruedFunding: Maybe<Scalars['BigInt']['output']>;
  actionTimestamp: Scalars['BigInt']['output'];
  actionType: ActionType;
  amount: Maybe<Scalars['BigInt']['output']>;
  collectedFees: Maybe<Scalars['BigInt']['output']>;
  fillPrice: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  market: Maybe<Market>;
  marketId: Maybe<Scalars['BigInt']['output']>;
  pnl: Maybe<Scalars['BigInt']['output']>;
  positionId: Maybe<Scalars['String']['output']>;
  referralFees: Maybe<Scalars['BigInt']['output']>;
  settlementReward: Maybe<Scalars['BigInt']['output']>;
  settler: Maybe<Scalars['Bytes']['output']>;
  sizeDelta: Maybe<Scalars['BigInt']['output']>;
  totalFees: Maybe<Scalars['BigInt']['output']>;
  trackingCode: Maybe<Scalars['Bytes']['output']>;
  transactionHash: Scalars['Bytes']['output'];
  volume: Maybe<Scalars['BigInt']['output']>;
};

export enum ActionCategory {
  COLLATERAL = 'COLLATERAL',
  TRADE = 'TRADE'
}

export enum ActionType {
  DEPOSIT_MARGIN = 'DEPOSIT_MARGIN',
  LONG_CLOSED = 'LONG_CLOSED',
  LONG_DECREASED = 'LONG_DECREASED',
  LONG_INCREASED = 'LONG_INCREASED',
  LONG_OPENED = 'LONG_OPENED',
  SHORT_CLOSED = 'SHORT_CLOSED',
  SHORT_DECREASED = 'SHORT_DECREASED',
  SHORT_INCREASED = 'SHORT_INCREASED',
  SHORT_OPENED = 'SHORT_OPENED',
  WITHDRAW_MARGIN = 'WITHDRAW_MARGIN'
}

export type ActionFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account_?: InputMaybe<AccountFilter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accruedFunding?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accruedFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  actionTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  actionTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  actionTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  actionTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  actionTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  actionTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  actionTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  actionTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  actionType?: InputMaybe<ActionType>;
  actionType_in?: InputMaybe<Array<ActionType>>;
  actionType_not?: InputMaybe<ActionType>;
  actionType_not_in?: InputMaybe<Array<ActionType>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ActionFilter>>>;
  collectedFees?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collectedFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fillPrice?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fillPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market_?: InputMaybe<MarketFilter>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ActionFilter>>>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  positionId_contains?: InputMaybe<Scalars['String']['input']>;
  positionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  positionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_gt?: InputMaybe<Scalars['String']['input']>;
  positionId_gte?: InputMaybe<Scalars['String']['input']>;
  positionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  positionId_lt?: InputMaybe<Scalars['String']['input']>;
  positionId_lte?: InputMaybe<Scalars['String']['input']>;
  positionId_not?: InputMaybe<Scalars['String']['input']>;
  positionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  positionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  positionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  positionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  positionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  positionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referralFees?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referralFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementReward?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settler?: InputMaybe<Scalars['Bytes']['input']>;
  settler_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settler_gt?: InputMaybe<Scalars['Bytes']['input']>;
  settler_gte?: InputMaybe<Scalars['Bytes']['input']>;
  settler_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  settler_lt?: InputMaybe<Scalars['Bytes']['input']>;
  settler_lte?: InputMaybe<Scalars['Bytes']['input']>;
  settler_not?: InputMaybe<Scalars['Bytes']['input']>;
  settler_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settler_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sizeDelta?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeDelta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_not?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trackingCode?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_contains?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_gt?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_gte?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  trackingCode_lt?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_lte?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_not?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ActionOrderBy {
  account = 'account',
  accountId = 'accountId',
  account__accountId = 'account__accountId',
  account__feesPaid = 'account__feesPaid',
  account__id = 'account__id',
  account__owner = 'account__owner',
  account__pnl = 'account__pnl',
  account__totalClosedPositions = 'account__totalClosedPositions',
  account__totalLiquidations = 'account__totalLiquidations',
  account__totalMargin = 'account__totalMargin',
  account__totalOpenPositions = 'account__totalOpenPositions',
  account__totalTrades = 'account__totalTrades',
  account__totalVolume = 'account__totalVolume',
  accruedFunding = 'accruedFunding',
  actionTimestamp = 'actionTimestamp',
  actionType = 'actionType',
  amount = 'amount',
  collectedFees = 'collectedFees',
  fillPrice = 'fillPrice',
  id = 'id',
  market = 'market',
  marketId = 'marketId',
  market__currentFundingRate = 'market__currentFundingRate',
  market__currentFundingVelocity = 'market__currentFundingVelocity',
  market__feedId = 'market__feedId',
  market__flagRewardRatioD18 = 'market__flagRewardRatioD18',
  market__id = 'market__id',
  market__initialMarginRatioD18 = 'market__initialMarginRatioD18',
  market__interestRate = 'market__interestRate',
  market__liquidationRewardRatioD18 = 'market__liquidationRewardRatioD18',
  market__lockedOiPercent = 'market__lockedOiPercent',
  market__maintenanceMarginRatioD18 = 'market__maintenanceMarginRatioD18',
  market__makerFee = 'market__makerFee',
  market__marketName = 'market__marketName',
  market__marketSymbol = 'market__marketSymbol',
  market__maxFundingVelocity = 'market__maxFundingVelocity',
  market__maxLiquidationLimitAccumulationMultiplier = 'market__maxLiquidationLimitAccumulationMultiplier',
  market__maxSecondsInLiquidationWindow = 'market__maxSecondsInLiquidationWindow',
  market__minimumInitialMarginRatioD18 = 'market__minimumInitialMarginRatioD18',
  market__minimumPositionMargin = 'market__minimumPositionMargin',
  market__perpsMarketId = 'market__perpsMarketId',
  market__price = 'market__price',
  market__size = 'market__size',
  market__sizeDelta = 'market__sizeDelta',
  market__skew = 'market__skew',
  market__skewScale = 'market__skewScale',
  market__takerFee = 'market__takerFee',
  pnl = 'pnl',
  positionId = 'positionId',
  referralFees = 'referralFees',
  settlementReward = 'settlementReward',
  settler = 'settler',
  sizeDelta = 'sizeDelta',
  totalFees = 'totalFees',
  trackingCode = 'trackingCode',
  transactionHash = 'transactionHash',
  volume = 'volume'
}

export enum AggregationInterval {
  day = 'day',
  hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type BlockHeight = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export enum CollateralActionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL'
}

export type CollateralModified = {
  __typename?: 'CollateralModified';
  accountId: Scalars['BigInt']['output'];
  actionType: CollateralActionType;
  amount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  sender: Scalars['Bytes']['output'];
  synthMarketId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CollateralModifiedFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  actionType?: InputMaybe<CollateralActionType>;
  actionType_in?: InputMaybe<Array<CollateralActionType>>;
  actionType_not?: InputMaybe<CollateralActionType>;
  actionType_not_in?: InputMaybe<Array<CollateralActionType>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<CollateralModifiedFilter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CollateralModifiedFilter>>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  synthMarketId?: InputMaybe<Scalars['BigInt']['input']>;
  synthMarketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  synthMarketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  synthMarketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  synthMarketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  synthMarketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  synthMarketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  synthMarketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CollateralModifiedOrderBy {
  accountId = 'accountId',
  actionType = 'actionType',
  amount = 'amount',
  id = 'id',
  sender = 'sender',
  synthMarketId = 'synthMarketId',
  timestamp = 'timestamp',
  transactionHash = 'transactionHash'
}

export enum Direction {
  LONG = 'LONG',
  SHORT = 'SHORT'
}

export type GlobalConfiguration = {
  __typename?: 'GlobalConfiguration';
  feeCollector: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type GlobalConfigurationFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalConfigurationFilter>>>;
  feeCollector?: InputMaybe<Scalars['String']['input']>;
  feeCollector_contains?: InputMaybe<Scalars['String']['input']>;
  feeCollector_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  feeCollector_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeCollector_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeCollector_gt?: InputMaybe<Scalars['String']['input']>;
  feeCollector_gte?: InputMaybe<Scalars['String']['input']>;
  feeCollector_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feeCollector_lt?: InputMaybe<Scalars['String']['input']>;
  feeCollector_lte?: InputMaybe<Scalars['String']['input']>;
  feeCollector_not?: InputMaybe<Scalars['String']['input']>;
  feeCollector_not_contains?: InputMaybe<Scalars['String']['input']>;
  feeCollector_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  feeCollector_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeCollector_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeCollector_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feeCollector_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeCollector_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeCollector_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeCollector_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GlobalConfigurationFilter>>>;
};

export enum GlobalConfigurationOrderBy {
  feeCollector = 'feeCollector',
  id = 'id'
}

export type InterestCharged = {
  __typename?: 'InterestCharged';
  accountId: Scalars['BigInt']['output'];
  block: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  interest: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type InterestChargedFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<InterestChargedFilter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  interest?: InputMaybe<Scalars['BigInt']['input']>;
  interest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interest_not?: InputMaybe<Scalars['BigInt']['input']>;
  interest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<InterestChargedFilter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum InterestChargedOrderBy {
  accountId = 'accountId',
  block = 'block',
  id = 'id',
  interest = 'interest',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type Liquidation = {
  __typename?: 'Liquidation';
  account: Account;
  accountId: Scalars['BigInt']['output'];
  amountLiquidated: Scalars['BigInt']['output'];
  currentPositionSize: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidationType: LiquidationType;
  market: Market;
  marketId: Scalars['BigInt']['output'];
  marketPrice: Scalars['BigInt']['output'];
  notionalAmount: Scalars['BigInt']['output'];
  position: Maybe<Position>;
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export enum LiquidationType {
  FULL = 'FULL',
  PARTIAL = 'PARTIAL'
}

export type LiquidationFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account_?: InputMaybe<AccountFilter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amountLiquidated?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountLiquidated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<LiquidationFilter>>>;
  currentPositionSize?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentPositionSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidationType?: InputMaybe<LiquidationType>;
  liquidationType_in?: InputMaybe<Array<LiquidationType>>;
  liquidationType_not?: InputMaybe<LiquidationType>;
  liquidationType_not_in?: InputMaybe<Array<LiquidationType>>;
  market?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketPrice?: InputMaybe<Scalars['BigInt']['input']>;
  marketPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market_?: InputMaybe<MarketFilter>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  notionalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  notionalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LiquidationFilter>>>;
  position_?: InputMaybe<PositionFilter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LiquidationOrderBy {
  account = 'account',
  accountId = 'accountId',
  account__accountId = 'account__accountId',
  account__feesPaid = 'account__feesPaid',
  account__id = 'account__id',
  account__owner = 'account__owner',
  account__pnl = 'account__pnl',
  account__totalClosedPositions = 'account__totalClosedPositions',
  account__totalLiquidations = 'account__totalLiquidations',
  account__totalMargin = 'account__totalMargin',
  account__totalOpenPositions = 'account__totalOpenPositions',
  account__totalTrades = 'account__totalTrades',
  account__totalVolume = 'account__totalVolume',
  amountLiquidated = 'amountLiquidated',
  currentPositionSize = 'currentPositionSize',
  id = 'id',
  liquidationType = 'liquidationType',
  market = 'market',
  marketId = 'marketId',
  marketPrice = 'marketPrice',
  market__currentFundingRate = 'market__currentFundingRate',
  market__currentFundingVelocity = 'market__currentFundingVelocity',
  market__feedId = 'market__feedId',
  market__flagRewardRatioD18 = 'market__flagRewardRatioD18',
  market__id = 'market__id',
  market__initialMarginRatioD18 = 'market__initialMarginRatioD18',
  market__interestRate = 'market__interestRate',
  market__liquidationRewardRatioD18 = 'market__liquidationRewardRatioD18',
  market__lockedOiPercent = 'market__lockedOiPercent',
  market__maintenanceMarginRatioD18 = 'market__maintenanceMarginRatioD18',
  market__makerFee = 'market__makerFee',
  market__marketName = 'market__marketName',
  market__marketSymbol = 'market__marketSymbol',
  market__maxFundingVelocity = 'market__maxFundingVelocity',
  market__maxLiquidationLimitAccumulationMultiplier = 'market__maxLiquidationLimitAccumulationMultiplier',
  market__maxSecondsInLiquidationWindow = 'market__maxSecondsInLiquidationWindow',
  market__minimumInitialMarginRatioD18 = 'market__minimumInitialMarginRatioD18',
  market__minimumPositionMargin = 'market__minimumPositionMargin',
  market__perpsMarketId = 'market__perpsMarketId',
  market__price = 'market__price',
  market__size = 'market__size',
  market__sizeDelta = 'market__sizeDelta',
  market__skew = 'market__skew',
  market__skewScale = 'market__skewScale',
  market__takerFee = 'market__takerFee',
  notionalAmount = 'notionalAmount',
  position = 'position',
  position__accruedFunding = 'position__accruedFunding',
  position__averageEntryPrice = 'position__averageEntryPrice',
  position__closeTimestamp = 'position__closeTimestamp',
  position__direction = 'position__direction',
  position__entryPrice = 'position__entryPrice',
  position__exitPrice = 'position__exitPrice',
  position__id = 'position__id',
  position__interestCharged = 'position__interestCharged',
  position__isLiquidated = 'position__isLiquidated',
  position__isOpen = 'position__isOpen',
  position__lastFillPrice = 'position__lastFillPrice',
  position__lastTradeTimestamp = 'position__lastTradeTimestamp',
  position__notionalAmount = 'position__notionalAmount',
  position__openTimestamp = 'position__openTimestamp',
  position__positionPnl = 'position__positionPnl',
  position__realizedPnl = 'position__realizedPnl',
  position__realizedPnlWithFees = 'position__realizedPnlWithFees',
  position__size = 'position__size',
  position__status = 'position__status',
  position__totalFees = 'position__totalFees',
  position__totalTrades = 'position__totalTrades',
  position__totalVolume = 'position__totalVolume',
  position__trackingCode = 'position__trackingCode',
  position__unrealizedPnl = 'position__unrealizedPnl',
  timestamp = 'timestamp',
  transactionHash = 'transactionHash'
}

export type Market = {
  __typename?: 'Market';
  currentFundingRate: Maybe<Scalars['BigInt']['output']>;
  currentFundingVelocity: Maybe<Scalars['BigInt']['output']>;
  feedId: Maybe<Scalars['Bytes']['output']>;
  flagRewardRatioD18: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  initialMarginRatioD18: Maybe<Scalars['BigInt']['output']>;
  interestRate: Maybe<Scalars['BigInt']['output']>;
  liquidationRewardRatioD18: Maybe<Scalars['BigInt']['output']>;
  liquidations: Maybe<Array<Liquidation>>;
  lockedOiPercent: Maybe<Scalars['BigInt']['output']>;
  maintenanceMarginRatioD18: Maybe<Scalars['BigInt']['output']>;
  makerFee: Maybe<Scalars['BigInt']['output']>;
  marketName: Scalars['String']['output'];
  marketSymbol: Scalars['String']['output'];
  maxFundingVelocity: Maybe<Scalars['BigInt']['output']>;
  maxLiquidationLimitAccumulationMultiplier: Maybe<Scalars['BigInt']['output']>;
  maxSecondsInLiquidationWindow: Maybe<Scalars['BigInt']['output']>;
  minimumInitialMarginRatioD18: Maybe<Scalars['BigInt']['output']>;
  minimumPositionMargin: Maybe<Scalars['BigInt']['output']>;
  perpsMarketId: Scalars['BigInt']['output'];
  positions: Maybe<Array<Position>>;
  price: Scalars['BigInt']['output'];
  size: Maybe<Scalars['BigInt']['output']>;
  sizeDelta: Maybe<Scalars['BigInt']['output']>;
  skew: Maybe<Scalars['BigInt']['output']>;
  skewScale: Maybe<Scalars['BigInt']['output']>;
  takerFee: Maybe<Scalars['BigInt']['output']>;
};


export type MarketLiquidationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidationOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LiquidationFilter>;
};


export type MarketPositionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PositionFilter>;
};

export type MarketUpdated = {
  __typename?: 'MarketUpdated';
  currentFundingRate: Scalars['BigInt']['output'];
  currentFundingVelocity: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  marketId: Scalars['BigInt']['output'];
  price: Scalars['BigInt']['output'];
  size: Scalars['BigInt']['output'];
  sizeDelta: Scalars['BigInt']['output'];
  skew: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type MarketUpdatedFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketUpdatedFilter>>>;
  currentFundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFundingVelocity?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFundingVelocity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketUpdatedFilter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeDelta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_not?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  skew?: InputMaybe<Scalars['BigInt']['input']>;
  skew_gt?: InputMaybe<Scalars['BigInt']['input']>;
  skew_gte?: InputMaybe<Scalars['BigInt']['input']>;
  skew_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  skew_lt?: InputMaybe<Scalars['BigInt']['input']>;
  skew_lte?: InputMaybe<Scalars['BigInt']['input']>;
  skew_not?: InputMaybe<Scalars['BigInt']['input']>;
  skew_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MarketUpdatedOrderBy {
  currentFundingRate = 'currentFundingRate',
  currentFundingVelocity = 'currentFundingVelocity',
  id = 'id',
  marketId = 'marketId',
  price = 'price',
  size = 'size',
  sizeDelta = 'sizeDelta',
  skew = 'skew',
  timestamp = 'timestamp'
}

export type MarketFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketFilter>>>;
  currentFundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFundingVelocity?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFundingVelocity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentFundingVelocity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feedId?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  feedId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_not?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flagRewardRatioD18?: InputMaybe<Scalars['BigInt']['input']>;
  flagRewardRatioD18_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flagRewardRatioD18_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flagRewardRatioD18_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flagRewardRatioD18_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flagRewardRatioD18_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flagRewardRatioD18_not?: InputMaybe<Scalars['BigInt']['input']>;
  flagRewardRatioD18_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  initialMarginRatioD18?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialMarginRatioD18_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestRate?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationRewardRatioD18?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationRewardRatioD18_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidations_?: InputMaybe<LiquidationFilter>;
  lockedOiPercent?: InputMaybe<Scalars['BigInt']['input']>;
  lockedOiPercent_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedOiPercent_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedOiPercent_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedOiPercent_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedOiPercent_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedOiPercent_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockedOiPercent_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maintenanceMarginRatioD18?: InputMaybe<Scalars['BigInt']['input']>;
  maintenanceMarginRatioD18_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maintenanceMarginRatioD18_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maintenanceMarginRatioD18_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maintenanceMarginRatioD18_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maintenanceMarginRatioD18_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maintenanceMarginRatioD18_not?: InputMaybe<Scalars['BigInt']['input']>;
  maintenanceMarginRatioD18_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerFee?: InputMaybe<Scalars['BigInt']['input']>;
  makerFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketName?: InputMaybe<Scalars['String']['input']>;
  marketName_contains?: InputMaybe<Scalars['String']['input']>;
  marketName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketName_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketName_gt?: InputMaybe<Scalars['String']['input']>;
  marketName_gte?: InputMaybe<Scalars['String']['input']>;
  marketName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketName_lt?: InputMaybe<Scalars['String']['input']>;
  marketName_lte?: InputMaybe<Scalars['String']['input']>;
  marketName_not?: InputMaybe<Scalars['String']['input']>;
  marketName_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketName_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketSymbol?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_not?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maxFundingVelocity?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingVelocity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingVelocity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingVelocity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxFundingVelocity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingVelocity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingVelocity_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingVelocity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLiquidationLimitAccumulationMultiplier?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidationLimitAccumulationMultiplier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidationLimitAccumulationMultiplier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidationLimitAccumulationMultiplier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLiquidationLimitAccumulationMultiplier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidationLimitAccumulationMultiplier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidationLimitAccumulationMultiplier_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidationLimitAccumulationMultiplier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxSecondsInLiquidationWindow?: InputMaybe<Scalars['BigInt']['input']>;
  maxSecondsInLiquidationWindow_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSecondsInLiquidationWindow_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSecondsInLiquidationWindow_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxSecondsInLiquidationWindow_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSecondsInLiquidationWindow_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSecondsInLiquidationWindow_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxSecondsInLiquidationWindow_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumInitialMarginRatioD18?: InputMaybe<Scalars['BigInt']['input']>;
  minimumInitialMarginRatioD18_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumInitialMarginRatioD18_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumInitialMarginRatioD18_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumInitialMarginRatioD18_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumInitialMarginRatioD18_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumInitialMarginRatioD18_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumInitialMarginRatioD18_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumPositionMargin?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumPositionMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketFilter>>>;
  perpsMarketId?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  perpsMarketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positions_?: InputMaybe<PositionFilter>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeDelta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_not?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  skew?: InputMaybe<Scalars['BigInt']['input']>;
  skewScale?: InputMaybe<Scalars['BigInt']['input']>;
  skewScale_gt?: InputMaybe<Scalars['BigInt']['input']>;
  skewScale_gte?: InputMaybe<Scalars['BigInt']['input']>;
  skewScale_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  skewScale_lt?: InputMaybe<Scalars['BigInt']['input']>;
  skewScale_lte?: InputMaybe<Scalars['BigInt']['input']>;
  skewScale_not?: InputMaybe<Scalars['BigInt']['input']>;
  skewScale_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  skew_gt?: InputMaybe<Scalars['BigInt']['input']>;
  skew_gte?: InputMaybe<Scalars['BigInt']['input']>;
  skew_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  skew_lt?: InputMaybe<Scalars['BigInt']['input']>;
  skew_lte?: InputMaybe<Scalars['BigInt']['input']>;
  skew_not?: InputMaybe<Scalars['BigInt']['input']>;
  skew_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  takerFee?: InputMaybe<Scalars['BigInt']['input']>;
  takerFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  takerFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  takerFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  takerFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  takerFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  takerFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  takerFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MarketOrderBy {
  currentFundingRate = 'currentFundingRate',
  currentFundingVelocity = 'currentFundingVelocity',
  feedId = 'feedId',
  flagRewardRatioD18 = 'flagRewardRatioD18',
  id = 'id',
  initialMarginRatioD18 = 'initialMarginRatioD18',
  interestRate = 'interestRate',
  liquidationRewardRatioD18 = 'liquidationRewardRatioD18',
  liquidations = 'liquidations',
  lockedOiPercent = 'lockedOiPercent',
  maintenanceMarginRatioD18 = 'maintenanceMarginRatioD18',
  makerFee = 'makerFee',
  marketName = 'marketName',
  marketSymbol = 'marketSymbol',
  maxFundingVelocity = 'maxFundingVelocity',
  maxLiquidationLimitAccumulationMultiplier = 'maxLiquidationLimitAccumulationMultiplier',
  maxSecondsInLiquidationWindow = 'maxSecondsInLiquidationWindow',
  minimumInitialMarginRatioD18 = 'minimumInitialMarginRatioD18',
  minimumPositionMargin = 'minimumPositionMargin',
  perpsMarketId = 'perpsMarketId',
  positions = 'positions',
  price = 'price',
  size = 'size',
  sizeDelta = 'sizeDelta',
  skew = 'skew',
  skewScale = 'skewScale',
  takerFee = 'takerFee'
}

export type OpenPosition = {
  __typename?: 'OpenPosition';
  id: Scalars['ID']['output'];
  position: Position;
};

export type OpenPositionFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OpenPositionFilter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OpenPositionFilter>>>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<PositionFilter>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenPositionOrderBy {
  id = 'id',
  position = 'position',
  position__accruedFunding = 'position__accruedFunding',
  position__averageEntryPrice = 'position__averageEntryPrice',
  position__closeTimestamp = 'position__closeTimestamp',
  position__direction = 'position__direction',
  position__entryPrice = 'position__entryPrice',
  position__exitPrice = 'position__exitPrice',
  position__id = 'position__id',
  position__interestCharged = 'position__interestCharged',
  position__isLiquidated = 'position__isLiquidated',
  position__isOpen = 'position__isOpen',
  position__lastFillPrice = 'position__lastFillPrice',
  position__lastTradeTimestamp = 'position__lastTradeTimestamp',
  position__notionalAmount = 'position__notionalAmount',
  position__openTimestamp = 'position__openTimestamp',
  position__positionPnl = 'position__positionPnl',
  position__realizedPnl = 'position__realizedPnl',
  position__realizedPnlWithFees = 'position__realizedPnlWithFees',
  position__size = 'position__size',
  position__status = 'position__status',
  position__totalFees = 'position__totalFees',
  position__totalTrades = 'position__totalTrades',
  position__totalVolume = 'position__totalVolume',
  position__trackingCode = 'position__trackingCode',
  position__unrealizedPnl = 'position__unrealizedPnl'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  asc = 'asc',
  desc = 'desc'
}

export type Position = {
  __typename?: 'Position';
  account: Account;
  accruedFunding: Scalars['BigInt']['output'];
  averageEntryPrice: Scalars['BigInt']['output'];
  closeTimestamp: Maybe<Scalars['BigInt']['output']>;
  direction: Direction;
  entryPrice: Scalars['BigInt']['output'];
  exitPrice: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  interestCharged: Scalars['BigInt']['output'];
  isLiquidated: Scalars['Boolean']['output'];
  isOpen: Scalars['Boolean']['output'];
  lastFillPrice: Scalars['BigInt']['output'];
  lastTradeTimestamp: Scalars['BigInt']['output'];
  liquidation: Maybe<Liquidation>;
  market: Market;
  notionalAmount: Scalars['BigInt']['output'];
  openTimestamp: Scalars['BigInt']['output'];
  positionPnl: Scalars['BigInt']['output'];
  realizedPnl: Scalars['BigInt']['output'];
  realizedPnlWithFees: Scalars['BigInt']['output'];
  size: Scalars['BigInt']['output'];
  status: PositionStatus;
  totalFees: Scalars['BigInt']['output'];
  totalTrades: Scalars['BigInt']['output'];
  totalVolume: Scalars['BigInt']['output'];
  trackingCode: Maybe<Scalars['Bytes']['output']>;
  trades: Maybe<Array<Trade>>;
  unrealizedPnl: Scalars['BigInt']['output'];
};


export type PositionTradesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TradeFilter>;
};

export type PositionLiquidated = {
  __typename?: 'PositionLiquidated';
  accountId: Scalars['BigInt']['output'];
  amountLiquidated: Scalars['BigInt']['output'];
  currentPositionSize: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  marketId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PositionLiquidatedFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountLiquidated?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountLiquidated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountLiquidated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PositionLiquidatedFilter>>>;
  currentPositionSize?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentPositionSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentPositionSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PositionLiquidatedFilter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PositionLiquidatedOrderBy {
  accountId = 'accountId',
  amountLiquidated = 'amountLiquidated',
  currentPositionSize = 'currentPositionSize',
  id = 'id',
  marketId = 'marketId',
  timestamp = 'timestamp',
  transactionHash = 'transactionHash'
}

export type PositionReference = {
  __typename?: 'PositionReference';
  accountId: Scalars['BigInt']['output'];
  block: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  marketId: Scalars['BigInt']['output'];
  positionId: Scalars['String']['output'];
  tradeId: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PositionReferenceFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PositionReferenceFilter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PositionReferenceFilter>>>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  positionId_contains?: InputMaybe<Scalars['String']['input']>;
  positionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  positionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_gt?: InputMaybe<Scalars['String']['input']>;
  positionId_gte?: InputMaybe<Scalars['String']['input']>;
  positionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  positionId_lt?: InputMaybe<Scalars['String']['input']>;
  positionId_lte?: InputMaybe<Scalars['String']['input']>;
  positionId_not?: InputMaybe<Scalars['String']['input']>;
  positionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  positionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  positionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  positionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  positionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  positionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tradeId?: InputMaybe<Scalars['String']['input']>;
  tradeId_contains?: InputMaybe<Scalars['String']['input']>;
  tradeId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tradeId_ends_with?: InputMaybe<Scalars['String']['input']>;
  tradeId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tradeId_gt?: InputMaybe<Scalars['String']['input']>;
  tradeId_gte?: InputMaybe<Scalars['String']['input']>;
  tradeId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tradeId_lt?: InputMaybe<Scalars['String']['input']>;
  tradeId_lte?: InputMaybe<Scalars['String']['input']>;
  tradeId_not?: InputMaybe<Scalars['String']['input']>;
  tradeId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tradeId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tradeId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tradeId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tradeId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tradeId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tradeId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tradeId_starts_with?: InputMaybe<Scalars['String']['input']>;
  tradeId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PositionReferenceOrderBy {
  accountId = 'accountId',
  block = 'block',
  id = 'id',
  marketId = 'marketId',
  positionId = 'positionId',
  tradeId = 'tradeId',
  transactionHash = 'transactionHash'
}

export enum PositionStatus {
  CLOSED = 'CLOSED',
  LIQUIDATED = 'LIQUIDATED',
  OPEN = 'OPEN'
}

export type PositionFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<AccountFilter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accruedFunding?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accruedFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PositionFilter>>>;
  averageEntryPrice?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  averageEntryPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  direction?: InputMaybe<Direction>;
  direction_in?: InputMaybe<Array<Direction>>;
  direction_not?: InputMaybe<Direction>;
  direction_not_in?: InputMaybe<Array<Direction>>;
  entryPrice?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitPrice?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  interestCharged?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestCharged_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isLiquidated?: InputMaybe<Scalars['Boolean']['input']>;
  isLiquidated_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isLiquidated_not?: InputMaybe<Scalars['Boolean']['input']>;
  isLiquidated_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isOpen_not?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lastFillPrice?: InputMaybe<Scalars['BigInt']['input']>;
  lastFillPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastFillPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastFillPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastFillPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastFillPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastFillPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastFillPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastTradeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastTradeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidation?: InputMaybe<Scalars['String']['input']>;
  liquidation_?: InputMaybe<LiquidationFilter>;
  liquidation_contains?: InputMaybe<Scalars['String']['input']>;
  liquidation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_gt?: InputMaybe<Scalars['String']['input']>;
  liquidation_gte?: InputMaybe<Scalars['String']['input']>;
  liquidation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidation_lt?: InputMaybe<Scalars['String']['input']>;
  liquidation_lte?: InputMaybe<Scalars['String']['input']>;
  liquidation_not?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_contains?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<MarketFilter>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  notionalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  notionalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PositionFilter>>>;
  positionPnl?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnlWithFees?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnlWithFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnlWithFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnlWithFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnlWithFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnlWithFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnlWithFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnlWithFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<PositionStatus>;
  status_in?: InputMaybe<Array<PositionStatus>>;
  status_not?: InputMaybe<PositionStatus>;
  status_not_in?: InputMaybe<Array<PositionStatus>>;
  totalFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTrades?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTrades_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTrades_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trackingCode?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_contains?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_gt?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_gte?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  trackingCode_lt?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_lte?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_not?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  trades_?: InputMaybe<TradeFilter>;
  unrealizedPnl?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unrealizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum PositionOrderBy {
  account = 'account',
  account__accountId = 'account__accountId',
  account__feesPaid = 'account__feesPaid',
  account__id = 'account__id',
  account__owner = 'account__owner',
  account__pnl = 'account__pnl',
  account__totalClosedPositions = 'account__totalClosedPositions',
  account__totalLiquidations = 'account__totalLiquidations',
  account__totalMargin = 'account__totalMargin',
  account__totalOpenPositions = 'account__totalOpenPositions',
  account__totalTrades = 'account__totalTrades',
  account__totalVolume = 'account__totalVolume',
  accruedFunding = 'accruedFunding',
  averageEntryPrice = 'averageEntryPrice',
  closeTimestamp = 'closeTimestamp',
  direction = 'direction',
  entryPrice = 'entryPrice',
  exitPrice = 'exitPrice',
  id = 'id',
  interestCharged = 'interestCharged',
  isLiquidated = 'isLiquidated',
  isOpen = 'isOpen',
  lastFillPrice = 'lastFillPrice',
  lastTradeTimestamp = 'lastTradeTimestamp',
  liquidation = 'liquidation',
  liquidation__accountId = 'liquidation__accountId',
  liquidation__amountLiquidated = 'liquidation__amountLiquidated',
  liquidation__currentPositionSize = 'liquidation__currentPositionSize',
  liquidation__id = 'liquidation__id',
  liquidation__liquidationType = 'liquidation__liquidationType',
  liquidation__marketId = 'liquidation__marketId',
  liquidation__marketPrice = 'liquidation__marketPrice',
  liquidation__notionalAmount = 'liquidation__notionalAmount',
  liquidation__timestamp = 'liquidation__timestamp',
  liquidation__transactionHash = 'liquidation__transactionHash',
  market = 'market',
  market__currentFundingRate = 'market__currentFundingRate',
  market__currentFundingVelocity = 'market__currentFundingVelocity',
  market__feedId = 'market__feedId',
  market__flagRewardRatioD18 = 'market__flagRewardRatioD18',
  market__id = 'market__id',
  market__initialMarginRatioD18 = 'market__initialMarginRatioD18',
  market__interestRate = 'market__interestRate',
  market__liquidationRewardRatioD18 = 'market__liquidationRewardRatioD18',
  market__lockedOiPercent = 'market__lockedOiPercent',
  market__maintenanceMarginRatioD18 = 'market__maintenanceMarginRatioD18',
  market__makerFee = 'market__makerFee',
  market__marketName = 'market__marketName',
  market__marketSymbol = 'market__marketSymbol',
  market__maxFundingVelocity = 'market__maxFundingVelocity',
  market__maxLiquidationLimitAccumulationMultiplier = 'market__maxLiquidationLimitAccumulationMultiplier',
  market__maxSecondsInLiquidationWindow = 'market__maxSecondsInLiquidationWindow',
  market__minimumInitialMarginRatioD18 = 'market__minimumInitialMarginRatioD18',
  market__minimumPositionMargin = 'market__minimumPositionMargin',
  market__perpsMarketId = 'market__perpsMarketId',
  market__price = 'market__price',
  market__size = 'market__size',
  market__sizeDelta = 'market__sizeDelta',
  market__skew = 'market__skew',
  market__skewScale = 'market__skewScale',
  market__takerFee = 'market__takerFee',
  notionalAmount = 'notionalAmount',
  openTimestamp = 'openTimestamp',
  positionPnl = 'positionPnl',
  realizedPnl = 'realizedPnl',
  realizedPnlWithFees = 'realizedPnlWithFees',
  size = 'size',
  status = 'status',
  totalFees = 'totalFees',
  totalTrades = 'totalTrades',
  totalVolume = 'totalVolume',
  trackingCode = 'trackingCode',
  trades = 'trades',
  unrealizedPnl = 'unrealizedPnl'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta: Maybe<Meta>;
  account: Maybe<Account>;
  accountAggregateStat: Maybe<AccountAggregateStat>;
  accountAggregateStats: Array<AccountAggregateStat>;
  accountFlaggedForLiquidation: Maybe<AccountFlaggedForLiquidation>;
  accountFlaggedForLiquidations: Array<AccountFlaggedForLiquidation>;
  accountLiquidated: Maybe<AccountLiquidated>;
  accountLiquidateds: Array<AccountLiquidated>;
  accounts: Array<Account>;
  action: Maybe<Action>;
  actions: Array<Action>;
  collateralModified: Maybe<CollateralModified>;
  collateralModifieds: Array<CollateralModified>;
  globalConfiguration: Maybe<GlobalConfiguration>;
  globalConfigurations: Array<GlobalConfiguration>;
  interestCharged: Maybe<InterestCharged>;
  interestChargeds: Array<InterestCharged>;
  liquidation: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  market: Maybe<Market>;
  marketUpdated: Maybe<MarketUpdated>;
  marketUpdateds: Array<MarketUpdated>;
  markets: Array<Market>;
  openPosition: Maybe<OpenPosition>;
  openPositions: Array<OpenPosition>;
  position: Maybe<Position>;
  positionLiquidated: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  positionReference: Maybe<PositionReference>;
  positionReferences: Array<PositionReference>;
  positions: Array<Position>;
  referrerShare: Maybe<ReferrerShare>;
  referrerShares: Array<ReferrerShare>;
  settlementStrategies: Array<SettlementStrategy>;
  settlementStrategy: Maybe<SettlementStrategy>;
  trade: Maybe<Trade>;
  trades: Array<Trade>;
};


export type QueryMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryAccountAggregateStatArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryAccountAggregateStatsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountAggregateStatOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountAggregateStatFilter>;
};


export type QueryAccountFlaggedForLiquidationArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryAccountFlaggedForLiquidationsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountFlaggedForLiquidationOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountFlaggedForLiquidationFilter>;
};


export type QueryAccountLiquidatedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryAccountLiquidatedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountLiquidatedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountLiquidatedFilter>;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountFilter>;
};


export type QueryActionArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryActionsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ActionFilter>;
};


export type QueryCollateralModifiedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryCollateralModifiedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralModifiedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<CollateralModifiedFilter>;
};


export type QueryGlobalConfigurationArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryGlobalConfigurationsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalConfigurationOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<GlobalConfigurationFilter>;
};


export type QueryInterestChargedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryInterestChargedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestChargedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<InterestChargedFilter>;
};


export type QueryLiquidationArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryLiquidationsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidationOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<LiquidationFilter>;
};


export type QueryMarketArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryMarketUpdatedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryMarketUpdatedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketUpdatedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<MarketUpdatedFilter>;
};


export type QueryMarketsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<MarketFilter>;
};


export type QueryOpenPositionArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryOpenPositionsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OpenPositionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<OpenPositionFilter>;
};


export type QueryPositionArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryPositionLiquidatedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryPositionLiquidatedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionLiquidatedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<PositionLiquidatedFilter>;
};


export type QueryPositionReferenceArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryPositionReferencesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionReferenceOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<PositionReferenceFilter>;
};


export type QueryPositionsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<PositionFilter>;
};


export type QueryReferrerShareArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryReferrerSharesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerShareOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ReferrerShareFilter>;
};


export type QuerySettlementStrategiesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SettlementStrategyOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<SettlementStrategyFilter>;
};


export type QuerySettlementStrategyArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTradeArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTradesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<TradeFilter>;
};

export type ReferrerShare = {
  __typename?: 'ReferrerShare';
  id: Scalars['ID']['output'];
  referrer: Maybe<Scalars['String']['output']>;
  shareRatioD18: Maybe<Scalars['BigInt']['output']>;
};

export type ReferrerShareFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReferrerShareFilter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ReferrerShareFilter>>>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  shareRatioD18?: InputMaybe<Scalars['BigInt']['input']>;
  shareRatioD18_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shareRatioD18_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shareRatioD18_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shareRatioD18_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shareRatioD18_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shareRatioD18_not?: InputMaybe<Scalars['BigInt']['input']>;
  shareRatioD18_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ReferrerShareOrderBy {
  id = 'id',
  referrer = 'referrer',
  shareRatioD18 = 'shareRatioD18'
}

export type SettlementStrategy = {
  __typename?: 'SettlementStrategy';
  commitmentPriceDelay: Maybe<Scalars['BigInt']['output']>;
  enabled: Maybe<Scalars['Boolean']['output']>;
  feedId: Maybe<Scalars['Bytes']['output']>;
  id: Scalars['ID']['output'];
  marketId: Scalars['BigInt']['output'];
  maxRoundingLoss: Maybe<Scalars['BigInt']['output']>;
  minimumUsdExchangeAmount: Maybe<Scalars['BigInt']['output']>;
  priceVerificationContract: Maybe<Scalars['String']['output']>;
  settlementDelay: Maybe<Scalars['BigInt']['output']>;
  settlementReward: Maybe<Scalars['BigInt']['output']>;
  settlementWindowDuration: Maybe<Scalars['BigInt']['output']>;
  strategyId: Scalars['BigInt']['output'];
  strategyType: Maybe<Scalars['Int']['output']>;
};

export type SettlementStrategyFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SettlementStrategyFilter>>>;
  commitmentPriceDelay?: InputMaybe<Scalars['BigInt']['input']>;
  commitmentPriceDelay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  commitmentPriceDelay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  commitmentPriceDelay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commitmentPriceDelay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  commitmentPriceDelay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  commitmentPriceDelay_not?: InputMaybe<Scalars['BigInt']['input']>;
  commitmentPriceDelay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  feedId?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  feedId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_not?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feedId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxRoundingLoss?: InputMaybe<Scalars['BigInt']['input']>;
  maxRoundingLoss_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxRoundingLoss_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxRoundingLoss_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxRoundingLoss_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxRoundingLoss_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxRoundingLoss_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxRoundingLoss_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumUsdExchangeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  minimumUsdExchangeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumUsdExchangeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumUsdExchangeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumUsdExchangeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumUsdExchangeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumUsdExchangeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumUsdExchangeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<SettlementStrategyFilter>>>;
  priceVerificationContract?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_contains?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_ends_with?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_gt?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_gte?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  priceVerificationContract_lt?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_lte?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_not?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_not_contains?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  priceVerificationContract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_starts_with?: InputMaybe<Scalars['String']['input']>;
  priceVerificationContract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementDelay?: InputMaybe<Scalars['BigInt']['input']>;
  settlementDelay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementDelay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementDelay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementDelay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementDelay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementDelay_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementDelay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementReward?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementWindowDuration?: InputMaybe<Scalars['BigInt']['input']>;
  settlementWindowDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementWindowDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementWindowDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementWindowDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementWindowDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementWindowDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementWindowDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyType?: InputMaybe<Scalars['Int']['input']>;
  strategyType_gt?: InputMaybe<Scalars['Int']['input']>;
  strategyType_gte?: InputMaybe<Scalars['Int']['input']>;
  strategyType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  strategyType_lt?: InputMaybe<Scalars['Int']['input']>;
  strategyType_lte?: InputMaybe<Scalars['Int']['input']>;
  strategyType_not?: InputMaybe<Scalars['Int']['input']>;
  strategyType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum SettlementStrategyOrderBy {
  commitmentPriceDelay = 'commitmentPriceDelay',
  enabled = 'enabled',
  feedId = 'feedId',
  id = 'id',
  marketId = 'marketId',
  maxRoundingLoss = 'maxRoundingLoss',
  minimumUsdExchangeAmount = 'minimumUsdExchangeAmount',
  priceVerificationContract = 'priceVerificationContract',
  settlementDelay = 'settlementDelay',
  settlementReward = 'settlementReward',
  settlementWindowDuration = 'settlementWindowDuration',
  strategyId = 'strategyId',
  strategyType = 'strategyType'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta: Maybe<Meta>;
  account: Maybe<Account>;
  accountAggregateStat: Maybe<AccountAggregateStat>;
  accountAggregateStats: Array<AccountAggregateStat>;
  accountFlaggedForLiquidation: Maybe<AccountFlaggedForLiquidation>;
  accountFlaggedForLiquidations: Array<AccountFlaggedForLiquidation>;
  accountLiquidated: Maybe<AccountLiquidated>;
  accountLiquidateds: Array<AccountLiquidated>;
  accounts: Array<Account>;
  action: Maybe<Action>;
  actions: Array<Action>;
  collateralModified: Maybe<CollateralModified>;
  collateralModifieds: Array<CollateralModified>;
  globalConfiguration: Maybe<GlobalConfiguration>;
  globalConfigurations: Array<GlobalConfiguration>;
  interestCharged: Maybe<InterestCharged>;
  interestChargeds: Array<InterestCharged>;
  liquidation: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  market: Maybe<Market>;
  marketUpdated: Maybe<MarketUpdated>;
  marketUpdateds: Array<MarketUpdated>;
  markets: Array<Market>;
  openPosition: Maybe<OpenPosition>;
  openPositions: Array<OpenPosition>;
  position: Maybe<Position>;
  positionLiquidated: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  positionReference: Maybe<PositionReference>;
  positionReferences: Array<PositionReference>;
  positions: Array<Position>;
  referrerShare: Maybe<ReferrerShare>;
  referrerShares: Array<ReferrerShare>;
  settlementStrategies: Array<SettlementStrategy>;
  settlementStrategy: Maybe<SettlementStrategy>;
  trade: Maybe<Trade>;
  trades: Array<Trade>;
};


export type SubscriptionMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionAccountAggregateStatArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionAccountAggregateStatsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountAggregateStatOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountAggregateStatFilter>;
};


export type SubscriptionAccountFlaggedForLiquidationArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionAccountFlaggedForLiquidationsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountFlaggedForLiquidationOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountFlaggedForLiquidationFilter>;
};


export type SubscriptionAccountLiquidatedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionAccountLiquidatedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountLiquidatedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountLiquidatedFilter>;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountFilter>;
};


export type SubscriptionActionArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionActionsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ActionFilter>;
};


export type SubscriptionCollateralModifiedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionCollateralModifiedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralModifiedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<CollateralModifiedFilter>;
};


export type SubscriptionGlobalConfigurationArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionGlobalConfigurationsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalConfigurationOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<GlobalConfigurationFilter>;
};


export type SubscriptionInterestChargedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionInterestChargedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestChargedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<InterestChargedFilter>;
};


export type SubscriptionLiquidationArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionLiquidationsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidationOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<LiquidationFilter>;
};


export type SubscriptionMarketArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionMarketUpdatedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionMarketUpdatedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketUpdatedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<MarketUpdatedFilter>;
};


export type SubscriptionMarketsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<MarketFilter>;
};


export type SubscriptionOpenPositionArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionOpenPositionsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OpenPositionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<OpenPositionFilter>;
};


export type SubscriptionPositionArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionPositionLiquidatedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionPositionLiquidatedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionLiquidatedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<PositionLiquidatedFilter>;
};


export type SubscriptionPositionReferenceArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionPositionReferencesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionReferenceOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<PositionReferenceFilter>;
};


export type SubscriptionPositionsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<PositionFilter>;
};


export type SubscriptionReferrerShareArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionReferrerSharesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerShareOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ReferrerShareFilter>;
};


export type SubscriptionSettlementStrategiesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SettlementStrategyOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<SettlementStrategyFilter>;
};


export type SubscriptionSettlementStrategyArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTradeArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTradesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<TradeFilter>;
};

export type Trade = {
  __typename?: 'Trade';
  account: Account;
  accruedFunding: Scalars['BigInt']['output'];
  averageEntryPrice: Scalars['BigInt']['output'];
  block: Scalars['BigInt']['output'];
  collectedFees: Scalars['BigInt']['output'];
  fillPrice: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  interestCharged: Scalars['BigInt']['output'];
  market: Market;
  newSize: Scalars['BigInt']['output'];
  notionalAmount: Scalars['BigInt']['output'];
  pnl: Scalars['BigInt']['output'];
  position: Position;
  realizedPnl: Scalars['BigInt']['output'];
  referralFees: Scalars['BigInt']['output'];
  settlementReward: Maybe<Scalars['BigInt']['output']>;
  settler: Scalars['Bytes']['output'];
  sizeDelta: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  totalFees: Scalars['BigInt']['output'];
  trackingCode: Maybe<Scalars['Bytes']['output']>;
  tradeType: ActionType;
  transactionHash: Scalars['Bytes']['output'];
  volume: Scalars['BigInt']['output'];
};

export type TradeFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<AccountFilter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accruedFunding?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accruedFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TradeFilter>>>;
  averageEntryPrice?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  averageEntryPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  averageEntryPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collectedFees?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collectedFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  collectedFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fillPrice?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fillPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  interestCharged?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestCharged_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestCharged_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<MarketFilter>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newSize?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  notionalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  notionalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  notionalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TradeFilter>>>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<PositionFilter>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  realizedPnl?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referralFees?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referralFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  referralFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementReward?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settler?: InputMaybe<Scalars['Bytes']['input']>;
  settler_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settler_gt?: InputMaybe<Scalars['Bytes']['input']>;
  settler_gte?: InputMaybe<Scalars['Bytes']['input']>;
  settler_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  settler_lt?: InputMaybe<Scalars['Bytes']['input']>;
  settler_lte?: InputMaybe<Scalars['Bytes']['input']>;
  settler_not?: InputMaybe<Scalars['Bytes']['input']>;
  settler_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settler_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sizeDelta?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeDelta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_not?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDelta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trackingCode?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_contains?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_gt?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_gte?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  trackingCode_lt?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_lte?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_not?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  trackingCode_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tradeType?: InputMaybe<ActionType>;
  tradeType_in?: InputMaybe<Array<ActionType>>;
  tradeType_not?: InputMaybe<ActionType>;
  tradeType_not_in?: InputMaybe<Array<ActionType>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TradeOrderBy {
  account = 'account',
  account__accountId = 'account__accountId',
  account__feesPaid = 'account__feesPaid',
  account__id = 'account__id',
  account__owner = 'account__owner',
  account__pnl = 'account__pnl',
  account__totalClosedPositions = 'account__totalClosedPositions',
  account__totalLiquidations = 'account__totalLiquidations',
  account__totalMargin = 'account__totalMargin',
  account__totalOpenPositions = 'account__totalOpenPositions',
  account__totalTrades = 'account__totalTrades',
  account__totalVolume = 'account__totalVolume',
  accruedFunding = 'accruedFunding',
  averageEntryPrice = 'averageEntryPrice',
  block = 'block',
  collectedFees = 'collectedFees',
  fillPrice = 'fillPrice',
  id = 'id',
  interestCharged = 'interestCharged',
  market = 'market',
  market__currentFundingRate = 'market__currentFundingRate',
  market__currentFundingVelocity = 'market__currentFundingVelocity',
  market__feedId = 'market__feedId',
  market__flagRewardRatioD18 = 'market__flagRewardRatioD18',
  market__id = 'market__id',
  market__initialMarginRatioD18 = 'market__initialMarginRatioD18',
  market__interestRate = 'market__interestRate',
  market__liquidationRewardRatioD18 = 'market__liquidationRewardRatioD18',
  market__lockedOiPercent = 'market__lockedOiPercent',
  market__maintenanceMarginRatioD18 = 'market__maintenanceMarginRatioD18',
  market__makerFee = 'market__makerFee',
  market__marketName = 'market__marketName',
  market__marketSymbol = 'market__marketSymbol',
  market__maxFundingVelocity = 'market__maxFundingVelocity',
  market__maxLiquidationLimitAccumulationMultiplier = 'market__maxLiquidationLimitAccumulationMultiplier',
  market__maxSecondsInLiquidationWindow = 'market__maxSecondsInLiquidationWindow',
  market__minimumInitialMarginRatioD18 = 'market__minimumInitialMarginRatioD18',
  market__minimumPositionMargin = 'market__minimumPositionMargin',
  market__perpsMarketId = 'market__perpsMarketId',
  market__price = 'market__price',
  market__size = 'market__size',
  market__sizeDelta = 'market__sizeDelta',
  market__skew = 'market__skew',
  market__skewScale = 'market__skewScale',
  market__takerFee = 'market__takerFee',
  newSize = 'newSize',
  notionalAmount = 'notionalAmount',
  pnl = 'pnl',
  position = 'position',
  position__accruedFunding = 'position__accruedFunding',
  position__averageEntryPrice = 'position__averageEntryPrice',
  position__closeTimestamp = 'position__closeTimestamp',
  position__direction = 'position__direction',
  position__entryPrice = 'position__entryPrice',
  position__exitPrice = 'position__exitPrice',
  position__id = 'position__id',
  position__interestCharged = 'position__interestCharged',
  position__isLiquidated = 'position__isLiquidated',
  position__isOpen = 'position__isOpen',
  position__lastFillPrice = 'position__lastFillPrice',
  position__lastTradeTimestamp = 'position__lastTradeTimestamp',
  position__notionalAmount = 'position__notionalAmount',
  position__openTimestamp = 'position__openTimestamp',
  position__positionPnl = 'position__positionPnl',
  position__realizedPnl = 'position__realizedPnl',
  position__realizedPnlWithFees = 'position__realizedPnlWithFees',
  position__size = 'position__size',
  position__status = 'position__status',
  position__totalFees = 'position__totalFees',
  position__totalTrades = 'position__totalTrades',
  position__totalVolume = 'position__totalVolume',
  position__trackingCode = 'position__trackingCode',
  position__unrealizedPnl = 'position__unrealizedPnl',
  realizedPnl = 'realizedPnl',
  referralFees = 'referralFees',
  settlementReward = 'settlementReward',
  settler = 'settler',
  sizeDelta = 'sizeDelta',
  timestamp = 'timestamp',
  totalFees = 'totalFees',
  trackingCode = 'trackingCode',
  tradeType = 'tradeType',
  transactionHash = 'transactionHash',
  volume = 'volume'
}

export type Block = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type Meta = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Block;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum SubgraphErrorPolicy {
  /** Data will be returned even if the subgraph has indexing errors */
  allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  deny = 'deny'
}

export type V3AccountQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<AccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountFilter>;
}>;


export type V3AccountQuery = { __typename?: 'Query', accounts: Array<{ __typename?: 'Account', id: string, owner: string, feesPaid: string, pnl: string, totalLiquidations: string, totalTrades: string, totalVolume: string, totalOpenPositions: string, totalClosedPositions: string }> };

export type V3AccountAggregateStatQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<AccountAggregateStatOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountAggregateStatFilter>;
}>;


export type V3AccountAggregateStatQuery = { __typename?: 'Query', accountAggregateStats: Array<{ __typename?: 'AccountAggregateStat', id: string, positionPnl: string, accountPnl: string, timestamp: string, block: string, account: { __typename?: 'Account', id: string }, market: { __typename?: 'Market', id: string, marketName: string, perpsMarketId: string, marketSymbol: string } }> };

export type V3AccountFullQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<AccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountFilter>;
  positionFirst: Scalars['Int']['input'];
  positionOrderBy?: InputMaybe<PositionOrderBy>;
  positionOrderDirection?: InputMaybe<OrderDirection>;
  positionWhere?: InputMaybe<PositionFilter>;
  liquidationFirst: Scalars['Int']['input'];
  liquidationOrderBy?: InputMaybe<LiquidationOrderBy>;
  liquidationOrderDirection?: InputMaybe<OrderDirection>;
  liquidationWhere?: InputMaybe<LiquidationFilter>;
}>;


export type V3AccountFullQuery = { __typename?: 'Query', accounts: Array<{ __typename?: 'Account', id: string, owner: string, feesPaid: string, pnl: string, totalLiquidations: string, totalTrades: string, totalVolume: string, totalOpenPositions: string, totalClosedPositions: string, positions: Array<{ __typename?: 'Position', id: string, trackingCode: string | null, isOpen: boolean, isLiquidated: boolean, status: PositionStatus, direction: Direction, openTimestamp: string, closeTimestamp: string | null, entryPrice: string, exitPrice: string | null, lastFillPrice: string, size: string, notionalAmount: string, realizedPnl: string, totalFees: string, totalVolume: string, totalTrades: string, accruedFunding: string, interestCharged: string, averageEntryPrice: string, unrealizedPnl: string, market: { __typename?: 'Market', id: string, marketName: string, marketSymbol: string, price: string }, trades: Array<{ __typename?: 'Trade', id: string, sizeDelta: string, pnl: string }> | null }> | null, liquidations: Array<{ __typename?: 'Liquidation', id: string, timestamp: string, transactionHash: string, amountLiquidated: string, liquidationType: LiquidationType, currentPositionSize: string, notionalAmount: string, marketPrice: string, account: { __typename?: 'Account', id: string }, market: { __typename?: 'Market', id: string, marketName: string, marketSymbol: string, price: string } }> | null }> };

export type V3AccountOneQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type V3AccountOneQuery = { __typename?: 'Query', account: { __typename?: 'Account', id: string, owner: string, feesPaid: string, pnl: string, totalLiquidations: string, totalMargin: string, totalTrades: string, totalVolume: string, totalOpenPositions: string, totalClosedPositions: string } | null };

export type V3LiquidationQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<LiquidationOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidationFilter>;
}>;


export type V3LiquidationQuery = { __typename?: 'Query', liquidations: Array<{ __typename?: 'Liquidation', id: string, timestamp: string, transactionHash: string, amountLiquidated: string, liquidationType: LiquidationType, currentPositionSize: string, notionalAmount: string, marketPrice: string, account: { __typename?: 'Account', id: string }, market: { __typename?: 'Market', id: string, marketName: string, marketSymbol: string, price: string }, position: { __typename?: 'Position', id: string, isLiquidated: boolean, direction: Direction, status: PositionStatus, realizedPnl: string, totalFees: string, accruedFunding: string, totalTrades: string, totalVolume: string, averageEntryPrice: string, trackingCode: string | null } | null }> };

export type V3MarketQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<MarketOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketFilter>;
}>;


export type V3MarketQuery = { __typename?: 'Query', markets: Array<{ __typename?: 'Market', id: string, perpsMarketId: string, marketName: string, marketSymbol: string, price: string, skew: string | null, size: string | null, sizeDelta: string | null, currentFundingRate: string | null, currentFundingVelocity: string | null, interestRate: string | null, feedId: string | null, maxFundingVelocity: string | null, skewScale: string | null, lockedOiPercent: string | null, initialMarginRatioD18: string | null, minimumInitialMarginRatioD18: string | null, flagRewardRatioD18: string | null, minimumPositionMargin: string | null, maxSecondsInLiquidationWindow: string | null, makerFee: string | null, takerFee: string | null }> };

export type V3PositionQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<PositionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionFilter>;
}>;


export type V3PositionQuery = { __typename?: 'Query', positions: Array<{ __typename?: 'Position', id: string, trackingCode: string | null, isOpen: boolean, isLiquidated: boolean, status: PositionStatus, direction: Direction, openTimestamp: string, closeTimestamp: string | null, entryPrice: string, exitPrice: string | null, lastFillPrice: string, size: string, notionalAmount: string, realizedPnl: string, realizedPnlWithFees: string, positionPnl: string, totalFees: string, totalVolume: string, totalTrades: string, accruedFunding: string, interestCharged: string, averageEntryPrice: string, unrealizedPnl: string, market: { __typename?: 'Market', id: string, marketName: string, marketSymbol: string, price: string }, account: { __typename?: 'Account', id: string, accountId: string, owner: string }, trades: Array<{ __typename?: 'Trade', id: string, sizeDelta: string, pnl: string }> | null, liquidation: { __typename?: 'Liquidation', id: string, timestamp: string, amountLiquidated: string } | null }> };

export type V3TradeQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<TradeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradeFilter>;
}>;


export type V3TradeQuery = { __typename?: 'Query', trades: Array<{ __typename?: 'Trade', id: string, fillPrice: string, pnl: string, realizedPnl: string, accruedFunding: string, sizeDelta: string, newSize: string, volume: string, notionalAmount: string, totalFees: string, referralFees: string, collectedFees: string, settlementReward: string | null, trackingCode: string | null, settler: string, block: string, timestamp: string, transactionHash: string, interestCharged: string, tradeType: ActionType, position: { __typename?: 'Position', id: string }, account: { __typename?: 'Account', id: string, owner: string }, market: { __typename?: 'Market', id: string, marketName: string, marketSymbol: string, price: string } }> };


export const V3AccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"v3Account"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Account_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Account_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"feesPaid"}},{"kind":"Field","name":{"kind":"Name","value":"pnl"}},{"kind":"Field","name":{"kind":"Name","value":"totalLiquidations"}},{"kind":"Field","name":{"kind":"Name","value":"totalTrades"}},{"kind":"Field","name":{"kind":"Name","value":"totalVolume"}},{"kind":"Field","name":{"kind":"Name","value":"totalOpenPositions"}},{"kind":"Field","name":{"kind":"Name","value":"totalClosedPositions"}}]}}]}}]} as unknown as DocumentNode<V3AccountQuery, V3AccountQueryVariables>;
export const V3AccountAggregateStatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"v3AccountAggregateStat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountAggregateStat_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountAggregateStat_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountAggregateStats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"market"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marketName"}},{"kind":"Field","name":{"kind":"Name","value":"perpsMarketId"}},{"kind":"Field","name":{"kind":"Name","value":"marketSymbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positionPnl"}},{"kind":"Field","name":{"kind":"Name","value":"accountPnl"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"block"}}]}}]}}]} as unknown as DocumentNode<V3AccountAggregateStatQuery, V3AccountAggregateStatQueryVariables>;
export const V3AccountFullDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"v3AccountFull"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Account_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Account_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"positionFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"positionOrderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Position_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"positionOrderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"positionWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Position_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"liquidationFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"liquidationOrderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Liquidation_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"liquidationOrderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"liquidationWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Liquidation_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"feesPaid"}},{"kind":"Field","name":{"kind":"Name","value":"pnl"}},{"kind":"Field","name":{"kind":"Name","value":"totalLiquidations"}},{"kind":"Field","name":{"kind":"Name","value":"totalTrades"}},{"kind":"Field","name":{"kind":"Name","value":"totalVolume"}},{"kind":"Field","name":{"kind":"Name","value":"totalOpenPositions"}},{"kind":"Field","name":{"kind":"Name","value":"totalClosedPositions"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"positionFirst"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"positionOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"positionOrderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"positionWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isOpen"}},{"kind":"Field","name":{"kind":"Name","value":"isLiquidated"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"direction"}},{"kind":"Field","name":{"kind":"Name","value":"openTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"closeTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"entryPrice"}},{"kind":"Field","name":{"kind":"Name","value":"exitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"lastFillPrice"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"notionalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"realizedPnl"}},{"kind":"Field","name":{"kind":"Name","value":"totalFees"}},{"kind":"Field","name":{"kind":"Name","value":"totalVolume"}},{"kind":"Field","name":{"kind":"Name","value":"totalTrades"}},{"kind":"Field","name":{"kind":"Name","value":"accruedFunding"}},{"kind":"Field","name":{"kind":"Name","value":"interestCharged"}},{"kind":"Field","name":{"kind":"Name","value":"averageEntryPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unrealizedPnl"}},{"kind":"Field","name":{"kind":"Name","value":"market"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marketName"}},{"kind":"Field","name":{"kind":"Name","value":"marketSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trades"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sizeDelta"}},{"kind":"Field","name":{"kind":"Name","value":"pnl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"liquidations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"liquidationFirst"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"liquidationWhere"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"liquidationOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"liquidationOrderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"market"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marketName"}},{"kind":"Field","name":{"kind":"Name","value":"marketSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amountLiquidated"}},{"kind":"Field","name":{"kind":"Name","value":"liquidationType"}},{"kind":"Field","name":{"kind":"Name","value":"currentPositionSize"}},{"kind":"Field","name":{"kind":"Name","value":"notionalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"marketPrice"}}]}}]}}]}}]} as unknown as DocumentNode<V3AccountFullQuery, V3AccountFullQueryVariables>;
export const V3AccountOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"v3AccountOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"feesPaid"}},{"kind":"Field","name":{"kind":"Name","value":"pnl"}},{"kind":"Field","name":{"kind":"Name","value":"totalLiquidations"}},{"kind":"Field","name":{"kind":"Name","value":"totalMargin"}},{"kind":"Field","name":{"kind":"Name","value":"totalTrades"}},{"kind":"Field","name":{"kind":"Name","value":"totalVolume"}},{"kind":"Field","name":{"kind":"Name","value":"totalOpenPositions"}},{"kind":"Field","name":{"kind":"Name","value":"totalClosedPositions"}}]}}]}}]} as unknown as DocumentNode<V3AccountOneQuery, V3AccountOneQueryVariables>;
export const V3LiquidationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"v3Liquidation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Liquidation_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Liquidation_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"liquidations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"market"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marketName"}},{"kind":"Field","name":{"kind":"Name","value":"marketSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amountLiquidated"}},{"kind":"Field","name":{"kind":"Name","value":"liquidationType"}},{"kind":"Field","name":{"kind":"Name","value":"currentPositionSize"}},{"kind":"Field","name":{"kind":"Name","value":"notionalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"marketPrice"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isLiquidated"}},{"kind":"Field","name":{"kind":"Name","value":"direction"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"realizedPnl"}},{"kind":"Field","name":{"kind":"Name","value":"totalFees"}},{"kind":"Field","name":{"kind":"Name","value":"accruedFunding"}},{"kind":"Field","name":{"kind":"Name","value":"totalTrades"}},{"kind":"Field","name":{"kind":"Name","value":"totalVolume"}},{"kind":"Field","name":{"kind":"Name","value":"averageEntryPrice"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}}]}}]}}]}}]} as unknown as DocumentNode<V3LiquidationQuery, V3LiquidationQueryVariables>;
export const V3MarketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"v3Market"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Market_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Market_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"perpsMarketId"}},{"kind":"Field","name":{"kind":"Name","value":"marketName"}},{"kind":"Field","name":{"kind":"Name","value":"marketSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"skew"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sizeDelta"}},{"kind":"Field","name":{"kind":"Name","value":"currentFundingRate"}},{"kind":"Field","name":{"kind":"Name","value":"currentFundingVelocity"}},{"kind":"Field","name":{"kind":"Name","value":"interestRate"}},{"kind":"Field","name":{"kind":"Name","value":"feedId"}},{"kind":"Field","name":{"kind":"Name","value":"maxFundingVelocity"}},{"kind":"Field","name":{"kind":"Name","value":"skewScale"}},{"kind":"Field","name":{"kind":"Name","value":"lockedOiPercent"}},{"kind":"Field","name":{"kind":"Name","value":"initialMarginRatioD18"}},{"kind":"Field","name":{"kind":"Name","value":"minimumInitialMarginRatioD18"}},{"kind":"Field","name":{"kind":"Name","value":"flagRewardRatioD18"}},{"kind":"Field","name":{"kind":"Name","value":"minimumPositionMargin"}},{"kind":"Field","name":{"kind":"Name","value":"maxSecondsInLiquidationWindow"}},{"kind":"Field","name":{"kind":"Name","value":"makerFee"}},{"kind":"Field","name":{"kind":"Name","value":"takerFee"}}]}}]}}]} as unknown as DocumentNode<V3MarketQuery, V3MarketQueryVariables>;
export const V3PositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"v3Position"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Position_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Position_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isOpen"}},{"kind":"Field","name":{"kind":"Name","value":"isLiquidated"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"direction"}},{"kind":"Field","name":{"kind":"Name","value":"openTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"closeTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"entryPrice"}},{"kind":"Field","name":{"kind":"Name","value":"exitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"lastFillPrice"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"notionalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"realizedPnl"}},{"kind":"Field","name":{"kind":"Name","value":"realizedPnlWithFees"}},{"kind":"Field","name":{"kind":"Name","value":"positionPnl"}},{"kind":"Field","name":{"kind":"Name","value":"totalFees"}},{"kind":"Field","name":{"kind":"Name","value":"totalVolume"}},{"kind":"Field","name":{"kind":"Name","value":"totalTrades"}},{"kind":"Field","name":{"kind":"Name","value":"accruedFunding"}},{"kind":"Field","name":{"kind":"Name","value":"interestCharged"}},{"kind":"Field","name":{"kind":"Name","value":"averageEntryPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unrealizedPnl"}},{"kind":"Field","name":{"kind":"Name","value":"market"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marketName"}},{"kind":"Field","name":{"kind":"Name","value":"marketSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trades"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sizeDelta"}},{"kind":"Field","name":{"kind":"Name","value":"pnl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liquidation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"amountLiquidated"}}]}}]}}]}}]} as unknown as DocumentNode<V3PositionQuery, V3PositionQueryVariables>;
export const V3TradeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"v3Trade"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Trade_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Trade_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trades"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"market"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marketName"}},{"kind":"Field","name":{"kind":"Name","value":"marketSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fillPrice"}},{"kind":"Field","name":{"kind":"Name","value":"pnl"}},{"kind":"Field","name":{"kind":"Name","value":"realizedPnl"}},{"kind":"Field","name":{"kind":"Name","value":"accruedFunding"}},{"kind":"Field","name":{"kind":"Name","value":"sizeDelta"}},{"kind":"Field","name":{"kind":"Name","value":"newSize"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"notionalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalFees"}},{"kind":"Field","name":{"kind":"Name","value":"referralFees"}},{"kind":"Field","name":{"kind":"Name","value":"collectedFees"}},{"kind":"Field","name":{"kind":"Name","value":"settlementReward"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"settler"}},{"kind":"Field","name":{"kind":"Name","value":"block"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"interestCharged"}},{"kind":"Field","name":{"kind":"Name","value":"tradeType"}}]}}]}}]} as unknown as DocumentNode<V3TradeQuery, V3TradeQueryVariables>;