import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const instance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    Authorization:
      typeof window !== 'undefined' && !!localStorage.getItem('token')
        ? `Bearer ${localStorage.getItem('token')}`
        : undefined,
  },
});

instance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined' && localStorage.getItem('token')) {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  }

  config.headers['X-Localization'] = 'uz';

  let locale = 'uz';

  if (typeof window !== 'undefined') {
    locale = window?.location?.pathname?.split('/')[1];
  }

  // config.headers['X-Localization'] = locale;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      instance
        ?.post('/api/v1/identity/token/refresh', {
          refresh: localStorage.getItem('refreshToken'),
        })
        .then((response) => {
          originalRequest._retry = true;
          localStorage.setItem('token', response.data.access);
          localStorage.setItem('refreshToken', response.data.refresh);
          instance.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access;
          return instance(originalRequest);
        })
        .catch((error) => {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('user');
          //window.location.href = "/"
        });
    }
    return Promise.reject(error);
  },
);

// add a second `options` argument here if you want to pass extra options to each generated query
export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = instance({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
