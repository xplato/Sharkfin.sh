// A fake searchbar that looks close-ish to the real one from Sharkfin

import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export default function SharkfinSearch() {
  return (
    <div className="relative flex w-full max-w-2xl flex-col gap-3 rounded-3xl bg-white/40 p-3.5 shadow-[0_6px_12px_0px_rgba(0,0,0,0.125)] backdrop-blur-2xl">
      <Searchbar />
      <div className="h-96 rounded-2xl border border-neutral-200 bg-white"></div>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="flex w-full flex-row items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 dark:bg-neutral-900">
      <div className="flex flex-row items-center justify-center gap-4">
        <MagnifyingGlassIcon
          size={20}
          weight="regular"
          className="opacity-60"
        />
        <p className="text-foreground/50 font-[system-ui] text-lg font-medium tracking-tight">
          Search 20,134 files...
        </p>
      </div>
    </div>
  );
}
