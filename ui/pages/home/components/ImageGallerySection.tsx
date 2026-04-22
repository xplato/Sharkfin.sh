import Image from "next/image";

import Slider from "@/ui/Slider";
import WithDecorativeGlassTooltip from "@/ui/WithDecorativeGlassTooltip";

import { ImageType } from "@/lib/types";
import { cn } from "@/lib/utils";

import CherryBlossomImage from "@/public/images/app/cherry-blossom.webp";
import PngFilterImage from "@/public/images/app/png-filter.webp";
import SettingsImage from "@/public/images/app/settings.webp";
import VintageChevyImage from "@/public/images/app/vintage-chevy.webp";

export default function ImageGallerySection() {
  return (
    <section className="bg-background flex w-full flex-col items-start gap-12 pt-28 sm:gap-16 sm:pt-32 md:pt-40">
      <div className="page-container items-center">
        <div className="w-full max-w-6xl">
          <h3 className="text-heading-4 leading-none font-semibold">
            <span>Surprisingly relevant.</span>{" "}
            <span className="text-foreground/45">
              Search with natural language.
            </span>
          </h3>
        </div>
      </div>

      <Slider ariaLabel="Sharkfin app gallery" className="flex flex-col gap-16">
        <GalleryItem
          image={{
            src: VintageChevyImage,
            alt: "Sharkfin searchbar showing results for the search term 'vintage chevy'",
            tooltipLabel: "vintage-chevy.webp",
          }}
          primaryText="Relevant results in milliseconds."
          secondaryText="All on your device—no cloud."
          className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl"
        />
        <GalleryItem
          image={{
            src: PngFilterImage,
            alt: "Sharkfin searchbar with the 'type' filter opened, selected to filter only PNG images",
            tooltipLabel: "png-filter.webp",
          }}
          primaryText="Easy result filters, one click away."
          secondaryText="Filter by search scope or file type—right in the searchbar."
          className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl"
        />
        <GalleryItem
          image={{
            src: CherryBlossomImage,
            alt: "Sharkfin searchbar showing the detail view for the search term 'zucchini'",
            tooltipLabel: "cherry-blossom.webp",
          }}
          primaryText="View file metadata."
          secondaryText="Everything you need to know, right where you need it."
          className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl"
        />
        <GalleryItem
          image={{
            src: SettingsImage,
            alt: "Sharkfin settings interface",
            tooltipLabel: "settings.webp",
          }}
          primaryText="Straightforward options."
          secondaryText="Customize app functionality and manage added directories without hassle."
          className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl"
        />
      </Slider>
    </section>
  );
}

function GalleryItem({
  image,
  primaryText,
  secondaryText,
  className,
}:
  | {
      image: ImageType;
      primaryText: string;
      secondaryText: string;
      className: string;
    }
  | {
      image: ImageType;
      primaryText?: string;
      secondaryText?: string;
      className: string;
    }) {
  return (
    <div
      className={cn("flex flex-col items-start justify-start gap-8", className)}
    >
      <div className="h-64 w-full overflow-hidden rounded-3xl sm:h-80 md:h-96 lg:h-128">
        <WithDecorativeGlassTooltip tooltipLabel={image.tooltipLabel}>
          <Image src={image.src} alt={image.alt} />
        </WithDecorativeGlassTooltip>
      </div>

      {primaryText && secondaryText && (
        <div className="w-full max-w-xl px-6">
          <p className="text-body leading-tight font-medium">
            <span>{primaryText}</span>{" "}
            <span className="text-foreground/45">{secondaryText}</span>
          </p>
        </div>
      )}
    </div>
  );
}
