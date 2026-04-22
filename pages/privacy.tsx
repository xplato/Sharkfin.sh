import GradientText from "@/ui/GradientText";
import PrivacyLayout, { FeatureTag } from "@/ui/pages/privacy/PrivacyLayout";
import TextLink from "@/ui/TextLink";

export default function PrivacyApp() {
  return (
    <PrivacyLayout active="app">
      <div className="flex flex-col items-start justify-start gap-3">
        <h2 className="text-heading-5 leading-none font-semibold">
          Sharkfin, the app
        </h2>
        <p className="text-subheading-2 text-foreground/65 leading-snug font-medium">
          What the macOS app does (and doesn&apos;t) do with your data.
        </p>
      </div>

      <div className="flex w-full flex-row flex-wrap items-center justify-start gap-3">
        <FeatureTag label="No ads" />
        <FeatureTag label="No tracking" />
        <FeatureTag label="No analytics" />
        <FeatureTag label="No cloud" />
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-6">
        <p className="text-lg">
          Sharkfin runs entirely on your device. Your photos, your searches, and
          everything you do in the app stay on your machine. There are no ads,
          no tracking, no analytics, and no cloud — your data is never uploaded
          anywhere. Sharkfin is{" "}
          <TextLink href="https://github.com/xplato/Sharkfin" size="md">
            open source
          </TextLink>
          , so you can verify this for yourself.
        </p>
        <p className="text-lg">
          Sharkfin uses the internet only once, to download the CLIP models that
          power search when you&apos;re setting up the app. These are fetched
          from my personal Hugging Face account at{" "}
          <TextLink href="https://huggingface.co/xplato" size="md">
            huggingface.co/xplato
          </TextLink>
          .
        </p>
        <p className="text-lg">
          Once the models are downloaded, Sharkfin makes{" "}
          <GradientText>zero</GradientText> HTTP requests. No telemetry, no
          update pings, no phoning home — ever. You can disconnect from the
          internet and Sharkfin will keep working exactly the same.
        </p>
        <p className="text-lg">
          Sharkfin does write logs to a file on your device to help with
          troubleshooting, and more detail is recorded when debug mode is
          enabled. These logs stay on your machine and are never sent anywhere.
          The only way I would ever see them is if you run into an issue and
          choose to send them to me yourself.
        </p>
        <p className="text-lg">
          If you have any questions, please send me an email at{" "}
          <TextLink href="mailto:hi@sharkfin.sh" size="md">
            hi@sharkfin.sh
          </TextLink>
          .
        </p>
      </div>
    </PrivacyLayout>
  );
}
