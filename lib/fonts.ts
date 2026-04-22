import { Inter } from "next/font/google";

import { cn } from "./utils";

const inter = Inter({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-inter",
});

export const fontClassNames = cn(inter.variable);
