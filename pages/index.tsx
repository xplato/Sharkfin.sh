import ImageSection from "@/components/pages/home/components/ImageSection";
import FaqSection from "@/components/pages/home/FaqSection";
import FeatureSection from "@/components/pages/home/FeatureSection";
import HeroSection from "@/components/pages/home/HeroSection";
import HowItWorksSection from "@/components/pages/home/HowItWorksSection";
import ImageGallerySection from "@/components/pages/home/ImageGallerySection";
import PageHead from "@/components/shell/PageHead";

import Closeup1Image from "@/public/images/app/closeup-1.webp";
import Closeup2Image from "@/public/images/app/closeup-2.webp";
import Closeup1DarkImage from "@/public/images/app/closeup-dark-1.webp";
import Closeup2DarkImage from "@/public/images/app/closeup-dark-2.webp";
import DarkSearchbarMediumImage from "@/public/images/app/searchbar-medium-dark.webp";
import SearchbarMediumImage from "@/public/images/app/searchbar-medium.webp";

export default function Home() {
  return (
    <>
      <PageHead
        title="Sharkfin — A better way to find images on Mac"
        description="Sharkfin is a free, open-source, local-only image search app for macOS. Search your images with natural language — fast."
      />

      <HeroSection />
      <FeatureSection />
      <ImageGallerySection />
      <HowItWorksSection />
      <ImageSection
        title="Liquid Glass."
        subtitle="A look that's distinctly Mac."
        primaryImage={{
          src: SearchbarMediumImage,
          alt: "Sharkfin Searchbar over a light geometric background",
          tooltipLabel: "searchbar-medium.webp",
        }}
        firstDualImage={{
          src: Closeup1Image,
          alt: "Sharkfin searchbar showing results for 'ice cream cone' on a sandy textured background",
          tooltipLabel: "closeup-1.webp",
        }}
        secondDualImage={{
          src: Closeup2Image,
          alt: "Sharkfin searchbar showing results for 'pyramid' on a light cyan background",
          tooltipLabel: "closeup-2.webp",
        }}
        description="Sharkfin uses Liquid Glass to make search feel right at home on
        your Mac. It's transparent, layered, and responsive to
        what's behind it—while contrast keeps your content front and
        center."
      />
      <ImageSection
        title="When night falls,"
        subtitle="Sharkfin retreats to the shadows."
        primaryImage={{
          src: DarkSearchbarMediumImage,
          alt: "Sharkfin Searchbar over a dark geometric background",
          tooltipLabel: "searchbar-medium-dark.webp",
        }}
        firstDualImage={{
          src: Closeup1DarkImage,
          alt: "Sharkfin searchbar showing results for 'ice cream cone' on a sandy textured background",
          tooltipLabel: "closeup-dark-1.webp",
        }}
        secondDualImage={{
          src: Closeup2DarkImage,
          alt: "Sharkfin searchbar showing results for 'pyramid' on a light cyan background",
          tooltipLabel: "closeup-dark-2.webp",
        }}
        description="In dark mode, Sharkfin shifts to a subtle black glass, and the search bar takes on a metallic gray—so contrast stays sharp no matter the lighting."
        variant="dark"
        forceTooltipColorMode="dark"
      />
      <FaqSection />
    </>
  );
}
