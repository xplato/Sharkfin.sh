import Image from "next/image";

import Slider from "@/ui/Slider";
import WithDecorativeGlassTooltip from "@/ui/WithDecorativeGlassTooltip";

import { ImageType } from "@/lib/types";
import { cn } from "@/lib/utils";

import RelevanceImage3 from "@/public/images/app/tiger-in-pool.webp";
import RelevanceImage4 from "@/public/images/app/vintage-chevy.webp";
import RelevanceImage2 from "@/public/images/app/woman-as-flamingo.webp";

export default function ImageGallerySection() {
  return (
    <section className="bg-background flex w-full flex-col items-start gap-16 py-24 sm:py-32 md:py-40">
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

      <Slider ariaLabel="Sharkfin app gallery" className="flex flex-col gap-10">
        <GalleryItem
          image={{
            src: RelevanceImage4,
            alt: "Sharkfin searchbar showing results for the search term 'vintage chevy'",
            tooltipLabel: "vintage-chevy.webp",
          }}
          primaryText="Crazy fast."
          secondaryText="Seriously"
          className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl"
        />
        <GalleryItem
          image={{
            src: RelevanceImage2,
            alt: "Sharkfin searchbar showing results for the search term 'woman as flamingo'",
            tooltipLabel: "woman-as-flamingo.webp",
          }}
          primaryText="Crazy fast."
          secondaryText="Seriously"
          className="max-w-sm sm:max-w-md md:max-w-xl"
        />
        <GalleryItem
          image={{
            src: RelevanceImage3,
            alt: "Sharkfin searchbar showing results for the search term 'tiger in pool'",
            tooltipLabel: "tiger-in-pool.webp",
          }}
          primaryText="Crazy fast."
          secondaryText="Seriously"
          className="max-w-sm sm:max-w-md md:max-w-xl"
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
}: {
  image: ImageType;
  primaryText: string;
  secondaryText: string;
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

      <div className="w-full px-6">
        <p className="text-xl font-medium">
          <span>{primaryText}</span>{" "}
          <span className="text-foreground/45">{secondaryText}</span>
        </p>
      </div>
    </div>
  );
}
