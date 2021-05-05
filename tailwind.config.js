module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "1000": '1000px',
        "6r": '6rem',
        "100p": '100px',
      },
      letterSpacing: {
        "1": "1px",
      },
      zIndex: {
        '1000': 1000,
      },
      colors: {
        'regal-blue': '#4978ff',
      },
      gridTemplateColumns: {
        "home3": "repeat(auto-fit,minmax(300px,1fr))",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
