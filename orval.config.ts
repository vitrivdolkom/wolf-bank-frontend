export default {
  'wolf-bank-client': {
    input: { target: './swagger/api.yaml' },
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
