import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display as Pd, Open_Sans as Op } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

const pd = Pd({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-pd',
})
const op = Op({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-op',
})

export const metadata: Metadata = {
  title: 'Nós Encurtador',
  description: 'Encurte seus links favoritos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${pd.variable} ${op.variable} flex-1 bg-zinc-50 font-sans font-normal`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
