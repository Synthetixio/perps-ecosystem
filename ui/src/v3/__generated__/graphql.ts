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
};

export type Account = {
  __typename?: 'Account';
  accountId: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  owner: Scalars['String']['output'];
};

export type AccountLiquidated = {
  __typename?: 'AccountLiquidated';
  accountId: Scalars['BigInt']['output'];
  fullyLiquidated: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AccountOrderBy {
  accountId = 'accountId',
  id = 'id',
  owner = 'owner'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type BlockHeight = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type CollateralModified = {
  __typename?: 'CollateralModified';
  accountId: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  sender: Scalars['Bytes']['output'];
  synthMarketId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
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
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<CollateralModifiedFilter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
};

export enum CollateralModifiedOrderBy {
  accountId = 'accountId',
  amount = 'amount',
  id = 'id',
  sender = 'sender',
  synthMarketId = 'synthMarketId',
  timestamp = 'timestamp'
}

export type GlobalConfiguration = {
  __typename?: 'GlobalConfiguration';
  feeCollector: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<GlobalConfigurationFilter>>>;
};

export enum GlobalConfigurationOrderBy {
  feeCollector = 'feeCollector',
  id = 'id'
}

export type Market = {
  __typename?: 'Market';
  currentFundingRate: Maybe<Scalars['BigInt']['output']>;
  currentFundingVelocity: Maybe<Scalars['BigInt']['output']>;
  factoryInitialized: Maybe<Scalars['Boolean']['output']>;
  feedId: Maybe<Scalars['Bytes']['output']>;
  id: Scalars['String']['output'];
  initialMarginRatioD18: Maybe<Scalars['BigInt']['output']>;
  liquidationRewardRatioD18: Maybe<Scalars['BigInt']['output']>;
  lockedOiPercent: Maybe<Scalars['BigInt']['output']>;
  maintenanceMarginRatioD18: Maybe<Scalars['BigInt']['output']>;
  makerFee: Maybe<Scalars['BigInt']['output']>;
  marketName: Maybe<Scalars['String']['output']>;
  marketOwner: Maybe<Scalars['String']['output']>;
  marketSymbol: Maybe<Scalars['String']['output']>;
  maxFundingVelocity: Maybe<Scalars['BigInt']['output']>;
  maxLiquidationLimitAccumulationMultiplier: Maybe<Scalars['BigInt']['output']>;
  maxSecondsInLiquidationWindow: Maybe<Scalars['BigInt']['output']>;
  minimumPositionMargin: Maybe<Scalars['BigInt']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  perpsMarketId: Scalars['BigInt']['output'];
  price: Maybe<Scalars['BigInt']['output']>;
  size: Maybe<Scalars['BigInt']['output']>;
  sizeDelta: Maybe<Scalars['BigInt']['output']>;
  skew: Maybe<Scalars['BigInt']['output']>;
  skewScale: Maybe<Scalars['BigInt']['output']>;
  takerFee: Maybe<Scalars['BigInt']['output']>;
};

export type MarketUpdated = {
  __typename?: 'MarketUpdated';
  currentFundingRate: Scalars['BigInt']['output'];
  currentFundingVelocity: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  factoryInitialized?: InputMaybe<Scalars['Boolean']['input']>;
  factoryInitialized_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  factoryInitialized_not?: InputMaybe<Scalars['Boolean']['input']>;
  factoryInitialized_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  initialMarginRatioD18?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialMarginRatioD18_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialMarginRatioD18_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationRewardRatioD18?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationRewardRatioD18_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardRatioD18_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  marketOwner?: InputMaybe<Scalars['String']['input']>;
  marketOwner_contains?: InputMaybe<Scalars['String']['input']>;
  marketOwner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketOwner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketOwner_gt?: InputMaybe<Scalars['String']['input']>;
  marketOwner_gte?: InputMaybe<Scalars['String']['input']>;
  marketOwner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketOwner_lt?: InputMaybe<Scalars['String']['input']>;
  marketOwner_lte?: InputMaybe<Scalars['String']['input']>;
  marketOwner_not?: InputMaybe<Scalars['String']['input']>;
  marketOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketOwner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketOwner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketOwner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  minimumPositionMargin?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumPositionMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumPositionMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketFilter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  perpsMarketId?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  perpsMarketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  perpsMarketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  factoryInitialized = 'factoryInitialized',
  feedId = 'feedId',
  id = 'id',
  initialMarginRatioD18 = 'initialMarginRatioD18',
  liquidationRewardRatioD18 = 'liquidationRewardRatioD18',
  lockedOiPercent = 'lockedOiPercent',
  maintenanceMarginRatioD18 = 'maintenanceMarginRatioD18',
  makerFee = 'makerFee',
  marketName = 'marketName',
  marketOwner = 'marketOwner',
  marketSymbol = 'marketSymbol',
  maxFundingVelocity = 'maxFundingVelocity',
  maxLiquidationLimitAccumulationMultiplier = 'maxLiquidationLimitAccumulationMultiplier',
  maxSecondsInLiquidationWindow = 'maxSecondsInLiquidationWindow',
  minimumPositionMargin = 'minimumPositionMargin',
  owner = 'owner',
  perpsMarketId = 'perpsMarketId',
  price = 'price',
  size = 'size',
  sizeDelta = 'sizeDelta',
  skew = 'skew',
  skewScale = 'skewScale',
  takerFee = 'takerFee'
}

export type Order = {
  __typename?: 'Order';
  acceptablePrice: Maybe<Scalars['BigInt']['output']>;
  accountId: Maybe<Scalars['BigInt']['output']>;
  accountPnlRealized: Maybe<Scalars['BigInt']['output']>;
  amountProvided: Maybe<Scalars['BigInt']['output']>;
  block: Scalars['BigInt']['output'];
  collectedFees: Maybe<Scalars['BigInt']['output']>;
  expirationTime: Maybe<Scalars['BigInt']['output']>;
  fillPrice: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['String']['output'];
  marketId: Maybe<Scalars['BigInt']['output']>;
  newSize: Maybe<Scalars['BigInt']['output']>;
  orderType: Maybe<Scalars['Int']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  settlementReward: Maybe<Scalars['BigInt']['output']>;
  settlementTime: Maybe<Scalars['BigInt']['output']>;
  settler: Maybe<Scalars['String']['output']>;
  size: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  trackingCode: Maybe<Scalars['Bytes']['output']>;
};

export type OrderCommitted = {
  __typename?: 'OrderCommitted';
  acceptablePrice: Scalars['BigInt']['output'];
  accountId: Scalars['BigInt']['output'];
  expirationTime: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  marketId: Scalars['BigInt']['output'];
  orderType: Scalars['Int']['output'];
  sender: Scalars['Bytes']['output'];
  settlementTime: Scalars['BigInt']['output'];
  sizeDelta: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  trackingCode: Scalars['Bytes']['output'];
};

export type OrderCommittedFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  acceptablePrice?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  acceptablePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OrderCommittedFilter>>>;
  expirationTime?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expirationTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OrderCommittedFilter>>>;
  orderType?: InputMaybe<Scalars['Int']['input']>;
  orderType_gt?: InputMaybe<Scalars['Int']['input']>;
  orderType_gte?: InputMaybe<Scalars['Int']['input']>;
  orderType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderType_lt?: InputMaybe<Scalars['Int']['input']>;
  orderType_lte?: InputMaybe<Scalars['Int']['input']>;
  orderType_not?: InputMaybe<Scalars['Int']['input']>;
  orderType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  settlementTime?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
};

export enum OrderCommittedOrderBy {
  acceptablePrice = 'acceptablePrice',
  accountId = 'accountId',
  expirationTime = 'expirationTime',
  id = 'id',
  marketId = 'marketId',
  orderType = 'orderType',
  sender = 'sender',
  settlementTime = 'settlementTime',
  sizeDelta = 'sizeDelta',
  timestamp = 'timestamp',
  trackingCode = 'trackingCode'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  asc = 'asc',
  desc = 'desc'
}

export type OrderSettled = {
  __typename?: 'OrderSettled';
  accountId: Scalars['BigInt']['output'];
  accruedFunding: Scalars['BigInt']['output'];
  collectedFees: Scalars['BigInt']['output'];
  fillPrice: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  marketId: Scalars['BigInt']['output'];
  newSize: Scalars['BigInt']['output'];
  referralFees: Scalars['BigInt']['output'];
  settlementReward: Scalars['BigInt']['output'];
  settler: Scalars['Bytes']['output'];
  sizeDelta: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  totalFees: Scalars['BigInt']['output'];
  trackingCode: Scalars['Bytes']['output'];
};

export type OrderSettledFilter = {
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
  accruedFunding?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accruedFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  accruedFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OrderSettledFilter>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newSize?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OrderSettledFilter>>>;
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
};

export enum OrderSettledOrderBy {
  accountId = 'accountId',
  accruedFunding = 'accruedFunding',
  collectedFees = 'collectedFees',
  fillPrice = 'fillPrice',
  id = 'id',
  marketId = 'marketId',
  newSize = 'newSize',
  referralFees = 'referralFees',
  settlementReward = 'settlementReward',
  settler = 'settler',
  sizeDelta = 'sizeDelta',
  timestamp = 'timestamp',
  totalFees = 'totalFees',
  trackingCode = 'trackingCode'
}

export type OrderFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  acceptablePrice?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  acceptablePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountPnlRealized?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnlRealized_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnlRealized_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnlRealized_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountPnlRealized_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnlRealized_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnlRealized_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountPnlRealized_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountProvided?: InputMaybe<Scalars['BigInt']['input']>;
  amountProvided_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountProvided_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountProvided_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountProvided_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountProvided_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountProvided_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountProvided_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OrderFilter>>>;
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
  expirationTime?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expirationTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fillPrice?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fillPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  fillPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newSize?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  newSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OrderFilter>>>;
  orderType?: InputMaybe<Scalars['Int']['input']>;
  orderType_gt?: InputMaybe<Scalars['Int']['input']>;
  orderType_gte?: InputMaybe<Scalars['Int']['input']>;
  orderType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderType_lt?: InputMaybe<Scalars['Int']['input']>;
  orderType_lte?: InputMaybe<Scalars['Int']['input']>;
  orderType_not?: InputMaybe<Scalars['Int']['input']>;
  orderType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementReward?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementTime?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settler?: InputMaybe<Scalars['String']['input']>;
  settler_contains?: InputMaybe<Scalars['String']['input']>;
  settler_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_ends_with?: InputMaybe<Scalars['String']['input']>;
  settler_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_gt?: InputMaybe<Scalars['String']['input']>;
  settler_gte?: InputMaybe<Scalars['String']['input']>;
  settler_in?: InputMaybe<Array<Scalars['String']['input']>>;
  settler_lt?: InputMaybe<Scalars['String']['input']>;
  settler_lte?: InputMaybe<Scalars['String']['input']>;
  settler_not?: InputMaybe<Scalars['String']['input']>;
  settler_not_contains?: InputMaybe<Scalars['String']['input']>;
  settler_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  settler_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  settler_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  settler_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settler_starts_with?: InputMaybe<Scalars['String']['input']>;
  settler_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
};

