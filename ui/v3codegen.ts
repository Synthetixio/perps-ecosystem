import { CodegenConfig } from '@graphql-codegen/cli';
import {
  PERPS_V3_BASE
} from './src/utils/constants';

const config: CodegenConfig = {
  schema:   PERPS_V3_BASE,
  documents: ['src/v3_baseQueries/**/*.ts'],
  generates: {
    './src/v3_perp/__generated__/': {
      preset: 'client',
      plugins: [],
      config: {
        scalars: {
          Bytes: 'string',
          BigInt: 'string',
          BigDecimal: 'string',
        },
        namingConvention: {
          enumValues: 'keep',
          transformUnderscore: true,
          typesPrefix: 'v3'
        },
        arrayType: 'array',
        avoidOptionals: {
          field: true, 
          inputValue: false, 
        },
        useTypeImports: true,
      },
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
