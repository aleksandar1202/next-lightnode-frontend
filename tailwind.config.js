module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-800': '#151c38',
        'blue-700': '#234263',
        'blue-500': '#1fb6ff',
        'blue-300': '#234263',
        'purple-dark': '#9C0051',
        'green': '#13ce66',
        'yellow-dark': '#836214',
        'yellow-light-dark': '#E5AD26',
        'yellow': '#daaf41',
        'yellow-light': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'black-opacity-20': 'rgba(0, 0, 0, 0.2)',
        'black-opacity-30': 'rgba(0, 0, 0, 0.3)',
        'black-opacity-40': 'rgba(0, 0, 0, 0.4)',
        'black-opacity-50': 'rgba(0, 0, 0, 0.5)',
        'black-opacity-60': 'rgba(0, 0, 0, 0.6)',
        'black-opacity-70': 'rgba(0, 0, 0, 0.7)',
        'black-opacity-80': 'rgba(0, 0, 0, 0.8)',
        'black-opacity-90': 'rgba(0, 0, 0, 0.9)',
        'white-opacity-20': 'rgba(255, 255, 255, 0.2)',
        'white-opacity-30': 'rgba(255, 255, 255, 0.3)',
        'white-opacity-40': 'rgba(255, 255, 255, 0.4)',
        'white-opacity-50': 'rgba(255, 255, 255, 0.5)',
        'white-opacity-60': 'rgba(255, 255, 255, 0.6)',
        'white-opacity-70': 'rgba(255, 255, 255, 0.7)',
        'white-opacity-80': 'rgba(255, 255, 255, 0.8)',
        'white-opacity-90': 'rgba(255, 255, 255, 0.9)'
      },
      fontFamily: {
        corporate: ['Corporate', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      rotate: {
        '357': '357deg'
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px'
      },
      keyframes: {
        'grow-up': {
          '0%': { width: 0 },
          '100%': { width: '100%' }
        }
      },
      animation: {
        'grow-up': 'grow-up 1s ease-in-out'
      }
    }
  },
  plugins: [],
}
