import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { navigate } from 'vike/client/router';

import { usePostApiV1PaymentBankAccountIdWithdraw } from '@/generated/api/requests';
import { ROUTES } from '@/utils/constants';
import { generateUUID } from '@/utils/helpers';

import type { SendTransferSchema } from './sendTransferSchema';

import { sendTransferSchema } from './sendTransferSchema';

export const useTransfersPage = () => {
  const sendTransferForm = useForm<SendTransferSchema>({
    resolver: yupResolver(sendTransferSchema),
    mode: 'onSubmit',
    defaultValues: {
      amount: ''
    }
  });

  const withdrawIdempotencyKey = useRef(generateUUID());
  const postApiV1PaymentBankAccountIdWithdraw = usePostApiV1PaymentBankAccountIdWithdraw({
    request: { headers: { 'Idempotency-Key': withdrawIdempotencyKey.current } }
  });

  const onSubmit = sendTransferForm.handleSubmit(async (values) => {
    await postApiV1PaymentBankAccountIdWithdraw.mutateAsync({
      bankAccountId: values.fromAccount,
      data: { amount: +values.amount, toBankAccountId: values.toAccount }
    });

    withdrawIdempotencyKey.current = generateUUID();
    toast.success('Перевод прошел успешно');
    await navigate(ROUTES.MAIN);
  });

  return { state: { loading: false }, functions: { onSubmit }, form: sendTransferForm };
};
