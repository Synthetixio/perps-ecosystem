// Utility function to convert enum to readable string
export const formatTradeType = (tradeType: string): string => {
  switch (tradeType) {
    case 'LONG_OPENED':
      return 'Long Opened';
    case 'LONG_CLOSED':
      return 'Long Closed';
    case 'LONG_INCREASED':
      return 'Long Increased';
    case 'LONG_DECREASED':
      return 'Long Decreased';
    case 'SHORT_OPENED':
      return 'Short Opened';
    case 'SHORT_CLOSED':
      return 'Short Closed';
    case 'SHORT_INCREASED':
      return 'Short Increased';
    case 'SHORT_DECREASED':
      return 'Short Decreased';
    case 'DEPOSIT_MARGIN':
      return 'Margin Deposited';
    case 'WITHDRAW_MARGIN':
      return 'Margin Withdrawn';
    default:
      return 'Unknown Action';
  }
};
