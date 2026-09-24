/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cafe: {
          50: '#fdf8f0',
          100: '#faefd9',
          200: '#f4ddb2',
          300: '#edc582',
          400: '#e4a74f',
          500: '#dd902c',
          600: '#ce7721',
          700: '#ab5c1d',
          800: '#894a1f',
          900: '#6f3e1c',
          950: '#3c1e0c',
        },
        espresso: {
          50: '#f7f5f0',
          100: '#ede8db',
          200: '#dbd1b9',
          300: '#c5b592',
          400: '#b39e73',
          500: '#a68d61',
          600: '#957a54',
          700: '#7c6347',
          800: '#66523d',
          900: '#554435',
          950: '#2f231b',
        },
        cream: {
          50: '#fefcf7',
          100: '#fdf8eb',
          200: '#f9edd0',
          300: '#f4dea8',
          400: '#eeca78',
          500: '#e5b049',
          600: '#d49632',
          700: '#b17727',
          800: '#8f5e24',
          900: '#754d21',
          950: '#3f270f',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(47,35,27,0.85) 0%, rgba(109,62,28,0.7) 50%, rgba(204,119,33,0.6) 100%)',
        'warm-gradient': 'linear-gradient(135deg, #fdf8f0 0%, #faefd9 50%, #f4ddb2 100%)',
        'dark-gradient': 'linear-gradient(135deg, #2f231b 0%, #554435 50%, #3c1e0c 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(221,144,44,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(221,144,44,0.6)' },
        },
      },
    },
  },
  plugins: [],
};