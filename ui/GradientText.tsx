import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type GradientTextProps = ComponentPropsWithoutRef<"span"> & {
  children: ReactNode;
};

export default function GradientText({
  children,
  className,
  ...props
}: GradientTextProps) {
  return (
    <span
      {...props}
      className={cn(
        "relative inline-block italic",
        "from-fathom via-shallows to-fathom bg-linear-to-b",
        "bg-size-[100%_300%] bg-position-[50%_0%]",
        "bg-clip-text text-transparent",
        "[transition:background-position_0.8s_var(--ease-material)]",
        "hover:bg-position-[50%_100%]",
        className,
      )}
    >
      {children}
    </span>
  );
}
