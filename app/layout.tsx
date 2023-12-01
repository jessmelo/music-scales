import type { Metadata } from 'next'
import { Inter, Bitter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const bitter = Bitter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music Scales',
  description: 'A website to help your music theory studies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
