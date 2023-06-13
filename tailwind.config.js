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
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow-dark': '#836214',
        'yellow-light-dark': '#E5AD26',
        'yellow': '#daaf41',
        'yellow-light': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6'
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
