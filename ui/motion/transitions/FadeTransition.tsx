import type { PropsWithChildren } from "react";
import { motion } from "motion/react";

import { easeCatapult } from "@/lib/motion";

const DURATION = 1;

export default function FadeTransition({ children }: PropsWithChildren) {
  return (
    <>
      <motion.div
        initial={{
          y: 48,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -48,
          opacity: 0,
        }}
        transition={{
          type: "tween",
          duration: DURATION,
          ease: easeCatapult,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
