import { useRef } from 'react';
import { toast } from 'sonner';
import { usePageContext } from 'vike-react/usePageContext';

import { BankAccountStatus, BankAccountType } from '@/generated/api/models';
import {
  useDeleteApiV1BankAccountBankAccountId,
  useGetApiV1BankAccountBankAccountId,
  useGetApiV1BankAccountBankAccountIdHistory,
  usePostApiV1PaymentAgreementIdCredit
} from '@/generated/api/requests';
import { IDS } from '@/utils/constants/ids';
import { useProfile } from '@/utils/contexts/profile';
import { generateUUID } from '@/utils/helpers';

export const useAccountPage = () => {
  const pageContext = usePageContext();
  const profileContext = useProfile();
  const bankAccountId = pageContext.routeParams.id;
  const getApiV1BankAccountBankAccountId = useGetApiV1BankAccountBankAccountId(bankAccountId);
  const getApiV1BankAccountBankAccountIdHistory =
    useGetApiV1BankAccountBankAccountIdHistory(bankAccountId);
  const transactionsHistory = getApiV1BankAccountBankAccountIdHistory.data ?? [];
  const bankAccount = getApiV1BankAccountBankAccountId.data;

  const isUser = profileContext.profile?.role === 'USER';
  const isBankAccountClosable =
    isUser &&
    bankAccount?.status !== BankAccountStatus.NUMBER_2 &&
    bankAccount?.type === BankAccountType.NUMBER_1;
  const isCreditAccountRepayable =
    isUser &&
    bankAccount?.status !== BankAccountStatus.NUMBER_2 &&
    bankAccount?.type === BankAccountType.NUMBER_0;

  const repayCreditIdempotencyKey = useRef(generateUUID());

  const postApiV1PaymentAgreementIdCredit = usePostApiV1PaymentAgreementIdCredit({
    request: { headers: { 'Idempotency-Key': repayCreditIdempotencyKey.current } }
  });
  const deleteApiV1BankAccountBankAccountId = useDeleteApiV1BankAccountBankAccountId();

  const onCloseAccountPopupOpen = () => {
    const popup = document.getElementById(IDS.POPUPS.CLOSE_ACCOUNT) as HTMLDialogElement;
    if (popup) {
      popup.showModal();
    }
  };

  const onRepayCreditPopupOpen = () => {
    const popup = document.getElementById(IDS.POPUPS.REPAY_CREDIT) as HTMLDialogElement;
    if (popup) {
      popup.showModal();
    }
  };

  const onCloseAccount = async () => {
    await deleteApiV1BankAccountBankAccountId.mutateAsync({
      bankAccountId: bankAccount!.bankAccountId!
    });
    toast.success('Счет закрыт');
    getApiV1BankAccountBankAccountId.refetch();
  };

  const onRepayCredit = async () => {
    await postApiV1PaymentAgreementIdCredit.mutateAsync({
      agreementId: bankAccount!.agreementId!
    });
    repayCreditIdempotencyKey.current = generateUUID();
    toast.success('Деньги списаны');
    getApiV1BankAccountBankAccountId.refetch();
  };

  return {
    data: {
      bankAccount,
      transactionsHistory,
      isUser,
      isBankAccountClosable,
      isCreditAccountRepayable
    },
    functions: {
      onCloseAccountPopupOpen,
      onRepayCreditPopupOpen,
      onCloseAccount,
      onRepayCredit
    }
  };
};
