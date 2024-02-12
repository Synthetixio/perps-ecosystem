import { Box, BoxProps } from '@chakra-ui/react';
import { CurrencyIcon } from '../CurrencyIcon';

const ExplorerIcon = ({
  currencyKey,
  explorerUrl,
  size = 18,
  ...props
}: { currencyKey: string; explorerUrl?: string; size?: number | string } & BoxProps) => {
  return (
    <Box
      sx={{ width: size, height: size, filter: 'grayscale(100%)', ':hover': { filter: 'none' } }}
      {...props}
    >
      {explorerUrl ? (
        <a href={explorerUrl} target="_blank" rel="noreferrer">
          <CurrencyIcon currencyKey={currencyKey} width={18} height={18} />
        </a>
      ) : (
        <CurrencyIcon currencyKey={currencyKey} width={18} height={18} />
      )}
    </Box>
  );
};

export default ExplorerIcon;
