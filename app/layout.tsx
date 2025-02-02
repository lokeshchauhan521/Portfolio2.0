import type { Metadata } from 'next'
import { Outfit, Ovo } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Background from './components/Background'
import StoreProvider from './StoreProvider'
import AppTheme from './components/AppTheme'

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
  title: 'Nextjs App',
  description: '',
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
        <main>
          <Background />
          <StoreProvider>
            <AppTheme />
            <Navbar />
            {children}
          </StoreProvider>
        </main>
      </body>
    </html>
  )
}
