import Image from "next/image";
import {
  CommandIcon,
  FolderLockIcon,
  GiftIcon,
  HandPeaceIcon,
  LightningIcon,
} from "@phosphor-icons/react";
import { Apple, Github } from "@thesvg/react";
import Marquee from "react-fast-marquee";

import GlassButton from "@/ui/GlassButton";
import WithPageTransition from "@/ui/motion/transitions/WithPageTransition";
import TextLink from "@/ui/TextLink";
import TooltipImage from "@/ui/TooltipImage";

import SharkfinAppIcon from "@/public/brand/sharkfin-app-icon.webp";
import BalloonImage from "@/public/images/balloon.webp";
import Building2Image2 from "@/public/images/building-2.webp";
import Cloud1Image from "@/public/images/cloud-1.webp";
import Cloud2Image from "@/public/images/cloud-2.webp";
import House1Image from "@/public/images/house-1.webp";
import LeafImage from "@/public/images/leaf.webp";
import LighthouseImage from "@/public/images/lighthouse.webp";

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

export default function Home() {
  return (
    <WithPageTransition>
      <div className="bg-background w-full p-6 pb-0">
        <div className="bg-shallows w-full rounded-2xl px-6 py-4">
          <p className="text-center text-base">
            This website is currently being built out and is not yet complete.
            In the meantime, you can follow along on{" "}
            <TextLink href="https://github.com/xplato/Sharkfin.sh">
              GitHub
            </TextLink>
            .
          </p>
        </div>
      </div>
      <section className="bg-background w-full p-6 pb-12">
        <div className="from-shallows to-spray relative flex items-center justify-center overflow-hidden rounded-3xl bg-linear-to-b pt-32 shadow-xl">
          <div className="absolute top-16 right-0 left-0 z-10 opacity-80">
            <Marquee speed={10}>
              <div className="flex w-[max(76rem,200vw)] flex-row items-center justify-around">
                <div className="max-w-cloud">
                  <TooltipImage tooltipLabel="cloud-1.webp">
                    <Image src={Cloud1Image} alt="Cloud" className="scale-90" />
                  </TooltipImage>
                </div>
                <div className="max-w-cloud">
                  <TooltipImage tooltipLabel="cloud-2.webp">
                    <Image src={Cloud2Image} alt="Cloud" />
                  </TooltipImage>
                </div>
                <div className="max-w-cloud scale-[-1_1]">
                  <TooltipImage tooltipLabel="cloud-1.webp">
                    <Image src={Cloud1Image} alt="Cloud" className="scale-90" />
                  </TooltipImage>
                </div>
                <div className="max-w-cloud scale-[-1_1]">
                  <TooltipImage tooltipLabel="cloud-2.webp">
                    <Image src={Cloud2Image} alt="Cloud" />
                  </TooltipImage>
                </div>
              </div>
            </Marquee>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-10 flex max-h-96 flex-row items-end justify-between px-8">
            <div className="flex flex-row items-end gap-0">
              <div className="max-w-24">
                <TooltipImage tooltipLabel="balloon.webp">
                  <Image src={BalloonImage} alt="Building" />
                </TooltipImage>
              </div>
              <div className="max-w-48">
                <TooltipImage tooltipLabel="building-2.webp">
                  <Image src={Building2Image2} alt="Building" />
                </TooltipImage>
              </div>
            </div>
            <div className="flex flex-row items-end gap-8">
              <div className="max-w-28">
                <TooltipImage
                  tooltipLabel="lighthouse.webp"
                  placement="top-left"
                >
                  <Image src={LighthouseImage} alt="Building" />
                </TooltipImage>
              </div>
              <div className="max-w-24">
                <TooltipImage tooltipLabel="house-1.webp" placement="top-left">
                  <Image src={House1Image} alt="Building" />
                </TooltipImage>
              </div>
            </div>
          </div>

          <div className="absolute z-10 flex flex-row items-end justify-between px-8">
            <div className="max-w-72">
              <TooltipImage tooltipLabel="leaf.webp">
                <Image src={LeafImage} alt="Leaf" />
              </TooltipImage>
            </div>
          </div>

          <div className="page-container items-center gap-12">
            <div className="relative z-20 flex flex-col items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex size-24 items-center justify-center rounded-4xl shadow-xl">
                  <TooltipImage tooltipLabel="sharkfin-app-icon.webp">
                    <Image src={SharkfinAppIcon} alt="Sharkfin App Icon" />
                  </TooltipImage>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                  <h1 className="text-heading font-zalando leading-none font-semibold tracking-tight">
                    Sharkfin
                  </h1>

                  <h2 className="text-foreground/75 text-subheading leading-none font-medium tracking-tight">
                    A better way to find images on Mac
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
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

                <p className="text-foreground/50 text-base tracking-tight">
                  Free and open source
                </p>
              </div>
            </div>

            <div className="relative z-20 h-164 w-full max-w-5xl rounded-t-3xl bg-white dark:bg-neutral-800"></div>
          </div>
        </div>
      </section>

      <section className="bg-background w-full py-32">
        <div className="page-container items-center gap-24">
          <div className="flex max-w-3xl items-center justify-center text-center">
            <h2 className="text-foreground/95 text-heading-3 leading-none font-medium tracking-tight">
              Search images locally with natural language
            </h2>
          </div>

          <div className="flex flex-row flex-wrap items-start justify-center gap-12">
            {FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center justify-center gap-6 text-center"
              >
                <div className="flex size-16 items-center justify-center">
                  {feature.icon}
                </div>
                <p className="max-w-42 text-2xl leading-tight font-medium tracking-tight">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </WithPageTransition>
  );
}
