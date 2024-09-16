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

export const customUpdateSearchParams = (newParams:any) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.keys(newParams).forEach((key) => {
    if (newParams[key] !== undefined) {
      searchParams.set(key, newParams[key]);
    } else {
      searchParams.delete(key);
    }
  });

  window.history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
};

export const formatPrice = (price: number) => {
  return price
    .toLocaleString('en-US', {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    })
    .replace(/\,/g, ' ');
};
