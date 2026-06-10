import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartSheet from '@/components/layout/CartSheet'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Soft Grid — Premium Oversized Tees & Corporate Gifting',
  description:
    'Premium oversized t-shirts and corporate gifting. Custom printing, pan India delivery. Starting from 1 piece.',
  keywords: 'oversized tshirts, corporate gifting, custom printing, premium tshirts, India',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="bg-sg-offwhite text-sg-ink font-sans antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <CartSheet />
      </body>
    </html>
  )
}
