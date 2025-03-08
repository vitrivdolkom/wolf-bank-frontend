import { useIsMutating } from '@tanstack/react-query';
import { useRef } from 'react';
import { toast } from 'sonner';
import { reload } from 'vike/client/router';

import type { ApplicationResponse, GetCreditResponse } from '@/generated/api/models';

import { useGetApiV1BankAccount, usePostApiV1BankAccount } from '@/generated/api/requests';
import { generateUUID } from '@/utils/helpers';

export const useMainPage = () => {
  const loading = !!useIsMutating();
  const idempotencyKey = useRef(generateUUID());
  const postApiV1BankAccount = usePostApiV1BankAccount({
    request: { headers: { 'Idempotency-Key': idempotencyKey.current } }
  });

  // const credits = await getApiV1Credit({ limit: 10, offset: 0 });
  // const { applications } = await getApiV1Application({ page: 1, pageSize: 20 });
  const getApiV1BankAccount = useGetApiV1BankAccount({ limit: 10, offset: 0 });

  const onOpenBankAccountClick = async () => {
    await postApiV1BankAccount.mutateAsync();
    toast.success('Счет открыт');
    await reload();
  };

  return {
    data: {
      bankAccounts: getApiV1BankAccount.data ?? [],
      credits: [] as GetCreditResponse[],
      applications: [] as ApplicationResponse[]
    },
    state: { loading },
    functions: { onOpenBankAccountClick }
  };
};
