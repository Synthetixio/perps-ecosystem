import { Wei } from '@synthetixio/wei';

export interface Trade {
  id: string;
  positionId: string;
  accountId: string;
  marketId: string;
  marketName: string;
  marketSymbol: string;
  marketPrice: Wei;
  fillPrice: Wei;
  pnl: Wei;
  accruedFunding: Wei;
  sizeDelta: Wei;
  newSize: Wei;
  volume: Wei;
  notionalAmount: Wei;
  totalFees: Wei;
  referralFees: Wei;
  collectedFees: Wei;
  settlementReward: Wei | null;
  trackingCode: string;
  settler: string;
  block: string;
  timestamp: string;
  transactionHash: string;
  interestCharged: Wei | null;
  tradeType: string;
}
