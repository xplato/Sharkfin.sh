import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { motion } from "motion/react";

import { easeCatapult } from "@/lib/motion";

import ContentImage from "@/public/brand/sharkfin-app-icon.webp";

const DURATION = 1;

const COVER_CLASS_NAME =
  "pointer-events-none fixed inset-0 z-40 bg-linear-to-b from-surf to-shallows will-change-transform";

function TransitionContent({
  mode,
  isActive = false,
}: {
  mode: "enter" | "exit";
  isActive?: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      initial={mode === "enter" ? { y: "0%" } : false}
      animate={{
        y: mode === "enter" ? "-100%" : isActive ? "0%" : "100%",
      }}
      exit={{
        y: mode === "enter" ? "-100%" : "0%",
      }}
      transition={{
        type: "tween",
        duration: mode === "enter" ? DURATION + 0.4 : DURATION,
        ease: easeCatapult,
      }}
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center will-change-transform"
    >
      <motion.div
        initial={mode === "enter" ? { rotate: 0 } : false}
        animate={{
          rotate: mode === "enter" ? 45 : 0,
        }}
        exit={{
          rotate: mode === "enter" ? -45 : 0,
        }}
        transition={{
          type: "tween",
          duration: mode === "enter" ? DURATION + 0.5 : DURATION,
          ease: easeCatapult,
        }}
        className="w-32 sm:w-48 md:w-64"
      >
        <Image src={ContentImage} alt="content" />
      </motion.div>
    </motion.div>
  );
}

export default function FullScreenCoverContentTransition({
  children,
}: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();

  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      if (url !== pathname) {
        setIsNavigating(true);
      }
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
  }, [router.events, pathname]);

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

      <TransitionContent mode="exit" isActive={isNavigating} />
      <TransitionContent mode="enter" />

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
