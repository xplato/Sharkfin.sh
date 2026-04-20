import { useMemo, useRef, type ComponentType, type RefObject } from "react";
import { FolderHeartIcon } from "@/components/ui/folder-heart";
import { HandHeartIcon } from "@/components/ui/hand-heart";
import { HandMetalIcon } from "@/components/ui/hand-metal";
import { LanguagesIcon } from "@/components/ui/languages";
import { ZapIcon } from "@/components/ui/zap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type IconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

// The icons in components/ui all share this handle shape via useImperativeHandle,
// but each exports a distinct Handle interface. Uniform cast for the feature list.
type IconComponent = ComponentType<{
  ref?: RefObject<IconHandle | null>;
  size?: number;
}>;

type Feature = {
  key: string;
  label: string;
  description: string;
  iconClassName: string;
  Icon: IconComponent;
};

const FEATURES: Feature[] = [
  {
    key: "free",
    label: "Free and open source",
    description: "Sharkfin is completely free and always will be. Enough said.",
    iconClassName: "text-cyan-200 bg-cyan-600",
    Icon: HandHeartIcon as unknown as IconComponent,
  },
  {
    key: "local",
    label: "Local-only",
    description:
      "Leverage the power of local models to search without the cloud.",
    iconClassName: "text-pink-100 bg-pink-500",
    Icon: FolderHeartIcon as unknown as IconComponent,
  },
  {
    key: "fast",
    label: "Lightning fast",
    description:
      "Search tens of thousands of images in milliseconds without a beat.",
    iconClassName: "text-yellow-100 bg-yellow-500",
    Icon: ZapIcon as unknown as IconComponent,
  },
  {
    key: "natural",
    label: "Natural language",
    description:
      "Describe what you're looking for, without caring where it's located.",
    iconClassName: "text-teal-100 bg-teal-500",
    Icon: LanguagesIcon as unknown as IconComponent,
  },
  {
    key: "native",
    label: "Native macOS",
    description:
      "Written in native Swift, Sharkfin's performance and UI is distinctly Mac.",
    iconClassName: "text-blue-100 bg-blue-500",
    Icon: HandMetalIcon as unknown as IconComponent,
  },
];

// Tailwind top-64 = 16rem = 256px.
const STICKY_TOP_PX = 256;
const ICON_ANIMATION_TRIGGER_OFFSET = 32;
// How far before the next card covers this one we start the scale/blur,
// expressed as a fraction of the next card's height. 1 = one full card-height
// of scroll; raise for an earlier start, lower for a later start.
const ACTIVE_BAND_RATIO = 1.05;

export default function ScrollingFeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const iconRefs = useMemo<Array<RefObject<IconHandle | null>>>(
    () => FEATURES.map(() => ({ current: null })),
    [],
  );

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(
        (el): el is HTMLDivElement => el !== null,
      );
      if (cards.length === 0) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop:
            "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
          mobile:
            "(prefers-reduced-motion: no-preference) and (max-width: 767px)",
        },
        (ctx) => {
          const isMobile = ctx.conditions?.mobile === true;
          const blurPx = isMobile ? 4 : 12;
          const scaleTo = isMobile ? 0.94 : 0.88;
          const opacityTo = isMobile ? 0.55 : 0.4;

          cards.forEach((card, i) => {
            const next = cards[i + 1];

            // Toggle the icon animation while this card is the topmost
            // sticky card — from when it pins until the next card covers it.
            // The last card has no "next"; keep the trigger open until the
            // section has fully scrolled above the viewport top. Any closer
            // end (e.g. the card's own "bottom bottom") resolves to a
            // scrollY earlier than the start and collapses the range.
            ScrollTrigger.create({
              trigger: card,
              start: `top top+=${STICKY_TOP_PX + ICON_ANIMATION_TRIGGER_OFFSET}`,
              endTrigger: next ?? sectionRef.current ?? card,
              end: next
                ? `top top+=${STICKY_TOP_PX + ICON_ANIMATION_TRIGGER_OFFSET}`
                : "bottom top",
              onToggle: (self) => {
                const handle = iconRefs[i]?.current;
                if (!handle) return;
                if (self.isActive) handle.startAnimation();
                else handle.stopAnimation();
              },
            });

            // Scale + blur out as the next card rises to cover this one.
            if (next) {
              gsap.to(card, {
                scale: scaleTo,
                filter: `blur(${blurPx}px)`,
                opacity: opacityTo,
                ease: "none",
                scrollTrigger: {
                  trigger: next,
                  // Recompute against the next card's live height on refresh
                  // so the start point tracks responsive layout changes.
                  start: () =>
                    `top top+=${
                      STICKY_TOP_PX + next.offsetHeight * ACTIVE_BAND_RATIO
                    }`,
                  end: `top top+=${STICKY_TOP_PX}`,
                  invalidateOnRefresh: true,
                  scrub: 0.35,
                  // Only promote to a compositor layer while animating to
                  // avoid paying the GPU cost outside the transition window.
                  onToggle: (self) => {
                    card.style.willChange = self.isActive
                      ? "transform, filter, opacity"
                      : "";
                  },
                },
              });
            }
          });
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-background relative w-full py-32">
      <div className="page-container items-center gap-8">
        <div className="sticky top-32 z-10 flex flex-row items-center justify-center gap-4">
          <h3 className="text-8xl font-bold">Features</h3>
        </div>

        <div className="flex w-full max-w-2xl flex-col items-center gap-12">
          {FEATURES.map((feature, i) => {
            const { Icon } = feature;
            return (
              <div
                key={feature.key}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="sticky top-64 z-20 flex w-full transform-gpu flex-col gap-4 rounded-3xl bg-neutral-100 p-4 dark:bg-[#1e1e1e]"
              >
                <div className="flex w-full flex-row items-center justify-start gap-8 rounded-3xl border border-black/8 bg-white p-8 dark:border-white/8 dark:bg-[#2a2a2a]">
                  <div
                    className={cn(
                      "flex aspect-square w-20 items-center justify-center rounded-2xl p-2",
                      feature.iconClassName,
                    )}
                  >
                    <Icon ref={iconRefs[i]} size={32} />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-3xl font-medium tracking-tight">
                      {feature.label}
                    </p>
                    <p className="text-foreground/75 text-xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="h-40 w-full rounded-3xl border border-black/8 bg-white dark:border-white/8 dark:bg-[#222222]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
