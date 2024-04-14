/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs: '328px',
        sm: '600px',
        md: '928px',
        lg: '1128px',
        xl: '1321px',

      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary-1': '#585EE3',
      'primary-2': '#F5F8FF',
      'black': '#000000',
      'midnight': '#1D2D35',
      'gray': '#657178',
      'light-gray': '#EFF4F5',
      'white': '#ffffff',
      'background':'#f2f3f7'
    },
    boxShadow: {
      'light': '0px 0px 40px 0px rgba(0,0,0,0.08);',
      'dark': '0px 0px 20px 0px rgba(0,0,0,0.1);',
    },

    extend: {
      fontFamily:{
        "noto":['"Noto Sans Georgian"', "sans-serif"],
        "caps":['"BPG Banner Caps"', "sans-serif"]
      }
    },
  },
  plugins: [],
}

