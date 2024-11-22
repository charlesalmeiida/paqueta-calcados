import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        sm: "3px",
      },
      colors: {
        primary: "#F57002",
        primaryLight: "#FF8A29",
        primaryDark: "#CF5D00",
        primary02: "#F99500",
        secondary: "#121212",
        secondaryLight: "#383838",
        secondaryDark: "#0C0909",
        light: "#FFFFFF",
        light01: "#EDE8E8",
        dark: "#212121",
        dark01: "#595959",
        danger: "#EA4444",
        success: "#65C239",
      },
      backgroundImage: {
        linear: "linear-gradient(92deg, #FF8A29 31.2%, #CF5D00 71.97%)",
        linearButton:
          "linear-gradient(123deg, #F99500 53.34%, #FFCD29 133.06%)",
        linearButtonHover:
          "linear-gradient(286deg, #F99500 12.04%, #FFCD29 84.77%)",
        bgBanner: "url('/img/bg-banner.png')",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
