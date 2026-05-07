'use client'

import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: '慶應SFC合格のためのコース・料金体系 | 佐藤塾（AI×塾長のハイブリッド指導）',
  description: '慶應SFC小論文・情報入試に特化した佐藤塾のコース案内。AIによる24時間即時添削と塾長の戦略的指導で、合格率50.0%を実現。',
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-[#002147] tracking-[0.12em] leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.08em' }}>
        {children}
      </h2>
    </div>
  )
}

export default function CoursePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'AO入試と一般入試のどちらを受験するか決まっていないのですが',
      answer: 'SFC二刀流プランをお勧めします。このプランではAO入試・一般入試両方の対策を行いますので、いずれの入試形式にも対応できます。'
    },
    {
      question: '他塾と併用することはできますか',
      answer: 'もちろん可能です。特に小論文特化プランは他塾の授業と組み合わせてご利用いただくことを想定した設計になっています。'
    },
    {
      question: '月途中での退会は可能ですか',
      answer: 'はい、月単位でのご退会が可能です。合格後は自動退塾となり、追加の費用は一切発生しません。'
    },
    {
      question: '料金プランの変更はできますか',
      answer: 'はい、月単位でプランの変更が可能です。学習進度や状況に応じて、いつでも柔軟に対応できます。お気軽にご相談ください。'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-[#002147] tracking-[0.12em]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>佐藤塾</Link>
          <Link href="/#contact-form">
            <Button className="bg-[#D4AF37] hover:bg-[#C9A227] text-[#002147] font-bold" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>無料相談を申し込む</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-40 px-4 bg-gradient-to-br from-white via-[#F8FAFC] to-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(to right, #002147 1px, transparent 1px), linear-gradient(to bottom, #002147 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#002147] mb-8 leading-tight" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.04em', lineHeight: '1.4' }}>
            24時間をSFC合格に変える、<br />次世代のハイブリッド指導
          </h1>
          <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.02em', lineHeight: '1.8' }}>
            AIによる即時添削と、塾長による戦略的伴走。待ち時間ゼロの圧倒的な演習量が、あなたを最短で合格圏へ引き上げます。
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-40 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Plan 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' }}>
              <div className="bg-gradient-to-br from-[#F8FAFC] to-white px-8 md:px-10 py-12">
                <div className="mb-8 pb-8 border-b-2 border-[#D4AF37]">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#002147] mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em' }}>SFC二刀流プラン</h3>
                  <p className="text-sm text-[#888888] mb-6" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>AO入試・一般入試の両方で合格を確実にしたい方</p>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-[#002147]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>¥151,800</span>
                    <span className="text-sm text-[#AAAAAA]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>/ 月</span>
                  </div>
                  <p className="text-xs text-[#CCCCCC] mt-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>税込価格</p>
                </div>

                <div className="mb-10 space-y-4">
                  <p className="font-bold text-[#002147] text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em' }}>このプランに含まれるもの</p>
                  <div className="space-y-3">
                    <p className="text-sm text-[#333333]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}><strong>AI添削</strong> 24時間 / 無制限 / 即時</p>
                    <p className="text-sm text-[#333333]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}><strong>個別面談</strong> 週1回（60分）</p>
                    <p className="text-sm text-[#333333]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}><strong>志望理由書指導</strong> 作成・深化</p>
                    <p className="text-sm text-[#333333]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}><strong>学習ロードマップ</strong> 全科目対応</p>
                  </div>
                </div>

                <Link href="/#contact-form">
                  <Button className="w-full bg-[#002147] hover:bg-[#001a34] text-white h-12 font-bold text-base" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    このプランで相談を予約する
                  </Button>
                </Link>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="bg-[#F8FAFC] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' }}>
              <div className="bg-white px-8 md:px-10 py-12">
                <div className="mb-8 pb-8 border-b-2 border-[#CCCCCC]">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#555555] mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em' }}>小論文特化プラン</h3>
                  <p className="text-sm text-[#AAAAAA] mb-6" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>他塾併用者や、一般入試の小論文を武器にしたい方</p>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-[#555555]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>¥129,800</span>
                    <span className="text-sm text-[#CCCCCC]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>/ 月</span>
                  </div>
                  <p className="text-xs text-[#DDDDDD] mt-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>税込価格</p>
                </div>

                <div className="mb-10 space-y-4">
                  <p className="font-bold text-[#555555] text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em' }}>このプランに含まれるもの</p>
                  <div className="space-y-3">
                    <p className="text-sm text-[#666666]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}><strong>AI添削</strong> 24時間 / 無制限 / 即時</p>
                    <p className="text-sm text-[#666666]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}><strong>個別面談</strong> 月2回（45分）</p>
                    <p className="text-sm text-[#666666]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}><strong>小論文特化</strong> SFC型対策集中</p>
                    <p className="text-sm text-[#666666]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}><strong>チャット相談</strong> 無制限</p>
                  </div>
                </div>

                <Link href="/#contact-form">
                  <Button variant="outline" className="w-full border-2 border-[#CCCCCC] text-[#555555] hover:bg-[#F3F3F3] h-12 font-bold text-base" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    このプランで相談を予約する
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gradient-to-r from-[#F8FAFC] to-white rounded-xl px-8 md:px-12 py-12 border border-[#E5E7EB]">
            <h3 className="font-bold text-[#002147] mb-8 text-lg" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em' }}>料金に関する重要事項</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-[#002147] text-sm mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>入会金</p>
                <p className="text-sm text-[#666666]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}>0円 — 入塾時に別途費用は一切ございません。</p>
              </div>
              <div>
                <p className="font-bold text-[#002147] text-sm mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>教材費・その他費用</p>
                <p className="text-sm text-[#666666]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}>0円 — 全ての教材・システムが料金に含まれています。追加費用は一切発生しません。</p>
              </div>
              <div>
                <p className="font-bold text-[#002147] text-sm mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>合格後の費用</p>
                <p className="text-sm text-[#666666]" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}>0円 — 合格発表日の月末をもって自動退塾。その後の費用は一切発生しません。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Infographic Style */}
      <section className="py-40 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>他塾との比較</SectionTitle>

          <div className="space-y-4">
            {/* Comparison Item 1 */}
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-[#002147] font-bold text-lg md:text-xl" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em' }}>
                添削回数
              </div>
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] rounded-lg p-6 text-center shadow-lg">
                <p className="text-2xl md:text-3xl font-bold text-[#002147]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>無制限</p>
                <p className="text-xs text-[#002147] mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>佐藤塾</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border border-[#E5E7EB]">
                <p className="text-base text-[#AAAAAA]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>週1〜2回</p>
                <p className="text-xs text-[#CCCCCC] mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>一般的な塾</p>
              </div>
            </div>

            {/* Comparison Item 2 */}
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-[#002147] font-bold text-lg md:text-xl" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em' }}>
                フィードバック時間
              </div>
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] rounded-lg p-6 text-center shadow-lg">
                <p className="text-2xl md:text-3xl font-bold text-[#002147]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>即時</p>
                <p className="text-xs text-[#002147] mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>佐藤塾</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border border-[#E5E7EB]">
                <p className="text-base text-[#AAAAAA]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>3日〜1週間</p>
                <p className="text-xs text-[#CCCCCC] mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>一般的な塾</p>
              </div>
            </div>

            {/* Comparison Item 3 */}
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-[#002147] font-bold text-lg md:text-xl" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em' }}>
                対応時間
              </div>
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] rounded-lg p-6 text-center shadow-lg">
                <p className="text-2xl md:text-3xl font-bold text-[#002147]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>24時間365日</p>
                <p className="text-xs text-[#002147] mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>佐藤塾</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border border-[#E5E7EB]">
                <p className="text-base text-[#AAAAAA]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>営業時間のみ</p>
                <p className="text-xs text-[#CCCCCC] mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>一般的な塾</p>
              </div>
            </div>

            {/* Comparison Item 4 */}
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-[#002147] font-bold text-lg md:text-xl" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em' }}>
                指導対応範囲
              </div>
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] rounded-lg p-6 text-center shadow-lg">
                <p className="text-lg md:text-xl font-bold text-[#002147]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>AO・一般<br />両対応</p>
                <p className="text-xs text-[#002147] mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>佐藤塾</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border border-[#E5E7EB]">
                <p className="text-base text-[#AAAAAA]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>片方のみ</p>
                <p className="text-xs text-[#CCCCCC] mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>一般的な塾</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>よくある質問</SectionTitle>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden hover:border-[#D4AF37] transition-colors" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)' }}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-[#F8FAFC] transition-colors"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  <span className="font-bold text-[#002147] text-left text-sm md:text-base" style={{ letterSpacing: '0.02em' }}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#D4AF37] transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 border-t border-[#E5E7EB] bg-[#F8FAFC]">
                    <p className="text-sm md:text-base text-[#555555] leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.8', letterSpacing: '0.02em' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002147] mb-8 leading-tight" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.05em', lineHeight: '1.4' }}>
            まずは無料相談から
          </h2>
          <p className="text-lg text-[#666666] mb-12 leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.8', letterSpacing: '0.02em' }}>
            あなたの学習状況と志望進路に基づいて、最適なプランをご提案いたします。<br />
            一人ひとりに寄り添い、合格への最短ルートをお示しします。
          </p>

          <Link href="/#contact-form">
            <Button size="lg" className="bg-[#002147] hover:bg-[#001a34] text-white h-14 px-16 font-bold text-base shadow-lg hover:shadow-xl transition-shadow" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              無料で個別相談を予約する
            </Button>
          </Link>

          <p className="text-sm text-[#AAAAAA] mt-10 leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.8', letterSpacing: '0.02em' }}>
            一人ひとりの指導密度を維持するため、毎月の新規受付数には上限を設けております。<br />
            ご希望の方はお早めにお問い合わせください。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl font-bold tracking-[0.12em] mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>佐藤塾</p>
          <p className="text-sm text-white/70 mb-8" style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: '1.7' }}>慶應SFC小論文・情報入試 | AI×塾長のハイブリッド指導</p>
          <p className="text-xs text-white/50" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>© 2024 佐藤塾. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
