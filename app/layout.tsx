import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import Web3Provider from "@/context/web3Provider"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "FinQuest Your Financial Literacy Journey",
  description: "Learn financial skills through interactive lessons and games",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">


      <body className={poppins.className}>
          <Web3Provider>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
          </Web3Provider>
      </body>
    </html>
  )
}

