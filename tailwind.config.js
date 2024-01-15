module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('../src/assets/images/background.png')",
      },
      colors: {
       "white": "#ffffff",
       "black": "#000000",
       "gray30": "#E3E3E3",
       "gray10": "#B9B9B9",
       "gray40": "#6B6B6B",
       "gray20": "#2C2C2CB2",
       "primary10": "#F8AF6C",
       "primary20": "#e6f4ff",
       "error": "#ed5151",
      },
      boxShadow: {
        '3xl':  '0px 13px 12px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}