import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { reload } from 'vike/client/router';

import type { BankAccountDto } from '@/generated/api/models';

import {
  usePostApiV1PaymentBankAccountIdDeposit,
  usePostApiV1PaymentBankAccountIdWithdraw
} from '@/generated/api/requests';
import { formatDecimal, generateUUID } from '@/utils/helpers';

interface UseBankAccountActionsParams {
  bankAccount: BankAccountDto;
}

export const useBankAccountActions = ({ bankAccount }: UseBankAccountActionsParams) => {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const depositIdempotencyKey = useRef(generateUUID());
  const withdrawIdempotencyKey = useRef(generateUUID());

  const postApiV1PaymentBankAccountIdDeposit = usePostApiV1PaymentBankAccountIdDeposit({
    request: { headers: { 'Idempotency-Key': depositIdempotencyKey.current } }
  });
  const postApiV1PaymentBankAccountIdWithdraw = usePostApiV1PaymentBankAccountIdWithdraw({
    request: { headers: { 'Idempotency-Key': withdrawIdempotencyKey.current } }
  });

  const onDeposit = async () => {
    // const decimalValue = toDecimalValue(+depositAmount);

    await postApiV1PaymentBankAccountIdDeposit.mutateAsync({
      bankAccountId: bankAccount.bankAccountId!,
      data: { amount: +depositAmount }
    });
    depositIdempotencyKey.current = generateUUID();
    toast.success('Внесение средств прошло успешно');
    setDepositAmount('');
    await reload();
  };

  const onWithdraw = async () => {
    // const decimalValue = toDecimalValue(+withdrawAmount);

    await postApiV1PaymentBankAccountIdWithdraw.mutateAsync({
      bankAccountId: bankAccount.bankAccountId!,
      data: { amount: +withdrawAmount }
    });
    withdrawIdempotencyKey.current = generateUUID();
    toast.success('Снятие средств прошло успешно');
    setWithdrawAmount('');
    await reload();
  };

  const maxWithdrawAmount = Number(formatDecimal(bankAccount.balance).replace(/[^\d.-]/g, ''));

  return {
    state: {
      depositAmount,
      withdrawAmount,
      maxWithdrawAmount
    },
    functions: {
      setDepositAmount,
      setWithdrawAmount,
      onDeposit,
      onWithdraw
    }
  };
};
