import { yupResolver } from '@hookform/resolvers/yup';
import { useIsMutating } from '@tanstack/react-query';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { navigate } from 'vike/client/router';

import { usePostApiV1Application, usePostApiV1ProductCalculate } from '@/generated/api/requests';
import { ROUTES } from '@/utils/constants';
import { generateUUID, getDecimalValue } from '@/utils/helpers';

import { createApplicationSchema } from './createApplicationSchema';

export const useCreateApplicationForm = () => {
  const loading = !!useIsMutating();
  const idempotencyKey = useRef(generateUUID());
  const postApiV1ProductCalculate = usePostApiV1ProductCalculate({
    request: { headers: { 'Idempotency-Key': idempotencyKey.current } }
  });
  const postApiV1Application = usePostApiV1Application({
    request: { headers: { 'Idempotency-Key': idempotencyKey.current } }
  });

  const createApplicationForm = useForm({
    resolver: yupResolver(createApplicationSchema),
    defaultValues: {
      amount: '',
      term: ''
    },
    mode: 'onSubmit'
  });

  const onGetAvailableProductClick = async () => {
    await postApiV1ProductCalculate.mutateAsync({
      data: {
        amount: getDecimalValue(+createApplicationForm.getValues('amount')),
        term: +createApplicationForm.getValues('term')
      }
    });

    idempotencyKey.current = generateUUID();
  };

  const onSubmit = createApplicationForm.handleSubmit(async (values) => {
    if (!postApiV1ProductCalculate.data) return;

    await postApiV1Application.mutateAsync({
      data: {
        amount: getDecimalValue(+values.amount),
        term: +values.term,
        interest: postApiV1ProductCalculate.data.interest
      }
    });

    await navigate(ROUTES.MAIN);
  });

  return {
    state: {
      availableProduct: postApiV1ProductCalculate.data,
      loading,
      enableGetAvailableProduct:
        !!createApplicationForm.watch('amount') && !!createApplicationForm.watch('term')
    },
    functions: { onGetAvailableProductClick, onSubmit },
    form: createApplicationForm
  };
};
