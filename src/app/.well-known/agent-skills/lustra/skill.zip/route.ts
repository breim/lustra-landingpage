import { buildSkillArchive } from '@/lib/github-skill'

export async function GET() {
  try {
    const archive = await buildSkillArchive()
    return new Response(archive as BodyInit, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="lustra-skill.zip"',
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*'
      }
    })
  } catch {
    return new Response('Upstream skill source unavailable', {
      status: 502,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    })
  }
}
