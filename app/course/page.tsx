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

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#002147] to-[#003d6b]">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-[#C5A059] text-[#002147] text-sm font-bold mb-6">COURSE & PRICING</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-wide mb-6">
            コース詳細・料金
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            あなたの目標と状況に合わせた最適なプランをご用意しています
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Course Overview">
            コース一覧
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Course 1 */}
            <Card className="border-2 border-[#800000] rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#800000] px-6 py-4">
                <Badge className="bg-[#C5A059] text-[#002147] text-xs font-bold mb-2">推奨プラン</Badge>
                <h3 className="text-2xl font-bold text-white font-serif">SFC二刀流プラン</h3>
                <p className="text-white/80 text-sm mt-1">AO入試 + 一般入試対策</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-[#333333] leading-relaxed mb-6">
                  【プレースホルダー】このコースの詳細説明を入力してください。AO入試と一般入試の両方に対応した包括的なプランです。志望理由書の作成から小論文対策まで、SFC合格に必要な全てをカバーします。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#800000]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-sm text-[#333333]">【プレースホルダー】特徴1を入力</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#800000]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-sm text-[#333333]">【プレースホルダー】特徴2を入力</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#800000]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-sm text-[#333333]">【プレースホルダー】特徴3を入力</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-[#666666]">月額料金</p>
                  <p className="text-3xl font-bold text-[#002147]">¥XX,XXX<span className="text-base font-normal text-[#666666]">（税込）</span></p>
                </div>
              </CardContent>
            </Card>

            {/* Course 2 */}
            <Card className="border-2 border-[#002147] rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#002147] px-6 py-4">
                <h3 className="text-2xl font-bold text-white font-serif">小論文特化プラン</h3>
                <p className="text-white/80 text-sm mt-1">一般入試対策</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-[#333333] leading-relaxed mb-6">
                  【プレースホルダー】このコースの詳細説明を入力してください。SFC小論文に特化した集中対策プランです。AIによる24時間添削と塾長による戦略的指導で、小論文の実力を飛躍的に向上させます。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-sm text-[#333333]">【プレースホルダー】特徴1を入力</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-sm text-[#333333]">【プレースホルダー】特徴2を入力</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-sm text-[#333333]">【プレースホルダー】特徴3を入力</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-[#666666]">月額料金</p>
                  <p className="text-3xl font-bold text-[#002147]">¥XX,XXX<span className="text-base font-normal text-[#666666]">（税込）</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-28 px-4 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Pricing Details">
            料金詳細
          </SectionTitle>

          <Card className="bg-white rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-[#333333] font-medium">入会金</span>
                  <span className="text-xl font-bold text-[#002147]">¥XXX,XXX（税込）</span>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-sm text-[#666666] leading-relaxed">
                    【プレースホルダー】入会金に関する補足説明を入力してください。入会金には初期教材費、システム登録料が含まれます。
                  </p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-[#333333] font-medium">SFC二刀流プラン（月額）</span>
                  <span className="text-xl font-bold text-[#002147]">¥XX,XXX（税込）</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-[#333333] font-medium">小論文特化プラン（月額）</span>
                  <span className="text-xl font-bold text-[#002147]">¥XX,XXX（税込）</span>
                </div>
                <div className="pt-4">
                  <h4 className="font-bold text-[#002147] mb-3">お支払い方法</h4>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    【プレースホルダー】お支払い方法の詳細を入力してください。クレジットカード、銀行振込に対応しています。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Additional Info">
            ご利用にあたって
          </SectionTitle>

          <div className="space-y-6">
            <Card className="bg-white border border-border rounded-xl">
              <CardContent className="p-6">
                <h4 className="font-bold text-[#002147] mb-3">受講開始までの流れ</h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】受講開始までの流れを入力してください。無料相談→入塾申込→初回面談→受講開始という流れになります。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border rounded-xl">
              <CardContent className="p-6">
                <h4 className="font-bold text-[#002147] mb-3">解約・返金について</h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】解約・返金ポリシーを入力してください。月単位での解約が可能です。合格後は自動的に退塾となります。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border rounded-xl">
              <CardContent className="p-6">
                <h4 className="font-bold text-[#002147] mb-3">よくあるご質問</h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】コース・料金に関するよくある質問と回答を入力してください。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#800000] to-[#600000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
            まずは無料相談から
          </h2>
          <p className="text-white/80 text-lg mb-8">
            あなたに最適なプランをご提案いたします
          </p>
          <Link href="/#contact-form">
            <Button size="lg" className="bg-white text-[#800000] hover:bg-[#C5A059] hover:text-white font-bold px-12 py-6 h-auto text-lg">
              無料で個別相談を予約する
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-bold font-serif tracking-[0.1em] mb-4">佐藤塾</h2>
          <p className="text-white/60 text-sm mb-6">慶應SFC専門 AI伴走型オンライン塾</p>
          <div className="flex justify-center gap-6 text-sm text-white/60">
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
