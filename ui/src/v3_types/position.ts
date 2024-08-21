import { Wei } from '@synthetixio/wei';

export interface Position {
  id: any;
  trackingCode: string;
  isOpen: boolean;
  isLiquidated: boolean;
  status: string;
  direction: string;
  openTimestamp: string;
  closeTimestamp: string | null;
  entryPrice: Wei;
  exitPrice?: Wei | null;
  lastFillPrice: Wei;
  averageEntryPrice: Wei;
  size: Wei;
  notionalAmount: Wei;
  realizedPnl: Wei;
  unrealizedPnl: Wei;
  unrealizedPnlFE: Wei;
  totalFees: Wei;
  totalVolume: Wei;
  totalTrades: Wei;
  accruedFunding: Wei;
  interestCharged: Wei | null;
  marketId: string;
  marketName: string;
  marketSymbol: string;
  marketPrice: Wei;
  accountId: string;
  accountOwner: string;
  liquidationId: string | null;
}
