import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { navigate } from 'vike/client/router';

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

  const idempotencyKey = useRef(generateUUID());

  const onSubmit = sendTransferForm.handleSubmit(async (values) => {
    console.log('#values', values);
    console.log('#idempotencyKey', idempotencyKey);
    // TODO add request
    await navigate(ROUTES.MAIN);
  });

  return { state: { loading: false }, functions: { onSubmit }, form: sendTransferForm };
};
