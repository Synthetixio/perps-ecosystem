/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: string; output: string };
  BigInt: { input: string; output: string };
  Bytes: { input: string; output: string };
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any };
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type CumulativeMarketStat = {
  __typename?: 'CumulativeMarketStat';
  cumulativeFees: Scalars['BigInt']['output'];
  cumulativeTrades: Scalars['BigInt']['output'];
  cumulativeVolume: Scalars['BigInt']['output'];
  /** CumulativeMarketStat-marketAddress */
  id: Scalars['ID']['output'];
  market: FuturesMarket;
};

export type CumulativeMarketStat_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CumulativeMarketStat_Filter>>>;
  cumulativeFees?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeTrades?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeTrades_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolume?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<FuturesMarket_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<CumulativeMarketStat_Filter>>>;
};

export enum CumulativeMarketStat_OrderBy {
  CumulativeFees = 'cumulativeFees',
  CumulativeTrades = 'cumulativeTrades',
  CumulativeVolume = 'cumulativeVolume',
  Id = 'id',
  Market = 'market',
  MarketAsset = 'market__asset',
  MarketId = 'market__id',
  MarketIsActive = 'market__isActive',
  MarketMarketKey = 'market__marketKey',
  MarketTimestamp = 'market__timestamp',
}

export type DailyMarketStat = {
  __typename?: 'DailyMarketStat';
  cumulativeFees: Scalars['BigInt']['output'];
  cumulativeTrades: Scalars['BigInt']['output'];
  cumulativeVolume: Scalars['BigInt']['output'];
  day: Scalars['String']['output'];
  fees: Scalars['BigInt']['output'];
  /** marketAddress-YYYY-MM-DD */
  id: Scalars['ID']['output'];
  market: FuturesMarket;
  timestamp: Scalars['BigInt']['output'];
  trades: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
};

export type DailyMarketStat_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DailyMarketStat_Filter>>>;
  cumulativeFees?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeTrades?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeTrades_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolume?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  day?: InputMaybe<Scalars['String']['input']>;
  day_contains?: InputMaybe<Scalars['String']['input']>;
  day_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  day_ends_with?: InputMaybe<Scalars['String']['input']>;
  day_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  day_gt?: InputMaybe<Scalars['String']['input']>;
  day_gte?: InputMaybe<Scalars['String']['input']>;
  day_in?: InputMaybe<Array<Scalars['String']['input']>>;
  day_lt?: InputMaybe<Scalars['String']['input']>;
  day_lte?: InputMaybe<Scalars['String']['input']>;
  day_not?: InputMaybe<Scalars['String']['input']>;
  day_not_contains?: InputMaybe<Scalars['String']['input']>;
  day_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  day_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  day_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  day_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  day_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  day_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  day_starts_with?: InputMaybe<Scalars['String']['input']>;
  day_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fees?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<FuturesMarket_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<DailyMarketStat_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trades?: InputMaybe<Scalars['BigInt']['input']>;
  trades_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trades_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trades_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trades_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trades_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trades_not?: InputMaybe<Scalars['BigInt']['input']>;
  trades_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum DailyMarketStat_OrderBy {
  CumulativeFees = 'cumulativeFees',
  CumulativeTrades = 'cumulativeTrades',
  CumulativeVolume = 'cumulativeVolume',
  Day = 'day',
  Fees = 'fees',
  Id = 'id',
  Market = 'market',
  MarketAsset = 'market__asset',
  MarketId = 'market__id',
  MarketIsActive = 'market__isActive',
  MarketMarketKey = 'market__marketKey',
  MarketTimestamp = 'market__timestamp',
  Timestamp = 'timestamp',
  Trades = 'trades',
  Volume = 'volume',
}

export type DailyStat = {
  __typename?: 'DailyStat';
  cumulativeFees: Scalars['BigInt']['output'];
  cumulativeTraders: Scalars['BigInt']['output'];
  cumulativeTrades: Scalars['BigInt']['output'];
  cumulativeVolume: Scalars['BigInt']['output'];
  day: Scalars['String']['output'];
  existingTraders: Scalars['BigInt']['output'];
  fees: Scalars['BigInt']['output'];
  /** DailyStat-YYYY-MM-DD */
  id: Scalars['ID']['output'];
  newTraders: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  trades: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
};

export type DailyStat_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DailyStat_Filter>>>;
  cumulativeFees?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeTraders?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTraders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTraders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTraders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeTraders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTraders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTraders_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTraders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeTrades?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeTrades_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeTrades_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolume?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  day?: InputMaybe<Scalars['String']['input']>;
  day_contains?: InputMaybe<Scalars['String']['input']>;
  day_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  day_ends_with?: InputMaybe<Scalars['String']['input']>;
  day_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  day_gt?: InputMaybe<Scalars['String']['input']>;
  day_gte?: InputMaybe<Scalars['String']['input']>;
  day_in?: InputMaybe<Array<Scalars['String']['input']>>;
  day_lt?: InputMaybe<Scalars['String']['input']>;
  day_lte?: InputMaybe<Scalars['String']['input']>;
  day_not?: InputMaybe<Scalars['String']['input']>;
  day_not_contains?: InputMaybe<Scalars['String']['input']>;
  day_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  day_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  day_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  day_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  day_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  day_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  day_starts_with?: InputMaybe<Scalars['String']['input']>;
  day_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  existingTraders?: InputMaybe<Scalars['BigInt']['input']>;
  existingTraders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  existingTraders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  existingTraders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  existingTraders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  existingTraders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  existingTraders_not?: InputMaybe<Scalars['BigInt']['input']>;
  existingTraders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newTraders?: InputMaybe<Scalars['BigInt']['input']>;
  newTraders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newTraders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newTraders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newTraders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newTraders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newTraders_not?: InputMaybe<Scalars['BigInt']['input']>;
  newTraders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DailyStat_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trades?: InputMaybe<Scalars['BigInt']['input']>;
  trades_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trades_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trades_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trades_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trades_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trades_not?: InputMaybe<Scalars['BigInt']['input']>;
  trades_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum DailyStat_OrderBy {
  CumulativeFees = 'cumulativeFees',
  CumulativeTraders = 'cumulativeTraders',
  CumulativeTrades = 'cumulativeTrades',
  CumulativeVolume = 'cumulativeVolume',
  Day = 'day',
  ExistingTraders = 'existingTraders',
  Fees = 'fees',
  Id = 'id',
  NewTraders = 'newTraders',
  Timestamp = 'timestamp',
  Trades = 'trades',
  Volume = 'volume',
}

export type Frontend = {
  __typename?: 'Frontend';
  amount: Scalars['BigInt']['output'];
  fees: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  markets: Array<FuturesMarket>;
};

export type FrontendMarketsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesMarket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FuturesMarket_Filter>;
};

export type Frontend_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Frontend_Filter>>>;
  fees?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  markets?: InputMaybe<Array<Scalars['String']['input']>>;
  markets_?: InputMaybe<FuturesMarket_Filter>;
  markets_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  markets_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  markets_not?: InputMaybe<Array<Scalars['String']['input']>>;
  markets_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  markets_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Frontend_Filter>>>;
};

export enum Frontend_OrderBy {
  Amount = 'amount',
  Fees = 'fees',
  Id = 'id',
  Markets = 'markets',
}

export type FundingRateUpdate = {
  __typename?: 'FundingRateUpdate';
  funding: Scalars['BigInt']['output'];
  fundingRate: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['BigInt']['output'];
  market: FuturesMarket;
  timestamp: Scalars['BigInt']['output'];
};

