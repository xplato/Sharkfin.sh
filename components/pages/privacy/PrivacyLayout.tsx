import type { ReactNode } from "react";
import Link from "next/link";
import {
  AppStoreLogoIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  PlanetIcon,
} from "@phosphor-icons/react";

import GlassButton from "@/components/GlassButton";

import { cn } from "@/lib/utils";

export type PrivacyTab = "app" | "website";

const TAB_LINKS: Array<{
  id: PrivacyTab;
  label: string;
  href: string;
  icon: ReactNode;
}> = [
  {
    id: "app",
    label: "App privacy",
    href: "/privacy",
    icon: <AppStoreLogoIcon weight="bold" className="size-full" />,
  },
  {
    id: "website",
    label: "Site privacy",
    href: "/privacy/website",
    icon: <PlanetIcon weight="bold" className="size-full" />,
  },
];

interface Props {
  active: PrivacyTab;
  children: ReactNode;
}

export default function PrivacyLayout({ active, children }: Props) {
  return (
    <>
      <section className="bg-background w-full p-4 pb-0 sm:p-6">
        <div className="from-shallows to-spray relative overflow-hidden rounded-3xl bg-linear-to-b px-1 pt-20 pb-8 shadow-[0px_4px_16px_rgba(0,0,0,0.05)] sm:pt-24 sm:pb-20 md:pt-32 md:pb-24">
          <div className="page-container items-center">
            <div className="flex w-full max-w-3xl flex-col items-start justify-start gap-10">
              <GlassButton
                as={Link}
                href="/"
                size="md"
                startIcon={<ArrowLeftIcon weight="bold" />}
                label="Go back home"
              />
              <div className="flex flex-col items-start justify-start gap-4">
                <h1 className="text-heading-3 leading-none font-semibold">
                  Privacy
                </h1>
                <p className="text-subheading-3 text-foreground/65 leading-snug font-medium">
                  Last updated April 20th, 2026
                </p>
              </div>
              <PrivacyTabs active={active} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background w-full py-20 sm:py-24 md:py-32">
        <div className="page-container items-center">
          <div className="flex w-full max-w-3xl flex-col items-start justify-start gap-8">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

function PrivacyTabs({ active }: { active: PrivacyTab }) {
  return (
    <div className="flex w-full flex-row gap-1.5 rounded-2xl bg-white/40 p-1.5 backdrop-blur-sm sm:w-auto">
      {TAB_LINKS.map((tab) => (
        <TabLink key={tab.id} tab={tab} active={active === tab.id} />
      ))}
    </div>
  );
}

function TabLink({
  tab,
  active,
}: {
  tab: (typeof TAB_LINKS)[number];
  active: boolean;
}) {
  return (
    <Link
      href={tab.href}
      className={cn(
        "ease-material flex flex-1 flex-row items-center justify-center gap-2 rounded-xl px-4 py-2 text-base font-medium tracking-tight transition-all duration-300 sm:flex-none sm:px-5",
        active
          ? "text-foreground bg-white shadow-sm"
          : "text-foreground/55 hover:text-foreground/80",
      )}
    >
      <span className="size-4">{tab.icon}</span>
      <span>{tab.label}</span>
    </Link>
  );
}

export function FeatureTag({ label }: { label: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
      <CheckCircleIcon weight="fill" className="size-5 text-green-500" />
      <p className="text-foreground text-base font-medium">{label}</p>
    </div>
  );
}
