import Link from "next/link";
import { AUTHOR, REPO_URL } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-on-quiet/10 bg-quiet text-on-quiet">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">
            lustra<span className="text-lime">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-on-quiet/55">
            The code-hygiene skill that makes your AI harness clean up its own
            slop.
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-on-quiet/40">
            Product
          </span>
          <Link
            href="/commands"
            className="text-on-quiet/65 hover:text-on-quiet"
          >
            Commands
          </Link>
          <Link
            href="/install"
            className="text-on-quiet/65 hover:text-on-quiet"
          >
            Install
          </Link>
          <Link
            href="/#faq"
            className="text-on-quiet/65 hover:text-on-quiet"
          >
            FAQ
          </Link>
        </nav>

        <nav className="flex flex-col gap-3 text-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-on-quiet/40">
            Source
          </span>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-quiet/65 hover:text-on-quiet"
          >
            GitHub
          </a>
          <a
            href={`${REPO_URL}/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-quiet/65 hover:text-on-quiet"
          >
            MIT License
          </a>
        </nav>
      </div>

      <div className="border-t border-on-quiet/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-on-quiet/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>MIT licensed. Free and open source.</span>
          <span>
            Built by{" "}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-quiet/60 hover:text-lime"
            >
              {AUTHOR}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
