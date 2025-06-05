/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rust-primary': '#E25822',
        'rust-light': '#F4A460',
        'rust-dark': '#8B4513',
        'steel-primary': '#3D5A80',
        'steel-light': '#98C1D9',
        'steel-dark': '#293241',
        'neutral-light': '#F0F4F8',
        'neutral-medium': '#BCCCDC',
        'neutral-dark': '#486581'
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};