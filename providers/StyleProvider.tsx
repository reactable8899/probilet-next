'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

interface IStyleProvider {
  children: React.ReactNode;
}

export const StyleProvider: React.FC<IStyleProvider> = (props) => {
  const pathname = usePathname();

  const whitebBg = ['profile', 'cart', 'order'];

  return (
    <div
      className={`bg-stone-100 ${whitebBg?.some((item) => pathname.includes(item)) ? 'mobile:bg-white' : ''} overflow-hidden`}
    >
      {props.children}
    </div>
  );
};
