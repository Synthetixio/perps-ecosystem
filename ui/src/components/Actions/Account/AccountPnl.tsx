import { useState } from 'react';
import { Flex, Text, type FlexProps, Spinner } from '@chakra-ui/react';
import { TimeBadge } from '../../TimeBadge';
import { KeyColour } from '../../Dashboard';
import { AccountPnlTooltip } from './AccountPnlToolTip';
import { useTraderPnlStats } from '../../../hooks';

import {
  ComposedChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  Bar,
  Cell,
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
    <Flex
      flex="auto"
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
      <Flex justifyContent="space-between" flexDir="row" w="100%" flexWrap="wrap" gap={1}>
        <Text
          fontFamily="heading"
          color="gray.500"
          fontSize="14px"
          fontWeight={400}
          lineHeight="20px"
        >
          Position PNL
        </Text>
        <Flex alignItems="center" gap={2}>
          <Text color="gray.500" fontSize="12px" fontWeight={400} lineHeight="16px">
            Last
          </Text>
          {[10, 25, 50, 100, 250, 500].map((value: number) => (
            <CustomTimeBadge
              key={value}
              tradeNum={value}
              setTradeNum={setTradeNum}
              currentTradeNum={tradeNum}
            />
          ))}
        </Flex>
      </Flex>
      <Flex mt="20px" gap={4} flexWrap="wrap">
        <KeyColour label="Total PNL" colour="gray.500" />
        <KeyColour label="Daily Profit" colour="teal.500" />
        <KeyColour label="Daily Loss" colour="pink.500" />
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
                stackOffset="sign"
              >
                <CartesianGrid stroke="0" />
                <XAxis
                  dataKey="label"
                  tickLine={{ display: 'none' }}
                  tick={{ fontSize: '12px', fontFamily: 'Inter', fill: '#9999AC' }}
                />

                <YAxis hide={true} />
                <Tooltip
                  content={AccountPnlTooltip}
                  cursor={false}
                  wrapperStyle={{ outline: 'none' }}
                />
                <Area type="monotone" dataKey="totalPnl" fill="#2D2D38" stroke="0" />
                <Bar type="monotone" dataKey="dailyTotalPnl">
                  {processedData.map((item, i) => {
                    return (
                      <Cell
                        key={`cell-${i}`}
                        fill={item.dailyTotalPnl > 0 ? '#319795' : '#EE2EFF'}
                      />
                    );
                  })}
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
  );
};

const CustomTimeBadge = ({
  currentTradeNum,
  tradeNum,
  setTradeNum,
}: {
  currentTradeNum: number;
  tradeNum: number;
  setTradeNum: (tradeNum: number) => void;
}) => {
  return (
    <TimeBadge
      title={tradeNum + ''}
      onPress={() => setTradeNum(tradeNum)}
      isActive={tradeNum === currentTradeNum}
    />
  );
};
