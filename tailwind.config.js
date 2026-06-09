/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#050508',
        surface: '#0d0d14',
        border: 'rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.15)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.15)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.15)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}

