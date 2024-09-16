'use client';
import React, { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Input, InputProps } from '@/components/ui/input';

interface ICustomInput extends InputProps {
  icon?: ReactNode;
  endIcon?: ReactNode;
  styles?: string;
}

export const CustomInput: React.FC<ICustomInput> = (props) => {
  const t = useTranslations();

  return (
    <div className={`relative ${props.styles ? props.styles : ''}`}>
      {props.icon ? (
        <div className={'absolute left-2 top-2 bottom-2 w-6 h-6 m-auto'}>{props.icon}</div>
      ) : null}

      {props.endIcon ? (
        <div className={'absolute right-2 top-2 bottom-2 w-6 h-6 m-auto'}>{props.endIcon}</div>
      ) : null}
      <Input
        {...props}
        className={`bg-white  px-4 ${props?.icon ? 'pl-10' : ''}  py-[14px] rounded-[12px] ${props.className}`}
      />
    </div>
  );
};
