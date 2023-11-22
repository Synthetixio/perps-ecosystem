import { useState } from 'react';
import { Box, Flex, Text, type FlexProps, Spinner } from '@chakra-ui/react';
import { TimeBadge } from '../../TimeBadge';
import { KeyColour } from '../../Dashboard/KeyColour';
import { AccountPnlTooltip } from './AccountPnlToolTip';
import { useTraderPnlStats } from '../../../hooks';

import {
  ComposedChart,
  Area,
  Bar,
  Cell,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

export const AccountPnl = ({ ...props }: FlexProps) => {
  const [tradeNum, setTradeNum] = useState<number>(10);

  const {
    processedData,
    traderPnlQueryLoading: loading,
    traderPnlQueryError: error,
  } = useTraderPnlStats(tradeNum);
  const totalPnlAmount = processedData?.[processedData.length - 1]?.totalPnl;

  return (
    <>
      <Flex
        height={500}
        width="100%"
        minW={500}
        my={5}
        borderColor="gray.900"
        borderWidth="1px"
        borderRadius="5px"
        sx={{
          borderCollapse: 'separate !important',
          borderSpacing: 0,
        }}
        bg="navy.700"
        flexDirection="column"
        p={4}
        {...props}
      >
        <Flex justifyContent="space-between" flexDir="row" w="100%">
          <Text fontFamily="heading" fontSize="20px" fontWeight={700} lineHeight="28px">
            Position PNL
          </Text>
          <Box>
            <TimeBadge title="10" onPress={() => setTradeNum(10)} isActive={tradeNum === 10} />
            <TimeBadge title="25" onPress={() => setTradeNum(25)} isActive={tradeNum === 25} />
            <TimeBadge title="50" onPress={() => setTradeNum(50)} isActive={tradeNum === 50} />
            <TimeBadge title="100" onPress={() => setTradeNum(100)} isActive={tradeNum === 100} />
            <TimeBadge title="250" onPress={() => setTradeNum(250)} isActive={tradeNum === 250} />
            <TimeBadge title="500" onPress={() => setTradeNum(500)} isActive={tradeNum === 500} />
          </Box>
        </Flex>
        <Flex mt={6}>
          <KeyColour label="TOTAL PNL" colour="whiteAlpha.400" />
          <KeyColour ml={4} label="LOSS" colour="pink.300" />
          <KeyColour ml={4} label="PROFIT" colour="teal.300" />
        </Flex>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" height="100%" width="100%">
            <Spinner size="xl" />
          </Flex>
        ) : (
          <>
            <Text my={3} color="white" fontSize="24px" fontFamily="heading" fontWeight={800}>
              $
              {totalPnlAmount?.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>

            {processedData && (
              <ResponsiveContainer minWidth="100%" minHeight={200}>
                <ComposedChart
                  width={500}
                  height={400}
                  data={processedData}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid stroke="0" />
                  <XAxis
                    dataKey="date"
                    tickLine={{ display: 'none' }}
                    tick={{ fontSize: '12px', fontFamily: 'Inter', fill: '#9999AC' }}
                  />

                  <YAxis hide={true} />
                  <Tooltip
                    content={AccountPnlTooltip}
                    cursor={false}
                    wrapperStyle={{ outline: 'none' }}
                  />
                  <Area type="monotone" dataKey="totalPnl" fill="#464657" stroke="0" />

                  <Bar dataKey="pnl" barSize={102}>
                    {processedData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.pnl > 0 ? '#4FD1C5' : '#F471FF'} />
                    ))}
                  </Bar>
                </ComposedChart>
              </ResponsiveContainer>
            )}
          </>
        )}
        {error && (
          <Flex justifyContent="center" alignItems="center" height="100%" minHeight={200}>
            {error.message}
          </Flex>
        )}
      </Flex>
    </>
  );
};
