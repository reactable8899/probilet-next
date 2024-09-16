'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useRecomendationFilterList } from '@/hooks/useRecomendationFilterList';
import { FilterItem } from '@/components/items/FilterItem/FilterItem';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useQueryParams } from '@/hooks/useQueryParams';
interface IFiltersSection {}

export const FiltersSection: React.FC<IFiltersSection> = (props) => {
  const t = useTranslations();
  const { recomendationFilterList } = useRecomendationFilterList();
  const { params, updateSearchParams } = useQueryParams();
  const sub_category_id = params?.get('sub_category_id');

  return (
    <>
      <div
        className={
          'md:hidden w-full mobile:full-width  p-base md:p-md overflow-x-scroll no-scrollbar flex space-x-md md:mt-md'
        }
      >
        {recomendationFilterList?.map((item, index) => (
          <FilterItem active={item.key === 2} key={index}>
            {item.title}
          </FilterItem>
        ))}
      </div>
      <Button size={'lg'} variant={'ghost'} className={'hidden md:inline-flex w-max bg-white'}>
        <span>{t('all_events')}</span>
        <ArrowDown strokeWidth={2} size={16} />
      </Button>
    </>
  );
};
