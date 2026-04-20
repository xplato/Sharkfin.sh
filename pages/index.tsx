import Image from "next/image";
import { Apple, Github } from "@thesvg/react";
import Marquee from "react-fast-marquee";

import GlassButton from "@/ui/GlassButton";
import WithPageTransition from "@/ui/motion/transitions/WithPageTransition";
import ScrollingFeatureSection from "@/ui/pages/home/ScrollingFeatureSection";

import SharkfinAppIcon from "@/public/brand/sharkfin-app-icon.webp";
import BalloonImage from "@/public/images/balloon.webp";
import Building2Image2 from "@/public/images/building-2.webp";
import Cloud1Image from "@/public/images/cloud-1.webp";
import Cloud2Image from "@/public/images/cloud-2.webp";
import House1Image from "@/public/images/house-1.webp";
import LeafImage from "@/public/images/leaf.webp";
import LighthouseImage from "@/public/images/lighthouse.webp";

export default function Home() {
  return (
    <WithPageTransition>
      <section className="bg-background w-full p-6 pb-12">
        <div className="from-shallows to-spray relative flex items-center justify-center overflow-hidden rounded-3xl bg-linear-to-b pt-32 shadow-xl">
          <div className="absolute top-16 right-0 left-0 z-10 opacity-80">
            <Marquee speed={10}>
              <div className="flex w-[max(76rem,200vw)] flex-row items-center justify-around">
                <div className="max-w-cloud">
                  <Image src={Cloud1Image} alt="Cloud" className="scale-90" />
                </div>
                <div className="max-w-cloud">
                  <Image src={Cloud2Image} alt="Cloud" />
                </div>
                <div className="max-w-cloud scale-[-1_1]">
                  <Image src={Cloud1Image} alt="Cloud" className="scale-90" />
                </div>
                <div className="max-w-cloud scale-[-1_1]">
                  <Image src={Cloud2Image} alt="Cloud" />
                </div>
              </div>
            </Marquee>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-10 flex max-h-96 flex-row items-end justify-between px-8">
            <div className="flex flex-row items-end gap-0">
              <div className="max-w-24">
                <Image src={BalloonImage} alt="Building" />
              </div>
              <div className="max-w-48">
                <Image src={Building2Image2} alt="Building" />
              </div>
            </div>
            <div className="flex flex-row items-end gap-8">
              <div className="max-w-28">
                <Image src={LighthouseImage} alt="Building" />
              </div>
              <div className="max-w-24">
                <Image src={House1Image} alt="Building" />
              </div>
            </div>
          </div>

          <div className="absolute z-10 flex flex-row items-end justify-between px-8">
            <div className="max-w-72">
              <Image src={LeafImage} alt="Leaf" />
            </div>
          </div>

          <div className="page-container relative z-20 items-center gap-12">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex size-24 items-center justify-center rounded-4xl shadow-xl">
                  <Image src={SharkfinAppIcon} alt="Sharkfin App Icon" />
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

      <ScrollingFeatureSection />
    </WithPageTransition>
  );
}
