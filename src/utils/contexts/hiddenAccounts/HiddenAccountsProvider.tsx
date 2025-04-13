import type { ReactNode } from 'react';

import { useEffect, useMemo, useState } from 'react';

import { getHiddenAccounts } from '@/utils/api';

import type { HiddenAccountsContextValue } from './HiddenAccountsContext';

import { useProfile } from '../profile';
import { HiddenAccountsContext } from './HiddenAccountsContext';

interface HiddenAccountsProviderProps {
  children: ReactNode;
}

export const HiddenAccountsProvider = ({ children }: HiddenAccountsProviderProps) => {
  const profileContext = useProfile();
  const [hiddenAccounts, setHiddenAccounts] = useState<
    HiddenAccountsContextValue['hiddenAccounts']
  >([]);

  const requestHiddenAccounts = async () => {
    if (!profileContext.profile?.userId) return;

    const getHiddenAccountsResponse = await getHiddenAccounts({
      userId: profileContext.profile!.userId
    });

    setHiddenAccounts(getHiddenAccountsResponse.data.hiddenAccounts);
  };

  useEffect(() => {
    requestHiddenAccounts();
  }, [profileContext.profile?.userId]);

  const value = useMemo(
    () => ({ hiddenAccounts, refetch: requestHiddenAccounts }),
    [hiddenAccounts]
  );

  return <HiddenAccountsContext value={value}>{children}</HiddenAccountsContext>;
};
