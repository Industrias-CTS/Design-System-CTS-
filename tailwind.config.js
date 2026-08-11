/** @type {import('tailwindcss').Config} */
module.exports = {
  // Sigue el atributo data-theme del sitio (el toggle manual claro/oscuro),
  // no prefers-color-scheme — así los átomos reaccionan al mismo switch
  // que ya usa el showcase.
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './index.html',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Referencian tokens/index.css — única fuente de verdad de estos hex.
        cts: {
          blue: {
            DEFAULT: 'var(--cts-blue)',
            light:   'var(--cts-blue-light)',
            dark:    'var(--cts-blue-dark)',
          },
          gray: {
            DEFAULT: 'var(--cts-gray)',
            light:   'var(--cts-gray-light)',
            dark:    'var(--cts-gray-dark)',
          },
          bg: {
            subtle: 'var(--cts-bg-subtle)',
          },
          black:   'var(--cts-black)',
          success: { DEFAULT: 'var(--cts-success)', light: 'var(--cts-success-light)' },
          warning: { DEFAULT: 'var(--cts-warning)', light: 'var(--cts-warning-light)' },
          error:   { DEFAULT: 'var(--cts-error)',   light: 'var(--cts-error-light)' },
          info:    { DEFAULT: 'var(--cts-info)',    light: 'var(--cts-info-light)' },
        },
      },
      fontFamily: {
        display: ['Conthrax', 'Arial Narrow', 'Arial', 'sans-serif'],
        body:    ['Titillium Web', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        'cts-sm': '0 1px 3px rgba(0, 77, 158, 0.08)',
        'cts-md': '0 4px 8px rgba(0, 77, 158, 0.10), 0 2px 4px rgba(0, 77, 158, 0.06)',
        'cts-lg': '0 10px 20px rgba(0, 77, 158, 0.10), 0 4px 8px rgba(0, 77, 158, 0.05)',
        'cts-xl': '0 20px 25px -5px rgba(0, 77, 158, 0.10), 0 10px 10px -5px rgba(0, 77, 158, 0.04)',
      },
      borderRadius: {
        'cts-sm':  '0.25rem',
        'cts-md':  '0.5rem',
        'cts-lg':  '0.75rem',
        'cts-xl':  '1rem',
        'cts-2xl': '1.5rem',
      },
      transitionTimingFunction: {
        'cts': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'cts-fast': '150ms',
        'cts-base': '200ms',
        'cts-slow': '300ms',
      },
    },
  },
  plugins: [],
}
