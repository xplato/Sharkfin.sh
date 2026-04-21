import Image, { StaticImageData } from "next/image";

import WithDecorativeGlassTooltip, {
  ColorMode,
} from "@/ui/WithDecorativeGlassTooltip";

import { cn } from "@/lib/utils";

interface ImageType {
  src: StaticImageData;
  alt: string;
  tooltipLabel: string;
}

interface Props {
  title: string;
  subtitle?: string;
  primaryImage: ImageType;
  firstDualImage: ImageType;
  secondDualImage: ImageType;
  description: string;
  variant?: ColorMode;
  forceTooltipColorMode?: ColorMode;
}

export default function ImageSection({
  title,
  subtitle,
  primaryImage,
  firstDualImage,
  secondDualImage,
  description,
  variant = "light",
  forceTooltipColorMode,
}: Props) {
  return (
    <section className="bg-background w-full p-4 pb-0! md:p-6">
      <div
        className={cn("rounded-3xl py-24 sm:py-32 md:py-40", {
          "text-background bg-linear-to-b from-neutral-800 to-neutral-900":
            variant === "dark",
        })}
      >
        <div className="page-container items-center">
          <div className="flex w-full max-w-6xl flex-col items-start justify-start gap-16">
            <div className="px-6">
              <div className="flex flex-col items-start justify-start gap-1">
                <h3 className="text-heading-3 leading-none font-bold">
                  {title}
                </h3>
                <h3 className="text-heading-3 leading-none font-medium">
                  <span
                    className={cn(
                      variant === "light" && "text-foreground/50",
                      variant === "dark" && "text-background/35",
                    )}
                  >
                    {subtitle}
                  </span>
                </h3>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 sm:gap-6 md:gap-8">
              <div className="max-h-164 w-full overflow-hidden rounded-3xl">
                <WithDecorativeGlassTooltip
                  tooltipLabel={primaryImage.tooltipLabel}
                  forceColorMode={forceTooltipColorMode}
                >
                  <Image src={primaryImage.src} alt={primaryImage.alt} />
                </WithDecorativeGlassTooltip>
              </div>
              <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
                <div>
                  <div className="overflow-hidden rounded-3xl">
                    <WithDecorativeGlassTooltip
                      tooltipLabel={firstDualImage.tooltipLabel}
                      forceColorMode={forceTooltipColorMode}
                    >
                      <Image
                        src={firstDualImage.src}
                        alt={firstDualImage.alt}
                      />
                    </WithDecorativeGlassTooltip>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="overflow-hidden rounded-3xl">
                      <WithDecorativeGlassTooltip
                        tooltipLabel={secondDualImage.tooltipLabel}
                        forceColorMode={forceTooltipColorMode}
                      >
                        <Image
                          src={secondDualImage.src}
                          alt={secondDualImage.alt}
                        />
                      </WithDecorativeGlassTooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6">
              <p className="text-subheading leading-snug font-[450]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
