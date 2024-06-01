import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

export const P = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "my-3 text-lg   text-gray-500 lg:text-xl  dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Heading = ({
  children,
  className,
  type="h1",
}: {
  children: ReactNode;
  className?: string;
  type?: "h1" | "h2" | "h3";
}) => {
  switch (type) {
    case "h1":
      return (
        <h1
          className={cn(
            " text-3xl ![font-family:'Font-Bold'] leading-none tracking-wide text-gray-900 md:text-4xl lg:text-5xl dark:text-white",
            className
          )}
        >
          {children}
        </h1>
      );
    case "h2":
        return (
            <h2
              className={cn(
                "text-3xl ![font-family:'Font-Bold'] dark:text-white",
                className
              )}
            >
              {children}
            </h2>
          ); 

        
    case "h3":
        return (
            <h3
              className={cn(
                "text-xl font-bold dark:text-white",
                className
              )}
            >
              {children}
            </h3>
          ); 
    default:
      return "";
  }
};
