import {
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
  type PropsWithChildren,
} from "react";
import gsap from "gsap";
import { createPortal } from "react-dom";

type QuickTo = ReturnType<typeof gsap.quickTo>;

type TooltipPlacement = "top-right" | "top-left";

type TooltipImageProps = PropsWithChildren<{
  tooltipLabel: string;
  placement?: TooltipPlacement;
}>;

// Offset so the tooltip sits above and slightly beside the cursor.
const OFFSET_X = 16;
const OFFSET_Y = -16;

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function TooltipImage({
  tooltipLabel,
  placement = "top-right",
  children,
}: TooltipImageProps) {
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
    gsap.set(el, { opacity: 0, scale: 0.85, x: 0, y: 0, xPercent });
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
      opacity: 0,
      scale: 0.85,
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
            className="glass-button-shadow glass-border text-foreground pointer-events-none fixed top-0 left-0 isolate z-50 overflow-hidden rounded-3xl px-3.5 py-1 will-change-transform"
          >
            <span
              aria-hidden
              className="glass-button-bg -z-10 rounded-full backdrop-blur-sm"
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
