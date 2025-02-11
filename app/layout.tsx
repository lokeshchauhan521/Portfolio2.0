import type { Metadata } from 'next'
import { Outfit, Ovo } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Background from './components/Background'
import StoreProvider from './StoreProvider'
import AppTheme from './components/AppTheme'
import Footer from './components/Footer'

const outfit = Outfit({
  // variable: "--font-outfit",
  subsets: ['latin'],
  // weight: ["100"],
})

const ovo = Ovo({
  // variable: "--font-ovo",
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Lokesh Chauhan',
  description: 'Software Engineer | Building Scalable & Efficient Software',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.png',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 dark:text-white`}
      >
        <Background />
        <StoreProvider>
          <AppTheme />
          <Navbar />
          <main className="min-h-[calc(100vh-180px)] py-12">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
