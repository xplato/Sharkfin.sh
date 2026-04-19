import type { Variants } from "motion";

export const easeSnapToSilk = [0.31, 0.72, 0.35, 1] as const; // https://cubic-bezier.com/#.31,.72,.35,1
export const easeCatapult = [0.6, 0, 0, 1] as const; // https://cubic-bezier.com/#.6,0,0,1
export const easeInOutQuint = [0.86, 0, 0.07, 1] as const;
export const easeMaterial = [0.4, 0.0, 0.2, 1.0] as const;
export const easeMaterialDecelerate = [0.0, 0.0, 0.2, 1.0] as const;
export const easeAccelerate = [0.4, 0.0, 1.0, 1.0] as const;
export const easeShakespeare = [0.22, 1, 0.36, 1] as const;

export const fade: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
