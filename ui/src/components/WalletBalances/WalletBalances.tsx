import { Flex, Text, Skeleton, Tooltip } from '@chakra-ui/react';
import { formatNumber } from '@synthetixio/formatters';
import { useAccountBalances } from '../../hooks/useAccountBalances';
import { ReactNode } from 'react';

const Row = ({
  value,
  label,
  color = 'gray.500',
  formatFn = formatNumber,
  fontWeight,
  prefix = '',
  postfix = '',
  tooltip,
}: {
  value?: number;
  label: string;
  color?: string;
  formatFn?: (x: number | string) => string;
  fontWeight?: string;
  prefix?: string;
  postfix?: string;
  tooltip?: ReactNode;
}) => {
  return (
    <Tooltip
      placement="top"
      maxWidth="450px"
      py={2}
      px={4}
      bg="gray.900"
      color="white"
      fontSize="14px"
      fontFamily="heading"
      borderRadius="4px"
      label={tooltip}
      hasArrow
    >
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
    </Tooltip>
  );
};

export const WalletBalances = ({ walletAddress }: { walletAddress: string }) => {
  const { totalSNX, userSUSD, feeSUSD, estimatedUserFee, totalDebt } =
    useAccountBalances(walletAddress);

  return (
    <Flex flexDirection="column">
      <Row label={'SUSD Balance: '} value={userSUSD} tooltip={'On Optimism'} />
      <Row
        label={'SNX Balance (Escrow + User): '}
        value={totalSNX}
        tooltip={'On Optimism + Ethereum'}
      />
      <Row label={'Total Debt: '} value={totalDebt} tooltip={'On Optimism + Ethereum'} />
      {/* <Row */}
      {/*  label={'SNX Staked: '} */}
      {/*  value={snxStakedAmount} */}
      {/*  tooltip={ */}
      {/*    <Flex alignItems="flex-start" flexDirection="column"> */}
      {/*      <Text>On Optimism + Ethereum</Text> */}
      {/*      <Text>Total Debt: ${formatNumber(totalDebt)}</Text> */}
      {/*    </Flex> */}
      {/*  } */}
      {/* /> */}
      <Row label={'Current Estimated Epoch Fees: '} value={estimatedUserFee} prefix={'$'} />
      <Row
        label={'Current Total Epoch Fees: '}
        value={feeSUSD}
        prefix={'$'}
        tooltip={'On Optimism + Ethereum'}
      />
    </Flex>
  );
};
