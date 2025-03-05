import { yupResolver } from '@hookform/resolvers/yup';
import { useIsMutating } from '@tanstack/react-query';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { usePostApiV1Application, usePostApiV1ProductCalculate } from '@/generated/api/requests';
import { formatDecimal, generateUUID, toDecimal, toDecimalValue } from '@/utils/helpers';

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

  const onGetAvailableProductClick = () => {
    console.log(
      '#createApplicationForm.getValues("amount")',
      toDecimalValue(+createApplicationForm.getValues('amount'))
    );
    postApiV1ProductCalculate.mutate({
      data: {
        amount: toDecimalValue(+createApplicationForm.getValues('amount')),
        term: +createApplicationForm.getValues('term')
      }
    });
  };

  const onSubmit = createApplicationForm.handleSubmit(async (values) => {
    console.log('#values', values);
    if (!postApiV1ProductCalculate.data) return;

    postApiV1Application.mutate({
      data: {
        amount: toDecimal(+values.amount),
        term: +values.term,
        interest: toDecimal(+formatDecimal(postApiV1ProductCalculate.data.interest!))
      }
    });
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
