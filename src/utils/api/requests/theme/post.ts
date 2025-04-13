import { instance } from '../../instance';

export const postTheme = (params: PostThemeParams, signal?: AbortSignal) => {
  return instance.request({
    url: '/theme',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: params,
    signal
  });
};
