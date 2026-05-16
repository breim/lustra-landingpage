const PRINCIPLES = [
  {
    title: 'Surgical, not bulk',
    body: 'It touches only what the command targeted. No drive-by refactors riding along with a lint fix.'
  },
  {
    title: 'Confirm before it cuts',
    body: 'Deleting code or a dependency is proposed and confirmed, never silently decided.'
  },
  {
    title: 'Honest when blind',
    body: 'If a tool is missing, it says so instead of pretending the scan was complete.'
  },
  {
    title: 'Runs on your machine',
    body: 'A skill inside your existing harness, invoking local tooling. No service, nothing uploaded.'
  }
]

export function Principles() {
  return (
    <section className="bg-quiet text-on-quiet">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          The rules it operates under.
        </h2>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {PRINCIPLES.map(p => (
            <div key={p.title} className="border-t border-on-quiet/15 pt-5">
              <h3 className="text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-quiet/60">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
