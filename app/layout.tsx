import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
