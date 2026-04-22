import Image from "next/image";
import GlassButton from "@/components/GlassButton";
import AnimateIn from "@/components/motion/AnimateIn";
import WithDecorativeGlassTooltip from "@/components/WithDecorativeGlassTooltip";
import { Apple, Github } from "@thesvg/react";
import Marquee from "react-fast-marquee";

import SharkfinAppIcon from "@/public/brand/sharkfin-app-icon.webp";
import BalloonImage from "@/public/images/balloon.webp";
import Building2Image2 from "@/public/images/building-2.webp";
import Cloud1Image from "@/public/images/cloud-1.webp";
import Cloud2Image from "@/public/images/cloud-2.webp";
import House1Image from "@/public/images/house-1.webp";
import House2Image from "@/public/images/house-2.webp";
import LeafImage from "@/public/images/leaf.webp";
import LighthouseImage from "@/public/images/lighthouse.webp";
import PyramidImage from "@/public/images/pyramid.webp";
import TurbineImage from "@/public/images/turbine.webp";
import WildlifeSignImage from "@/public/images/wildlife-sign.webp";

const STEP_DELAY = 0.15;
const BOTTOM_ROW_STAGGER = 0.04;

const DELAY = {
  clouds: 0,
  leaf: STEP_DELAY * 3,
  bottomRow: 0,
  appIcon: STEP_DELAY * 1,
  heading: STEP_DELAY * 2,
  subheading: STEP_DELAY * 3,
  buttons: STEP_DELAY * 4,
  video: STEP_DELAY * 1,
};

