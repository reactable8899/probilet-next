import React from 'react';
import { useTranslations } from 'next-intl';
// components
import { SectorsBlockSidebar } from '@/components/blocks/SectorsBlockSidebar/SectorsBlockSidebar';
import { SeatsBlock } from '@/components/blocks/SeatsBlock/SeatsBlock';
// api
import { useGetApiV1EventEventgroupIdPaged } from '@/api/requests/event/event';

interface ISectorsBlock {
  event_group_id: number;
}

export const SectorsBlock: React.FC<ISectorsBlock> = (props) => {
  const t = useTranslations();
  const events = useGetApiV1EventEventgroupIdPaged(props.event_group_id, {
    page: 1,
    page_size: 10,
  });

  return (
    <div
      className={
        'mobile:full-width md:w-full border border-gray-border overflow-hidden bg-stone-100 md:rounded-md md:min-h-[676px] relative grid grid-cols-4 h-full'
      }
    >
      <div className={'col-span-4 md:col-span-1 bg-white p-md'}>
        <SectorsBlockSidebar />
      </div>
      <div className={'col-span-4 md:col-span-3  h-full'}>
        <SeatsBlock />
      </div>
    </div>
  );
};
