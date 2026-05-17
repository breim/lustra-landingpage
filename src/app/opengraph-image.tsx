import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Lustra — make your AI clean up its own slop'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const LIME = '#c9f04a'
const INK = '#16201a'

export default async function OpengraphImage() {
  const ogDir = join(process.cwd(), 'src/app/_og')
  const [display, body] = await Promise.all([
    readFile(join(ogDir, 'Bricolage-800.ttf')),
    readFile(join(ogDir, 'Hanken-500.ttf'))
  ])

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: LIME,
        color: INK,
        padding: '76px 80px',
        fontFamily: 'Hanken'
      }}
    >
      <div
        style={{
          fontSize: 26,
          fontWeight: 500,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          opacity: 0.7
        }}
      >
        An engineering skill for AI coding harnesses
      </div>

      <div
        style={{
          display: 'flex',
          fontFamily: 'Bricolage',
          fontSize: 116,
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: '-0.03em'
        }}
      >
        Your AI ships code that lies.
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: 34
        }}
      >
        <span style={{ fontFamily: 'Bricolage', fontWeight: 800 }}>
          lustra.
        </span>
        <span style={{ opacity: 0.6 }}>1 skill · 18 commands</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Bricolage', data: display, weight: 800, style: 'normal' },
        { name: 'Hanken', data: body, weight: 500, style: 'normal' }
      ]
    }
  )
}
