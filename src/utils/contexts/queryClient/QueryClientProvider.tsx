import type { AxiosError } from 'axios';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider as QueryClientProviderBase
} from '@tanstack/react-query';
import { useMemo } from 'react';
import { toast } from 'sonner';

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
        queryCache: new QueryCache({
          onError: (error) => {
            const responseError = error.cause as AxiosError;

            toast.error(responseError.response?.statusText);
          }
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            const responseError = error.cause as AxiosError;

            toast.error(responseError.response?.statusText);
          }
        })
      }),
    []
  );

  return <QueryClientProviderBase client={queryClient}>{children}</QueryClientProviderBase>;
};
