import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const serifJP = Noto_Serif_JP({ subsets: ["latin", "japanese"], weight: ["400", "700"] });
const sansJP = Noto_Sans_JP({ subsets: ["latin", "japanese"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sfc-satojuku.com'),
  title: '慶應SFC合格への最短距離 - 佐藤塾',
  description: '2人に1人が合格する、AI伴走指導。塾長 佐藤颯太が直接指導する慶應SFC専門塾。',
  verification: {
    google: "jVBvchuFr-2bGgeIwJbnZFlOnCrIRFLY54lY5BgEqr8",
  },
  openGraph: {
    title: '慶應SFC合格への最短距離 - 佐藤塾',
    description: '2人に1人が合格する、AI伴走指導。塾長 佐藤颯太が直接指導する慶應SFC専門塾。',
    url: 'https://www.sfc-satojuku.com',
    siteName: '佐藤塾',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '佐藤塾 塾長 佐藤颯太' }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVR474N8XP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NVR474N8XP');
          `}
        </Script>
      </head>
      <body 
        style={{ fontFamily: `${sansJP.style.fontFamily}, ${serifJP.style.fontFamily}` }} 
        className="antialiased min-h-screen flex flex-col"
      >
        {/* 全ページ共通のヘッダー */}
        <Header />

        {/* メインコンテンツ（flex-growでフッターを最下部に押し出す） */}
        <div className="flex-grow">
          {children}
        </div>

        {/* 全ページ共通のフッター */}
        <Footer />
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
