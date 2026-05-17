import type { Metadata } from 'next'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CommandCopy } from '@/components/command-copy'
import { HarnessMonogram } from '@/components/icons'
import { CLIENTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Install',
  description:
    'Install Lustra through the skills CLI, globally with npm, or into specific agent clients.',
  alternates: { canonical: '/install' }
}

function Step({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed text-on-quiet/65">
      {children}
    </p>
  )
}

export default function InstallPage() {
  return (
    <div className="bg-quiet text-on-quiet">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <header className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-lime/75">
            Install
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            Three ways in.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-on-quiet/60">
            Nothing leaves your machine. Lustra is a skill that runs inside the
            agent harness you already use.
          </p>
        </header>

        <Tabs defaultValue="skills" className="mt-14 gap-6">
          <TabsList variant="line" className="border-b border-on-quiet/12">
            <TabsTrigger value="skills">Skills CLI</TabsTrigger>
            <TabsTrigger value="npm">npm global</TabsTrigger>
            <TabsTrigger value="clients">Per client</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="pt-2">
            <Step>
              The shortest path. The skills CLI fetches Lustra and registers it
              with your agent.
            </Step>
            <CommandCopy command="npx skills add breim/lustra" tone="onQuiet" />
            <Step>
              <span className="mt-6 inline-block">
                Then call it from inside your agent:
              </span>
            </Step>
            <CommandCopy command="/lustra audit" tone="onQuiet" />
          </TabsContent>

          <TabsContent value="npm" className="pt-2">
            <Step>
              Install globally. The postinstall step auto-detects every
              supported client on your machine and installs the skill into each.
            </Step>
            <div className="flex flex-col gap-3">
              <CommandCopy command="npm i -g lustra-cli" tone="onQuiet" />
              <CommandCopy command="lustra help" tone="onQuiet" />
            </div>
            <Step>
              <span className="mt-6 inline-block">
                Target specific clients instead of all of them:
              </span>
            </Step>
            <div className="flex flex-col gap-3">
              <CommandCopy command="lustra install --all" tone="onQuiet" />
              <CommandCopy
                command="lustra install --client claude-code,cursor"
                tone="onQuiet"
              />
            </div>
          </TabsContent>

          <TabsContent value="clients" className="pt-2">
            <Step>
              These are the harnesses Lustra detects and installs into. Each has
              its own config directory.
            </Step>
            <ul className="mt-2 divide-y divide-on-quiet/10 border-y border-on-quiet/10">
              {CLIENTS.map(c => (
                <li
                  key={c.name}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="flex items-center gap-3">
                    <HarnessMonogram name={c.name} />
                    <span className="text-base font-semibold">{c.name}</span>
                  </span>
                  <code className="font-mono text-sm text-on-quiet/55">
                    {c.configDir}
                  </code>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>

        <div className="mt-16 border-t border-on-quiet/12 pt-10">
          <Link
            href="/commands"
            className="inline-flex items-center gap-2 rounded-sm text-base font-semibold text-lime hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-quiet"
          >
            See all 18 commands &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
