/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#060d03', 
        'background': '#F6F8FD', 
        'primary': '#a7e98a', 
        'secondary': '#C9FDFD', 
        'accent': '#67a5d9',
        'grayish': "#f8f8f8",
        'lightBlue': "#3875ab",
        'darkGreen': "#6fbf4d"

      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'noto': ['Noto Serif', 'serif'],
      },
      backgroundImage: {
        'header': "url('/header-background.png')",
      },
      rotate: {
        'gradient': '-4deg',
      },
      borderRadius: {
        'circle': '50%',
      },
      screens: {
        // ipad pro
        'lg': '1025px',
      }
    },
  },
  plugins: [],
};
