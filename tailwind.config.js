/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cts: {
          blue: {
            DEFAULT: '#0065BB',
            light:   '#89AEDC',
            dark:    '#004D9E',
          },
          gray: {
            DEFAULT: '#8F8F8F',
            light:   '#C8C8C8',
            dark:    '#646464',
          },
          bg: {
            subtle: '#F4F7FB',
          },
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
        'cts-sm': '0 1px 2px 0 rgba(0, 77, 158, 0.08)',
        'cts-md': '0 4px 6px -1px rgba(0, 77, 158, 0.10), 0 2px 4px -1px rgba(0, 77, 158, 0.06)',
        'cts-lg': '0 10px 15px -3px rgba(0, 77, 158, 0.10), 0 4px 6px -2px rgba(0, 77, 158, 0.05)',
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
