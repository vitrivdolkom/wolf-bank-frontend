import { yupResolver } from '@hookform/resolvers/yup';
import { useIsMutating } from '@tanstack/react-query';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { navigate } from 'vike/client/router';

import { ApplicationStatus } from '@/generated/api/models';
import { usePostApiV1Application, usePostApiV1ProductCalculate } from '@/generated/api/requests';
import { ROUTES } from '@/utils/constants';
import { generateUUID, getDecimalValue } from '@/utils/helpers';

import { createApplicationSchema } from './createApplicationSchema';

const DEFAULT_PRODUCT_VERSION = '1.0';

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
        productCode: postApiV1ProductCalculate.data.code,
        productVersion: DEFAULT_PRODUCT_VERSION,
        originationAmount: postApiV1ProductCalculate.data.originationAmount,
        disbursementAmount: getDecimalValue(+values.amount),
        // TODO: add to bank account id
        toBankAccountId: values.bankAccountId,
        status: ApplicationStatus.NUMBER_1,
        interest: postApiV1ProductCalculate.data.interest,
        term: postApiV1ProductCalculate.data.term
      }
    });

    await navigate(ROUTES.MAIN);
  });

  return {
    state: {
      availableProduct: postApiV1ProductCalculate.data,
      loading,
      enableGetAvailableProduct:
        !!createApplicationForm.watch('amount').length &&
        !!createApplicationForm.watch('term').length
    },
    functions: { onGetAvailableProductClick, onSubmit },
    form: createApplicationForm
  };
};
