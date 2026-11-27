import { Metadata } from 'next'
import HomeClient from './home-client'
import { getSeason } from '@/lib/season'

// 「11月から」などの文言を日本時間の月で切り替えるため、1時間ごとに作り直す
export const revalidate = 3600

const description =
  "慶應SFC（総合政策・環境情報）専門のオンライン塾「佐藤塾」。「月額サブスクリプションプラン」で小論文の添削を毎日受け放題。直前期の追い込みや他学部との併願者向けに「単発プラン（5回分）」もご用意しています。完全1対1の泥臭い伴走で、逆転合格へ導きます。"

export function generateMetadata(): Metadata {
  const title = getSeason().metaTitle
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero.jpg"],
    },
  }
}

export default function Page() {
  return <HomeClient season={getSeason()} />
}
