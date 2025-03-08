import { usePageContext } from 'vike-react/usePageContext';

import type { ApplicationResponse, GetCreditResponse } from '@/generated/api/models';

import { useGetApiV1BankAccount } from '@/generated/api/requests';

export const useUserPage = () => {
  const pageContext = usePageContext();
  const userId = pageContext.routeParams.id;

  const getApiV1BankAccount = useGetApiV1BankAccount({ userId, limit: 10, offset: 0 });

  return {
    data: {
      bankAccounts: getApiV1BankAccount.data ?? [],
      credits: [] as GetCreditResponse[],
      applications: [] as ApplicationResponse[]
    }
  };
};
