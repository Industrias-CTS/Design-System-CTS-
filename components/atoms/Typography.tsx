import React from 'react'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'label'
  | 'caption'

export type TypographyColor = 'default' | 'primary' | 'muted' | 'disabled' | 'white' | 'inherit'

export interface TypographyProps {
  variant?: TypographyVariant
  color?: TypographyColor
  as?: keyof React.JSX.IntrinsicElements
  align?: 'left' | 'center' | 'right'
  truncate?: boolean
  children: React.ReactNode
  className?: string
}

type VariantConfig = {
  tag: keyof React.JSX.IntrinsicElements
  classes: string
}

const variantMap: Record<TypographyVariant, VariantConfig> = {
  h1:       { tag: 'h1',   classes: 'font-display font-bold text-5xl leading-tight tracking-tight' },
  h2:       { tag: 'h2',   classes: 'font-display font-bold text-4xl leading-tight tracking-tight' },
  h3:       { tag: 'h3',   classes: 'font-display font-semibold text-3xl leading-snug' },
  h4:       { tag: 'h4',   classes: 'font-display font-semibold text-2xl leading-snug' },
  subtitle: { tag: 'p',    classes: 'font-display font-normal text-xl leading-snug' },
  'body-lg':{ tag: 'p',    classes: 'font-body font-normal text-lg leading-relaxed' },
  body:     { tag: 'p',    classes: 'font-body font-normal text-base leading-relaxed' },
  'body-sm':{ tag: 'p',    classes: 'font-body font-normal text-sm leading-normal' },
  label:    { tag: 'span', classes: 'font-body font-bold text-sm leading-normal uppercase tracking-widest' },
  caption:  { tag: 'span', classes: 'font-body font-normal text-xs leading-normal' },
}

const colorMap: Record<TypographyColor, string> = {
  default:  'text-cts-black',
  primary:  'text-cts-blue',
  muted:    'text-cts-gray-dark',
  disabled: 'text-cts-gray',
  white:    'text-white',
  inherit:  'text-inherit',
}

const alignMap = {
  left:   'text-left',
  center: 'text-center',
  right:  'text-right',
}

export function Typography({
  variant = 'body',
  color = 'default',
  as,
  align,
  truncate = false,
  children,
  className = '',
}: TypographyProps) {
  const { tag: DefaultTag, classes } = variantMap[variant]
  const Tag = (as ?? DefaultTag) as keyof React.JSX.IntrinsicElements

  return (
    <Tag
      className={[
        classes,
        colorMap[color],
        align ? alignMap[align] : '',
        truncate ? 'truncate' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  )
}
