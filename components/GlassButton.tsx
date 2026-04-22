import {
  createElement,
  useCallback,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import { cva, type VariantProps } from "cva";
import gsap from "gsap";

import { cn } from "@/lib/utils";

const glassButtonVariants = cva({
  base: "group relative isolate cursor-pointer overflow-hidden rounded-3xl text-foreground glass-button-shadow glass-border focus:outline-none",
  variants: {
    size: {
      sm: "pl-3 pr-3.5 py-1",
      md: "pl-4 pr-5 py-2",
      lg: "pl-5 pr-6 py-2.5",
    },
  },
  defaultVariants: { size: "lg" },
});

const contentGapVariants = cva({
  base: "relative z-10 flex w-full items-center justify-center",
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
    },
  },
  defaultVariants: { size: "lg" },
});

const contentIconVariants = cva({
  base: "ease-material flex items-center justify-center transition-transform duration-300",
  variants: {
    size: {
      sm: "size-3.5",
      md: "size-4",
      lg: "size-5",
    },
  },
  defaultVariants: { size: "lg" },
});

const contentLabelVariants = cva({
  base: "font-medium select-none tracking-tight",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: { size: "lg" },
});

type GlassButtonOwnProps<T extends ElementType = "button"> = {
  as?: T;
  className?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  label: string;
  endIcon?: ReactNode;
} & VariantProps<typeof glassButtonVariants>;

type GlassButtonProps<T extends ElementType = "button"> =
  GlassButtonOwnProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof GlassButtonOwnProps<T>>;

function GlassButton<T extends ElementType = "button">({
  as,
  className,
  startIcon,
  label,
  endIcon,
  size = "md",
  children,
  ...props
}: GlassButtonProps<T>) {
  const callerOnClick = (props as Record<string, unknown>).onClick as
    | ((e: React.MouseEvent) => void)
    | undefined;

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    gsap.killTweensOf(el);
    gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    gsap.killTweensOf(el);
    gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    gsap.killTweensOf(el);
    const tl = gsap.timeline();
    tl.to(el, { scale: 0.95, duration: 0.1, ease: "power1.in" });
    tl.to(el, { scale: 1, duration: 0.4, ease: "power4.out" });

    callerOnClick?.(e);
  };

  const Component: ElementType = as || "button";

  return createElement(
    Component,
    {
      ...props,
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: cn(glassButtonVariants({ size }), className),
    },
    <>
      <span
        aria-hidden
        className="glass-button-bg -z-10 rounded-full backdrop-blur-sm group-hover:bg-position-[50%_100%]"
      />
      {children ?? (
        <div className={contentGapVariants({ size })}>
          {startIcon && (
            <div className={contentIconVariants({ size })}>{startIcon}</div>
          )}
          <p className={contentLabelVariants({ size })}>{label}</p>
          {endIcon && (
            <div className={contentIconVariants({ size })}>{endIcon}</div>
          )}
        </div>
      )}
    </>,
  );
}

export default GlassButton;
