import { Tr } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Currency, Funding, Market, PnL, Size } from '../Shared';
import { ViewOutlinedIcon } from '../Icons/ViewOutlinedIcon';
import { wei } from '@synthetixio/wei';
import { ProcessedPositionData } from '../../types';

const ClosedPositionItem = ({
  position,
  isSelected,
  onSelect,
  hasClear,
}: {
  position: ProcessedPositionData;
  isSelected: boolean;
  onSelect: () => void;
  hasClear?: boolean;
}) => {
  const { pnl, market, long, leverage, funding, fees, size, avgEntryPrice, exitPrice, lastPrice } =
    position;

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
      <Market
        asset={market}
        leverage={wei(leverage, 18, true).toNumber()}
        direction={long ? 'LONG' : 'SHORT'}
      />

      <Size size={size} marketPrice={lastPrice} />

      <PnL pnl={pnl} />

      <Funding amount={funding} />

      <Currency amount={fees} />

      <Currency amount={avgEntryPrice} />

      <Currency
        amount={exitPrice}
        suffix={isSelected ? hasClear ? <CloseIcon /> : <ViewOutlinedIcon /> : undefined}
        sx={{ gap: 5 }}
      />
    </Tr>
  );
};

export default ClosedPositionItem;
