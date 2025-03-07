import { useRef } from 'react';
import { toast } from 'sonner';
import { useData } from 'vike-react/useData';
import { usePageContext } from 'vike-react/usePageContext';
import { reload } from 'vike/client/router';

import { BankAccountStatus, BankAccountType } from '@/generated/api/models';
import {
  useDeleteApiV1BankAccountBankAccountId,
  usePostApiV1PaymentAgreementIdCredit
} from '@/generated/api/requests';
import { IDS } from '@/utils/constants/ids';
import { generateUUID } from '@/utils/helpers';

import type { AccountPageData } from './+data';

export const useAccountPage = () => {
  const { bankAccount, transactionsHistory } = useData<AccountPageData>();
  const pageContext = usePageContext();

  const isClient = 'user' in pageContext && pageContext.user?.role === 'client';
  const isBankAccountClosable =
    isClient &&
    bankAccount.status !== BankAccountStatus.NUMBER_2 &&
    bankAccount.type === BankAccountType.NUMBER_1;
  const isCreditAccountRepayable =
    isClient &&
    bankAccount.status !== BankAccountStatus.NUMBER_2 &&
    bankAccount.type === BankAccountType.NUMBER_0;

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
      bankAccountId: bankAccount.bankAccountId!
    });
    toast.success('Счет закрыт');
    await reload();
  };

  const onRepayCredit = async () => {
    await postApiV1PaymentAgreementIdCredit.mutateAsync({
      agreementId: bankAccount.agreementId!
    });
    repayCreditIdempotencyKey.current = generateUUID();
    toast.success('Деньги списаны');
    await reload();
  };

  return {
    data: {
      bankAccount,
      transactionsHistory,
      isClient,
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
