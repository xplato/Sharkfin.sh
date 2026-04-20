import Image from "next/image";
import { ArrowSquareOutIcon, HeartIcon } from "@phosphor-icons/react";
import { Apple, Github } from "@thesvg/react";

import GradientText from "@/ui/GradientText";

import GlassButton from "../GlassButton";
import TextLink from "../TextLink";
import TooltipImage from "../TooltipImage";

import LandscapeImage from "@/public/images/landscape.webp";

export default function Footer() {
  return (
    <footer className="bg-background w-full p-6">
      <div className="bg-spray w-full overflow-hidden rounded-3xl pt-16">
        <div className="flex w-full flex-col items-start justify-between gap-16 px-8 sm:px-12 md:flex-row">
          <div className="flex w-full flex-col gap-10">
            <h2 className="text-heading-2 max-w-xl leading-[0.9] font-semibold">
              Search, <GradientText>better.</GradientText>
            </h2>
            <div className="flex flex-row items-center gap-3">
              <GlassButton
                size="lg"
                startIcon={<Apple className="invert dark:invert-0" />}
                label="Download"
              />
              <GlassButton
                as="a"
                href="https://github.com/xplato/Sharkfin"
                target="_blank"
                size="lg"
                startIcon={<Github className="invert dark:invert-0" />}
                label="GitHub"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-8 text-right md:items-end md:gap-16">
            <div className="flex flex-col items-start justify-start gap-3 md:items-end">
              <TextLink href="/privacy" size="md">
                Privacy
              </TextLink>
              <TextLink href="https://github.com/xplato/Sharkfin.sh" size="md">
                View this site on GitHub
              </TextLink>
            </div>

            <p className="flex flex-row items-center justify-center gap-2 text-base font-medium whitespace-nowrap">
              <span>Made with</span>
              <HeartIcon weight="fill" className="size-5 text-red-500" />
              <span>in Salt Lake City</span>
            </p>
          </div>
        </div>

        <div className="mt-16 flex max-h-128 w-full items-start justify-start">
          <TooltipImage tooltipLabel="landscape.webp">
            <Image src={LandscapeImage} alt="Landscape" />
          </TooltipImage>
        </div>
      </div>
    </footer>
  );
}
