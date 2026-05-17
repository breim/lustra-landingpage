'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tone = 'onLime' | 'onQuiet'

const tones: Record<
  Tone,
  { wrap: string; prompt: string; cmd: string; btn: string }
> = {
  onLime: {
    wrap: 'border-on-surface/25 bg-on-surface/[0.06]',
    prompt: 'text-on-surface/45',
    cmd: 'text-on-surface',
    btn: 'text-on-surface/60 hover:text-on-surface hover:bg-on-surface/10'
  },
  onQuiet: {
    wrap: 'border-on-quiet/15 bg-on-quiet/[0.04]',
    prompt: 'text-on-quiet/35',
    cmd: 'text-on-quiet',
    btn: 'text-on-quiet/55 hover:text-lime hover:bg-on-quiet/10'
  }
}

export function CommandCopy({
  command,
  tone = 'onLime',
  className
}: {
  command: string
  tone?: Tone
  className?: string
}) {
  const [copied, setCopied] = useState(false)
  const t = tones[tone]

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard unavailable (insecure context); selection still works.
    }
  }

  return (
    <div
      className={cn(
        'group inline-flex max-w-full items-center gap-3 rounded-md border px-4 py-3 font-mono text-sm',
        t.wrap,
        className
      )}
    >
      <span aria-hidden className={t.prompt}>
        $
      </span>
      <code className={cn('min-w-0 break-all select-all', t.cmd)}>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : 'Copy command'}
        className={cn(
          'ml-1 grid size-7 shrink-0 place-items-center rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
          t.btn
        )}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Copied' : ''}
      </span>
    </div>
  )
}
