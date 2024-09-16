'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArenaSection } from '@/components/sections/ArenaSection/ArenaSection';
import { EventGroupOut } from '@/api/schemas';
import moment from 'moment';
import { MapSection } from '@/components/blocks/Map/Map';
import { SectorsBlock } from '@/components/blocks/SectorsBlock/SectorsBlock';
import { useQueryParams } from '@/hooks/useQueryParams';
import { customUpdateSearchParams } from '@/lib/utils';

interface IBuyTicketSection {
  event: EventGroupOut;
}

export const BuyTicketSection: React.FC<IBuyTicketSection> = (props) => {
  const t = useTranslations();
  const { params } = useQueryParams();

  const arenaType = params.get('arena_type');

  const handleShowSectorsBlock = () => {
    customUpdateSearchParams({ arena_type: 'list' });
  };

  return (
    <div
      className={
        'relative mobile:-top-6 mobile:full-width rounded-base z-20 bg-white p-base  md:p-xl'
      }
    >
      <div className={'flex flex-col space-y-md mb-10'}>
        <h4 className={'text-xl-semibold hidden md:block'}>{t('buying_ticket')}</h4>
        {arenaType === 'list' ? (
          <SectorsBlock event_group_id={Number(props.event.id)} />
        ) : (
          <ArenaSection
            event_group_id={Number(props.event.id)}
            handleShowSectorsBlock={handleShowSectorsBlock}
          />
        )}
      </div>

      <div className={'space-y-6'}>
        <div className="space-y-base">
          <h4 className={'text-lg-semibold md:text-xl-semibold'}>{t('about_concert')}</h4>
          <p className={'text-sm-light md:text-base-light'}>{props.event.description}</p>
        </div>

        <div className="space-y-base">
          <h4 className={'text-lg-semibold md:text-xl-semibold'}>{t('event_dates')}</h4>
          <p className={'text-sm-light md:text-base-light'}>
            {props.event.starts_at
              ? moment(props.event.starts_at).locale('ru').format('DD MMM YYYY')
              : ' '}{' '}
            -{' '}
            {props.event.finishes_at
              ? moment(props.event.finishes_at).locale('ru').format('DD MMM YYYY')
              : ' '}
          </p>
        </div>
        <div className="space-y-base">
          <h4 className={'text-lg-semibold md:text-xl-semibold'}>{t('address')}</h4>
          <p className={'text-sm-light md:text-base-light'}>
            {props.event.event_site.name}, {props.event.event_site.address}
          </p>
        </div>
        <div className="w-full h-auto aspect-[363/250] lg:aspect-[112/25] rounded-md overflow-hidden">
          <MapSection
            lat={Number(props?.event.event_site?.lat) as number}
            long={Number(props?.event.event_site?.long!) as number}
          />
        </div>
      </div>
    </div>
  );
};
