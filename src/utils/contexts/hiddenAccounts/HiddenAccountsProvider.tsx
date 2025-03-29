import type { ReactNode } from 'react';

import { useState } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

import { getHiddenAccounts } from '@/utils/api';
import { useDidUpdate } from '@/utils/hooks';

import type { HiddenAccountsContextValue } from './HiddenAccountsContext';

import { HiddenAccountsContext } from './HiddenAccountsContext';

interface HiddenAccountsProviderProps {
  children: ReactNode;
}

export const HiddenAccountsProvider = ({ children }: HiddenAccountsProviderProps) => {
  const pageContext = usePageContext();
  const [hiddenAccounts, setHiddenAccounts] = useState<
    HiddenAccountsContextValue['hiddenAccounts']
  >([]);

  useDidUpdate(() => {
    if (!pageContext.user) return;

    const requestHiddenAccounts = async () => {
      const getHiddenAccountsResponse = await getHiddenAccounts({ userId: pageContext.user!.id });

      setHiddenAccounts(getHiddenAccountsResponse.hiddenAccounts);
    };

    requestHiddenAccounts();
  }, [pageContext.user?.id]);

  return <HiddenAccountsContext value={{ hiddenAccounts }}>{children}</HiddenAccountsContext>;
};
