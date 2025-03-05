import type { PageContextServer } from 'vike/types';

import type {
  ApplicationResponse,
  BankAccountDto,
  GetCreditResponse
} from '@/generated/api/models';

import { getApiV1Application, getApiV1BankAccount, getApiV1Credit } from '@/generated/api/requests';
import { instance } from '@/utils/api';

export interface MainPageData {
  applications: readonly ApplicationResponse[];
  bankAccounts: readonly BankAccountDto[];
  credits: readonly GetCreditResponse[];
}

const data = async (_pageContext: PageContextServer): Promise<MainPageData> => {
  const bankAccounts = await getApiV1BankAccount({ limit: 10, offset: 0 });
  // const credits = await getApiV1Credit({ limit: 10, offset: 0 });
  // const { applications } = await getApiV1Application({ page: 1, pageSize: 20 });

  return {
    bankAccounts,
    credits: [],
    applications: []
  };
};

export default data;
