import Head from "next/head";

import WithPageTransition from "@/ui/motion/transitions/WithPageTransition";
import ImageGallerySection from "@/ui/pages/home/components/ImageGallerySection";
import ImageSection from "@/ui/pages/home/components/ImageSection";
import FeatureSection from "@/ui/pages/home/FeatureSection";
import HeroSection from "@/ui/pages/home/HeroSection";

import Closeup1Image from "@/public/images/app/closeup-1.webp";
import Closeup2Image from "@/public/images/app/closeup-2.webp";
import Closeup1DarkImage from "@/public/images/app/closeup-dark-1.webp";
import Closeup2DarkImage from "@/public/images/app/closeup-dark-2.webp";
import RelevanceImage1 from "@/public/images/app/relevance-1.webp";
import RelevanceImage2 from "@/public/images/app/relevance-2.webp";
import RelevanceImage3 from "@/public/images/app/relevance-3.webp";
import DarkSearchbarMediumImage from "@/public/images/app/searchbar-medium-dark.webp";
import SearchbarMediumImage from "@/public/images/app/searchbar-medium.webp";

export default function Home() {
  return (
    <WithPageTransition>
      <Head>
        <title>Sharkfin — A better way to find images on Mac</title>
        <meta
          name="description"
          content="Sharkfin is a free, open-source, local-only image search app for macOS. Search your images with natural language — fast."
        />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Sharkfin — A better way to find images on Mac"
        />
        <meta
          property="og:description"
          content="Sharkfin is a free, open-source, local-only image search app for macOS. Search your images with natural language — fast."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sharkfin.sh" />
        <meta property="og:image" content="/brand/sharkfin-og.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sharkfin — A better way to find images on Mac"
        />
        <meta
          name="twitter:description"
          content="Sharkfin is a free, open-source, local-only image search app for macOS. Search your images with natural language — fast."
        />
        <meta name="twitter:image" content="/brand/sharkfin-og.webp" />
      </Head>

      <HeroSection />
      <FeatureSection />
      <ImageGallerySection />
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
      <ImageSection
        title="Surprisingly relevant."
        subtitle="Search with natural language."
        primaryImage={{
          src: RelevanceImage1,
          alt: "Sharkfin Searchbar over a light geometric background",
          tooltipLabel: "relevance-1.webp",
        }}
        firstDualImage={{
          src: RelevanceImage2,
          alt: "Sharkfin searchbar showing results for 'ice cream cone' on a sandy textured background",
          tooltipLabel: "relevance-2.webp",
        }}
        secondDualImage={{
          src: RelevanceImage3,
          alt: "Sharkfin searchbar showing results for 'pyramid' on a light cyan background",
          tooltipLabel: "relevance-3.webp",
        }}
        description="Sharkfin leverages the latest CLIP models from OpenAI to gather relevant results from your images based on their content—all in milliseconds on your device."
      />
    </WithPageTransition>
  );
}
