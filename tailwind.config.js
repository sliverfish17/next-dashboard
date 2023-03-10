/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#1D1D41',
        'light-grey': '#AEABD8',
        'dark-grey': '#8C89B4',
        main: '#F1F1F1',
        cyan: '#64CFF6',
        liliac: '#6359E9',
        success: '#02B15A',
        failure: '#EB001B',
        eggplant: '#27264E',
      },
    },
  },
  plugins: [],
};
