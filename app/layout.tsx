import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const serifJP = Noto_Serif_JP({ subsets: ["latin", "japanese"], weight: ["400", "700"] });
const sansJP = Noto_Sans_JP({ subsets: ["latin", "japanese"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: '慶應SFC合格への最短距離 - 佐藤塾',
  description: '3人に2人が合格する、AI伴走ロジック。圧倒的な合格実績と充実の返金保証。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: `${sansJP.style.fontFamily}, ${serifJP.style.fontFamily}` }} className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
