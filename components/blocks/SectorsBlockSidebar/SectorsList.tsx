'use client';
import React, { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  useGetApiV1SectorEventsiteschemeIdPaged,
  useGetApiV1SectorId,
} from '@/api/requests/sector/sector';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeftIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useGetApiV1EventEventgroupIdPaged, useGetApiV1EventId } from '@/api/requests/event/event';
import moment from 'moment/moment';
import Link from 'next/link';
import { customUpdateSearchParams } from '@/lib/utils';

interface ISectorsList {}

export const SectorsList: React.FC<ISectorsList> = (props) => {
  const { id } = useParams();
  const locale = useLocale();

  const t = useTranslations();
  const { params } = useQueryParams();
  const activeSectorId = params.get('active_sector_id');
  const activeEventId = params.get('active_event');

  const activePriceRuleId = params.get('price');

  const events = useGetApiV1EventEventgroupIdPaged(
    +id!,
    {
      page: 1,
      page_size: 10,
    },
    {
      query: {
        enabled: !!id,
        select: (data) =>
          data?.results?.map((item) => ({
            title: `${moment(item.started_at).locale('ru').format('DD MMM')} | ${moment(item.started_at).locale('ru').format('HH:mm')}`,
            value: String(item.id!),
          })),
      },
    },
  );

  useEffect(() => {
    if (events?.status === 'success' && !activeEventId) {
      customUpdateSearchParams({ active_event: events?.data?.[0]?.value });
    }
  }, [events?.status, activeEventId]);

  const event = useGetApiV1EventId(+activeEventId!);

  const sectors = useGetApiV1SectorEventsiteschemeIdPaged(
    //+activeEventId! ?? +events?.data?.[0]?.value,
    //  +id,
    event?.data?.event_site_scheme?.id,
    {
      page: 1,
      page_size: 10,
    },
    {
      query: {
        enabled: !!event?.data?.event_site_scheme?.id,
      },
    },
  );

  const handleSelectActiveSectorId = (id: number) => {
    customUpdateSearchParams({ active_sector_id: id });
  };

  return (
    <>
      <div className={'space-y-1.5 max-md:hidden'}>
        {sectors?.data?.results?.map((sector, index) => (
          <div
            key={index}
            onClick={() => handleSelectActiveSectorId(sector.id!)}
            className={`w-full p-[14px] text-base-light hover:bg-stone-100 text-center cursor-pointer ${Number(activeSectorId) === Number(sector.id) ? 'bg-stone-100' : ''}`}
          >
            {sector.name || `${t('Сектор')} ${index + 1}`}
          </div>
        ))}
      </div>

      <div className="md:hidden flex justify-between items-center gap-md">
        <Link href={`/${locale}/profile/orders`}>
          <div className="w-[48px] h-[48px] bg-white rounded-md border border-gray-border flex justify-center items-center">
            <ChevronLeftIcon />
          </div>
        </Link>

        <div className="w-full">
          <Select
            value={activeSectorId || '0'}
            onValueChange={(e) => {
              handleSelectActiveSectorId(Number(e));
            }}
          >
            <SelectTrigger className={'h-12'}>
              <SelectValue placeholder="Сектор не выбран" />
            </SelectTrigger>

            <SelectContent className={'bg-white'}>
              {sectors?.data?.results?.map((option, index) => (
                <SelectItem
                  key={option.id}
                  value={`${option.id}`}
                  className={'text-start px-3 py-2 rounded-sm hover:bg-gray-100 cursor-pointer'}
                >
                  {option.name || `${t('Сектор')} ${index + 1}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};
