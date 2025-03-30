import { useIsMutating } from '@tanstack/react-query';
import { useRef } from 'react';
import { toast } from 'sonner';

import { BankAccountStatus, BankAccountType } from '@/generated/api/models';
import {
  useGetApiV1Application,
  useGetApiV1BankAccount,
  useGetApiV1Credit,
  usePostApiV1BankAccount
} from '@/generated/api/requests';
import { generateUUID } from '@/utils/helpers';

export const useMainPage = () => {
  const loading = !!useIsMutating();
  const idempotencyKey = useRef(generateUUID());
  const postApiV1BankAccount = usePostApiV1BankAccount({
    request: { headers: { 'Idempotency-Key': idempotencyKey.current } }
  });

  const getApiV1Credit = useGetApiV1Credit({ limit: 10, offset: 0 });
  const getApiV1Application = useGetApiV1Application({ page: 1, pageSize: 20 });
  const getApiV1BankAccount = useGetApiV1BankAccount({ limit: 10, offset: 0 });

  const onOpenBankAccountClick = async () => {
    await postApiV1BankAccount.mutateAsync();
    toast.success('Счет открыт');
    getApiV1BankAccount.refetch();
  };

  return {
    data: {
      bankAccounts: getApiV1BankAccount.data ?? [
        // TODO remove
        {
          bankAccountId: '1',
          agreementId: '1',
          clientId: '1',
          balance: { scale: 2, unscaledValue: 10000 },
          type: BankAccountType.NUMBER_0,
          status: BankAccountStatus.NUMBER_0
        }
      ],
      credits: getApiV1Credit.data ?? [],
      applications: getApiV1Application.data?.applications ?? []
    },
    state: { loading },
    functions: { onOpenBankAccountClick }
  };
};
