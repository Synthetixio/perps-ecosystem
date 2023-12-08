import { useQuery } from '@apollo/client';
import { type FuturesPosition_OrderBy, type OrderDirection } from '../__generated__/graphql';
import { wei } from '@synthetixio/wei';
import { useMemo } from 'react';
import { useWalletAddress } from './useWalletAddress';
import { POSITIONS_QUERY_MARKET } from '../queries/positions';
import { format } from 'date-fns';
import { parseCurrencyKey } from '../components/CurrencyIcon';
import { utils } from 'ethers';
import { getColorFromText } from '../utils/css';

export interface ProcessedPnlData {
  pnl: number;
  totalPnl: number;
  openTimestamp: string;
  closeTimestamp: string;
  date: string;
  market: string;
  marketName: string;
  color: string;
  long: boolean;
  txHash: string;
  leverage: number;
  positionId: string;
  walletAddress: string;
  trades: string;
  liquidated: boolean;
  funding: number;
}

export interface ChartPnlData {
  day: string;
  dailyTotalPnl: number;
  totalPnl: number;
  label?: string;
  labelType?: 'M' | 'Y' | 'ALL';
  positions: Record<string, ProcessedPnlData>;
  [positionId: string]: any;
}

type TradeNum = number;

export const useTraderPnlStats = (tradeNum: TradeNum) => {
  const { allAddresses } = useWalletAddress();

  const queryVariables = useMemo(
    () => ({
      first: tradeNum ?? 1000,
      where: {
        isOpen: false,
        trader_in: [...allAddresses],
      },
      orderBy: 'closeTimestamp' as FuturesPosition_OrderBy,
      orderDirection: 'desc' as OrderDirection,
    }),
    [allAddresses, tradeNum]
  );

  const {
    data: traderPnlData,
    loading: traderPnlQueryLoading,
    error: traderPnlQueryError,
  } = useQuery(POSITIONS_QUERY_MARKET, {
    variables: queryVariables,
    pollInterval: 10000,
  });

  const processedData = useMemo(() => {
    if (!traderPnlData || traderPnlQueryLoading || traderPnlQueryError) {
      return [];
    }
    const sortedAndFilteredData = [...traderPnlData.futuresPositions]
      .filter((item) => !item.isOpen)
      .sort((a, b) => parseInt(a.closeTimestamp as string) - parseInt(b.closeTimestamp as string))
      .map((item) => {
        const formatCloseTimestamp = format(
          new Date(parseInt(item.closeTimestamp as string) * 1000),
          'yyyy-MM-dd'
        );

        return {
          pnl: wei(item.realizedPnl, 18, true).toNumber(),
          totalPnl: 0,
          closeTimestamp: item.closeTimestamp as string,
          openTimestamp: item.openTimestamp,
          date: formatCloseTimestamp,
          market: item.market.asset,
          marketName: '',
          color: '',
          long: item.long,
          txHash: item.txHash,
          leverage: wei(item.leverage, 18, true).toNumber(),
          positionId: item.id,
          walletAddress: item.trader.id,
          trades: item.trades,
          liquidated: item.isLiquidated,
          funding: wei(item.netFunding, 18, true).toNumber(),
        } satisfies ProcessedPnlData;
      })
      .reduce((acc: ProcessedPnlData[], item) => {
        const runningTotalPnl = acc.length > 0 ? acc[acc.length - 1].totalPnl + item.pnl : item.pnl;

        acc.push({
          ...item,
          totalPnl: runningTotalPnl,
        });
        return acc;
      }, []);
    return formatData(sortedAndFilteredData, 'M');
  }, [traderPnlData]);

  const positions = useMemo(
    () =>
      processedData?.reduce((acc: ProcessedPnlData[], dayData) => {
        const dayPositions = Object.values(dayData.positions);
        acc.push(...dayPositions);
        return acc;
      }, []) ?? [],
    [processedData]
  );
  const markets = useMemo(() => getUniqueMarkets(positions), [positions]);

  return {
    processedData,
    markets,
    traderPnlQueryError,
    traderPnlQueryLoading,
  };
};

function formatData(data?: ProcessedPnlData[], queryInterval?: 'M' | 'Y') {
  if (typeof data === 'undefined') return data;

  const transformedData: Record<string, ChartPnlData> = data.reduce<Record<string, ChartPnlData>>(
    (prev, item) => {
      const { date, positionId, market, totalPnl, closeTimestamp } = item;

      if (!prev[date]) {
        prev[date] = {
          day: date,
          dailyTotalPnl: 0,
          totalPnl: 0,
          label: format(new Date(parseInt(closeTimestamp) * 1000), 'dd/MM'),
          labelType: queryInterval,
          positions: {},
        } satisfies ChartPnlData;
      }

      const marketName = parseCurrencyKey(utils.parseBytes32String(market));
      prev[date].positions[positionId] = {
        ...item,
        marketName,
        color: getColorFromText(marketName),
      };
      prev[date].dailyTotalPnl = Object.values(prev[date].positions).reduce(
        (total, position) => total + position.pnl,
        0
      );
      prev[date].totalPnl = totalPnl;

      return prev;
    },
    {}
  );

  return Object.values(transformedData);
}

function getUniqueMarkets(data?: ProcessedPnlData[]): string[] {
  if (!data) return [];
  return data.reduce((uniqueMarkets: string[], item) => {
    if (!uniqueMarkets.includes(item.marketName)) {
      uniqueMarkets.push(item.marketName);
    }
    return uniqueMarkets;
  }, []);
}
