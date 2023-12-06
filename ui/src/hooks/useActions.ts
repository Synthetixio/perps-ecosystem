import { useQuery } from '@apollo/client';
import type Wei from '@synthetixio/wei';
import { wei } from '@synthetixio/wei';
import { useSearchParams } from 'react-router-dom';
import { FUTURES_TRADE_QUERY, MARGIN_TRANSFERRED_QUERY } from '../queries/actions';
import {
  type FuturesMarginTransferQuery,
  FuturesMarginTransfer_OrderBy,
  type FuturesTradesQuery,
  FuturesTrade_OrderBy,
  OrderDirection,
} from '../__generated__/graphql';
import { useMarketSummaries } from './useMarketSummaries';

const isLongTrade = (size: number) => size > 0;
const isShortTrade = (size: number) => !isLongTrade(size);
const positionIsLong = (positionSize: number) => positionSize > 0;
const positionIsShort = (positionSize: number) => !positionIsLong(positionSize);

const getTradeLabelForPositionModified = (size: number, positionSize: number) => {
  if (size === 0) {
    return 'Unexpected Action';
  }

  const sizeBeforeTrade = positionSize - size;
  const positionBeforeTradeWasShort = sizeBeforeTrade < 0;
  const positionBeforeTradeWasLong = !positionBeforeTradeWasShort;

  if (isLongTrade(size)) {
    if (positionBeforeTradeWasShort) {
      return positionIsLong(positionSize) ? 'Short Flipped To Long' : 'Short Decreased';
    }
    if (positionBeforeTradeWasLong) {
      return 'Long Increased';
    }
  }

  if (isShortTrade(size)) {
    if (positionBeforeTradeWasLong) {
      return positionIsShort(positionSize) ? 'Long Flipped To Short' : 'Long Decreased';
    }
    if (positionBeforeTradeWasShort) {
      return 'Short Increased';
    }
  }

  return 'Unexpected Action';
};

type TradeTypeHandler = {
  [key in FuturesTradesQuery['futuresTrades'][number]['type']]: () => string;
};

interface TradeTypeExtended extends TradeTypeHandler {
  Unknown: () => string;
}

export const getTradeLabel = (futuresTrade: FuturesTradesQuery['futuresTrades'][number]) => {
  const size = parseFloat(futuresTrade.size);
  const positionSize = parseFloat(futuresTrade.positionSize);
  const tradeTypeHandlers: TradeTypeExtended = {
    PositionOpened: () => (isLongTrade(size) ? 'Long Opened' : 'Short Opened'),
    Liquidated: () => (isLongTrade(size) ? 'Short Liquidated' : 'Long Liquidated'),
    PositionClosed: () => (isLongTrade(size) ? 'Short Closed' : 'Long Closed'),
    PositionModified: () => getTradeLabelForPositionModified(size, positionSize),
    Unknown: () => 'Unexpected Action', // Add a handler for the 'Unknown' type
  };
  return tradeTypeHandlers[futuresTrade.type]?.() || tradeTypeHandlers.Unknown();
};

