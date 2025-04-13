import { postHiddenAccounts } from '@/utils/api';
import { useHiddenAccounts } from '@/utils/contexts/hiddenAccounts';
import { useProfile } from '@/utils/contexts/profile';

export const useBankAccountCard = (bankAccountId: string) => {
  const profileContext = useProfile();

  const hiddenAccountsContext = useHiddenAccounts();
  const isHiddenAccount = hiddenAccountsContext.hiddenAccounts.includes(bankAccountId);

  const onHideAccountClick = async () => {
    await postHiddenAccounts({
      accountId: bankAccountId,
      hide: !isHiddenAccount,
      userId: profileContext.profile!.userId
    });

    hiddenAccountsContext.refetch();
  };

  return { state: { isHiddenAccount }, functions: { onHideAccountClick } };
};
