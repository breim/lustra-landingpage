import Link from 'next/link'
import { LIFECYCLE, commandsByGroup } from '@/lib/content'

export function Lifecycle() {
  return (
    <section className="bg-surface text-on-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-on-surface/55">
            One skill, the whole lifecycle
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            From the first commit to technical due diligence.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-on-surface/20 bg-on-surface/20 md:grid-cols-2 xl:grid-cols-4">
          {LIFECYCLE.map(phase => (
            <div key={phase.id} className="flex flex-col bg-surface p-7 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-on-surface/50">
                {phase.kicker}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                {phase.label}
              </h3>
              <p className="mt-3 text-sm italic leading-relaxed text-on-surface/65">
                &ldquo;{phase.question}&rdquo;
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {commandsByGroup(phase.id).map(cmd => (
                  <li key={cmd.slug}>
                    <Link
                      href={`/commands#${cmd.slug}`}
                      className="inline-block rounded border border-on-surface/25 px-2.5 py-1 font-mono text-xs text-on-surface/80 transition-colors hover:border-on-surface/60 hover:bg-on-surface hover:text-lime"
                    >
                      {cmd.slug}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
