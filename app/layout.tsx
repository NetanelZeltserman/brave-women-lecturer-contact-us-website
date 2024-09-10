import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'אביטל גולן-שפר — נשים אמיצות',
  description: 'הרצאות לנשים אמיצות',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html dir="rtl" lang="en">
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
