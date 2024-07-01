import { TableContainer, Table, Thead, Tr, Tbody, Text, Box } from '@chakra-ui/react';
import { useMarketV3 } from '../../v3hooks/useV3Markets';
import {
  MarkPrice,
  Skew,
  TableHeaderCell,
} from '../../components/Shared';
import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3Client } from '../../apollo/v3client';
import { V3Market } from './v3Market';
import { V3Funding } from './v3Funding';
import { V3OpenInterest } from './v3OpenInterest';

export const V3MarketsTable = () => {
  const { v3MarketData, loading, error } = useMarketV3();

  return (

    <V3Provider client={V3Client}>
      <Box px={{ base: '16px', md: '40px' }}>
        <TableContainer
          maxW="100%"
          my={5}
          borderColor="gray.900"
          borderWidth="1px"
          borderRadius="5px"
          sx={{
            borderCollapse: 'separate !important',
            borderSpacing: 0,
          }}
        >
          <Table bg="navy.700">
            <Thead>
              <Tr>
                <TableHeaderCell>Market</TableHeaderCell>
                <TableHeaderCell>Price</TableHeaderCell>
                <TableHeaderCell>Open Interest</TableHeaderCell>
                <TableHeaderCell>Skew</TableHeaderCell>
                <TableHeaderCell>1H Funding Rate</TableHeaderCell>
                <TableHeaderCell>24H Funding Rate</TableHeaderCell>
                <TableHeaderCell>Funding Velocity</TableHeaderCell>
                <TableHeaderCell>APR</TableHeaderCell>


              </Tr>
            </Thead>
            <Tbody>
              {v3MarketData?.map((item) => {
                const {
                  perpsMarketId,
                  marketName,
                  marketSymbol,
                  price,
                  currentFundingRate,
                  currentFundingVelocity,
                  hourlyFundingRate,
                  fundingRateApr,
                  openInterest,
                  skewVal,
                  marketSize,

                } = item;

                return (
                  <Tr key={perpsMarketId} borderTopWidth="1px">
                    <V3Market asset={marketName ?? ''} assetKey={marketSymbol ?? ''} />
                    <MarkPrice markPrice={price} indexPrice={price} />
                    <V3OpenInterest
                      longOI={openInterest.long.toNumber()}
                      shortOI={openInterest.short.toNumber()}
                      totalOI={marketSize}
                      price={price}
                    />
                    <Skew skew={skewVal} />
                    <V3Funding amount={hourlyFundingRate} time={1} />
                    <V3Funding amount={currentFundingRate} time={24} />
                    <V3Funding amount={currentFundingVelocity} time={24} />
                    <V3Funding amount={fundingRateApr} time={24} />


                  </Tr>
                );
              })}
            </Tbody>
            {
              loading && (
                <Text>Data Loading</Text>
              )
            }
            {
              error && (
                <Text>Data Error</Text>
              )
            }
          </Table>
        </TableContainer>
      </Box>
    </V3Provider>

  );
};