export type FundingRateUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FundingRateUpdate_Filter>>>;
  funding?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  funding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  funding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  funding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  funding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  funding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  funding_not?: InputMaybe<Scalars['BigInt']['input']>;
  funding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<FuturesMarket_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<FundingRateUpdate_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum FundingRateUpdate_OrderBy {
  Funding = 'funding',
  FundingRate = 'fundingRate',
  Id = 'id',
  Index = 'index',
  Market = 'market',
  MarketAsset = 'market__asset',
  MarketId = 'market__id',
  MarketIsActive = 'market__isActive',
  MarketMarketKey = 'market__marketKey',
  MarketTimestamp = 'market__timestamp',
  Timestamp = 'timestamp',
}

export type FuturesMarginTransfer = {
  __typename?: 'FuturesMarginTransfer';
  id: Scalars['ID']['output'];
  market: FuturesMarket;
  size: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  trader: Trader;
  txHash: Scalars['String']['output'];
};

export type FuturesMarginTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FuturesMarginTransfer_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<FuturesMarket_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<FuturesMarginTransfer_Filter>>>;
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
  trader?: InputMaybe<Scalars['String']['input']>;
  trader_?: InputMaybe<Trader_Filter>;
  trader_contains?: InputMaybe<Scalars['String']['input']>;
  trader_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_gt?: InputMaybe<Scalars['String']['input']>;
  trader_gte?: InputMaybe<Scalars['String']['input']>;
  trader_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_lt?: InputMaybe<Scalars['String']['input']>;
  trader_lte?: InputMaybe<Scalars['String']['input']>;
  trader_not?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum FuturesMarginTransfer_OrderBy {
  Id = 'id',
  Market = 'market',
  MarketAsset = 'market__asset',
  MarketId = 'market__id',
  MarketIsActive = 'market__isActive',
  MarketMarketKey = 'market__marketKey',
  MarketTimestamp = 'market__timestamp',
  Size = 'size',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TraderCreatedAt = 'trader__createdAt',
  TraderFeesPaidToSynthetix = 'trader__feesPaidToSynthetix',
  TraderId = 'trader__id',
  TraderLastTradeTimestamp = 'trader__lastTradeTimestamp',
  TraderMargin = 'trader__margin',
  TraderRealizedPnl = 'trader__realizedPnl',
  TraderTotalLiquidations = 'trader__totalLiquidations',
  TraderTotalMarginLiquidated = 'trader__totalMarginLiquidated',
  TraderTotalVolume = 'trader__totalVolume',
  TxHash = 'txHash',
}

