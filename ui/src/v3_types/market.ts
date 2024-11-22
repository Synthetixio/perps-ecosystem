export interface Market {
  id: string;
  perpsMarketId: string;
  currentMarketPrice: string;
  marketName: string;
  marketSymbol: string;
  price: number;
  skew: number;
  skewScale: number;
  size: number;
  sizeDelta: number;
  currentFundingRate: number;
  currentFundingVelocity: number;
  hourlyFundingRate: number;
  hourlyFundingVelocity: number;
  fundingRateApr: number;
  skewVal: number;
  marketSize: number;
  longOI: number;
  shortOI: number;
}
