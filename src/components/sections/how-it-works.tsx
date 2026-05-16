const STEPS = [
  {
    n: '01',
    title: 'It runs the actual tools',
    body: 'npm audit, knip, eslint, tsc, your test runner, prettier, license-checker. Real output, not a guess about what a tool would say.'
  },
  {
    n: '02',
    title: 'It triages the output',
    body: 'Filters false positives. Ranks by real risk, not severity theater. Separates what is mechanically safe from what needs a human.'
  },
  {
    n: '03',
    title: 'It fixes, or proposes',
    body: 'Auto-applies only the safe changes. Everything that needs judgment arrives as a reviewable diff. No silent scope creep.'
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-quiet text-on-quiet">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-lime/75">
          How it works
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
          It does not guess where a tool would. It runs the tool and applies
          judgment.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-on-quiet/12 bg-on-quiet/12 md:grid-cols-3">
          {STEPS.map(s => (
            <div key={s.n} className="bg-quiet p-8 sm:p-10">
              <span className="font-display text-5xl font-extrabold text-lime/30">
                {s.n}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-on-quiet/60">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
