import { ArrowUpRight } from 'lucide-react'
import { Cta } from '@/components/cta'
import { CommandCopy } from '@/components/command-copy'
import { INSTALL_CMD, REPO_URL } from '@/lib/content'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface text-on-surface">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-on-surface/55">
          An engineering skill for AI coding harnesses
        </p>

        <h1 className="mt-7 max-w-[18ch] font-display text-[clamp(3.25rem,9vw,8rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
          Your AI ships
          <br />
          code that lies.
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-on-surface/75 sm:text-xl">
          It runs. It looks fine. It is quietly wrong. Lustra makes your agent
          run the real tooling, then triage the output with judgment, so the
          slop never reaches main.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <CommandCopy command={INSTALL_CMD} tone="onLime" />
          <Cta href={REPO_URL} variant="ink" size="md" external>
            View on GitHub
            <ArrowUpRight className="size-4" />
          </Cta>
        </div>

        <p className="mt-8 font-mono text-sm text-on-surface/55">
          1 skill. 18 commands. From first commit to technical due diligence.
        </p>
      </div>
    </section>
  )
}
