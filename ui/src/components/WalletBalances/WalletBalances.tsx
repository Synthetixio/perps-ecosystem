import { Flex, Text, Skeleton } from '@chakra-ui/react';
import { formatNumber } from '@synthetixio/formatters';
import { useAccountBalances } from '../../hooks/useAccountBalances';

const Row = ({
  value,
  label,
  color = 'gray.500',
  formatFn = formatNumber,
  fontWeight,
  prefix = '',
  postfix = '',
}: {
  value?: number;
  label: string;
  color?: string;
  formatFn?: (x: number | string) => string;
  fontWeight?: string;
  prefix?: string;
  postfix?: string;
}) => {
  return (
    <Flex color={color} justifyContent="space-between" gap={10}>
      <Text fontWeight={fontWeight}>{label}</Text>
      {value !== undefined ? (
        <Text fontWeight={fontWeight}>
          {prefix}
          {formatFn(value)}
          {postfix}
        </Text>
      ) : (
        <Skeleton my={1} width={8} height={4} />
      )}
    </Flex>
  );
};

export const WalletBalances = ({ walletAddress }: { walletAddress: string }) => {
  const { totalSNX, snxStakedAmount, userSUSD, feeSUSD, estimatedUserFee } =
    useAccountBalances(walletAddress);

  return (
    <Flex flexDirection="column">
      <Row label={'SUSD Balance: '} value={userSUSD} />
      <Row label={'SNX Balance (Escrow + User): '} value={totalSNX} />
      <Row label={'SNX Staked: '} value={snxStakedAmount} />
      <Row label={'Current Estimated Epoch Fees: '} value={estimatedUserFee} prefix={'$'} />
      <Row label={'Current Total Epoch Fees: '} value={feeSUSD} prefix={'$'} />
    </Flex>
  );
};
