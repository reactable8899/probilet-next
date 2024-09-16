import React, { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Control, Controller } from 'react-hook-form';
import { CustomInput } from '@/components/custom/CustomInput/CustomInput';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PhoneInput } from '@/components/ui/phone-input';

interface IFormItem {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  rules?: any;
  icon?: ReactNode;
  type: string;
  size?: 'lg' | 'sm' | 'md';
  options?: { title: string; value: string }[];
}

export const FormGenerator: React.FC<IFormItem> = (props) => {
  const t = useTranslations();

  return (
    <FormField
      control={props.control}
      name={props.name}
      rules={props.rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormItem className={'space-y-md'}>
            {props.label ? (
              <FormLabel className={'text-base-light'}>{props.label}</FormLabel>
            ) : null}
            <FormControl>
              {props.type === 'text' ? (
                <CustomInput
                  className={`${props?.size === 'lg' ? 'h-12' : props?.size === 'md' ? 'h-10' : props?.size === 'sm' ? 'h-[34px]' : ''}`}
                  icon={props.icon}
                  placeholder={props.placeholder}
                  {...field}
                />
              ) : props.type === 'select' ? (
                <Controller
                  control={props.control}
                  name={props.name}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <div className="flex space-y-1 flex-col">
                        <SelectTrigger className={'h-12'}>
                          <SelectValue placeholder={props.placeholder} />
                        </SelectTrigger>
                      </div>
                      <SelectContent className={'bg-white'}>
                        {props?.options?.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className={
                              'text-start px-3 py-2 rounded-sm hover:bg-gray-100 cursor-pointer'
                            }
                          >
                            {option.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              ) : (
                <PhoneInput
                  {...field}
                  maxLength={12}
                  defaultCountry={'UZ'}
                  placeholder="93 254 86 45"
                />
              )}
            </FormControl>
            <FormMessage className={'text-sm-light text-red-focus'} />
          </FormItem>
        );
      }}
    ></FormField>
  );
};
