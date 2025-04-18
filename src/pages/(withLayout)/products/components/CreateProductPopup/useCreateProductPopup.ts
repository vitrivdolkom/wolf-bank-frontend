import { yupResolver } from '@hookform/resolvers/yup';
import { useIsMutating } from '@tanstack/react-query';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { usePostApiV1Product } from '@/generated/api/requests';
import { generateUUID, getDecimalValue } from '@/utils/helpers';

import type { CreateProductSchema } from './createProductSchema';

import { createProductSchema } from './createProductSchema';

interface UseCreateProductPopupParams {
  onClose: () => void;
}

export const useCreateProductPopup = ({ onClose }: UseCreateProductPopupParams) => {
  const loading = !!useIsMutating();
  const createProductForm = useForm<CreateProductSchema>({
    resolver: yupResolver(createProductSchema),
    mode: 'onSubmit'
  });

  const idempotencyKey = useRef(generateUUID());

  const postApiV1Product = usePostApiV1Product({
    request: { headers: { 'Idempotency-Key': idempotencyKey.current } }
  });

  const onSubmit = createProductForm.handleSubmit(async (values) => {
    await postApiV1Product.mutateAsync({
      data: {
        code: values.productCode,
        minInterest: getDecimalValue(+values.minInterest),
        maxInterest: getDecimalValue(+values.maxInterest),
        minTerm: +values.minTerm,
        maxTerm: +values.maxTerm,
        minPrincipalAmount: getDecimalValue(+values.minPrincipalAmount),
        maxPrincipalAmount: getDecimalValue(+values.maxPrincipalAmount),
        minOriginationAmount: getDecimalValue(+values.minOriginationAmount),
        maxOriginationAmount: getDecimalValue(+values.maxOriginationAmount)
      }
    });

    onClose();
  });

  return {
    state: { loading },
    form: createProductForm,
    functions: { onSubmit }
  };
};
