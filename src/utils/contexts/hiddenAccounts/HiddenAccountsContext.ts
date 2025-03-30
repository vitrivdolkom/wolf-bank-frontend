import { createContext } from 'react';

export interface HiddenAccountsContextValue {
  hiddenAccounts: string[];
  refetch: () => void;
}

export const HiddenAccountsContext = createContext<HiddenAccountsContextValue>({
  hiddenAccounts: [],
  refetch: () => {}
});
