"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { REPO_URL } from "@/lib/content";

const NAV = [
  { label: "Manifesto", href: "/#manifesto" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Commands", href: "/commands" },
  { label: "Install", href: "/install" },
  { label: "FAQ", href: "/#faq" },
];

function Wordmark() {
  return (
    <Link
      href="/"
      className="font-display text-xl font-extrabold tracking-tight text-on-quiet"
    >
      lustra<span className="text-lime">.</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-on-quiet/10 bg-quiet/85 backdrop-blur supports-[backdrop-filter]:bg-quiet/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-on-quiet/65 transition-colors hover:text-on-quiet"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-lime px-4 py-2 text-sm font-semibold text-on-surface transition-all hover:brightness-95"
          >
            GitHub
          </a>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-md text-on-quiet/80 hover:bg-on-quiet/10"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-on-quiet/10 bg-quiet text-on-quiet"
            >
              <SheetTitle className="px-5 pt-5 font-display text-on-quiet">
                lustra<span className="text-lime">.</span>
              </SheetTitle>
              <nav className="flex flex-col gap-1 px-3 py-4">
                {NAV.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={
                      <Link
                        href={item.href}
                        className="rounded-md px-3 py-3 text-lg font-medium text-on-quiet/75 hover:bg-on-quiet/10 hover:text-on-quiet"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 rounded-md bg-lime px-3 py-3 text-center text-lg font-semibold text-on-surface"
                >
                  GitHub
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
