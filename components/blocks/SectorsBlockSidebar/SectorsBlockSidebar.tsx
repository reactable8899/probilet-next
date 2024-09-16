import React from "react";
import { useTranslations } from "next-intl";
import { Filters } from "./Filters";
import { SectorsList } from "@/components/blocks/SectorsBlockSidebar/SectorsList";
import { Button } from "@/components/ui/button";
import MapIcon from "@/public/icons/map.svg";
import { customUpdateSearchParams } from "@/lib/utils";

interface ISectorsBlockSidebar {}

export const SectorsBlockSidebar: React.FC<ISectorsBlockSidebar> = (props) => {
  const t = useTranslations();

  const handleChangeArenaType = () => {
    customUpdateSearchParams({ arena_type: "scheme" });
  };

  return (
    <div className={"flex flex-col h-full max-md:mb-md"}>
      <div
        className={
          "space-y-base max-md:flex max-md:flex-col-reverse max-md:gap-md"
        }
      >
        <Filters />
        <SectorsList />
      </div>
      <Button
        onClick={handleChangeArenaType}
        variant={"secondary"}
        className={"mt-auto"}
        size={"lg"}
      >
        <MapIcon />
        <span className={"text-base-light"}>{t("Карта")}</span>
      </Button>
    </div>
  );
};
