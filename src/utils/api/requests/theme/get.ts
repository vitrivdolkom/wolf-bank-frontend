import { instance } from '../../instance';

export const getTheme = (params: GetThemeParams, signal?: AbortSignal) => {
  return instance.request<GetThemeResponse>({ url: '/theme', method: 'GET', params, signal });
};
