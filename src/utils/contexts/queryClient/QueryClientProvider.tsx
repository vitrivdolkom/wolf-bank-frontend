import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider as QueryClientProviderBase
} from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useMemo } from 'react';
import { toast } from 'sonner';

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
        queryCache: new QueryCache({
          onError: (error) => {
            if (isAxiosError(error) && error.response?.data && 'error' in error.response.data) {
              toast.error(error.response?.data.error);
            }
          }
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            if (isAxiosError(error) && error.response?.data && 'error' in error.response.data) {
              toast.error(error.response?.data.error);
            }
          }
        })
      }),
    []
  );

  return <QueryClientProviderBase client={queryClient}>{children}</QueryClientProviderBase>;
};
