import { cn } from "@/lib/utils";
import React from "react";

export function Chip({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground",
        className
      )}
      {...props}
    />
  );
}
