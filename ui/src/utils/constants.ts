export const PERPS_V2_DASHBOARD_GRAPH_GOERLI_URL =
  'https://api.thegraph.com/subgraphs/name/synthetix-perps/perps-op-goerli';
export const PERPS_V2_DASHBOARD_GRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/synthetix-perps/perps';

export const KWENTA_SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/kwenta/optimism-perps';
export const POLYNOMIAL_SUBGRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/synthetix-perps/polynomial';

export const TRADE_ON_KWENTA_URL = 'https://kwenta.eth.limo';
export const TRADE_ON_POLYNOMIAL_URL = 'https://trade.polynomial.fi';
export const TRADE_ON_INFINEX_URL = 'https://infinex.io';

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
