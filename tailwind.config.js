module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#151c38',
        'blue-light': '#234263',
        'blue': '#1fb6ff',
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
        'black-opacity-90': 'rgba(0, 0, 0, 0.9)'
      },
      fontFamily: {
        corporate: ['Corporate', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      rotate: {
        '357': '357deg'
      }
    }
  },
  plugins: [],
}
