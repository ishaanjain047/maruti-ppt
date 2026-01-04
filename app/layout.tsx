import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maruti Infrastructure Automation - Technical Deep Dive',
  description: 'How tag-based resource discovery enables intelligent infrastructure automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
