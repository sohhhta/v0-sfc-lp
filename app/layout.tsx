import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const sansJP = Noto_Sans_JP({ subsets: ["latin", "japanese"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sfc-satojuku.com'),
  title: '【10月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾',
  description: '慶應SFC（総合政策・環境情報）専門のオンライン塾「佐藤塾」。「月額サブスクリプションプラン」で小論文の添削を毎日受け放題。直前期の追い込みや他学部との併願者向けに「単発プラン（5回分）」もご用意しています。完全1対1の泥臭い伴走で、逆転合格へ導きます。',
  verification: { google: "jVBvchuFr-2bGgeIwJbnZFlOnCrIRFLY54lY5BgEqr8" },
  openGraph: {
    title: '【10月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾',
    description: '慶應SFC（総合政策・環境情報）専門のオンライン塾「佐藤塾」。「月額サブスクリプションプラン」で小論文の添削を毎日受け放題。直前期の追い込みや他学部との併願者向けに「単発プラン（5回分）」もご用意しています。完全1対1の泥臭い伴走で、逆転合格へ導きます。',
    url: 'https://www.sfc-satojuku.com',
    siteName: '佐藤塾',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '佐藤塾 塾長 佐藤颯太' }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '【10月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾', description: '慶應SFC（総合政策・環境情報）専門のオンライン塾「佐藤塾」。「月額サブスクリプションプラン」で小論文の添削を毎日受け放題。直前期の追い込みや他学部との併願者向けに「単発プラン（5回分）」もご用意しています。完全1対1の泥臭い伴走で、逆転合格へ導きます。', images: ['/og-image.png'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics & Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVR474N8XP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // GA4
            gtag('config', 'G-NVR474N8XP');
            
            // Google Ads
            gtag('config', 'AW-384283541');
          `}
        </Script>
      </head>
      <body className={`${sansJP.className} font-sans antialiased min-h-screen flex flex-col`}>

        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
