import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IFilterAttrs } from "@/types/equipment.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleSearchParams(
  searchParams: IFilterAttrs,
  type: string,
  value: string,
) {
  const params = {
    ...searchParams,
    [type]: value,
  };
  const entriesParams = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");
  return entriesParams;
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
