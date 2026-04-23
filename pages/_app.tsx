import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { fontClassNames } from "@/lib/fonts";

import "@/styles/style.css";

import BlurStrip from "@/components/shell/BlurStrip";
import Footer from "@/components/shell/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={fontClassNames}>
        <Component {...pageProps} />
        <Footer />
        <BlurStrip position="bottom" />
      </div>

      <Analytics />
      <SpeedInsights />
    </>
  );
}
