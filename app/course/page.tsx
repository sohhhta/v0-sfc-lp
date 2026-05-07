import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '慶應SFC合格のためのコース・料金体系 | 佐藤塾',
  description: '慶應SFC小論文・情報入試に特化した佐藤塾のコース案内。AIと塾長のハイブリッド指導で合格を確実に。',
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#002147] tracking-wide font-serif">
        {children}
      </h2>
      <div className="w-16 h-1 bg-[#800000] mx-auto mt-4" />
    </div>
  )
}

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary font-serif tracking-[0.1em]">佐藤塾</Link>
          <Link href="/#contact-form">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-medium">無料相談を申し込む</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#002147] to-[#003366]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
            コース・料金のご案内
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            あなたの目標と学習スタイルに合わせた2つのプランをご用意しています。<br />
            どちらのプランもAI添削は無制限でご利用いただけます。
          </p>
        </div>
      </section>

      {/* Course Plans Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Plan 1: SFC二刀流プラン */}
            <Card className="border-2 border-[#800000] shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#800000] text-white px-6 py-4">
                <span className="text-sm font-bold tracking-wider">おすすめ</span>
                <h3 className="text-2xl font-bold mt-2 font-serif">SFC二刀流プラン</h3>
              </div>
              <CardContent className="pt-8 pb-8">
                <div className="text-center mb-8">
                  <p className="text-4xl font-bold text-[#002147]">¥151,800<span className="text-lg font-normal text-[#666666]">/月</span></p>
                  <p className="text-sm text-[#888888] mt-2">（税込）</p>
                </div>

                <p className="text-sm text-[#666666] mb-6 text-center">
                  AO入試・一般入試の両方で合格を目指す方向け
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold">✓</span>
                    <p className="text-sm text-[#333333]"><strong>AI添削</strong>：24時間・無制限・即時フィードバック</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold">✓</span>
                    <p className="text-sm text-[#333333]"><strong>塾長面談</strong>：週1回（60分）の戦略指導</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold">✓</span>
                    <p className="text-sm text-[#333333]"><strong>志望理由書</strong>：作成から深化まで完全サポート</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold">✓</span>
                    <p className="text-sm text-[#333333]"><strong>学習ロードマップ</strong>：全科目対応の個別計画</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold">✓</span>
                    <p className="text-sm text-[#333333]"><strong>チャット相談</strong>：無制限</p>
                  </div>
                </div>

                <Link href="/#contact-form">
                  <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white h-12 font-bold">
                    このプランで相談する
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan 2: 小論文特化プラン */}
            <Card className="border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#002147] text-white px-6 py-4">
                <span className="text-sm font-bold tracking-wider">他塾併用OK</span>
                <h3 className="text-2xl font-bold mt-2 font-serif">小論文特化プラン</h3>
              </div>
              <CardContent className="pt-8 pb-8">
                <div className="text-center mb-8">
                  <p className="text-4xl font-bold text-[#002147]">¥129,800<span className="text-lg font-normal text-[#666666]">/月</span></p>
                  <p className="text-sm text-[#888888] mt-2">（税込）</p>
                </div>

                <p className="text-sm text-[#666666] mb-6 text-center">
                  一般入試の小論文を武器にしたい方・他塾と併用したい方向け
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold">✓</span>
                    <p className="text-sm text-[#333333]"><strong>AI添削</strong>：24時間・無制限・即時フィードバック</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold">✓</span>
                    <p className="text-sm text-[#333333]"><strong>塾長面談</strong>：月2回（45分）の小論文指導</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold">✓</span>
                    <p className="text-sm text-[#333333]"><strong>小論文特化</strong>：SFC型小論文の対策に集中</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold">✓</span>
                    <p className="text-sm text-[#333333]"><strong>チャット相談</strong>：無制限</p>
                  </div>
                </div>

                <Link href="/#contact-form">
                  <Button variant="outline" className="w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-12 font-bold">
                    このプランで相談する
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Details Section */}
      <section className="py-24 px-4 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>料金に関する重要事項</SectionTitle>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <h3 className="font-bold text-[#002147] mb-2">入会金</h3>
                <p className="text-[#333333]">一律100,000円</p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="font-bold text-[#002147] mb-2">追加費用</h3>
                <p className="text-[#333333]">全てシステム内で完結するため、入会金と月額料金以外の追加費用は一切発生しません。</p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="font-bold text-[#002147] mb-2">お支払い方法</h3>
                <p className="text-[#333333]">クレジットカード、銀行振込</p>
              </div>

              <div>
                <h3 className="font-bold text-[#002147] mb-2">その他注意事項</h3>
                <p className="text-[#333333]">ご不明な点は、無料相談でお気軽にお聞きください。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-6 font-serif">
            まずは無料相談から始めましょう
          </h2>
          <p className="text-[#666666] mb-10 leading-relaxed">
            あなたの現状と目標をお聞きした上で、最適なプランをご提案いたします。<br />
            無理な勧誘は一切ございませんので、お気軽にご相談ください。
          </p>
          <Link href="/#contact-form">
            <Button size="lg" className="bg-[#800000] hover:bg-[#600000] text-white px-12 py-6 h-auto text-lg font-bold">
              無料で個別相談を予約する
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold tracking-[0.1em] mb-4 font-serif">佐藤塾</p>
          <p className="text-sm text-white/70 mb-6">慶應SFC小論文・情報入試 | AI×塾長のハイブリッド指導</p>
          <p className="text-xs text-white/50">© 2024 佐藤塾. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
