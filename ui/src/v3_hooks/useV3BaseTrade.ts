import { useQuery } from '@apollo/client';
import { v3_TRADE } from '../v3_baseQueries/v3_Trade';
import { OrderDirection, TradeFilter, TradeOrderBy } from '../v3_perp/__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { Trade } from '../v3_types/trade';
import { formatTradeType, safeDecodeTrackingCode } from '../v3_utils';

interface UseV3BaseTradeProps {
  first?: number;
  orderBy: TradeOrderBy;
  orderDirection: OrderDirection;
  tradeFilters: TradeFilter;
}

export const useV3BaseTrade = ({
  first = 100,
  orderBy,
  orderDirection,
  tradeFilters,
}: UseV3BaseTradeProps) => {
  const variables = {
    first,
    orderBy,
    orderDirection,
    where: tradeFilters,
  };

  const { loading, error, data } = useQuery(v3_TRADE, {
    variables,
  });

  const processedData: Trade[] = data
    ? data.trades.map((trade) => ({
        id: trade.id,
        positionId: trade.position.id,
        accountId: trade.account.id,
        marketId: trade.market.id,
        marketName: trade.market.marketName,
        marketSymbol: trade.market.marketSymbol,
        marketPrice: wei(trade.market.price, 18, true),
        fillPrice: wei(trade.fillPrice, 18, true),
        pnl: wei(trade.pnl, 18, true),
        accruedFunding: wei(trade.accruedFunding, 18, true),
        sizeDelta: wei(trade.sizeDelta, 18, true),
        newSize: wei(trade.newSize, 18, true),
        volume: wei(trade.volume, 18, true),
        notionalAmount: wei(trade.notionalAmount, 18, true),
        totalFees: wei(trade.totalFees, 18, true),
        referralFees: wei(trade.referralFees, 18, true),
        collectedFees: wei(trade.collectedFees, 18, true),
        settlementReward: wei(trade.settlementReward, 18, true),
        trackingCode: trade.trackingCode ? safeDecodeTrackingCode(trade.trackingCode) : '',
        settler: trade.settler,
        block: trade.block,
        timestamp: trade.timestamp,
        transactionHash: trade.transactionHash,
        interestCharged: trade.interestCharged ? wei(trade.interestCharged, 18, true) : null,
        tradeType: formatTradeType(trade.tradeType),
      }))
    : [];

  return {
    loading,
    error,
    data: data ? processedData : [],
  };
};
