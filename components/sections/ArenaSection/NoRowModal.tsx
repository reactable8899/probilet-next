"use-client";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";
// components
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
// utils
import { formatPrice } from "@/lib/utils";
import { useQueryParams } from "@/hooks/useQueryParams";
// api
import { useGetApiV1SectorId } from "@/api/requests/sector/sector";
import { usePostApiV1Ticket } from "@/api/requests/ticket/ticket";
import { useGetApiV1CartMy } from "@/api/requests/cart/cart";
// icons
import SeparatorIcon from "@/public/icons/separator.svg";
import PlusIcon from "@/public/icons/plus.svg";
import MinusIcon from "@/public/icons/minus.svg";

interface IProps {
  open: boolean;
  onClose: (value: React.SetStateAction<boolean>) => void;
}

const NoRowModal: FC<IProps> = ({ onClose, open }) => {
  const [count, setCount] = useState<number>(0);

  const t = useTranslations();
  const { params } = useQueryParams();
  const activeEventId = params.get("active_event");
  const activeSectorId = params.get("active_sector_id");
  const sector = useGetApiV1SectorId(+activeSectorId!);
  const myCart = useGetApiV1CartMy({
    query: {},
  });

  const handeIncrement = () => {
    if (count <= sector?.data?.capacity) {
      setCount(count + 1);
    }
  };

  const handeDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleonOpenChange = (state: any) => {
    onClose(state);
  };

  const buyTickets = usePostApiV1Ticket({
    mutation: {
      onSuccess: (data) => {
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

  const handleBuyTickets = () => {
    if (count) {
      const ticketsConunt = Array.from({ length: count }, (_, i) => i + 1);

      const tickets = ticketsConunt?.map((i) => ({
        event_id: Number(activeEventId),
        sector_id: Number(activeSectorId),
        sector_row_id: null,
        seat: null,
        price: count * 500,
      }));

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
    }
  };

  return (
    <Dialog onOpenChange={handleonOpenChange} open={open}>
      <DialogContent className={`w-[325px] rounded-base p-lg bg-white`}>
        <div className={"flex flex-col space-y-0 w-full items-center"}>
          <div className="rounded-md bg-white p-base space-y-md w-full">
            <div className={"flex w-full justify-between items-center"}>
              <div className={"text-base-semibold"}>
                {formatPrice(count * 500)} {t("sum")}
              </div>
              {sector?.data?.capacity ? (
                <div className={"text-base-semibold"}>
                  {sector?.data?.capacity - count}
                </div>
              ) : null}
            </div>

            <div
              className={
                "w-[100%] rounded-md p-md border border-gray-border flex justify-between items-center"
              }
            >
              <div onClick={handeDecrement} className="cursor-pointer">
                <MinusIcon />
              </div>
              <div>{count}</div>
              <div onClick={handeIncrement} className="cursor-pointer">
                <PlusIcon />
              </div>
            </div>
          </div>
          <div className={"w-[90%] bg-white overflow-hidden"}>
            <SeparatorIcon className={"max-w-full text-gray-border"} />
          </div>
          <div className="p-base w-full bg-white rounded-md">
            <Button
              disabled={!sector?.data?.capacity || !count}
              onClick={handleBuyTickets}
              variant="default"
              className={
                "w-full !font-light disabled:bg-primary disabled:opacity-50"
              }
            >
              {t("add_to_cart")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoRowModal;
