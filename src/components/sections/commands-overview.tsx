import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { COMMANDS } from '@/lib/content'

export function CommandsOverview() {
  return (
    <section className="bg-quiet text-on-quiet">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-lime/75">
              The 18 commands
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              Each one wraps real tooling.
            </h2>
          </div>
          <Link
            href="/commands"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-lime hover:underline"
          >
            Full reference
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-on-quiet/12 bg-on-quiet/12 sm:grid-cols-2 lg:grid-cols-3">
          {COMMANDS.map(cmd => (
            <li key={cmd.slug} className="bg-quiet">
              <Link
                href={`/commands#${cmd.slug}`}
                className="group flex h-full flex-col p-6 transition-colors hover:bg-on-quiet/[0.03]"
              >
                <span className="font-mono text-sm font-semibold text-lime">
                  /lustra {cmd.slug}
                </span>
                <span className="mt-3 text-sm leading-relaxed text-on-quiet/65">
                  {cmd.blurb}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
