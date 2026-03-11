import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7FBF2F',
          dark: '#6aaa22',
          light: '#CDE8A1',
        },
        brand: {
          dark: '#1F2933',
          gray: '#6B7280',
          bg: '#F5F7F9',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        headline: ['var(--font-inter)', 'Inter', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.05)',
        'card-hover': '0 15px 35px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}

export default config
