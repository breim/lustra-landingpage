import { createHash } from 'node:crypto'
import { zipSync, strToU8 } from 'fflate'

const RAW_BASE = 'https://raw.githubusercontent.com/breim/lustra/main/skill'

const REVALIDATE_SECONDS = 3600

// Fixed so the archive bytes (and thus its sha256 digest) are deterministic
// across requests/cold starts. Must be in the DOS date range fflate requires.
const FIXED_MTIME = new Date('1980-01-01T00:00:00Z')

// Hardcoded rather than listed via the GitHub contents API: the unauthenticated
// API is rate-limited (60/hr per IP) which is unsafe on serverless, and this set
// changes only when a command is added/removed upstream. This is the single
// maintenance point — keep in sync with breim/lustra skill/reference/.
const REFERENCE_FILES = [
  'analyze.md',
  'audit.md',
  'baseline.md',
  'ci.md',
  'deadcode.md',
  'deps.md',
  'design.md',
  'docs.md',
  'format.md',
  'license.md',
  'migrate.md',
  'observability.md',
  'perf.md',
  'review.md',
  'security.md',
  'structure.md',
  'tests.md',
  'types.md'
] as const

async function fetchRaw(path: string): Promise<string> {
  const res = await fetch(`${RAW_BASE}/${path}`, {
    next: { revalidate: REVALIDATE_SECONDS }
  })
  if (!res.ok) {
    throw new Error(`GitHub fetch failed for ${path}: ${res.status}`)
  }

  return res.text()
}

// Reference files drift upstream (renamed/removed) without this list being
// updated. A 404 means the file is simply gone, so skip it rather than fail
// the whole archive. Other failures (5xx, network) still throw — silently
// dropping content on a transient error would corrupt the digest.
async function fetchReference(name: string): Promise<string | null> {
  const res = await fetch(`${RAW_BASE}/reference/${name}`, {
    next: { revalidate: REVALIDATE_SECONDS }
  })
  if (res.status === 404) {
    return null
  }
  if (!res.ok) {
    throw new Error(`GitHub fetch failed for reference/${name}: ${res.status}`)
  }

  return res.text()
}

export async function fetchSkillMarkdown(): Promise<string> {
  return fetchRaw('SKILL.md')
}

export async function buildSkillArchive(): Promise<Uint8Array> {
  const skillMd = await fetchSkillMarkdown()
  const references = await Promise.all(
    REFERENCE_FILES.map(
      async name => [name, await fetchReference(name)] as const
    )
  )

  const files: Record<string, [Uint8Array, { mtime: Date }]> = {
    'SKILL.md': [strToU8(skillMd), { mtime: FIXED_MTIME }]
  }
  for (const [name, content] of references) {
    if (content === null) continue

    files[`reference/${name}`] = [strToU8(content), { mtime: FIXED_MTIME }]
  }

  return zipSync(files, { level: 9 })
}

export function sha256(data: string | Uint8Array): string {
  return createHash('sha256').update(data).digest('hex')
}
