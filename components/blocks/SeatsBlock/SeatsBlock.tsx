"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetApiV1SectorId } from "@/api/requests/sector/sector";
import { SeatCard } from "@/components/card/SeatCard/SeatCard";
import {
  useGetApiV1EventpriceruleEventId,
  useGetApiV1EventpriceruleEventIdPaged,
} from "@/api/requests/event-price-rule/event-price-rule";
import { useParams, useRouter } from "next/navigation";
import { TicketsList } from "@/components/blocks/TicketsList/TicketsList";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useGetApiV1EventIdSold } from "@/api/requests/event/event";
import {
  useDeleteApiV1TicketId,
  useGetApiV1TicketMy,
  usePostApiV1Ticket,
} from "@/api/requests/ticket/ticket";
import { STEPS } from "@/constants/enums";
import { useLocale } from "use-intl";
import { EmptySector } from "@/components/blocks/SeatsBlock/EmptySector";
import {
  useDeleteApiV1CartId,
  useGetApiV1CartMy,
} from "@/api/requests/cart/cart";
import { toast } from "@/components/ui/use-toast";
import { UnselectedSector } from "./UnselectedSector";
import { CustomLoader } from "@/components/custom/CustomLoader/CustomLoader";

interface ISeatsBlock {}

export const SeatsBlock: React.FC<ISeatsBlock> = (props) => {
  const t = useTranslations();
  const { params, updateSearchParams } = useQueryParams();
  const activeSectorId = params.get("active_sector_id");
  const { id } = useParams();
  const [tickets, setTickets] = useState<any[]>([]);
  const activeEventId = params.get("active_event");
  const activePriceRuleId = params.get("price");
  const locale = useLocale();
  const router = useRouter();

  const activeSector = useGetApiV1SectorId(+activeSectorId!, {
    query: {
      enabled: !!activeSectorId,
    },
  });

  const sector = useGetApiV1SectorId(+activeSectorId!);

  const prices = useGetApiV1EventpriceruleEventId(+activeEventId!);

  const myCart = useGetApiV1CartMy({
    query: {},
  });

  const sold = useGetApiV1EventIdSold(+id!);

  //mutations
  const buyTickets = usePostApiV1Ticket({
    mutation: {
      onSuccess: (data) => {
        // router.push(`/${locale}/cart`)
        // setTickets([])
        myCart.refetch();
      },
      onError: (error) => {
        if (
          error.response?.status === 400 &&
          error?.response?.data?.status === "error"
        ) {
          toast({
            title: error?.response?.data?.error,
            variant: "destructive",
            duration: 2000,
            description: error?.response?.data?.error,
          });
          myCart.refetch();
        }
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

  const soldBySectors = useMemo(() => {
    const result = sold?.data?.find(
      (item) => Number(item.id) === Number(activeSectorId)
    );
    return result;
  }, [sold?.data, activeSectorId]);

  const getPrice = (seat: number, row: number, sector: number): number => {
    const foundRuleSeat = prices?.data?.find(
      (item) =>
        item.seat === seat &&
        item.destination === "SA" &&
        sector === item.sector &&
        row === item.sector_row
    );
    const foundRuleRow = prices?.data?.find(
      (item) =>
        item.sector_row === row &&
        item.destination === "SR" &&
        sector === item.sector
    );
    const foundRuleSector = prices?.data?.find(
      (item) =>
        item.sector === Number(activeSectorId) && item.destination === "SE"
    );
    const foundRuleEvent = prices?.data?.find(
      (item) =>
        item.event === Number(activeEventId) && item.destination === "EV"
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

  const handleAddToCart = (
    hasRows: boolean,
    sectorId: number,
    rowId: number,
    seatId: number,
    price: number
  ) => {
    setTickets((tickets) => [
      ...tickets,
      {
        // "type": hasRows ? "WP" : "IN",
        event_id: Number(id),
        sector_id: sectorId,
        //"sector_row" : rowId,
        sector_row_id: rowId,
        seat: seatId,
        price,
      },
    ]);
  };

  const totalPrice = myCart?.data?.reduce(
    (acc, item) => acc + item.ticket?.price,
    0
  );

  const filterByPrice = useMemo(() => {
    const rowResults = sector?.data?.sector_rows?.filter((row, index) => {
      const targetPrice = prices?.data?.find(
        (item) => Number(item.id) === Number(activePriceRuleId)
      )?.price;

      return (
        new Array(row.last_seat - row.first_seat).fill(1).some((item) => {
          const sourcePrice = getPrice(
            row.first_seat + index,
            row.row,
            Number(activeSectorId!)
          );
          return sourcePrice === targetPrice;
        }) || !activePriceRuleId
      );
    });
    return rowResults;
  }, [
    activePriceRuleId,
    activeSectorId,
    prices?.data,
    sector?.data?.sector_rows,
  ]);

  const filterByPriceSeat = (
    seat: number,
    row: number,
    sector: number,
    price: number
  ) => {
    return getPrice(seat, row, sector) === price;
  };

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

  const isPlaceSold = (rowId: number, seatId: number) => {
    // debugger;
    let isPlaceSold = false;

    soldBySectors?.sector_rows?.forEach((row) => {
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

  const handleDeleteTicket = (id: number) => {
    // setTickets(tickets.filter(item => `${item.event_id}-${item.sector_id}-${item.sector_row}-${item.seat}` !== id))
    deleteTicket.mutate({
      id: Number(id),
    });
  };

  const handleMoveToCart = () => {
    router.push(`/${locale}/cart`);
  };

  useEffect(() => {
    if (tickets.length > 0) {
      handleBuyTickets();
    }
  }, [tickets]);

  const handleAddToCartMany = (
    hasRows: boolean,
    sectorId: number,
    rowId: number,
    seatId: number,
    price: number,
    count: number
  ) => {
    const data = new Array(count).fill({
      event_id: Number(activeEventId!),
      sector_id: sectorId,
      sector_row_id: rowId,
      seat: seatId,
      price: price,
    });
    setTickets((tickets) => [...tickets, ...data]);
  };

  const renderContent = () => {
    if (!sector?.data && !activeSectorId) {
      return <UnselectedSector />;
    }

    if (sector?.isLoading) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <CustomLoader />
        </div>
      );
    }

    if (sector?.data?.sector_rows?.length! > 0 || sector?.data?.capacity > 0) {
      return (
        <div
          className={"gap-md p-base space-y-md max-h-[600px] overflow-y-auto"}
        >
          {!sector?.data?.has_rows && (
            <div className="w-full flex flex-col items-start justify-start gap-md">
              <p className="text-[#252525] text-[16px] font-[600] text-start leading-[16px]">
                Фанзона
              </p>
              <p className="text-[#252525] max-w-[596px] text-[14px] font-[400] text-start leading-[14px]">
                Здесь вы сможете ощутить всю энергетику происходящего,
                погрузиться в атмосферу и быть ближе к сцене.
              </p>
            </div>
          )}
          {sector?.data?.has_rows === false ? (
            <>
              <SeatCard
                id={sector?.data?.id}
                seat={null}
                capacity={sector?.data?.capacity}
                totalPrice={getPrice(
                  sector?.data?.capacity,
                  null,
                  sector?.data?.id
                )}
                hasRows={false}
                sectorId={sector?.data?.id}
                rowId={null}
                sold={false}
                tickets={myCart?.data}
                eventId={Number(id)}
                row={null}
                handleAddToCartMany={handleAddToCartMany}
                handleDeleteTicket={handleDeleteTicket}
                handleAddToCart={handleAddToCart}
              />
            </>
          ) : (
            sector?.data?.sector_rows?.map((row, index) => {
              return (
                <div className={"space-y-md"} key={index}>
                  <div className="text-base-semibold">
                    {t("row")} {row.row}
                  </div>
                  <div
                    className={
                      "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md"
                    }
                  >
                    {new Array(row.last_seat - row.first_seat)
                      .fill(1)
                      .map((item, index) => {
                        const activePrice = prices?.data?.find(
                          (item) =>
                            Number(item.id) === Number(activePriceRuleId)
                        )?.price;
                        const inPriceRange = filterByPriceSeat(
                          row.first_seat + index,
                          row.row,
                          Number(activeSectorId!),
                          activePrice!
                        );
                        return !inPriceRange && activePrice ? null : (
                          <SeatCard
                            hasRows={sector?.data?.has_rows}
                            sectorId={Number(activeSectorId!)}
                            rowId={row.id}
                            row={row.row}
                            handleAddToCart={handleAddToCart}
                            handleDeleteTicket={handleDeleteTicket}
                            sold={isPlaceSold(row.row, row.first_seat + index)}
                            id={item.id!}
                            seat={row.first_seat + index}
                            tickets={myCart?.data}
                            eventId={Number(id)}
                            totalPrice={getPrice(
                              row.first_seat + index,
                              row.row,
                              Number(activeSectorId!)
                            )}
                            key={index}
                          />
                        );
                      })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      );
    }

    return <EmptySector />;
  };

  return (
    <div className={"flex flex-col w-full h-full"}>
      {renderContent()}

      {tickets.length > 0 && (
        <div className="!mt-auto bg-white w-full h-[70px] p-base pl-0 flex justify-between">
          <div className="flex space-x-2">
            <TicketsList
              tickets={myCart?.data?.map((item) => ({ ...item.ticket })) ?? []}
              handleDelete={handleDeleteTicket}
            />
            {totalPrice > 0 && (
              <div className={"flex flex-col space-y-xs"}>
                <h5 className={"text-base-semibold"}>{t("Всего")}</h5>
                <div className="text-sm-light">
                  {formatPrice(totalPrice ?? 0)} {t("sum")}
                </div>
              </div>
            )}
          </div>
          <Button onClick={() => handleMoveToCart()} className={"w-max"}>
            {t("buy")}
          </Button>
        </div>
      )}
    </div>
  );
};
