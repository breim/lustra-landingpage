import { lustraSkillMarkdown } from '@/lib/skill'

export async function GET() {
  return new Response(lustraSkillMarkdown(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
