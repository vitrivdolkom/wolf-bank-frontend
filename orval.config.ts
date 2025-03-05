export default {
  'wolf-bank-client': {
    input: { target: './swagger/productEngine.yaml' },
    output: {
      mode: 'tags-split',
      schemas: './generated/api/models',
      client: 'react-query',
      target: './generated/api/requests',
      prettier: true,
      override: {
        mutator: {
          path: './src/utils/api/instance.ts',
          name: 'getInstance'
        }
      }
    }
  }
};
