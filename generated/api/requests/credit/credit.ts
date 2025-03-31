/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * WolfBankGateway
 * OpenAPI spec version: 1.0
 */
import { useQuery } from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type {
  GetApiV1CreditParams,
  GetApiV1CreditRateParams,
  GetCreditRateResponse,
  GetCreditResponse,
  GetPaymentResponse
} from '../../models';

import { getInstance } from '../../../../src/utils/api/instance';

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];

export const getApiV1CreditAgreementId = (
  agreementId: string,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<GetCreditResponse>(
    { url: `/api/v1/Credit/${agreementId}`, method: 'GET', signal },
    options
  );
};

export const getGetApiV1CreditAgreementIdQueryKey = (agreementId: string) => {
  return [`/api/v1/Credit/${agreementId}`] as const;
};

export const getGetApiV1CreditAgreementIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementId>>,
  TError = unknown
>(
  agreementId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementId>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiV1CreditAgreementIdQueryKey(agreementId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV1CreditAgreementId>>> = ({
    signal
  }) => getApiV1CreditAgreementId(agreementId, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!agreementId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiV1CreditAgreementId>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiV1CreditAgreementIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiV1CreditAgreementId>>
>;
export type GetApiV1CreditAgreementIdQueryError = unknown;

export function useGetApiV1CreditAgreementId<
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementId>>,
  TError = unknown
>(
  agreementId: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementId>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1CreditAgreementId>>,
          TError,
          Awaited<ReturnType<typeof getApiV1CreditAgreementId>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1CreditAgreementId<
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementId>>,
  TError = unknown
>(
  agreementId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementId>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1CreditAgreementId>>,
          TError,
          Awaited<ReturnType<typeof getApiV1CreditAgreementId>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1CreditAgreementId<
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementId>>,
  TError = unknown
>(
  agreementId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementId>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetApiV1CreditAgreementId<
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementId>>,
  TError = unknown
>(
  agreementId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementId>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetApiV1CreditAgreementIdQueryOptions(agreementId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getApiV1Credit = (
  params?: GetApiV1CreditParams,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<GetCreditResponse[]>(
    { url: `/api/v1/Credit`, method: 'GET', params, signal },
    options
  );
};

export const getGetApiV1CreditQueryKey = (params?: GetApiV1CreditParams) => {
  return [`/api/v1/Credit`, ...(params ? [params] : [])] as const;
};

export const getGetApiV1CreditQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiV1Credit>>,
  TError = unknown
>(
  params?: GetApiV1CreditParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV1Credit>>, TError, TData>>;
    request?: SecondParameter<typeof getInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiV1CreditQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV1Credit>>> = ({ signal }) =>
    getApiV1Credit(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiV1Credit>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiV1CreditQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV1Credit>>>;
export type GetApiV1CreditQueryError = unknown;

export function useGetApiV1Credit<
  TData = Awaited<ReturnType<typeof getApiV1Credit>>,
  TError = unknown
>(
  params: undefined | GetApiV1CreditParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV1Credit>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1Credit>>,
          TError,
          Awaited<ReturnType<typeof getApiV1Credit>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1Credit<
  TData = Awaited<ReturnType<typeof getApiV1Credit>>,
  TError = unknown
>(
  params?: GetApiV1CreditParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV1Credit>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1Credit>>,
          TError,
          Awaited<ReturnType<typeof getApiV1Credit>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1Credit<
  TData = Awaited<ReturnType<typeof getApiV1Credit>>,
  TError = unknown
>(
  params?: GetApiV1CreditParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV1Credit>>, TError, TData>>;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetApiV1Credit<
  TData = Awaited<ReturnType<typeof getApiV1Credit>>,
  TError = unknown
>(
  params?: GetApiV1CreditParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV1Credit>>, TError, TData>>;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetApiV1CreditQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getApiV1CreditAgreementIdPayments = (
  agreementId: string,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<GetPaymentResponse>(
    { url: `/api/v1/Credit/${agreementId}/payments`, method: 'GET', signal },
    options
  );
};

export const getGetApiV1CreditAgreementIdPaymentsQueryKey = (agreementId: string) => {
  return [`/api/v1/Credit/${agreementId}/payments`] as const;
};

export const getGetApiV1CreditAgreementIdPaymentsQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>,
  TError = unknown
>(
  agreementId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetApiV1CreditAgreementIdPaymentsQueryKey(agreementId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>> = ({
    signal
  }) => getApiV1CreditAgreementIdPayments(agreementId, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!agreementId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiV1CreditAgreementIdPaymentsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>
>;
export type GetApiV1CreditAgreementIdPaymentsQueryError = unknown;

export function useGetApiV1CreditAgreementIdPayments<
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>,
  TError = unknown
>(
  agreementId: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>,
          TError,
          Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1CreditAgreementIdPayments<
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>,
  TError = unknown
>(
  agreementId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>,
          TError,
          Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1CreditAgreementIdPayments<
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>,
  TError = unknown
>(
  agreementId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetApiV1CreditAgreementIdPayments<
  TData = Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>,
  TError = unknown
>(
  agreementId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditAgreementIdPayments>>, TError, TData>
    >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetApiV1CreditAgreementIdPaymentsQueryOptions(agreementId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getApiV1CreditRate = (
  params?: GetApiV1CreditRateParams,
  options?: SecondParameter<typeof getInstance>,
  signal?: AbortSignal
) => {
  return getInstance<GetCreditRateResponse>(
    { url: `/api/v1/Credit/rate`, method: 'GET', params, signal },
    options
  );
};

export const getGetApiV1CreditRateQueryKey = (params?: GetApiV1CreditRateParams) => {
  return [`/api/v1/Credit/rate`, ...(params ? [params] : [])] as const;
};

export const getGetApiV1CreditRateQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiV1CreditRate>>,
  TError = unknown
>(
  params?: GetApiV1CreditRateParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditRate>>, TError, TData>>;
    request?: SecondParameter<typeof getInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiV1CreditRateQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV1CreditRate>>> = ({ signal }) =>
    getApiV1CreditRate(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiV1CreditRate>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiV1CreditRateQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiV1CreditRate>>
>;
export type GetApiV1CreditRateQueryError = unknown;

export function useGetApiV1CreditRate<
  TData = Awaited<ReturnType<typeof getApiV1CreditRate>>,
  TError = unknown
>(
  params: undefined | GetApiV1CreditRateParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditRate>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1CreditRate>>,
          TError,
          Awaited<ReturnType<typeof getApiV1CreditRate>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1CreditRate<
  TData = Awaited<ReturnType<typeof getApiV1CreditRate>>,
  TError = unknown
>(
  params?: GetApiV1CreditRateParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditRate>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV1CreditRate>>,
          TError,
          Awaited<ReturnType<typeof getApiV1CreditRate>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiV1CreditRate<
  TData = Awaited<ReturnType<typeof getApiV1CreditRate>>,
  TError = unknown
>(
  params?: GetApiV1CreditRateParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditRate>>, TError, TData>>;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetApiV1CreditRate<
  TData = Awaited<ReturnType<typeof getApiV1CreditRate>>,
  TError = unknown
>(
  params?: GetApiV1CreditRateParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV1CreditRate>>, TError, TData>>;
    request?: SecondParameter<typeof getInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetApiV1CreditRateQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
