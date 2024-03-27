/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Urbanist", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

