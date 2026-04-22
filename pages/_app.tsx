import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

import { fontClassNames } from "@/lib/fonts";

import "@/styles/style.css";

import BlurStrip from "@/ui/shell/BlurStrip";
import Footer from "@/ui/shell/Footer";
import Navigation from "@/ui/shell/Navigation";

import { SoundProvider } from "@/lib/sfx/SoundContext";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <SoundProvider>
      <div className={fontClassNames}>
        <Navigation />

        <Component {...pageProps} />

        <Footer />

        <BlurStrip position="bottom" />
      </div>

      <Analytics />
    </SoundProvider>
  );
}
