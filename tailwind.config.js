/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      antiFlashWhite: '#f2f2f2',
      aquamarine: '#66ffcc',
      pastelRed: '#ff6666',
      black: '#000000',
      eerieBlack: '#181818',
      gray: '#808080',
      chineseWhite: '#e1e1e1',
    },
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
