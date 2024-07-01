import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { PERPS_V3_DASHBOARD_GRAPH_URL } from '../utils/constants';

const v3Link = new HttpLink({
  uri: PERPS_V3_DASHBOARD_GRAPH_URL,
});

export const V3Client = new ApolloClient({
  link: v3Link,
  cache: new InMemoryCache(),
});
