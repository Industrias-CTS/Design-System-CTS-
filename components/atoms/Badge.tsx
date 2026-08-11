import React from 'react'

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  primary:   'bg-cts-blue text-white',
  secondary: 'bg-cts-blue-light text-cts-blue-dark',
  success:   'bg-cts-success-light text-cts-success',
  warning:   'bg-cts-warning-light text-cts-warning',
  error:     'bg-cts-error-light text-cts-error',
  info:      'bg-cts-info-light text-cts-blue',
  neutral:   'bg-cts-gray-light text-cts-gray-dark',
}

const dotColors: Record<BadgeVariant, string> = {
  primary:   'bg-white',
  secondary: 'bg-cts-blue-dark',
  success:   'bg-cts-success',
  warning:   'bg-cts-warning',
  error:     'bg-cts-error',
  info:      'bg-cts-blue',
  neutral:   'bg-cts-gray',
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-2.5 py-1 text-sm gap-1.5',
}

export function Badge({
  variant = 'primary',
  size = 'md',
  dot = false,
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center',
        'font-body font-semibold rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className,
      ].filter(Boolean).join(' ')}
    >
      {dot && (
        <span
          className={`rounded-full shrink-0 ${dotColors[variant]} ${size === 'sm' ? 'w-1 h-1' : 'w-1.5 h-1.5'}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
