import { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: "【10月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾",
  description: "慶應SFC（総合政策・環境情報）専門のオンライン塾「佐藤塾」。「月額サブスクリプションプラン」で小論文の添削を毎日受け放題。直前期の追い込みや他学部との併願者向けに「単発プラン（5回分）」もご用意しています。完全1対1の泥臭い伴走で、逆転合格へ導きます。",
  openGraph: {
    title: "【10月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾",
    description: "慶應SFC（総合政策・環境情報）専門のオンライン塾「佐藤塾」。「月額サブスクリプションプラン」で小論文の添削を毎日受け放題。直前期の追い込みや他学部との併願者向けに「単発プラン（5回分）」もご用意しています。完全1対1の泥臭い伴走で、逆転合格へ導きます。",
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
    description: "慶應SFC（総合政策・環境情報）専門のオンライン塾「佐藤塾」。「月額サブスクリプションプラン」で小論文の添削を毎日受け放題。直前期の追い込みや他学部との併願者向けに「単発プラン（5回分）」もご用意しています。完全1対1の泥臭い伴走で、逆転合格へ導きます。",
    images: ["/hero.jpg"],
  },
}

export default function Page() {
  return <HomeClient />
}
