import type { ReactNode } from 'react';

import { useEffect, useMemo, useState } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

import { getHiddenAccounts } from '@/utils/api';

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

  const requestHiddenAccounts = async () => {
    if (!pageContext.user?.id) return;

    const getHiddenAccountsResponse = await getHiddenAccounts({ userId: pageContext.user!.id });

    setHiddenAccounts(getHiddenAccountsResponse.hiddenAccounts);
  };

  useEffect(() => {
    requestHiddenAccounts();
  }, [pageContext.user?.id]);

  const value = useMemo(
    () => ({ hiddenAccounts, refetch: requestHiddenAccounts }),
    [hiddenAccounts]
  );

  return <HiddenAccountsContext value={value}>{children}</HiddenAccountsContext>;
};
