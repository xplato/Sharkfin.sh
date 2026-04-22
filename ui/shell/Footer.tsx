import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@phosphor-icons/react";
import { Apple, Github } from "@thesvg/react";

import GlassButton from "../GlassButton";
import TextLink from "../TextLink";
import WithDecorativeGlassTooltip from "../WithDecorativeGlassTooltip";

import SharkfinAppIcon from "@/public/brand/sharkfin-beach.webp";
import SandDuneImage from "@/public/images/sand-dune.webp";

const FOOTER_COLUMNS: Array<{
  label: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}> = [
  {
    label: "App",
    links: [
      {
        label: "Download",
        href: "https://github.com/xplato/Sharkfin/releases/latest/download/Sharkfin.dmg",
      },
      {
        label: "Request a feature",
        href: "https://github.com/xplato/Sharkfin/issues",
      },
      {
        label: "Source code",
        href: "https://github.com/xplato/Sharkfin",
      },
    ],
  },
  {
    label: "Support",
    links: [
      {
        label: "Report a bug",
        href: "https://github.com/xplato/Sharkfin/issues",
      },
      {
        label: "Privacy",
        href: "/privacy",
      },
      {
        label: "Contact",
        href: "mailto:hi@sharkfin.sh",
      },
    ],
  },
  {
    label: "Site",
    links: [
      {
        label: "Source code",
        href: "https://github.com/xplato/Sharkfin.sh",
      },
      {
        label: "Site privacy",
        href: "/privacy/website",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background relative w-full">
      <div className="p-4 sm:p-6">
        <div className="flex w-full flex-col gap-6 overflow-hidden rounded-3xl bg-[#E8D2BC] px-8 pt-12 sm:gap-12 sm:px-12">
          <Link
            href="/"
            className="flex size-12 items-center justify-center rounded-4xl shadow-xl sm:size-16"
          >
            <WithDecorativeGlassTooltip tooltipLabel="sharkfin-beach.webp">
              <Image src={SharkfinAppIcon} alt="Sharkfin App Icon" />
            </WithDecorativeGlassTooltip>
          </Link>

          <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="flex w-full flex-col gap-10">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h2 className="text-heading-5 leading-none font-semibold">
                    Sharkfin
                  </h2>
                  <p className="text-subheading-2 text-foreground/65 font-medium">
                    Less searching. More finding.
                  </p>
                </div>

                <div className="flex flex-row items-center gap-3">
                  <GlassButton
                    as="a"
                    href="https://github.com/xplato/Sharkfin/releases/latest/download/Sharkfin.dmg"
                    download
                    size="md"
                    startIcon={
                      <Apple className="size-full invert dark:invert-0" />
                    }
                    label="Download"
                  />
                  <GlassButton
                    as="a"
                    href="https://github.com/xplato/Sharkfin"
                    target="_blank"
                    size="md"
                    startIcon={
                      <Github className="size-full invert dark:invert-0" />
                    }
                    label="GitHub"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start lg:items-end">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
                {FOOTER_COLUMNS.map((column) => (
                  <div
                    key={column.label}
                    className="flex flex-col items-start justify-start gap-4 md:gap-6"
                  >
                    <p className="text-body-2 text-foreground/65 leading-none font-medium">
                      {column.label}
                    </p>
                    <div className="flex flex-col items-start justify-start gap-2 text-sm md:gap-3 md:text-base">
                      {column.links.map((link) => (
                        <TextLink
                          key={link.label}
                          href={link.href}
                          size="inherit"
                          className="whitespace-nowrap"
                        >
                          {link.label}
                        </TextLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid w-full grid-cols-1 gap-2 sm:mt-0 md:grid-cols-2 md:gap-6">
            <div>
              <p className="text-sm font-normal md:text-base">
                Copyright © {new Date().getFullYear() ?? "2026"}{" "}
                <TextLink href="https://tristan.fyi">Tristan Brewster</TextLink>
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <p className="text-sm font-normal md:text-base">
                <span>Hand crafted with </span>
                <HeartIcon
                  weight="fill"
                  className="inline size-5 align-middle text-red-500"
                />
                <span> in Salt Lake City</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex max-h-124 w-full items-start justify-start">
            <Image
              src={SandDuneImage}
              alt="Sand dune"
              className="pointer-events-none opacity-0"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 max-h-124 w-full overflow-hidden">
        <WithDecorativeGlassTooltip tooltipLabel="sand-dune.webp">
          <Image src={SandDuneImage} alt="Sand dune" />
        </WithDecorativeGlassTooltip>
      </div>
    </footer>
  );
}
