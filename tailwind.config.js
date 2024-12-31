import defaultTheme from "tailwindcss/defaultTheme"
import { pokemonColors } from "./src/configs/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...pokemonColors
      }
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}