export interface ActionData {
  id: string;
  label: string;
  txHash: string;
  timestamp: Wei;
  price: Wei | null;
  address: string;
  asset: string;
  size: Wei;
  fees: Wei | null;
  leverage: Wei | null;
  sizeInUsd: number;
}
const mergeData = (
  futuresTradesData?: FuturesTradesQuery['futuresTrades'],
  marginData?: FuturesMarginTransferQuery['futuresMarginTransfers']
) => {
  if (!futuresTradesData || !marginData) {
    return [];
  }

  const parsedMarginData: ActionData[] = marginData.map((marginTransfer) => {
    const withdraw = `${marginTransfer.size}`.includes('-');
    return {
      label: `${withdraw ? 'Withdraw' : 'Deposit'} Margin`,
      address: marginTransfer.trader.id,
      asset: marginTransfer.market.asset,
      fees: null,
      id: marginTransfer.id,
      price: null,
      size: wei(marginTransfer.size, 18, true),
      timestamp: wei(marginTransfer.timestamp),
      txHash: marginTransfer.txHash,
      leverage: null,
      sizeInUsd: Math.abs(wei(marginTransfer.size, 18, true).toNumber()),
    };
  });

  const parsedTradeData: ActionData[] = futuresTradesData.map((futuresTrade) => {
    return {
      label: getTradeLabel(futuresTrade),
      address: futuresTrade.trader.id,
      asset: futuresTrade.market.asset,
      fees: wei(futuresTrade.feesPaidToSynthetix, 18, true),
      id: futuresTrade.id,
      txHash: futuresTrade.txHash,
      price: wei(futuresTrade.price, 18, true),
      timestamp: wei(futuresTrade.timestamp),
      size: wei(futuresTrade.size, 18, true),
      leverage: null, // todo add leverage
      sizeInUsd: Math.abs(
        wei(futuresTrade.size, 18, true)
          .mul(wei(futuresTrade.price, 18, true))
          .toNumber()
      ),
    };
  });

  const data = parsedMarginData.concat(parsedTradeData);
  const sortedData = data.sort((a, b) => b.timestamp.toNumber() - a.timestamp.toNumber());
  return sortedData;
};

export function generateMarketIds(
  marketSummaries: Array<{ asset: string; address: string }>,
  markets: string | null
): string[] | undefined {
  if (!markets || !marketSummaries) return undefined;

  const marketsList = markets.split(',');

  const result: string[] = [];

  marketsList.forEach((market) => {
    const marketConfig = marketSummaries.find((item) => item.asset === market);

    if (marketConfig?.address) {
      result.push(marketConfig.address);
    }
  });

  return result;
}

export const useActions = (account?: string, limit?: number) => {
  const [searchParams] = useSearchParams();
  const { data: marketConfigs, isLoading: marketConfigsLoading } = useMarketSummaries();
  const accountLower = account?.toLowerCase();
  const markets = generateMarketIds(marketConfigs, searchParams.get('markets'));
  const min = searchParams.get('min') ?? undefined;
  const max = searchParams.get('max') ?? undefined;
  const futuresPositionId = searchParams.get('tradeId') ?? undefined;
  const openTimestamp = searchParams.get('openTimestamp') ?? undefined;
  const closeTimestamp = searchParams.get('closeTimestamp') ?? undefined;

  const {
    loading: marginLoading,
    data: marginData,
    error: marginError,
  } = useQuery(MARGIN_TRANSFERRED_QUERY, {
    pollInterval: 10000,
    skip: marketConfigsLoading,
    variables: {
      first: limit ?? 50,
      orderBy: FuturesMarginTransfer_OrderBy.Timestamp,
      orderDirection: OrderDirection.Desc,
      where: {
        trader: accountLower,
        market_in: markets,
        timestamp_gte: openTimestamp,
        timestamp_lte: closeTimestamp,
      },
    },
  });

  const {
    loading: futuresTradesLoading,
    data: futuresTradesData,
    error: futuresError,
  } = useQuery(FUTURES_TRADE_QUERY, {
    pollInterval: 10000,
    skip: marketConfigsLoading,
    variables: {
      first: limit ?? 50,
      orderBy: FuturesTrade_OrderBy.Timestamp,
      orderDirection: OrderDirection.Desc,
      where: {
        trader: accountLower,
        market_in: markets,
        futuresPosition: futuresPositionId,
      },
    },
  });

  const sortedData = mergeData(
    futuresTradesData?.futuresTrades,
    marginData?.futuresMarginTransfers
  );

  const filteredData = filterData(sortedData, min, max);

  return {
    loading: marginLoading || futuresTradesLoading || marketConfigsLoading,
    data: filteredData,
    error: marginError ?? futuresError,
  };
};

const filterData = (data: ActionData[], min: string | undefined, max: string | undefined) => {
  if (!min && !max) {
    return data;
  }
  const minNumber = min !== undefined ? Number(min) : -Infinity;
  const maxNumber = max !== undefined ? Number(max) : Infinity;
  return data?.filter(({ sizeInUsd }) => {
    if (sizeInUsd === null) {
      return false;
    }
    return sizeInUsd >= minNumber && sizeInUsd <= maxNumber;
  });
};
