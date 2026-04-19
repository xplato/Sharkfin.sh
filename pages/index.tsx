import Image from "next/image";
import { Apple, Github } from "@thesvg/react";

import Button from "@/ui/Button";
import WithPageTransition from "@/ui/motion/transitions/WithPageTransition";

import SharkfinAppIcon from "@/public/sharkfin-app-icon.png";

export default function Home() {
  return (
    <WithPageTransition>
      <section className="bg-background min-h-screen w-full py-32">
        <div className="page-container items-center gap-12">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex size-24 items-center justify-center rounded-4xl shadow-xl">
                <Image src={SharkfinAppIcon} alt="Sharkfin App Icon" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-heading leading-none font-semibold tracking-tight">
                  Sharkfin
                </h1>

                <h2 className="text-foreground/75 text-subheading leading-none font-medium tracking-tight">
                  A better way to find images on Mac
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-row items-center gap-3">
                <Button
                  variant="solid"
                  color="neutral"
                  mode="light"
                  startIcon={<Apple />}
                  label="Download"
                />
                <Button
                  variant="outline"
                  color="neutral"
                  mode="light"
                  startIcon={<Github className="invert" />}
                  label="GitHub"
                />
              </div>

              <p className="text-foreground/50 text-base tracking-tight">
                Completely free and open source
              </p>
            </div>
          </div>

          <div className="h-200 w-full max-w-6xl rounded-3xl bg-white"></div>
        </div>
      </section>
    </WithPageTransition>
  );
}
