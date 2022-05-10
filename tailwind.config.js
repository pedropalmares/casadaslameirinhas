const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black': '#242323',
        'grey': '#737373',
        'lightgrey': '#d4d4d4'
        // 'green': '#00B805',
        // 'darkgreen': '#008E04',
        // 'purple': '#6A67E2',
        // 'pink': '#F15484',
        // 'blue': '#78CDEE'
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}
