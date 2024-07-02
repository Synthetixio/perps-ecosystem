

import { ApolloProvider as V3Provider } from '@apollo/client';
import { V3Client } from '../apollo/v3client';
import { V3OrdersTable } from '../v3components/orders/v3OrdersTable'

export const V3OrdersPage = () => {

  return (
    
    <V3Provider client={V3Client}>
     <V3OrdersTable />
    </V3Provider>
    
  );
};





