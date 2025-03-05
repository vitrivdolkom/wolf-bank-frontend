import type { PageContext } from 'vike/types';

import { render } from 'vike/abort';

import { ROUTES } from '@/utils/constants';

export const guard = (pageContext: PageContext) => {
  // const tokenCookieString = cookie?.split('; ').find((row) => row.startsWith('token='));
  // const tokenValue = tokenCookieString?.split('=')[1];

  // if (!tokenValue) {
  //   throw render(ROUTES.CLIENT_LOGIN);
  // }

  if (!pageContext.user) {
    throw render(ROUTES.CLIENT_LOGIN);
  }
};
