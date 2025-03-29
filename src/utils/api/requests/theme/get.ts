import { getInstance } from '../../instance';

export const getTheme = (
  params: GetThemeParams,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<GetThemeResponse>({ url: '/theme', method: 'GET', params, signal }, options);
};
