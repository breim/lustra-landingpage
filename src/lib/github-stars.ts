const REPO_API = 'https://api.github.com/repos/breim/lustra'

export async function fetchStarCount(): Promise<number | null> {
  try {
    const res = await fetch(REPO_API, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 }
    })
    if (!res.ok) {
      return null
    }

    const data = (await res.json()) as { stargazers_count?: number }
    return typeof data.stargazers_count === 'number'
      ? data.stargazers_count
      : null
  } catch {
    return null
  }
}
