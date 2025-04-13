import { instance } from '../../instance';

export const postHiddenAccounts = (params: PostHiddenAccountsParams, signal?: AbortSignal) => {
  return instance.request({
    url: '/hidden-accounts',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: params,
    signal
  });
};
