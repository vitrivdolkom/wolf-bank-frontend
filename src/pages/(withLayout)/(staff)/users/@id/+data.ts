import type { PageContextServer } from 'vike/types';

import type {
  ApplicationResponse,
  BankAccountDto,
  GetCreditResponse
} from '@/generated/api/models';

import { getApiV1Application, getApiV1BankAccount, getApiV1Credit } from '@/generated/api/requests';

export interface UserPageData {
  applications: readonly ApplicationResponse[];
  bankAccounts: readonly BankAccountDto[];
  credits: readonly GetCreditResponse[];
}

export default async function data(pageContext: PageContextServer): Promise<UserPageData> {
  const userId = pageContext.routeParams.id;

  const bankAccounts = await getApiV1BankAccount({ userId, limit: 10, offset: 0 });
  // const credits = await getApiV1Credit({ userId, limit: 10, offset: 0 });
  // const applications = await getApiV1Application({ userId, page: 1, pageSize: 20 });

  return {
    bankAccounts,
    credits: [],
    applications: []
  };
}
