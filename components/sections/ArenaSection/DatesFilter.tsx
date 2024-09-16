import React from "react";
import { useQueryParams } from "@/hooks/useQueryParams";
import moment from "moment";
import { useTranslations } from "next-intl";
// icons
import SelectedLineIcon from "@/public/icons/selected-line.svg";
import UnSelectedLineIcon from "@/public/icons/unselected-line.svg";
import { customUpdateSearchParams } from "@/lib/utils";

interface IDatesFilter {
  activeDate: string | null;
  handleChange: (date: string) => void;
  list?: any[] | null;
}

export const DatesFilter: React.FC<IDatesFilter> = (props) => {
  const t = useTranslations();
  const { params, updateSearchParams } = useQueryParams();

  const activeEventId = params.get("active_event");

  return (
    <div
      className={
        "flex w-full bg-white rounded-[8px] p-base space-x-md items-center justify-center"
      }
    >
      <div className={"flex space-x-md overflow-x-scroll no-scrollbar"}>
        {props?.list?.map((item, index) => {
          const isActive =
            (activeEventId ? Number(activeEventId) : null) === Number(item.id);
          return (
            <div
              onClick={() => {
                customUpdateSearchParams({ active_event: item.id });
              }}
              key={index}
              className={`flex space-x-md rounded-[10px] whitespace-nowrap h-9 hover:cursor-pointer z-30 items-center text-base-light cursor-pointer px-[18px] py-[8px] ${isActive ? "text-white bg-red" : "bg-gray-primary"}`}
            >
              <span>{moment(item.date).locale("ru").format("DD MMM")}</span>
              {isActive ? <SelectedLineIcon /> : <UnSelectedLineIcon />}
              <span>{moment(item.date).locale("ru").format("HH:mm")}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