export type FuturesMarket = {
  __typename?: 'FuturesMarket';
  asset: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  marketKey: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type FuturesMarket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FuturesMarket_Filter>>>;
  asset?: InputMaybe<Scalars['Bytes']['input']>;
  asset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  marketKey?: InputMaybe<Scalars['Bytes']['input']>;
  marketKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
  marketKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
  marketKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
  marketKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  marketKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
  marketKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
  marketKey_not?: InputMaybe<Scalars['Bytes']['input']>;
  marketKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  marketKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FuturesMarket_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum FuturesMarket_OrderBy {
  Asset = 'asset',
  Id = 'id',
  IsActive = 'isActive',
  MarketKey = 'marketKey',
  Timestamp = 'timestamp',
}

export type FuturesOrder = {
  __typename?: 'FuturesOrder';
  fee: Scalars['BigInt']['output'];
  futuresPosition?: Maybe<FuturesPosition>;
  id: Scalars['ID']['output'];
  keeper: Scalars['Bytes']['output'];
  marginDelta: Scalars['BigInt']['output'];
  market: FuturesMarket;
  orderId: Scalars['BigInt']['output'];
  orderType: FuturesOrderType;
  size: Scalars['BigInt']['output'];
  status: FuturesOrderStatus;
  targetPrice: Scalars['BigInt']['output'];
  targetRoundId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  trader: Trader;
  txHash: Scalars['String']['output'];
};

export enum FuturesOrderStatus {
  Cancelled = 'Cancelled',
  Filled = 'Filled',
  Pending = 'Pending',
}

export enum FuturesOrderType {
  DelayedOffchainSubmitted = 'DelayedOffchainSubmitted',
  DelayedOrderSubmitted = 'DelayedOrderSubmitted',
  NextPriceOrderRemoved = 'NextPriceOrderRemoved',
  NextPriceOrderSubmitted = 'NextPriceOrderSubmitted',
}

export type FuturesOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FuturesOrder_Filter>>>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  futuresPosition?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_?: InputMaybe<FuturesPosition_Filter>;
  futuresPosition_contains?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_ends_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_gt?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_gte?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_in?: InputMaybe<Array<Scalars['String']['input']>>;
  futuresPosition_lt?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_lte?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  futuresPosition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_starts_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  keeper?: InputMaybe<Scalars['Bytes']['input']>;
  keeper_contains?: InputMaybe<Scalars['Bytes']['input']>;
  keeper_gt?: InputMaybe<Scalars['Bytes']['input']>;
  keeper_gte?: InputMaybe<Scalars['Bytes']['input']>;
  keeper_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  keeper_lt?: InputMaybe<Scalars['Bytes']['input']>;
  keeper_lte?: InputMaybe<Scalars['Bytes']['input']>;
  keeper_not?: InputMaybe<Scalars['Bytes']['input']>;
  keeper_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  keeper_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  marginDelta?: InputMaybe<Scalars['BigInt']['input']>;
  marginDelta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marginDelta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marginDelta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marginDelta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marginDelta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marginDelta_not?: InputMaybe<Scalars['BigInt']['input']>;
  marginDelta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<FuturesMarket_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<FuturesOrder_Filter>>>;
  orderId?: InputMaybe<Scalars['BigInt']['input']>;
  orderId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  orderId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  orderId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  orderId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  orderId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  orderId_not?: InputMaybe<Scalars['BigInt']['input']>;
  orderId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  orderType?: InputMaybe<FuturesOrderType>;
  orderType_in?: InputMaybe<Array<FuturesOrderType>>;
  orderType_not?: InputMaybe<FuturesOrderType>;
  orderType_not_in?: InputMaybe<Array<FuturesOrderType>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<FuturesOrderStatus>;
  status_in?: InputMaybe<Array<FuturesOrderStatus>>;
  status_not?: InputMaybe<FuturesOrderStatus>;
  status_not_in?: InputMaybe<Array<FuturesOrderStatus>>;
  targetPrice?: InputMaybe<Scalars['BigInt']['input']>;
  targetPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  targetPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  targetPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  targetPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  targetPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  targetPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetRoundId?: InputMaybe<Scalars['BigInt']['input']>;
  targetRoundId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  targetRoundId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  targetRoundId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetRoundId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  targetRoundId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  targetRoundId_not?: InputMaybe<Scalars['BigInt']['input']>;
  targetRoundId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trader?: InputMaybe<Scalars['String']['input']>;
  trader_?: InputMaybe<Trader_Filter>;
  trader_contains?: InputMaybe<Scalars['String']['input']>;
  trader_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_gt?: InputMaybe<Scalars['String']['input']>;
  trader_gte?: InputMaybe<Scalars['String']['input']>;
  trader_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_lt?: InputMaybe<Scalars['String']['input']>;
  trader_lte?: InputMaybe<Scalars['String']['input']>;
  trader_not?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum FuturesOrder_OrderBy {
  Fee = 'fee',
  FuturesPosition = 'futuresPosition',
  FuturesPositionAvgEntryPrice = 'futuresPosition__avgEntryPrice',
  FuturesPositionCloseTimestamp = 'futuresPosition__closeTimestamp',
  FuturesPositionEntryPrice = 'futuresPosition__entryPrice',
  FuturesPositionExitPrice = 'futuresPosition__exitPrice',
  FuturesPositionFeesPaidToSynthetix = 'futuresPosition__feesPaidToSynthetix',
  FuturesPositionFundingIndex = 'futuresPosition__fundingIndex',
  FuturesPositionId = 'futuresPosition__id',
  FuturesPositionInitialMargin = 'futuresPosition__initialMargin',
  FuturesPositionIsLiquidated = 'futuresPosition__isLiquidated',
  FuturesPositionIsOpen = 'futuresPosition__isOpen',
  FuturesPositionLastPrice = 'futuresPosition__lastPrice',
  FuturesPositionLeverage = 'futuresPosition__leverage',
  FuturesPositionLong = 'futuresPosition__long',
  FuturesPositionMargin = 'futuresPosition__margin',
  FuturesPositionNetFunding = 'futuresPosition__netFunding',
  FuturesPositionNetTransfers = 'futuresPosition__netTransfers',
  FuturesPositionOpenTimestamp = 'futuresPosition__openTimestamp',
  FuturesPositionRealizedPnl = 'futuresPosition__realizedPnl',
  FuturesPositionSize = 'futuresPosition__size',
  FuturesPositionSkew = 'futuresPosition__skew',
  FuturesPositionTotalVolume = 'futuresPosition__totalVolume',
  FuturesPositionTrades = 'futuresPosition__trades',
  FuturesPositionTxHash = 'futuresPosition__txHash',
  FuturesPositionUnrealizedPnl = 'futuresPosition__unrealizedPnl',
  Id = 'id',
  Keeper = 'keeper',
  MarginDelta = 'marginDelta',
  Market = 'market',
  MarketAsset = 'market__asset',
  MarketId = 'market__id',
  MarketIsActive = 'market__isActive',
  MarketMarketKey = 'market__marketKey',
  MarketTimestamp = 'market__timestamp',
  OrderId = 'orderId',
  OrderType = 'orderType',
  Size = 'size',
  Status = 'status',
  TargetPrice = 'targetPrice',
  TargetRoundId = 'targetRoundId',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TraderCreatedAt = 'trader__createdAt',
  TraderFeesPaidToSynthetix = 'trader__feesPaidToSynthetix',
  TraderId = 'trader__id',
  TraderLastTradeTimestamp = 'trader__lastTradeTimestamp',
  TraderMargin = 'trader__margin',
  TraderRealizedPnl = 'trader__realizedPnl',
  TraderTotalLiquidations = 'trader__totalLiquidations',
  TraderTotalMarginLiquidated = 'trader__totalMarginLiquidated',
  TraderTotalVolume = 'trader__totalVolume',
  TxHash = 'txHash',
}

export type FuturesPosition = {
  __typename?: 'FuturesPosition';
  avgEntryPrice: Scalars['BigInt']['output'];
  closeTimestamp?: Maybe<Scalars['BigInt']['output']>;
  entryPrice: Scalars['BigInt']['output'];
  exitPrice?: Maybe<Scalars['BigInt']['output']>;
  feesPaidToSynthetix: Scalars['BigInt']['output'];
  fundingIndex: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  initialMargin: Scalars['BigInt']['output'];
  isLiquidated: Scalars['Boolean']['output'];
  isOpen: Scalars['Boolean']['output'];
  lastPrice: Scalars['BigInt']['output'];
  leverage: Scalars['BigInt']['output'];
  long: Scalars['Boolean']['output'];
  margin: Scalars['BigInt']['output'];
  market: FuturesMarket;
  netFunding: Scalars['BigInt']['output'];
  netTransfers: Scalars['BigInt']['output'];
  openTimestamp: Scalars['BigInt']['output'];
  realizedPnl: Scalars['BigInt']['output'];
  size: Scalars['BigInt']['output'];
  skew?: Maybe<Scalars['BigInt']['output']>;
  totalVolume: Scalars['BigInt']['output'];
  trader: Trader;
  trades: Scalars['BigInt']['output'];
  txHash: Scalars['String']['output'];
  unrealizedPnl: Scalars['BigInt']['output'];
};

export type FuturesPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FuturesPosition_Filter>>>;
  avgEntryPrice?: InputMaybe<Scalars['BigInt']['input']>;
  avgEntryPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  avgEntryPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  avgEntryPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  avgEntryPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  avgEntryPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  avgEntryPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  avgEntryPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  feesPaidToSynthetix?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesPaidToSynthetix_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_not?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingIndex?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  initialMargin?: InputMaybe<Scalars['BigInt']['input']>;
  initialMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isLiquidated?: InputMaybe<Scalars['Boolean']['input']>;
  isLiquidated_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isLiquidated_not?: InputMaybe<Scalars['Boolean']['input']>;
  isLiquidated_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isOpen_not?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lastPrice?: InputMaybe<Scalars['BigInt']['input']>;
  lastPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  leverage?: InputMaybe<Scalars['BigInt']['input']>;
  leverage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  leverage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  leverage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  leverage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  leverage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  leverage_not?: InputMaybe<Scalars['BigInt']['input']>;
  leverage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  long?: InputMaybe<Scalars['Boolean']['input']>;
  long_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  long_not?: InputMaybe<Scalars['Boolean']['input']>;
  long_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  margin?: InputMaybe<Scalars['BigInt']['input']>;
  margin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  margin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  margin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  margin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  margin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  margin_not?: InputMaybe<Scalars['BigInt']['input']>;
  margin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<FuturesMarket_Filter>;
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
  netFunding?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netTransfers?: InputMaybe<Scalars['BigInt']['input']>;
  netTransfers_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netTransfers_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netTransfers_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netTransfers_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netTransfers_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netTransfers_not?: InputMaybe<Scalars['BigInt']['input']>;
  netTransfers_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FuturesPosition_Filter>>>;
  realizedPnl?: InputMaybe<Scalars['BigInt']['input']>;
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
  skew?: InputMaybe<Scalars['BigInt']['input']>;
  skew_gt?: InputMaybe<Scalars['BigInt']['input']>;
  skew_gte?: InputMaybe<Scalars['BigInt']['input']>;
  skew_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  skew_lt?: InputMaybe<Scalars['BigInt']['input']>;
  skew_lte?: InputMaybe<Scalars['BigInt']['input']>;
  skew_not?: InputMaybe<Scalars['BigInt']['input']>;
  skew_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trader?: InputMaybe<Scalars['String']['input']>;
  trader_?: InputMaybe<Trader_Filter>;
  trader_contains?: InputMaybe<Scalars['String']['input']>;
  trader_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_gt?: InputMaybe<Scalars['String']['input']>;
  trader_gte?: InputMaybe<Scalars['String']['input']>;
  trader_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_lt?: InputMaybe<Scalars['String']['input']>;
  trader_lte?: InputMaybe<Scalars['String']['input']>;
  trader_not?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trades?: InputMaybe<Scalars['BigInt']['input']>;
  trades_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trades_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trades_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trades_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trades_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trades_not?: InputMaybe<Scalars['BigInt']['input']>;
  trades_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unrealizedPnl?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unrealizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum FuturesPosition_OrderBy {
  AvgEntryPrice = 'avgEntryPrice',
  CloseTimestamp = 'closeTimestamp',
  EntryPrice = 'entryPrice',
  ExitPrice = 'exitPrice',
  FeesPaidToSynthetix = 'feesPaidToSynthetix',
  FundingIndex = 'fundingIndex',
  Id = 'id',
  InitialMargin = 'initialMargin',
  IsLiquidated = 'isLiquidated',
  IsOpen = 'isOpen',
  LastPrice = 'lastPrice',
  Leverage = 'leverage',
  Long = 'long',
  Margin = 'margin',
  Market = 'market',
  MarketAsset = 'market__asset',
  MarketId = 'market__id',
  MarketIsActive = 'market__isActive',
  MarketMarketKey = 'market__marketKey',
  MarketTimestamp = 'market__timestamp',
  NetFunding = 'netFunding',
  NetTransfers = 'netTransfers',
  OpenTimestamp = 'openTimestamp',
  RealizedPnl = 'realizedPnl',
  Size = 'size',
  Skew = 'skew',
  TotalVolume = 'totalVolume',
  Trader = 'trader',
  TraderCreatedAt = 'trader__createdAt',
  TraderFeesPaidToSynthetix = 'trader__feesPaidToSynthetix',
  TraderId = 'trader__id',
  TraderLastTradeTimestamp = 'trader__lastTradeTimestamp',
  TraderMargin = 'trader__margin',
  TraderRealizedPnl = 'trader__realizedPnl',
  TraderTotalLiquidations = 'trader__totalLiquidations',
  TraderTotalMarginLiquidated = 'trader__totalMarginLiquidated',
  TraderTotalVolume = 'trader__totalVolume',
  Trades = 'trades',
  TxHash = 'txHash',
  UnrealizedPnl = 'unrealizedPnl',
}

export type FuturesTrade = {
  __typename?: 'FuturesTrade';
  feesPaidToSynthetix: Scalars['BigInt']['output'];
  futuresOrder?: Maybe<FuturesOrder>;
  futuresPosition: FuturesPosition;
  id: Scalars['ID']['output'];
  margin: Scalars['BigInt']['output'];
  market: FuturesMarket;
  marketOrder: Scalars['Boolean']['output'];
  netFunding: Scalars['BigInt']['output'];
  positionClosed: Scalars['Boolean']['output'];
  positionSize: Scalars['BigInt']['output'];
  price: Scalars['BigInt']['output'];
  realizedPnl: Scalars['BigInt']['output'];
  size: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  trader: Trader;
  txHash: Scalars['String']['output'];
  type: FuturesTradeType;
};

export enum FuturesTradeType {
  Liquidated = 'Liquidated',
  PositionClosed = 'PositionClosed',
  PositionModified = 'PositionModified',
  PositionOpened = 'PositionOpened',
}

export type FuturesTrade_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FuturesTrade_Filter>>>;
  feesPaidToSynthetix?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesPaidToSynthetix_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_not?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  futuresOrder?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_?: InputMaybe<FuturesOrder_Filter>;
  futuresOrder_contains?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_ends_with?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_gt?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_gte?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  futuresOrder_lt?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_lte?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_not?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_not_contains?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  futuresOrder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_starts_with?: InputMaybe<Scalars['String']['input']>;
  futuresOrder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_?: InputMaybe<FuturesPosition_Filter>;
  futuresPosition_contains?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_ends_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_gt?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_gte?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_in?: InputMaybe<Array<Scalars['String']['input']>>;
  futuresPosition_lt?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_lte?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  futuresPosition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_starts_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  margin?: InputMaybe<Scalars['BigInt']['input']>;
  margin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  margin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  margin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  margin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  margin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  margin_not?: InputMaybe<Scalars['BigInt']['input']>;
  margin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  marketOrder?: InputMaybe<Scalars['Boolean']['input']>;
  marketOrder_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  marketOrder_not?: InputMaybe<Scalars['Boolean']['input']>;
  marketOrder_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  market_?: InputMaybe<FuturesMarket_Filter>;
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
  netFunding?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  netFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FuturesTrade_Filter>>>;
  positionClosed?: InputMaybe<Scalars['Boolean']['input']>;
  positionClosed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  positionClosed_not?: InputMaybe<Scalars['Boolean']['input']>;
  positionClosed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  positionSize?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl?: InputMaybe<Scalars['BigInt']['input']>;
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
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trader?: InputMaybe<Scalars['String']['input']>;
  trader_?: InputMaybe<Trader_Filter>;
  trader_contains?: InputMaybe<Scalars['String']['input']>;
  trader_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_gt?: InputMaybe<Scalars['String']['input']>;
  trader_gte?: InputMaybe<Scalars['String']['input']>;
  trader_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_lt?: InputMaybe<Scalars['String']['input']>;
  trader_lte?: InputMaybe<Scalars['String']['input']>;
  trader_not?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FuturesTradeType>;
  type_in?: InputMaybe<Array<FuturesTradeType>>;
  type_not?: InputMaybe<FuturesTradeType>;
  type_not_in?: InputMaybe<Array<FuturesTradeType>>;
};

