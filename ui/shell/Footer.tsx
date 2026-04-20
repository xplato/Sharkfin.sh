import Image from "next/image";
import { Apple, Github } from "@thesvg/react";

import GradientText from "@/ui/GradientText";

import GlassButton from "../GlassButton";

import LandscapeImage from "@/public/images/landscape.webp";

export default function Footer() {
  return (
    <footer className="bg-background w-full p-6">
      <div className="bg-spray w-full overflow-hidden rounded-3xl pt-16">
        <div className="flex w-full flex-col gap-10 px-12">
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
              size="lg"
              startIcon={<Github className="invert dark:invert-0" />}
              label="GitHub"
            />
          </div>
        </div>

        <div className="flex max-h-112 w-full items-start justify-start">
          <Image src={LandscapeImage} alt="Landscape" />
        </div>
      </div>
    </footer>
  );
}
