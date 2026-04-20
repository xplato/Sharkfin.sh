import {
  cloneElement,
  createElement,
  isValidElement,
  useCallback,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cva, type VariantProps } from "cva";
import gsap from "gsap";

import { SOUND } from "@/lib/sfx/constants";
import { usePlaySfx } from "@/lib/sfx/SoundContext";
import { cn } from "@/lib/utils";

const buttonVariants = cva({
  base: "group relative border-2 cursor-pointer rounded-full focus:outline-none text-right",
  variants: {
    variant: {
      solid: "",
      outline: "",
    },
    color: {
      accent: "",
      neutral: "",
    },
    size: {
      sm: "gap-2 pl-3 pr-3.5 py-1 shadow-brutal-flat-xs",
      md: "gap-3 pl-4 pr-5 py-1.5 shadow-brutal-flat-xs",
      lg: "gap-4 pl-5 pr-6 py-2.5 shadow-brutal-flat-sm",
    },
  },
  compoundVariants: [
    // ACCENT
    {
      variant: "solid",
      color: "accent",
      className: "bg-accent text-white border-accent",
    },
    {
      variant: "outline",
      color: "accent",
      className: "bg-accent-100 text-accent border-accent dark:bg-transparent",
    },

    // MONOCHROMATIC
    {
      variant: "solid",
      color: "neutral",
      className:
        "bg-foreground text-white border-foreground dark:bg-white dark:text-background dark:border-white",
    },
    {
      variant: "outline",
      color: "neutral",
      className:
        "bg-white text-foreground border-foreground dark:bg-transparent dark:text-white dark:border-white",
    },
  ],
  defaultVariants: {
    variant: "solid",
    size: "lg",
  },
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
      // sm: "size-3.5 group-hover:translate-x-0.5",
      // md: "size-4 group-hover:translate-x-1",
      // lg: "size-5 group-hover:translate-x-2",
    },
  },
  defaultVariants: { size: "lg" },
});

const contentLabelVariants = cva({
  base: "font-bricolage-grotesque font-medium tracking-tight",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: { size: "lg" },
});

type ButtonOwnProps<T extends ElementType = "button"> = {
  as?: T;
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  label: string;
  endIcon?: ReactNode;
  soundFx?: SOUND;
} & VariantProps<typeof buttonVariants>;

type ButtonProps<T extends ElementType = "button"> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

function ButtonContent({
  startIcon,
  label,
  endIcon,
  size = "lg",
}: Pick<
  ButtonOwnProps,
  "variant" | "startIcon" | "label" | "endIcon" | "size"
>) {
  return (
    <>
      <div className={contentGapVariants({ size })}>
        {startIcon && (
          <div className={contentIconVariants({ size })}>{startIcon}</div>
        )}
        <p className={contentLabelVariants({ size })}>{label}</p>
        {endIcon && (
          <div className={contentIconVariants({ size })}>{endIcon}</div>
        )}
      </div>
    </>
  );
}

function Button<T extends ElementType = "button">({
  as,
  asChild,
  className,
  startIcon,
  label,
  endIcon,
  variant = "solid",
  color = "neutral",
  size = "md",
  soundFx = "click",
  children,
  ...props
}: ButtonProps<T>) {
  const { playSfx } = usePlaySfx();

  const callerOnClick = (props as Record<string, unknown>).onClick as
    | ((e: React.MouseEvent) => void)
    | undefined;

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    gsap.killTweensOf(el);
    gsap.to(el, {
      scale: 1.05,
      rotation: 3,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    gsap.killTweensOf(el);
    gsap.to(el, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" });
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    playSfx(soundFx);

    const el = e.currentTarget as HTMLElement;
    gsap.killTweensOf(el);
    const tl = gsap.timeline();
    tl.to(el, { scale: 0.95, duration: 0.1, ease: "power1.in" });
    tl.to(el, { scale: 1, duration: 0.4, ease: "power4.out" });

    callerOnClick?.(e);
  };

  const mergedClassName = cn(
    buttonVariants({ variant, color, size }),
    className,
  );

  const content = children ?? (
    <ButtonContent
      startIcon={startIcon}
      label={label}
      endIcon={endIcon}
      size={size}
    />
  );

  if (asChild) {
    const child = content as ReactElement;
    if (!isValidElement(child)) {
      throw new Error(
        "Button with asChild requires a single valid child element",
      );
    }
    const childProps = child.props as Record<string, unknown>;
    return cloneElement(child, {
      ...props,
      ...childProps,
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className:
        mergedClassName +
        (childProps.className ? ` ${childProps.className}` : ""),
    } as Record<string, unknown>);
  }

  const Component: ElementType = as || "button";

  return createElement(
    Component,
    {
      ...props,
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: mergedClassName,
    },
    content,
  );
}

export default Button;
