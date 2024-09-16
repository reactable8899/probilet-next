import React from "react";
import { useTranslations } from "next-intl";
import EmptyIcon from "@/public/icons/empty.svg";

interface IEmptySector {}

export const EmptySector: React.FC<IEmptySector> = (props) => {
  const t = useTranslations();

  return (
    <div
      className={
        "flex flex-col space-y-5 justify-center items-center w-full min-h-[600px]"
      }
    >
      <EmptyIcon />
      <div className={"space-y-md flex flex-col items-center"}>
        <div className="text-base-light-gray max-w-[250px] md:max-w-[300px] text-center">
          {t("Выберите другой сектор")}
        </div>
        <div className="text-base-light-gray max-w-[250px] md:max-w-[300px] text-center">
          {t("К сожалению билеты в этом секторе закончились")}
        </div>
      </div>
    </div>
  );
};
