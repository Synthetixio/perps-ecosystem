import Wei from '@synthetixio/wei';

export interface Account {
  id: string;
  owner: string;
  feesPaid: Wei;
  pnl: Wei;
  totalLiquidations: Wei;
  totalTrades: Wei;
  totalVolume: Wei;
  totalOpenPositions: Wei;
  totalClosedPositions: Wei;
}
