"use client";

import type { ElementType, ReactNode, Ref, RefObject } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, CustomEase);

const CATAPULT_EASE_ID = "sharkfin-catapult";

if (typeof window !== "undefined" && !CustomEase.get(CATAPULT_EASE_ID)) {
  CustomEase.create(CATAPULT_EASE_ID, "0.6,0,0,1");
}

export const ANIMATE_IN_DURATION = 1;
export const ANIMATE_IN_EASE = CATAPULT_EASE_ID;

type AnimateInVariant = "fadeScale" | "fadeUp";

const FROM: Record<AnimateInVariant, gsap.TweenVars> = {
  fadeScale: { autoAlpha: 0, scale: 0.92 },
  fadeUp: { autoAlpha: 0, y: 48 },
};

const TO: Record<AnimateInVariant, gsap.TweenVars> = {
  fadeScale: { autoAlpha: 1, scale: 1 },
  fadeUp: { autoAlpha: 1, y: 0 },
};

interface Props {
  variant: AnimateInVariant;
  delay?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

export default function AnimateIn({
  variant,
  delay = 0,
  stagger,
  duration = ANIMATE_IN_DURATION,
  ease = ANIMATE_IN_EASE,
  className,
  children,
  as: Comp = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const isStagger = stagger !== undefined;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const target: gsap.TweenTarget = isStagger ? el.children : el;
      gsap.fromTo(target, FROM[variant], {
        ...TO[variant],
        duration,
        ease,
        delay,
        stagger,
      });
    },
    { scope: ref as RefObject<HTMLElement> },
  );

  return (
    <Comp
      ref={ref as Ref<HTMLElement>}
      className={cn(className, isStagger && "[&>*]:invisible")}
      style={isStagger ? undefined : { visibility: "hidden" }}
    >
      {children}
    </Comp>
  );
}
