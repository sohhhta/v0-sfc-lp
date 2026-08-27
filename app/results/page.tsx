import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Check, PenTool, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "合格実績 | 佐藤塾",
  description: "合格率50.0%を誇る佐藤塾の慶應SFC（総合政策学部・環境情報学部）合格実績と、逆転合格を果たした生徒たちの声をご紹介します。",
  openGraph: {
    title: "合格実績 | 佐藤塾",
    description: "合格率50.0%を誇る佐藤塾の慶應SFC（総合政策学部・環境情報学部）合格実績と、逆転合格を果たした生徒たちの声をご紹介します。",
    images: [
      {
        url: "https://www.sfc-satojuku.com/hero.jpg",
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
    images: ["https://www.sfc-satojuku.com/hero.jpg"],
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
    "image": "https://www.sfc-satojuku.com/hero.jpg",
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
                <p className="text-sm text-[#666666] mt-3 font-medium">SFC合格者輩出</p>
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

      {/* Before / After Text Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>小論文：たった3ヶ月での劇的変化</SectionTitle>
          
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-slate-100 relative mt-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 relative">
              
              {/* Before */}
              <div className="flex flex-col h-full bg-slate-50 p-6 md:p-8 rounded-2xl border-t-4 border-slate-300">
                <div className="flex items-center mb-6">
                  <span className="bg-slate-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">入塾前（3ヶ月前）</span>
                  <h3 className="font-bold text-slate-700 text-lg">感情論と論理の飛躍</h3>
                </div>
                
                {/* 答案テキスト（Before） */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-inner mb-6 relative">
                  <div className="absolute -top-3 -right-3 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded border border-red-200 transform rotate-12">
                    不合格答案
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    「私はAIの進化に反対だ。なぜなら、人間の仕事が奪われてしまうからだ。最近もスーパーのレジが自動化されている。このままでは人間はAIに支配されてしまうため、国はAIの開発を法律で禁止すべきだと思う。」
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl text-sm text-slate-600 border border-slate-200 flex-grow">
                  <p className="mb-2 flex items-center text-[#800000] font-bold">
                    <AlertCircle className="mr-2" size={16}/>
                    【佐藤塾の添削ポイント】
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-0">
                    <li>「AIは仕事を奪う」という思いつきの<strong>感情論</strong>で書かれている。</li>
                    <li>SFCが求める「具体的な資料（データ）の引用」が一切ない。</li>
                    <li>「レジの自動化」から「AIの禁止」へと<strong>深刻な論理の飛躍</strong>が起きている。</li>
                  </ul>
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="hidden xl:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#002147] rounded-full items-center justify-center shadow-xl z-10 border-4 border-white">
                <ArrowRight className="text-white" size={24}/>
              </div>
              <div className="flex xl:hidden justify-center -my-8 relative z-10">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center shadow-lg border-4 border-white transform rotate-90">
                  <ArrowRight className="text-white" size={20}/>
                </div>
              </div>

              {/* After */}
              <div className="flex flex-col h-full bg-[#C5A059]/5 p-6 md:p-8 rounded-2xl border-t-4 border-[#C5A059]">
                <div className="flex items-center mb-6">
                  <span className="bg-[#C5A059] text-white text-xs font-bold px-3 py-1 rounded-full mr-3">入塾後（本番直前）</span>
                  <h3 className="font-bold text-[#002147] text-lg">PREP法に基づく論理的思考</h3>
                </div>
                
                {/* 答案テキスト（After） */}
                <div className="bg-white p-5 rounded-lg border-2 border-[#C5A059]/40 shadow-sm mb-6 relative">
                  <div className="absolute -top-3 -right-3 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-200 transform rotate-12">
                    SFC合格レベル
                  </div>
                  <p className="text-slate-800 text-sm leading-relaxed">
                    「<strong className="text-[#002147]">【P】</strong>地方の医療過疎問題に対し、AI画像診断技術の導入を推進すべきだと考える。<strong className="text-[#002147]">【R】</strong>なぜなら、専門医不足の地域では初期診断の遅れが深刻化しており、テクノロジーによる代替が急務だと考えるからである。<strong className="text-[#002147]">【E】</strong>具体的には、資料2のグラフが示す通り、A県では医師1人あたりの負担が全国平均の2倍を超えている。つまり、AIに定型的な診断を代替させることで、<strong className="text-[#002147]">【P】</strong>医師は患者との対話や治療方針の決定という『人間にしかできない医療』に専念できるようになり、結果として地域医療の質は向上すると考えるのである。」
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl text-sm text-slate-700 border border-[#C5A059]/20 flex-grow shadow-sm">
                  <p className="mb-2 flex items-center text-[#002147] font-bold">
                    <CheckCircle2 className="mr-2 text-[#C5A059]" size={16}/>
                    【佐藤塾の指導による変化】
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-0">
                    <li>最初の30分で<strong>「PREP法の構成メモ」</strong>を作成する型を完全習得</li>
                    <li>複数の資料をクロス分析し、<strong>ファクトベース</strong>のエビデンスを配置</li>
                    <li>「テクノロジーの導入→人間の尊厳」という<strong>SFC的な発想</strong>を理解</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>合格者の声</SectionTitle>

          <div className="space-y-8">
            {/* Testimony 1: Oさん */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#C5A059]/10 border-2 border-[#C5A059]">
                    <span className="text-lg font-bold text-[#C5A059]">O</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-slate-800">Oさん（高3現役・SFC環境情報学部合格）</h3>
                    <p className="text-sm text-[#800000] font-semibold">AO入試・小論文対策コース</p>
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed italic border-l-4 border-[#C5A059] pl-4 py-2">
                    「最初は『書きながら考える』癖があって、設問分析の大切さに全く気づいていませんでした。佐藤塾では毎回、構成メモだけで30分使うという指導を受けて、最初は違和感がありましたが、本番ではその30分が何度も何度も活きてきました。」
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Testimony 2: Kさん */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#C5A059]/10 border-2 border-[#C5A059]">
                    <span className="text-lg font-bold text-[#C5A059]">K</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-slate-800">Kさん（浪人生・SFC総合政策学部合格）</h3>
                    <p className="text-sm text-[#800000] font-semibold">一般入試・小論文対策コース</p>
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed italic border-l-4 border-[#C5A059] pl-4 py-2">
                    「AI壁打ちのおかげで、『この論理の流れで大丈夫か』という不安を毎日払拭することができました。予備校では『良い小論文とは何か』がぼんやりしていたけど、佐藤塾では『なぜそれはSFCに評価されるのか』という理由まで理解できた。」
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Testimony 3: Yさん */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#C5A059]/10 border-2 border-[#C5A059]">
                    <span className="text-lg font-bold text-[#C5A059]">Y</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-slate-800">Yさん（高3現役・SFC総合政策学部合格）</h3>
                    <p className="text-sm text-[#800000] font-semibold">AO入試・ポートフォリオ対策コース</p>
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed italic border-l-4 border-[#C5A059] pl-4 py-2">
                    「『何もない』と思っていた自分の経験も、塾長との壁打ちを通じて『立派な研究テーマになり得る』ことが分かった。面接でも『あ、この人は自分の思考過程を大事にしている人だな』と評価官に伝わったと思う。」
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Testimony 4: 保護者 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#C5A059]/10 border-2 border-[#C5A059]">
                    <span className="text-lg font-bold text-[#C5A059]">P</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-slate-800">保護者（Oさんの母）</h3>
                    <p className="text-sm text-[#800000] font-semibold">AO入試対策コース利用</p>
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed italic border-l-4 border-[#C5A059] pl-4 py-2">
                    「親からすると『本当に合格できるのか』という不安がありました。ただ、塾長との面談を通じて『この先生は単に合格させるのではなく、この子の人生を応援しているんだな』という信頼が生まれました。結果として娘も親も、プレッシャーをポジティブなエネルギーに変えられた。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-[#002147] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            次は、あなたの番です。
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            「今の自分で本当に合格できるのか」「何から始めればいいのか」——その不安や迷い、まずは無料相談で塾長にぶつけてください。
          </p>
          <Link href="/#contact-form">
            <Button className="bg-[#C5A059] hover:bg-[#B38D45] text-white font-bold py-6 px-10 rounded-full text-lg shadow-lg shadow-[#C5A059]/30 transition-all hover:scale-105">
              無料相談に申し込む
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
