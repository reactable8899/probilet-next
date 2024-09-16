"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { DatesFilter } from "@/components/sections/ArenaSection/DatesFilter";
import { PriceFilter } from "@/components/sections/ArenaSection/PriceFilter";
import MenuIcon from "@/public/icons/menu.svg";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetApiV1EventEventgroupIdPaged } from "@/api/requests/event/event";
import { HallScheme } from "@/components/sections/ArenaSection/HallScheme";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useGetApiV1CartMy } from "@/api/requests/cart/cart";
import { customUpdateSearchParams } from "@/lib/utils";

interface IArenaSection {
  handleShowSectorsBlock?: () => void;
  event_group_id: number;
}

export const ArenaSection: React.FC<IArenaSection> = (props) => {
  const t = useTranslations();
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const [showEvents, setShowEvents] = useState<boolean>(true);
  const pathname = usePathname();
  const { params } = useQueryParams();

  const activeEventId = params.get("active_event");
  const showButton = !pathname?.includes("buy-tickets-mobile");

  const handleDateChange = (date: string) => {
    setActiveDate(date);
  };

  const events = useGetApiV1EventEventgroupIdPaged(props.event_group_id, {
    page: 1,
    page_size: 10,
  });

  const handleChangeShowEvents = (show: boolean) => {
    setShowEvents(show);
  };

  useEffect(() => {
    if (events?.status === "success" && !activeEventId) {
      customUpdateSearchParams({
        active_event: events?.data?.results?.[0]?.id,
      });
    }
  }, [events?.status]);

  return (
    <div
      className={
        "mobile:full-width md:w-full p-md bg-stone-100 md:rounded-md min-h-[780px] md:min-h-[676px] max-md:pb-[80px] relative overflow-y-auto no-scrollbar"
      }
    >
      <TooltipProvider>
        <HallScheme handleChangeShowEvents={handleChangeShowEvents} />
      </TooltipProvider>

      <div className="flex flex-col space-y-md items-center z-20 relative">
        {showEvents ? (
          <DatesFilter
            list={events?.data?.results?.map((item) => {
              return {
                date: item.started_at,
                id: item.id,
              };
            })}
            activeDate={activeDate}
            handleChange={handleDateChange}
          />
        ) : null}
        <PriceFilter />
      </div>

      {showButton && (
        <div
          onClick={() => props.handleShowSectorsBlock()}
          className="absolute z-20 bottom-4 right-4 py-3 px-4 rounded-md flex space-x-2 bg-white items-center cursor-pointer"
        >
          <MenuIcon className={"text-blue-primary"} />
          <span>{t("list")}</span>
        </div>
      )}
    </div>
  );
};
