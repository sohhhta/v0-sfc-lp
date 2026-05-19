'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

// SectionTitle component - exactly as in app/page.tsx
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-primary font-serif tracking-[0.08em]" style={{ wordBreak: 'keep-all' }}>
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-3 md:mt-4 text-base md:text-lg px-4">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
    </div>
  )
}

export default function ResultsPage() {
  const resultsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "慶應SFC 合格実績・合格者の声 | 佐藤塾",
    "description": "6年間累計39名、2026年度合格率50.0%（14名中7名合格）を叩き出す佐藤塾の年度別合格推移と合格者の生の声をご紹介。",
    "image": "https://lifeeling.jp/hero.jpg",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 3,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "2026年度合格率 50.0%（14名中7名合格）" },
        { "@type": "ListItem", "position": 2, "name": "6年間累計SFC合格者数 39名" },
        { "@type": "ListItem", "position": 3, "name": "受講継続率 93%" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resultsJsonLd) }}
      />
      {/* 共通ナビゲーション（layout.tsx）から自動出力されるため、固有の<nav>ブロックを完全に削除しました */}

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#002147] to-[#003d6b]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A059] border border-[#C5A059]/50 px-5 py-2 rounded-full mb-8 uppercase">
              ACHIEVEMENTS
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-6 font-serif tracking-[0.08em]" style={{ wordBreak: 'keep-all' }}>
              合格実績
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
              AIと塾長のハイブリッド指導で、慶應SFCへ合格した生徒たちの実績と体験談をご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Highlights Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>実績ハイライト</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: 2026年度合格率 */}
            <div className="flex flex-col bg-white shadow-xl border-2 border-[#800000]/40 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-gradient-to-br from-[#800000] to-[#600000] text-white px-6 py-5">
                <p className="text-xs font-bold tracking-wider opacity-90">2026年度</p>
                <h3 className="text-lg font-bold font-serif mt-1">合格率</h3>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8">
                <div className="text-6xl md:text-7xl font-black text-[#800000] font-serif tracking-tight">50.0<span className="text-4xl md:text-5xl">%</span></div>
                <p className="text-sm text-[#666666] mt-3 font-medium">14名中7名合格</p>
              </div>
            </div>

            {/* Card 2: 受講継続率 */}
            <div className="flex flex-col bg-white shadow-xl border-2 border-[#002147]/40 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-gradient-to-br from-[#002147] to-[#001a2e] text-white px-6 py-5">
                <p className="text-xs font-bold tracking-wider opacity-90">2026年度</p>
                <h3 className="text-lg font-bold font-serif mt-1">受講継続率</h3>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8">
                <div className="text-6xl md:text-7xl font-black text-[#002147] font-serif tracking-tight">93<span className="text-4xl md:text-5xl">%</span></div>
                <p className="text-sm text-[#666666] mt-3 font-medium">入塾者の満足度</p>
              </div>
            </div>

            {/* Card 3: 累計合格者 */}
            <div className="flex flex-col bg-white shadow-xl border-2 border-[#C5A059]/50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-gradient-to-br from-[#C5A059] to-[#9d8a42] text-white px-6 py-5">
                <p className="text-xs font-bold tracking-wider opacity-90">6年間累計</p>
                <h3 className="text-lg font-bold font-serif mt-1">合格者数</h3>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8">
                <div className="text-6xl md:text-7xl font-black text-[#C5A059] font-serif tracking-tight">39<span className="text-4xl md:text-5xl">名</span></div>
                <p className="text-sm text-[#666666] mt-3 font-medium">SFC合格輩出</p>
              </div>
            </div>

            {/* Card 4: AO・一般両対応 */}
            <div className="flex flex-col bg-white shadow-lg border-2 border-[#C5A059]/30 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#800000] to-[#C5A059] text-white px-6 py-6">
                <p className="text-sm font-bold opacity-80">指導対応</p>
                <h3 className="text-xl font-bold font-serif mt-2">両入試制度</h3>
              </div>
              <div className="flex-1 flex flex-col p-6 md:p-8">
                <div className="flex items-baseline gap-1 mb-4">
                  <Check className="w-6 h-6 text-[#800000]" />
                  <span className="text-lg font-bold text-[#002147]">AO入試対応</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <Check className="w-6 h-6 text-[#800000]" />
                  <span className="text-lg font-bold text-[#002147]">一般入試対応</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yearly Results Section */}
      <section className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>年度別合格実績</SectionTitle>

          {/* Mobile: Horizontal scroll table with sticky first column */}
          <div className="md:hidden">
            <div className="relative overflow-x-auto rounded-xl shadow-lg" style={{ boxShadow: '4px 0 8px -4px rgba(0,0,0,0.1) inset, -4px 0 8px -4px rgba(0,0,0,0.05) inset' }}>
              <table className="w-full min-w-[360px] border-collapse">
                <thead>
                  <tr className="bg-[#002147]">
                    <th className="sticky left-0 z-10 bg-[#002147] px-4 py-3 text-left text-sm font-bold text-white whitespace-nowrap" style={{ minWidth: '90px' }}>年度</th>
                    <th className="px-4 py-3 text-center text-sm font-bold text-[#C5A059] whitespace-nowrap border-l-2 border-[#C5A059]/30" style={{ minWidth: '80px' }}>合格者</th>
                    <th className="px-4 py-3 text-center text-sm font-bold text-white/80 whitespace-nowrap" style={{ minWidth: '70px' }}>AO</th>
                    <th className="px-4 py-3 text-center text-sm font-bold text-white/80 whitespace-nowrap" style={{ minWidth: '70px' }}>一般</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">2026年度</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">7名</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">2名</td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">5名</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">2025年度</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">8名</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">3名</td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">5名</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">2024年度</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">9名</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">3名</td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">6名</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">2023年度</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">7名</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">2名</td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">5名</td>
                  </tr>
                  <tr>
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm font-bold text-[#002147] whitespace-nowrap">2022年度</td>
                    <td className="px-4 py-4 text-center bg-[#C5A059]/10 border-l-2 border-[#C5A059]/30">
                      <span className="text-base font-bold text-[#800000]">6名</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">1名</td>
                    <td className="px-4 py-4 text-center text-sm text-[#333333]">5名</td>
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
                  <th className="px-6 py-4 text-left font-bold">年度</th>
                  <th className="px-6 py-4 text-center font-bold text-[#C5A059]">合格者数</th>
                  <th className="px-6 py-4 text-center font-bold">AO入試</th>
                  <th className="px-6 py-4 text-center font-bold">一般入試</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr>
                  <td className="px-6 py-4 font-bold text-[#002147]">2026年度</td>
                  <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                    <span className="font-bold text-[#800000]">7名</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#333333]">2名</td>
                  <td className="px-6 py-4 text-center text-[#333333]">5名</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-[#002147]">2025年度</td>
                  <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                    <span className="font-bold text-[#800000]">8名</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#333333]">3名</td>
                  <td className="px-6 py-4 text-center text-[#333333]">5名</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-[#002147]">2024年度</td>
                  <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                    <span className="font-bold text-[#800000]">9名</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#333333]">3名</td>
                  <td className="px-6 py-4 text-center text-[#333333]">6名</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-[#002147]">2023年度</td>
                  <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                    <span className="font-bold text-[#800000]">7名</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#333333]">2名</td>
                  <td className="px-6 py-4 text-center text-[#333333]">5名</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-[#002147]">2022年度</td>
                  <td className="px-6 py-4 text-center bg-[#C5A059]/5">
                    <span className="font-bold text-[#800000]">6名</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#333333]">1名</td>
                  <td className="px-6 py-4 text-center text-[#333333]">5名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>合格者の声</SectionTitle>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Testimonial 1: 総合政策学部 S さん */}
            <div className="flex flex-col bg-white shadow-lg border-2 border-[#800000]/20 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#800000] to-[#600000] text-white px-6 py-6">
                <div className="text-xs font-bold bg-[#C5A059]/30 text-white px-2 py-1 rounded inline-block mb-3">
                  AO入試合格
                </div>
                <h3 className="text-xl font-bold font-serif">総合政策学部 Sさん</h3>
              </div>
              <div className="flex-1 flex flex-col p-6 md:p-8">
                <p className="text-base text-[#333333] leading-relaxed">
                  AI添削の即時フィードバックで、添削のスピード感が格段に上がりました。塾長との個別面談では、小論文の論理構成だけでなく、志望理由書の深化もサポートいただき、AO入試で合格することができました。
                </p>
                <p className="text-sm text-[#666666] mt-4 italic">
                  「24時間添削で、夜中も思いついたときすぐ提出できるのが最高」
                </p>
              </div>
            </div>

            {/* Testimonial 2: 環境情報学部 I さん */}
            <div className="flex flex-col bg-white shadow-lg border-2 border-[#002147]/20 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#002147] to-[#001a2e] text-white px-6 py-6">
                <div className="text-xs font-bold bg-[#C5A059]/30 text-white px-2 py-1 rounded inline-block mb-3">
                  一般入試合格
                </div>
                <h3 className="text-xl font-bold font-serif">環境情報学部 Iさん</h3>
              </div>
              <div className="flex-1 flex flex-col p-6 md:p-8">
                <p className="text-base text-[#333333] leading-relaxed">
                  他塾と並行して小論文特化プランを利用しました。佐藤塾はSFC型の小論文に特化しているため、短期間で論理的な答案が書けるようになりました。一般入試では小論文が得意科目になり、見事合格できました。
                </p>
                <p className="text-sm text-[#666666] mt-4 italic">
                  「SFC特化だからこそ、実践的で効率的」
                </p>
              </div>
            </div>

            {/* Testimonial 3: 保護者 T さん */}
            <div className="flex flex-col bg-white shadow-lg border-2 border-[#C5A059]/30 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#C5A059] to-[#9d8a42] text-white px-6 py-6">
                <div className="text-xs font-bold bg-[#002147]/30 text-white px-2 py-1 rounded inline-block mb-3">
                  保護者様
                </div>
                <h3 className="text-xl font-bold font-serif">保護者 Tさん</h3>
              </div>
              <div className="flex-1 flex flex-col p-6 md:p-8">
                <p className="text-base text-[#333333] leading-relaxed">
                  子どもが進路で悩んでいた時、塾長が親身にサポートしてくださいました。AI添削で量をこなしながら、月1回の面談で深く考える機会を与えてくれる、バランスの取れた指導が素晴らしい。合格後も子どもから「充実していた」と聞きました。
                </p>
                <p className="text-sm text-[#666666] mt-4 italic">
                  「親としても安心して受験を任せられた」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#002147] mb-4 md:mb-6 font-serif tracking-[0.08em]" style={{ wordBreak: 'keep-all' }}>
            次の合格者はあなたです
          </h2>
          <p className="text-base md:text-lg text-[#333333] mb-8 md:mb-10 leading-relaxed px-4">
            慶應SFC合格に向けて、今から始めましょう。無料相談で、あなたの目標に最適なプランをご提案させていただきます。
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