import {
  AUTHOR,
  CLIENTS,
  FAQ,
  INSTALL_CMD,
  LIFECYCLE,
  REPO_URL,
  SITE_URL,
  commandsByGroup
} from '@/lib/content'

export type MarkdownPath = '/' | '/commands' | '/install'

function homeMarkdown(): string {
  const lines: string[] = []

  lines.push('# Lustra')
  lines.push('')
  lines.push('A code-hygiene skill for AI coding agents.')
  lines.push('')
  lines.push(
    'Your AI ships code that lies. It runs. It looks fine. It is quietly wrong. Lustra makes your agent run the real tooling, then triage the output with judgment, so the slop never reaches main.'
  )
  lines.push('')
  lines.push(`Install: \`${INSTALL_CMD}\``)
  lines.push('')
  lines.push(`Repository: ${REPO_URL}`)
  lines.push('')
  lines.push(
    '1 skill. 15 commands. From first commit to technical due diligence.'
  )
  lines.push('')

  lines.push('## The problem')
  lines.push('')
  lines.push(
    'This is what AI-assisted code looks like at scale: a green pipeline that gates nothing, tests that pass while asserting nothing, error handling that swallows the error, an `any` cast where the bug was. Not broken enough to fail. Just wrong enough to cost you later.'
  )
  lines.push('')
  lines.push(
    'Linters catch a slice. The rest needs judgment on top of real tools. Lustra runs the actual tooling (npm audit, knip, eslint, tsc, your test runner, prettier, license-checker) and then triages the output: it filters false positives, ranks by real risk, and decides what is safe to touch.'
  )
  lines.push('')

  lines.push('## Lifecycle')
  lines.push('')
  for (const phase of LIFECYCLE) {
    lines.push(`### ${phase.label} — ${phase.kicker}`)
    lines.push('')
    lines.push(`_${phase.question}_`)
    lines.push('')
    for (const command of commandsByGroup(phase.id)) {
      lines.push(
        `- **${command.title}** — ${command.blurb} \`${command.example}\``
      )
    }
    lines.push('')
  }

  lines.push('## FAQ')
  lines.push('')
  for (const item of FAQ) {
    lines.push(`### ${item.q}`)
    lines.push('')
    lines.push(item.a)
    lines.push('')
  }

  lines.push('---')
  lines.push('')
  lines.push(`Maintained by ${AUTHOR}. ${SITE_URL}`)
  lines.push('')

  return lines.join('\n')
}

function commandsMarkdown(): string {
  const lines: string[] = []

  lines.push('# Lustra commands')
  lines.push('')
  lines.push(
    'One skill, 15 commands, grouped by where they fit in the lifecycle of a codebase.'
  )
  lines.push('')

  for (const phase of LIFECYCLE) {
    lines.push(`## ${phase.label} — ${phase.kicker}`)
    lines.push('')
    lines.push(`_${phase.question}_`)
    lines.push('')
    for (const command of commandsByGroup(phase.id)) {
      lines.push(`### ${command.title}`)
      lines.push('')
      lines.push(command.blurb)
      lines.push('')
      lines.push(`\`\`\`\n${command.example}\n\`\`\``)
      lines.push('')
    }
  }

  lines.push('---')
  lines.push('')
  lines.push(`${SITE_URL}/commands`)
  lines.push('')

  return lines.join('\n')
}

function installMarkdown(): string {
  const lines: string[] = []

  lines.push('# Install Lustra')
  lines.push('')
  lines.push(`One command installs the skill into every agent client you have:`)
  lines.push('')
  lines.push(`\`\`\`\n${INSTALL_CMD}\n\`\`\``)
  lines.push('')
  lines.push(
    'Lustra runs inside your existing agent harness and invokes local tooling. There is no Lustra service and nothing is uploaded.'
  )
  lines.push('')

  lines.push('## Supported clients')
  lines.push('')
  for (const client of CLIENTS) {
    lines.push(`- **${client.name}** — \`${client.configDir}\``)
  }
  lines.push('')

  lines.push('---')
  lines.push('')
  lines.push(`${SITE_URL}/install`)
  lines.push('')

  return lines.join('\n')
}

export function routeMarkdown(path: MarkdownPath): string {
  switch (path) {
    case '/commands':
      return commandsMarkdown()
    case '/install':
      return installMarkdown()
    default:
      return homeMarkdown()
  }
}

export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4)
}
