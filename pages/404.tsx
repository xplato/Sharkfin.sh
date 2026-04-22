import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react";

import GlassButton from "@/components/GlassButton";
import WithPageTransition from "@/components/motion/transitions/WithPageTransition";
import TextLink from "@/components/TextLink";

export default function FourOhFour() {
  return (
    <WithPageTransition>
      <section className="bg-background w-full p-6 pb-0">
        <div className="rounded-3xl bg-neutral-200 py-32">
          <div className="page-container items-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-heading-2 leading-none font-bold">404</h1>
                <h2 className="text-foreground/75 text-subheading leading-none font-medium tracking-tight">
                  Page not found
                </h2>
                <div className="flex max-w-md items-center justify-center text-center">
                  <p className="text-base">
                    Not sure what happened here. If you think this is a mistake,
                    please{" "}
                    <TextLink href="https://github.com/xplato/Sharkfin.sh/issues/new">
                      open an issue.
                    </TextLink>
                  </p>
                </div>
              </div>

              <GlassButton
                as={Link}
                href="/"
                startIcon={<ArrowLeftIcon weight="bold" />}
                label="Go back home"
              />
            </div>
          </div>
        </div>
      </section>
    </WithPageTransition>
  );
}
