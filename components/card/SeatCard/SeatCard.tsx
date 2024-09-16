import React, { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { formatPrice } from "@/lib/utils";
// components
import { Button } from "@/components/ui/button";
// store
import { useAuthStore } from "@/store/useAuthStore";
// hooks
import { useQueryParams } from "@/hooks/useQueryParams";
// utils
import { STEPS } from "@/constants/enums";
//icons
import SeparatorIcon from "@/public/icons/separator.svg";
import PlusIcon from "@/public/icons/plus.svg";
import MinusIcon from "@/public/icons/minus.svg";
import { CartOut } from "@/api/schemas";

interface ISeatCard {
  id: number;
  seat: number;
  totalPrice: number;
  hasRows: boolean;
  sectorId: number;
  rowId: number;
  sold: boolean;
  row: number;
  capacity?: number;
  tickets: CartOut[];
  eventId: number;
  handleDeleteTicket: (id: number) => void;
  handleAddToCart: (
    hasRows: boolean,
    sectorId: number,
    rowId: number,
    seatId: number,
    price: number
  ) => void;
  handleAddToCartMany?: (
    hasRows: boolean,
    sectorId: number,
    rowId: number,
    seatId: number,
    price: number,
    count: number
  ) => void;
}

export const SeatCard: React.FC<ISeatCard> = (props) => {
  const t = useTranslations();
  const [count, setCount] = useState(0);

  const { updateSearchParams } = useQueryParams();
  const { isLoggedIn, setShowAuth } = useAuthStore();

  const isCardSelected = useMemo(() => {
    if (!props?.hasRows) {
      return false;
    }

    return props?.tickets?.some(
      (item) =>
        item?.ticket?.seat === props?.seat &&
        item?.ticket?.sector_row?.row === props?.row &&
        item?.ticket?.sector?.id === props?.sectorId &&
        item?.ticket?.event?.event_group?.id === props.eventId
    );
  }, [props]);

  const handeIncrement = () => {
    if (count <= props.capacity) {
      setCount(count + 1);
    }
  };

  const handeDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setShowAuth(true);
      updateSearchParams("step", STEPS.SIGNIN);
    }

    if (isLoggedIn) {
      if (count > 0) {
        props.handleAddToCartMany(
          props.hasRows,
          Number(props.sectorId),
          null,
          null,
          props.totalPrice,
          count
        );
      } else {
        if (isCardSelected) {
          const removingTicketId = props?.tickets?.find(
            (item) =>
              item?.ticket?.seat === props?.seat &&
              item?.ticket?.sector_row?.row === props?.row &&
              item?.ticket?.sector?.id === props?.sectorId &&
              item?.ticket?.event?.event_group?.id === props.eventId
          )?.ticket?.id;

          props.handleDeleteTicket(removingTicketId);
        }

        if (!isCardSelected) {
          props.handleAddToCart(
            props.hasRows,
            Number(props.sectorId),
            Number(props.rowId),
            Number(props.seat),
            props.totalPrice
          );
        }
      }
    }
  };

  return (
    <div className={"flex flex-col space-y-0 w-full items-center"}>
      <div className="rounded-md bg-white p-base space-y-md w-full">
        {props.hasRows ? (
          <div className="flex space-x-1.5">
            <span className={"text-base-semibold"}>{t("place")}</span>
            <span className={"text-base-light"}>{props.seat}</span>
          </div>
        ) : null}
        {props.hasRows ? <hr className={"border-gray-border"} /> : null}
        <div className={"flex w-full justify-between items-center"}>
          <div className={"text-base-semibold"}>
            {formatPrice(props.totalPrice)} {t("sum")}
          </div>
          {props.capacity ? (
            <div className={"text-base-semibold"}>{props.capacity - count}</div>
          ) : null}
        </div>

        {!props.hasRows ? (
          <div
            className={
              "w-[100%] rounded-md p-md border border-gray-border flex justify-between items-center"
            }
          >
            <div onClick={handeDecrement}>
              <MinusIcon />
            </div>
            <div>{count}</div>
            <div onClick={handeIncrement}>
              <PlusIcon />
            </div>
          </div>
        ) : null}
      </div>
      <div className={"w-[90%] bg-white overflow-hidden"}>
        <SeparatorIcon className={"max-w-full text-gray-border"} />
      </div>
      <div className="p-base w-full bg-white rounded-md">
        <Button
          disabled={props.sold}
          onClick={handleAddToCart}
          variant={isCardSelected ? "secondary" : "default"}
          className={
            "w-full !font-light disabled:bg-primary disabled:opacity-50"
          }
        >
          {isCardSelected ? t("Отменить") : t("add_to_cart")}
        </Button>
      </div>
    </div>
  );
};
