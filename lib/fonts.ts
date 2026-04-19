import {
  Bangers,
  Bricolage_Grotesque,
  Chewy,
  Chicle,
  DM_Sans,
  DynaPuff,
  Geist,
  Geist_Mono,
  Google_Sans_Code,
  Inter,
  JetBrains_Mono,
  Knewave,
  League_Gothic,
  Outfit,
  Plus_Jakarta_Sans,
  Zalando_Sans,
  Zalando_Sans_Expanded,
  Zalando_Sans_SemiExpanded,
} from "next/font/google";

import { cn } from "./utils";

const zalandoSans = Zalando_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zalando",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: false,
});

const zalandoSansExpanded = Zalando_Sans_Expanded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zalando-expanded",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: false,
});

const zalandoSansSemiExpanded = Zalando_Sans_SemiExpanded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zalando-semi-expanded",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-inter",
});

const googleSansCode = Google_Sans_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-google-sans-code",
});

const bangers = Bangers({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bangers",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

const chicle = Chicle({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-chicle",
});

const chewy = Chewy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-chewy",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dynapuff",
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const knewave = Knewave({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-knewave",
});

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-gothic",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const fontClassNames = cn(
  zalandoSans.variable,
  zalandoSansExpanded.variable,
  zalandoSansSemiExpanded.variable,
  inter.variable,
  googleSansCode.variable,
  bangers.variable,
  bricolageGrotesque.variable,
  chicle.variable,
  chewy.variable,
  dmSans.variable,
  dynaPuff.variable,
  geist.variable,
  jetBrainsMono.variable,
  knewave.variable,
  leagueGothic.variable,
  outfit.variable,
  plusJakartaSans.variable,
  geistMono.variable,
);
