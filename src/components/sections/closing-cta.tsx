import { ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/cta";
import { CommandCopy } from "@/components/command-copy";
import { INSTALL_CMD, REPO_URL } from "@/lib/content";

export function ClosingCta() {
  return (
    <section className="bg-surface text-on-surface">
      <div className="mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 sm:py-40">
        <h2 className="mx-auto max-w-[16ch] font-display text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Make it clean up after itself.
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-balance text-lg leading-relaxed text-on-surface/70">
          Free, open source, MIT licensed. It runs the tool and applies
          judgment, so you do not have to read every line your agent wrote.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CommandCopy command={INSTALL_CMD} tone="onLime" />
          <Cta href={REPO_URL} variant="ink" size="md" external>
            GitHub
            <ArrowUpRight className="size-4" />
          </Cta>
        </div>
      </div>
    </section>
  );
}
