import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { type Icon } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { ImageType } from "@/lib/types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
  const rootRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const images = imageRefs.current.filter(
        (el): el is HTMLDivElement => el !== null,
      );
      if (images.length === 0) return;

      const setActive = (idx: number) => {
        images.forEach((el, i) => {
          gsap.to(el, {
            opacity: i === idx ? 1 : 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: true,
          });
        });
      };

      gsap.set(images, { opacity: 0 });
      gsap.set(images[0], { opacity: 1 });

      const triggers = stepRefs.current.map((el, i) =>
        el
          ? ScrollTrigger.create({
              trigger: el,
              start: "center center",
              onEnter: () => setActive(i),
              onLeaveBack: () => setActive(Math.max(0, i - 1)),
            })
          : null,
      );

      return () => {
        triggers.forEach((t) => t?.kill());
      };
    },
    { scope: rootRef, dependencies: [steps.length] },
  );

  return (
    <div ref={rootRef} className="grid w-full grid-cols-2 gap-16">
      <div className="flex flex-col pb-[23vh]">
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

      <div>
        <div className="sticky top-1/2 mt-[23vh] -translate-y-1/2">
          <div className="relative h-136 w-full overflow-hidden rounded-3xl">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                className="absolute inset-0"
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
