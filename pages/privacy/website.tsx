import PrivacyLayout, {
  FeatureTag,
} from "@/components/pages/privacy/PrivacyLayout";
import PageHead from "@/components/shell/PageHead";
import TextLink from "@/components/TextLink";

export default function PrivacyWebsite() {
  return (
    <PrivacyLayout active="website">
      <PageHead
        title="Sharkfin — Site Privacy"
        description="What sharkfin.sh collects while you're browsing: anonymous, aggregated analytics and performance measurement via Vercel — no cookies, no personal data, no trackers."
        url="https://sharkfin.sh/privacy/website"
      />
      <div className="flex flex-col items-start justify-start gap-3">
        <h2 className="text-heading-5 leading-none font-semibold">
          sharkfin.sh, the website
        </h2>
        <p className="text-subheading-2 text-foreground/65 leading-snug font-medium">
          What this marketing site collects while you&apos;re browsing.
        </p>
      </div>

      <div className="flex w-full flex-row flex-wrap items-center justify-start gap-3">
        <FeatureTag label="No ads" />
        <FeatureTag label="No cookies" />
        <FeatureTag label="No personal data" />
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-6">
        <p className="text-lg">
          This website — sharkfin.sh — is hosted on{" "}
          <TextLink href="https://vercel.com" size="md">
            Vercel
          </TextLink>{" "}
          and uses Vercel Web Analytics and Speed Insights to measure page views
          and performance. Unlike the app, the site does collect some anonymous,
          aggregated data about visits — but nothing that can identify you
          personally. Since the app doesn&apos;t contain analytics, this helps
          me get an idea of how many people are interested in Sharkfin and
          whether the site is fast for them.
        </p>
        <p className="text-lg">
          Vercel Analytics records things like which pages are visited, the
          country a visit came from, the referring site, the device type, and
          the browser. It does not use cookies. To count unique visitors it
          computes a daily hash from the IP address, user-agent, and date, then
          throws it away at the end of the day — so you can&apos;t be tracked
          across sessions or across days. The full breakdown of what Vercel
          collects is on{" "}
          <TextLink
            href="https://vercel.com/docs/analytics/privacy-policy"
            size="md"
          >
            Vercel&apos;s analytics privacy page
          </TextLink>
          .
        </p>
        <p className="text-lg">
          Speed Insights measures page performance — things like how fast pages
          load and how quickly they become interactive (Core Web Vitals). It
          collects only anonymous, aggregated data: route, country, device type,
          browser, and connection type. No cookies, no personal data, and no
          cross-session tracking. Details are on{" "}
          <TextLink
            href="https://vercel.com/docs/speed-insights/privacy-policy"
            size="md"
          >
            Vercel&apos;s Speed Insights privacy page
          </TextLink>
          .
        </p>
        <p className="text-lg">
          Beyond analytics and performance measurement, the site sets no cookies
          and stores nothing in your browser. There are no third-party trackers,
          no advertising pixels, and no social widgets that phone home.
        </p>
        <p className="text-lg">
          The site is open source too — you can inspect the code at{" "}
          <TextLink href="https://github.com/xplato/Sharkfin.sh" size="md">
            github.com/xplato/Sharkfin.sh
          </TextLink>
          .
        </p>
        <p className="text-lg">
          Questions about the site? Email me at{" "}
          <TextLink href="mailto:hi@sharkfin.sh" size="md">
            hi@sharkfin.sh
          </TextLink>
          .
        </p>
      </div>
    </PrivacyLayout>
  );
}
