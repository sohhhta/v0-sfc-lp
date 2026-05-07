'use client'

import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import { useState } from 'react'

// SectionTitle component - exactly as in app/page.tsx
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-[0.08em]">
        {children}
      </h1>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>
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
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget as HTMLAnchorElement).href
    const targetId = href.substring(href.indexOf('#') + 1)

    if (targetId) {
      e.preventDefault()
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerHeight = 80
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary font-serif tracking-[0.1em]">佐藤塾</h1>
          <a href="#contact-form" onClick={handleSmoothScroll}>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-medium">無料相談を申し込む</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-[#002147]/5 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif tracking-wider">
              コース詳細・料金体系
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              慶應SFC合格に特化した2つのプラン。あなたの受験戦略に合わせて、最適なプランをお選びください。
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section - White */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="AO入試受験の有無で決められるシンプルなプラン">2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Main Plan - SFC二刀流プラン */}
            <div className="relative flex flex-col bg-white shadow-xl border-4 border-[#800000] rounded-xl overflow-hidden">
              {/* 人気No.1 ラベル */}
              <div className="absolute top-4 right-4 bg-[#800000] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 border-2 border-[#C5A059]">
                人気No.1
              </div>

              <div className="bg-gradient-to-br from-[#800000] to-[#600000] text-white px-6 py-6">
                <h2 className="text-xl md:text-2xl font-bold font-serif tracking-wide">SFC二刀流<br />AO入試＋一般入試プラン</h2>
              </div>

              <div className="flex-1 flex flex-col p-6 md:p-8">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-[#666666] text-xs mb-1">月額料金</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#800000] font-serif">138,000</span>
                    <span className="text-xl font-bold text-[#800000]">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-1">/ 月（税込 151,800円）</p>
                </div>

                {/* Zero fees highlight */}
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm font-bold text-[#002147]">追加講習費 0円</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">AI添削 <span className="font-bold text-[#800000]">24時間無制限</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">塾長1on1授業 <span className="font-bold text-[#800000]">週1回</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">受験戦略立案（AO・一般 二刀流対応）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">英語・数学・情報の学習支援 <span className="font-bold text-[#800000]">学習計画と徹底管理</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">相談AI 24時間対応</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <a href="#contact-form" onClick={handleSmoothScroll} className="mt-auto">
                  <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white h-14 text-base font-bold shadow-lg">
                    このプランで相談を予約する
                  </Button>
                </a>
              </div>
            </div>

            {/* Secondary Plan - 小論文特化プラン */}
            <div className="relative flex flex-col bg-white shadow-md border-2 border-[#E5E7EB] rounded-xl overflow-hidden">
              <div className="bg-[#F3F4F6] text-[#333333] px-6 py-6 border-b border-[#E5E7EB]">
                <h2 className="text-xl md:text-2xl font-bold font-serif tracking-wide text-[#002147]">他塾併願者に推奨<br />小論文特化プラン</h2>
              </div>

              <div className="flex-1 flex flex-col p-6 md:p-8">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-[#666666] text-xs mb-1">月額料金</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#002147] font-serif">118,000</span>
                    <span className="text-xl font-bold text-[#002147]">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-1">/ 月（税込 129,800円）</p>
                </div>

                {/* Zero fees highlight */}
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-[#666666]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm text-[#666666]">追加講習費 0円</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">AI添削 24時間無制限</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">塾長1on1授業 <span className="font-bold text-[#002147]">月1回</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">指導科目 <span className="font-bold text-[#002147]">小論文のみ</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">相談AI 24時間対応</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <a href="#contact-form" onClick={handleSmoothScroll} className="mt-auto">
                  <Button variant="outline" className="w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-14 text-base font-medium">
                    このプランで相談を予約する
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Graduation Rule - Soft & Reassuring */}
          <div className="mt-12 bg-white rounded-xl p-6 md:p-8 border-2 border-[#800000]/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#800000]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-[#002147] mb-2">AO入試合格 ＝ 卒業。合格後の費用は一切かかりません。</p>
                <p className="text-sm md:text-base text-[#333333] leading-relaxed">
                  AO入試合格後は、合格発表日の月末をもって<span className="font-bold text-[#800000]">自動退塾（契約終了）となります。</span>だからこそ、親御様も安心してお子さんの受験を応援できます。
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 bg-[#F8F9FA] rounded-xl p-6 md:p-8 border border-[#E5E7EB]">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <div>
                  <p className="font-bold text-[#002147] text-sm mb-1">入会金10万円のみ</p>
                  <p className="text-xs text-[#666666]">追加の講習費や教材費などは一切かかりません。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <div>
                  <p className="font-bold text-[#002147] text-sm mb-1">月単位でプラン変更可能</p>
                  <p className="text-xs text-[#666666]">学習進度や状況に応じて、柔軟に対応できます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-28 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>他塾との違い</SectionTitle>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#002147] text-white">
                    <th className="px-6 py-4 text-left font-bold">項目</th>
                    <th className="px-6 py-4 text-center font-bold text-[#C5A059]">佐藤塾</th>
                    <th className="px-6 py-4 text-center font-bold text-[#CCCCCC]">一般的な塾</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#002147]">添削回数</td>
                    <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                      <span className="font-bold text-[#800000]">無制限</span>
                    </td>
                    <td className="px-6 py-4 text-center text-[#AAAAAA]">週1〜2回</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#002147]">フィードバック時間</td>
                    <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                      <span className="font-bold text-[#800000]">即時</span>
                    </td>
                    <td className="px-6 py-4 text-center text-[#AAAAAA]">3日〜1週間</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#002147]">対応時間</td>
                    <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                      <span className="font-bold text-[#800000]">24時間365日</span>
                    </td>
                    <td className="px-6 py-4 text-center text-[#AAAAAA]">営業時間のみ</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#002147]">指導対応範囲</td>
                    <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                      <span className="font-bold text-[#800000]">AO・一般両対応</span>
                    </td>
                    <td className="px-6 py-4 text-center text-[#AAAAAA]">片方のみ</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#002147]">追加費用</td>
                    <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                      <span className="font-bold text-[#800000]">0円</span>
                    </td>
                    <td className="px-6 py-4 text-center text-[#AAAAAA]">別途請求あり</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-6 font-serif tracking-[0.08em]">
            プラン選択に迷った方へ
          </h2>
          <p className="text-lg text-[#333333] mb-10 leading-relaxed">
            無料相談で、あなたの受験状況に最適なプランをご提案させていただきます。<br />
            塾長が直接、プラン選択のサポートを行いますので、お気軽にお申し込みください。
          </p>
          <a href="#contact-form" onClick={handleSmoothScroll}>
            <Button size="lg" className="bg-[#800000] hover:bg-[#C5A059] text-white text-lg font-bold px-12 py-7 h-auto shadow-[0_4px_24px_rgba(0,33,71,0.5)] hover:shadow-[0_8px_32px_rgba(197,160,89,0.45)] transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#C5A059]">
              無料で個別相談を予約する
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