export enum FuturesTrade_OrderBy {
  FeesPaidToSynthetix = 'feesPaidToSynthetix',
  FuturesOrder = 'futuresOrder',
  FuturesOrderFee = 'futuresOrder__fee',
  FuturesOrderId = 'futuresOrder__id',
  FuturesOrderKeeper = 'futuresOrder__keeper',
  FuturesOrderMarginDelta = 'futuresOrder__marginDelta',
  FuturesOrderOrderId = 'futuresOrder__orderId',
  FuturesOrderOrderType = 'futuresOrder__orderType',
  FuturesOrderSize = 'futuresOrder__size',
  FuturesOrderStatus = 'futuresOrder__status',
  FuturesOrderTargetPrice = 'futuresOrder__targetPrice',
  FuturesOrderTargetRoundId = 'futuresOrder__targetRoundId',
  FuturesOrderTimestamp = 'futuresOrder__timestamp',
  FuturesOrderTxHash = 'futuresOrder__txHash',
  FuturesPosition = 'futuresPosition',
  FuturesPositionAvgEntryPrice = 'futuresPosition__avgEntryPrice',
  FuturesPositionCloseTimestamp = 'futuresPosition__closeTimestamp',
  FuturesPositionEntryPrice = 'futuresPosition__entryPrice',
  FuturesPositionExitPrice = 'futuresPosition__exitPrice',
  FuturesPositionFeesPaidToSynthetix = 'futuresPosition__feesPaidToSynthetix',
  FuturesPositionFundingIndex = 'futuresPosition__fundingIndex',
  FuturesPositionId = 'futuresPosition__id',
  FuturesPositionInitialMargin = 'futuresPosition__initialMargin',
  FuturesPositionIsLiquidated = 'futuresPosition__isLiquidated',
  FuturesPositionIsOpen = 'futuresPosition__isOpen',
  FuturesPositionLastPrice = 'futuresPosition__lastPrice',
  FuturesPositionLeverage = 'futuresPosition__leverage',
  FuturesPositionLong = 'futuresPosition__long',
  FuturesPositionMargin = 'futuresPosition__margin',
  FuturesPositionNetFunding = 'futuresPosition__netFunding',
  FuturesPositionNetTransfers = 'futuresPosition__netTransfers',
  FuturesPositionOpenTimestamp = 'futuresPosition__openTimestamp',
  FuturesPositionRealizedPnl = 'futuresPosition__realizedPnl',
  FuturesPositionSize = 'futuresPosition__size',
  FuturesPositionSkew = 'futuresPosition__skew',
  FuturesPositionTotalVolume = 'futuresPosition__totalVolume',
  FuturesPositionTrades = 'futuresPosition__trades',
  FuturesPositionTxHash = 'futuresPosition__txHash',
  FuturesPositionUnrealizedPnl = 'futuresPosition__unrealizedPnl',
  Id = 'id',
  Margin = 'margin',
  Market = 'market',
  MarketOrder = 'marketOrder',
  MarketAsset = 'market__asset',
  MarketId = 'market__id',
  MarketIsActive = 'market__isActive',
  MarketMarketKey = 'market__marketKey',
  MarketTimestamp = 'market__timestamp',
  NetFunding = 'netFunding',
  PositionClosed = 'positionClosed',
  PositionSize = 'positionSize',
  Price = 'price',
  RealizedPnl = 'realizedPnl',
  Size = 'size',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TraderCreatedAt = 'trader__createdAt',
  TraderFeesPaidToSynthetix = 'trader__feesPaidToSynthetix',
  TraderId = 'trader__id',
  TraderLastTradeTimestamp = 'trader__lastTradeTimestamp',
  TraderMargin = 'trader__margin',
  TraderRealizedPnl = 'trader__realizedPnl',
  TraderTotalLiquidations = 'trader__totalLiquidations',
  TraderTotalMarginLiquidated = 'trader__totalMarginLiquidated',
  TraderTotalVolume = 'trader__totalVolume',
  TxHash = 'txHash',
  Type = 'type',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type PositionFlagged = {
  __typename?: 'PositionFlagged';
  flagger: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  trader: Trader;
};

export type PositionFlagged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionFlagged_Filter>>>;
  flagger?: InputMaybe<Scalars['Bytes']['input']>;
  flagger_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flagger_gt?: InputMaybe<Scalars['Bytes']['input']>;
  flagger_gte?: InputMaybe<Scalars['Bytes']['input']>;
  flagger_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flagger_lt?: InputMaybe<Scalars['Bytes']['input']>;
  flagger_lte?: InputMaybe<Scalars['Bytes']['input']>;
  flagger_not?: InputMaybe<Scalars['Bytes']['input']>;
  flagger_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flagger_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PositionFlagged_Filter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trader?: InputMaybe<Scalars['String']['input']>;
  trader_?: InputMaybe<Trader_Filter>;
  trader_contains?: InputMaybe<Scalars['String']['input']>;
  trader_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_gt?: InputMaybe<Scalars['String']['input']>;
  trader_gte?: InputMaybe<Scalars['String']['input']>;
  trader_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_lt?: InputMaybe<Scalars['String']['input']>;
  trader_lte?: InputMaybe<Scalars['String']['input']>;
  trader_not?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PositionFlagged_OrderBy {
  Flagger = 'flagger',
  Id = 'id',
  Price = 'price',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TraderCreatedAt = 'trader__createdAt',
  TraderFeesPaidToSynthetix = 'trader__feesPaidToSynthetix',
  TraderId = 'trader__id',
  TraderLastTradeTimestamp = 'trader__lastTradeTimestamp',
  TraderMargin = 'trader__margin',
  TraderRealizedPnl = 'trader__realizedPnl',
  TraderTotalLiquidations = 'trader__totalLiquidations',
  TraderTotalMarginLiquidated = 'trader__totalMarginLiquidated',
  TraderTotalVolume = 'trader__totalVolume',
}

export type PositionLiquidated = {
  __typename?: 'PositionLiquidated';
  fee: Scalars['BigInt']['output'];
  futuresPosition: FuturesPosition;
  id: Scalars['ID']['output'];
  liquidator: Scalars['Bytes']['output'];
  market: FuturesMarket;
  price: Scalars['BigInt']['output'];
  size: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  trader: Trader;
  txHash: Scalars['String']['output'];
};

export type PositionLiquidated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionLiquidated_Filter>>>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  futuresPosition?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_?: InputMaybe<FuturesPosition_Filter>;
  futuresPosition_contains?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_ends_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_gt?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_gte?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_in?: InputMaybe<Array<Scalars['String']['input']>>;
  futuresPosition_lt?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_lte?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  futuresPosition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_starts_with?: InputMaybe<Scalars['String']['input']>;
  futuresPosition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidator?: InputMaybe<Scalars['Bytes']['input']>;
  liquidator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  liquidator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidator_not?: InputMaybe<Scalars['Bytes']['input']>;
  liquidator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<FuturesMarket_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<PositionLiquidated_Filter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  trader?: InputMaybe<Scalars['String']['input']>;
  trader_?: InputMaybe<Trader_Filter>;
  trader_contains?: InputMaybe<Scalars['String']['input']>;
  trader_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_gt?: InputMaybe<Scalars['String']['input']>;
  trader_gte?: InputMaybe<Scalars['String']['input']>;
  trader_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_lt?: InputMaybe<Scalars['String']['input']>;
  trader_lte?: InputMaybe<Scalars['String']['input']>;
  trader_not?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains?: InputMaybe<Scalars['String']['input']>;
  trader_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trader_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with?: InputMaybe<Scalars['String']['input']>;
  trader_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PositionLiquidated_OrderBy {
  Fee = 'fee',
  FuturesPosition = 'futuresPosition',
  FuturesPositionAvgEntryPrice = 'futuresPosition__avgEntryPrice',
  FuturesPositionCloseTimestamp = 'futuresPosition__closeTimestamp',
  FuturesPositionEntryPrice = 'futuresPosition__entryPrice',
  FuturesPositionExitPrice = 'futuresPosition__exitPrice',
  FuturesPositionFeesPaidToSynthetix = 'futuresPosition__feesPaidToSynthetix',
  FuturesPositionFundingIndex = 'futuresPosition__fundingIndex',
  FuturesPositionId = 'futuresPosition__id',
  FuturesPositionInitialMargin = 'futuresPosition__initialMargin',
  FuturesPositionIsLiquidated = 'futuresPosition__isLiquidated',
  FuturesPositionIsOpen = 'futuresPosition__isOpen',
  FuturesPositionLastPrice = 'futuresPosition__lastPrice',
  FuturesPositionLeverage = 'futuresPosition__leverage',
  FuturesPositionLong = 'futuresPosition__long',
  FuturesPositionMargin = 'futuresPosition__margin',
  FuturesPositionNetFunding = 'futuresPosition__netFunding',
  FuturesPositionNetTransfers = 'futuresPosition__netTransfers',
  FuturesPositionOpenTimestamp = 'futuresPosition__openTimestamp',
  FuturesPositionRealizedPnl = 'futuresPosition__realizedPnl',
  FuturesPositionSize = 'futuresPosition__size',
  FuturesPositionSkew = 'futuresPosition__skew',
  FuturesPositionTotalVolume = 'futuresPosition__totalVolume',
  FuturesPositionTrades = 'futuresPosition__trades',
  FuturesPositionTxHash = 'futuresPosition__txHash',
  FuturesPositionUnrealizedPnl = 'futuresPosition__unrealizedPnl',
  Id = 'id',
  Liquidator = 'liquidator',
  Market = 'market',
  MarketAsset = 'market__asset',
  MarketId = 'market__id',
  MarketIsActive = 'market__isActive',
  MarketMarketKey = 'market__marketKey',
  MarketTimestamp = 'market__timestamp',
  Price = 'price',
  Size = 'size',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TraderCreatedAt = 'trader__createdAt',
  TraderFeesPaidToSynthetix = 'trader__feesPaidToSynthetix',
  TraderId = 'trader__id',
  TraderLastTradeTimestamp = 'trader__lastTradeTimestamp',
  TraderMargin = 'trader__margin',
  TraderRealizedPnl = 'trader__realizedPnl',
  TraderTotalLiquidations = 'trader__totalLiquidations',
  TraderTotalMarginLiquidated = 'trader__totalMarginLiquidated',
  TraderTotalVolume = 'trader__totalVolume',
  TxHash = 'txHash',
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  cumulativeMarketStat?: Maybe<CumulativeMarketStat>;
  cumulativeMarketStats: Array<CumulativeMarketStat>;
  dailyMarketStat?: Maybe<DailyMarketStat>;
  dailyMarketStats: Array<DailyMarketStat>;
  dailyStat?: Maybe<DailyStat>;
  dailyStats: Array<DailyStat>;
  frontend?: Maybe<Frontend>;
  frontends: Array<Frontend>;
  fundingRateUpdate?: Maybe<FundingRateUpdate>;
  fundingRateUpdates: Array<FundingRateUpdate>;
  futuresMarginTransfer?: Maybe<FuturesMarginTransfer>;
  futuresMarginTransfers: Array<FuturesMarginTransfer>;
  futuresMarket?: Maybe<FuturesMarket>;
  futuresMarkets: Array<FuturesMarket>;
  futuresOrder?: Maybe<FuturesOrder>;
  futuresOrders: Array<FuturesOrder>;
  futuresPosition?: Maybe<FuturesPosition>;
  futuresPositions: Array<FuturesPosition>;
  futuresTrade?: Maybe<FuturesTrade>;
  futuresTrades: Array<FuturesTrade>;
  positionFlagged?: Maybe<PositionFlagged>;
  positionFlaggeds: Array<PositionFlagged>;
  positionLiquidated?: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  synthetix?: Maybe<Synthetix>;
  synthetixes: Array<Synthetix>;
  trader?: Maybe<Trader>;
  traders: Array<Trader>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryCumulativeMarketStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCumulativeMarketStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CumulativeMarketStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CumulativeMarketStat_Filter>;
};

export type QueryDailyMarketStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDailyMarketStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DailyMarketStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyMarketStat_Filter>;
};

