import React from 'react';
import { useTranslations } from 'next-intl';
import { TicketHorizontalCard } from '@/components/card/TicketHorizontalCard/TicketHorizontalCard';

interface ITicketsList {
  tickets: any[];
  handleDelete: (id: number) => void;
}

export const TicketsList: React.FC<ITicketsList> = (props) => {
  const t = useTranslations();

  return (
    <div className={'flex mt-[-22px]'}>
      {props.tickets?.slice(0, 5).map((item, index) => {
        return (
          <TicketHorizontalCard
            handleDelete={() => props.handleDelete(item.id)}
            index={index}
            key={index}
            seat_id={item.seat}
            row={item.sector_row_id}
            seat={item.seat}
            totalPrice={item.price}
          />
        );
      })}
      &nbsp;
      {props?.tickets?.length > 5 ? (
        <div className={'text-base-semibold'}>{/*{t("more")} +{props.tickets?.length - 5}*/}</div>
      ) : null}
    </div>
  );
};
