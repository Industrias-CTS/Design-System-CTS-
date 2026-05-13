import React from 'react'

export type InputState = 'default' | 'error' | 'success'
export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  hint?: string
  state?: InputState
  message?: string
  size?: InputSize
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

const stateStyles: Record<InputState, { border: string; message: string }> = {
  default: {
    border:  'border-cts-gray-light focus:border-cts-blue focus:ring-2 focus:ring-cts-blue/20',
    message: 'text-cts-gray-dark',
  },
  error: {
    border:  'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20',
    message: 'text-red-600',
  },
  success: {
    border:  'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20',
    message: 'text-green-600',
  },
}

const sizeStyles: Record<InputSize, { input: string; icon: string }> = {
  sm: { input: 'px-3 py-1.5 text-sm',  icon: 'text-sm'  },
  md: { input: 'px-4 py-2.5 text-base', icon: 'text-base' },
  lg: { input: 'px-4 py-3.5 text-lg',  icon: 'text-lg'  },
}

export function Input({
  label,
  hint,
  state = 'default',
  message,
  size = 'md',
  leadingIcon,
  trailingIcon,
  disabled,
  id,
  required,
  className = '',
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {(label || hint) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label htmlFor={inputId} className="font-body font-bold text-sm text-[#1A1A1A]">
              {label}
              {required && (
                <span className="text-red-500 ml-1" aria-hidden="true">*</span>
              )}
            </label>
          )}
          {hint && (
            <span className="font-body text-xs text-cts-gray">{hint}</span>
          )}
        </div>
      )}

      <div className="relative flex items-center">
        {leadingIcon && (
          <span
            className={`absolute left-3 text-cts-gray pointer-events-none ${sizeStyles[size].icon}`}
            aria-hidden="true"
          >
            {leadingIcon}
          </span>
        )}

        <input
          id={inputId}
          required={required}
          disabled={disabled}
          className={[
            'w-full font-body rounded-md border bg-white',
            'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
            'placeholder:text-cts-gray-light',
            'focus:outline-none',
            'disabled:bg-[#F4F7FB] disabled:text-cts-gray disabled:cursor-not-allowed',
            stateStyles[state].border,
            sizeStyles[size].input,
            leadingIcon  ? 'pl-10' : '',
            trailingIcon ? 'pr-10' : '',
            className,
          ].filter(Boolean).join(' ')}
          aria-invalid={state === 'error'}
          aria-describedby={message ? `${inputId}-message` : undefined}
          {...props}
        />

        {trailingIcon && (
          <span
            className={`absolute right-3 text-cts-gray pointer-events-none ${sizeStyles[size].icon}`}
            aria-hidden="true"
          >
            {trailingIcon}
          </span>
        )}
      </div>

      {message && (
        <span
          id={`${inputId}-message`}
          className={`font-body text-xs ${stateStyles[state].message}`}
          role={state === 'error' ? 'alert' : undefined}
        >
          {message}
        </span>
      )}
    </div>
  )
}