export type QueryDailyStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDailyStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DailyStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyStat_Filter>;
};

export type QueryFrontendArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFrontendsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Frontend_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Frontend_Filter>;
};

export type QueryFundingRateUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFundingRateUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FundingRateUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingRateUpdate_Filter>;
};

export type QueryFuturesMarginTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFuturesMarginTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesMarginTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesMarginTransfer_Filter>;
};

export type QueryFuturesMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFuturesMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesMarket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesMarket_Filter>;
};

export type QueryFuturesOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFuturesOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesOrder_Filter>;
};

export type QueryFuturesPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFuturesPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesPosition_Filter>;
};

export type QueryFuturesTradeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFuturesTradesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesTrade_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesTrade_Filter>;
};

export type QueryPositionFlaggedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPositionFlaggedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionFlagged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionFlagged_Filter>;
};

export type QueryPositionLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPositionLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionLiquidated_Filter>;
};

export type QuerySynthetixArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySynthetixesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Synthetix_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Synthetix_Filter>;
};

export type QueryTraderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTradersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trader_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  cumulativeMarketStat?: Maybe<CumulativeMarketStat>;
  cumulativeMarketStats: Array<CumulativeMarketStat>;
  dailyMarketStat?: Maybe<DailyMarketStat>;
  dailyMarketStats: Array<DailyMarketStat>;
  dailyStat?: Maybe<DailyStat>;
  dailyStats: Array<DailyStat>;
  frontend?: Maybe<Frontend>;
  frontends: Array<Frontend>;
  fundingRateUpdate?: Maybe<FundingRateUpdate>;
  fundingRateUpdates: Array<FundingRateUpdate>;
  futuresMarginTransfer?: Maybe<FuturesMarginTransfer>;
  futuresMarginTransfers: Array<FuturesMarginTransfer>;
  futuresMarket?: Maybe<FuturesMarket>;
  futuresMarkets: Array<FuturesMarket>;
  futuresOrder?: Maybe<FuturesOrder>;
  futuresOrders: Array<FuturesOrder>;
  futuresPosition?: Maybe<FuturesPosition>;
  futuresPositions: Array<FuturesPosition>;
  futuresTrade?: Maybe<FuturesTrade>;
  futuresTrades: Array<FuturesTrade>;
  positionFlagged?: Maybe<PositionFlagged>;
  positionFlaggeds: Array<PositionFlagged>;
  positionLiquidated?: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  synthetix?: Maybe<Synthetix>;
  synthetixes: Array<Synthetix>;
  trader?: Maybe<Trader>;
  traders: Array<Trader>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionCumulativeMarketStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCumulativeMarketStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CumulativeMarketStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CumulativeMarketStat_Filter>;
};

export type SubscriptionDailyMarketStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDailyMarketStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DailyMarketStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyMarketStat_Filter>;
};

export type SubscriptionDailyStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDailyStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DailyStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyStat_Filter>;
};

export type SubscriptionFrontendArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFrontendsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Frontend_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Frontend_Filter>;
};

export type SubscriptionFundingRateUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFundingRateUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FundingRateUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingRateUpdate_Filter>;
};

export type SubscriptionFuturesMarginTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFuturesMarginTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesMarginTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesMarginTransfer_Filter>;
};

export type SubscriptionFuturesMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFuturesMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesMarket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesMarket_Filter>;
};

export type SubscriptionFuturesOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFuturesOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesOrder_Filter>;
};

export type SubscriptionFuturesPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFuturesPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesPosition_Filter>;
};

export type SubscriptionFuturesTradeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFuturesTradesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesTrade_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FuturesTrade_Filter>;
};

export type SubscriptionPositionFlaggedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPositionFlaggedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionFlagged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionFlagged_Filter>;
};

export type SubscriptionPositionLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPositionLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionLiquidated_Filter>;
};

export type SubscriptionSynthetixArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSynthetixesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Synthetix_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Synthetix_Filter>;
};

export type SubscriptionTraderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTradersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trader_Filter>;
};

export type Synthetix = {
  __typename?: 'Synthetix';
  feesByLiquidations: Scalars['BigInt']['output'];
  feesByPositionModifications: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  totalLiquidations: Scalars['BigInt']['output'];
  totalTraders: Scalars['BigInt']['output'];
  totalTrades: Scalars['BigInt']['output'];
  totalVolume: Scalars['BigInt']['output'];
};

export type Synthetix_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Synthetix_Filter>>>;
  feesByLiquidations?: InputMaybe<Scalars['BigInt']['input']>;
  feesByLiquidations_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feesByLiquidations_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feesByLiquidations_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesByLiquidations_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feesByLiquidations_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feesByLiquidations_not?: InputMaybe<Scalars['BigInt']['input']>;
  feesByLiquidations_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesByPositionModifications?: InputMaybe<Scalars['BigInt']['input']>;
  feesByPositionModifications_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feesByPositionModifications_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feesByPositionModifications_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesByPositionModifications_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feesByPositionModifications_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feesByPositionModifications_not?: InputMaybe<Scalars['BigInt']['input']>;
  feesByPositionModifications_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Synthetix_Filter>>>;
  totalLiquidations?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidations_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTraders?: InputMaybe<Scalars['BigInt']['input']>;
  totalTraders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTraders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTraders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTraders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTraders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTraders_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTraders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum Synthetix_OrderBy {
  FeesByLiquidations = 'feesByLiquidations',
  FeesByPositionModifications = 'feesByPositionModifications',
  Id = 'id',
  TotalLiquidations = 'totalLiquidations',
  TotalTraders = 'totalTraders',
  TotalTrades = 'totalTrades',
  TotalVolume = 'totalVolume',
}

export type Trader = {
  __typename?: 'Trader';
  createdAt: Scalars['BigInt']['output'];
  feesPaidToSynthetix: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lastTradeTimestamp?: Maybe<Scalars['BigInt']['output']>;
  margin: Scalars['BigInt']['output'];
  realizedPnl: Scalars['BigInt']['output'];
  totalLiquidations: Scalars['BigInt']['output'];
  totalMarginLiquidated: Scalars['BigInt']['output'];
  totalVolume: Scalars['BigInt']['output'];
  trades: Array<FuturesTrade>;
};

export type TraderTradesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesTrade_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FuturesTrade_Filter>;
};

