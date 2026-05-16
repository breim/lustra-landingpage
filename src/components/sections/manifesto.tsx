export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-on-surface text-lime/95"
      aria-label="Manifesto"
    >
      <div className="mx-auto max-w-5xl px-5 py-28 sm:px-8 sm:py-40">
        <p className="font-display text-[clamp(2rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          A green pipeline that gates nothing.
          <br />
          <span className="text-on-quiet/55">
            Tests that pass while asserting nothing.
          </span>
          <br />
          Error handling that swallows the error.
          <br />
          <span className="text-on-quiet/55">
            An <span className="text-lime">any</span> cast where the bug was.
          </span>
        </p>

        <p className="mt-14 max-w-2xl text-balance text-lg leading-relaxed text-on-quiet/60 sm:text-xl">
          This is what AI-assisted code looks like at scale. Not broken enough
          to fail. Just wrong enough to cost you later. The layer nobody looks
          at is the one that decides whether the work is sound.
        </p>
      </div>
    </section>
  )
}
