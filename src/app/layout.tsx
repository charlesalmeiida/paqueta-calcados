import type { Metadata } from "next"
import "./globals.css"
import { montserrat, poppins } from "@/utils/fonts"
import { Header } from "@/components/layout/header"

export const metadata: Metadata = {
  title: "Paquetá Calçados",
  description: "Loja de Calçados e Moda Online",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins} ${montserrat} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
