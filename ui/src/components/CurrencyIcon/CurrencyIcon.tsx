type CurrencyKey =
  | 'AAVE'
  | 'sETH'
  | 'APE'
  | 'ATOM'
  | 'AUD'
  | 'AVAX'
  | 'AXS'
  | 'BNB'
  | 'DOGE'
  | 'DYDX'
  | 'EUR'
  | 'FLOW'
  | 'FTM'
  | 'GBP'
  | 'LINK'
  | 'MATIC'
  | 'NEAR'
  | 'OP'
  | 'SOL'
  | 'UNI'
  | 'XAG'
  | 'XAU'
  | 'sBTC'
  | 'APT'
  | 'LDO'
  | 'ADA'
  | 'GMX'
  | 'FIL'
  | 'LTC'
  | 'BCH'
  | 'SHIB'
  | 'CRV'
  | string;

interface CurrencyIconProps {
  currencyKey: CurrencyKey;
  width?: number;
  height?: number;
}

export const parseCurrencyKey = (currencyKey: CurrencyKey): string => {
  if (currencyKey === 'sETH') return 'ETH';
  if (currencyKey === 'sBTC') return 'BTC';
  return currencyKey;
};

export const CurrencyIcon = ({
  currencyKey,
  width = 30,
  height = 30,
}: CurrencyIconProps): JSX.Element => {
  return (
    <img
      src={`https://synthetixio.github.io/synthetix-assets/markets/${parseCurrencyKey(
        currencyKey
      )}.svg`}
      alt={currencyKey}
      style={{ width, height }}
    />
  );
};
