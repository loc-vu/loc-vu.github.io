import './global.css'
import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google';

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  title: {
    default: 'Loc Vu',
    template: '%s | Loc Vu',
  },
  description: 'This is my portfolio.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')
const courierNew = Courier_Prime({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        courierNew.className
      )}
    >
    <body >
    <div className="flex h-screen w-screen">
      <div className="flex justify-center items-center w-[15%] w-min-[10%] border-r">
        <div className="p-20">
          <Navbar/>
        </div>
      </div>
      <main className="flex-auto min-w-0 flex flex-col p-20 overflow-auto">
      {children}
      </main>
    </div>
      </body>
    </html>
  )
}