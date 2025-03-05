import { yupResolver } from '@hookform/resolvers/yup';
import { useIsMutating } from '@tanstack/react-query';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { usePostApiV1Product } from '@/generated/api/requests';
import { generateUUID, toDecimalValue } from '@/utils/helpers';

import type { CreateProductSchema } from './createProductSchema';

import { createProductSchema } from './createProductSchema';

export const useCreateProductPopup = () => {
  const loading = !!useIsMutating();
  const createProductForm = useForm<CreateProductSchema>({
    resolver: yupResolver(createProductSchema),
    mode: 'onSubmit'
  });

  const idempotencyKey = useRef(generateUUID());

  const postApiV1Product = usePostApiV1Product({
    request: { headers: { 'Idempotency-Key': idempotencyKey.current } }
  });

  const onSubmit = createProductForm.handleSubmit((values) => {
    console.log('#values', values);
    postApiV1Product.mutate({
      data: {
        code: values.productCode,
        minInterest: toDecimalValue(+values.minInterest),
        maxInterest: toDecimalValue(+values.maxInterest),
        minTerm: +values.minTerm,
        maxTerm: +values.maxTerm,
        minPrincipalAmount: toDecimalValue(+values.minPrincipalAmount),
        maxPrincipalAmount: toDecimalValue(+values.maxPrincipalAmount),
        minOriginationAmount: toDecimalValue(+values.minOriginationAmount),
        maxOriginationAmount: toDecimalValue(+values.maxOriginationAmount)
      }
    });
  });

  return {
    state: { loading },
    form: createProductForm,
    functions: { onSubmit }
  };
};
