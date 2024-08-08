
import { useQuery } from '@apollo/client';
import { ORDERS_SETTLED_QUERY_V3 } from '../v3queries/ordersSettledV3'
import Wei, { wei } from '@synthetixio/wei';
import { OrderDirection, OrderSettledOrderBy } from '../v3/__generated__/graphql';
import { utils } from 'ethers';
import { useMarketV3 } from './useV3Markets';

export function useV3OrdersSettled() {
  const { loading, data, error } = useQuery(ORDERS_SETTLED_QUERY_V3, {
    variables: { 
        first: 100,
        orderBy: 'timestamp' as OrderSettledOrderBy,
        orderDirection: 'desc' as OrderDirection
    },
  });

  // add market name to orders endpoint
  const { v3MarketData } = useMarketV3();

    const orderData = data?.orderSettleds.map(item=>{
      const market = v3MarketData?.find(marketItem => marketItem.id === item.marketId);
      const marketName = market ? market.marketName : "";
      const marketSymbol = market ? market.marketSymbol : "";
      const marketPrice = market ? market.price : 0;
      const fillPrice = wei(item.fillPrice,18,true);
      const newSize = wei(item.newSize,18,true);
      const isLong = newSize.toNumber() > 0;
      const isOpen = newSize.toNumber() !== 0;
      const pnlMarketPrice = market ? wei(market.currentMarketPrice,18,true) : wei(1,18,true);
      const orderPnl = calculateV3OrderSettledPnl(pnlMarketPrice,fillPrice,newSize,isLong)
  
      return {
          id: item.id,
          timestamp: item.timestamp,
          marketName,
          marketSymbol,
          marketPrice,
          marketId: item.marketId,
          accountId: item.accountId,
          fillPrice: wei(item.fillPrice,18,true),
          accruedFunding: wei(item.accruedFunding,18,true),
          sizeDelta: wei(item.sizeDelta,18,true),
          newSize,
          isOpen,
          orderPnl,
          totalFees: wei(item.totalFees,18,true),
          referralFees: wei(item.referralFees,18,true),
          collectedFees: wei(item.collectedFees,18,true),
          settlementReward: wei(item.settlementReward,18,true),
          trackingCode:utils.parseBytes32String(item.trackingCode),
          settler: item.settler
      }
    })
  
  
    return {
      loading,
      data,
      error,
      orderData,
    }
  }
  



const calculateV3OrderSettledPnl = (
  marketPrice: Wei,
  fillPrice: Wei,
  size: Wei,
  isLong: boolean
) => {
  // current value - initial value / initial value (isLong? *1 : -1)
  
  const orderSettledPnl = isLong? marketPrice.sub(fillPrice).mul(size) : fillPrice.sub(marketPrice).mul(size);

  const orderSettledPercentage = orderSettledPnl.div(fillPrice);

  return {
    orderSettledPnl,
    orderSettledPercentage
  }
}





