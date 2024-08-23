import { useState } from 'react';
import { Flex, Text, type FlexProps, Spinner } from '@chakra-ui/react';
import { TimeBadge } from '../../../components/TimeBadge';
import { KeyColour } from '../../../components/Dashboard';
import { V3BaseAccountPnlTooltip } from './V3BaseAccountPnlToolTip';

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
import {
  AccountAggregateStatOrderBy,
  OrderDirection,
} from '../../../v3_perp/__generated__/graphql';
import { Account } from '../../../v3_types';
import { useV3BaseAccountAggregateStat } from '../../../v3_hooks/useV3BaseAccountAggregateStat';

interface V3BaseAccountPnlChartProps extends FlexProps {
  account: Account;
}

export const V3BaseAccountPnlChart = ({ account, ...props }: V3BaseAccountPnlChartProps) => {
  const [tradeNum, setTradeNum] = useState<number>(10);

  // Construct the position filters
  const accountAggregateStatFilter = {
    account: account.id,
  };

  const {
    data: pnlData,
    loading: pnlLoading,
    error: pnlError,
  } = useV3BaseAccountAggregateStat({
    first: 500,
    orderBy: 'timestamp' as AccountAggregateStatOrderBy,
    orderDirection: 'desc' as OrderDirection,
    accountAggregateStatFilter,
  });

  if (pnlLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100%" width="100%">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (pnlError) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100%" width="100%">
        <Text>No Data </Text>
      </Flex>
    );
  }

  const chartData = pnlData.slice(0, tradeNum).sort((a, b) => a.timestamp - b.timestamp);

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
        <KeyColour label="Profit" colour="teal.500" />
        <KeyColour label="Loss" colour="pink.500" />
      </Flex>
      <>
        <Text my={3} color="white" fontSize="24px" fontFamily="heading" fontWeight={800}>
          $
          {account.pnl.toNumber()?.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>

        {chartData && (
          <ResponsiveContainer minWidth="100%" minHeight={200}>
            <ComposedChart
              width={500}
              height={400}
              data={chartData}
              margin={{
                top: 20,
                right: 5,
                bottom: 5,
                left: 5,
              }}
              stackOffset="sign"
            >
              <CartesianGrid stroke="0" />
              <XAxis
                dataKey="date"
                domain={['dataMin', 'dataMax']}
                scale={'auto'}
                tickLine={{ display: 'none' }}
                tick={{ fontSize: '12px', fontFamily: 'Inter', fill: '#9999AC' }}
              />

              <YAxis
                yAxisId={'left'}
                orientation={'left'}
                domain={['auto', 'auto']}
                hide={true}
                tick={{ fontSize: '12px', fontFamily: 'Inter', fill: '#9999AC' }}
              />

              <YAxis
                yAxisId={'right'}
                orientation={'left'}
                domain={['auto', 'auto']}
                hide={true}
                tick={{ fontSize: '12px', fontFamily: 'Inter', fill: '#9999AC' }}
              />

              <Tooltip
                content={V3BaseAccountPnlTooltip}
                cursor={false}
                wrapperStyle={{ outline: 'none' }}
              />

              <Area
                type="monotone"
                dataKey="accountPnl"
                fill="#2D2D38"
                stroke="0"
                yAxisId={'right'}
              />

              <Bar type="monotone" dataKey="positionPnl" yAxisId={'left'}>
                {pnlData.map((item, i) => {
                  return (
                    <Cell key={`cell-${i}`} fill={item.positionPnl > 0 ? '#319795' : '#EE2EFF'} />
                  );
                })}
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        )}
      </>
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
