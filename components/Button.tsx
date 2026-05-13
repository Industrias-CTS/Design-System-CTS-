import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-cts-blue text-white',
    'hover:bg-cts-blue-dark',
    'focus:ring-2 focus:ring-cts-blue focus:ring-offset-2',
    'disabled:bg-cts-gray-light disabled:text-cts-gray disabled:cursor-not-allowed',
  ].join(' '),

  secondary: [
    'bg-cts-blue-light text-cts-blue-dark',
    'hover:bg-cts-blue hover:text-white',
    'focus:ring-2 focus:ring-cts-blue focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' '),

  outline: [
    'border-2 border-cts-blue text-cts-blue bg-transparent',
    'hover:bg-cts-blue hover:text-white',
    'focus:ring-2 focus:ring-cts-blue focus:ring-offset-2',
    'disabled:border-cts-gray-light disabled:text-cts-gray disabled:cursor-not-allowed',
  ].join(' '),

  ghost: [
    'text-cts-blue bg-transparent',
    'hover:bg-cts-blue/10',
    'focus:ring-2 focus:ring-cts-blue focus:ring-offset-2',
    'disabled:text-cts-gray disabled:cursor-not-allowed',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5 rounded-md',
  md: 'px-5 py-2.5 text-base gap-2 rounded-md',
  lg: 'px-7 py-3.5 text-lg gap-2.5 rounded-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center',
        'font-body font-semibold',
        'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
        'focus:outline-none',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        loading ? 'opacity-70 cursor-wait' : '',
        className,
      ].filter(Boolean).join(' ')}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-4 w-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12" cy="12" r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        leadingIcon && <span className="shrink-0" aria-hidden="true">{leadingIcon}</span>
      )}
      <span>{children}</span>
      {!loading && trailingIcon && (
        <span className="shrink-0" aria-hidden="true">{trailingIcon}</span>
      )}
    </button>
  )
}
