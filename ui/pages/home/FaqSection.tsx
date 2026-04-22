import { PropsWithChildren, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import AnimateIn from "@/ui/motion/AnimateIn";
import TextLink from "@/ui/TextLink";

import { easeSnapToSilk } from "@/lib/motion";
import { cn } from "@/lib/utils";

import NoCatchGif from "@/public/images/no-catch.gif";

interface Faq {
  question: string;
  answer: ReactNode;
}

const FAQS: Faq[] = [
  {
    question: "Is Sharkfin really free? What's the catch?",
    answer: (
      <>
        <div className="w-full max-w-3xl">
          <Image
            src={NoCatchGif}
            alt="Biff from Back to the Future saying 'no catch, just keep it a secret'"
          />
        </div>

        <FaqText>
          In all seriousness, there&apos;s no catch. Sharkfin is free and open
          source. If you like it, however, it&apos;d mean a lot if you shared it
          with your peeps. (Just don&apos;t tell Biff—or the{" "}
          <span className="italic">other</span> Biff.)
        </FaqText>
      </>
    ),
  },
  {
    question: "Does Sharkfin send my images anywhere?",
    answer: (
      <FaqText>
        Never. Search runs entirely on your device using CLIP models you
        download once. Nothing leaves your Mac — no cloud, no telemetry, no
        account.
      </FaqText>
    ),
  },
  {
    question: "How fast is it, though?",
    answer: (
      <>
        <FaqText>
          I have over 20,000+ indexed images (average individual image size of
          ~4 MB). I can search my entire library in 10-20
          milliseconds—effectively instant.
        </FaqText>
        <FaqText>
          If you&apos;re curious, you can gather your own search performance
          metrics by enabling Debug Mode in Sharkfin&apos;s advanced settings,
          running a search, and then inspecting the most recent log file for
          info on the performance timing breakdown.
        </FaqText>
      </>
    ),
  },
  {
    question: "How does natural-language search actually work?",
    answer: (
      <>
        <FaqText>
          Sharkfin uses CLIP models to understand what your images look like and
          what you mean when you search. It converts your query and each image
          into embeddings, then ranks the matches by similarity — so you can
          search for a feeling, a scene, or a specific object.
        </FaqText>
        <FaqText>
          If you&apos;re curious, I wrote up a more detailed explanation of the
          implementation in the{" "}
          <TextLink href="https://github.com/xplato/Sharkfin#implementation">
            project README
          </TextLink>
          .
        </FaqText>
      </>
    ),
  },
  {
    question: "Will it slow down my Mac?",
    answer: (
      <>
        <FaqText>Short answer: no.</FaqText>
        <FaqText>
          There are two aspects here: indexing performance and default
          performance (after indexing).
        </FaqText>
        <FaqText>
          Initial indexing uses the GPU, but it can take some time and might
          spin up your fans, depending on how many images you have and which
          CLIP model you&apos;ve picked. In most cases, indexing is surprisingly
          fast (Swift, I ❤️ you) and causes no noticeable performance
          degradation.
        </FaqText>
        <FaqText>
          In terms of day-to-day performance, Sharkfin is lightweight—0% CPU
          utilization and low memory overhead while in the background.
          Performing a search loads the CLIP model and embeddings in memory
          (~500 MB or so), and on machines with low RAM, these are offloaded
          after a delay.
        </FaqText>
      </>
    ),
  },
  {
    question: "What are the system requirements?",
    answer: (
      <FaqText>
        macOS 26 or later on Apple Silicon or Intel. Any recent M-series Mac
        handles indexing and search comfortably.
      </FaqText>
    ),
  },
  {
    question: "Is there a Windows, Linux, or iPhone version?",
    answer: (
      <FaqText>
        Not today. Sharkfin is built natively for macOS to take full advantage
        of Apple Silicon. The project is{" "}
        <TextLink href="https://github.com/xplato/Sharkfin">
          open source
        </TextLink>
        , so if you&apos;d like to help bring it elsewhere, pull requests are
        welcome.
      </FaqText>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className="bg-background w-full pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
      <div className="page-container items-center">
        <div className="flex w-full max-w-4xl flex-col items-start gap-12 sm:gap-16">
          <h3 className="text-heading-4 leading-none font-semibold">
            <span>Questions.</span>{" "}
            <span className="text-foreground/45">Answers.</span>
          </h3>

          <AnimateIn
            variant="fadeUp"
            stagger={0.06}
            className="flex w-full flex-col"
          >
            {FAQS.map((faq, i) => (
              <FaqItem key={faq.question} {...faq} isFirst={i === 0} />
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

interface FaqItemProps extends Faq {
  isFirst: boolean;
}

function FaqItem({ question, answer, isFirst }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("border-foreground/10 border-b", isFirst && "border-t")}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
        className={cn(
          "group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left md:py-7",
          "transition-colors duration-200",
        )}
      >
        <span className="text-subheading-2 leading-snug font-medium tracking-tight">
          {question}
        </span>
        <PlusMinusIcon isOpen={isOpen} />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.4, ease: easeSnapToSilk },
          opacity: { duration: isOpen ? 0.35 : 0.2, ease: easeSnapToSilk },
        }}
        className="overflow-hidden"
      >
        <div className="flex max-w-4xl flex-col items-start justify-start gap-4 pr-8 pb-6 md:pr-12 md:pb-8">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      aria-hidden
      className="relative flex size-5 shrink-0 items-center justify-center"
    >
      <span className="bg-foreground absolute h-[1.5px] w-full rounded-full" />
      <motion.span
        className="bg-foreground absolute h-[1.5px] w-full rounded-full"
        initial={false}
        animate={{
          rotate: isOpen ? 0 : 90,
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: easeSnapToSilk }}
      />
    </span>
  );
}

function FaqText({ children }: PropsWithChildren) {
  return (
    <p className="text-body text-foreground/65 leading-relaxed font-normal">
      {children}
    </p>
  );
}
