import Link from "next/link";
import { ArrowLeftIcon, CheckCircleIcon } from "@phosphor-icons/react";

import GlassButton from "@/ui/GlassButton";
import GradientText from "@/ui/GradientText";
import WithPageTransition from "@/ui/motion/transitions/WithPageTransition";
import TextLink from "@/ui/TextLink";

export default function Privacy() {
  return (
    <WithPageTransition>
      <section className="bg-background w-full px-6 py-32">
        <div className="page-container items-center gap-12">
          <div className="flex w-full max-w-3xl flex-col items-start justify-start gap-12">
            <div className="flex flex-col items-start justify-start gap-8">
              <GlassButton
                as={Link}
                href="/"
                startIcon={<ArrowLeftIcon weight="bold" />}
                label="Go back home"
              />
              <div className="flex flex-col items-start justify-start gap-4">
                <h1 className="text-heading-2 leading-none font-semibold">
                  Privacy
                </h1>
                <p className="text-subheading leading-none">April 20th, 2026</p>
              </div>
            </div>

            <div className="flex w-full flex-row flex-wrap items-center justify-start gap-3">
              <FeatureTag label="No ads" />
              <FeatureTag label="No tracking" />
              <FeatureTag label="No analytics" />
              <FeatureTag label="No cloud" />
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-6">
              <p className="text-lg">
                Sharkfin runs entirely on your device. Your photos, your
                searches, and everything you do in the app stay on your machine.
                There are no ads, no tracking, no analytics, and no cloud — your
                data is never uploaded anywhere, because there is nowhere for it
                to go. Sharkfin is{" "}
                <TextLink href="https://github.com/xplato/Sharkfin" size="md">
                  open source
                </TextLink>
                , so you can verify this for yourself.
              </p>
              <p className="text-lg">
                The only time Sharkfin uses the internet is the very first time
                you launch it, to download the CLIP models that power search.
                These are fetched from my personal Hugging Face account at{" "}
                <TextLink href="https://huggingface.co/xplato" size="md">
                  huggingface.co/xplato
                </TextLink>
                .
              </p>
              <p className="text-lg">
                Once the models are downloaded, Sharkfin makes{" "}
                <GradientText>zero</GradientText> HTTP requests. No telemetry,
                no update pings, no phoning home — ever. You can disconnect from
                the internet and Sharkfin will keep working exactly the same.
              </p>
              <p className="text-lg">
                Sharkfin does write logs to a file on your device to help with
                troubleshooting, and more detail is recorded when debug mode is
                enabled. These logs stay on your machine and are never sent
                anywhere. The only way I would ever see them is if you run into
                an issue and choose to send them to me yourself.
              </p>
              <p className="text-lg">
                If you have any questions, please send me an email at{" "}
                <TextLink href="mailto:hi@sharkfin.sh" size="md">
                  hi@sharkfin.sh
                </TextLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </WithPageTransition>
  );
}

function FeatureTag({ label }: { label: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
      <CheckCircleIcon weight="fill" className="size-5 text-green-500" />
      <p className="text-foreground text-base font-medium">{label}</p>
    </div>
  );
}
