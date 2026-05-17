import {
  COMMANDS,
  INSTALL_CMD,
  LIFECYCLE,
  REPO_URL,
  SITE_URL
} from '@/lib/content'

export const LUSTRA_SKILL_DESCRIPTION =
  'Code-hygiene skill for AI coding agents: runs real tooling (npm audit, knip, eslint, tsc, the test runner, prettier, license-checker) and triages the output with judgment across security, dependencies, dead code, types, tests, performance, docs, CI, and structure.'

export function lustraSkillMarkdown(): string {
  const lines: string[] = []

  lines.push('---')
  lines.push('name: lustra')
  lines.push(`description: ${LUSTRA_SKILL_DESCRIPTION}`)
  lines.push('---')
  lines.push('')
  lines.push('# Lustra')
  lines.push('')
  lines.push(
    'Lustra makes an AI coding agent run the real tooling and triage the output with judgment, so quietly-wrong code never reaches main. It filters false positives, ranks by real risk, and only auto-applies mechanically-safe changes; anything that needs judgment is proposed as a diff and confirmed first.'
  )
  lines.push('')
  lines.push(`Install: \`${INSTALL_CMD}\``)
  lines.push('')
  lines.push(`Source: ${REPO_URL}`)
  lines.push('')
  lines.push('## Commands')
  lines.push('')
  for (const phase of LIFECYCLE) {
    lines.push(`### ${phase.label}`)
    lines.push('')
    for (const command of COMMANDS.filter(c => c.group === phase.id)) {
      lines.push(
        `- **${command.title}** — ${command.blurb} \`${command.example}\``
      )
    }
    lines.push('')
  }
  lines.push('---')
  lines.push('')
  lines.push(`${SITE_URL}`)
  lines.push('')

  return lines.join('\n')
}
