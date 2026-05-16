import { Cta } from '@/components/cta'
import { CommandCopy } from '@/components/command-copy'
import { CLIENTS, INSTALL_CMD } from '@/lib/content'

export function InstallSteps() {
  return (
    <section className="bg-surface text-on-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-on-surface/55">
              Install
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              One command. It finds your agents.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-on-surface/70">
              Add it through the skills CLI, or install globally and let it
              auto-detect every harness you already have.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <CommandCopy command={INSTALL_CMD} tone="onLime" />
              <CommandCopy
                command="npm i -g lustra && lustra help"
                tone="onLime"
              />
            </div>

            <div className="mt-8">
              <Cta href="/install" variant="ink" size="md">
                Per-client install paths
              </Cta>
            </div>
          </div>

          <div className="lg:pt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-on-surface/55">
              Auto-detected harnesses
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-2">
              {CLIENTS.map(c => (
                <li
                  key={c.name}
                  className="flex items-baseline justify-between gap-3 border-b border-on-surface/15 py-2"
                >
                  <span className="text-sm font-semibold">{c.name}</span>
                  <span className="font-mono text-xs text-on-surface/55">
                    {c.configDir}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
