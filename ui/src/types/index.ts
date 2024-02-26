import Wei from '@synthetixio/wei';
import { z } from 'zod';
import { type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
import {
  type BoxProps,
  type ButtonProps,
  type GridProps,
  type LayoutProps,
  type SpaceProps,
  type SystemStyleObject,
} from '@chakra-ui/react';

export interface ProcessedPositionData {
  pnl: number;
  openTimestamp: string;
  closeTimestamp: string;
  date: string;
  market: string;
  long: boolean;
  txHash: string;
  leverage: string;
  positionId: string;
  walletAddress: string;
  trades: string;
  liquidated: boolean;
  funding: number;
  fees: number;
  size: number;
  entryPrice: number;
  avgEntryPrice: number;
  exitPrice: number;
  lastPrice: number;
}

export interface SubgraphPositionData {
  id: string;
  market: string;
  asset: string;
  walletAddress: string;
  size: Wei;
  avgEntryPrice: Wei;
  leverage: Wei;
  fees: Wei;
  realizedPnlAtLastModification: Wei;
  unrealizedPnlAtLastModification: Wei;
  netFundingAtLastModification: Wei;
  fillPriceAtLastInteraction: Wei;
  openTimestamp: string;
  closeTimestamp?: string;
}

export interface ContractData {
  skew: Wei;
  skewScale: Wei;
  indexPrice: Wei;
  size: Wei;
  liquidationPrice: Wei;
  accessibleMargin: Wei;
  remainingMargin: Wei;
  accruedFundingSinceLastModification: Wei;
}

const ZodWei = z.custom<Wei>((x) => Wei.is(x));

export const PositionDataSchema = z.object({
  id: z.string(),
  asset: z.string(),
  indexPrice: ZodWei,
  liquidationPrice: ZodWei,
  unrealizedPnl: ZodWei,
  realizedPnl: ZodWei,
  unrealizedPnlPercentage: ZodWei,
  remainingMargin: ZodWei,
  size: ZodWei,
  long: z.boolean(),
  avgEntryPrice: ZodWei,
  leverage: ZodWei,
  fees: ZodWei,
  funding: ZodWei,
  marketPrice: ZodWei,
  notionalValue: ZodWei,
  address: z.string(),
});
export const PositionsDataSchema = z.array(PositionDataSchema);

export type MarketsByKey = Record<
  string,
  {
    key: string;
    pythId: string;
    asset: string;
  }
>;

export interface VariantProps {
  variant?: string;
  tx?: string;
}

export interface SxProps {
  sx?: SystemStyleObject & GridProps;
}
export type IconProps = BoxProps & { icon: ReactNode } & HTMLAttributes<HTMLDivElement>;
export type CustomButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  itemId?: number | string;
} & ButtonProps &
  SxProps &
  LayoutProps &
  SpaceProps &
  VariantProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
