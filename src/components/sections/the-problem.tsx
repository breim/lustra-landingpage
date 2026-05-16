const FAILURES = [
  {
    tag: 'abstraction',
    text: 'Dead abstractions: an interface with one implementation, a factory that builds one thing.'
  },
  {
    tag: 'errors',
    text: 'Fake error handling: a try/catch that logs and rethrows, or worse, swallows.'
  },
  {
    tag: 'tests',
    text: 'Tests that run, go green, and assert nothing of consequence.'
  },
  {
    tag: 'deps',
    text: 'Dependencies nobody imports, and one with a known CVE nobody noticed.'
  },
  {
    tag: 'types',
    text: 'A type error made quiet with any instead of made correct.'
  },
  {
    tag: 'ci',
    text: 'A pipeline that is green because the gate never actually ran.'
  }
]

export function TheProblem() {
  return (
    <section className="bg-quiet text-on-quiet">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              Linters catch a slice.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-on-quiet/55">
              The rest needs judgment on top of real tools. Here is the slice
              they miss, the one that compounds.
            </p>
          </div>

          <ul className="divide-y divide-on-quiet/10 border-y border-on-quiet/10">
            {FAILURES.map(f => (
              <li
                key={f.tag}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:gap-8"
              >
                <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-lime/80 sm:w-28 sm:pt-1">
                  {f.tag}
                </span>
                <span className="text-base leading-relaxed text-on-quiet/85">
                  {f.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
