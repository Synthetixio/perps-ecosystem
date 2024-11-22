import { Wei } from '@synthetixio/wei';

export interface Liquidation {
  id: string;
  timestamp: string;
  transactionHash: string;
  accountId: string;
  accountOwner: string;
  marketId: string;
  marketName: string;
  marketSymbol: string;
  marketPrice: Wei;
  amountLiquidated: Wei;
  liquidationType: string;
  currentPositionSize: Wei;
  notionalAmount: Wei;
  positionId: string | null;
  positionIsLiquidated: boolean | null;
  positionDirection: string | null;
  positionRealizedPnl: Wei | null;
  positionStatus: string | null;
  positionAverageEntryPrice: Wei | null;
  positionTotalTrades: Wei | null;
  positionTotalVolume: Wei | null;
  positionTotalFees: Wei | null;
  positionTrackingCode: string | null;
}
