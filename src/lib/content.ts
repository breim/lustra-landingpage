// Single source of truth. The 18 commands render in three places (landing
// overview, lifecycle bands, /commands page). Edit here, nowhere else.

export const SITE_URL = 'https://lustra.sh'
export const REPO_URL = 'https://github.com/breim/lustra'
export const INSTALL_CMD = 'npx skills add breim/lustra'
export const AUTHOR = 'Henrique Breim'
export const AUTHOR_URL = 'https://www.linkedin.com/in/henrique-breim/'
export const AUTHOR_X_URL = 'https://x.com/_breim'

export type LifecycleId = 'assess' | 'iterate' | 'polish' | 'maintain'

export type LifecyclePhase = {
  id: LifecycleId
  label: string
  kicker: string
  question: string
}

export const LIFECYCLE: LifecyclePhase[] = [
  {
    id: 'assess',
    label: 'Assess / Start',
    kicker: 'Day one',
    question: 'I inherited this. What is actually in here?'
  },
  {
    id: 'iterate',
    label: 'Iterate',
    kicker: 'While building',
    question: 'Is this diff sound before it lands?'
  },
  {
    id: 'polish',
    label: 'Polish',
    kicker: 'Before ship',
    question: 'What breaks in production that nobody saw?'
  },
  {
    id: 'maintain',
    label: 'Maintain',
    kicker: 'Ongoing',
    question: 'Is the pipeline still gating anything?'
  }
]

export type Command = {
  slug: string
  group: LifecycleId
  title: string
  blurb: string
  example: string
}

export const COMMANDS: Command[] = [
  {
    slug: 'audit',
    group: 'assess',
    title: 'audit',
    blurb:
      'One graded health report across legal risk, supply chain, reliability, maintainability, and bus factor. Pass, concerns, or fail.',
    example: '/lustra audit'
  },
  {
    slug: 'baseline',
    group: 'assess',
    title: 'baseline',
    blurb:
      'Scaffold guardrail configs for the detected stack: linter, formatter, type-checker, tests, CI, .gitignore, license.',
    example: '/lustra baseline'
  },
  {
    slug: 'review',
    group: 'iterate',
    title: 'review',
    blurb:
      'Structured review of a diff or path. Off-by-one, error paths, async bugs, null-safety, and the slop tools miss.',
    example: '/lustra review'
  },
  {
    slug: 'types',
    group: 'iterate',
    title: 'types',
    blurb:
      'Type-checker triage. Runs tsc, mypy, go vet, cargo check. Catches the any and @ts-ignore that silenced the error instead of fixing it.',
    example: '/lustra types'
  },
  {
    slug: 'tests',
    group: 'iterate',
    title: 'tests',
    blurb:
      'Runs the suite, reports coverage on the diff, and flags tests that pass while asserting nothing.',
    example: '/lustra tests'
  },
  {
    slug: 'analyze',
    group: 'iterate',
    title: 'analyze',
    blurb:
      'Linter findings plus the AI-slop smells no rule catches: dead abstractions, useless try/catch, impossible guards.',
    example: '/lustra analyze'
  },
  {
    slug: 'format',
    group: 'iterate',
    title: 'format',
    blurb:
      'Formatting drift, fixed mechanically with nothing else touched. Drifted files listed for approval, then written.',
    example: '/lustra format'
  },
  {
    slug: 'security',
    group: 'polish',
    title: 'security',
    blurb:
      'Exploitable defects: hardcoded secrets, SQL and shell injection, broken authorization, unsafe deserialization, vulnerable deps.',
    example: '/lustra security src/api'
  },
  {
    slug: 'license',
    group: 'polish',
    title: 'license',
    blurb:
      'Dependency license compatibility and IP risk. Copyleft contamination and incompatible licenses, surfaced before legal does.',
    example: '/lustra license'
  },
  {
    slug: 'deadcode',
    group: 'polish',
    title: 'deadcode',
    blurb:
      'Unused files, exports, and dependencies. Confirmed before deletion, never guessed.',
    example: '/lustra deadcode'
  },
  {
    slug: 'deps',
    group: 'polish',
    title: 'deps',
    blurb:
      'Dependency health: outdated, deprecated, duplicated. Risk-ranked Safe / Review / Major / Replace, handing deletion to deadcode, vulnerabilities to security, and majors to migrate.',
    example: '/lustra deps'
  },
  {
    slug: 'design',
    group: 'polish',
    title: 'design',
    blurb:
      'Design quality of a module: god objects, leaky one-caller abstractions, import cycles, inverted dependencies. SOLID for OO stacks, cohesion and coupling for the rest.',
    example: '/lustra design'
  },
  {
    slug: 'observability',
    group: 'polish',
    title: 'observability',
    blurb:
      'Logging good enough to diagnose a production failure from the outside: swallowed errors, missing context, secrets in logs, uninstrumented critical paths.',
    example: '/lustra observability'
  },
  {
    slug: 'perf',
    group: 'polish',
    title: 'perf',
    blurb:
      'Performance smells: N+1 queries, synchronous IO on hot paths, unbounded growth, repeated work, bundle bloat.',
    example: '/lustra perf'
  },
  {
    slug: 'docs',
    group: 'polish',
    title: 'docs',
    blurb: 'Documentation drift and the public API surface nobody documented.',
    example: '/lustra docs'
  },
  {
    slug: 'migrate',
    group: 'maintain',
    title: 'migrate',
    blurb:
      'One major dependency upgrade, isolated and verified. Reads the breaking changes, runs the codemod, applies as a single reviewable change, runs the suite.',
    example: '/lustra migrate'
  },
  {
    slug: 'ci',
    group: 'maintain',
    title: 'ci',
    blurb:
      'Pipeline soundness: real gates instead of green theater, CI security, reproducibility.',
    example: '/lustra ci'
  },
  {
    slug: 'structure',
    group: 'maintain',
    title: 'structure',
    blurb:
      "Detect the stack, judge structure against that stack's conventions, then report or reorganize files and imports.",
    example: '/lustra structure'
  }
]

