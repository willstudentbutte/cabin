import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Leia's Cabin Party | July 10-13, 2024",
  description: 'The Annual Descent into Debauchery. Four days of unforgettable memories, legendary parties, and lake-side shenanigans at 108 Pinecrest Lake Rd.',
  keywords: 'cabin party, lake party, summer 2024, prom night, 2000s theme, Leia cabin party',
  authors: [{ name: 'Cabin Party Crew' }],
  openGraph: {
    title: "Leia's Cabin Party 2024",
    description: 'Get ready for the most epic summer getaway! July 10-13 at Pinecrest Lake.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 