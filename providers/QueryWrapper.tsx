'use client';
import React, { ReactNode, useState } from 'react';
import { useTranslations } from 'next-intl';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IQueryWrapper {
  children: ReactNode;
}
export const QueryWrapper: React.FC<IQueryWrapper> = (props) => {
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
