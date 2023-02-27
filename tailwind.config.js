/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#FFFFFF',
      'white-blur': '#FFFFFFDE',
      black: '#121212',
      'black-background': '#292929',
      yellow: '#F3AA00',
      'gray-dark': '#464646',
      gray: '#0000004D',
      'gray-light': '#DEDEDF',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      sans_alternative: ['Nunito Sans', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
