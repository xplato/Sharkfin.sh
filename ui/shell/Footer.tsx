import { HeartIcon } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-background flex w-full flex-col items-center justify-center gap-12 p-6 pb-0 text-white">
      <div className="w-full rounded-3xl bg-[#171717] pt-24">
        <div className="page-container flex flex-col items-start justify-start gap-16">
          <div className="flex w-full flex-row items-center justify-between gap-8">
            <div>
              <p className="font-bricolage-grotesque text-lg font-medium">
                Copyright &copy; {new Date().getFullYear() ?? "2026"}
              </p>
            </div>
            {/*<div className="bg-foreground h-0.5 grow"></div>*/}
            <div>
              <p className="font-bricolage-grotesque text-lg font-medium">
                <span>Built with</span>{" "}
                <span className="inline-block size-4">
                  <HeartIcon weight="fill" className="text-rose-500" />
                </span>{" "}
                <span>in SLC</span>
              </p>
            </div>
          </div>
        </div>

        <div className="page-container">
          <div className="max-h-64 overflow-hidden">
            <p className="font-zalando text-[18vw] leading-none font-semibold uppercase">
              Sharkfin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
