import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'אביטל גולן-שפר — נשים אמיצות',
  description: 'הרצאות לנשים אמיצות',
  keywords: 'אביטל גולן, אביטל גולן שפר, הרצאה, הרצאות, העצמה נשית, סיפור חיים, נשים מוכות',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html dir="rtl" lang="he">
      <Head>
        <meta name="google-site-verification" content="jOC20jQPr6lT-g7g2N0sxwvanwXXHNjDNS5jgvrUKCo" />
        <script async src="https://cdn.userway.org/widget.js" data-account="b6scwwQYZQ"></script>
      </Head>
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
