"use client";
import React, { FC } from "react";
import Image from "next/image";
// icons
import LoadingIcon from "@/public/icons/loader-gif.gif";

interface ICustomLoader {
  fullSize?: boolean;
}

export const CustomLoader: FC<ICustomLoader> = ({ fullSize }) => (
  <div
    className={`${fullSize && "w-full h-full flex justify-center items-center"}`}
  >
    <Image src={LoadingIcon} alt="Loading..." width={64} height={64} />
  </div>
);
