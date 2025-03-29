import type { PageContext } from 'vike/types';

import { render } from 'vike/abort';

import { ROUTES } from '@/utils/constants';

export const guard = (pageContext: PageContext) => {
  if (!pageContext.user) {
    // throw render(ROUTES.USER_LOGIN);
  }
};
