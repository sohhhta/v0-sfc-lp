import { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: "【10月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾",
  description: "2人に1人が合格する、AI伴走指導。塾長 佐藤颯太が直接指導する慶應SFC専門塾。",
  openGraph: {
    title: "【10月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾",
    description: "2人に1人が合格する、AI伴走指導。塾長 佐藤颯太が直接指導する慶應SFC専門塾。",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "【10月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "【10月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾",
    description: "2人に1人が合格する、AI伴走指導。塾長 佐藤颯太が直接指導する慶應SFC専門塾。",
    images: ["/hero.jpg"],
  },
}

export default function Page() {
  return <HomeClient />
}
