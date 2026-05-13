import React from 'react'

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled'

export interface CardProps {
  variant?: CardVariant
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export interface CardHeaderProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
  className?: string
}

export interface CardBodyProps {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}

export interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<CardVariant, string> = {
  default:  'bg-white border border-cts-gray-light shadow-cts-sm',
  elevated: 'bg-white border-0 shadow-cts-lg',
  outlined: 'bg-white border-2 border-cts-blue shadow-none',
  filled:   'bg-cts-blue border-0 shadow-cts-md',
}

export function Card({ variant = 'default', children, className = '', onClick }: CardProps) {
  const isInteractive = !!onClick

  return (
    <div
      className={[
        'rounded-lg overflow-hidden',
        'transition-shadow duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
        variantStyles[variant],
        isInteractive ? 'cursor-pointer hover:shadow-cts-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cts-blue' : '',
        className,
      ].filter(Boolean).join(' ')}
      onClick={onClick}
      onKeyDown={isInteractive ? (e) => e.key === 'Enter' && onClick?.() : undefined}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {children}
    </div>
  )
}

export function CardHeader({ title, subtitle, action, className = '' }: CardHeaderProps) {
  return (
    <div
      className={[
        'flex items-start justify-between px-6 py-4',
        'border-b border-cts-gray-light/50',
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className="min-w-0 flex-1">
        <h3 className="font-display font-bold text-lg text-[#1A1A1A] truncate">
          {title}
        </h3>
        {subtitle && (
          <p className="font-body text-sm text-cts-gray-dark mt-0.5">{subtitle}</p>
        )}
      </div>
      {action && <div className="ml-4 shrink-0">{action}</div>}
    </div>
  )
}

export function CardBody({ children, className = '', noPadding = false }: CardBodyProps) {
  return (
    <div className={[noPadding ? '' : 'px-6 py-4', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div
      className={[
        'px-6 py-4',
        'border-t border-cts-gray-light/50',
        'bg-[#F4F7FB]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}
