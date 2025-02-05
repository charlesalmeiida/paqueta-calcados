import type { Metadata } from "next"
import "./globals.css"
import { montserrat, poppins } from "@/utils/fonts"
import { Toaster } from "@/components/ui/toaster"
import SyncSessionStorage from "@/components/sync-session-storage"

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
        <SyncSessionStorage />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
