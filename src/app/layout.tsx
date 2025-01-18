import type { Metadata } from "next"
import "./globals.css"
import { montserrat, poppins } from "@/utils/fonts"
import { Header } from "@/components/layout/header/header"
import { Footer } from "@/components/layout/footer/footer"

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
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${poppins} ${montserrat} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
