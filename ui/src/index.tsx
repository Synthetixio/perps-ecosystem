import { theme, Fonts } from '@synthetixio/v3-theme';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Account from './pages/Account';
import { Header } from './components/Header';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  PERPS_V2_DASHBOARD_GRAPH_URL,
  PERPS_V2_DASHBOARD_GRAPH_GOERLI_URL,
  DEFAULT_REQUEST_REFRESH_INTERVAL,
} from './utils/constants';
import { resolvers, typeDefs } from './queries/resolved';
import { Dashboard, Actions, Markets, Positions, Liquidations } from './pages';
import { isStaging } from './utils/isStaging';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EthersProvider } from './utils/ProviderContext';
import { PythRealtimePrices } from './utils/pyth';
import { V3BaseMarketsPage } from './v3_pages/V3BaseMarketsPage';
import { V3BasePositionsPage } from './v3_pages/V3BasePositionsPage';
import { V3BaseTradesPage } from './v3_pages/V3BaseTradesPage';
import { V3BaseLiquidationsPage } from './v3_pages/V3BaseLiquidationsPage';
import { V3AccountPage } from './v3_pages/V3AccountPage';
import V3BaseDashboard from './v3_pages/V3BaseDashboard';

const client = new ApolloClient({
  uri: isStaging ? PERPS_V2_DASHBOARD_GRAPH_GOERLI_URL : PERPS_V2_DASHBOARD_GRAPH_URL,
  cache: new InMemoryCache(),
  resolvers,
  typeDefs,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'all',
      refetchInterval: DEFAULT_REQUEST_REFRESH_INTERVAL,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Dashboard />
      </>
    ),
  },
  {
    path: '/actions',
    element: (
      <>
        <Header />
        <Actions />
      </>
    ),
  },
  {
    path: ':walletAddress',
    element: (
      <>
        <Header />
        <Account />
      </>
    ),
  },
  {
    path: '/markets',
    element: (
      <>
        <Header />
        <Markets />
      </>
    ),
  },
  {
    path: '/positions',
    element: (
      <>
        <Header />
        <Positions />
      </>
    ),
  },
  {
    path: '/liquidations',
    element: (
      <>
        <Header />
        <Liquidations />
      </>
    ),
  },
  {
    path: '/v3/markets',
    element: (
      <>
        <Header />
        <V3BaseMarketsPage />
      </>
    ),
  },
  {
    path: '/v3/trades',
    element: (
      <>
        <Header />
        <V3BaseTradesPage />
      </>
    ),
  },
  {
    path: '/v3/positions',
    element: (
      <>
        <Header />
        <V3BasePositionsPage />
      </>
    ),
  },
  {
    path: '/v3/liquidations',
    element: (
      <>
        <Header />
        <V3BaseLiquidationsPage />
      </>
    ),
  },
  {
    path: '/v3/account/:accountId',
    element: (
      <>
        <Header />
        <V3AccountPage />
      </>
    ),
  },
  {
    path: '/v3/dashboard',
    element: (
      <>
        <Header />
        <V3BaseDashboard />
      </>
    ),
  },
]);

const container = document.querySelector('#app');

const root = createRoot(container as HTMLElement);

const customTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        bg: 'navy.900',
      },
    },
  },
  breakpoints: {
    ...theme.breakpoints,
    c900: '950px',
  },
});

root.render(
  <PythRealtimePrices>
    <EthersProvider>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={customTheme}>
            <Fonts />
            <RouterProvider router={router} />
          </ChakraProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </EthersProvider>
  </PythRealtimePrices>
);
