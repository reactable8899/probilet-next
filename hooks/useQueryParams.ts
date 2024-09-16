'use client';

import { useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(searchParams.toString());

  const updateSearchParams = (name: string, value: any, hard?: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value !== undefined) {
      params.set(name, value);
      window.history.pushState(null, '', `?${params.toString()}`);
    } else {
      params.delete(name);
      window.history.pushState(null, '', `?${params.toString()}`);
    }
  };

  const updateManySearchParams = (params: any) => {
    const paramsString = new URLSearchParams(searchParams.toString());
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined) {
        paramsString.set(key, params[key]);
      } else {
        paramsString.delete(key);
      }
    });
    window.history.pushState(null, '', `?${paramsString.toString()}`);
  };

  return {
    updateSearchParams,
    updateManySearchParams,
    params: queryParams,
  };
};
