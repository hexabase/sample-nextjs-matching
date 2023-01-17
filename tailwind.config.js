/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
      segoe: ['Segoe Script'],
    },
    extend: {
      colors: {
        antiFlashWhite: '#f2f2f2',
        aquamarine: '#66ffcc',
        pastelRed: '#ff6666',
        black: '#000000',
        eerieBlack: '#181818',
        gray: '#808080',
        chineseWhite: '#e1e1e1',
        spanishGray: '#9c9c9c',
        lightSilver: '#d9d9d9',
        argent: '#c1c1c1',
        cultured: '#f7f7f7',
        culturedF4: '#f4f4f4',
      },
    },
  },
  plugins: [],
};
