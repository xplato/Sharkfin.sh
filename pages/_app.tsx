import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";

import { fontClassNames } from "@/lib/fonts";

import "@/styles/style.css";

import BlurStrip from "@/ui/shell/BlurStrip";
import Footer from "@/ui/shell/Footer";

import { SoundProvider } from "@/lib/sfx/SoundContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SoundProvider>
      <div className={fontClassNames}>
        <Component {...pageProps} />
        <Footer />
        <BlurStrip position="bottom" />
      </div>

      <Analytics />
    </SoundProvider>
  );
}
