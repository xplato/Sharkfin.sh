import Image from "next/image";
import { Apple, Github } from "@thesvg/react";
import Marquee from "react-fast-marquee";

import GlassButton from "@/ui/GlassButton";
import WithDecorativeGlassTooltip from "@/ui/WithDecorativeGlassTooltip";

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

export default function HeroSection() {
  return (
    <section className="bg-background w-full p-4 pb-12 sm:p-6">
      <div className="from-shallows to-spray relative flex items-center justify-center overflow-hidden rounded-3xl bg-linear-to-b pt-32 shadow-[0px_4px_16px_rgba(0,0,0,0.05)]">
        <div className="absolute top-16 right-0 left-0 z-10 opacity-80">
          <Marquee speed={10}>
            <div className="flex w-[max(76rem,200vw)] flex-row items-center justify-around">
              <div className="max-w-cloud">
                <WithDecorativeGlassTooltip tooltipLabel="cloud-1.webp">
                  <Image src={Cloud1Image} alt="Cloud" className="scale-90" />
                </WithDecorativeGlassTooltip>
              </div>
              <div className="max-w-cloud">
                <WithDecorativeGlassTooltip tooltipLabel="cloud-2.webp">
                  <Image src={Cloud2Image} alt="Cloud" />
                </WithDecorativeGlassTooltip>
              </div>
              <div className="max-w-cloud scale-[-1_1]">
                <WithDecorativeGlassTooltip tooltipLabel="cloud-1.webp">
                  <Image src={Cloud1Image} alt="Cloud" className="scale-90" />
                </WithDecorativeGlassTooltip>
              </div>
              <div className="max-w-cloud scale-[-1_1]">
                <WithDecorativeGlassTooltip tooltipLabel="cloud-2.webp">
                  <Image src={Cloud2Image} alt="Cloud" />
                </WithDecorativeGlassTooltip>
              </div>
            </div>
          </Marquee>
        </div>

        <div className="absolute right-0 bottom-0 left-0 z-10 flex max-h-96 flex-row items-end justify-between px-8">
          <div className="flex flex-row items-end gap-0">
            <div className="max-w-24">
              <WithDecorativeGlassTooltip tooltipLabel="balloon.webp">
                <Image src={BalloonImage} alt="Pink Balloon" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-48">
              <WithDecorativeGlassTooltip tooltipLabel="building-2.webp">
                <Image src={Building2Image2} alt="Building" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-26">
              <WithDecorativeGlassTooltip tooltipLabel="house-2.webp">
                <Image src={House2Image} alt="House" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="ml-4 max-w-26">
              <WithDecorativeGlassTooltip tooltipLabel="wildlife-sign.webp">
                <Image src={WildlifeSignImage} alt="Wildlife sign" />
              </WithDecorativeGlassTooltip>
            </div>
          </div>
          <div className="flex flex-row items-end gap-8">
            <div className="max-w-56">
              <WithDecorativeGlassTooltip
                tooltipLabel="pyramid.webp"
                placement="top-left"
              >
                <Image src={PyramidImage} alt="Pyramid of Giza" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-26">
              <WithDecorativeGlassTooltip
                tooltipLabel="turbine.webp"
                placement="top-left"
              >
                <Image src={TurbineImage} alt="Wind Turbine" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-28">
              <WithDecorativeGlassTooltip
                tooltipLabel="lighthouse.webp"
                placement="top-left"
              >
                <Image src={LighthouseImage} alt="Lighthouse" />
              </WithDecorativeGlassTooltip>
            </div>
            <div className="max-w-24">
              <WithDecorativeGlassTooltip
                tooltipLabel="house-1.webp"
                placement="top-left"
              >
                <Image src={House1Image} alt="House" />
              </WithDecorativeGlassTooltip>
            </div>
          </div>
        </div>

        <div className="absolute z-10 flex flex-row items-end justify-between px-8">
          <div className="max-w-32 sm:max-w-64 md:max-w-72">
            <WithDecorativeGlassTooltip tooltipLabel="leaf.webp">
              <Image src={LeafImage} alt="Leaf" />
            </WithDecorativeGlassTooltip>
          </div>
        </div>

        <div className="page-container items-center gap-12">
          <div className="relative z-20 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex size-24 items-center justify-center rounded-4xl shadow-xl">
                <WithDecorativeGlassTooltip tooltipLabel="sharkfin-app-icon.webp">
                  <Image src={SharkfinAppIcon} alt="Sharkfin App Icon" />
                </WithDecorativeGlassTooltip>
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
                {/* TODO: Uncomment once published */}
                {/*<GlassButton
                  size="lg"
                  startIcon={
                    <Apple className="size-full invert dark:invert-0" />
                  }
                  label="Download"
                />*/}
                <GlassButton
                  as="a"
                  href="https://github.com/xplato/Sharkfin"
                  target="_blank"
                  size="lg"
                  startIcon={
                    <Github className="size-full invert dark:invert-0" />
                  }
                  label="GitHub"
                />
              </div>

              <p className="text-foreground/50 text-base tracking-tight">
                Free and open source
              </p>
            </div>
          </div>

          <div className="relative z-20 max-h-164 w-full max-w-5xl rounded-t-4xl border border-b-0 border-white/50 bg-white/30 p-3.5 pb-0 backdrop-blur-2xl">
            <div className="flex items-center justify-center overflow-hidden rounded-t-3xl bg-white">
              <video
                src="https://kmjffir9lpkjkv1u.public.blob.vercel-storage.com/sharkfin-demo-1"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
