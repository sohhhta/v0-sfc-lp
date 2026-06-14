import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Check, PenTool } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "合格実績 | 佐藤塾",
  description: "合格率50.0%を誇る佐藤塾の慶應SFC（総合政策学部・環境情報学部）合格実績と、逆転合格を果たした生徒たちの声をご紹介します。",
  openGraph: {
    title: "合格実績 | 佐藤塾",
    description: "合格率50.0%を誇る佐藤塾の慶應SFC（総合政策学部・環境情報学部）合格実績と、逆転合格を果たした生徒たちの声をご紹介します。",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "合格実績 | 佐藤塾",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "合格実績 | 佐藤塾",
    description: "合格率50.0%を誇る佐藤塾の慶應SFC（総合政策学部・環境情報学部）合格実績と、逆転合格を果たした生徒たちの声をご紹介します。",
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
    "description": "6年間累計39名、2026年度合格率 50.0%（14名中7名合格）を叩き出す佐藤塾の年度別合格推移と合格者の生の声をご紹介。",
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
            <div className="relative overflow-x-auto rounded-xl shadow-lg bg-white mt-6" style={{ boxShadow: '4px 0 8px -4px rgba(0,0,0,0.1) inset, -4px 0 8px -4px rgba(0,0,0,0.05) inset' }}>
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

      {/* Success Stories Section (Enhanced with comprehensive detail panels) */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="入塾時の課題を克服し、慶應SFCへの逆転合格を果たした先輩たちのリアルな奇跡">合格者の声・先輩たちの軌跡</SectionTitle>

          <div className="space-y-14 md:space-y-18">
            {/* Story 1: O-san */}
            <div className="bg-white border-t-4 border-[#002147] shadow-xl rounded-b-xl overflow-hidden border border-slate-100">
              <div className="bg-slate-50 px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="inline-block text-[11px] font-bold text-[#002147] bg-[#002147]/5 px-2.5 py-1 rounded-sm tracking-wider uppercase mb-1">
                    2026年度 AO入試合格
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-[#002147]">総合政策学部合格 / Oさん</h3>
                </div>
                <p className="text-xs sm:text-sm font-serif font-bold text-[#C5A059] italic bg-[#002147] px-4 py-2 rounded text-center sm:text-left">
                  「凡庸な実績」から紡ぎ出した、SFCが求める問題発見の鋭さ
                </p>
              </div>
              <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 bg-slate-50/50 p-5 rounded-lg border border-slate-100">
                  <h4 className="text-xs font-bold text-[#800000] tracking-wider uppercase mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800000]" /> 入塾時の課題と壁
                  </h4>
                  <p className="text-sm text-[#333333] leading-relaxed font-medium">
                    「全国大会優勝のような輝かしい実績が何もない」――それがOさんの最初の焦りでした。誇れるアピールポイントがなく、自分にはSFCのAO入試に挑戦する資格すらすでにないのではないかと深く悩んでいました。
                  </p>
                </div>
                <div className="md:col-span-2 space-y-5">
                  <div>
                    <h4 className="text-xs font-bold text-[#002147] tracking-wider uppercase mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#002147]" /> 佐藤塾による1on1の昇華プロセス
                    </h4>
                    <p className="text-sm md:text-base text-[#333333] leading-relaxed">
                      塾長との密度の高い1on1面談の中で、Oさんが日頃から強い関心を持っていた「生成AIがもたらす社会の倫理観への影響」という独自のテーマに着目。単なるテクノロジーへの個人的な興味を、SFCの教員陣が最も重視する「現代社会における真の問題を自ら定義し、その解決をメタ視点から模索する知のプロセス」へと徹底的に深掘りし、ブラッシュアップしました。
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-[#C5A059] tracking-wider uppercase mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" /> 掴み取った未来とSFC基準
                    </h4>
                    <p className="text-sm md:text-base text-[#333333] leading-relaxed font-medium bg-[#C5A059]/5 p-3 rounded border border-[#C5A059]/20">
                      塾長との本質的な対話、そして24時間フル稼働するSFC専用AIとの壁打ちを愚直に繰り返した結果、自身の日常的な問題意識を「SFC基準を満たす圧倒的な研究計画」へと昇華させ、見事志望理由書の段階から最高峰の評価を得て合格。特別な実績がなくとも、思考の鋭さと論理の強度さえあれば勝利できることを完璧に証明してくれました。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2: K-san */}
            <div className="bg-white border-t-4 border-[#800000] shadow-xl rounded-b-xl overflow-hidden border border-slate-100">
              <div className="bg-slate-50 px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="inline-block text-[11px] font-bold text-[#800000] bg-[#800000]/5 px-2.5 py-1 rounded-sm tracking-wider uppercase mb-1">
                    2026年度 一般入試合格
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-[#800000]">総合政策学部合格 / Kさん</h3>
                </div>
                <p className="text-xs sm:text-sm font-serif font-bold text-[#002147] italic bg-[#C5A059]/20 px-4 py-2 rounded text-center sm:text-left border border-[#C5A059]/30">
                  4月入塾の初学者が、「その日中フィードバック」の反復で掴んだ質の勝利
                </p>
              </div>
              <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 bg-slate-50/50 p-5 rounded-lg border border-slate-100">
                  <h4 className="text-xs font-bold text-[#800000] tracking-wider uppercase mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800000]" /> 入塾時の課題と壁
                  </h4>
                  <p className="text-sm text-[#333333] leading-relaxed font-medium">
                    4月に佐藤塾の門をたたいた時、Kさんは本格的な小論文の学習経験が一切ない「完全な初学者」でした。膨大な背景知識や記述スキルが不足しており、資料の正しい読み方すら手探りの状態から、日本最難関とも称されるSFC一般入試への孤独な挑戦が始まりました。
                  </p>
                </div>
                <div className="md:col-span-2 space-y-5">
                  <div>
                    <h4 className="text-xs font-bold text-[#002147] tracking-wider uppercase mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#002147]" /> 佐藤塾による「その日中フィードバック」と圧倒的量の担保
                    </h4>
                    <p className="text-sm md:text-base text-[#333333] leading-relaxed">
                      Kさんはまず、塾の根幹である「ロジカルライティング・メソッド」を基礎から徹底的に脳に叩き込みました。そして、佐藤塾のAI添削環境をフル活用し、他塾ではあり得ない「提出した答案がその日中に必ず添削され、具体的な改善アクション付きで返ってくる」という超高速なサイクルを4月から愚直に継続。疑問や論理のズレを翌日に絶対に持ち越さず、その日のうちに100%修正して次の新しい1本へと進む。この驚異的なサイクルを何ヶ月も反復したからこそ、本番で採点官を唸らせる卓越した「記述の質」が磨き上げられました。
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-[#C5A059] tracking-wider uppercase mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" /> 掴み取った未来と「量から生まれる質」
                    </h4>
                    <p className="text-sm md:text-base text-[#333333] leading-relaxed font-medium bg-[#800000]/5 p-3 rounded border border-[#800000]/20">
                      「圧倒的な量をこなしたからこそ、本質的な質が生まれる」――それを身を以て体現したKさんは、本番の極限状態でも全くブレない論理構成で答案を書き上げ見事合格。4月からの地道な日々の積み重ねと、日中フィードバックという最高峰の環境の力が、初学者をわずか1年でSFC合格者へと覚醒させた瞬間でした。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3: Y-san */}
            <div className="bg-white border-t-4 border-[#C5A059] shadow-xl rounded-b-xl overflow-hidden border border-slate-100">
              <div className="bg-slate-50 px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="inline-block text-[11px] font-bold text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-sm tracking-wider uppercase mb-1">
                    2026年度 一般入試合格
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-[#002147]">環境情報学部合格 / Yさん</h3>
                </div>
                <p className="text-xs sm:text-sm font-serif font-bold text-white italic bg-[#800000] px-4 py-2 rounded text-center sm:text-left">
                  夏の終わりまで部活に捧げた日々。前夜の計画と10分単位の自己管理で掴んだ逆転劇
                </p>
              </div>
              <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 bg-slate-50/50 p-5 rounded-lg border border-slate-100">
                  <h4 className="text-xs font-bold text-[#800000] tracking-wider uppercase mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800000]" /> 入塾時の課題と壁
                  </h4>
                  <p className="text-sm text-[#333333] leading-relaxed font-medium">
                    高3の夏の終わりまで厳しい部活動に全力を注ぎ続けていたYさん。周りの受験生が春から本格的に受験勉強を積み上げる中、自身は「圧倒的な学習時間の不足」という、一般入試において致命的とも言える巨大なハンデを背負ってのスタートでした。
                  </p>
                </div>
                <div className="md:col-span-2 space-y-5">
                  <div>
                    <h4 className="text-xs font-bold text-[#002147] tracking-wider uppercase mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#002147]" /> 塾長による「10分単位の徹底管理」と圧倒的な超効率学習
                    </h4>
                    <p className="text-sm md:text-base text-[#333333] leading-relaxed">
                      限られた時間の中で確実に逆転するため、佐藤塾はYさんと共に「SFC合格から逆算した月間目標」をミリ単位で設定し、日々の「習慣目標」へと徹底的に落とし込みました。さらに、毎日のルーティンとして「前日の夜に、翌日の学習計画を10分単位で緻密に組み立て、当日はその計画を完全に遂行。そしてその日の夜に、計画がうまくいったかどうかを必ず厳密に振り返る」という、1日単位・1週間単位の徹底的なタイムマネジメントを塾長自ら並走して遂行。何が不足していて、どこに無駄があるのかがリアルタイムで可視化されたため、限られた時間の中でも最大の爆発力を生む「極限まで効率化された超密度学習」を実現しました。
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-[#C5A059] tracking-wider uppercase mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" /> 掴み取った未来とオーナーシップ
                    </h4>
                    <p className="text-sm md:text-base text-[#333333] leading-relaxed font-medium bg-[#002147]/5 p-3 rounded border border-[#002147]/20">
                      この徹底した進捗管理とハイブリッド指導により、秋以降の短期間で偏差値を爆発的に向上させ、難解な環境情報の一般入試を現役で見事突破。佐藤塾が掲げる、時間がないことを言い訳にしない自律的な「タイムマネジメント能力（オーナーシップ）」を最高レベルで身につけ、自らの手で栄冠を毟り取った最高の逆転勝利です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parents testimonial preserved exactly */}
          <div className="mt-16 bg-[#800000]/5 border-2 border-[#800000]/20 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center flex-shrink-0">
                <Check size={22} />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#800000] tracking-wider uppercase block mb-1">PROTECTOR'S VOICE</span>
                <h4 className="text-lg md:text-xl font-bold text-[#002147] font-serif">保護者 Tさん</h4>
                <p className="text-sm text-[#333333] mt-2 leading-relaxed max-w-2xl">
                  「子どもが進路で悩んでいた時、塾長が親身にサポートしてくださいました。AI添削で量をこなしながら、月1回の面談で深く考える機会を与えてくれる、バランスの取れた指導が素晴らしい。合格後も子どもから『充実していた』と聞きました。親としても安心して受験を任せられました。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-[#800000] to-[#600000]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">
            次の合格者はあなたです
          </h2>
          <p className="text-base text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            慶應SFC合格に向けて、今から始めましょう。無料相談で、あなたの現在の立ち位置と目標に最適な学習プランを塾長が直接ご提案させていただきます。
          </p>
          <p className="text-xs sm:text-sm text-[#C5A059] font-bold mb-6 tracking-wide">
            ※一人ひとりの指導密度と10分単位の計画管理を完全に維持するため、今年度の新規受付は【残り13名】となっております
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact-form">
              <Button className="bg-[#C5A059] hover:bg-[#9d8a42] text-[#002147] font-bold px-10 py-6 h-auto w-full sm:w-auto text-base shadow-lg">
                無料で塾長に相談する
              </Button>
            </Link>
            <Link href="/course">
              <Button className="border-2 border-[#C5A059] text-[#C5A059] bg-transparent hover:bg-[#C5A059] hover:text-[#002147] font-bold px-10 py-6 h-auto transition-all duration-300 w-full sm:w-auto text-base">
                コース詳細を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
