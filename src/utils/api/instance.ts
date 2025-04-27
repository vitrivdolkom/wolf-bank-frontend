import type { AxiosRequestConfig } from 'axios';

import axios from 'axios';

import { LOCAL_STORAGE_KEYS } from '../constants';

export const instance = axios.create({
  baseURL: 'http://localhost:3000'
});
export const publicInstance = axios.create({
  baseURL: 'http://localhost:3000'
});

publicInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

publicInstance.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401 || error.response.status === 403) {
    console.log('#error', error);

    window.location.href =
      'http://localhost:8082/login?client_id=wem7LcxWDUArXEm-0e4nsEjkwsroaXU_&redirect_uri=http://localhost:3000/&response_type=code';
  }

  return Promise.reject(error);
});

export const getInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const promise = publicInstance({
    ...config,
    ...options,
    headers: {
      ...options?.headers
    }
  }).then(({ data }) => data);

  return promise;
};
