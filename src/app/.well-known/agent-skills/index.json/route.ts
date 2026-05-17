import { SITE_URL } from '@/lib/content'
import {
  buildSkillArchive,
  fetchSkillMarkdown,
  sha256
} from '@/lib/github-skill'
import { LUSTRA_SKILL_DESCRIPTION } from '@/lib/skill'

export async function GET() {
  const [markdown, archive] = await Promise.all([
    fetchSkillMarkdown(),
    buildSkillArchive()
  ])

  const index = {
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: [
      {
        name: 'lustra',
        type: 'archive',
        description: LUSTRA_SKILL_DESCRIPTION,
        url: `${SITE_URL}/.well-known/agent-skills/lustra/skill.zip`,
        digest: `sha256:${sha256(archive)}`
      },
      {
        name: 'lustra-md',
        type: 'skill-md',
        description: LUSTRA_SKILL_DESCRIPTION,
        url: `${SITE_URL}/.well-known/agent-skills/lustra/SKILL.md`,
        digest: `sha256:${sha256(markdown)}`
      }
    ]
  }

  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
