import { usePageContext } from 'vike-react/usePageContext';

import { postHiddenAccounts } from '@/utils/api';
import { useHiddenAccounts } from '@/utils/contexts/hiddenAccounts';

export const useBankAccountCard = (bankAccountId: string) => {
  const pageContext = usePageContext();

  const hiddenAccountsContext = useHiddenAccounts();
  const isHiddenAccount = hiddenAccountsContext.hiddenAccounts.includes(bankAccountId);

  const onHideAccountClick = async () => {
    await postHiddenAccounts({
      accountId: bankAccountId,
      hide: !isHiddenAccount,
      userId: pageContext.user!.id
    });
  };

  return { state: { isHiddenAccount }, functions: { onHideAccountClick } };
};