export function commandsByGroup(group: LifecycleId): Command[] {
  return COMMANDS.filter(c => c.group === group)
}

export type Client = {
  name: string
  configDir: string
}

export const CLIENTS: Client[] = [
  { name: 'Claude Code', configDir: '~/.claude' },
  { name: 'Cursor', configDir: '~/.cursor' },
  { name: 'Gemini CLI', configDir: '~/.gemini' },
  { name: 'Codex CLI', configDir: '~/.codex' },
  { name: 'VS Code Copilot', configDir: '~/.github' },
  { name: 'Kiro', configDir: '~/.kiro' },
  { name: 'OpenCode', configDir: '~/.opencode' },
  { name: 'Qoder', configDir: '~/.qoder' }
]

export type Faq = {
  q: string
  a: string
}

export const FAQ: Faq[] = [
  {
    q: 'Is this just another linter?',
    a: 'No. Linters run as one input. Lustra runs the actual tooling (npm audit, knip, eslint, tsc, your test runner, prettier, license-checker) and then triages the output: it filters false positives, ranks by real risk, and decides what is safe to touch. The judgment on top is the product.'
  },
  {
    q: 'What does it fix automatically versus propose?',
    a: 'Nothing is applied silently. Read-only detection runs on its own; every change, even mechanical formatting, is presented as an itemized checklist and applied only after you approve it. No silent scope changes.'
  },
  {
    q: 'Which agents does it work with?',
    a: 'Claude Code, Cursor, Gemini CLI, Codex CLI, VS Code Copilot, Kiro, OpenCode, and Qoder. One install auto-detects which clients you have and installs the skill into each.'
  },
  {
    q: 'Does my code leave my machine?',
    a: 'No. Lustra is a skill that runs inside your existing agent harness and invokes local tooling. There is no Lustra service and nothing is uploaded.'
  },
  {
    q: "What happens if a tool isn't installed?",
    a: 'It says so. Lustra reports honestly rather than pretending a scan was complete. A missing tool is named, not silently skipped.'
  },
  {
    q: 'How is this different from impeccable.style?',
    a: 'Impeccable fixes the slop you can see, the design. Lustra fixes the slop you cannot, the code underneath. Same stance, the layer nobody looks at is the one that decides whether the work is sound, applied to correctness instead of craft.'
  }
]
