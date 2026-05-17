import {
  type MarkdownPath,
  estimateTokens,
  routeMarkdown
} from '@/lib/markdown'

function pathFromSlug(slug: string[] | undefined): MarkdownPath {
  const joined = slug?.join('/')
  if (joined === 'commands') return '/commands'
  if (joined === 'install') return '/install'

  return '/'
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params
  const markdown = routeMarkdown(pathFromSlug(slug))

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(estimateTokens(markdown)),
      Vary: 'Accept',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
