import Image from "next/image";

import Slider from "@/ui/Slider";
import WithDecorativeGlassTooltip from "@/ui/WithDecorativeGlassTooltip";

import { ImageType } from "@/lib/types";

import GalleryImage1 from "@/public/images/app/closeup-1.webp";
import GalleryImage2 from "@/public/images/app/closeup-2.webp";
import GalleryImage3 from "@/public/images/app/closeup-dark-1.webp";
import GalleryImage4 from "@/public/images/app/closeup-dark-2.webp";

export default function ImageGallerySection() {
  return (
    <section className="bg-background flex w-full flex-col items-start gap-16 py-24 sm:py-32 md:py-40">
      <div className="page-container items-center">
        <div className="w-full max-w-6xl">
          <h3 className="text-heading-4 font-semibold">Sharkfin</h3>
        </div>
      </div>

      <Slider ariaLabel="Sharkfin app gallery" className="flex flex-col gap-10">
        <GalleryItem
          image={{
            src: GalleryImage1,
            alt: "",
            tooltipLabel: "",
          }}
          primaryText="Crazy fast."
          secondaryText="Seriously"
        />
        <GalleryItem
          image={{
            src: GalleryImage2,
            alt: "",
            tooltipLabel: "",
          }}
          primaryText="Crazy fast."
          secondaryText="Seriously"
        />
        <GalleryItem
          image={{
            src: GalleryImage3,
            alt: "",
            tooltipLabel: "",
          }}
          primaryText="Crazy fast."
          secondaryText="Seriously"
        />
        <GalleryItem
          image={{
            src: GalleryImage4,
            alt: "",
            tooltipLabel: "",
          }}
          primaryText="Crazy fast."
          secondaryText="Seriously"
        />
      </Slider>
    </section>
  );
}

function GalleryItem({
  image,
  primaryText,
  secondaryText,
}: {
  image: ImageType;
  primaryText: string;
  secondaryText: string;
}) {
  return (
    <div className="flex max-w-xl flex-col items-start justify-start gap-8">
      <div className="max-h-128 w-full overflow-hidden rounded-3xl">
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
