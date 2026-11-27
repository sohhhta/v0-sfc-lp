import { Metadata } from 'next'
import EssayGuidePage from './essay-client'

const title = "慶應SFC小論文の対策｜試験の全容と合格答案の書き方 | 慶應SFC専門塾 佐藤塾"
const description = "慶應SFC（総合政策・環境情報）の小論文対策。「問題発見・解決能力」を測る試験の全容、圧倒的な資料量や配点の高さへの向き合い方から、書き方・時間配分・過去問演習の各記事まで解説します。"

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