export default function HeroSection() {
  return (
    <section className="bg-background w-full p-4 pb-12 sm:p-6">
      <div className="from-shallows to-spray relative flex items-center justify-center overflow-hidden rounded-3xl bg-linear-to-b pt-20 shadow-[0px_4px_16px_rgba(0,0,0,0.05)] sm:pt-24 md:pt-32">
        <AnimateIn
          variant="fadeScale"
          delay={DELAY.clouds}
          className="absolute top-16 right-0 left-0 z-10"
        >
          <div className="opacity-80">
            <Marquee speed={10}>
              <div className="flex w-[max(76rem,200vw)] flex-row items-center justify-around">
                <div className="max-w-cloud">
                  <WithDecorativeGlassTooltip tooltipLabel="cloud-1.webp">
                    <Image
                      src={Cloud1Image}
                      alt="Cloud"
                      loading="eager"
                      className="scale-90"
                    />
                  </WithDecorativeGlassTooltip>
                </div>
                <div className="max-w-cloud">
                  <WithDecorativeGlassTooltip tooltipLabel="cloud-2.webp">
                    <Image src={Cloud2Image} alt="Cloud" loading="eager" />
                  </WithDecorativeGlassTooltip>
                </div>
                <div className="max-w-cloud scale-[-1_1]">
                  <WithDecorativeGlassTooltip tooltipLabel="cloud-1.webp">
                    <Image
                      src={Cloud1Image}
                      alt="Cloud"
                      loading="eager"
                      className="scale-90"
                    />
                  </WithDecorativeGlassTooltip>
                </div>
                <div className="max-w-cloud scale-[-1_1]">
                  <WithDecorativeGlassTooltip tooltipLabel="cloud-2.webp">
                    <Image src={Cloud2Image} alt="Cloud" loading="eager" />
                  </WithDecorativeGlassTooltip>
                </div>
              </div>
            </Marquee>
          </div>
        </AnimateIn>

        <div className="absolute right-0 bottom-0 left-0 z-10 hidden max-h-96 flex-row items-end justify-between px-8 sm:flex">
          <AnimateIn
            variant="fadeUp"
            delay={DELAY.bottomRow}
            stagger={BOTTOM_ROW_STAGGER}
            className="flex flex-row items-end gap-0"
          >
            <div className="max-w-24">
              <WithDecorativeGlassTooltip tooltipLabel="balloon.webp">
                <Image src={BalloonImage} alt="Pink Balloon" loading="eager" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-48">
              <WithDecorativeGlassTooltip tooltipLabel="building-2.webp">
                <Image src={Building2Image2} alt="Building" loading="eager" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-26">
              <WithDecorativeGlassTooltip tooltipLabel="house-2.webp">
                <Image src={House2Image} alt="House" loading="eager" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="ml-4 max-w-26">
              <WithDecorativeGlassTooltip tooltipLabel="wildlife-sign.webp">
                <Image
                  src={WildlifeSignImage}
                  alt="Wildlife sign"
                  loading="eager"
                />
              </WithDecorativeGlassTooltip>
            </div>
          </AnimateIn>
          <AnimateIn
            variant="fadeUp"
            delay={DELAY.bottomRow}
            stagger={BOTTOM_ROW_STAGGER}
            className="flex flex-row items-end gap-8"
          >
            <div className="max-w-56">
              <WithDecorativeGlassTooltip
                tooltipLabel="pyramid.webp"
                placement="top-left"
              >
                <Image
                  src={PyramidImage}
                  alt="Pyramid of Giza"
                  loading="eager"
                />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-26">
              <WithDecorativeGlassTooltip
                tooltipLabel="turbine.webp"
                placement="top-left"
              >
                <Image src={TurbineImage} alt="Wind Turbine" loading="eager" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-28">
              <WithDecorativeGlassTooltip
                tooltipLabel="lighthouse.webp"
                placement="top-left"
              >
                <Image src={LighthouseImage} alt="Lighthouse" loading="eager" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-24">
              <WithDecorativeGlassTooltip
                tooltipLabel="house-1.webp"
                placement="top-left"
              >
                <Image src={House1Image} alt="House" loading="eager" />
              </WithDecorativeGlassTooltip>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn
          variant="fadeScale"
          delay={DELAY.leaf}
          className="absolute z-10 flex flex-row items-end justify-between px-8"
        >
          <div className="max-w-32 sm:max-w-64 md:max-w-72">
            <WithDecorativeGlassTooltip tooltipLabel="leaf.webp">
              <Image src={LeafImage} alt="Leaf" loading="eager" />
            </WithDecorativeGlassTooltip>
          </div>
        </AnimateIn>

        <div className="page-container items-center gap-12 px-0 sm:px-6">
          <div className="relative z-20 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center justify-center gap-8">
              <AnimateIn
                variant="fadeScale"
                delay={DELAY.appIcon}
                className="flex size-24 items-center justify-center rounded-4xl shadow-xl"
              >
                <WithDecorativeGlassTooltip tooltipLabel="sharkfin-app-icon.webp">
                  <Image
                    src={SharkfinAppIcon}
                    alt="Sharkfin App Icon"
                    loading="eager"
                  />
                </WithDecorativeGlassTooltip>
              </AnimateIn>

              <div className="flex flex-col items-center justify-center gap-4">
                <AnimateIn
                  as="h1"
                  variant="fadeUp"
                  delay={DELAY.heading}
                  className="text-heading font-zalando leading-none font-semibold tracking-tight"
                >
                  Sharkfin
                </AnimateIn>

                <AnimateIn
                  as="h2"
                  variant="fadeUp"
                  delay={DELAY.subheading}
                  className="text-subheading leading-none font-medium tracking-tight"
                >
                  <span className="text-foreground/75">
                    A better way to find images on Mac
                  </span>
                </AnimateIn>
              </div>
            </div>
            <AnimateIn
              variant="fadeUp"
              delay={DELAY.buttons}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex flex-row items-center gap-3">
                <GlassButton
                  as="a"
                  href="https://github.com/xplato/Sharkfin/releases/latest/download/Sharkfin.dmg"
                  download
                  size="lg"
                  startIcon={<Apple className="size-full invert" />}
                  label="Download"
                />
                <GlassButton
                  as="a"
                  href="https://github.com/xplato/Sharkfin"
                  target="_blank"
                  size="lg"
                  startIcon={<Github className="size-full invert" />}
                  label="GitHub"
                />
              </div>
            </AnimateIn>
          </div>

          <AnimateIn
            variant="fadeScale"
            delay={DELAY.video}
            className="relative z-20 max-h-164 w-full max-w-5xl rounded-t-4xl border-0 border-white/60 bg-white/30 sm:border sm:border-b-0 sm:p-3.5 sm:pb-0 sm:backdrop-blur-2xl"
          >
            <div className="flex items-center justify-center overflow-hidden rounded-t-3xl border border-x-0 border-b-0 border-white/60 sm:border-x">
              <video
                src="https://kmjffir9lpkjkv1u.public.blob.vercel-storage.com/sharkfin-demo-4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
