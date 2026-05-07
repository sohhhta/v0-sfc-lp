import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '慶應SFC合格のためのコース・料金体系 | 佐藤塾（AI×塾長のハイブリッド指導）',
  description: '慶應SFC小論文・情報入試に特化した佐藤塾のコース案内。AIによる24時間即時添削と塾長の戦略的指導で、合格率50.0%を実現。',
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em]">
        {children}
      </h2>
    </div>
  )
}

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#002147] font-serif tracking-[0.1em]">佐藤塾</Link>
          <Link href="/#contact-form">
            <Button variant="outline" className="border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white font-medium">無料相談を申し込む</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 px-4 bg-white border-b-2 border-[#002147]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002147] font-serif tracking-wide mb-8 leading-tight">
            24時間をSFC合格に変える、<br />次世代のハイブリッド指導
          </h1>
          <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-3xl mx-auto">
            AIによる即時添削と、塾長による戦略的伴走。待ち時間ゼロの圧倒的な演習量が、あなたを最短で合格圏へ引き上げます。
          </p>
        </div>
      </section>

      {/* 2つの料金プラン */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Plan 1: SFC二刀流プラン */}
            <div className="border-l-4 border-[#800000] rounded-lg">
              <div className="bg-white px-8 py-12">
                <h3 className="text-2xl font-bold text-[#002147] font-serif mb-3">SFC二刀流プラン</h3>
                <p className="text-sm text-[#666666] mb-8">AO入試・一般入試の両方で合格を確実にしたい方</p>
                
                <div className="mb-8 pb-8 border-b border-[#E5E7EB]">
                  <p className="text-sm text-[#666666] mb-2">月額料金（税込）</p>
                  <p className="text-5xl font-bold text-[#002147] font-serif">¥151,800</p>
                  <p className="text-xs text-[#999999] mt-2">通常 ¥138,000（税抜）</p>
                </div>

                <div className="mb-8 space-y-4">
                  <div>
                    <p className="font-bold text-[#002147] text-sm mb-3">このプランに含まれるもの</p>
                    <div className="space-y-3">
                      <p className="text-sm text-[#333333]"><strong>AI添削</strong>：24時間 / 無制限 / 即時</p>
                      <p className="text-sm text-[#333333]"><strong>個別面談</strong>：週1回（60分）</p>
                      <p className="text-sm text-[#333333]"><strong>志望理由書</strong>：作成・深化指導</p>
                      <p className="text-sm text-[#333333]"><strong>学習ロードマップ</strong>：全科目対応</p>
                    </div>
                  </div>
                </div>

                <Link href="/#contact-form">
                  <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white h-12 font-bold text-base">
                    このプランで相談を予約する
                  </Button>
                </Link>
              </div>
            </div>

            {/* Plan 2: 小論文特化プラン */}
            <div className="border-l-4 border-[#002147] rounded-lg">
              <div className="bg-white px-8 py-12">
                <h3 className="text-2xl font-bold text-[#002147] font-serif mb-3">小論文特化プラン</h3>
                <p className="text-sm text-[#666666] mb-8">他塾併用者や、一般入試の小論文を武器にしたい方</p>
                
                <div className="mb-8 pb-8 border-b border-[#E5E7EB]">
                  <p className="text-sm text-[#666666] mb-2">月額料金（税込）</p>
                  <p className="text-5xl font-bold text-[#002147] font-serif">¥129,800</p>
                  <p className="text-xs text-[#999999] mt-2">通常 ¥118,000（税抜）</p>
                </div>

                <div className="mb-8 space-y-4">
                  <div>
                    <p className="font-bold text-[#002147] text-sm mb-3">このプランに含まれるもの</p>
                    <div className="space-y-3">
                      <p className="text-sm text-[#333333]"><strong>AI添削</strong>：24時間 / 無制限 / 即時</p>
                      <p className="text-sm text-[#333333]"><strong>個別面談</strong>：月2回（45分）</p>
                      <p className="text-sm text-[#333333]"><strong>小論文特化</strong>：SFC型対策集中</p>
                      <p className="text-sm text-[#333333]"><strong>チャット相談</strong>：無制限</p>
                    </div>
                  </div>
                </div>

                <Link href="/#contact-form">
                  <Button variant="outline" className="w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-12 font-bold text-base">
                    このプランで相談を予約する
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* 重要事項 */}
          <div className="bg-[#F9F9F9] rounded-lg p-8 border border-[#E5E7EB]">
            <h3 className="font-bold text-[#002147] mb-6">料金に関する重要事項</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-[#333333] text-sm mb-1">入会金：0円</p>
                <p className="text-sm text-[#666666]">入塾時に別途費用は一切ございません。</p>
              </div>
              <div>
                <p className="font-bold text-[#333333] text-sm mb-1">教材費：0円</p>
                <p className="text-sm text-[#666666]">全ての教材・システムが料金に含まれています。追加費用は発生しません。</p>
              </div>
              <div>
                <p className="font-bold text-[#333333] text-sm mb-1">月額料金以外の費用</p>
                <p className="text-sm text-[#666666]">合格後は自動退塾となり、その後の費用は一切発生しません。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 他塾との比較 */}
      <section className="py-32 px-4 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>他塾との比較</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr>
                  <th className="text-left font-bold text-[#002147] py-6 px-8 border-b-2 border-[#002147]">項目</th>
                  <th className="text-center font-bold text-[#800000] py-6 px-8 border-b-2 border-[#800000]">佐藤塾</th>
                  <th className="text-center font-bold text-[#CCCCCC] py-6 px-8 border-b-2 border-[#E5E7EB]">一般的な塾</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E5E7EB] bg-white">
                  <td className="font-bold text-[#002147] py-6 px-8">添削回数</td>
                  <td className="text-center py-6 px-8">
                    <span className="font-bold text-[#800000]">無制限</span>
                  </td>
                  <td className="text-center py-6 px-8">
                    <span className="text-[#CCCCCC]">週1〜2回</span>
                  </td>
                </tr>
                <tr className="border-b border-[#E5E7EB] bg-[#FAFAFA]">
                  <td className="font-bold text-[#002147] py-6 px-8">待ち時間</td>
                  <td className="text-center py-6 px-8">
                    <span className="font-bold text-[#800000]">即時</span>
                  </td>
                  <td className="text-center py-6 px-8">
                    <span className="text-[#CCCCCC]">3日〜1週間</span>
                  </td>
                </tr>
                <tr className="border-b border-[#E5E7EB] bg-white">
                  <td className="font-bold text-[#002147] py-6 px-8">対応時間</td>
                  <td className="text-center py-6 px-8">
                    <span className="font-bold text-[#800000]">24時間365日</span>
                  </td>
                  <td className="text-center py-6 px-8">
                    <span className="text-[#CCCCCC]">営業時間のみ</span>
                  </td>
                </tr>
                <tr className="border-b border-[#E5E7EB] bg-[#FAFAFA]">
                  <td className="font-bold text-[#002147] py-6 px-8">指導範囲</td>
                  <td className="text-center py-6 px-8">
                    <span className="font-bold text-[#800000]">AO・一般両対応</span>
                  </td>
                  <td className="text-center py-6 px-8">
                    <span className="text-[#CCCCCC]">どちらか片方</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002147] font-serif mb-6 leading-tight">
            まずは無料相談から
          </h2>
          <p className="text-lg text-[#666666] mb-12 leading-relaxed">
            あなたの学習状況と志望進路に基づいて、最適なプランをご提案いたします。
          </p>

          <Link href="/#contact-form">
            <Button size="lg" className="bg-[#800000] hover:bg-[#600000] text-white h-14 px-16 font-bold text-base shadow-lg">
              無料で個別相談を予約する
            </Button>
          </Link>

          <p className="text-sm text-[#999999] mt-8 leading-relaxed">
            一人ひとりの指導密度を維持するため、毎月の新規受付数には上限を設けております。<br />
            ご希望の方はお早めにお問い合わせください。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4 font-serif text-lg tracking-[0.1em]">佐藤塾</p>
          <p className="text-sm text-white/70">慶應SFC小論文・情報入試 | AI×塾長のハイブリッド指導</p>
          <p className="text-xs text-white/50 mt-6">© 2024 佐藤塾. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