export enum OrderOrderBy {
  acceptablePrice = 'acceptablePrice',
  accountId = 'accountId',
  accountPnlRealized = 'accountPnlRealized',
  amountProvided = 'amountProvided',
  block = 'block',
  collectedFees = 'collectedFees',
  expirationTime = 'expirationTime',
  fillPrice = 'fillPrice',
  id = 'id',
  marketId = 'marketId',
  newSize = 'newSize',
  orderType = 'orderType',
  owner = 'owner',
  settlementReward = 'settlementReward',
  settlementTime = 'settlementTime',
  settler = 'settler',
  size = 'size',
  timestamp = 'timestamp',
  trackingCode = 'trackingCode'
}

export type PositionLiquidated = {
  __typename?: 'PositionLiquidated';
  accountId: Scalars['BigInt']['output'];
  amountLiquidated: Scalars['BigInt']['output'];
  currentPositionSize: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  marketId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
};

export enum PositionLiquidatedOrderBy {
  accountId = 'accountId',
  amountLiquidated = 'amountLiquidated',
  currentPositionSize = 'currentPositionSize',
  id = 'id',
  marketId = 'marketId',
  timestamp = 'timestamp'
}

export type PreviousOrderExpired = {
  __typename?: 'PreviousOrderExpired';
  acceptablePrice: Scalars['BigInt']['output'];
  accountId: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  marketId: Scalars['BigInt']['output'];
  settlementTime: Scalars['BigInt']['output'];
  sizeDelta: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  trackingCode: Scalars['Bytes']['output'];
};

