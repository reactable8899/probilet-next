import Image from "next/image";
import { FC, ReactNode } from "react";
import { clsx } from "clsx";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  isContent?: boolean;
  isContentBreadCrumb?: boolean;
  className?: string;
}

const Container: FC<Props> = ({
  children,
  isContent,
  className,
  isContentBreadCrumb,
}) => {
  return (
    <div
      className={cn(
        "max-w-[1170px] mx-auto px-5",
        isContent && "py-20",
        isContentBreadCrumb && "pt-12 pb-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
