import { Wei } from '@synthetixio/wei';

export interface AccountAggregateStat {
  id: string;
  accountId: string;
  accountPnl: Wei;
  trackingCode: string;
  marketId: string;
  marketName: string;
  perpsMarketId: string;
  marketSymbol: string;
  positionId: string;
  positionRealizedPnl: Wei;
  positionDirection: string;
  positionStatus: string;
  tradeId: string;
  tradeSizeDelta: Wei;
  tradeNotionalAmount: Wei;
  tradeFillPrice: Wei;
  tradeNewSize: Wei;
  tradePnl: Wei;
  eventPnl: Wei;
  timestamp: number;
  block: string;
}

export interface AccountStat {
  id: string;
  accountId: string;
  accountPnl: number;
  marketId: string;
  marketName: string;
  marketSymbol: string;
  positionPnl: number;
  timestamp: number;
  block: string;
  date: string;
}
