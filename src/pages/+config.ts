import type { Config } from 'vike/types';

import vikeReact from 'vike-react/config';

export default {
  title: 'Wolf bank',
  description: 'Wolf bank',
  extends: vikeReact,
  passToClient: ['user']
} satisfies Config;
