import Link from 'next/link'
import { cn } from '@/lib/utils'

type CtaVariant = 'lime' | 'ink' | 'outline-quiet' | 'outline-surface'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold tracking-tight transition-[color,background-color,border-color,opacity,filter,transform] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px'

const variants: Record<CtaVariant, string> = {
  // Lime button — for use on dark/quiet bands
  lime: 'bg-lime text-on-surface hover:brightness-95 focus-visible:outline-lime',
  // Ink button — for use on lime/drenched bands
  ink: 'bg-on-surface text-lime hover:opacity-90 focus-visible:outline-on-surface',
  // Outline on quiet bands
  'outline-quiet':
    'border border-on-quiet/25 text-on-quiet hover:border-on-quiet/60 focus-visible:outline-on-quiet',
  // Outline on lime bands
  'outline-surface':
    'border border-on-surface/30 text-on-surface hover:border-on-surface/70 focus-visible:outline-on-surface'
}

const sizes = {
  md: 'h-11 px-5',
  lg: 'h-14 px-7 text-base'
} as const

type Props = {
  href: string
  variant?: CtaVariant
  size?: keyof typeof sizes
  className?: string
  external?: boolean
  children: React.ReactNode
}

export function Cta({
  href,
  variant = 'lime',
  size = 'md',
  className,
  external,
  children
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className)
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}
