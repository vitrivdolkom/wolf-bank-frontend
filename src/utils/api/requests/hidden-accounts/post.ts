import { getInstance } from '../../instance';

export const postHiddenAccounts = (
  params: PostHiddenAccountsParams,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance(
    {
      url: '/hidden-accounts',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: params,
      signal
    },
    options
  );
};
