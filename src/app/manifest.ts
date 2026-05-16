import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lustra',
    short_name: 'Lustra',
    description:
      'The code-hygiene skill that makes your AI harness clean up its own slop.',
    start_url: '/',
    display: 'standalone',
    background_color: '#16201a',
    theme_color: '#c9f04a',
    icons: [
      {
        src: '/icon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
        purpose: 'any'
      },
      {
        src: '/apple-icon',
        type: 'image/png',
        sizes: '180x180'
      }
    ]
  }
}