export type PreviousOrderExpiredFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  acceptablePrice?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  acceptablePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PreviousOrderExpiredFilter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PreviousOrderExpiredFilter>>>;
  settlementTime?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
};

export enum PreviousOrderExpiredOrderBy {
  acceptablePrice = 'acceptablePrice',
  accountId = 'accountId',
  id = 'id',
  marketId = 'marketId',
  settlementTime = 'settlementTime',
  sizeDelta = 'sizeDelta',
  timestamp = 'timestamp',
  trackingCode = 'trackingCode'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta: Maybe<Meta>;
  account: Maybe<Account>;
  accountLiquidated: Maybe<AccountLiquidated>;
  accountLiquidateds: Array<AccountLiquidated>;
  accounts: Array<Account>;
  collateralModified: Maybe<CollateralModified>;
  collateralModifieds: Array<CollateralModified>;
  globalConfiguration: Maybe<GlobalConfiguration>;
  globalConfigurations: Array<GlobalConfiguration>;
  market: Maybe<Market>;
  marketUpdated: Maybe<MarketUpdated>;
  marketUpdateds: Array<MarketUpdated>;
  markets: Array<Market>;
  order: Maybe<Order>;
  orderCommitted: Maybe<OrderCommitted>;
  orderCommitteds: Array<OrderCommitted>;
  orderSettled: Maybe<OrderSettled>;
  orderSettleds: Array<OrderSettled>;
  orders: Array<Order>;
  positionLiquidated: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  previousOrderExpired: Maybe<PreviousOrderExpired>;
  previousOrderExpireds: Array<PreviousOrderExpired>;
  referrerShare: Maybe<ReferrerShare>;
  referrerShares: Array<ReferrerShare>;
  settlementStrategies: Array<SettlementStrategy>;
  settlementStrategy: Maybe<SettlementStrategy>;
};


