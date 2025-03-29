import { createContext } from 'react';

export interface HiddenAccountsContextValue {
  hiddenAccounts: string[];
}

export const HiddenAccountsContext = createContext<HiddenAccountsContextValue>({
  hiddenAccounts: []
});
