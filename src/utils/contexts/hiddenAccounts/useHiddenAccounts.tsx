import { useContext } from 'react';

import { HiddenAccountsContext } from './HiddenAccountsContext';

export const useHiddenAccounts = () => useContext(HiddenAccountsContext);
