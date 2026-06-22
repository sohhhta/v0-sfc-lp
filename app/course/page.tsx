import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Check, ShieldCheck, GraduationCap, Laptop } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "コース・料金 | 佐藤塾",
  description: "追加講習費0円、AO入試合格時の自動退塾ルールなど、佐藤塾の明朗な料金体系とコース内容についてご案内します。",
  openGraph: {
    title: "コース・料金 | 佐藤塾",
    description: "追加講習費0円、AO入試合格時の自動退塾ルールなど、佐藤塾の明朗な料金体系とコース内容についてご案内します。",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "コース・料金 | 佐藤塾",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "コース・料金 | 佐藤塾",
    description: "追加講習費0円、AO入試合格時の自動退塾ルールなど、佐藤塾の明朗な料金体系とコース内容についてご案内します。",
    images: ["/hero.jpg"],
  },
}

// SectionTitle component - exactly as in app/page.tsx
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-[0.08em]">
        {children}
      </h3>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-lg px-4">{subtitle}</p>
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
    <div className="min-h-screen bg-background">
      {/* 共通ナビゲーション（layout.tsx）から自動出力されるため、固有の<nav>ブロックを完全に削除しました */}

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#002147] to-[#003d6b]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A059] border border-[#C5A059]/50 px-5 py-2 rounded-full mb-8 uppercase">
              PRICING
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-6 font-serif tracking-[0.08em]" style={{ wordBreak: 'keep-all' }}>
              コース詳細・料金体系
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
              慶應SFC合格に特化した2つのプラン。あなたの受験戦略に合わせて、最適なプランをお選びください。
            </p>
          </div>
        </div>
      </section>

      {/* 3つの約束（保護者向け安心ポイント） */}
      <section className="py-12 md:py-16 px-4 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="pb-4">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="text-[#002147]" size={24} />
                </div>
                <CardTitle className="text-xl text-[#002147]">追加の講習費 0円</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                一般的な予備校で数十万円かかる「夏期講習」「冬期講習」「直前対策」などの追加費用は一切いただきません。入会金と月額料金のみで全サポートを受講可能です。
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="pb-4">
                <div className="bg-[#800000]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="text-[#800000]" size={24} />
                </div>
                <CardTitle className="text-xl text-[#800000]">AO合格で自動退塾</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                一般・AOの「二刀流」を推奨。秋のAO入試で見事合格した場合、合格発表日の月末をもって自動退塾（契約終了）となり、以降の費用は一切発生しません。
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="pb-4">
                <div className="bg-[#C5A059]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Laptop className="text-[#C5A059]" size={24} />
                </div>
                <CardTitle className="text-xl text-slate-800">AI × 1on1の圧倒的指導</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                独自開発のSFC専用AIシステムによる「24時間無制限の添削」と、塾長直々の「オンライン1on1指導」をハイブリッドで提供。圧倒的な学習量と質を担保します。
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section - White */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="AO入試受験の有無で決められるシンプルなプラン">2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Main Plan - SFC二刀流プラン */}
            <div className="relative flex flex-col bg-white shadow-xl border-4 border-[#800000]/60 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
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
                    <span className="text-6xl md:text-7xl font-black text-[#800000] font-serif tracking-tight">138,000</span>
                    <span className="text-2xl font-black text-[#800000]">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-2 font-medium">/ 月（税込 151,800円）</p>
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
                <Link href="/#contact-form" className="mt-auto block">
                  <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white h-14 text-base font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                    このプランで相談を予約する
                  </Button>
                </Link>
              </div>
            </div>

            {/* Secondary Plan - 小論文特化プラン */}
            <div className="relative flex flex-col bg-white shadow-xl border-2 border-[#002147]/40 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
              <div className="bg-[#F3F4F6] text-[#333333] px-6 py-6 border-b border-[#E5E7EB]">
                <h2 className="text-xl md:text-2xl font-bold font-serif tracking-wide text-[#002147]">他塾併願者に推奨<br />小論文特化プラン</h2>
              </div>

              <div className="flex-1 flex flex-col p-6 md:p-8">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-[#666666] text-xs mb-1">月額料金</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl md:text-7xl font-black text-[#002147] font-serif tracking-tight">118,000</span>
                    <span className="text-2xl font-black text-[#002147]">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-2 font-medium">/ 月（税込 129,800円）</p>
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
                <Link href="/#contact-form" className="mt-auto block">
                  <Button variant="outline" className="w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-14 text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    このプランで相談を予約する
                  </Button>
                </Link>
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

          <div className="mt-6 bg-[#F8F9FA] rounded-xl p-6 md:p-8 border border-[#E5E7EB]">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <div>
                  <p className="font-bold text-[#002147] text-sm mb-1">別途料金は入会金10万円のみ</p>
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
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>他塾との違い</SectionTitle>

          {/* Mobile: Horizontal scroll table with sticky first column */}
          <div className="md:hidden">
            <div className="relative overflow-x-auto rounded-xl shadow-lg" style={{ boxShadow: '4px 0 8px -4px rgba(0,0,0,0.1) inset, -4px 0 8px -4px rgba(0,0,0,0.05) inset' }}>
              <table className="w-full min-w-[400px] border-collapse">
                <thead>
                  <tr className="bg-[#002147]">
                    <th className="sticky left-0 z-10 bg-[#002147] px-4 py-3 text-left text-sm font-bold text-white whitespace-nowrap" style={{ minWidth: '100px' }}>項目</th>
                    <th className="px-4 py-3 text-center text-sm font-bold text-[#C5A059] whitespace-nowrap border-l-2 border-[#C5A059]/30" style={{ minWidth: '120px' }}>佐藤塾</th>
                    <th className="px-4 py-3 text-center text-sm font-bold text-white/60 whitespace-nowrap" style={{ minWidth: '120px' }}>一般的な塾</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">添削回数</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">無制限</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#999999]">週1〜2回</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">フィードバック</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">24時間以内</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#999999]">3日〜1週間</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">対応時間</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">24時間</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#999999]">営業時間のみ</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">指導範囲</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">AO・一般</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#999999]">片方のみ</td>
                  </tr>
                  <tr>
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">追加費用</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">0円</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#999999]">別途請求(講習代)あり</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999999] text-center mt-3">左右にスワイプして全体を確認できます</p>
          </div>

          {/* Desktop: Table layout */}
          <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB]">
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
                    <span className="font-bold text-[#800000]">24時間以内</span>
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
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#002147] mb-4 md:mb-6 font-serif tracking-[0.08em]" style={{ wordBreak: 'keep-all' }}>
            プラン選択に迷った方へ
          </h2>
          <p className="text-base md:text-lg text-[#333333] mb-8 md:mb-10 leading-relaxed px-4">
            無料相談で、あなたの受験状況に最適なプランをご提案させていただきます。<br className="hidden md:inline" />
            塾長が直接、プラン選択のサポートを行いますので、お気軽にお申し込みください。
          </p>

          <p className="text-sm text-[#800000] mb-6">
            ※一人ひとりの指導密度を保つため、今年度の新規受付は<span className="font-bold">残り13名</span>となっております
          </p>

          <Link href="/#contact-form">
            <Button size="lg" className="bg-[#800000] hover:bg-[#C5A059] text-white text-base md:text-lg font-bold px-8 md:px-12 py-6 md:py-7 h-auto shadow-[0_4px_24px_rgba(0,33,71,0.5)] hover:shadow-[0_8px_32px_rgba(197,160,89,0.45)] transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#C5A059]">
              無料で個別相談を予約する
            </Button>
          </Link>
        </div>
      </section>

      {/* 共通フッター（layout.tsx）から自動出力されるため、固有の<footer>ブロックを完全に削除しました */}
    </div>
  )
}