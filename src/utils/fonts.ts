import { Montserrat, Poppins } from "next/font/google"

const poppins_font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const montserrat_font = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const poppins = poppins_font.variable
export const montserrat = montserrat_font.variable
