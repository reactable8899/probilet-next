'use client';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import { useQueryParams } from '@/hooks/useQueryParams';
import { Button } from '@/components/ui/button';
import { useGetApiV1EventpriceruleEventId } from '@/api/requests/event-price-rule/event-price-rule';
import { useGetApiV1EventIdSold } from '@/api/requests/event/event';
import { useDeleteApiV1TicketId, usePostApiV1Ticket } from '@/api/requests/ticket/ticket';
import { toast } from '@/components/ui/use-toast';
import { useGetApiV1CartMy } from '@/api/requests/cart/cart';
import { useLocale } from 'next-intl';
import { TicketsList } from '@/components/blocks/TicketsList/TicketsList';
import { formatPrice } from '@/lib/utils';
import HallMap from './HallMap';
import { useAuthStore } from '@/store/useAuthStore';
import { STEPS } from '@/constants/enums';

interface IHallScheme {
  handleChangeShowEvents: (show: boolean) => void;
}

export const HallScheme: React.FC<IHallScheme> = (props) => {
  const t = useTranslations();
  const { id } = useParams();
  const { params, updateSearchParams } = useQueryParams();
  const activeEventId = params.get('active_event');

  const [tickets, setTickets] = useState<any[]>([]);
  const router = useRouter();
  const locale = useLocale();
  const { isLoggedIn, setShowAuth } = useAuthStore();
  const myCart = useGetApiV1CartMy({
    query: {},
  });
  const sold = useGetApiV1EventIdSold(+activeEventId!, {
    query: {
      enabled: !!activeEventId,
    },
  });

  const prices = useGetApiV1EventpriceruleEventId(+activeEventId!);

  //mutations
  const buyTickets = usePostApiV1Ticket({
    mutation: {
      onSuccess: (data) => {
        // router.push(`/${locale}/cart`)
        // setTickets([])
        myCart.refetch();
      },
      onError: (error) => {
        if (error.response?.status === 400 && error?.response?.data?.status === 'error') {
          toast({
            title: error?.response?.data?.error,
            variant: 'destructive',
            duration: 2000,
            description: error?.response?.data?.error,
          });

          myCart.refetch();
        }
        const copy = [...tickets];
        copy.pop();
        setTickets(copy);
      },
    },
  });

  const deleteTicket = useDeleteApiV1TicketId({
    mutation: {
      onSuccess: (data) => {
        myCart.refetch();
      },
    },
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

  const totalPrice = myCart?.data?.reduce((acc, item) => acc + item.ticket?.price, 0);

  const isPlaceSold = (rowId: number, seatId: number, sectorId: number) => {
    // debugger;
    let isPlaceSold = false;

    sold?.data
      ?.find((item) => item.id === sectorId)
      ?.sector_rows?.forEach((row) => {
        if (row.id === rowId) {
          if (row.sold_places?.includes(seatId)) {
            isPlaceSold = true;
          }
        }
      });

    // const foundRow = soldBySectors?.sector_rows?.find(item => Number(item.id) === Number(rowId));
    // const foundSeat = foundRow?.sold_places?.find(item => item === seatId);
    return isPlaceSold;
  };

  useEffect(() => {
    if (tickets.length > 0) {
      handleBuyTickets();
    }
  }, [tickets]);

  //handlers
  const handleBuyTickets = () => {
    if (tickets.length > 0) {
      buyTickets.mutate({
        data: {
          tickets: tickets.map((item) => ({
            ...item,
            price: undefined,
          })),
        },
      });
    }
  };

  const handleMoveToCart = () => {
    router.push(`/${locale}/cart`);
  };

  const handleDeleteTicket = (id: number) => {
    // setTickets(tickets.filter(item => `${item.event_id}-${item.sector_id}-${item.sector_row}-${item.seat}` !== id))
    deleteTicket.mutate({
      id: Number(id),
    });
  };

  const handleAddToCart = (
    hasRows: boolean,
    sectorId: number,
    rowId: number,
    seatId: number,
    price: number,
  ) => {
    if (!isLoggedIn) {
      setShowAuth(true);
      updateSearchParams('step', STEPS.SIGNIN);
    }

    if (isLoggedIn) {
      setTickets((tickets) => [
        ...tickets,
        {
          // "type": hasRows ? "WP" : "IN",
          event_id: Number(activeEventId),
          sector_id: sectorId,
          //"sector_row" : rowId,
          sector_row_id: rowId,
          seat: seatId,
          price,
        },
      ]);
    }
  };

  //getters
  const getPrice = (seat: number, row: number, sector: number): number => {
    const foundRuleSeat = prices?.data?.find(
      (item) =>
        item.seat === seat &&
        item.destination === 'SA' &&
        sector === item.sector &&
        row === item.sector_row,
    );
    const foundRuleRow = prices?.data?.find(
      (item) => item.sector_row === row && item.destination === 'SR' && sector === item.sector,
    );
    const foundRuleSector = prices?.data?.find(
      (item) => item.sector === Number(sector) && item.destination === 'SE',
    );
    const foundRuleEvent = prices?.data?.find(
      (item) => item.event === Number(activeEventId) && item.destination === 'EV',
    );

    if (foundRuleSeat) {
      return foundRuleSeat.price;
    } else if (foundRuleRow) {
      return foundRuleRow.price;
    } else if (foundRuleSector) {
      return foundRuleSector.price;
    } else if (foundRuleEvent) {
      return foundRuleEvent.price;
    } else {
      return 0;
    }
  };

  return (
    <>
      <div
        className={
          'absolute w-full h-full bg-transparent p-[110px] px-[60px] max-md:px-[20px] max-sm:px-[10px] cursor-pointer'
        }
      >
        <HallMap getPrice={getPrice} handleAddToCart={handleAddToCart} isPlaceSold={isPlaceSold} />
      </div>
      {(tickets.length > 0 || myCart?.data?.length > 0) && (
        <div className="!mt-auto bg-white w-full h-[70px] p-base pl-0 flex justify-between z-30 absolute bottom-0 left-0">
          <div className="flex space-x-2">
            <TicketsList
              tickets={myCart?.data?.map((item) => ({ ...item.ticket })) ?? []}
              handleDelete={handleDeleteTicket}
            />
            {totalPrice > 0 && (
              <div className={'flex flex-col space-y-xs'}>
                <h5 className={'text-base-semibold'}>{t('Всего')}</h5>
                <div className="text-sm-light">
                  {formatPrice(totalPrice ?? 0)} {t('sum')}
                </div>
              </div>
            )}
          </div>
          <Button onClick={() => handleMoveToCart()} className={'w-max'}>
            {t('buy')}
          </Button>
        </div>
      )}
    </>
  );
};
