import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { withTailwindClamp } from "tailwind-clamp-merge";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge(withTailwindClamp);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const romanKey = [
  "",
  "C",
  "CC",
  "CCC",
  "CD",
  "D",
  "DC",
  "DCC",
  "DCCC",
  "CM",
  "",
  "X",
  "XX",
  "XXX",
  "XL",
  "L",
  "LX",
  "LXX",
  "LXXX",
  "XC",
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
];

export function romanize(num: number) {
  if (Number.isNaN(num)) return NaN;

  const digits = String(+num).split("");

  let roman = "";
  let i = 3;

  while (i--) roman = (romanKey[+digits.pop()! + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}
