/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#709dff',
          200: '#5651e5'
        },
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      height: {
        'carousel': 'calc(100vh - 104px)', // 104 => 26*0.25*16
      }
    },
  },
  plugins: [],
};
