'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import Link from 'next/link'
import { FloatingCTA } from '@/components/ui/floating-cta'

// 手書き風マーカーハイライトコンポーネント
function Marker({ children, color = "yellow" }: { children: React.ReactNode, color?: "yellow" | "red" }) {
  const bgColor = color === "yellow" ? "#fef08a" : "#fca5a5";
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-1 left-0 w-full h-[40%] opacity-80 z-0" style={{ backgroundColor: bgColor, transform: 'skewX(-15deg)' }}></span>
    </span>
  )
}

// Section title with Solid Borders
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="inline-block border-4 border-[#002147] bg-white px-8 py-4 shadow-[6px_6px_0px_#C5A059] mb-6 transform -rotate-1">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-snug text-balance">
          {children}
        </h3>
      </div>
      {subtitle && (
        <p className="text-[#333333] mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-serif font-bold">{subtitle}</p>
      )}
    </div>
  )
}

export default function HomeClient() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: ''
  })

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setFormError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'メール送信に失敗しました')
      }

      setIsSubmitted(true)

      // === GA4 コンバージョン（generate_lead）イベント送信 ===
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'Contact',
          event_label: formData.plan || 'No Plan Selected'
        });
      }
      // ===================================================

      setFormData({
        name: '',
        email: '',
        phone: '',
        plan: '',
        message: ''
      })
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'エラーが発生しました')
      console.error('Form submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

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

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://lifeeling.jp/#organization",
        "name": "佐藤塾",
        "url": "https://lifeeling.jp",
        "description": "合格率50.0%を叩き出す慶應SFC（総合政策・環境情報）専門の伴走指導塾。",
        "image": "https://lifeeling.jp/hero.jpg",
        "founder": {
          "@type": "Person",
          "name": "佐藤颯太",
          "jobTitle": "塾長",
          "description": "慶應義塾大学総合政策学部卒業生。6年間で39名のSFC合格者を輩出。"
        },
        "knowsAbout": ["慶應SFC対策", "AO入試小論文", "ロジカルライティング"],
        "priceRange": "¥¥¥"
      },
      {
        "@type": "WebSite",
        "@id": "https://lifeeling.jp/#website",
        "url": "https://lifeeling.jp",
        "name": "佐藤塾 | 慶應SFC特化型指導塾",
        "publisher": { "@id": "https://lifeeling.jp/#organization" }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#333333]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b-8 border-[#002147]">
        <div className="absolute inset-0 bg-slate-200">
          <img
            src="/hero.jpg"
            alt="Keio SFC Campus"
            className="absolute inset-0 w-full h-full object-cover grayscale-[30%] mix-blend-multiply opacity-80"
          />
          <div className="absolute inset-0 bg-[#002147]/80"></div>
          {/* ドットパターンのオーバーレイ */}
          <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex-1 flex flex-col justify-center pt-24 pb-12">

          {/* Hook Badge - ステッカー風 */}
          <div className="inline-block px-6 py-2 bg-[#C5A059] border-2 border-[#002147] shadow-[4px_4px_0px_#002147] mb-8 transform -rotate-2">
            <span className="text-sm md:text-base font-bold text-[#002147] tracking-[0.2em] font-serif">慶應SFC専門塾</span>
          </div>

          {/* Main Copy */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif tracking-normal sm:tracking-widest leading-tight sm:leading-relaxed text-balance drop-shadow-md">
            偏差値40台、実績ゼロから。<br />
            塾長の<Marker color="yellow"><span className="text-[#002147]">泥臭い1on1指導</span></Marker>で掴む、<br />
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-white block mt-6 leading-none tracking-[0.1em] font-black" style={{ WebkitTextStroke: '2px #C5A059', color: 'transparent' }}>SFC合格</span>
          </h1>

          {/* Sub Copy */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-6 max-w-3xl mx-auto mb-12 transform rotate-1">
            <p className="text-base md:text-lg text-white font-bold font-serif leading-relaxed text-left md:text-center">
              合格者の8割が「小論文未経験」「実績ゼロ」からのスタートです。<br />
              無機質なマニュアルやシステムに頼るのではなく、塾長があなた一人ひとりと本気で向き合います。<br />
              <span className="text-[#C5A059]">2人に1人が合格する圧倒的な実績</span>で、最短距離でSFC合格へ導きます。
            </p>
          </div>

          {/* Enhanced CTA Area - ソリッドボタン */}
          <div className="mb-16 relative w-full max-w-[540px] mx-auto">
            <div className="relative flex flex-col items-center w-full">
              <div className="mb-6 bg-white border-4 border-[#800000] px-6 py-3 shadow-[6px_6px_0px_#800000] w-full transform -rotate-1">
                <p className="text-[#002147] text-sm md:text-base font-bold tracking-widest leading-snug text-center font-serif">
                  指導密度を極限まで保つため、<br className="sm:hidden" />今年度の新規受付は <span className="text-[#800000] text-xl md:text-2xl ml-1 border-b-2 border-[#800000]">残り5名</span>
                </p>
              </div>

              <a href="#contact-form" onClick={handleSmoothScroll} className="w-full block">
                <Button
                  size="lg"
                  className="w-full rounded-none bg-[#002147] text-white text-lg md:text-xl font-bold py-8 h-auto border-4 border-[#002147] shadow-[8px_8px_0px_#C5A059] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200 group"
                >
                  <span className="flex items-center justify-center gap-4 font-serif tracking-widest">
                    無料で個別相談を予約する
                    <span className="text-2xl font-serif">→</span>
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Section - 新聞の囲み記事風 */}
          <div className="max-w-4xl mx-auto w-full mt-10">
            <div className="bg-[#FAF9F6] border-4 border-[#002147] p-2">
              <div className="border border-[#002147] p-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:flex-1 border-b-2 md:border-b-0 md:border-r-2 border-[#002147] pb-4 md:pb-0 md:pr-4">
                  <p className="text-xs text-[#800000] font-bold tracking-[0.2em] font-serif mb-1">2026年度 受講継続率</p>
                  <p className="text-4xl font-black text-[#002147] font-serif">93<span className="text-lg"> %</span></p>
                </div>
                <div className="text-center md:flex-[1.5] border-b-2 md:border-b-0 md:border-r-2 border-[#002147] pb-4 md:pb-0 md:pr-4">
                  <p className="text-sm text-[#800000] font-bold tracking-[0.2em] font-serif mb-1">2026年度 合格率</p>
                  <p className="text-6xl md:text-7xl font-black text-[#800000] font-serif">50<span className="text-3xl"> %</span></p>
                  <p className="text-xs text-[#002147] font-bold mt-2">(全受験生14名中7名が合格)</p>
                </div>
                <div className="text-center md:flex-1">
                  <p className="text-xs text-[#800000] font-bold tracking-[0.2em] font-serif mb-1">6年間累計</p>
                  <p className="text-4xl font-black text-[#002147] font-serif">39<span className="text-lg"> 名</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - ノート風背景 */}
      <section className="relative py-28 px-4 bg-white border-b-4 border-[#002147]" style={{ backgroundImage: 'linear-gradient(transparent 95%, #f1f5f9 95%)', backgroundSize: '100% 2rem' }}>
        <div className="relative max-w-4xl mx-auto bg-white/90 p-6 md:p-12 border-2 border-[#002147] shadow-[12px_12px_0px_#002147]">
          <div className="text-center mb-16 border-b-2 border-dashed border-[#002147] pb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed text-balance">
              なぜ、一般的な塾や学校の対策では<br className="hidden sm:block" />
              <Marker>慶應SFCの合格ライン</Marker>に届かないのか？
            </h2>
          </div>

          <div className="space-y-16">
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex-shrink-0 bg-[#800000] text-white font-bold font-serif text-3xl px-4 py-2 border-2 border-[#002147] shadow-[4px_4px_0px_#002147] transform -rotate-3 z-10">
                原因 1
              </div>
              <div className="bg-white border-2 border-[#002147] p-6 shadow-[4px_4px_0px_#E5E7EB] flex-1 mt-[-20px] md:mt-0 pt-10 md:pt-6">
                <h3 className="text-xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                  SFC専用の対策になっていない
                </h3>
                <p className="text-[#333333] leading-loose text-base md:text-lg font-serif font-medium">
                  学校や普通の塾で教わるのは、どの大学にも使える「一般的な書き方」です。しかしSFCは、自分ならではの視点や考え方を求める特殊な入試のため、ありきたりな回答では合格点に届きません。
                </p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex-shrink-0 bg-[#800000] text-white font-bold font-serif text-3xl px-4 py-2 border-2 border-[#002147] shadow-[4px_4px_0px_#002147] transform rotate-2 z-10">
                原因 2
              </div>
              <div className="bg-white border-2 border-[#002147] p-6 shadow-[4px_4px_0px_#E5E7EB] flex-1 mt-[-20px] md:mt-0 pt-10 md:pt-6">
                <h3 className="text-xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                  添削の回数が少なすぎる
                </h3>
                <p className="text-[#333333] leading-loose text-base md:text-lg font-serif font-medium">
                  大手塾では、添削が返ってくるまでに1週間ほどかかり、回数にも制限（月4回など）があります。合格には圧倒的な質の高い試行錯誤が必要なのに、この「待ち時間」が受験生の成長を止めてしまいます。
                </p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex-shrink-0 bg-[#800000] text-white font-bold font-serif text-3xl px-4 py-2 border-2 border-[#002147] shadow-[4px_4px_0px_#002147] transform -rotate-1 z-10">
                原因 3
              </div>
              <div className="bg-white border-2 border-[#002147] p-6 shadow-[4px_4px_0px_#E5E7EB] flex-1 mt-[-20px] md:mt-0 pt-10 md:pt-6">
                <h3 className="text-xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                  AO入試と一般入試の「共倒れ」
                </h3>
                <p className="text-[#333333] leading-loose text-base md:text-lg font-serif font-medium">
                  AO入試の対策に力を入れれば一般入試が手薄になり、一般入試に絞ればAOというチャンスを失う。この両立を一人で考えるのは難しく、計画の甘さが合格を遠ざけます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Message Section - ポラロイド＆便箋風 */}
      <section className="py-24 px-4 bg-[#002147] border-b-8 border-[#C5A059]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            {/* Principal's Profile Photo - ポラロイド風 */}
            <div className="md:col-span-5 relative flex justify-center">
              <div className="bg-white p-4 pb-16 border-2 border-[#333333] shadow-[8px_8px_0px_rgba(0,0,0,0.5)] transform -rotate-3 z-20 max-w-[320px] w-full">
                <div className="aspect-[4/5] bg-slate-200 border border-slate-300 relative overflow-hidden">
                  <img
                    src="/og-image.png"
                    alt="佐藤塾 塾長 佐藤颯太"
                    className="w-full h-full object-cover grayscale-[30%] contrast-125"
                  />
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <p className="font-serif font-bold text-[#002147] tracking-widest text-lg" style={{ fontFamily: '"Caveat", cursive', fontStyle: 'italic' }}>Sota Sato</p>
                </div>
              </div>
            </div>

            {/* Message Text - 原稿用紙/便箋風 */}
            <div className="md:col-span-7 bg-[#FAF9F6] p-8 md:p-12 border-4 border-[#C5A059] relative z-10 mt-[-40px] md:mt-0 md:ml-[-40px]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-bold text-[#800000] tracking-[0.3em] font-serif border-b-2 border-[#800000] pb-1">MESSAGE</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#002147] mb-8 font-serif tracking-[0.08em] leading-snug">
                偏差値40台からの大逆転を、<br />私が直接導く。
              </h3>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed font-serif font-medium">
                「もともと文章を書くのが苦手」「すごい実績なんてない」。SFC合格者の8割は、皆さんと同じ不安を抱えてスタートしました。
              </p>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed font-serif font-medium">
                エリートしか受からないという誤解を捨ててください。<br />正しい戦略を立て、泥臭く地道に指導を吸収すれば、大逆転は十分に可能です。
              </p>
              <p className="text-xl text-[#800000] mb-10 leading-relaxed font-bold font-serif border-l-4 border-[#800000] pl-4 py-2 bg-[#800000]/5">
                私が直接、あなたと並走することを約束します。
              </p>
              <div className="text-right">
                <p className="text-lg font-bold text-[#002147] font-serif tracking-widest">
                  佐藤塾 塾長 佐藤 颯太
                </p>
                <p className="text-xs text-[#666666] mt-1 font-serif">慶應義塾大学 総合政策学部卒業生</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RE-DESIGNED: Daily Coaching Cycle - 切り抜き付箋風 */}
      <section className="py-28 px-4 bg-[#FAF9F6] border-b-4 border-[#002147] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionTitle subtitle="「自分にもできるのかな」「今からで間に合うのかな」――そんな不安一つひとつに、塾長が一緒に向き合い、解決していきます。">
            小規模塾だから実現する塾長の手厚い指導。<br />合格に導く<Marker>佐藤塾メソッド</Marker>
          </SectionTitle>

          {/* PC版：3x3 グリッド */}
          <div className="relative mt-16 hidden md:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-6 items-stretch max-w-5xl mx-auto">

            {/* 01 */}
            <div className="bg-white p-8 border-2 border-[#002147] shadow-[6px_6px_0px_#E5E7EB] flex flex-col justify-center relative transform -rotate-1">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#002147] text-white flex items-center justify-center font-bold text-2xl font-serif rounded-full border-4 border-[#FAF9F6]">1</div>
              <h3 className="text-xl font-bold text-[#002147] mb-4 font-serif mt-2 border-b-2 border-dashed border-[#E5E7EB] pb-2">いつでも気軽にLINEで提出</h3>
              <p className="text-[#333333] text-base leading-relaxed font-serif font-medium">小論文の答案やドラフトが書けたら、スマホからLINEでいつでも提出。回数制限は一切ありません。</p>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-4xl text-[#002147] font-serif font-bold">→</span>
            </div>

            {/* 02 */}
            <div className="bg-[#fef08a]/20 p-8 border-2 border-[#002147] shadow-[6px_6px_0px_#E5E7EB] flex flex-col justify-center relative transform rotate-1">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#002147] text-white flex items-center justify-center font-bold text-2xl font-serif rounded-full border-4 border-[#FAF9F6]">2</div>
              <h3 className="text-xl font-bold text-[#002147] mb-4 font-serif mt-2 border-b-2 border-dashed border-[#E5E7EB] pb-2">塾長による超高速・直接添削</h3>
              <p className="text-[#333333] text-base leading-relaxed font-serif font-medium">すべての答案に塾長が直接目を通し、あなたの考え方の癖を見抜きます。<strong className="text-[#800000]">24時間以内のフィードバック</strong>で論理構成を叩き込みます。</p>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-4xl text-[#002147] font-serif font-bold">↑</span>
            </div>

            {/* 中央 */}
            <div className="flex flex-col items-center justify-center w-[280px] mx-auto py-2">
              <div className="w-full aspect-square border-4 border-[#002147] bg-white p-2 relative flex items-center justify-center mb-6 transform -rotate-2 shadow-[8px_8px_0px_#C5A059]">
                <img
                  src="/fv-coaching.jpg"
                  alt="指導風景"
                  className="w-full h-full object-cover object-center grayscale-[20%] contrast-125"
                />
              </div>
              <div className="bg-[#002147] text-white px-6 py-2 font-bold flex items-center justify-center tracking-widest text-sm whitespace-nowrap font-serif border-2 border-[#002147]">
                圧倒的密度で反復
              </div>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-4xl text-[#002147] font-serif font-bold">↓</span>
            </div>

            {/* 04 */}
            <div className="bg-white p-8 border-2 border-[#002147] shadow-[6px_6px_0px_#E5E7EB] flex flex-col justify-center relative transform rotate-1">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#002147] text-white flex items-center justify-center font-bold text-2xl font-serif rounded-full border-4 border-[#FAF9F6]">4</div>
              <h3 className="text-xl font-bold text-[#002147] mb-4 font-serif mt-2 border-b-2 border-dashed border-[#E5E7EB] pb-2">塾長直通ラインで軌道修正</h3>
              <p className="text-[#333333] text-base leading-relaxed font-serif font-medium">次の課題を進める中で迷うことがあれば、いつでも塾長のLINEに相談可能。小さな不安をその日のうちに解消します。</p>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-4xl text-[#002147] font-serif font-bold">←</span>
            </div>

            {/* 03 */}
            <div className="bg-[#fca5a5]/10 p-8 border-2 border-[#002147] shadow-[6px_6px_0px_#E5E7EB] flex flex-col justify-center relative transform -rotate-1">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#002147] text-white flex items-center justify-center font-bold text-2xl font-serif rounded-full border-4 border-[#FAF9F6]">3</div>
              <h3 className="text-xl font-bold text-[#800000] mb-4 font-serif mt-2 border-b-2 border-dashed border-[#E5E7EB] pb-2">塾長との1on1オンライン指導</h3>
              <p className="text-[#333333] text-base leading-relaxed font-serif font-medium">面談を実施し、直近の総括を共有。小論文やAO対策だけでなく、他の教科の学習計画の策定なども行います。</p>
            </div>

          </div>

          {/* スマホ版 */}
          <div className="md:hidden relative mt-12 space-y-8 max-w-md mx-auto px-2">
            <div className="bg-white p-6 border-2 border-[#002147] shadow-[6px_6px_0px_#E5E7EB] relative">
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-[#002147] text-white flex items-center justify-center font-bold text-xl font-serif rounded-full border-2 border-[#FAF9F6]">1</div>
              <h3 className="text-lg font-bold text-[#002147] font-serif mt-2 mb-2">いつでもLINEで提出</h3>
              <p className="text-[#333333] text-sm leading-relaxed font-serif font-medium">小論文の答案やドラフトが書けたら、スマホからLINEでいつでも提出。回数制限は一切ありません。</p>
            </div>

            <div className="flex justify-center -my-4 relative z-0">
              <span className="text-3xl text-[#002147] font-serif font-bold">↓</span>
            </div>

            <div className="bg-[#fef08a]/20 p-6 border-2 border-[#002147] shadow-[6px_6px_0px_#E5E7EB] relative">
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-[#002147] text-white flex items-center justify-center font-bold text-xl font-serif rounded-full border-2 border-[#FAF9F6]">2</div>
              <h3 className="text-lg font-bold text-[#002147] font-serif mt-2 mb-2">塾長による超高速・直接添削</h3>
              <p className="text-[#333333] text-sm leading-relaxed font-serif font-medium">提出後、すべての答案に塾長が直接目を通し、あなたの考え方の癖を見抜きます。<strong className="text-[#800000]">24時間以内の超高速フィードバック</strong>で論理構成を叩き込みます。</p>
            </div>

            <div className="flex justify-center -my-4 relative z-0">
              <span className="text-3xl text-[#002147] font-serif font-bold">↓</span>
            </div>

            <div className="bg-[#fca5a5]/10 p-6 border-2 border-[#002147] shadow-[6px_6px_0px_#E5E7EB] relative">
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-[#002147] text-white flex items-center justify-center font-bold text-xl font-serif rounded-full border-2 border-[#FAF9F6]">3</div>
              <h3 className="text-lg font-bold text-[#800000] font-serif mt-2 mb-2">塾長との1on1オンライン指導</h3>
              <p className="text-[#333333] text-sm leading-relaxed font-serif font-medium mb-4">面談を実施し、直近の総括を共有。小論文やAO対策だけでなく、他の教科の学習計画づくりもサポートします。</p>
              <div className="aspect-video border-2 border-[#002147] bg-white p-1">
                <img src="/fv-coaching.jpg" alt="指導風景" className="w-full h-full object-cover grayscale-[10%]" />
              </div>
            </div>

            <div className="flex justify-center -my-4 relative z-0">
              <span className="text-3xl text-[#002147] font-serif font-bold">↓</span>
            </div>

            <div className="bg-white p-6 border-2 border-[#002147] shadow-[6px_6px_0px_#E5E7EB] relative">
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-[#002147] text-white flex items-center justify-center font-bold text-xl font-serif rounded-full border-2 border-[#FAF9F6]">4</div>
              <h3 className="text-lg font-bold text-[#002147] font-serif mt-2 mb-2">塾長直通ラインで軌道修正</h3>
              <p className="text-[#333333] text-sm leading-relaxed font-serif font-medium">次の課題を進める中で迷うことがあれば、いつでも塾長のLINEに相談可能。小さな不安や相談をその日のうちに解消します。</p>
            </div>
            
            <div className="text-center pt-8">
               <p className="text-[#002147] font-bold text-lg tracking-widest font-serif border-y-2 border-[#002147] py-3 inline-block">
                圧倒的密度で反復
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* リアルな添削ビフォーアフター Section - 赤ペンノート風 */}
      <section className="relative py-28 px-4 bg-white border-b-4 border-[#002147]">
        <div className="relative max-w-5xl mx-auto">
          <SectionTitle subtitle="SFCの教授陣は、ChatGPTが書いたような「どこかで見た綺麗事」を一瞬で見抜きます。だからこそ佐藤塾では、塾長自らがすべての答案に目を通し、あなたの本音と情熱を引き出すために真っ赤になるまで添削します。">
            「AIには絶対に書けない」<br />塾長直筆の泥臭い赤ペン添削
          </SectionTitle>

          <div className="mt-12 bg-[#FAF9F6] border-2 border-[#002147] shadow-[8px_8px_0px_#002147] p-6 md:p-12 relative">
            {/* テープ風のあしらい */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] opacity-70 transform rotate-1"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-[#002147] font-serif mb-8 text-center border-b-2 border-dashed border-[#002147] pb-4">
              実際の添削事例：思考の「深さ」を限界まで引き出す
            </h3>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* Before */}
              <div className="relative pt-6">
                <div className="absolute top-0 left-0 bg-[#333333] text-white text-xs font-bold px-4 py-1 font-serif tracking-widest border-2 border-[#333333]">生徒の初回答案 (Before)</div>
                <div className="bg-white border-2 border-[#E5E7EB] p-6 pt-10 h-full" style={{ backgroundImage: 'linear-gradient(transparent 90%, #f1f5f9 90%)', backgroundSize: '100% 2rem' }}>
                  <p className="text-[#666666] leading-loose text-base md:text-lg font-serif">
                    私は地域の過疎化問題に興味があります。解決のためには、IT技術を活用して遠隔地からでも医療や教育を受けられるようにするべきだと思います。
                  </p>
                </div>
              </div>
              
              {/* After */}
              <div className="relative pt-6">
                <div className="absolute top-0 left-0 bg-[#800000] text-white text-xs font-bold px-4 py-1 font-serif tracking-widest border-2 border-[#800000] z-10 transform -rotate-2 shadow-[2px_2px_0px_#333333]">塾長の赤ペン添削 (After)</div>
                <div className="bg-white border-2 border-[#800000] p-6 pt-10 h-full shadow-[4px_4px_0px_#800000]/20" style={{ backgroundImage: 'linear-gradient(transparent 90%, #fca5a5 90%)', backgroundSize: '100% 2.5rem' }}>
                  <p className="text-[#002147] font-bold leading-loose text-base md:text-lg font-serif">
                    「IT技術を活用」では抽象的すぎて、SFCの教授には刺さりません。<strong className="text-[#800000] border-b-2 border-dashed border-[#800000]">あなたが実際に足を踏み入れたA町の事例</strong>をベースに、『高齢者が直感的に使えるUIを持った遠隔医療アプリのプロトタイプ提案』まで具体化しましょう。なぜあなたがそれをやるのか、原体験をもっと前面に出してください！
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t-2 border-[#002147]">
              <p className="text-[#333333] leading-relaxed text-sm md:text-base font-bold font-serif">
                ※表面的なてにをはの修正はしません。「なぜSFCに行きたいのか」「社会をどう変えたいのか」という根本の問いに、塾長が本気でぶつかります。この圧倒的な熱量と対話の反復こそが、偏差値40台からSFC合格をもたらす唯一の道です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section - マスキングテープと手書き風矢印 */}
      <section className="py-28 px-4 bg-[#FAF9F6] border-b-4 border-[#002147]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="いつ、何をして合格を掴むか。個人差はありますが、今からの学習ロードマップとしては下記の通りです。">
            合格までのロードマップ
          </SectionTitle>

          {/* PC版ロードマップ */}
          <div className="hidden lg:block relative mt-12">
            <div className="grid grid-cols-3 gap-8">
              {/* STEP 01 */}
              <div className="bg-white border-2 border-[#002147] p-8 relative shadow-[6px_6px_0px_#002147]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#002147] text-white font-bold px-6 py-1 font-serif tracking-widest text-sm whitespace-nowrap">
                  9月〜10月 : 徹底伴走
                </div>
                <h3 className="text-xl font-bold text-[#002147] font-serif mb-4 mt-4 text-center border-b-2 border-dashed border-[#E5E7EB] pb-4">
                  小論文の基本のきを<br />急ピッチで培う
                </h3>
                <p className="text-[#333333] leading-relaxed font-serif font-medium text-sm">
                  まずは200文字程度の要約や、自分の意見をまとめる小論文を書いてもらいます。塾長が直接添削し、論理の矛盾をなくしながら、SFCならではの<strong className="text-[#800000]">「独自性」</strong>を高めます。
                </p>
              </div>

              {/* STEP 02 */}
              <div className="bg-white border-2 border-[#800000] p-8 relative shadow-[6px_6px_0px_#800000] transform translate-y-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#800000] text-white font-bold px-6 py-1 font-serif tracking-widest text-sm whitespace-nowrap">
                  11月 : 直接指導
                </div>
                <h3 className="text-xl font-bold text-[#002147] font-serif mb-4 mt-4 text-center border-b-2 border-dashed border-[#E5E7EB] pb-4">
                  慶應経済の過去問で<br />実践能力を培う
                </h3>
                <p className="text-[#333333] leading-relaxed font-serif font-medium text-sm">
                  基礎が身についたら、SFCの過去問に入る前に慶應経済の過去問に取り組みます。時間を計るなど本番に近い形で練習し、<strong className="text-[#800000]">実践力</strong>を鍛えます。
                </p>
              </div>

              {/* STEP 03 */}
              <div className="bg-white border-2 border-[#C5A059] p-8 relative shadow-[6px_6px_0px_#C5A059] transform translate-y-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#002147] font-bold px-6 py-1 font-serif tracking-widest text-sm whitespace-nowrap">
                  12月〜入試 : 塾長主体
                </div>
                <h3 className="text-xl font-bold text-[#002147] font-serif mb-4 mt-4 text-center border-b-2 border-dashed border-[#E5E7EB] pb-4">
                  塾長とともに<br />合格レベルに仕上げる
                </h3>
                <p className="text-[#333333] leading-relaxed font-serif font-medium text-sm">
                  残り約3ヶ月は慶應SFCの過去問演習です。同じ問題でも複数の答案を作り、どんな出題にも対応できる<strong className="text-[#800000]">柔軟性</strong>を身につけます。どんな状況でも合格圏内に入れる実力を目指します。
                </p>
              </div>
            </div>
          </div>

          {/* スマホ版ロードマップ */}
          <div className="lg:hidden mt-10 space-y-12 px-2">
            {/* STEP 01 */}
            <div className="bg-white border-2 border-[#002147] p-6 relative shadow-[6px_6px_0px_#002147]">
              <div className="absolute -top-3 left-4 bg-[#002147] text-white font-bold px-4 py-1 font-serif tracking-widest text-xs">
                9月〜10月 : 徹底伴走
              </div>
              <h3 className="text-lg font-bold text-[#002147] font-serif mb-3 mt-4">小論文の基本のきを培う</h3>
              <p className="text-[#333333] leading-relaxed font-serif text-sm">
                まずは要約や小論文を書き、塾長が直接添削。論理の矛盾をなくし、SFCの<strong className="text-[#800000]">「独自性」</strong>を高めます。
              </p>
            </div>

            {/* STEP 02 */}
            <div className="bg-white border-2 border-[#800000] p-6 relative shadow-[6px_6px_0px_#800000]">
              <div className="absolute -top-3 left-4 bg-[#800000] text-white font-bold px-4 py-1 font-serif tracking-widest text-xs">
                11月 : 直接指導
              </div>
              <h3 className="text-lg font-bold text-[#002147] font-serif mb-3 mt-4">慶應経済の過去問で実践能力を培う</h3>
              <p className="text-[#333333] leading-relaxed font-serif text-sm">
                SFC過去問の前に慶應経済の過去問に取り組み、本番に近い形で練習し、<strong className="text-[#800000]">実践力</strong>を鍛えます。
              </p>
            </div>

            {/* STEP 03 */}
            <div className="bg-white border-2 border-[#C5A059] p-6 relative shadow-[6px_6px_0px_#C5A059]">
              <div className="absolute -top-3 left-4 bg-[#C5A059] text-[#002147] font-bold px-4 py-1 font-serif tracking-widest text-xs">
                12月〜入試 : 塾長主体
              </div>
              <h3 className="text-lg font-bold text-[#002147] font-serif mb-3 mt-4">塾長とともに合格レベルに仕上げる</h3>
              <p className="text-[#333333] leading-relaxed font-serif text-sm">
                SFCの過去問演習。複数の答案を作り、どんな出題にも対応できる<strong className="text-[#800000]">柔軟性</strong>を身につけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - 新聞比較表風 */}
      <section className="py-28 px-4 bg-white border-b-4 border-[#002147]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="佐藤塾は、授業料のわかりやすさと、圧倒的な指導密度を大切にしています。">
            佐藤塾と他塾の比較表
          </SectionTitle>

          <div className="hidden md:block pt-6 overflow-visible">
            <div className="border-4 border-[#002147] bg-white shadow-[8px_8px_0px_#E5E7EB]">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="p-6 text-left font-bold font-serif text-base tracking-wide bg-[#FAF9F6] text-[#002147] border-b-4 border-r-2 border-[#002147]">比較項目</th>
                    <th className="p-6 text-center font-bold font-serif text-lg tracking-widest bg-[#002147] text-white border-b-4 border-r-2 border-[#002147] relative w-1/3">
                      佐藤塾
                    </th>
                    <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-white text-[#333333] border-b-4 border-r-2 border-[#002147]">SFC特化塾</th>
                    <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-[#FAF9F6] text-[#333333] border-b-4 border-[#002147]">一般の予備校</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-[#002147]">
                    <td className="p-6 font-bold text-[#002147] font-serif border-r-2 border-[#002147] bg-[#FAF9F6]">小論文の添削</td>
                    <td className="p-6 text-center bg-[#fef08a]/20 text-[#002147] font-bold font-serif border-r-2 border-[#002147] text-lg">回数無制限<br /><span className="text-xs text-[#800000] font-normal">（塾長の超高速・直接添削）</span></td>
                    <td className="p-6 text-center bg-white text-[#666666] font-serif border-r-2 border-[#002147]">週1〜4回<br /><span className="text-xs">（対面メイン）</span></td>
                    <td className="p-6 text-center bg-[#FAF9F6] text-[#666666] font-serif">週1回<br /><span className="text-xs">（学生バイト中心）</span></td>
                  </tr>

                  <tr className="border-b-2 border-[#002147]">
                    <td className="p-6 font-bold text-[#002147] font-serif border-r-2 border-[#002147] bg-[#FAF9F6]">対策範囲</td>
                    <td className="p-6 text-center bg-[#fef08a]/20 text-[#002147] font-bold font-serif border-r-2 border-[#002147] text-lg"><Marker>AO・一般 二刀流</Marker><br /><span className="text-xs text-[#800000] font-normal">（完全並走）</span></td>
                    <td className="p-6 text-center bg-white text-[#666666] font-serif border-r-2 border-[#002147]">AOのみ<br /><span className="text-xs">または別途料金</span></td>
                    <td className="p-6 text-center bg-[#FAF9F6] text-[#666666] font-serif">一般入試のみ</td>
                  </tr>

                  <tr className="border-b-2 border-[#002147]">
                    <td className="p-6 font-bold text-[#002147] font-serif border-r-2 border-[#002147] bg-[#FAF9F6]">費用（年間）</td>
                    <td className="p-6 text-center bg-[#fef08a]/20 border-r-2 border-[#002147]">
                      <p className="text-xl font-bold text-[#800000] font-serif">月額 11.8万円〜</p>
                      <p className="text-xs text-[#800000] mt-1 font-bold">※講習費・教材費 0円</p>
                    </td>
                    <td className="p-6 text-center bg-white text-[#666666] font-serif border-r-2 border-[#002147]">年間 150万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                    <td className="p-6 text-center bg-[#FAF9F6] text-[#666666] font-serif">年間 100万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                  </tr>

                  <tr>
                    <td className="p-6 font-bold text-[#002147] font-serif border-r-2 border-[#002147] bg-[#FAF9F6]">質問・相談</td>
                    <td className="p-6 text-center bg-[#fef08a]/20 border-r-2 border-[#002147]">
                      <p className="text-lg font-bold text-[#800000] font-serif">塾長直通ライン</p>
                      <p className="text-xs text-[#800000] mt-1 font-bold">24時間いつでも可能</p>
                    </td>
                    <td className="p-6 text-center bg-white text-[#666666] font-serif border-r-2 border-[#002147]">予約制</td>
                    <td className="p-6 text-center bg-[#FAF9F6] text-[#666666] font-serif">予約制</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* スマホ版 */}
          <div className="md:hidden mt-8 pb-6 relative">
            <div className="overflow-x-auto overflow-y-visible border-4 border-[#002147] bg-white mt-6 shadow-[6px_6px_0px_#E5E7EB]">
              <table className="w-full border-collapse" style={{ minWidth: '460px' }}>
                <thead>
                  <tr>
                    <th className="sticky left-0 z-20 p-4 text-left font-bold text-[#002147] text-sm bg-[#FAF9F6] border-b-4 border-r-2 border-[#002147] font-serif" style={{ minWidth: '100px' }}>項目</th>
                    <th className="p-4 text-center font-bold text-white text-sm bg-[#002147] border-b-4 border-r-2 border-[#002147] font-serif" style={{ minWidth: '110px' }}>佐藤塾</th>
                    <th className="p-4 text-center font-bold text-[#333333] text-xs bg-white border-b-4 border-r-2 border-[#002147] font-serif" style={{ minWidth: '90px' }}>特化塾</th>
                    <th className="p-4 text-center font-bold text-[#333333] text-xs bg-[#FAF9F6] border-b-4 border-[#002147] font-serif" style={{ minWidth: '90px' }}>一般塾</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-[#002147]">
                    <td className="sticky left-0 z-20 p-4 font-bold text-[#002147] text-sm bg-[#FAF9F6] border-r-2 border-[#002147] font-serif">小論文添削</td>
                    <td className="p-4 bg-[#fef08a]/20 text-center border-r-2 border-[#002147]">
                      <p className="text-sm font-bold text-[#002147] font-serif">回数無制限</p>
                      <p className="text-[10px] text-[#800000] font-serif leading-tight mt-1">塾長の直接添削</p>
                    </td>
                    <td className="p-4 bg-white text-center text-xs text-[#666666] border-r-2 border-[#002147] font-serif">週1〜4回</td>
                    <td className="p-4 bg-[#FAF9F6] text-center text-xs text-[#666666] font-serif">週1回</td>
                  </tr>

                  <tr className="border-b-2 border-[#002147]">
                    <td className="sticky left-0 z-20 p-4 font-bold text-[#002147] text-sm bg-[#FAF9F6] border-r-2 border-[#002147] font-serif">対策範囲</td>
                    <td className="p-4 bg-[#fef08a]/20 text-center border-r-2 border-[#002147]">
                      <p className="text-sm font-bold text-[#002147] font-serif">AO・一般二刀流</p>
                    </td>
                    <td className="p-4 bg-white text-center text-xs text-[#666666] border-r-2 border-[#002147] font-serif">AOのみ</td>
                    <td className="p-4 bg-[#FAF9F6] text-center text-xs text-[#666666] font-serif">一般のみ</td>
                  </tr>

                  <tr className="border-b-2 border-[#002147]">
                    <td className="sticky left-0 z-20 p-4 font-bold text-[#002147] text-sm bg-[#FAF9F6] border-r-2 border-[#002147] font-serif">月額費用</td>
                    <td className="p-4 bg-[#fef08a]/20 text-center border-r-2 border-[#002147]">
                      <p className="text-sm font-bold text-[#800000] font-serif">11.8万〜</p>
                      <p className="text-[10px] text-[#800000] font-bold font-serif mt-1">※講習費0円</p>
                    </td>
                    <td className="p-4 bg-white text-center text-xs text-[#666666] border-r-2 border-[#002147] font-serif">12万〜<br/>+講習費</td>
                    <td className="p-4 bg-[#FAF9F6] text-center text-xs text-[#666666] font-serif">8万〜<br/>+講習費</td>
                  </tr>

                  <tr>
                    <td className="sticky left-0 z-20 p-4 font-bold text-[#002147] text-sm bg-[#FAF9F6] border-r-2 border-[#002147] font-serif">相談対応</td>
                    <td className="p-4 bg-[#fef08a]/20 text-center border-r-2 border-[#002147]">
                      <p className="text-sm font-bold text-[#800000] font-serif">塾長直通ライン</p>
                    </td>
                    <td className="p-4 bg-white text-center text-xs text-[#666666] border-r-2 border-[#002147] font-serif">予約制</td>
                    <td className="p-4 bg-[#FAF9F6] text-center text-xs text-[#666666] font-serif">予約制</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 bg-white border-2 border-[#002147] p-5 md:p-6 shadow-[4px_4px_0px_#E5E7EB]">
            <p className="text-sm md:text-base text-[#333333] font-serif font-medium">
              <strong className="text-[#800000]">※ 佐藤塾の費用は月額 11.8万円〜。</strong>
              講習費、教材費といった追加料金は一切かかりません。他塾のように「合格時には別途〇万円」といった費用も発生しません。
            </p>
          </div>
        </div>
      </section>

      {/* Six Reasons Section - チケット風 */}
      <section className="py-24 px-4 bg-[#FAF9F6] border-b-4 border-[#002147]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>佐藤塾が選ばれる6つの理由</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'AOと一般二刀流対応', desc: 'どちらの受験方式でも、あるいは両方での受験でも完全サポート' },
              { num: '02', title: '24時間以内の超高速添削', desc: '提出書類や小論文の論理破綻を塾長が瞬時に見抜き、修正時間を短縮' },
              { num: '03', title: '塾長の熱量ある1on1', desc: 'SFC合格の明暗を分ける「独自性」の言語化を塾長が直接指導' },
              { num: '04', title: 'AO合格後の追加費用0円', desc: 'AO合格後は卒業となり自動退塾となります。追加料金は不要' },
              { num: '05', title: 'SFC特化ロジック', desc: '6年間の指導実績に基づく、SFC合格に必要な全てを網羅' },
              { num: '06', title: '通塾ゼロ', desc: '指導も授業もすべてオンライン。通塾時間を勉強に充てられる' },
            ].map((item) => (
              <div key={item.num} className="bg-white border-2 border-[#002147] p-6 shadow-[4px_4px_0px_#002147] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#002147] transition-all flex gap-6">
                <div className="text-4xl md:text-5xl font-black text-[#C5A059] font-serif border-r-2 border-dashed border-[#002147] pr-6 flex items-center">
                  {item.num}
                </div>
                <div className="flex-1 py-1">
                  <h4 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-2">{item.title}</h4>
                  <p className="text-sm text-[#333333] leading-relaxed font-serif font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - クーポン/レシート風 */}
      <section className="py-28 px-4 bg-white border-b-4 border-[#002147]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="AO入試受験の有無で決められるシンプルなプラン">2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-10 items-stretch mt-12">
            
            {/* Plan 1 */}
            <div className="relative flex flex-col bg-white border-4 border-[#800000] shadow-[8px_8px_0px_#800000] transform -rotate-1">
              <div className="absolute -top-4 -right-4 bg-[#C5A059] text-[#002147] border-2 border-[#002147] px-4 py-1 font-bold font-serif tracking-widest shadow-[4px_4px_0px_#002147] z-10">
                人気No.1
              </div>

              <div className="bg-[#800000] border-b-4 border-[#800000] px-6 py-6 text-center">
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-widest text-white">SFC二刀流<br />AO入試＋一般入試プラン</h4>
              </div>

              <div className="flex-1 flex flex-col p-6 md:p-8">
                <div className="mb-6 text-center border-b-2 border-dashed border-[#E5E7EB] pb-6">
                  <p className="text-[#666666] text-sm mb-2 font-serif font-bold tracking-widest">月額料金</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-black text-[#800000] font-serif">138,000</span>
                    <span className="text-xl font-bold text-[#800000] font-serif">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-2 font-serif font-bold">/ 月（税込 151,800円）</p>
                </div>

                <div className="mb-6 text-center bg-[#fef08a]/30 py-2 border-y-2 border-[#C5A059]">
                  <span className="text-base font-bold text-[#002147] font-serif tracking-widest">追加講習費 0円</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1 px-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold font-serif text-lg leading-none">・</span>
                    <span className="text-base text-[#333333] font-serif font-bold">塾長1on1授業 <span className="text-[#800000] border-b border-[#800000]">週1回</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold font-serif text-lg leading-none">・</span>
                    <span className="text-base text-[#333333] font-serif font-bold">超高速・直接添削 <span className="text-[#800000] border-b border-[#800000]">回数無制限</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold font-serif text-lg leading-none">・</span>
                    <span className="text-base text-[#333333] font-serif font-bold">受験戦略立案（AO・一般）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold font-serif text-lg leading-none">・</span>
                    <span className="text-base text-[#333333] font-serif font-bold">英・数・情報の学習計画管理</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold font-serif text-lg leading-none">・</span>
                    <span className="text-base text-[#333333] font-serif font-bold">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button className="w-full rounded-none bg-[#800000] hover:bg-[#C5A059] hover:text-[#002147] text-white h-16 text-lg font-bold font-serif tracking-widest border-2 border-[#800000] transition-colors shadow-[4px_4px_0px_#002147]">
                      このプランで相談を予約
                    </Button>
                  </a>
                  <Link href="/course" className="text-center mt-2">
                    <span className="text-sm font-bold text-[#002147] border-b border-[#002147] font-serif hover:text-[#800000] transition-colors">プランの詳細を確認する</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="relative flex flex-col bg-white border-4 border-[#002147] shadow-[8px_8px_0px_#002147] transform rotate-1">
              <div className="bg-[#FAF9F6] border-b-4 border-[#002147] px-6 py-6 text-center">
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-widest text-[#002147]">他塾併願者に推奨<br />小論文特化プラン</h4>
              </div>

              <div className="flex-1 flex flex-col p-6 md:p-8">
                <div className="mb-6 text-center border-b-2 border-dashed border-[#E5E7EB] pb-6">
                  <p className="text-[#666666] text-sm mb-2 font-serif font-bold tracking-widest">月額料金</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-black text-[#002147] font-serif">118,000</span>
                    <span className="text-xl font-bold text-[#002147] font-serif">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-2 font-serif font-bold">/ 月（税込 129,800円）</p>
                </div>

                <div className="mb-6 text-center bg-slate-100 py-2 border-y-2 border-[#002147]">
                  <span className="text-base font-bold text-[#666666] font-serif tracking-widest">追加講習費 0円</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1 px-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold font-serif text-lg leading-none">・</span>
                    <span className="text-base text-[#333333] font-serif font-bold">塾長1on1授業 <span className="text-[#002147] border-b border-[#002147]">月1回</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold font-serif text-lg leading-none">・</span>
                    <span className="text-base text-[#333333] font-serif font-bold">小論文の超高速添削 <span className="text-[#002147] border-b border-[#002147]">回数無制限</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold font-serif text-lg leading-none">・</span>
                    <span className="text-base text-[#333333] font-serif font-bold">指導科目 <span className="text-[#002147] border-b border-[#002147]">小論文のみ</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold font-serif text-lg leading-none">・</span>
                    <span className="text-base text-[#333333] font-serif font-bold">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button variant="outline" className="w-full rounded-none border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-16 text-lg font-bold font-serif tracking-widest shadow-[4px_4px_0px_#002147] transition-colors">
                      このプランで相談を予約
                    </Button>
                  </a>
                  <Link href="/course" className="text-center mt-2">
                    <span className="text-sm font-bold text-[#666666] border-b border-[#666666] font-serif hover:text-[#002147] transition-colors">プランの詳細を確認する</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#FAF9F6] border-2 border-[#002147] p-6 md:p-10 shadow-[6px_6px_0px_#002147]">
            <p className="text-xl md:text-2xl font-bold text-[#002147] mb-4 font-serif text-center">AO入試合格 ＝ 卒業。<br className="md:hidden" />合格後の費用は一切かかりません。</p>
            <p className="text-base text-[#333333] leading-relaxed font-serif font-medium text-center max-w-3xl mx-auto">
              AO入試合格後は、合格発表日の月末をもって自動退塾（契約終了）となります。だからこそ、親御様も安心してお子さんの受験を応援できます。
            </p>
          </div>
        </div>
      </section>

      {/* Essay Method Section - タイポグラフィ強調 */}
      <section className="py-24 px-4 bg-[#002147] border-b-8 border-[#C5A059]">
        <div className="max-w-4xl mx-auto text-center border-4 border-[#C5A059] p-10 md:p-16 bg-[#002147] relative shadow-[12px_12px_0px_rgba(197,160,89,0.3)]">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-8 tracking-widest leading-snug">
            佐藤塾の小論文指導とは
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto font-serif font-medium tracking-wide">
            慶應SFC合格に欠かせない「問いを立てる力」を、塾長がどのように鍛えているか。合格メソッドの全貌を公開しています。
          </p>
          <Link href="/guide/essay" className="inline-block w-full md:w-auto">
            <Button className="w-full md:w-auto rounded-none bg-[#C5A059] hover:bg-white text-[#002147] font-bold px-12 py-8 h-auto text-lg md:text-xl transition-colors duration-300 font-serif tracking-widest border-2 border-[#C5A059]">
              メソッドの詳細を読む
            </Button>
          </Link>
        </div>
      </section>

      {/* SFC Guides Section */}
      <section className="py-28 px-4 bg-[#FAF9F6] border-b-4 border-[#002147]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002147] font-serif tracking-widest mb-6">
              SFC対策 完全ガイド
            </h2>
            <p className="text-[#333333] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-serif font-medium">
              佐藤塾が積み重ねてきた「小論文」と「AO入試」の攻略メソッドを、すべて無料で公開しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <Link href="/guide/essay/articles" className="group block">
              <div className="bg-white rounded-none p-10 border-2 border-[#002147] shadow-[8px_8px_0px_#002147] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#002147] transition-all h-full flex flex-col relative overflow-hidden">
                <div className="absolute -top-6 -right-6 text-9xl font-black font-serif text-[#002147]/5 select-none tracking-tighter">ESSAY</div>
                <h3 className="text-3xl font-bold text-[#002147] font-serif mb-6 group-hover:text-[#800000] transition-colors border-b-4 border-[#002147] pb-4 inline-block relative z-10 w-fit">
                  小論文 対策
                </h3>
                <p className="text-[#333333] mb-10 leading-relaxed flex-1 font-serif font-medium text-lg relative z-10">
                  「何を書けばいいかわからない」を抜け出して、SFCの教授をうなずかせる文章の組み立て方と、資料の読み解き方を解説します。
                </p>
                <div className="flex items-center justify-between text-[#002147] font-bold font-serif border-t-2 border-dashed border-[#E5E7EB] pt-6 relative z-10">
                  <span className="tracking-widest">記事一覧を読む</span>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>

            <Link href="/ao-guide" className="group block">
              <div className="bg-white rounded-none p-10 border-2 border-[#800000] shadow-[8px_8px_0px_#800000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#800000] transition-all h-full flex flex-col relative overflow-hidden">
                <div className="absolute -bottom-10 -right-6 text-9xl font-black font-serif text-[#800000]/5 select-none tracking-tighter">AO</div>
                <h3 className="text-3xl font-bold text-[#800000] font-serif mb-6 group-hover:text-[#002147] transition-colors border-b-4 border-[#800000] pb-4 inline-block relative z-10 w-fit">
                  AO入試 対策
                </h3>
                <p className="text-[#333333] mb-10 leading-relaxed flex-1 font-serif font-medium text-lg relative z-10">
                  目立つ実績がなくても大丈夫。自分だけの研究テーマの見つけ方から、志望理由書やポートフォリオの作り方まで解説します。
                </p>
                <div className="flex items-center justify-between text-[#800000] font-bold font-serif border-t-2 border-dashed border-[#E5E7EB] pt-6 relative z-10">
                  <span className="tracking-widest">ガイドを読む</span>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-28 px-4 bg-white border-b-8 border-[#002147] scroll-mt-20" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div className="max-w-2xl mx-auto">
          <SectionTitle subtitle="「自分の実績や文章力で本当に受かるのか」――その不安、まずはすべて私にぶつけてください。一人ひとりの指導密度を極限まで保つため、今年度の新規受付は残り5名となっております。">
            30秒で申し込み！<br />個別相談を予約する
          </SectionTitle>

          <div className="bg-white border-4 border-[#002147] shadow-[12px_12px_0px_#002147]">
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 border-4 border-[#800000] flex items-center justify-center mx-auto mb-8 transform -rotate-6">
                    <span className="text-6xl text-[#800000] font-serif font-black">済</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#002147] mb-6 font-serif tracking-widest">送信完了</h3>
                  <p className="text-[#333333] leading-relaxed mb-8 text-lg font-serif font-medium border-y-2 border-dashed border-[#E5E7EB] py-6">
                    お申し込みいただきありがとうございます。<br />
                    担当者より24時間以内にご連絡いたします。
                  </p>
                  <p className="text-sm text-[#666666] font-serif font-bold">
                    ※メールが届かない場合は、迷惑メールフォルダをご確認ください。
                  </p>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleFormSubmit}>
                  {formError && (
                    <div className="bg-red-50 border-2 border-red-500 p-4">
                      <p className="text-sm text-red-700 font-bold font-serif">{formError}</p>
                    </div>
                  )}

                  <div className="mb-10 p-6 bg-[#fef08a]/30 border-2 border-[#002147] transform -rotate-1">
                    <p className="text-sm text-[#002147] font-bold mb-3 font-serif leading-relaxed">
                      ※ ご相談者の8割が<Marker>「実績ゼロ」「小論文未経験」</Marker>からのスタートです。現在の実力は一切問いません。
                    </p>
                    <p className="text-sm text-[#002147] font-bold font-serif leading-relaxed">
                      ※ 無理な入塾勧誘は一切行いません。まずはSFC受験のプロ（塾長）との壁打ちとしてお気軽にご利用ください。
                    </p>
                  </div>

                  <div>
                    <label className="block text-base font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      お名前 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="佐藤塾太郎"
                      className="rounded-none border-2 border-[#E5E7EB] focus:border-[#002147] focus:ring-0 h-14 font-serif text-lg bg-[#FAF9F6]"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-base font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      メールアドレス <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      className="rounded-none border-2 border-[#E5E7EB] focus:border-[#002147] focus:ring-0 h-14 font-serif text-lg bg-[#FAF9F6]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-base font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      電話番号 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="09012345678"
                      className="rounded-none border-2 border-[#E5E7EB] focus:border-[#002147] focus:ring-0 h-14 font-serif text-lg bg-[#FAF9F6]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-base font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      ご希望のプラン <span className="text-[#800000]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full h-14 px-4 border-2 border-[#E5E7EB] rounded-none bg-[#FAF9F6] text-[#333333] focus:border-[#002147] focus:outline-none focus:ring-0 font-serif text-lg appearance-none"
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        required
                      >
                        <option value="">プランを選択してください</option>
                        <option value="complete">AO入試＋一般入試：SFC二刀流プラン</option>
                        <option value="basic">小論文のみ：小論文特化プラン</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#002147]">
                        ▼
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      ご質問・ご相談
                    </label>
                    <Textarea
                      placeholder="SFC合格に向けて不安なこと、知りたいことをご自由にお書きください。塾長が直接お答えします。"
                      className="rounded-none border-2 border-[#E5E7EB] focus:border-[#002147] focus:ring-0 min-h-[160px] font-serif text-lg bg-[#FAF9F6] p-4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="pt-8 border-t-2 border-dashed border-[#E5E7EB]">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full max-w-full rounded-none bg-[#800000] hover:bg-[#C5A059] hover:text-[#002147] text-white min-h-[80px] h-auto px-4 text-xl md:text-2xl font-bold transition-colors duration-300 border-4 border-[#800000] shadow-[8px_8px_0px_#002147]"
                    >
                      <span className="flex items-center justify-center gap-6 font-serif tracking-widest">
                        {isLoading ? '送信中...' : '個別相談を予約する'}
                        {!isLoading && <span className="text-3xl font-serif">→</span>}
                      </span>
                    </Button>
                    <p className="text-sm text-center text-[#002147] mt-6 font-bold tracking-widest font-serif">
                      ※送信後、24時間以内に担当者よりご連絡いたします
                    </p>
                  </div>

                  <p className="text-xs text-center text-[#999999] pt-4 font-serif font-medium">
                    送信いただいた情報は、お客様へのサービス提供のため、安全に管理されます。
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-[#002147]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-[#C5A059] font-bold tracking-[0.3em] mb-4 font-serif">Q & A</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-widest">よくある質問</h2>
          </div>

          <div className="space-y-6">
            <details className="group bg-white border-2 border-white cursor-pointer shadow-[6px_6px_0px_#C5A059]">
              <summary className="flex items-center justify-between p-6 md:p-8 hover:bg-slate-50 transition-colors list-none">
                <span className="font-bold text-[#002147] font-serif tracking-wide text-lg">
                  パソコンを持っていない、または操作が苦手ですが大丈夫ですか？
                </span>
                <span className="text-[#C5A059] font-serif text-3xl font-bold group-open:hidden ml-4">＋</span>
                <span className="text-[#C5A059] font-serif text-3xl font-bold hidden group-open:block ml-4">－</span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-[#333333] leading-relaxed border-t-2 border-dashed border-[#E5E7EB] pt-6 font-serif font-medium text-base">
                はい、まったく問題ありません。佐藤塾は<strong>スマートフォン1台</strong>だけで、添削も指導もすべて完結するように作られています。パソコンを持っているかどうかは合否に関係しませんので、安心して始めてください。
              </div>
            </details>

            <details className="group bg-white border-2 border-white cursor-pointer shadow-[6px_6px_0px_#C5A059]">
              <summary className="flex items-center justify-between p-6 md:p-8 hover:bg-slate-50 transition-colors list-none">
                <span className="font-bold text-[#002147] font-serif tracking-wide text-lg">
                  なぜ50%という驚異的な合格率を実現できるのですか？
                </span>
                <span className="text-[#C5A059] font-serif text-3xl font-bold group-open:hidden ml-4">＋</span>
                <span className="text-[#C5A059] font-serif text-3xl font-bold hidden group-open:block ml-4">－</span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-[#333333] leading-relaxed border-t-2 border-dashed border-[#E5E7EB] pt-6 font-serif font-medium text-base">
                塾長自身が生徒一人ひとりの答案にすべて目を通し、「なぜそう考えたのか？」という根本の問いに本気で向き合うからです。表面的なテクニックに頼らず、SFC合格に必要な「独自性」と「思考力」を地道に引き出すこの指導こそが、実績ゼロからの大逆転を生み出しています。
              </div>
            </details>

            <details className="group bg-white border-2 border-white cursor-pointer shadow-[6px_6px_0px_#C5A059]">
              <summary className="flex items-center justify-between p-6 md:p-8 hover:bg-slate-50 transition-colors list-none">
                <span className="font-bold text-[#002147] font-serif tracking-wide text-lg">
                  入会金はかかりますか？
                </span>
                <span className="text-[#C5A059] font-serif text-3xl font-bold group-open:hidden ml-4">＋</span>
                <span className="text-[#C5A059] font-serif text-3xl font-bold hidden group-open:block ml-4">－</span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-[#333333] leading-relaxed border-t-2 border-dashed border-[#E5E7EB] pt-6 font-serif font-medium text-base">
                入塾時に入会金として<strong>税込10万円</strong>をいただきます。それ以降は月額料金だけのお支払いで、追加の講習料などは一切かかりません。他塾のように後から追加費用が発生することもないので、安心して始めていただけます。
              </div>
            </details>

            <details className="group bg-white border-2 border-white cursor-pointer shadow-[6px_6px_0px_#C5A059]">
              <summary className="flex items-center justify-between p-6 md:p-8 hover:bg-slate-50 transition-colors list-none">
                <span className="font-bold text-[#002147] font-serif tracking-wide text-lg">
                  途中で他のプランに変更できますか？
                </span>
                <span className="text-[#C5A059] font-serif text-3xl font-bold group-open:hidden ml-4">＋</span>
                <span className="text-[#C5A059] font-serif text-3xl font-bold hidden group-open:block ml-4">－</span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-[#333333] leading-relaxed border-t-2 border-dashed border-[#E5E7EB] pt-6 font-serif font-medium text-base">
                はい、<strong>月単位でのプランを変更</strong>できます。学力の伸びや状況に合わせて柔軟に対応できますので、お気軽にご相談ください。
              </div>
            </details>
          </div>
        </div>
      </section>
      <FloatingCTA />
    </div>
  )
}