import { ReactNode } from "react";
import Image from "next/image";
import { FolderHeartIcon } from "@/components/ui/folder-heart";
import { HandCoinsIcon } from "@/components/ui/hand-coins";
import { HandHeartIcon } from "@/components/ui/hand-heart";
import { HandMetalIcon } from "@/components/ui/hand-metal";
import { LanguagesIcon } from "@/components/ui/languages";
import { ZapIcon } from "@/components/ui/zap";
import { Apple, Github } from "@thesvg/react";

import Button from "@/ui/Button";
import WithPageTransition from "@/ui/motion/transitions/WithPageTransition";

import { cn } from "@/lib/utils";

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
                Free and open source
              </p>
            </div>
          </div>

          <div className="h-200 w-full max-w-6xl rounded-3xl bg-white"></div>
        </div>
      </section>

      <section className="bg-background relative w-full py-32">
        <div className="page-container items-center gap-32">
          <div className="sticky top-32 z-10 flex flex-row items-center justify-center gap-4">
            <h3 className="text-8xl font-bold">Features</h3>
          </div>

          <div className="flex w-full max-w-2xl flex-col items-center gap-12">
            <FeatureCard
              icon={<HandHeartIcon size={32} />}
              label="Free and open source"
              description="Sharkfin is completely free and always will be. Enough said."
              iconClassName="text-cyan-200 bg-cyan-600"
            />
            <FeatureCard
              icon={<FolderHeartIcon size={32} />}
              label="Local-only"
              description="Leverage the power of local models to search without the cloud."
              iconClassName="text-pink-100 bg-pink-500"
            />
            <FeatureCard
              icon={<ZapIcon size={32} />}
              label="Lightning fast"
              description="Search tens of thousands of images in milliseconds without a beat."
              iconClassName="text-yellow-100 bg-yellow-500"
            />
            <FeatureCard
              icon={<LanguagesIcon size={32} />}
              label="Natural language"
              description="Describe what you're looking for, without caring where it's located."
              iconClassName="text-teal-100 bg-teal-500"
            />
            <FeatureCard
              icon={<HandMetalIcon size={32} />}
              label="Native macOS"
              description="Written in native Swift, Sharkfin's performance and UI is distinctly Mac."
              iconClassName="text-blue-100 bg-blue-500"
            />
          </div>
        </div>
      </section>
    </WithPageTransition>
  );
}

function FeatureCard({
  icon,
  label,
  description,
  iconClassName,
}: {
  icon: ReactNode;
  label: string;
  description: string;
  iconClassName: string;
}) {
  return (
    <div className="sticky top-64 z-20 flex w-full flex-col gap-4 rounded-3xl bg-neutral-100 p-4">
      <div className="dark:bg-abyss flex w-full flex-row items-center justify-start gap-8 rounded-3xl border border-black/8 bg-white p-8">
        <div
          className={cn(
            "flex aspect-square w-20 items-center justify-center rounded-2xl p-2",
            iconClassName,
          )}
        >
          {icon}
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-3xl font-medium tracking-tight">{label}</p>
          <p className="text-foreground/75 text-xl">{description}</p>
        </div>
      </div>
      <div className="h-40 w-full rounded-3xl border border-black/8 bg-white"></div>
    </div>
  );
}
