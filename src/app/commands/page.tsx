import type { Metadata } from 'next'
import Link from 'next/link'
import { LIFECYCLE, commandsByGroup } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Commands',
  description:
    'All 18 Lustra commands, grouped by lifecycle. Each wraps real tooling and applies judgment on top.',
  alternates: { canonical: '/commands' }
}

export default function CommandsPage() {
  return (
    <div className="bg-quiet text-on-quiet">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <header className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-lime/75">
            Reference
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            18 commands.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-on-quiet/60">
            Grouped by where they belong in the lifecycle. Each runs the actual
            tool, then triages the output instead of trusting it.
          </p>
        </header>

        <nav className="mt-12 flex flex-wrap gap-2">
          {LIFECYCLE.map(phase => (
            <a
              key={phase.id}
              href={`#${phase.id}`}
              className="rounded-md border border-on-quiet/15 px-3 py-1.5 text-sm text-on-quiet/65 transition-colors hover:border-lime/50 hover:text-lime"
            >
              {phase.label}
            </a>
          ))}
        </nav>

        <div className="mt-20 flex flex-col gap-24">
          {LIFECYCLE.map(phase => (
            <section key={phase.id} id={phase.id} className="scroll-mt-24">
              <div className="flex flex-col gap-1 border-b border-on-quiet/12 pb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-lime/70">
                  {phase.kicker}
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {phase.label}
                </h2>
                <p className="mt-1 text-sm italic text-on-quiet/55">
                  &ldquo;{phase.question}&rdquo;
                </p>
              </div>

              <div className="mt-10 flex flex-col">
                {commandsByGroup(phase.id).map(cmd => (
                  <article
                    key={cmd.slug}
                    id={cmd.slug}
                    className="grid scroll-mt-24 gap-4 border-b border-on-quiet/10 py-9 sm:grid-cols-[0.32fr_0.68fr] sm:gap-10"
                  >
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight">
                        {cmd.title}
                      </h3>
                      <code className="mt-3 inline-block rounded border border-on-quiet/15 bg-on-quiet/[0.04] px-2.5 py-1 font-mono text-xs text-lime">
                        {cmd.example}
                      </code>
                    </div>
                    <p className="text-base leading-relaxed text-on-quiet/75">
                      {cmd.blurb}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 border-t border-on-quiet/12 pt-10">
          <Link
            href="/install"
            className="inline-flex items-center gap-2 text-base font-semibold text-lime hover:underline"
          >
            Install Lustra and run these &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
