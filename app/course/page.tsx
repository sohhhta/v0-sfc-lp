'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

// Section title component (consistent with main LP)
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em]">
        {children}
      </h2>
      {subtitle && (
        <p className="text-[#666666] mt-4 text-lg">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
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

      {/* Hero Section - Compelling Copywriting */}
      <section className="py-28 px-4 bg-gradient-to-b from-[#002147] to-[#003d6b]">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-[#C5A059] text-[#002147] text-sm font-bold mb-6 inline-block">COURSE & PRICING</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif tracking-wide mb-8 leading-tight">
            24時間をSFC合格に変える、<br />次世代のハイブリッド指導
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            AIによる即時添削と、塾長による戦略的伴走。待ち時間ゼロの圧倒的な演習量が、あなたを最短で合格圏へ引き上げます。
          </p>
        </div>
      </section>

      {/* AI × 塾長 Role Division - Visual Explanation */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>AI × 塾長の役割分担</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* AI's Role */}
            <div className="bg-[#F9F9F9] rounded-xl p-8 border-l-4 border-[#002147]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#002147]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#002147]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-9h10v2H7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#002147] font-serif">AIの役割</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#800000] font-bold flex-shrink-0">→</span>
                  <span className="text-[#333333]"><strong className="text-[#002147]">24時間365日の即時添削</strong>、疑問点をその場で解消</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#800000] font-bold flex-shrink-0">→</span>
                  <span className="text-[#333333]"><strong className="text-[#002147]">過去7年分以上の合格者思考の再現</strong>、論理的な型を徹底反復</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#800000] font-bold flex-shrink-0">→</span>
                  <span className="text-[#333333]"><strong className="text-[#002147]">制限なし・無制限の演習機会</strong>、圧倒的な量を確保</span>
                </li>
              </ul>
            </div>

            {/* 塾長's Role */}
            <div className="bg-[#F9F9F9] rounded-xl p-8 border-l-4 border-[#800000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#800000]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#800000] font-serif">塾長の役割</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#800000] font-bold flex-shrink-0">→</span>
                  <span className="text-[#333333]"><strong className="text-[#800000]">合格への個別戦略ロードマップ策定</strong>、最短ルートを設計</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#800000] font-bold flex-shrink-0">→</span>
                  <span className="text-[#333333]"><strong className="text-[#800000]">思考の「癖」を矯正</strong>、独自の視点を磨く</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#800000] font-bold flex-shrink-0">→</span>
                  <span className="text-[#333333]"><strong className="text-[#800000]">メンタルケア・進捗管理</strong>、受験期を一緒に乗り越える</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Connection Visual */}
          <div className="bg-gradient-to-r from-[#002147]/5 to-[#800000]/5 rounded-xl p-8 border border-[#002147]/10 text-center">
            <p className="text-[#333333] leading-relaxed text-lg">
              <strong className="text-[#002147]">論理・反復（AI）</strong> × <strong className="text-[#800000]">意志・探究心（塾長）</strong> = <strong className="text-[#002147]">SFC合格への最短距離</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 2 Course Plans - Card Design */}
      <section className="py-28 px-4 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Plan 1: SFC二刀流プラン */}
            <Card className="border-2 border-[#800000] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-[#800000] to-[#600000] px-8 py-6">
                <Badge className="bg-[#C5A059] text-[#002147] text-xs font-bold mb-3 inline-block">人気No.1</Badge>
                <h3 className="text-3xl font-bold text-white font-serif mb-2">SFC二刀流プラン</h3>
                <p className="text-white/80 text-sm">AO入試 + 一般入試の両対応</p>
              </div>
              <CardContent className="pt-8 pb-8 px-8">
                <div className="mb-8">
                  <p className="text-sm text-[#666666] mb-2">月額料金（税込）</p>
                  <p className="text-4xl font-bold text-[#002147] font-serif">¥151,800</p>
                  <p className="text-xs text-[#999999] mt-1">通常¥138,000（税抜）</p>
                </div>

                <div className="mb-8 pb-8 border-b border-[#E5E7EB]">
                  <p className="text-sm font-bold text-[#333333] mb-4">【プレースホルダー】プラン説明</p>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    AO入試・一般入試の両方で合格を確実にしたい方向けの包括的なプランです。志望理由書作成から小論文対策、英数情報対策まで、SFC合格に必要な全てをカバーします。
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="font-bold text-[#002147] text-sm">このプランに含まれるもの</p>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-sm text-[#333333]"><strong>AI添削</strong>：24時間無制限</span>
                    </div>
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-sm text-[#333333]"><strong>個別面談</strong>：週1回（60分）</span>
                    </div>
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-sm text-[#333333]"><strong>学習計画</strong>：全科目対応</span>
                    </div>
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-sm text-[#333333]"><strong>進捗管理</strong>：定期レビュー</span>
                    </div>
                  </div>
                </div>

                <Link href="/#contact-form">
                  <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white h-12 font-bold">
                    このプランを選択
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan 2: 小論文特化プラン */}
            <Card className="border-2 border-[#002147] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#002147] to-[#003d6b] px-8 py-6">
                <h3 className="text-3xl font-bold text-white font-serif mb-2">小論文特化プラン</h3>
                <p className="text-white/80 text-sm">一般入試対策 / 他塾併用</p>
              </div>
              <CardContent className="pt-8 pb-8 px-8">
                <div className="mb-8">
                  <p className="text-sm text-[#666666] mb-2">月額料金（税込）</p>
                  <p className="text-4xl font-bold text-[#002147] font-serif">¥129,800</p>
                  <p className="text-xs text-[#999999] mt-1">通常¥118,000（税抜）</p>
                </div>

                <div className="mb-8 pb-8 border-b border-[#E5E7EB]">
                  <p className="text-sm font-bold text-[#333333] mb-4">【プレースホルダー】プラン説明</p>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    SFC小論文に特化した集中対策プランです。他塾との併用や、一般入試に絞った対策をしたい方に最適。AIによる24時間添削と塾長による戦略的指導で、小論文の実力を飛躍的に向上させます。
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="font-bold text-[#002147] text-sm">このプランに含まれるもの</p>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-sm text-[#333333]"><strong>AI添削</strong>：24時間無制限</span>
                    </div>
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-sm text-[#333333]"><strong>個別面談</strong>：月2回（45分）</span>
                    </div>
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-sm text-[#333333]"><strong>戦略指導</strong>：小論文特化</span>
                    </div>
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-sm text-[#333333]"><strong>チャット相談</strong>：無制限</span>
                    </div>
                  </div>
                </div>

                <Link href="/#contact-form">
                  <Button variant="outline" className="w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-12 font-bold">
                    このプランを選択
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Entry Fee Info */}
          <Card className="bg-white rounded-xl border border-[#E5E7EB]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#800000]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#800000] font-bold">!</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#002147] mb-2">入会金について</h4>
                  <p className="text-[#333333] mb-3">
                    <strong>¥100,000（税込）</strong> - 初回入塾時のみ
                  </p>
                  <p className="text-sm text-[#666666]">
                    【プレースホルダー】入会金の説明を入力してください。入会金に含まれるもの：初期教材費、システム登録料、初回診断テストなど。合格後は自動退塾となり、その後の費用は発生しません。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table - vs Traditional Cram Schools */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>他塾との比較</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="px-6 py-4 text-left font-bold">項目</th>
                  <th className="px-6 py-4 text-center font-bold text-[#C5A059]">佐藤塾</th>
                  <th className="px-6 py-4 text-center font-bold text-[#999999]">一般的な塾</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E5E7EB]">
                  <td className="px-6 py-4 font-bold text-[#333333]">添削回数</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block bg-[#800000]/10 text-[#800000] font-bold px-4 py-2 rounded">無制限</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#999999]">週1〜2回</td>
                </tr>
                <tr className="border-b border-[#E5E7EB] bg-[#F9F9F9]">
                  <td className="px-6 py-4 font-bold text-[#333333]">待ち時間</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block bg-[#800000]/10 text-[#800000] font-bold px-4 py-2 rounded">即時</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#999999]">3日〜1週間</td>
                </tr>
                <tr className="border-b border-[#E5E7EB]">
                  <td className="px-6 py-4 font-bold text-[#333333]">対応時間</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block bg-[#800000]/10 text-[#800000] font-bold px-4 py-2 rounded">24時間</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#999999]">営業時のみ</td>
                </tr>
                <tr className="border-b border-[#E5E7EB] bg-[#F9F9F9]">
                  <td className="px-6 py-4 font-bold text-[#333333]">指導範囲</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block bg-[#800000]/10 text-[#800000] font-bold px-4 py-2 rounded">AO・一般両対応</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#999999]">どちらか一方</td>
                </tr>
                <tr className="bg-[#F9F9F9]">
                  <td className="px-6 py-4 font-bold text-[#333333]">塾長との関わり</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block bg-[#800000]/10 text-[#800000] font-bold px-4 py-2 rounded">週1回面談</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#999999]">月1〜2回</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 bg-gradient-to-r from-[#800000] to-[#600000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-8 leading-tight">
            まずは無料相談から
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            あなたに最適なプランをご提案いたします。<br />受験までの戦略を一緒に立てましょう。
          </p>
          <Link href="/#contact-form">
            <Button size="lg" className="bg-white text-[#800000] hover:bg-[#C5A059] hover:text-white font-bold px-16 py-7 h-auto text-lg shadow-lg">
              無料で個別相談を予約する
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 px-4 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>よくあるご質問</SectionTitle>

          <div className="space-y-4">
            <details className="group bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#f9fafb]">
                <span className="font-semibold text-[#002147]">
                  プランの変更は可能ですか？
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-[#333333] leading-relaxed border-t border-border">
                はい、月単位でプランの変更が可能です。学習進度や状況に応じて柔軟に対応できます。
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#f9fafb]">
                <span className="font-semibold text-[#002147]">
                  【プレースホルダー】よくある質問を入力
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-[#333333] leading-relaxed border-t border-border">
                【プレースホルダー】回答を入力してください。
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-bold font-serif tracking-[0.1em] mb-4">佐藤塾</h2>
          <p className="text-white/60 text-sm mb-6">慶應SFC専門 AI伴走型オンライン塾</p>
          <div className="flex justify-center gap-6 text-sm text-white/60 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">トップページ</Link>
            <Link href="/course" className="hover:text-white transition-colors">コース・料金</Link>
            <Link href="/results" className="hover:text-white transition-colors">合格実績</Link>
            <Link href="/guide/essay" className="hover:text-white transition-colors">小論文対策</Link>
          </div>
          <p className="text-white/40 text-xs mt-8">© 2025 佐藤塾 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
