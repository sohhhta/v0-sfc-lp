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

export default function EssayGuidePage() {
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
          <Badge className="bg-[#C5A059] text-[#002147] text-sm font-bold mb-6">ESSAY GUIDE</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-wide mb-6">
            SFC小論文対策ガイド
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            SFC小論文の特徴と攻略法を徹底解説
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F9F9F9] rounded-xl p-8 border-l-4 border-[#800000]">
            <h2 className="text-2xl font-bold text-[#002147] font-serif mb-4">SFC小論文とは</h2>
            <p className="text-[#333333] leading-relaxed">
              【プレースホルダー】SFC小論文の概要を入力してください。慶應義塾大学SFC（総合政策学部・環境情報学部）の小論文は、他大学とは一線を画す独自の出題形式が特徴です。ここではその特徴と対策法を詳しく解説します。
            </p>
          </div>
        </div>
      </section>

      {/* SFC Essay Features */}
      <section className="py-28 px-4 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Features">
            SFC小論文の特徴
          </SectionTitle>

          <div className="space-y-6">
            <Card className="bg-white rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#002147] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002147] mb-2">【プレースホルダー】特徴1のタイトル</h3>
                    <p className="text-[#333333] leading-relaxed">
                      【プレースホルダー】特徴1の詳細説明を入力してください。例：長文の資料読解が求められる、など。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#002147] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002147] mb-2">【プレースホルダー】特徴2のタイトル</h3>
                    <p className="text-[#333333] leading-relaxed">
                      【プレースホルダー】特徴2の詳細説明を入力してください。例：問題解決型の出題が多い、など。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#002147] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002147] mb-2">【プレースホルダー】特徴3のタイトル</h3>
                    <p className="text-[#333333] leading-relaxed">
                      【プレースホルダー】特徴3の詳細説明を入力してください。例：独自の視点や発想が評価される、など。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Study Method */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Study Method">
            効果的な学習法
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white border-2 border-[#800000]/20 rounded-xl hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#800000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#002147] mb-2">【プレースホルダー】学習法1</h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】学習法1の説明を入力してください。例：過去問の徹底分析と傾向把握。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-[#002147]/20 rounded-xl hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#002147]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#002147]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#002147] mb-2">【プレースホルダー】学習法2</h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】学習法2の説明を入力してください。例：反復添削による文章力向上。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-[#002147]/20 rounded-xl hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#002147]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#002147]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#002147] mb-2">【プレースホルダー】学習法3</h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】学習法3の説明を入力してください。例：時事問題への関心と知識の蓄積。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-[#800000]/20 rounded-xl hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#800000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#002147] mb-2">【プレースホルダー】学習法4</h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】学習法4の説明を入力してください。例：時間配分のトレーニング。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Questions Analysis */}
      <section className="py-28 px-4 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Past Questions">
            過去問分析
          </SectionTitle>

          <div className="space-y-6">
            <Card className="bg-white rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#002147] font-serif mb-4">総合政策学部</h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-[#666666] mb-1">2025年度</p>
                    <p className="text-[#333333]">【プレースホルダー】出題テーマ・概要を入力してください</p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-[#666666] mb-1">2024年度</p>
                    <p className="text-[#333333]">【プレースホルダー】出題テーマ・概要を入力してください</p>
                  </div>
                  <div className="pb-4">
                    <p className="text-sm text-[#666666] mb-1">2023年度</p>
                    <p className="text-[#333333]">【プレースホルダー】出題テーマ・概要を入力してください</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#002147] font-serif mb-4">環境情報学部</h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-[#666666] mb-1">2025年度</p>
                    <p className="text-[#333333]">【プレースホルダー】出題テーマ・概要を入力してください</p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-[#666666] mb-1">2024年度</p>
                    <p className="text-[#333333]">【プレースホルダー】出題テーマ・概要を入力してください</p>
                  </div>
                  <div className="pb-4">
                    <p className="text-sm text-[#666666] mb-1">2023年度</p>
                    <p className="text-[#333333]">【プレースホルダー】出題テーマ・概要を入力してください</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Writing Tips */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Writing Tips">
            書き方のポイント
          </SectionTitle>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-[#F9F9F9] rounded-xl">
              <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">01</span>
              </div>
              <div>
                <h4 className="font-bold text-[#002147] mb-2">【プレースホルダー】ポイント1のタイトル</h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】ポイント1の詳細説明を入力してください。例：問題文の意図を正確に把握する。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#F9F9F9] rounded-xl">
              <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">02</span>
              </div>
              <div>
                <h4 className="font-bold text-[#002147] mb-2">【プレースホルダー】ポイント2のタイトル</h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】ポイント2の詳細説明を入力してください。例：論理的な構成で説得力を持たせる。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#F9F9F9] rounded-xl">
              <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">03</span>
              </div>
              <div>
                <h4 className="font-bold text-[#002147] mb-2">【プレースホルダー】ポイント3のタイトル</h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】ポイント3の詳細説明を入力してください。例：独自の視点を明確に示す。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#F9F9F9] rounded-xl">
              <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">04</span>
              </div>
              <div>
                <h4 className="font-bold text-[#002147] mb-2">【プレースホルダー】ポイント4のタイトル</h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  【プレースホルダー】ポイント4の詳細説明を入力してください。例：具体例を効果的に使用する。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#800000] to-[#600000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
            本気でSFC合格を目指すなら
          </h2>
          <p className="text-white/80 text-lg mb-8">
            24時間AI添削と塾長の戦略的指導で、小論文を武器に変える
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
