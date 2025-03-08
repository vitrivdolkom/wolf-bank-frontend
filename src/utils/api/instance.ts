import type { AxiosError, AxiosRequestConfig } from 'axios';

import axios from 'axios';

import { LOCAL_STORAGE_KEYS } from '../constants';

export const instance = axios.create({ baseURL: 'http://localhost:3000' });

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(undefined, (error: AxiosError) => {
  // if (error)

  return Promise.reject(error);
});

export const getInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const promise = instance({
    ...config,
    ...options,
    headers: {
      ...options?.headers
    }
  }).then(({ data }) => data);

  return promise;
};
