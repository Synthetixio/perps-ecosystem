import { Tr } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { PositionType } from '../../hooks';
import { Currency, Funding, Market, MarkPrice, PnL, Size } from '../Shared';
import { ViewOutlinedIcon } from '../Icons/ViewOutlinedIcon';

const OpenPositionItem = ({
  position,
  isSelected,
  onSelect,
  hasClear,
}: {
  position: PositionType;
  isSelected: boolean;
  onSelect: () => void;
  hasClear?: boolean;
}) => {
  const {
    asset,
    avgEntryPrice,
    indexPrice,
    leverage,
    unrealizedPnl,
    realizedPnl,
    remainingMargin,
    size,
    long,
    funding,
    liquidationPrice,
    marketPrice,
    fees,
    unrealizedPnlPercentage,
  } = position;

  return (
    <Tr
      borderTopWidth="1px"
      borderWidth={isSelected ? '1px' : undefined}
      borderColor={isSelected ? 'whiteAlpha.500' : undefined}
      backgroundColor={isSelected ? 'whiteAlpha.100' : 'transparent'}
      _hover={{
        backgroundColor: 'whiteAlpha.100',
        cursor: 'pointer',
      }}
      onClick={() => {
        onSelect?.();
      }}
    >
      {/* Market and Direction */}
      <Market asset={asset} leverage={leverage.toNumber()} direction={long ? 'LONG' : 'SHORT'} />
      {/* Mark Price */}
      <MarkPrice indexPrice={indexPrice.toNumber()} markPrice={marketPrice.toNumber()} />
      <Size size={size.toNumber()} marketPrice={marketPrice.toNumber()} />

      <PnL
        pnl={unrealizedPnl.toNumber()}
        pnlPercentage={unrealizedPnlPercentage.toNumber()} //
      />
      <PnL pnl={realizedPnl.toNumber()} />

      {/* Collateral */}
      <Currency amount={remainingMargin.toNumber()} />
      {/* Funding */}
      <Funding amount={funding.toNumber()} />
      {/* Fees */}
      <Currency amount={fees.toNumber()} />
      {/* Entry Price */}
      <Currency amount={avgEntryPrice.toNumber()} />

      {/* Liquidation Price */}
      <Currency
        amount={liquidationPrice.toNumber()}
        suffix={isSelected ? hasClear ? <CloseIcon /> : <ViewOutlinedIcon /> : undefined}
      />
    </Tr>
  );
};

export default OpenPositionItem;
