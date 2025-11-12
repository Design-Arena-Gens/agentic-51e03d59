import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KI Bildbearbeitung - Revolutionäre Technologie',
  description: 'Revolutionäre KI-Bildbearbeitung – blitzschnell, kreativ, intuitiv',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
