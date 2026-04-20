import {
  useCallback,
  useRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import Link from "next/link";
import { cva, type VariantProps } from "cva";
import gsap from "gsap";

import { cn } from "@/lib/utils";

const BASE_DURATION = 0.4;
const ENTER_EASE = "power2.out";
const EXIT_EASE = "power2.inOut";

const textLinkVariants = cva({
  base: "cursor-pointer font-medium",
  variants: {
    type: {
      underlined: "",
      default: "",
    },
    size: {
      inherit: "",
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
    },
    mode: {
      light: "text-foreground",
      dark: "text-white",
    },
  },
  defaultVariants: {
    size: "inherit",
    mode: "light",
  },
});

const underlineVariants = cva({
  base: "",
  variants: {
    color: {
      neutral: "",
      accent: "bg-accent",
    },
    mode: {
      light: "",
      dark: "",
    },
    size: {
      inherit: "h-px",
      sm: "h-px",
      md: "h-px",
      lg: "h-px",
    },
  },
  compoundVariants: [
    { color: "neutral", mode: "light", className: "bg-foreground" },
    { color: "neutral", mode: "dark", className: "bg-background" },
    { color: "accent", mode: "light", className: "bg-accent-600" },
  ],
  defaultVariants: {
    color: "neutral",
    mode: "light",
    size: "inherit",
  },
});

const phantomVariants = cva({
  base: "",
  variants: {
    mode: {
      light: "bg-foreground/15",
      dark: "bg-background/15",
    },
    size: {
      inherit: "h-px",
      sm: "h-px",
      md: "h-px",
      lg: "h-px",
    },
  },
  defaultVariants: {
    mode: "light",
    size: "inherit",
  },
});

type TextLinkBaseProps = {
  children: ReactNode;
  className?: string;
  color?: "neutral" | "accent";
} & VariantProps<typeof textLinkVariants>;

type TextLinkAsAnchor = TextLinkBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    onClick?: () => void;
  };

type Props = TextLinkAsAnchor;

export default function TextLink({
  children,
  className,
  href,
  onClick,
  color = "neutral",
  type = "underlined",
  size = "inherit",
  mode = "light",
  ...props
}: Props) {
  const lineRef = useRef<HTMLSpanElement>(null);
  const tweenRef = useRef<gsap.core.Timeline | null>(null);

  const handleMouseEnter = useCallback(() => {
    const el = lineRef.current;
    if (!el) return;
    tweenRef.current?.kill();
    const currentScale = Number(gsap.getProperty(el, "scaleX"));
    gsap.set(el, { transformOrigin: "left center" });
    tweenRef.current = gsap.timeline().to(el, {
      scaleX: 1,
      duration: Math.max(0.1, (1 - currentScale) * BASE_DURATION),
      ease: ENTER_EASE,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = lineRef.current;
    if (!el) return;
    tweenRef.current?.kill();
    const currentScale = Number(gsap.getProperty(el, "scaleX"));
    tweenRef.current = gsap
      .timeline()
      .to(el, {
        scaleX: 1,
        duration: Math.max(0.05, (1 - currentScale) * BASE_DURATION),
        ease: ENTER_EASE,
      })
      .set(el, { transformOrigin: "right center" })
      .to(el, {
        scaleX: 0,
        duration: BASE_DURATION,
        ease: EXIT_EASE,
      });
  }, []);

  const mergedClassName = cn(textLinkVariants({ type, size, mode }), className);
  const underlineClass = underlineVariants({ color, mode, size });
  const phantomClass = phantomVariants({ mode, size });

  const content = (
    <span className="relative">
      {children}
      {type === "underlined" && (
        <span
          className={cn("absolute -bottom-1 left-0 w-full", phantomClass)}
        />
      )}
      <span
        ref={lineRef}
        className={cn(
          "absolute -bottom-1 left-0 w-full scale-x-0",
          underlineClass,
        )}
        style={{ transformOrigin: "left center" }}
      />
    </span>
  );

  if (onClick || !href || !href.startsWith("/")) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={mergedClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(href &&
          !href.startsWith("/") && {
            target: "_blank",
            rel: "noreferrer noopener",
          })}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      scroll={false}
      className={mergedClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {content}
    </Link>
  );
}
