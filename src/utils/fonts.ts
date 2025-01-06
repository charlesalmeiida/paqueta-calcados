import { Montserrat, Poppins } from "next/font/google"

const poppins_font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const montserrat_font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
})

export const montserrat = montserrat_font.variable
export const poppins = poppins_font.variable
