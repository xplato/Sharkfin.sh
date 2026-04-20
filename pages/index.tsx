import Image from "next/image";
import { Apple, Github } from "@thesvg/react";

import GlassButton from "@/ui/GlassButton";
import WithPageTransition from "@/ui/motion/transitions/WithPageTransition";
import ScrollingFeatureSection from "@/ui/pages/home/ScrollingFeatureSection";

import Building1Image from "@/public/images/building-1.png";
import Building2Image from "@/public/images/building-2.png";
import Building3Image from "@/public/images/building-3.png";
import Building4Image from "@/public/images/building-4.png";
import Building5Image from "@/public/images/building-5.png";
import Cloud1Image from "@/public/images/cloud-1.png";
import Cloud2Image from "@/public/images/cloud-2.png";
import SharkfinAppIcon from "@/public/sharkfin-app-icon.png";

export default function Home() {
  return (
    <WithPageTransition>
      <section className="bg-background w-full p-6 pb-12">
        <div className="bg-shallows relative overflow-hidden rounded-3xl pt-32 shadow-xl">
          <div className="absolute top-16 right-0 left-0 z-10 flex flex-row items-center justify-between opacity-50">
            <div className="max-w-md">
              <Image src={Cloud1Image} alt="Cloud" />
            </div>
            <div className="max-w-md">
              <Image src={Cloud2Image} alt="Cloud" />
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-10 flex max-h-96 flex-row items-end justify-between px-8">
            <div className="flex flex-row items-end gap-8">
              <div className="max-w-20">
                <Image src={Building1Image} alt="Building" />
              </div>
              <div className="max-w-20">
                <Image src={Building3Image} alt="Building" />
              </div>
            </div>
            <div className="flex flex-row items-end gap-8">
              <div className="max-w-20">
                <Image src={Building2Image} alt="Building" />
              </div>
              <div className="max-w-20">
                <Image src={Building5Image} alt="Building" />
              </div>
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

            <div className="relative z-20 h-164 w-full max-w-6xl rounded-t-3xl bg-white dark:bg-neutral-800"></div>
          </div>
        </div>
      </section>

      <ScrollingFeatureSection />
    </WithPageTransition>
  );
}
