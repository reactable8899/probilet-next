/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Probilet API
 * A simple instruction manual for those who need the probilet api.
 * OpenAPI spec version: 1.0
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  Error,
  GetApiV1MainbannerPagedParams,
  MainBannerOut,
  PaginatedResponseSchemaMainBannerOut
} from '../../schemas'
import { customInstance } from '../../customInstance';
import type { ErrorType } from '../../customInstance';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary Get Paged
 */
export const GetApiV1MainbannerPaged = (
    params?: GetApiV1MainbannerPagedParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<PaginatedResponseSchemaMainBannerOut>(
      {url: `/api/v1/main_banner/paged`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetApiV1MainbannerPagedQueryKey = (params?: GetApiV1MainbannerPagedParams,) => {
    return [`/api/v1/main_banner/paged`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiV1MainbannerPagedQueryOptions = <TData = Awaited<ReturnType<typeof GetApiV1MainbannerPaged>>, TError = ErrorType<unknown>>(params?: GetApiV1MainbannerPagedParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof GetApiV1MainbannerPaged>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV1MainbannerPagedQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof GetApiV1MainbannerPaged>>> = ({ signal }) => GetApiV1MainbannerPaged(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof GetApiV1MainbannerPaged>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiV1MainbannerPagedQueryResult = NonNullable<Awaited<ReturnType<typeof GetApiV1MainbannerPaged>>>
export type GetApiV1MainbannerPagedQueryError = ErrorType<unknown>

/**
 * @summary Get Paged
 */
export const useGetApiV1MainbannerPaged = <TData = Awaited<ReturnType<typeof GetApiV1MainbannerPaged>>, TError = ErrorType<unknown>>(
 params?: GetApiV1MainbannerPagedParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof GetApiV1MainbannerPaged>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiV1MainbannerPagedQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Get All
 */
export const GetApiV1Mainbanner = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<MainBannerOut[]>(
      {url: `/api/v1/main_banner`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiV1MainbannerQueryKey = () => {
    return [`/api/v1/main_banner`] as const;
    }

    
export const getGetApiV1MainbannerQueryOptions = <TData = Awaited<ReturnType<typeof GetApiV1Mainbanner>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof GetApiV1Mainbanner>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV1MainbannerQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof GetApiV1Mainbanner>>> = ({ signal }) => GetApiV1Mainbanner(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof GetApiV1Mainbanner>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiV1MainbannerQueryResult = NonNullable<Awaited<ReturnType<typeof GetApiV1Mainbanner>>>
export type GetApiV1MainbannerQueryError = ErrorType<unknown>

/**
 * @summary Get All
 */
export const useGetApiV1Mainbanner = <TData = Awaited<ReturnType<typeof GetApiV1Mainbanner>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof GetApiV1Mainbanner>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiV1MainbannerQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Get By Id
 */
export const GetApiV1MainbannerId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<MainBannerOut>(
      {url: `/api/v1/main_banner/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiV1MainbannerIdQueryKey = (id: number,) => {
    return [`/api/v1/main_banner/${id}`] as const;
    }

    
export const getGetApiV1MainbannerIdQueryOptions = <TData = Awaited<ReturnType<typeof GetApiV1MainbannerId>>, TError = ErrorType<Error>>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof GetApiV1MainbannerId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV1MainbannerIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof GetApiV1MainbannerId>>> = ({ signal }) => GetApiV1MainbannerId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof GetApiV1MainbannerId>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiV1MainbannerIdQueryResult = NonNullable<Awaited<ReturnType<typeof GetApiV1MainbannerId>>>
export type GetApiV1MainbannerIdQueryError = ErrorType<Error>

/**
 * @summary Get By Id
 */
export const useGetApiV1MainbannerId = <TData = Awaited<ReturnType<typeof GetApiV1MainbannerId>>, TError = ErrorType<Error>>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof GetApiV1MainbannerId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiV1MainbannerIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



