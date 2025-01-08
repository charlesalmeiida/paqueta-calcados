import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["var(--font-poppins)", "sans-serif"],
      montserrat: ["var(--font-montserrat)", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "16px",
    },
    borderRadius: {
      sm: "3px",
    },
    extend: {
      colors: {
        light: "#fff",
        gray01: "#383838",
        gray: "#121212",
        primary01: "#CF5D00",
      },
      backgroundImage: {
        linear01: "linear-gradient(92deg, #FF8A29 31.2%, #CF5D00 71.97%)",
        linear02: "linear-gradient(123deg, #F99500 53.34%, #FFCD29 133.06%)",
        hero: "url('/img/bg-hero.png')",
      },
      boxShadow: {
        shape: "0px 4px 21px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config
