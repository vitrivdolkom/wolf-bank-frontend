import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * WolfBankGateway
 * OpenAPI spec version: 1.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';

import type {
  BankAccountDto,
  GetApiV1BankAccountBankAccountIdHistoryParams,
  GetApiV1BankAccountParams,
  Transaction
} from '../../models';

import { getInstance } from '../../../../src/utils/api/instance';

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];

export const postApiV1BankAccount = (
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<BankAccountDto>(
    { url: `/api/v1/BankAccount`, method: 'POST', signal },
    options
  );
};

export const getPostApiV1BankAccountMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiV1BankAccount>>,
    TError,
    void,
    TContext
  >;
  request?: SecondParameter<typeof getInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postApiV1BankAccount>>,
  TError,
  void,
  TContext
> => {
  const mutationKey = ['postApiV1BankAccount'];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiV1BankAccount>>,
    void
  > = () => {
    return postApiV1BankAccount(requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostApiV1BankAccountMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiV1BankAccount>>
>;

export type PostApiV1BankAccountMutationError = unknown;

export const usePostApiV1BankAccount = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiV1BankAccount>>,
    TError,
    void,
    TContext
  >;
  request?: SecondParameter<typeof getInstance>;
}): UseMutationResult<Awaited<ReturnType<typeof postApiV1BankAccount>>, TError, void, TContext> => {
  const mutationOptions = getPostApiV1BankAccountMutationOptions(options);

  return useMutation(mutationOptions);
};
export const getApiV1BankAccount = (
  params?: GetApiV1BankAccountParams,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<BankAccountDto[]>(
    { url: `/api/v1/BankAccount`, method: 'GET', params, signal },
    options
  );
};

export const getGetApiV1BankAccountQueryKey = (params?: GetApiV1BankAccountParams) => {
  return [`/api/v1/BankAccount`, ...(params ? [params] : [])] as const;
};

export const getGetApiV1BankAccountQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiV1BankAccount>>,
  TError = unknown
>(
  params?: GetApiV1BankAccountParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccount>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiV1BankAccountQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV1BankAccount>>> = ({ signal }) =>
    getApiV1BankAccount(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiV1BankAccount>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiV1BankAccountQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiV1BankAccount>>
>;
export type GetApiV1BankAccountQueryError = unknown;

export function useGetApiV1BankAccount<
  TData = Awaited<ReturnType<typeof getApiV1BankAccount>>,
  TError = unknown
>(
  params: GetApiV1BankAccountParams | undefined,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccount>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1BankAccount>>,
          TError,
          Awaited<ReturnType<typeof getApiV1BankAccount>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1BankAccount<
  TData = Awaited<ReturnType<typeof getApiV1BankAccount>>,
  TError = unknown
>(
  params?: GetApiV1BankAccountParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccount>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1BankAccount>>,
          TError,
          Awaited<ReturnType<typeof getApiV1BankAccount>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1BankAccount<
  TData = Awaited<ReturnType<typeof getApiV1BankAccount>>,
  TError = unknown
>(
  params?: GetApiV1BankAccountParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccount>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetApiV1BankAccount<
  TData = Awaited<ReturnType<typeof getApiV1BankAccount>>,
  TError = unknown
>(
  params?: GetApiV1BankAccountParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccount>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetApiV1BankAccountQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const deleteApiV1BankAccountBankAccountId = (
  bankAccountId: string,
  options?: SecondParameter<typeof getInstance>
) => {
  return getInstance<void>(
    { url: `/api/v1/BankAccount/${bankAccountId}`, method: 'DELETE' },
    options
  );
};

export const getDeleteApiV1BankAccountBankAccountIdMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiV1BankAccountBankAccountId>>,
    TError,
    { bankAccountId: string },
    TContext
  >;
  request?: SecondParameter<typeof getInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteApiV1BankAccountBankAccountId>>,
  TError,
  { bankAccountId: string },
  TContext
> => {
  const mutationKey = ['deleteApiV1BankAccountBankAccountId'];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteApiV1BankAccountBankAccountId>>,
    { bankAccountId: string }
  > = (props) => {
    const { bankAccountId } = props ?? {};

    return deleteApiV1BankAccountBankAccountId(bankAccountId, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteApiV1BankAccountBankAccountIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteApiV1BankAccountBankAccountId>>
>;

export type DeleteApiV1BankAccountBankAccountIdMutationError = unknown;

export const useDeleteApiV1BankAccountBankAccountId = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiV1BankAccountBankAccountId>>,
    TError,
    { bankAccountId: string },
    TContext
  >;
  request?: SecondParameter<typeof getInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteApiV1BankAccountBankAccountId>>,
  TError,
  { bankAccountId: string },
  TContext
> => {
  const mutationOptions = getDeleteApiV1BankAccountBankAccountIdMutationOptions(options);

  return useMutation(mutationOptions);
};
export const getApiV1BankAccountBankAccountId = (
  bankAccountId: string,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<BankAccountDto>(
    { url: `/api/v1/BankAccount/${bankAccountId}`, method: 'GET', signal },
    options
  );
};

export const getGetApiV1BankAccountBankAccountIdQueryKey = (bankAccountId: string) => {
  return [`/api/v1/BankAccount/${bankAccountId}`] as const;
};

export const getGetApiV1BankAccountBankAccountIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>,
  TError = unknown
>(
  bankAccountId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetApiV1BankAccountBankAccountIdQueryKey(bankAccountId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>> = ({
    signal
  }) => getApiV1BankAccountBankAccountId(bankAccountId, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!bankAccountId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiV1BankAccountBankAccountIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>
>;
export type GetApiV1BankAccountBankAccountIdQueryError = unknown;

export function useGetApiV1BankAccountBankAccountId<
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>,
  TError = unknown
>(
  bankAccountId: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>,
          TError,
          Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1BankAccountBankAccountId<
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>,
  TError = unknown
>(
  bankAccountId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>,
          TError,
          Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1BankAccountBankAccountId<
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>,
  TError = unknown
>(
  bankAccountId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetApiV1BankAccountBankAccountId<
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>,
  TError = unknown
>(
  bankAccountId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1BankAccountBankAccountId>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetApiV1BankAccountBankAccountIdQueryOptions(bankAccountId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getApiV1BankAccountBankAccountIdHistory = (
  bankAccountId: string,
  params?: GetApiV1BankAccountBankAccountIdHistoryParams,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<Transaction[]>(
    { url: `/api/v1/BankAccount/${bankAccountId}/history`, method: 'GET', params, signal },
    options
  );
};

export const getGetApiV1BankAccountBankAccountIdHistoryQueryKey = (
  bankAccountId: string,
  params?: GetApiV1BankAccountBankAccountIdHistoryParams
) => {
  return [`/api/v1/BankAccount/${bankAccountId}/history`, ...(params ? [params] : [])] as const;
};

export const getGetApiV1BankAccountBankAccountIdHistoryQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
  TError = unknown
>(
  bankAccountId: string,
  params?: GetApiV1BankAccountBankAccountIdHistoryParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof getInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetApiV1BankAccountBankAccountIdHistoryQueryKey(bankAccountId, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>
  > = ({ signal }) =>
    getApiV1BankAccountBankAccountIdHistory(bankAccountId, params, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!bankAccountId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiV1BankAccountBankAccountIdHistoryQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>
>;
export type GetApiV1BankAccountBankAccountIdHistoryQueryError = unknown;

export function useGetApiV1BankAccountBankAccountIdHistory<
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
  TError = unknown
>(
  bankAccountId: string,
  params: GetApiV1BankAccountBankAccountIdHistoryParams | undefined,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
          TError,
          Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1BankAccountBankAccountIdHistory<
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
  TError = unknown
>(
  bankAccountId: string,
  params?: GetApiV1BankAccountBankAccountIdHistoryParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
          TError,
          Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1BankAccountBankAccountIdHistory<
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
  TError = unknown
>(
  bankAccountId: string,
  params?: GetApiV1BankAccountBankAccountIdHistoryParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetApiV1BankAccountBankAccountIdHistory<
  TData = Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
  TError = unknown
>(
  bankAccountId: string,
  params?: GetApiV1BankAccountBankAccountIdHistoryParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiV1BankAccountBankAccountIdHistory>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetApiV1BankAccountBankAccountIdHistoryQueryOptions(
    bankAccountId,
    params,
    options
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
