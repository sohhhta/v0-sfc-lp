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
  icons: {
    icon: '/favicon.png', // メールの指摘通り、1行にシンプル化
    apple: '/favicon.png',
  },
}