export const PERPS_V2_DASHBOARD_GRAPH_GOERLI_URL =
  'https://api.thegraph.com/subgraphs/name/synthetix-perps/perps-op-goerli';
export const PERPS_V2_DASHBOARD_GRAPH_URL =
  'https://gateway-arbitrum.network.thegraph.com/api/592b3ff36de6c725554b9c252c275192/subgraphs/id/82hQpNuzNB5i5xcFKhk6ZiKcacTWvPeovAkxrKsm8dfM';

export const KWENTA_SUBGRAPH_URL = 'https://gateway-arbitrum.network.thegraph.com/api/592b3ff36de6c725554b9c252c275192/subgraphs/id/7RJxwa4R6btrkWDDSV7FL42GKeGSEtXi4CWSaXYwcn7c';
export const POLYNOMIAL_SUBGRAPH_URL =
  'https://gateway-arbitrum.network.thegraph.com/api/592b3ff36de6c725554b9c252c275192/subgraphs/id/HNGcT3yUnJKQEoCGirzTECMwrRZeVyPLN75zusTCSziS';

export const TRADE_ON_KWENTA_URL = 'https://kwenta.eth.limo';
export const TRADE_ON_POLYNOMIAL_URL = 'https://trade.polynomial.fi';
export const TRADE_ON_INFINEX_URL = 'https://infinex.xyz';
export const TRADE_ON_TLX_URL = 'https://tlx.fi';
export const TRADE_ON_CYBERDEX_URL = 'https://cyberdex.xyz';
export const VIEW_ON_COPIN_URL = 'https://app.copin.io';

export const ethercanLink = (address: string) => `https://etherscan.io/address/${address}`;

export const optimisticEthercanLink = (address: string) =>
  `https://optimistic.etherscan.io/address/${address}`;

export const optimisticEthercanTx = (txHash: string) =>
  `https://optimistic.etherscan.io/tx/${txHash}`;

export const infuraId = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID;
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const DEFAULT_REQUEST_REFRESH_INTERVAL = 300000; // 5min

export const QUERY_KEYS = {
  GET_TVL: 'GET_TVL',
  GET_MINT_BURN: 'GET_MINT_BURN',
  GET_DELEGATIONS: 'GET_DELEGATIONS',
  GET_TVL_PROTOCOLS: 'GET_TVL_PROTOCOLS',
  GET_TVL_SNX: 'GET_TVL_SNX',
  GET_SNX_SUPPLY: 'GET_SNX_SUPPLY',
  GET_DAILY_DELEGATIONS: 'GET_DAILY_DELEGATIONS',
  GET_SYNTHETIX_DEBT_SHARE: 'GET_SYNTHETIX_DEBT_SHARE',
  GET_REWARD_ESCROW_V2: 'GET_REWARD_ESCROW_V2',
  GET_SYNTHETIX: 'GET_SYNTHETIX',
  GET_DEBT_DATA: 'GET_DEBT_DATA',
  GET_TOKEN_PRICES: 'GET_TOKEN_PRICES',
  GET_SUSD_BALANCE: 'GET_SUSD_BALANCE',
  GET_PROXY_ERC20_SUSD: 'GET_PROXY_ERC20_SUSD',
};
