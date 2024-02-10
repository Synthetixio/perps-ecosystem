import { Box, Text, VStack, HStack, Button, ButtonGroup, Flex, Tooltip } from '@chakra-ui/react';
import { useTraderStats } from '../../hooks/useTraderStats';
import { formatNumber, formatNumberToCurrencyBasedOnSize } from '@synthetixio/formatters';
import { useAccountBalances } from '../../hooks/useAccountBalances';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface StatsCardProps {
  label: string;
  value: string;
  tooltip: string;
}

const StatsCard = ({ label, value, tooltip }: StatsCardProps) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
      <Flex alignItems="center">
        <Text fontSize="sm" color="gray.600" mr={1}>
          {label}
        </Text>
        <Tooltip label={tooltip}>
          <InfoOutlineIcon />
        </Tooltip>
      </Flex>

      <Text fontSize="lg" fontWeight="bold" mt={1}>
        {value}
      </Text>
    </Box>
  );
};

interface TraderStakingStatsProps {
  direction: 'vertical' | 'horizontal';
}

const TraderStakingStats = ({ direction }: TraderStakingStatsProps) => {
  const Stack = direction === 'horizontal' ? HStack : VStack;
  const [statsSelection, setStatsSelection] = useState('Trader');

  const { traderTotalStats } = useTraderStats();

  // make sure you have the data first. rework this component to handle null/loading/error states

  const totalVolume = traderTotalStats ? traderTotalStats.totalVolume.toString() : 'loading...';
  const totalPnl = traderTotalStats ? traderTotalStats.totalPnl.toString() : 'loading...';
  const totalFees = traderTotalStats ? traderTotalStats.totalFees.toString() : 'loading...';
  const totalLiquidations = traderTotalStats
    ? traderTotalStats.totalLiquidations.toString()
    : 'loading...';
  const totalMarginLiquidated = traderTotalStats
    ? traderTotalStats.totalMarginLiquidated.toString()
    : 'loading...';

  const { walletAddress } = useParams();

  const { totalSNX, userSUSD, feeSUSD, estimatedUserFee, totalDebt } =
    useAccountBalances(walletAddress);

  return (
    <Stack spacing={5} alignItems="flex-start" padding="1" width="100%">
      <ButtonGroup variant="ghost" spacing="3" color="gray.600">
        <Button
          size="sm"
          color={statsSelection === 'Trader' ? 'gray.50' : 'gray.500'}
          onClick={() => setStatsSelection('Trader')}
          bg={statsSelection === 'Trader' ? 'whiteAlpha.400' : 'navy.700'}
        >
          Trader
        </Button>
        <Button
          size="sm"
          color={statsSelection === 'Staking' ? 'gray.50' : 'gray.500'}
          onClick={() => setStatsSelection('Staking')}
          bg={statsSelection === 'Staking' ? 'whiteAlpha.400' : 'navy.700'}
        >
          Staking
        </Button>
      </ButtonGroup>
      {statsSelection === 'Trader' ? (
        <Stack width="100%">
          <StatsCard
            label="Total Volume"
            value={formatNumberToCurrencyBasedOnSize(totalVolume)}
            tooltip="Total Volume of Trades"
          />
          <StatsCard
            label="Total PNL"
            value={formatNumberToCurrencyBasedOnSize(totalPnl)}
            tooltip="Total PNL of Trades"
          />
          <StatsCard
            label="Total Fees"
            value={formatNumberToCurrencyBasedOnSize(totalFees)}
            tooltip="Total Fees of Trades"
          />
          <StatsCard
            label="Total Liquidations"
            value={formatNumber(totalLiquidations, {
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
            })}
            tooltip="Total number of liquidations"
          />
          <StatsCard
            label="Total Margin Liquidated"
            value={formatNumberToCurrencyBasedOnSize(totalMarginLiquidated)}
            tooltip="Total Margin Liquidated"
          />
        </Stack>
      ) : (
        <Stack width="100%">
          <StatsCard
            label={'SUSD Balance: '}
            value={formatNumber(userSUSD.toString())}
            tooltip="On Optimism"
          />
          <StatsCard
            label={'SNX Balance (Escrow + User): '}
            value={formatNumberToCurrencyBasedOnSize(totalSNX.toString())}
            tooltip="On Optimism + Ethereum"
          />
          <StatsCard
            label={'Total Debt: '}
            value={formatNumberToCurrencyBasedOnSize(totalDebt.toString())}
            tooltip="On Optimism + Ethereum"
          />
          <StatsCard
            label={'Current Estimated Epoch Fees: '}
            value={formatNumberToCurrencyBasedOnSize(
              estimatedUserFee ? estimatedUserFee?.toString() : ''
            )}
            tooltip="Fee earned from SNX staking"
          />
          <StatsCard
            label={'Current Total Epoch Fees: '}
            value={formatNumber(feeSUSD.toString())}
            tooltip="On Optimism + Ethereum"
          />
        </Stack>
      )}
    </Stack>
  );
};

export default TraderStakingStats;