export type QueryMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
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


export type QueryOrderArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryOrderCommittedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryOrderCommittedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderCommittedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<OrderCommittedFilter>;
};


export type QueryOrderSettledArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryOrderSettledsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderSettledOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<OrderSettledFilter>;
};


export type QueryOrdersArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<OrderFilter>;
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


export type QueryPreviousOrderExpiredArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryPreviousOrderExpiredsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PreviousOrderExpiredOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<PreviousOrderExpiredFilter>;
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

export type ReferrerShare = {
  __typename?: 'ReferrerShare';
  id: Scalars['String']['output'];
  referrer: Maybe<Scalars['String']['output']>;
  shareRatioD18: Maybe<Scalars['BigInt']['output']>;
};

export type ReferrerShareFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReferrerShareFilter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  id: Scalars['String']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  accountLiquidated: Maybe<AccountLiquidated>;
  accountLiquidateds: Array<AccountLiquidated>;
  accounts: Array<Account>;
  collateralModified: Maybe<CollateralModified>;
  collateralModifieds: Array<CollateralModified>;
  globalConfiguration: Maybe<GlobalConfiguration>;
  globalConfigurations: Array<GlobalConfiguration>;
  market: Maybe<Market>;
  marketUpdated: Maybe<MarketUpdated>;
  marketUpdateds: Array<MarketUpdated>;
  markets: Array<Market>;
  order: Maybe<Order>;
  orderCommitted: Maybe<OrderCommitted>;
  orderCommitteds: Array<OrderCommitted>;
  orderSettled: Maybe<OrderSettled>;
  orderSettleds: Array<OrderSettled>;
  orders: Array<Order>;
  positionLiquidated: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  previousOrderExpired: Maybe<PreviousOrderExpired>;
  previousOrderExpireds: Array<PreviousOrderExpired>;
  referrerShare: Maybe<ReferrerShare>;
  referrerShares: Array<ReferrerShare>;
  settlementStrategies: Array<SettlementStrategy>;
  settlementStrategy: Maybe<SettlementStrategy>;
};


