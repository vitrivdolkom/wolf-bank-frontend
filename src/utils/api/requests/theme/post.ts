import { getInstance } from '../../instance';

export const postTheme = (
  params: PostThemeParams,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance(
    {
      url: '/theme',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: params,
      signal
    },
    options
  );
};
