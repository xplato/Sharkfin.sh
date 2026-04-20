import type { AppProps } from "next/app";
import ReactLenis from "lenis/react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

import { fontClassNames } from "@/lib/fonts";

import "@/styles/style.css";

import BlurStrip from "@/ui/shell/BlurStrip";
import Footer from "@/ui/shell/Footer";
import Navigation from "@/ui/shell/Navigation";

import { SoundProvider } from "@/lib/sfx/SoundContext";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ReactLenis
      root
      options={{
        easing: (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      }}
    >
      <SoundProvider>
        <div className={fontClassNames}>
          <Navigation />

          <LayoutGroup>
            <AnimatePresence mode="wait">
              <motion.div key={router.asPath}>
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </LayoutGroup>

          <Footer />

          <BlurStrip position="bottom" />
        </div>
      </SoundProvider>
    </ReactLenis>
  );
}
