import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import TicketMask from '@/public/icons/ticket-mask.svg';
import TicketTailLeft from '@/public/icons/ticket-tail-left.svg';
import { formatPrice } from '@/lib/utils';
import { XIcon } from 'lucide-react';

interface ITicketHorizontalCard {
  seat_id: number;
  row: number;
  seat: number;
  totalPrice: number;
  index: number;
  handleDelete: any;
}

export const TicketHorizontalCard: React.FC<ITicketHorizontalCard> = (props) => {
  const t = useTranslations();
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        zIndex: (props.index + 1) * 20,
      }}
      className={`flex space-x-0 ${props.index !== 0 ? '-ml-[120px]' : ''} hover:z-100 hover:-translate-y-12 transition-all duration-300`}
    >
      <TicketTailLeft />
      <div className={'w-[185px] h-auto flex flex-col relative'}>
        {hover ? (
          <div
            onClick={props.handleDelete}
            className={
              'absolute cursor-pointer -top-2 -right-3 z-200 bg-red-primary flex-center w-6 h-6 rounded-full'
            }
          >
            <XIcon className={'text-white'} size={16} strokeWidth={4} />
          </div>
        ) : null}
        <TicketMask className={'absolute top-0 left-0 z-10'} />
        <div className="flex flex-col space-y-md p-base relative z-30">
          <div className={`flex flex-col space-y-1 text-sm-light `}>
            <div>{props.seat_id}</div>
            <div className={'flex space-x-base'}>
              <span>
                {t('row')} {props.row}
              </span>
              <span>
                {t('place')} {props.seat}
              </span>
            </div>
          </div>
          <div className={'text-base-semibold'}>
            {formatPrice(props.totalPrice)} {t('sum')}
          </div>
        </div>
      </div>
    </div>
  );
};
