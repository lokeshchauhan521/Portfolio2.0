import type { Metadata } from 'next'
import { Outfit, Ovo } from 'next/font/google'
import './globals.css'

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
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
