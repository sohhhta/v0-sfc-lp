import { Metadata } from 'next'
import AoGuidePage from './ao-guide-client'

const title = "SFC AO入試攻略メソッド｜志望理由書から面接まで | 慶應SFC専門塾 佐藤塾"
const description = "実績を誇るだけの書類は不要、大学入学を「ゴール」ではなく「手段」に変える、佐藤塾のオーナーシップ教育。"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.sfc-satojuku.com/ao-guide",
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
  return <AoGuidePage />
}
