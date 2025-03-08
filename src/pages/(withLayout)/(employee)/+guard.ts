import type { PageContext } from 'vike/types';

import { render } from 'vike/abort';

import { ROUTES } from '@/utils/constants';

export const guard = (pageContext: PageContext) => {
  if (pageContext.user?.role !== 'employee') {
    throw render(ROUTES.EMPLOYEE_LOGIN);
  }
};
