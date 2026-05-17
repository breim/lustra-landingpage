import { createHash } from 'node:crypto'
import { SITE_URL } from '@/lib/content'
import { LUSTRA_SKILL_DESCRIPTION, lustraSkillMarkdown } from '@/lib/skill'

export async function GET() {
  const artifact = lustraSkillMarkdown()
  const digest = createHash('sha256').update(artifact).digest('hex')

  const index = {
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: [
      {
        name: 'lustra',
        type: 'skill-md',
        description: LUSTRA_SKILL_DESCRIPTION,
        url: `${SITE_URL}/.well-known/agent-skills/lustra/SKILL.md`,
        digest: `sha256:${digest}`
      }
    ]
  }

  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
