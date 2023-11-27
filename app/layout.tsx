import './globals.css'
import type { Metadata } from 'next'
import Sidebar from './components/Sidebar/Sidebar';
import { Raleway } from "next/font/google"

const mainFontFamily = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-family-main' 
})

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
    <html className={mainFontFamily.variable} lang="en">
      <body>
        <div className="grid grid-cols-[200px_1fr]">
          <Sidebar />
          <main>{children}</main>
        </div></body>
    </html>
  )
}
