import type { PageContextServer } from 'vike/types';

import type { BankAccountDto, Transaction } from '@/generated/api/models';

import {
  getApiV1BankAccountBankAccountId,
  getApiV1BankAccountBankAccountIdHistory
} from '@/generated/api/requests';

export interface AccountPageData {
  bankAccount: BankAccountDto;
  transactionsHistory: Transaction[];
}

const data = async (_pageContext: PageContextServer): Promise<AccountPageData> => {
  const bankAccountId = _pageContext.routeParams.id;
  const bankAccount = await getApiV1BankAccountBankAccountId(bankAccountId);
  // const transactionsHistory = await getApiV1BankAccountBankAccountIdHistory(bankAccountId, {
  //   offset: 0,
  //   limit: 100
  // });

  return {
    bankAccount,
    transactionsHistory: []
  };
};

export default data;
