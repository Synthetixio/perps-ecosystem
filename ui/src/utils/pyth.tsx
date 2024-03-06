import { z } from 'zod';
import { type ReactNode, useEffect, createContext, useState } from 'react';
import { isStaging } from './isStaging';
import { EvmPriceServiceConnection } from '@pythnetwork/pyth-evm-js';
import { type MarketsByKey } from '../types';

export const pyth = new EvmPriceServiceConnection('https://synthetixab.rpc.p2p.world');

const OffchainFeedSchema = z.array(
  z.object({
    kind: z.literal('pyth'),
    oracle: z.string(),
    asset: z.string(),
    feedId: z.string(),
  })
);

export type PythConfigByMarketKey = Record<
  string,
  {
    key: string;
    pythId: string;
    asset: string;
  }
>;

const formatAssetToPerpName = (x: string) => {
  if (x === 'sETH' || x === 'sBTC') {
    return `${x}PERP`;
  }
  return `s${x}PERP`;
};

export const getMarketsPythConfig = async () => {
  const network = isStaging ? 'goerli-ovm' : 'mainnet-ovm';
  const url = `https://raw.githubusercontent.com/Synthetixio/synthetix/master/publish/deployed/${network}/offchain-feeds.json`;

  return await fetch(url)
    .then(async (response) => await response.json())
    .then((json) => {
      const parsedJson = OffchainFeedSchema.parse(json);
      return parsedJson
        .map(({ feedId, asset }) => {
          const key = formatAssetToPerpName(asset);
          return {
            key,
            pythId: feedId,
            asset,
          };
        })
        .reduce((acc: MarketsByKey, val) => {
          acc[val.key] = val;
          return acc;
        }, {});
    });
};

export interface PythPrice {
  price: string;
  conf: string;
  expo: number;
  publishTime: number;
}

export const RealtimeContext = createContext<{ arePricesReady: boolean }>({
  arePricesReady: false,
});

export const prices: Record<string, PythPrice> = {};

export const PythRealtimePrices = ({ children }: { children: ReactNode }) => {
  const [arePricesReady, setPricesReady] = useState(false);

  useEffect(() => {
    (async () => {
      const pythConfigByMarketKey = await getMarketsPythConfig();
      const pythIds = Object.values(pythConfigByMarketKey).map((x) => x.pythId);

      // Initial cache hit
      const initialCache = await pyth.getLatestPriceFeeds(pythIds);
      initialCache?.forEach((price) => {
        const { id } = price;
        const priceData = price.getPriceUnchecked();

        if (priceData) {
          prices[id] = priceData;
        }
      });

      setPricesReady(true);

      await pyth.subscribePriceFeedUpdates(pythIds, (price) => {
        const { id } = price;
        const priceData = price.getPriceUnchecked();

        if (priceData) {
          prices[id] = priceData;
        }
      });
    })();

    return () => {
      // Clean up WebSocket connection when the component unmounts
      (() => {
        pyth.unsubscribePriceFeedUpdates(Object.keys(prices));
      })();
    };
  }, []);

  return <RealtimeContext.Provider value={{ arePricesReady }}>{children}</RealtimeContext.Provider>;
};
