import { Flex, Heading, Button, Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { ClosedPositionsTable, PositionsTable } from '../Positions';
import { AccountActionsTable } from '../Actions';
import { AccountPnl } from '../Actions/Account';
import { useSearchParams } from 'react-router-dom';

interface TraderAccountStatsProps {
  kwentaAccount?: string;
  polynomialAccount?: string;
}

export const TraderAccountStats = ({
  kwentaAccount,
  polynomialAccount,
}: TraderAccountStatsProps) => {
  const actionsRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [actionFilter, setActionFilter] = useState<boolean>(false);

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
  return (
    <>
      {/* Open Positions Section */}
      <Box mt={6}>
        <Heading fontSize="18px" lineHeight="28px">
          Open Positions
        </Heading>
        <PositionsTable
          kwentaAccount={kwentaAccount ?? ''}
          polynomialAccount={polynomialAccount ?? ''}
        />
      </Box>
      {/* Account PNL and Closed Positions Flexbox */}
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" mt={8}>
        {/* Account PNL Section */}
        <Box flex={1} mr={{ md: 4 }} minW="500px">
          <Heading fontSize="18px" lineHeight="28px" mb={4}>
            Account PNL
          </Heading>
          <AccountPnl />
        </Box>
        {/* Closed Positions Section */}
        <Box flex={1} ml={{ md: 4 }} minW="500px">
          <Heading fontSize="18px" lineHeight="28px" mb={4}>
            Recently Closed Positions
          </Heading>
          <ClosedPositionsTable
            actionsRef={actionsRef}
            actionFilter={actionFilter}
            resetActionFilters={resetActionFilters}
            updateTradeId={updateTradeId}
          />
        </Box>
      </Flex>

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
