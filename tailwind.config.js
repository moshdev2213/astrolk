const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // poppins:['Poppins','sans-serif']
        // Roboto: ['Roboto', 'sans-serif'],
        // Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    backgroundImage: {
      'main': "url('./src/assets/docs-right.png')",
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
        poppins:['Poppins','sans-serif']
    }
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        light: {

          colors: {
            // background: "#0D001A",
          }
        },
        dark: {
          layout: {
            
          },
          colors: {
            // background: "#010028",
          }
        },
      },
    }
  )]
}

