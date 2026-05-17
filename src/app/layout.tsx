import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  Geist_Mono
} from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { AUTHOR, SITE_URL } from '@/lib/content'
import { fetchStarCount } from '@/lib/github-stars'

const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap'
})

const body = Hanken_Grotesk({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap'
})

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap'
})

const TITLE = 'Lustra — make your AI clean up its own slop'
const DESCRIPTION =
  'An engineering-discipline skill for AI coding harnesses. It runs the real tooling, then applies judgment: filters false positives, ranks by real risk, fixes only what is mechanically safe.'
const SOCIAL_DESCRIPTION =
  'AI writes code that runs, looks fine, and is quietly wrong. Lustra runs the real tools and applies judgment.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s — Lustra'
  },
  description: DESCRIPTION,
  applicationName: 'Lustra',
  keywords: [
    'AI code review',
    'code hygiene',
    'AI slop',
    'Claude Code',
    'Cursor',
    'dead code',
    'security audit',
    'code quality',
    'AI coding harness'
  ],
  authors: [{ name: AUTHOR }],
  creator: AUTHOR,
  publisher: AUTHOR,
  category: 'technology',
  alternates: {
    canonical: '/'
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Lustra',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    creator: '@breim'
  }
}

export const viewport: Viewport = {
  themeColor: '#c9f04a',
  colorScheme: 'dark'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const stars = await fetchStarCount()

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground min-h-full flex flex-col font-sans">
        <SiteHeader stars={stars} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
      <GoogleAnalytics gaId="G-LN5JF5VQ5H" />
    </html>
  )
}
