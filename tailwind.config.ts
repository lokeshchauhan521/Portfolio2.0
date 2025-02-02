import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'radial-gradient': 'radial-gradient(#B3B5D980, transparent)',
        'radial-gradient': 'radial-gradient(white, white, transparent)',
      },
      colors: {
        darkHover: '#2A004A',
        lightHover: '#FCF4FF',
        darkTheme: '#11001F',
        // background: 'var(--background)',
        // foreground: 'var(--foreground)',
        dark: {
          DEFAULT: '#111827', // Neutral gray for general use
          50: '#f9fafb', // Backgrounds, lightest gray
          100: '#f3f4f6', // Soft backgrounds
          200: '#e5e7eb', // Borders, dividers
          300: '#d1d5db', // Muted text, disabled elements
          400: '#9ca3af', // Secondary text, icons
          500: '#6b7280', // Default gray, main neutral color
          600: '#4b5563', // Stronger text, icons
          700: '#374151', // Darker text, hover effects
          800: '#1f2937', // Deep backgrounds, dark mode
          900: '#111827', // Darkest gray, headers
          950: '#030712', // Almost black, for deep contrast
        },
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],
      },
      zIndex: {
        navbar: '20',
        drawerMobile: '90',
        modal: '50',
        toast: '90',
        loader: '100',
      },
    },
  },
  corePlugins: {
    backdropBlur: true,
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config
