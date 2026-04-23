import {
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
  type PropsWithChildren,
} from "react";
import gsap from "gsap";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

type QuickTo = ReturnType<typeof gsap.quickTo>;

type TooltipPlacement = "top-right" | "top-left";
export type ColorMode = "light" | "dark";

type WithDecorativeGlassTooltipProps = PropsWithChildren<{
  tooltipLabel: string;
  placement?: TooltipPlacement;
  forceColorMode?: ColorMode;
}>;

// Offset so the tooltip sits above and slightly beside the cursor.
const OFFSET_X = 16;
const OFFSET_Y = -16;
const HIDDEN_OPACITY = 1;
const HIDDEN_SCALE = 0;

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function WithDecorativeGlassTooltip({
  tooltipLabel,
  placement = "top-right",
  forceColorMode,
  children,
}: WithDecorativeGlassTooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const xToRef = useRef<QuickTo | null>(null);
  const yToRef = useRef<QuickTo | null>(null);
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const offsetX = placement === "top-left" ? -OFFSET_X : OFFSET_X;
  // Shift the tooltip by its own width when placing on the left so its right
  // edge ends up near the cursor.
  const xPercent = placement === "top-left" ? -100 : 0;

  useEffect(() => {
    const el = tooltipRef.current;
    if (!el) return;
    gsap.set(el, {
      opacity: HIDDEN_OPACITY,
      scale: HIDDEN_SCALE,
      x: 0,
      y: 0,
      xPercent,
    });
  }, [mounted, xPercent]);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      const el = tooltipRef.current;
      if (!el) return;

      gsap.set(el, {
        x: e.clientX + offsetX,
        y: e.clientY + OFFSET_Y,
        xPercent,
      });

      xToRef.current = gsap.quickTo(el, "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      yToRef.current = gsap.quickTo(el, "y", {
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.killTweensOf(el, "opacity,scale");
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    [offsetX, xPercent],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      xToRef.current?.(e.clientX + offsetX);
      yToRef.current?.(e.clientY + OFFSET_Y);
    },
    [offsetX],
  );

  const handleMouseLeave = useCallback(() => {
    const el = tooltipRef.current;
    if (!el) return;

    gsap.killTweensOf(el, "opacity,scale");
    gsap.to(el, {
      opacity: HIDDEN_OPACITY,
      scale: HIDDEN_SCALE,
      duration: 0.25,
      ease: "power2.in",
    });
  }, []);

  return (
    <>
      <span
        style={{ display: "contents" }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>

      {mounted &&
        createPortal(
          <div
            ref={tooltipRef}
            aria-hidden
            className={cn(
              "pointer-events-none fixed top-0 left-0 isolate z-50 hidden overflow-hidden rounded-3xl px-3.5 py-1 will-change-transform sm:flex",
              placement === "top-left" ? "origin-right" : "origin-left",
              forceColorMode === "light" &&
                "glass-button-shadow glass-border text-foreground",
              forceColorMode === "dark" &&
                "glass-button-shadow-dark glass-border-dark text-white",
              forceColorMode === undefined &&
                "glass-button-shadow glass-border text-foreground",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "-z-10 rounded-full backdrop-blur-sm",
                forceColorMode === "light" && "glass-button-bg",
                forceColorMode === "dark" && "glass-button-bg-dark",
                forceColorMode === undefined && "glass-button-bg",
              )}
            />
            <p className="relative z-10 text-sm font-medium tracking-tight whitespace-nowrap select-none">
              {tooltipLabel}
            </p>
          </div>,
          document.body,
        )}
    </>
  );
}
