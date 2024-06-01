import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

const GridItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("bg-[#191919] rounded-xl p-6", className)}>{children}</div>;
};

export default GridItem;
