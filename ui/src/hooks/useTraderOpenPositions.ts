import { useQuery } from '@apollo/client';
import { type BytesLike } from 'ethers';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';
import type Wei from '@synthetixio/wei';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { type ContractData, type SubgraphPositionData } from '../types';
import { POSITIONS_CONTRACT_QUERY } from '../queries/resolved';
import { type InfuraProvider, type JsonRpcProvider } from '@ethersproject/providers';
import { useEthersProvider } from '../utils/ProviderContext';
import { RealtimeContext, initMulticall, initPerpsMarketData } from '../utils';
import { useContext } from 'react';
import { useWalletAddress } from './useWalletAddress';

export interface PositionType {
  id: string;
  openTimestamp: string;
  closeTimestamp?: string;
  accountType: string;
  address: string;
  asset: string;
  avgEntryPrice: Wei;
  fees: Wei;
  funding: Wei;
  indexPrice: Wei;
  leverage: Wei;
  liquidationPrice: Wei;
  long: boolean;
  marketPrice: Wei;
  notionalValue: Wei;
  realizedPnl: Wei;
  remainingMargin: Wei;
  size: Wei;
  unrealizedPnl: Wei;
  unrealizedPnlPercentage: Wei;
}

export const useTraderOpenPositions = (
  accountAddress?: string,
  accountType?: string,
  marketFilter: boolean = true
) => {
  const { provider } = useEthersProvider();
  const { arePricesReady } = useContext(RealtimeContext);

  const { allAddresses } = useWalletAddress();

  // Initial query to give a list of markets
  const {
    data: marketData,
    loading: marketLoading,
    error: marketError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: {
      where: {
        isOpen: true,
        trader_in: [...allAddresses],
      },
      orderBy: 'margin' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
      first: 50,
    },
    pollInterval: 300000,
    skip: !arePricesReady,
  });

  const openPositions = marketData?.futuresPositions.map((item) => ({
    ...item,
    accountType,
    id: item.id,
    openTimestamp: item.openTimestamp,
    market: item.market.marketKey,
    asset: item.market.asset,
    walletAddress: item.trader.id,
    avgEntryPrice: wei(item.avgEntryPrice, 18, true),
    leverage: wei(item.leverage, 18, true),
    fees: wei(item.feesPaidToSynthetix, 18, true),
    unrealizedPnlAtLastModification: wei(item.unrealizedPnl, 18, true),
    realizedPnlAtLastModification: wei(item.realizedPnl, 18, true),
    netFundingAtLastModification: wei(item.netFunding, 18, true),
    fillPriceAtLastInteraction: wei(item.lastPrice, 18, true),
  }));

  const { data, loading, error } = useQuery(POSITIONS_CONTRACT_QUERY, {
    variables: {
      openPositions,
    },
    context: {
      provider,
    },
    skip: !marketData?.futuresPositions,
    pollInterval: 300000,
  });

  const positionsData = data?.positionsFromContract
    ? data.positionsFromContract.map((position: PositionType) => ({
        ...position,
        accountType,
      }))
    : undefined;

  const sortedData: PositionType[] = positionsData && sortData(positionsData);

  return {
    data: sortedData,
    loading: loading || marketLoading,
    error: error ?? marketError,
  };
};

function sortData(data: PositionType[]) {
  return data.slice().sort((a, b) => {
    const aValue = Math.abs(a.size.toNumber()) * a.marketPrice.toNumber();
    const bValue = Math.abs(b.size.toNumber()) * b.marketPrice.toNumber();

    return bValue - aValue;
  });
}

export async function fetchPositions(
  positionData: SubgraphPositionData[],
  provider: InfuraProvider | JsonRpcProvider
): Promise<ContractData[]> {
  const perpsMarketDataContract = initPerpsMarketData(provider);
  const Multicall3Contract = initMulticall(provider);

  const positionDetailCalls = positionData.map(({ market }, i) => ({
    target: perpsMarketDataContract.address,
    callData: perpsMarketDataContract.interface.encodeFunctionData('positionDetailsForMarketKey', [
      market,
      positionData[i].walletAddress,
    ]),
  }));

  const marketDetailCalls = positionData.map(({ market }) => ({
    target: perpsMarketDataContract.address,
    callData: perpsMarketDataContract.interface.encodeFunctionData('marketDetailsForKey', [market]),
  }));

  const multiCallResponse = await Multicall3Contract.callStatic.aggregate(
    positionDetailCalls.concat(marketDetailCalls)
  );

  const positionsDetailsMulticallResult = multiCallResponse.returnData.slice(
    0,
    positionDetailCalls.length
  );

  const marketDetailMulticallResult = multiCallResponse.returnData.slice(
    positionDetailCalls.length
  );

  // The result from decodeFunctionResult isn't typed, we could use zod to validate but doing a type assertion for now..
  const dataToReturn: ContractData[] = positionsDetailsMulticallResult.map(
    (positionDetailsBytes: BytesLike, index: number) => {
      const positionDetails = perpsMarketDataContract.interface.decodeFunctionResult(
        'positionDetailsForMarketKey',
        positionDetailsBytes
      )[0];

      const marketDetailsBytes = marketDetailMulticallResult[index];
      const { fundingParameters, marketSizeDetails, priceDetails } =
        perpsMarketDataContract.interface.decodeFunctionResult(
          'marketDetailsForKey',
          marketDetailsBytes
        )[0];

      return {
        size: wei(positionDetails.position.size),
        liquidationPrice: wei(positionDetails.liquidationPrice),
        skew: wei(marketSizeDetails.marketSkew),
        skewScale: wei(fundingParameters.skewScale),
        indexPrice: wei(priceDetails.price),
        accessibleMargin: wei(positionDetails.accessibleMargin),
        remainingMargin: wei(positionDetails.remainingMargin),
        accruedFundingSinceLastModification: wei(positionDetails.accruedFunding),
      };
    }
  );

  return dataToReturn;
}
