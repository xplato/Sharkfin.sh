import Image from "next/image";

import LandscapeImage from "@/public/images/landscape.webp";

export default function Footer() {
  return (
    <footer className="bg-background w-full p-6">
      <div className="bg-spray w-full overflow-hidden rounded-3xl pt-16">
        <div className="flex w-full justify-start px-12">
          <h2 className="text-heading-2 max-w-xl leading-[0.9] font-semibold">
            Search, <LiquidGlassGradientText>better</LiquidGlassGradientText>.
          </h2>
        </div>

        <div className="flex max-h-112 w-full items-start justify-start">
          <Image src={LandscapeImage} alt="Landscape" />
        </div>
      </div>
    </footer>
  );
}