export type SubscriptionMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
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


export type SubscriptionOrderArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionOrderCommittedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionOrderCommittedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderCommittedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<OrderCommittedFilter>;
};


export type SubscriptionOrderSettledArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionOrderSettledsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderSettledOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<OrderSettledFilter>;
};


export type SubscriptionOrdersArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<OrderFilter>;
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


export type SubscriptionPreviousOrderExpiredArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionPreviousOrderExpiredsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PreviousOrderExpiredOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<PreviousOrderExpiredFilter>;
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

export type Block = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
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

export type MarketsQueryV3QueryVariables = Exact<{
  first: Scalars['Int']['input'];
}>;


export type MarketsQueryV3Query = { __typename?: 'Query', markets: Array<{ __typename?: 'Market', id: string, perpsMarketId: string, marketName: string | null, marketSymbol: string | null, price: string | null, skew: string | null, size: string | null, sizeDelta: string | null, currentFundingRate: string | null, currentFundingVelocity: string | null, feedId: string | null, maxFundingVelocity: string | null, skewScale: string | null, lockedOiPercent: string | null, marketOwner: string | null, owner: string | null, initialMarginRatioD18: string | null, maintenanceMarginRatioD18: string | null, liquidationRewardRatioD18: string | null, maxSecondsInLiquidationWindow: string | null, minimumPositionMargin: string | null, maxLiquidationLimitAccumulationMultiplier: string | null, makerFee: string | null, takerFee: string | null, factoryInitialized: boolean | null }> };


export const MarketsQueryV3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MarketsQueryV3"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"perpsMarketId"}},{"kind":"Field","name":{"kind":"Name","value":"marketName"}},{"kind":"Field","name":{"kind":"Name","value":"marketSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"skew"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sizeDelta"}},{"kind":"Field","name":{"kind":"Name","value":"currentFundingRate"}},{"kind":"Field","name":{"kind":"Name","value":"currentFundingVelocity"}},{"kind":"Field","name":{"kind":"Name","value":"feedId"}},{"kind":"Field","name":{"kind":"Name","value":"maxFundingVelocity"}},{"kind":"Field","name":{"kind":"Name","value":"skewScale"}},{"kind":"Field","name":{"kind":"Name","value":"lockedOiPercent"}},{"kind":"Field","name":{"kind":"Name","value":"marketOwner"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"initialMarginRatioD18"}},{"kind":"Field","name":{"kind":"Name","value":"maintenanceMarginRatioD18"}},{"kind":"Field","name":{"kind":"Name","value":"liquidationRewardRatioD18"}},{"kind":"Field","name":{"kind":"Name","value":"maxSecondsInLiquidationWindow"}},{"kind":"Field","name":{"kind":"Name","value":"minimumPositionMargin"}},{"kind":"Field","name":{"kind":"Name","value":"maxLiquidationLimitAccumulationMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"makerFee"}},{"kind":"Field","name":{"kind":"Name","value":"takerFee"}},{"kind":"Field","name":{"kind":"Name","value":"factoryInitialized"}}]}}]}}]} as unknown as DocumentNode<MarketsQueryV3Query, MarketsQueryV3QueryVariables>;