import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { PERPS_V3_BASE } from '../utils/constants';

const v3BaseLink = new HttpLink({
  uri: PERPS_V3_BASE,
});

export const V3BaseClient = new ApolloClient({
  link: v3BaseLink,
  cache: new InMemoryCache(),
});
