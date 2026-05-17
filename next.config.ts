import type { NextConfig } from 'next'

const MARKDOWN_ACCEPT = '.*text/markdown.*'

const LINK_HEADER =
  '</commands>; rel="service-doc", </.well-known/agent-skills/index.json>; rel="service-desc"'

const nextConfig: NextConfig = {
  async headers() {
    return ['/', '/commands', '/install'].map(source => ({
      source,
      headers: [
        { key: 'Link', value: LINK_HEADER },
        { key: 'Vary', value: 'Accept' }
      ]
    }))
  },
  async rewrites() {
    const has = [
      { type: 'header' as const, key: 'accept', value: MARKDOWN_ACCEPT }
    ]
    return {
      beforeFiles: [
        { source: '/', has, destination: '/md' },
        { source: '/commands', has, destination: '/md/commands' },
        { source: '/install', has, destination: '/md/install' }
      ]
    }
  }
}

export default nextConfig
