import { getInstance } from '../../instance';

export const getHiddenAccounts = (
  params: GetHiddenAccountsParams,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<GetHiddenAccountsResponse>(
    { url: '/hidden-accounts', method: 'GET', params, signal },
    options
  );
};
