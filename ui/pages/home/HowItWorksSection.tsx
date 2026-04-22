import Image from "next/image";
import {
  CloudArrowDownIcon,
  FolderPlusIcon,
  MagnifyingGlassIcon,
  type Icon,
} from "@phosphor-icons/react";

import WithDecorativeGlassTooltip from "@/ui/WithDecorativeGlassTooltip";

import { ImageType } from "@/lib/types";
import { cn } from "@/lib/utils";

import Closeup1Image from "@/public/images/app/closeup-1.webp";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-background flex w-full flex-col items-start gap-12 py-28 sm:gap-16 sm:py-32 md:py-40"
    >
      <div className="page-container items-center">
        <div className="flex w-full max-w-6xl flex-col items-start justify-start gap-16">
          <h3 className="text-heading-4 leading-none font-semibold">
            <span>How it works.</span>{" "}
            <span className="text-foreground/45">Search in three steps.</span>
          </h3>

          <div className="flex w-full flex-col gap-16">
            <Item
              icon={CloudArrowDownIcon}
              image={{
                src: Closeup1Image,
                alt: "",
                tooltipLabel: "",
              }}
              primaryText="Download CLIP Models."
              secondaryText="One-time download of your preferred CLIP model, then you're good to go."
            />
            <Item
              icon={FolderPlusIcon}
              image={{
                src: Closeup1Image,
                alt: "",
                tooltipLabel: "",
              }}
              primaryText="Add directories."
              secondaryText="Images here become searchable after indexing—and are automatically re-indexed when you move things around."
              reverse
            />
            <Item
              icon={MagnifyingGlassIcon}
              image={{
                src: Closeup1Image,
                alt: "",
                tooltipLabel: "",
              }}
              primaryText="Search."
              secondaryText="Customize and use the global shortcut to activate Sharkfin—then search for something awesome."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: IconComponent,
  image,
  primaryText,
  secondaryText,
  reverse,
}: {
  icon: Icon;
  image: ImageType;
  primaryText: string;
  secondaryText: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("grid w-full grid-cols-2 gap-16", reverse && "")}>
      <div
        className={cn(
          "flex flex-col items-start justify-center gap-6",
          reverse && "order-2",
        )}
      >
        <IconComponent className="size-8" weight="regular" />
        <p className="text-body max-w-sm leading-tight font-medium">
          <span>{primaryText}</span>{" "}
          <span className="text-foreground/45">{secondaryText}</span>
        </p>
      </div>

      <div
        className={cn(
          "h-124 w-full overflow-hidden rounded-3xl",
          reverse && "order-1",
        )}
      >
        <WithDecorativeGlassTooltip tooltipLabel={image.tooltipLabel}>
          <Image src={image.src} alt={image.alt} />
        </WithDecorativeGlassTooltip>
      </div>
    </div>
  );
}
