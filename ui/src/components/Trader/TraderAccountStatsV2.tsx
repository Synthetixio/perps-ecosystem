import { Flex, Heading, Button, Box, ButtonGroup } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { PositionsTable } from '../Positions';
import { ClosedPositionsTable } from './ClosedPositions';
import { AccountActionsTable } from '../Actions';
import { AccountPnl } from '../Actions/Account';
import { useSearchParams } from 'react-router-dom';
import TraderStakingStats from '../TraderStats/TraderStakingStats';
import { LiquidationsTable } from '../Liquidations';
import { useWalletAddress } from '../../hooks/useWalletAddress';

interface TraderAccountStatsProps {
  kwentaAccount?: string;
  polynomialAccount?: string;
}

export const TraderAccountStatsV2 = ({
  kwentaAccount,
  polynomialAccount,
}: TraderAccountStatsProps) => {
  const actionsRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [actionFilter, setActionFilter] = useState<boolean>(false);
  const [positionTable, setPositionTable] = useState<string>('open');

  const updateTradeId = (
    tradeId: string,
    timestampOpen: string,
    market: string,
    timestampClose?: string
  ) => {
    setActionFilter(true);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('tradeId', tradeId.toString());
    newParams.set('openTimestamp', timestampOpen.toString());
    newParams.set('markets', market.toString());
    timestampClose
      ? newParams.set('closeTimestamp', timestampClose.toString())
      : newParams.delete('closeTimestamp');
    setSearchParams(newParams);

    actionsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const resetActionFilters = () => {
    const newParams = new URLSearchParams();
    setSearchParams(newParams);
    setActionFilter(false);
  };

  const { allAddresses } = useWalletAddress();

  const renderPositionTable = () => {
    switch (positionTable) {
      case 'open':
        return (
          <PositionsTable
            kwentaAccount={kwentaAccount ?? ''}
            polynomialAccount={polynomialAccount ?? ''}
          />
        );
      case 'close':
        return (
          <ClosedPositionsTable
            actionsRef={actionsRef}
            actionFilter={actionFilter}
            resetActionFilters={resetActionFilters}
            updateTradeId={updateTradeId}
          />
        );
      case 'liquidations':
        return <LiquidationsTable addresses={allAddresses} />;
    }
  };
  return (
    <>
      <Flex direction="column">
        <Heading fontSize="18px" lineHeight="28px" mt={3}>
          Stats
        </Heading>

        {/* Stats and Account PNL */}
        <Flex direction={{ base: 'column', md: 'row' }} justify="flex-start" mt={3}>
          {/* Stats Section */}
          <Box flex={1} mr={{ md: 4 }} minW="500px">
            <TraderStakingStats direction="vertical" />
          </Box>

          {/* Account PNL Section */}
          <Box flex={2} ml={{ md: 4 }} minW="500px" mt={8}>
            <AccountPnl />
          </Box>
        </Flex>
      </Flex>

      {/* Positions Tables */}

      <Box mt={6}>
        <Heading fontSize="18px" lineHeight="28px">
          Positions
        </Heading>

        <ButtonGroup variant="ghost" spacing="3" mt="3" color="gray.600">
          <Button
            size="sm"
            color={positionTable === 'open' ? 'gray.50' : 'gray.500'}
            bg={positionTable === 'open' ? 'whiteAlpha.400' : 'navy.700'}
            onClick={() => setPositionTable('open')}
          >
            Open Positions
          </Button>
          <Button
            size="sm"
            color={positionTable === 'close' ? 'gray.50' : 'gray.500'}
            bg={positionTable === 'close' ? 'whiteAlpha.400' : 'navy.700'}
            onClick={() => setPositionTable('close')}
          >
            Closed Positions
          </Button>
          <Button
            size="sm"
            color={positionTable === 'liquidations' ? 'gray.50' : 'gray.500'}
            bg={positionTable === 'liquidations' ? 'whiteAlpha.400' : 'navy.700'}
            onClick={() => setPositionTable('liquidations')}
          >
            Liquidations
          </Button>
        </ButtonGroup>

        {renderPositionTable()}
      </Box>

      {/* Actions Section */}
      <Box mt={6} ref={actionsRef}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize="18px" lineHeight="28px">
            Actions
          </Heading>
          {actionFilter && (
            <Button variant="ghost" onClick={resetActionFilters}>
              View All Actions
            </Button>
          )}
        </Flex>

        <AccountActionsTable />
      </Box>
    </>
  );
};
