import Wei from '@synthetixio/wei';
import { z } from 'zod';
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { BoxProps, ButtonProps, GridProps, LayoutProps, SpaceProps, SystemStyleObject } from '@chakra-ui/react';

export interface SubgraphPositionData {
  market: string;
  asset: string;
  walletAddress: string;
  avgEntryPrice: Wei;
  leverage: Wei;
  fees: Wei;
  realizedPnlAtLastModification: Wei;
  unrealizedPnlAtLastModification: Wei;
  netFundingAtLastModification: Wei;
  fillPriceAtLastInteraction: Wei;
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

export interface MarketsByKey {
  [key: string]: {
    key: string;
    pythId: string;
    asset: string;
  };
}

export type VariantProps = {
  variant?: string
  tx?: string
}

export type SxProps = {
  sx?: SystemStyleObject & GridProps
}
export type IconProps = BoxProps & { icon: ReactNode } & HTMLAttributes<HTMLDivElement>
export type CustomButtonProps = {
  block?: boolean
  isLoading?: boolean
  itemId?: number | string
} & ButtonProps &
  SxProps &
  LayoutProps &
  SpaceProps &
  VariantProps &
  ButtonHTMLAttributes<HTMLButtonElement>