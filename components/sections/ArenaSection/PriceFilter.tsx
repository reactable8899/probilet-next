import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useGetApiV1EventpriceruleEventIdPaged } from '@/api/requests/event-price-rule/event-price-rule';
import { useQueryParams } from '@/hooks/useQueryParams';
import { formatPrice } from '@/lib/utils';

interface IPriceFilter {}

export const PriceFilter: React.FC<IPriceFilter> = (props) => {
  const t = useTranslations();
  const { id } = useParams();
  const { params, updateSearchParams } = useQueryParams();
  const activeEventId = params.get('active_event');
  const activePriceRuleId = params.get('price_rule');

  const pricesQ = useGetApiV1EventpriceruleEventIdPaged(+id!, {
    page: 1,
    page_size: 100,
  });

  const colors: Record<number, string> = {
    0: 'rgba(255, 124, 124, 1)',
    1: '#40BB4C',
    2: '#D255F1',
    3: '#5F3AF1',
    4: '#1CE4FF',
    5: '#FF9900',
    6: '#8FFF00',
    7: '#5E94D3',
    8: '#A66E3A',
  };

  return (
    <div className={'overflow-x-scroll no-scrollbar'}>
      <div
        className={
          'px-5 flex md:justify-center space-x-md  gap-md mobile:w-screen   md:flex-wrap overflow-x-scroll no-scrollbar'
        }
      >
        {pricesQ.data?.results?.map((price, index) => (
          <div
            key={index}
            className={
              'p-xs pr-base bg-white w-max hover:cursor-pointer rounded-md text-xs-light md:text-sm-light flex space-x-0.5 items-center '
            }
          >
            <div className={'w-6 h-6 flex-center'}>
              <span className={'w-3 h-3 rounded-full'} style={{ background: colors[index] }} />
            </div>
            <span className={'whitespace-nowrap'}>{`${formatPrice(price.price)} ${t('sum')}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
