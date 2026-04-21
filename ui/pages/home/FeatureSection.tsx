import {
  CommandIcon,
  FolderLockIcon,
  GiftIcon,
  HandPeaceIcon,
  LightningIcon,
} from "@phosphor-icons/react";

import GradientText from "@/ui/GradientText";

const FEATURES = [
  {
    icon: <GiftIcon weight="light" className="size-full" />,
    label: "Free & open source",
  },
  {
    icon: <FolderLockIcon weight="light" className="size-full" />,
    label: "Local only, zero cloud",
  },
  {
    icon: <LightningIcon weight="light" className="size-full" />,
    label: "Crazy fast, seriously",
  },
  {
    icon: <HandPeaceIcon weight="light" className="size-full" />,
    label: "Search with natural language",
  },
  {
    icon: <CommandIcon weight="light" className="size-full" />,
    label: "Built macOS native",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-background w-full py-20 sm:py-24 md:py-32">
      <div className="page-container items-center gap-24">
        <div className="flex max-w-3xl items-center justify-center text-center">
          <h2 className="text-foreground/95 text-heading-3 leading-tight font-medium tracking-tight">
            Search images locally with{" "}
            <GradientText>natural language</GradientText>
          </h2>
        </div>

        <div className="flex flex-row flex-wrap items-start justify-center gap-12">
          {FEATURES.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center justify-center gap-6 text-center"
            >
              <div className="flex size-12 items-center justify-center sm:size-16">
                {feature.icon}
              </div>
              <p className="max-w-42 text-xl leading-tight font-medium tracking-tight sm:text-2xl">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
