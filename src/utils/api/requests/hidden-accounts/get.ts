import { instance } from '../../instance';

export const getHiddenAccounts = (params: GetHiddenAccountsParams, signal?: AbortSignal) => {
  return instance.request<GetHiddenAccountsResponse>({
    url: '/hidden-accounts',
    method: 'GET',
    params,
    signal
  });
};
