import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "motion/react";

import { easeCatapult } from "@/lib/motion";

const DURATION = 1;

const COVER_CLASS_NAME =
  "pointer-events-none fixed inset-0 z-40 bg-sharkfin will-change-transform";

export default function FullScreenCoverTransition({
  children,
}: PropsWithChildren) {
  const router = useRouter();

  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsNavigating(true);
    };

    const handleRouteChangeError = () => {
      setIsNavigating(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router.events]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{
          y: isNavigating ? "0%" : "100%",
        }}
        exit={{
          y: "0%",
        }}
        transition={{
          type: "tween",
          duration: DURATION,
          ease: easeCatapult,
        }}
        className={COVER_CLASS_NAME}
      />

      <motion.div
        aria-hidden="true"
        initial={{
          y: "0%",
        }}
        animate={{
          y: "-100%",
        }}
        exit={{
          y: "-100%",
        }}
        transition={{
          type: "tween",
          duration: DURATION,
          ease: easeCatapult,
        }}
        className={COVER_CLASS_NAME}
      />

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
