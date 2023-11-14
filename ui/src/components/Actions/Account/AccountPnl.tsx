import { useState } from 'react';
import { Box, Flex, Text, type FlexProps, Spinner } from '@chakra-ui/react';
import { TimeBadge } from '../../TimeBadge';
import { KeyColour } from '../../Dashboard/KeyColour';
import { AccountPnlTooltip } from './AccountPnlToolTip';
import { useTraderPnl } from '../../../hooks/useTraderPnl';

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
import { useParams } from 'react-router-dom';

export const AccountPnl = ({ ...props }: FlexProps) => {
  const [state, setState] = useState<'W' | 'M' | 'Y'>('M');
  const params = useParams();
  const walletAddress = params?.walletAddress ?? '';

  const { data, loading, error } = useTraderPnl(walletAddress, state);
  console.log('pnldata', data);
  const totalPnlAmount = data?.[data.length - 1]?.totalPnl;
  return (
    <>
      <Flex
        width="49%"
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
            <TimeBadge title="1W" onPress={() => setState('W')} isActive={state === 'W'} />
            <TimeBadge title="1M" onPress={() => setState('M')} isActive={state === 'M'} />
            <TimeBadge title="1Y" onPress={() => setState('Y')} isActive={state === 'Y'} />
          </Box>
        </Flex>
        <Flex mt={6}>
          <KeyColour label="TOTAL PNL" colour="whiteAlpha.400" />
          <KeyColour ml={4} label="LOSS" colour="pink.300" />
          <KeyColour ml={4} label="PROFIT" colour="teal.300" />
        </Flex>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" height="100%" minHeight={200}>
            <Spinner size="xl" />
          </Flex>
        ) : (
          <>
            <Text my={3} color="white" fontSize="24px" fontFamily="heading" fontWeight={800}>
              $
              {totalPnlAmount.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
              }
            </Text>

            {data && (
              <ResponsiveContainer minWidth="100%" minHeight={200}>
                <ComposedChart
                  width={500}
                  height={400}
                  data={data}
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
                    {data.map((entry, index) => (
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
