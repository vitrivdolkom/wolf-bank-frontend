import { useIsMutating } from '@tanstack/react-query';
import { useRef } from 'react';
import { toast } from 'sonner';

import { usePostApiV1BankAccount } from '@/generated/api/requests';
import { generateUUID } from '@/utils/helpers';

export const useMainPage = () => {
  const loading = !!useIsMutating();
  const idempotencyKey = useRef(generateUUID());
  const postApiV1BankAccount = usePostApiV1BankAccount({
    request: { headers: { 'Idempotency-Key': idempotencyKey.current } }
  });

  const onOpenBankAccountClick = async () => {
    await postApiV1BankAccount.mutateAsync();
    toast.success('Счет открыт');
  };

  return {
    state: { loading },
    functions: { onOpenBankAccountClick }
  };
};
