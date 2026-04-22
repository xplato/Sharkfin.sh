import Link from "next/link";
import { ArrowUpIcon } from "@phosphor-icons/react";

import GlassButton from "@/components/GlassButton";
import WithPageTransition from "@/components/motion/transitions/WithPageTransition";
import PageHead from "@/components/shell/PageHead";
import TextLink from "@/components/TextLink";

const descentGradient =
  "linear-gradient(to bottom, var(--color-spray) 0%, var(--color-shallows) 20%, var(--color-tide) 42%, var(--color-sharkfin) 60%, var(--color-trench) 80%, var(--color-leviathan) 100%)";

export default function FourOhFour() {
  return (
    <WithPageTransition>
      <PageHead
        title="Sharkfin — Page Not Found"
        description="Sharkfin is a free, open-source, local-only image search app for macOS. Search your images with natural language — fast."
      />

      <section className="bg-background w-full p-6 pb-0">
        <div
          className="relative flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-3xl"
          style={{ background: descentGradient }}
        >
          <div className="page-container items-center pt-24 md:pt-32">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-heading-2 text-foreground leading-none font-bold">
                404
              </h1>
              <h2 className="text-foreground/75 text-subheading leading-none font-medium tracking-tight">
                You&rsquo;ve drifted into the deep.
              </h2>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <DriftingFin />
          </div>

          <div className="page-container items-center pb-24 md:pb-32">
            <div className="flex flex-col items-center gap-8">
              <p className="text-body-2 max-w-md text-center text-white/70">
                This page is somewhere below the surface. Nothing swims here. If
                you think this is a mistake, please{" "}
                <TextLink
                  href="https://github.com/xplato/Sharkfin.sh/issues/new"
                  mode="dark"
                >
                  open an issue.
                </TextLink>
              </p>

              <GlassButton
                as={Link}
                href="/"
                startIcon={<ArrowUpIcon weight="bold" />}
                label="Return to the surface"
                className="text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </WithPageTransition>
  );
}

function DriftingFin() {
  return (
    <svg
      viewBox="0 0 512 512"
      aria-hidden
      className="animate-fin-drift size-48 opacity-80 drop-shadow-[0_12px_24px_rgba(0,15,24,0.4)] will-change-transform"
    >
      <g transform="matrix(0.663496,0,0,0.663496,-222.141782,-189.40548)">
        <path
          d="M448.542,984.241L1046.189,984.241L395.092,358.361C559.27,637.764 919.713,889.183 448.542,984.241Z"
          className="fill-leviathan"
        />
      </g>
    </svg>
  );
}
