import "./styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "../src/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="https://dashboard.hoopay.com.br/shared/assets/02.png" type="image/png" sizes="32x32" />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-[#020807] text-white antialiased")}>{children}</body>
    </html>
  )
}



import './globals.css'