export type Trader_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Trader_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesPaidToSynthetix?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesPaidToSynthetix_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_not?: InputMaybe<Scalars['BigInt']['input']>;
  feesPaidToSynthetix_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastTradeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastTradeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastTradeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  margin?: InputMaybe<Scalars['BigInt']['input']>;
  margin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  margin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  margin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  margin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  margin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  margin_not?: InputMaybe<Scalars['BigInt']['input']>;
  margin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Trader_Filter>>>;
  realizedPnl?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidations?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidations_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidations_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalMarginLiquidated?: InputMaybe<Scalars['BigInt']['input']>;
  totalMarginLiquidated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMarginLiquidated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMarginLiquidated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalMarginLiquidated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMarginLiquidated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMarginLiquidated_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalMarginLiquidated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trades?: InputMaybe<Array<Scalars['String']['input']>>;
  trades_?: InputMaybe<FuturesTrade_Filter>;
  trades_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  trades_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  trades_not?: InputMaybe<Array<Scalars['String']['input']>>;
  trades_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  trades_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum Trader_OrderBy {
  CreatedAt = 'createdAt',
  FeesPaidToSynthetix = 'feesPaidToSynthetix',
  Id = 'id',
  LastTradeTimestamp = 'lastTradeTimestamp',
  Margin = 'margin',
  RealizedPnl = 'realizedPnl',
  TotalLiquidations = 'totalLiquidations',
  TotalMarginLiquidated = 'totalMarginLiquidated',
  TotalVolume = 'totalVolume',
  Trades = 'trades',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export type FuturesMarginTransferQueryVariables = Exact<{
  where?: InputMaybe<FuturesMarginTransfer_Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesMarginTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type FuturesMarginTransferQuery = {
  __typename?: 'Query';
  futuresMarginTransfers: Array<{
    __typename?: 'FuturesMarginTransfer';
    id: string;
    timestamp: string;
    size: string;
    txHash: string;
    trader: { __typename?: 'Trader'; id: string };
    market: { __typename?: 'FuturesMarket'; asset: string };
  }>;
};

export type FuturesTradesQueryVariables = Exact<{
  where?: InputMaybe<FuturesTrade_Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesTrade_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type FuturesTradesQuery = {
  __typename?: 'Query';
  futuresTrades: Array<{
    __typename?: 'FuturesTrade';
    id: string;
    timestamp: string;
    margin: string;
    size: string;
    feesPaidToSynthetix: string;
    type: FuturesTradeType;
    realizedPnl: string;
    positionClosed: boolean;
    positionSize: string;
    price: string;
    txHash: string;
    trader: { __typename?: 'Trader'; id: string };
    market: { __typename?: 'FuturesMarket'; id: string; asset: string };
    futuresPosition: { __typename?: 'FuturesPosition'; id: string };
  }>;
};

export type TradesQueryQueryVariables = Exact<{
  where?: InputMaybe<FuturesTrade_Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesTrade_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type TradesQueryQuery = {
  __typename?: 'Query';
  futuresTrades: Array<{ __typename?: 'FuturesTrade'; id: string; timestamp: string }>;
};

export type LiquidatedQueryQueryVariables = Exact<{
  where?: InputMaybe<PositionLiquidated_Filter>;
  orderBy?: InputMaybe<PositionLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type LiquidatedQueryQuery = {
  __typename?: 'Query';
  positionLiquidateds: Array<{
    __typename?: 'PositionLiquidated';
    id: string;
    size: string;
    trader: { __typename?: 'Trader'; id: string };
    market: { __typename?: 'FuturesMarket'; asset: string };
    futuresPosition: { __typename?: 'FuturesPosition'; margin: string };
  }>;
};

export type StatsQueryQueryVariables = Exact<{
  where?: InputMaybe<DailyStat_Filter>;
  orderBy?: InputMaybe<DailyStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;

export type StatsQueryQuery = {
  __typename?: 'Query';
  dailyStats: Array<{
    __typename?: 'DailyStat';
    id: string;
    timestamp: string;
    cumulativeVolume: string;
    volume: string;
    fees: string;
    cumulativeFees: string;
    day: string;
    existingTraders: string;
    newTraders: string;
    cumulativeTraders: string;
    cumulativeTrades: string;
    trades: string;
  }>;
};

export type MarketsQueryQueryVariables = Exact<{
  where?: InputMaybe<DailyMarketStat_Filter>;
  orderBy?: InputMaybe<DailyMarketStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;

export type MarketsQueryQuery = {
  __typename?: 'Query';
  dailyMarketStats: Array<{
    __typename?: 'DailyMarketStat';
    id: string;
    day: string;
    volume: string;
    market: {
      __typename?: 'FuturesMarket';
      id: string;
      marketKey: string;
      asset: string;
      isActive: boolean;
      timestamp: string;
    };
  }>;
};

export type MarketsIdQueryQueryVariables = Exact<{ [key: string]: never }>;

export type MarketsIdQueryQuery = {
  __typename?: 'Query';
  futuresMarkets: Array<{ __typename?: 'FuturesMarket'; id: string; marketKey: string }>;
};

export type PositionsLiquidatedQueryVariables = Exact<{
  where?: InputMaybe<PositionLiquidated_Filter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type PositionsLiquidatedQuery = {
  __typename?: 'Query';
  positionLiquidateds: Array<{
    __typename?: 'PositionLiquidated';
    id: string;
    timestamp: string;
    txHash: string;
    size: string;
    price: string;
    fee: string;
    liquidator: string;
    futuresPosition: { __typename?: 'FuturesPosition'; leverage: string };
    market: { __typename?: 'FuturesMarket'; asset: string };
    trader: { __typename?: 'Trader'; id: string; totalLiquidations: string };
  }>;
};

export type PositionsMarketQueryVariables = Exact<{
  where?: InputMaybe<FuturesPosition_Filter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type PositionsMarketQuery = {
  __typename?: 'Query';
  futuresPositions: Array<{
    __typename?: 'FuturesPosition';
    isOpen: boolean;
    entryPrice: string;
    avgEntryPrice: string;
    leverage: string;
    feesPaidToSynthetix: string;
    id: string;
    realizedPnl: string;
    unrealizedPnl: string;
    exitPrice?: string | null;
    lastPrice: string;
    netFunding: string;
    long: boolean;
    size: string;
    isLiquidated: boolean;
    openTimestamp: string;
    closeTimestamp?: string | null;
    trades: string;
    txHash: string;
    market: { __typename?: 'FuturesMarket'; id: string; marketKey: string; asset: string };
    trader: { __typename?: 'Trader'; id: string };
  }>;
};

export type SynthetixQueryVariables = Exact<{ [key: string]: never }>;

export type SynthetixQuery = {
  __typename?: 'Query';
  synthetix?: {
    __typename?: 'Synthetix';
    feesByLiquidations: string;
    feesByPositionModifications: string;
    totalVolume: string;
    totalLiquidations: string;
    totalTraders: string;
  } | null;
};

export type TradersDataQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type TradersDataQuery = {
  __typename?: 'Query';
  traders: Array<{
    __typename?: 'Trader';
    feesPaidToSynthetix: string;
    id: string;
    lastTradeTimestamp?: string | null;
    margin: string;
    realizedPnl: string;
    totalLiquidations: string;
    totalMarginLiquidated: string;
    totalVolume: string;
  }>;
};

export type TraderDataPnlQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type TraderDataPnlQuery = {
  __typename?: 'Query';
  trader?: {
    __typename?: 'Trader';
    feesPaidToSynthetix: string;
    id: string;
    lastTradeTimestamp?: string | null;
    margin: string;
    realizedPnl: string;
    totalLiquidations: string;
    totalMarginLiquidated: string;
    totalVolume: string;
  } | null;
};

export type FuturesQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;

export type FuturesQueryQuery = {
  __typename?: 'Query';
  futuresPositions: Array<{
    __typename?: 'FuturesPosition';
    avgEntryPrice: string;
    id: string;
    fundingIndex: string;
    feesPaidToSynthetix: string;
    exitPrice?: string | null;
    entryPrice: string;
    closeTimestamp?: string | null;
    initialMargin: string;
    isLiquidated: boolean;
    isOpen: boolean;
    lastPrice: string;
    leverage: string;
    long: boolean;
    margin: string;
    netFunding: string;
    netTransfers: string;
    openTimestamp: string;
    realizedPnl: string;
    size: string;
    skew?: string | null;
    totalVolume: string;
    trades: string;
    txHash: string;
    unrealizedPnl: string;
    market: { __typename?: 'FuturesMarket'; id: string; marketKey: string; asset: string };
  }>;
};

export type TraderPositionsMarketQueryVariables = Exact<{
  where?: InputMaybe<FuturesPosition_Filter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FuturesPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type TraderPositionsMarketQuery = {
  __typename?: 'Query';
  futuresPositions: Array<{
    __typename?: 'FuturesPosition';
    isOpen: boolean;
    entryPrice: string;
    avgEntryPrice: string;
    leverage: string;
    feesPaidToSynthetix: string;
    id: string;
    realizedPnl: string;
    unrealizedPnl: string;
    exitPrice?: string | null;
    lastPrice: string;
    netFunding: string;
    long: boolean;
    size: string;
    isLiquidated: boolean;
    openTimestamp: string;
    closeTimestamp?: string | null;
    trades: string;
    txHash: string;
    market: { __typename?: 'FuturesMarket'; id: string; marketKey: string; asset: string };
    trader: { __typename?: 'Trader'; id: string };
  }>;
};

export const FuturesMarginTransferDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FuturesMarginTransfer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'FuturesMarginTransfer_filter' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'FuturesMarginTransfer_orderBy' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderDirection' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'futuresMarginTransfers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trader' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'market' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'asset' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FuturesMarginTransferQuery, FuturesMarginTransferQueryVariables>;
export const FuturesTradesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FuturesTrades' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FuturesTrade_filter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FuturesTrade_orderBy' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderDirection' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'futuresTrades' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trader' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'margin' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'market' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'asset' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'futuresPosition' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesPaidToSynthetix' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'realizedPnl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'positionClosed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'positionSize' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FuturesTradesQuery, FuturesTradesQueryVariables>;
export const TradesQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'TradesQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FuturesTrade_filter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FuturesTrade_orderBy' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderDirection' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'futuresTrades' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TradesQueryQuery, TradesQueryQueryVariables>;
export const LiquidatedQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'LiquidatedQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'PositionLiquidated_filter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'PositionLiquidated_orderBy' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderDirection' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'positionLiquidateds' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trader' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'market' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'asset' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'futuresPosition' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'margin' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LiquidatedQueryQuery, LiquidatedQueryQueryVariables>;
export const StatsQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'StatsQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'DailyStat_filter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'DailyStat_orderBy' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderDirection' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dailyStats' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cumulativeVolume' } },
                { kind: 'Field', name: { kind: 'Name', value: 'volume' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fees' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cumulativeFees' } },
                { kind: 'Field', name: { kind: 'Name', value: 'day' } },
                { kind: 'Field', name: { kind: 'Name', value: 'existingTraders' } },
                { kind: 'Field', name: { kind: 'Name', value: 'newTraders' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cumulativeTraders' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cumulativeTrades' } },
                { kind: 'Field', name: { kind: 'Name', value: 'trades' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StatsQueryQuery, StatsQueryQueryVariables>;
export const MarketsQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MarketsQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'DailyMarketStat_filter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'DailyMarketStat_orderBy' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderDirection' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dailyMarketStats' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'day' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'market' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'marketKey' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'asset' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'volume' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarketsQueryQuery, MarketsQueryQueryVariables>;
export const MarketsIdQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MarketsIdQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'futuresMarkets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'marketKey' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarketsIdQueryQuery, MarketsIdQueryQueryVariables>;
export const PositionsLiquidatedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PositionsLiquidated' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'PositionLiquidated_filter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'PositionLiquidated_orderBy' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderDirection' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'positionLiquidateds' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'futuresPosition' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'leverage' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'market' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'asset' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'fee' } },
                { kind: 'Field', name: { kind: 'Name', value: 'liquidator' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trader' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'totalLiquidations' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PositionsLiquidatedQuery, PositionsLiquidatedQueryVariables>;
export const PositionsMarketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PositionsMarket' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FuturesPosition_filter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FuturesPosition_orderBy' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderDirection' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'futuresPositions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'market' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'marketKey' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'asset' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trader' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'isOpen' } },
                { kind: 'Field', name: { kind: 'Name', value: 'entryPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avgEntryPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'leverage' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesPaidToSynthetix' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'realizedPnl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'unrealizedPnl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesPaidToSynthetix' } },
                { kind: 'Field', name: { kind: 'Name', value: 'exitPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'netFunding' } },
                { kind: 'Field', name: { kind: 'Name', value: 'long' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isLiquidated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'openTimestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'closeTimestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'trades' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PositionsMarketQuery, PositionsMarketQueryVariables>;
export const SynthetixDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Synthetix' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'synthetix' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'StringValue', value: 'synthetix', block: false },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'feesByLiquidations' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesByPositionModifications' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalVolume' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalLiquidations' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalTraders' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SynthetixQuery, SynthetixQueryVariables>;
export const TradersDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'TradersData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'traders' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'feesPaidToSynthetix' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastTradeTimestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'margin' } },
                { kind: 'Field', name: { kind: 'Name', value: 'realizedPnl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalLiquidations' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalMarginLiquidated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalVolume' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TradersDataQuery, TradersDataQueryVariables>;
export const TraderDataPnlDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'TraderDataPNL' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'trader' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'feesPaidToSynthetix' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastTradeTimestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'margin' } },
                { kind: 'Field', name: { kind: 'Name', value: 'realizedPnl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalLiquidations' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalMarginLiquidated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalVolume' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TraderDataPnlQuery, TraderDataPnlQueryVariables>;
export const FuturesQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FuturesQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'futuresPositions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'trader_' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'id' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'closeTimestamp' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'EnumValue', value: 'desc' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'avgEntryPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fundingIndex' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesPaidToSynthetix' } },
                { kind: 'Field', name: { kind: 'Name', value: 'exitPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'entryPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'closeTimestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'initialMargin' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isLiquidated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isOpen' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'leverage' } },
                { kind: 'Field', name: { kind: 'Name', value: 'long' } },
                { kind: 'Field', name: { kind: 'Name', value: 'margin' } },
                { kind: 'Field', name: { kind: 'Name', value: 'netFunding' } },
                { kind: 'Field', name: { kind: 'Name', value: 'netTransfers' } },
                { kind: 'Field', name: { kind: 'Name', value: 'openTimestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'realizedPnl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'skew' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalVolume' } },
                { kind: 'Field', name: { kind: 'Name', value: 'trades' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'unrealizedPnl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'market' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'marketKey' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'asset' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FuturesQueryQuery, FuturesQueryQueryVariables>;
export const TraderPositionsMarketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'TraderPositionsMarket' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FuturesPosition_filter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FuturesPosition_orderBy' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderDirection' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'futuresPositions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'market' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'marketKey' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'asset' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trader' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'isOpen' } },
                { kind: 'Field', name: { kind: 'Name', value: 'entryPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avgEntryPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'leverage' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesPaidToSynthetix' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'realizedPnl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'unrealizedPnl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesPaidToSynthetix' } },
                { kind: 'Field', name: { kind: 'Name', value: 'exitPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastPrice' } },
                { kind: 'Field', name: { kind: 'Name', value: 'netFunding' } },
                { kind: 'Field', name: { kind: 'Name', value: 'long' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isLiquidated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'openTimestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'closeTimestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'trades' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TraderPositionsMarketQuery, TraderPositionsMarketQueryVariables>;
