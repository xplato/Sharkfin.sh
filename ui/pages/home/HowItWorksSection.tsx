import Image from "next/image";
import {
  CloudArrowDownIcon,
  FolderPlusIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";

import ScrollLinkedStepSection, {
  type ScrollLinkedStep,
} from "@/ui/ScrollLinkedStepSection";

import Step1Image from "@/public/images/app/step-1.webp";
import Step2Image from "@/public/images/app/step-2.webp";
import Step3Image from "@/public/images/app/step-3.webp";

const STEPS: ScrollLinkedStep[] = [
  {
    icon: CloudArrowDownIcon,
    image: {
      src: Step1Image,
      alt: "Sharkfin's CLIP Model download screen",
    },
    primaryText: "Download CLIP Models.",
    secondaryText:
      "One-time download of your preferred CLIP model, then you're good to go.",
  },
  {
    icon: FolderPlusIcon,
    image: {
      src: Step2Image,
      alt: "Sharkfin's Add Directories screen",
    },
    primaryText: "Add directories.",
    secondaryText:
      "Images here become searchable after indexing—and are automatically re-indexed when you move things around.",
  },
  {
    icon: MagnifyingGlassIcon,
    image: {
      src: Step3Image,
      alt: "Sharkfin's Onboarding Completed screen",
    },
    primaryText: "Search.",
    secondaryText:
      "Customize and use the global shortcut to activate Sharkfin—then search for something awesome.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-background flex w-full flex-col items-start gap-12 pt-28 sm:gap-16 sm:pt-32 md:pt-40"
    >
      <div className="page-container items-center">
        <div className="flex w-full max-w-6xl flex-col items-start justify-start gap-16">
          <h3 className="text-heading-4 leading-none font-semibold">
            <span>How it works.</span>
          </h3>

          <div className="hidden w-full lg:flex">
            <ScrollLinkedStepSection steps={STEPS} />
          </div>

          <div className="flex w-full flex-col gap-16 lg:hidden">
            {STEPS.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <div key={i} className="flex w-full flex-col items-start gap-6">
                  <div className="flex flex-row items-start justify-start gap-4 px-6">
                    <IconComponent
                      className="size-6 shrink-0"
                      weight="regular"
                    />
                    <p className="text-body leading-tight font-medium">
                      <span>{step.primaryText}</span>{" "}
                      <span className="text-foreground/45">
                        {step.secondaryText}
                      </span>
                    </p>
                  </div>
                  <div className="relative h-128 w-full overflow-hidden rounded-3xl sm:h-124">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
