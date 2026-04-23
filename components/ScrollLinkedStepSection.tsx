import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { type Icon } from "@phosphor-icons/react";

import { ImageType } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface ScrollLinkedStep {
  icon: Icon;
  image: Omit<ImageType, "tooltipLabel">;
  primaryText: string;
  secondaryText: string;
}

interface Props {
  steps: ScrollLinkedStep[];
}

export default function ScrollLinkedStepSection({ steps }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1) setActiveIndex(idx);
        }
      }
    },
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    });

    const els = stepRefs.current;
    els.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [steps.length, handleIntersection]);

  return (
    <div className="grid w-full grid-cols-2 gap-16">
      <div className="flex flex-col pb-[35vh]">
        {steps.map((step, i) => {
          const IconComponent = step.icon;
          return (
            <div
              key={i}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="flex min-h-[40vh] flex-col items-start justify-center gap-6"
            >
              <IconComponent className="size-8" weight="regular" />
              <p className="text-body max-w-sm leading-tight font-medium">
                <span>{step.primaryText}</span>{" "}
                <span className="text-foreground/45">{step.secondaryText}</span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-[20vh] mb-[calc(50vh-34rem)]">
        <div className="sticky top-[50vh] -translate-y-1/2">
          <div className="relative h-136 w-full overflow-hidden rounded-3xl shadow-lg">
            {steps.map((step, i) => (
              <div
                key={i}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500 ease-out",
                  i === activeIndex ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
