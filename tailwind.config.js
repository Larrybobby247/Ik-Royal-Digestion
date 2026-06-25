/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0F2027',
        'midnight-light': '#1a3542',
        ivory: '#F8F9FA',
        gold: '#D4AF37',
        'gold-light': '#E8C84A',
        'gold-dark': '#B8962E',
        emerald: '#126B40',
        'emerald-light': '#1a8a52',
        champagne: '#F5E6CC',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'pulse-gold': 'pulseGold 2s infinite',
        'rotate-slow': 'rotateSlow 1s linear infinite',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(15px) rotate(-2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.4)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(212,175,55,0)' },
        },
        rotateSlow: {
          'from': { transform: 'rotate(0)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}