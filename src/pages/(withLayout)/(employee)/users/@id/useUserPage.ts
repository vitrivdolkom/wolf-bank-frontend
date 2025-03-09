import { usePageContext } from 'vike-react/usePageContext';

import {
  useGetApiV1Application,
  useGetApiV1BankAccount,
  useGetApiV1Credit
} from '@/generated/api/requests';

export const useUserPage = () => {
  const pageContext = usePageContext();
  const userId = pageContext.routeParams.id;

  const getApiV1BankAccount = useGetApiV1BankAccount({ userId, limit: 10, offset: 0 });
  const getApiV1Credit = useGetApiV1Credit({ userId, limit: 10, offset: 0 });
  const getApiV1Application = useGetApiV1Application({ userId, page: 1, pageSize: 100 });

  return {
    data: {
      bankAccounts: getApiV1BankAccount.data ?? [],
      credits: getApiV1Credit.data ?? [],
      applications: getApiV1Application.data?.applications ?? []
    }
  };
};
