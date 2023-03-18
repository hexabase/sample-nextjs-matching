/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
      segoe: ['Segoe Script'],
    },
    extend: {
      colors: {
        blackRgba: 'rgba(0, 0, 0, 0.6)',
        antiFlashWhite: '#f2f2f2',
        white: '#ffffff',
        aquamarine: '#66ffcc',
        red: '#ff0000',
        pastelRed: '#ff6666',
        black: '#000000',
        eerieBlack: '#181818',
        gray: '#808080',
        chineseWhite: '#e1e1e1',
        spanishGray: '#9c9c9c',
        lightSilver: '#d9d9d9',
        argent: '#c1c1c1',
        jellyBean: '#df5656',
        cultured: '#f7f7f7',
        culturedF4: '#f4f4f4',
        platinum: '#e3e3e3',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
