import {
  Children,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type SliderHandle = {
  next: () => void;
  prev: () => void;
  scrollToIndex: (index: number) => void;
};

type SliderProps = {
  children: ReactNode;
  /** Max width of the logical content container. Defaults to 72rem (6xl). */
  containerMaxWidth?: string;
  /** Side gutter outside the container. Defaults to 1.5rem. */
  gutter?: string;
  /** Space between items. Defaults to 20px. */
  gap?: string;
  /** Show prev/next buttons. Defaults to true. */
  showControls?: boolean;
  /** Called when the active (nearest snapped) index changes. */
  onActiveIndexChange?: (index: number) => void;
  /** Accessible label for the scroll region. */
  ariaLabel?: string;
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
};

const Slider = forwardRef<SliderHandle, SliderProps>(function Slider(
  {
    children,
    containerMaxWidth = "72rem",
    gutter = "0rem",
    gap = "20px",
    showControls = true,
    onActiveIndexChange,
    ariaLabel = "Gallery",
    className,
    trackClassName,
    itemClassName,
  },
  ref,
) {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const items = useMemo(() => Children.toArray(children), [children]);

  const offsetExpr = `max(${gutter}, calc((100vw - (${containerMaxWidth} + ${gutter} * 2)) / 2))`;

  const rootStyle: CSSProperties = {
    ["--slider-offset" as string]: offsetExpr,
    ["--slider-gap" as string]: gap,
  };

  const getScrollPadLeft = useCallback((track: HTMLElement) => {
    return parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
  }, []);

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const referenceX = trackRect.left + getScrollPadLeft(track);

    let nearest = 0;
    let minDelta = Infinity;
    for (let i = 0; i < itemRefs.current.length; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;
      const delta = Math.abs(el.getBoundingClientRect().left - referenceX);
      if (delta < minDelta) {
        minDelta = delta;
        nearest = i;
      }
    }

    setActiveIndex((prev) => (prev === nearest ? prev : nearest));

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 1);
    setCanNext(track.scrollLeft < maxScroll - 1);
  }, [getScrollPadLeft]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const clamped = Math.max(0, Math.min(index, items.length - 1));
      const item = itemRefs.current[clamped];
      if (!track || !item) return;

      const trackRect = track.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const scrollPadLeft = getScrollPadLeft(track);
      const delta = itemRect.left - (trackRect.left + scrollPadLeft);

      track.scrollTo({
        left: track.scrollLeft + delta,
        behavior: "smooth",
      });
    },
    [getScrollPadLeft, items.length],
  );

  const next = useCallback(() => {
    scrollToIndex(activeIndex + 1);
  }, [activeIndex, scrollToIndex]);

  const prev = useCallback(() => {
    scrollToIndex(activeIndex - 1);
  }, [activeIndex, scrollToIndex]);

  useImperativeHandle(ref, () => ({ next, prev, scrollToIndex }), [
    next,
    prev,
    scrollToIndex,
  ]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ro = new ResizeObserver(() => updateState());
    ro.observe(track);

    return () => ro.disconnect();
  }, [updateState]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => updateState());
    return () => cancelAnimationFrame(raf);
  }, [updateState, items.length]);

  useEffect(() => {
    onActiveIndexChange?.(activeIndex);
  }, [activeIndex, onActiveIndexChange]);

  return (
    <div className={cn("relative w-full", className)} style={rootStyle}>
      <ul
        ref={trackRef}
        role="group"
        aria-label={ariaLabel}
        onScroll={updateState}
        className={cn(
          "no-scrollbar flex w-full list-none overflow-x-auto overflow-y-hidden overscroll-x-contain",
          trackClassName,
        )}
        style={{
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: "var(--slider-offset)",
          scrollPaddingRight: "var(--slider-offset)",
          paddingLeft: "var(--slider-offset)",
          paddingRight: "var(--slider-offset)",
          gap: "var(--slider-gap)",
          margin: 0,
          touchAction: "pan-x",
        }}
      >
        {items.map((child, idx) => (
          <li
            key={idx}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            style={{ scrollSnapAlign: "start" }}
            className={cn("shrink-0", itemClassName)}
          >
            {child}
          </li>
        ))}
      </ul>

      {showControls && items.length > 1 && (
        <div className="page-container items-center">
          <div
            className="flex w-full items-center justify-end gap-2"
            style={{ maxWidth: containerMaxWidth }}
          >
            <SliderControlButton
              direction="prev"
              disabled={!canPrev}
              onClick={prev}
            />
            <SliderControlButton
              direction="next"
              disabled={!canNext}
              onClick={next}
            />
          </div>
        </div>
      )}
    </div>
  );
});

function SliderControlButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className={cn(
        "flex size-10 cursor-pointer items-center justify-center rounded-full",
        "bg-foreground/5 text-foreground/70",
        "transition-[background-color,color,transform,opacity] duration-200",
        "hover:bg-foreground/10 hover:text-foreground active:scale-95",
        "disabled:pointer-events-none disabled:opacity-65",
        "focus-visible:ring-foreground/30 focus-visible:ring-2 focus-visible:outline-none",
      )}
    >
      <Icon className="size-5" strokeWidth={2.25} />
    </button>
  );
}

export default Slider;
