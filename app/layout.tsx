import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar/Sidebar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JaksonHZ',
  description: 'Portfólio de JaksonHZ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-cols-app">
          <Sidebar />
          <main>{children}</main>
        </div></body>
    </html>
  )
}
