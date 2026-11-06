import { Metadata } from 'next'
import EssayGuidePage from './essay-client'

const title = "SFC小論文攻略メソッド｜試験の全容と対策 | 佐藤塾"
const description = "慶應SFC合格に必要な「問題発見・解決能力」を測る小論文試験の全容と対策。圧倒的な資料量や配点の高さへの正しいアプローチを解説。"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.sfc-satojuku.com/guide/essay",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero.jpg"],
  },
}

export default function Page() {
  return <EssayGuidePage />
}
