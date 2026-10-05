'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import Link from 'next/link'
import { FloatingCTA } from '@/components/ui/floating-cta'

// Section title with Keio blue decorative lines
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-serif tracking-[0.04em] md:tracking-[0.08em] leading-snug text-balance">
        {children}
      </h3>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-serif">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
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
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-200">
          <img
            src="/hero.jpg"
            alt="Keio SFC Campus"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/95 via-[#002147]/90 to-[#002147]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex-1 flex flex-col justify-center pt-24 pb-12">

          {/* Hook Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-white/30 bg-[#002147]/60 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 bg-[#C5A059] animate-pulse"></span>
            <span className="text-sm md:text-base font-bold text-white tracking-[0.2em] font-serif">慶應SFC専門塾</span>
          </div>

          {/* Main Copy */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif tracking-normal sm:tracking-widest leading-tight sm:leading-relaxed text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            偏差値40台、実績ゼロから。<br />
            塾長の泥臭い1on1指導で<span className="sm:hidden"><br /></span><span className="hidden sm:inline"> </span>掴む、<br />
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-[#C5A059] block mt-4 leading-tight tracking-[0.1em]">SFC合格。</span>
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium font-serif animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            合格者の8割が「小論文未経験」「実績ゼロ」からのスタートです。<br className="hidden md:block" />
            無機質なマニュアルやシステムに頼るのではなく、塾長があなた一人ひとりと本気で向き合います。<br className="hidden md:block" />
            2人に1人が合格する圧倒的な実績で、最短距離でSFC合格へ導きます。
          </p>

          {/* Enhanced CTA Area */}
          <div className="mb-16 relative w-full max-w-[540px] mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <div className="relative flex flex-col items-center w-full">
              <div className="mb-4 flex items-center justify-center gap-3 bg-white/5 border border-[#C5A059]/80 px-4 py-4 backdrop-blur-md w-full">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-red-500"></span>
                </span>
                <p className="text-white text-sm sm:text-base font-bold tracking-widest leading-snug text-center font-serif">
                  指導密度を極限まで保つため、<br className="sm:hidden" />今年度の新規受付は<span className="text-[#C5A059] text-lg sm:text-xl ml-2 border-b border-[#C5A059]">残り5名</span>
                </p>
              </div>

              <a href="#contact-form" onClick={handleSmoothScroll} className="w-full block">
                <Button
                  size="lg"
                  className="w-full rounded-none bg-[#800000] hover:bg-[#C5A059] hover:text-[#002147] text-white text-lg md:text-xl font-bold py-8 h-auto transition-colors duration-300 border border-white/20 group"
                >
                  <span className="flex items-center justify-center gap-4 font-serif tracking-widest">
                    無料で個別相談を予約する
                    <span className="text-xl font-serif">→</span>
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="md:hidden flex flex-col items-center justify-center p-6 border border-[#C5A059] bg-[#002147]/50 backdrop-blur-md mb-4">
              <p className="text-xs text-[#C5A059] mb-1 tracking-[0.2em] font-bold uppercase font-serif">2026年度 合格率</p>
              <p className="text-6xl font-bold text-[#C5A059] tracking-tight font-serif">50<span className="text-2xl">%</span></p>
              <p className="text-sm text-white/80 mt-2 font-medium font-serif">(全受験生14名中7名が合格)</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:hidden">
              <div className="flex flex-col items-center justify-center p-4 border border-white/20 bg-white/5 backdrop-blur-md">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium font-serif">2026年度 受講継続率</p>
                <p className="text-4xl font-bold text-white font-serif">93<span className="text-lg ml-0.5">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border border-white/20 bg-white/5 backdrop-blur-md">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium font-serif">6年間累計</p>
                <p className="text-4xl font-bold text-white font-serif">39<span className="text-lg ml-0.5">名</span></p>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-0 border border-white/20 bg-[#002147]/50 backdrop-blur-md">
              <div className="flex flex-col items-center justify-center p-8 border-r border-white/20">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase font-serif">2026年度 受講継続率</p>
                <p className="text-6xl font-bold text-white font-serif">93<span className="text-2xl ml-1">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-10 bg-[#800000]/80 relative z-20 border-r border-white/20">
                <p className="text-xs text-[#C5A059] mb-2 tracking-[0.2em] font-bold uppercase font-serif">2026年度 合格率</p>
                <p className="text-7xl font-bold text-[#C5A059] tracking-tight font-serif">50<span className="text-3xl">%</span></p>
                <p className="text-sm text-white/90 mt-3 font-medium font-serif">(全受験生14名中7名が合格)</p>
              </div>
              <div className="flex flex-col items-center justify-center p-8">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase font-serif">6年間累計</p>
                <p className="text-6xl font-bold text-white font-serif">39<span className="text-2xl ml-1">名</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 pb-8 flex flex-col items-center animate-pulse">
          <span className="text-white/60 text-xs tracking-[0.3em] mb-3 font-medium font-serif">SCROLL</span>
          <div className="w-px h-14 bg-[#C5A059]"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed text-balance">
              なぜ、一般的な塾・学校の対策では、<br className="hidden sm:block" />
              慶應SFCの合格ラインに届かないのか？
            </h2>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          <div className="space-y-12 md:space-y-28">
            <div className="relative">
              <div className="md:hidden absolute -top-4 -left-2 opacity-[0.05] pointer-events-none">
                <span className="text-8xl font-bold text-[#800000] font-serif leading-none">01</span>
              </div>
              <div className="hidden md:flex gap-14">
                <div className="flex-shrink-0 w-32 border-r border-[#E5E7EB] pr-8 text-right">
                  <span className="text-sm font-bold text-[#800000] tracking-[0.2em] block mb-2 font-serif">原因</span>
                  <span className="text-6xl font-bold text-[#800000] font-serif leading-none block">01</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-5">
                    SFC専用の対策になっていない
                  </h3>
                  <p className="text-[#333333] leading-loose text-lg font-serif">
                    学校や普通の塾で教わるのは、どの大学にも使える「一般的な書き方」です。しかしSFCは、自分ならではの視点や考え方を求める特殊な入試のため、ありきたりな回答では合格点に届きません。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000] pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 01</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  SFC専用の対策になっていない
                </h3>
                <p className="text-[#333333] leading-relaxed text-base font-serif">
                  学校や普通の塾で教わるのは、どの大学にも使える「一般的な書き方」です。しかしSFCは、自分ならではの視点や考え方を求める特殊な入試のため、ありきたりな回答では合格点に届きません。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="md:hidden absolute -top-4 -left-2 opacity-[0.05] pointer-events-none">
                <span className="text-8xl font-bold text-[#800000] font-serif leading-none">02</span>
              </div>
              <div className="hidden md:flex gap-14">
                <div className="flex-shrink-0 w-32 border-r border-[#E5E7EB] pr-8 text-right">
                  <span className="text-sm font-bold text-[#800000] tracking-[0.2em] block mb-2 font-serif">原因</span>
                  <span className="text-6xl font-bold text-[#800000] font-serif leading-none block">02</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-5">
                    添削の回数が少なすぎる
                  </h3>
                  <p className="text-[#333333] leading-loose text-lg font-serif">
                    大手塾や学校では、添削が返ってくるまでに1週間ほどかかり、回数にも制限（月4回〜最大12回など）があります。合格には数多くの試行錯誤が欠かせませんが、この「待ち時間」と「回数の少なさ」が成長のスピードを止めてしまいます。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000] pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 02</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  添削の回数が少なすぎる
                </h3>
                <p className="text-[#333333] leading-relaxed text-base font-serif">
                  大手塾は添削が返ってくるまで1週間かかり、回数制限（月4回〜最大12回など）もあります。合格には圧倒的な質の高い試行錯誤が必要なのに、この「待ち時間」と「頻度の低さ」が受験生の成長を止めてしまいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="md:hidden absolute -top-4 -left-2 opacity-[0.05] pointer-events-none">
                <span className="text-8xl font-bold text-[#800000] font-serif leading-none">03</span>
              </div>
              <div className="hidden md:flex gap-14">
                <div className="flex-shrink-0 w-32 border-r border-[#E5E7EB] pr-8 text-right">
                  <span className="text-sm font-bold text-[#800000] tracking-[0.2em] block mb-2 font-serif">原因</span>
                  <span className="text-6xl font-bold text-[#800000] font-serif leading-none block">03</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-5">
                    AO入試と一般入試の「共倒れ」
                  </h3>
                  <p className="text-[#333333] leading-loose text-lg font-serif">
                    AO入試の対策に力を入れれば一般入試の勉強が手薄になり、一般入試に絞ればAO入試という挑戦の機会を失ってしまう。この両立を一人で考えるのは難しく、計画の甘さが合格を遠ざけます。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000] pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 03</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  AO入試と一般入試の「共倒れ」
                </h3>
                <p className="text-[#333333] leading-relaxed text-base font-serif">
                  AO入試の対策に力を入れれば一般入試の勉強が手薄になり、一般入試に絞ればAO入試という挑戦の機会を失ってしまう。この両立を一人で考えるのは難しく、計画の甘さが合格を遠ざけます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Message Section */}
      <section className="py-24 px-4 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center md:justify-start">
              {/* Principal's Profile Photo - エディトリアル */}
              <div className="w-full max-w-[400px] aspect-[4/5] bg-slate-100 border border-slate-300 relative p-2">
                <img
                  src="/og-image.png"
                  alt="佐藤塾 塾長 佐藤颯太"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#800000]" />
                <span className="text-sm font-medium text-[#800000] tracking-[0.2em] font-serif">MESSAGE</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#002147] mb-8 font-serif tracking-[0.08em] leading-snug">
                偏差値40台からの<br />大逆転を、私が直接導く。
              </h3>
              <p className="text-lg text-[#333333] mb-6 leading-relaxed font-serif">
                「もともと文章を書くのが苦手」「すごい実績なんてない」。SFC合格者の8割は、皆さんと同じ不安を抱えてスタートしました。
              </p>
              <p className="text-lg text-[#333333] mb-6 leading-relaxed font-serif">
                エリートしか受からないという誤解を捨ててください。<br />正しい戦略を立て、泥臭く地道に指導を吸収すれば、大逆転は十分に可能です。
              </p>
              <p className="text-lg text-[#333333] mb-8 leading-relaxed font-serif">
                6年間で39名の逆転合格を生み出したノウハウで、あなたの「本当の実力」を引き出します。
              </p>
              <p className="text-xl text-[#800000] mb-10 leading-relaxed font-bold font-serif">
                私が直接、あなたと並走することを約束します。
              </p>
              <div className="border-l-2 border-[#002147] pl-6 py-2">
                <p className="text-lg font-bold text-[#002147] font-serif tracking-wide">
                  総合政策学部卒業生 佐藤颯太
                </p>
                <p className="text-sm text-[#666666] mt-2 font-serif">佐藤塾 塾長</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RE-DESIGNED: Daily Coaching Cycle */}
      <section className="py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionTitle subtitle="「自分にもできるのかな」「今からで間に合うのかな」――そんな不安一つひとつに、塾長が一緒に向き合い、解決していきます。">
            小規模塾だから実現する塾長の手厚い指導。<br className="hidden md:block" />合格に導く佐藤塾メソッド
          </SectionTitle>

          {/* PC版：3x3 グリッドによる絶対に崩れない（被らない）サイクルUI */}
          <div className="relative mt-16 hidden md:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-1 lg:gap-x-3 gap-y-4 lg:gap-y-6 items-stretch max-w-6xl mx-auto">

            {/* --- 1段目 --- */}
            {/* 01 左上 */}
            <div className="bg-white rounded-none p-6 lg:p-8 border border-[#E5E7EB] border-t-4 border-t-[#002147] flex flex-col justify-center relative hover:bg-slate-50 transition-colors h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-4 border-b border-[#E5E7EB] pb-4">
                <div className="text-2xl font-bold text-[#002147] font-serif">01.</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-tight font-serif">いつでも気軽にLINEで提出</h3>
              </div>
              <p className="text-[#333333] text-sm lg:text-base leading-relaxed font-serif">小論文の答案や志望理由書のドラフトが書けたら、スマホからLINEでいつでも提出。回数制限は一切ありません。</p>
            </div>

            {/* 矢印 01 -> 02 */}
            <div className="flex items-center justify-center">
              <span className="text-3xl text-[#C5A059] font-serif">→</span>
            </div>

            {/* 02 右上 */}
            <div className="bg-white rounded-none p-6 lg:p-8 border border-[#E5E7EB] border-t-4 border-t-[#002147] flex flex-col justify-center relative hover:bg-slate-50 transition-colors h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-4 border-b border-[#E5E7EB] pb-4">
                <div className="text-2xl font-bold text-[#002147] font-serif">02.</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-tight font-serif">塾長による超高速・直接添削</h3>
              </div>
              <p className="text-[#333333] text-sm lg:text-base leading-relaxed font-serif">提出後、すべての答案に塾長が直接目を通し、あなたの考え方の癖を丁寧に見抜きます。<strong className="text-[#800000]">24時間以内の超高速フィードバック</strong>で、SFC特有の論理構成を一緒に身につけていきます。</p>
            </div>

            {/* --- 2段目 --- */}
            {/* 矢印 04 -> 01 */}
            <div className="flex items-center justify-center">
              <span className="text-3xl text-[#C5A059] font-serif">↑</span>
            </div>

            {/* 中央：四角い画像＆バッジ */}
            <div className="flex flex-col items-center justify-center w-[220px] lg:w-[340px] mx-auto py-2">
              <div className="w-full aspect-video border border-slate-300 bg-white p-2 relative flex items-center justify-center mb-4">
                <img
                  src="/fv-coaching.jpg"
                  alt="佐藤塾 塾長とのオンライン1on1指導風景"
                  className="w-full h-full object-cover object-center grayscale-[10%]"
                />
              </div>
              <div className="bg-white border border-[#002147] text-[#002147] px-5 lg:px-8 py-2.5 font-bold flex items-center justify-center tracking-[0.2em] text-sm lg:text-base whitespace-nowrap font-serif">
                添削は毎日のように行います
              </div>
            </div>

            {/* 矢印 02 -> 03 */}
            <div className="flex items-center justify-center">
              <span className="text-3xl text-[#C5A059] font-serif">↓</span>
            </div>

            {/* --- 3段目 --- */}
            {/* 04 左下 */}
            <div className="bg-white rounded-none p-6 lg:p-8 border border-[#E5E7EB] border-t-4 border-t-[#002147] flex flex-col justify-center relative hover:bg-slate-50 transition-colors h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-4 border-b border-[#E5E7EB] pb-4">
                <div className="text-2xl font-bold text-[#002147] font-serif">04.</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-tight font-serif">塾長直通ラインで軌道修正</h3>
              </div>
              <p className="text-[#333333] text-sm lg:text-base leading-relaxed font-serif">面談後、次の課題を進める中で迷うことがあれば、いつでも塾長直通のLINEで相談できます。小さな不安もその日のうちに解消し、迷いなく勉強に集中できます。</p>
            </div>

            {/* 矢印 03 -> 04 */}
            <div className="flex items-center justify-center">
              <span className="text-3xl text-[#C5A059] font-serif">←</span>
            </div>

            {/* 03 右下 */}
            <div className="bg-white rounded-none p-6 lg:p-8 border border-[#E5E7EB] border-t-4 border-t-[#800000] flex flex-col justify-center relative hover:bg-slate-50 transition-colors h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-4 border-b border-[#E5E7EB] pb-4">
                <div className="text-2xl font-bold text-[#800000] font-serif">03.</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#800000] leading-tight font-serif">塾長との1on1オンライン指導</h3>
              </div>
              <p className="text-[#333333] text-sm lg:text-base leading-relaxed font-serif">面談を実施し、直近の総括を共有。小論文やAO対策だけでなく、他の教科の学習計画の策定なども行います。</p>
            </div>

          </div>

          {/* スマホ版：縦型タイムライン */}
          <div className="md:hidden relative mt-12 space-y-6 max-w-md mx-auto">
            <div className="bg-white rounded-none p-6 border border-[#E5E7EB] border-l-4 border-l-[#002147] relative z-10">
              <div className="flex items-center gap-4 mb-4 border-b border-[#E5E7EB] pb-2">
                <div className="text-xl font-bold text-[#002147] font-serif">01.</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif">いつでもLINEで提出</h3>
              </div>
              <p className="text-[#333333] text-sm leading-relaxed font-serif">小論文の答案や志望理由書のドラフトが書けたら、スマホからLINEでいつでも提出。回数制限は一切ありません。</p>
            </div>

            <div className="flex justify-center -my-2 relative z-0">
              <span className="text-2xl text-[#C5A059] font-serif">↓</span>
            </div>

            <div className="bg-white rounded-none p-6 border border-[#E5E7EB] border-l-4 border-l-[#002147] relative z-10">
              <div className="flex items-center gap-4 mb-4 border-b border-[#E5E7EB] pb-2">
                <div className="text-xl font-bold text-[#002147] font-serif">02.</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif">塾長による超高速・直接添削</h3>
              </div>
              <p className="text-[#333333] text-sm leading-relaxed font-serif">提出後、すべての答案に塾長が直接目を通し、あなたの考え方の癖を丁寧に見抜きます。<strong className="text-[#800000]">24時間以内の超高速フィードバック</strong>で、SFC特有の論理構成を一緒に身につけていきます。</p>
            </div>

            <div className="flex justify-center -my-2 relative z-0">
              <span className="text-2xl text-[#C5A059] font-serif">↓</span>
            </div>

            <div className="bg-white rounded-none border border-[#E5E7EB] border-l-4 border-l-[#800000] overflow-hidden relative z-10">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 border-b border-[#E5E7EB] pb-2">
                  <div className="text-xl font-bold text-[#800000] font-serif">03.</div>
                  <h3 className="text-lg font-bold text-[#800000] font-serif">塾長との1on1オンライン指導</h3>
                </div>
                <p className="text-[#333333] text-sm leading-relaxed mb-4 font-serif">
                  面談を実施し、直近の総括を共有。小論文やAO対策だけでなく、他の教科の学習計画の策定なども行います。
                </p>
              </div>
              <div className="mx-6 mb-6 aspect-video bg-slate-100 border border-slate-300 p-1 flex items-center justify-center">
                <img src="/fv-coaching.jpg" alt="指導風景" className="w-full h-full object-cover object-center grayscale-[10%]" />
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-0">
              <span className="text-2xl text-[#C5A059] font-serif">↓</span>
            </div>

            <div className="bg-white rounded-none p-6 border border-[#E5E7EB] border-l-4 border-l-[#002147] relative z-10">
              <div className="flex items-center gap-4 mb-4 border-b border-[#E5E7EB] pb-2">
                <div className="text-xl font-bold text-[#002147] font-serif">04.</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif">塾長直通ラインで軌道修正</h3>
              </div>
              <p className="text-[#333333] text-sm leading-relaxed font-serif">面談後、次の課題を進める中で迷うことがあれば、いつでも塾長のLINEに相談可能。小さな不安や相談をその日のうちに解消します。</p>
            </div>

            <div className="flex flex-col items-center mt-12 pt-8 relative z-10 border-t border-[#E5E7EB]">
              <p className="text-[#002147] font-bold text-base sm:text-lg tracking-wide sm:tracking-widest text-center text-balance leading-relaxed font-serif">
                合格まで、このサイクルを <span className="text-[#800000] border-b border-[#800000]">圧倒的密度で反復</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* リアルな添削ビフォーアフター Section */}
      <section className="relative py-28 px-4 bg-white border-b border-[#E5E7EB]">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              「AIには絶対に書けない」<br className="sm:hidden" />
              塾長直筆の泥臭い赤ペン添削
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-4xl mx-auto text-left md:text-center font-serif">
              SFCの教授陣は、ChatGPTが書いたような「どこかで見た綺麗事」を一瞬で見抜きます。<br className="hidden md:block" />
              だからこそ佐藤塾では、<strong className="text-[#800000]">塾長自らがすべての答案に目を通し、あなたの本音と情熱を引き出すために真っ赤になるまで添削</strong>します。
            </p>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          <div className="bg-[#FAF9F6] border border-[#E5E7EB] border-t-4 border-t-[#800000] mt-12">
            <div className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#800000] font-serif mb-8 text-center md:text-left border-b border-[#E5E7EB] pb-4">
                実際の添削事例：思考の「深さ」を限界まで引き出す
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="bg-white p-6 md:p-8 border border-slate-300 relative pt-12">
                  <span className="absolute top-0 left-0 bg-slate-700 text-white text-xs font-bold px-4 py-2 font-serif tracking-widest">生徒の初回答案（Before）</span>
                  <p className="text-[#666666] leading-relaxed text-sm md:text-base mt-2 font-serif">
                    「私は地域の過疎化問題に興味があります。解決のためには、IT技術を活用して遠隔地からでも医療や教育を受けられるようにするべきだと思います。」
                  </p>
                </div>
                
                {/* After */}
                <div className="bg-white p-6 md:p-8 border-2 border-[#800000] relative pt-12">
                  <span className="absolute top-0 left-0 bg-[#800000] text-white text-xs font-bold px-4 py-2 font-serif tracking-widest">塾長の赤ペン添削（After）</span>
                  <p className="text-[#333333] font-medium leading-relaxed text-sm md:text-base mt-2 font-serif">
                    「『IT技術を活用』では抽象的すぎて、SFCの教授には刺さりません。<strong className="text-[#800000] border-b border-dashed border-[#800000]">あなたが実際に足を踏み入れたA町の事例</strong>をベースに、『高齢者が直感的に使えるUIを持った遠隔医療アプリのプロトタイプ提案』まで具体化しましょう。なぜあなたがそれをやるのか、原体験をもっと前面に出してください！」
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-300">
                <p className="text-[#333333] leading-relaxed text-sm md:text-base font-bold font-serif">
                  ※表面的なてにをはの修正はしません。「なぜSFCに行きたいのか」「社会をどう変えたいのか」という根本の問いに、塾長が本気でぶつかります。この圧倒的な熱量と対話の反復こそが、偏差値40台からSFC合格をもたらす唯一の道です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate CTA Section */}
      <section className="py-20 px-4 bg-[#FAF9F6] relative overflow-hidden border-b border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif mb-6 leading-snug">
            「自分に何ができるかわからない」<br className="md:hidden" />と悩んでいませんか？
          </h3>
          <p className="text-base md:text-lg text-[#333333] mb-8 leading-relaxed font-serif">
            実績ゼロからの大逆転は、<strong className="text-[#800000] border-b border-[#800000]">「今の自分を正しく知り、プロと一緒に戦略を立てること」</strong>から始まります。<br className="hidden md:block" />まずは無料相談で、あなたの不安や今の状況をすべて塾長に聞かせてください。
          </p>
          <a href="#contact-form" onClick={handleSmoothScroll}>
            <Button className="w-full max-w-full rounded-none bg-[#800000] hover:bg-[#C5A059] hover:text-[#002147] text-white font-bold px-4 md:px-10 py-6 h-auto text-base md:text-xl transition-colors duration-300 border border-[#800000] whitespace-normal group">
              <span className="flex items-center justify-center gap-4 font-serif tracking-widest">
                まずは無料で塾長に相談する
                <span className="text-xl font-serif">→</span>
              </span>
            </Button>
          </a>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-28 px-4 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              合格までのロードマップ
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto font-serif">
              いつ、何をして合格を掴むか。個人差はありますが、今からの学習ロードマップとしては下記の通りです。
            </p>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          {/* PC版ロードマップ */}
          <div className="hidden lg:block">
            <div className="relative pt-8">
              {/* Horizontal Timeline Line */}
              <div className="absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-[#E5E7EB]" />

              <div className="grid grid-cols-3 gap-10">
                {/* STEP 01: 9月〜10月 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white border border-[#002147] text-[#002147] flex items-center justify-center font-bold text-xl font-serif z-10">
                      01
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#FAF9F6] border border-[#E5E7EB] px-6 py-2">
                      <span className="text-sm font-bold text-[#002147] tracking-widest font-serif">9月〜10月</span>
                    </div>
                  </div>
                  <div className="bg-white p-6 border border-[#E5E7EB] border-t-4 border-t-[#002147] relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#002147] text-xs font-bold px-3 border border-[#002147] tracking-widest">
                      塾長の徹底伴走
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-4 leading-snug text-center border-b border-[#E5E7EB] pb-4">
                      小論文の基本のきを<br />急ピッチで培う
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed font-serif">
                      まずは200文字程度の要約や、自分の意見をまとめる小論文を書いてもらいます。それを塾長が直接添削し、論理の矛盾をなくしながら、SFCならではの<strong className="text-[#800000]">「独自性」</strong>を高めていきます。これを何度も繰り返します。
                    </p>
                  </div>
                </div>

                {/* STEP 02: 11月 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white border border-[#800000] text-[#800000] flex items-center justify-center font-bold text-xl font-serif z-10">
                      02
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#FAF9F6] border border-[#E5E7EB] px-6 py-2">
                      <span className="text-sm font-bold text-[#800000] tracking-widest font-serif">11月</span>
                    </div>
                  </div>
                  <div className="bg-white p-6 border border-[#E5E7EB] border-t-4 border-t-[#800000] relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#800000] text-xs font-bold px-3 border border-[#800000] tracking-widest">
                      塾長の直接指導
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-4 leading-snug text-center border-b border-[#E5E7EB] pb-4">
                      慶應経済学部の過去問を通じて<br />実践能力を培う
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed font-serif">
                      基礎が身についたら、SFCの過去問に入る前に慶應経済の過去問に取り組みます。時間を計るなど本番に近い形で練習し、<strong className="text-[#800000]">実践力</strong>を鍛えます。これがSFCの過去問演習に向けた準備になります。
                    </p>
                  </div>
                </div>

                {/* STEP 03: 12月〜入試 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white border border-[#C5A059] text-[#C5A059] flex items-center justify-center font-bold text-xl font-serif z-10">
                      03
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#FAF9F6] border border-[#E5E7EB] px-6 py-2">
                      <span className="text-sm font-bold text-[#002147] tracking-widest font-serif">12月〜入試</span>
                    </div>
                  </div>
                  <div className="bg-white p-6 border border-[#E5E7EB] border-t-4 border-t-[#C5A059] relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#002147] text-xs font-bold px-3 border border-[#C5A059] tracking-widest">
                      塾長主体
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-4 leading-snug text-center border-b border-[#E5E7EB] pb-4">
                      塾長とともに<br />合格レベルに仕上げていく
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed font-serif">
                      残り約3ヶ月は、慶應SFCの過去問演習に取り組みます。同じ問題でも複数の答案を作り、どんな出題にも対応できる<strong className="text-[#800000]">柔軟性</strong>を身につけていきます。目指すのは、どんな状況でも合格圏内に入れる実力です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* スマホ版ロードマップ */}
          <div className="lg:hidden mt-10">
            <div className="relative max-w-md mx-auto px-4">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[3.25rem] top-4 bottom-10 w-px bg-[#E5E7EB]" />

              {/* STEP 01: 9月〜10月 */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-6 top-2 w-10 h-10 bg-white text-[#002147] border border-[#002147] flex items-center justify-center font-bold text-base font-serif z-10">
                  01
                </div>
                <div className="bg-white p-5 border border-[#E5E7EB] border-l-4 border-l-[#002147]">
                  <div className="flex items-center justify-between mb-3 border-b border-[#E5E7EB] pb-2">
                    <span className="text-[#002147] text-xs font-bold font-serif tracking-widest">塾長の徹底伴走</span>
                    <span className="text-xs font-bold text-[#002147] tracking-wider font-serif">9月〜10月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-2">
                    小論文の基本のきを培う
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed font-serif">
                    まずは200文字程度の要約や、自分の意見をまとめる小論文を書いてもらいます。それを塾長が直接添削し、論理の矛盾をなくしながら、SFCならではの<strong className="text-[#800000]">「独自性」</strong>を高めていきます。これを何度も繰り返します。
                  </p>
                </div>
              </div>

              {/* STEP 02: 11月 */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-6 top-2 w-10 h-10 bg-white text-[#800000] border border-[#800000] flex items-center justify-center font-bold text-base font-serif z-10">
                  02
                </div>
                <div className="bg-white p-5 border border-[#E5E7EB] border-l-4 border-l-[#800000]">
                  <div className="flex items-center justify-between mb-3 border-b border-[#E5E7EB] pb-2">
                    <span className="text-[#800000] text-xs font-bold font-serif tracking-widest">塾長の直接指導</span>
                    <span className="text-xs font-bold text-[#800000] tracking-wider font-serif">11月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-2">
                    慶應経済学部の過去問を通じて実践能力を培う
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed font-serif">
                    基礎が身についたら、SFCの過去問に入る前に慶應経済の過去問に取り組みます。時間を計るなど本番に近い形で練習し、<strong className="text-[#800000]">実践力</strong>を鍛えます。これがSFCの過去問演習に向けた準備になります。
                  </p>
                </div>
              </div>

              {/* STEP 03: 12月〜 */}
              <div className="relative pl-16 pb-4">
                <div className="absolute left-6 top-2 w-10 h-10 bg-white text-[#C5A059] border border-[#C5A059] flex items-center justify-center font-bold text-base font-serif z-10">
                  03
                </div>
                <div className="bg-white p-5 border border-[#E5E7EB] border-l-4 border-l-[#C5A059]">
                  <div className="flex items-center justify-between mb-3 border-b border-[#E5E7EB] pb-2">
                    <span className="text-[#002147] text-xs font-bold font-serif tracking-widest">塾長主体</span>
                    <span className="text-xs font-bold text-[#C5A059] tracking-wider font-serif">12月〜入試</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-2">
                    塾長とともに合格レベルに仕上げていく
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed font-serif">
                    残り約3ヶ月は、慶應SFCの過去問演習に取り組みます。同じ問題でも複数の答案を作り、どんな出題にも対応できる<strong className="text-[#800000]">柔軟性</strong>を身につけていきます。目指すのは、どんな状況でも合格圏内に入れる実力です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              佐藤塾と他塾の比較表
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto font-serif">
              佐藤塾は、授業料のわかりやすさと、圧倒的な指導密度を大切にしています。
            </p>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          <div className="hidden md:block pt-6 overflow-visible border border-slate-300 bg-white">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-left font-bold font-serif text-base tracking-wide bg-[#F3F4F6] text-[#333333] border-r border-[#E5E7EB]">項目</th>
                  <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-[#002147] text-white border-2 border-[#002147] relative">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#002147] text-xs font-bold px-4 py-1 border border-[#002147] tracking-widest">SFC特化</span>
                    佐藤塾
                  </th>
                  <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-white text-[#333333] border-l border-r border-[#E5E7EB]">SFC特化塾</th>
                  <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-[#FAFAFA] text-[#333333]">一般の予備校</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147] font-serif">小論文の添削</td>
                  <td className="p-6 text-center bg-[#F8F9FA] text-[#333333] font-bold font-serif">回数無制限<br /><span className="text-xs text-[#800000] font-normal">（塾長の超高速・直接添削）</span></td>
                  <td className="p-6 text-center bg-white text-[#666666] font-serif">週1〜4回<br /><span className="text-xs">（対面メイン）</span></td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666] font-serif">週1回<br /><span className="text-xs">（学生バイト中心）</span></td>
                </tr>

                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147] font-serif">対策範囲</td>
                  <td className="p-6 text-center bg-[#F8F9FA] text-[#333333] font-bold font-serif"><span className="text-[#800000] font-bold">AO・一般 二刀流</span><br /><span className="text-xs text-[#800000] font-normal">（完全並走）</span></td>
                  <td className="p-6 text-center bg-white text-[#666666] font-serif">AOのみ<br /><span className="text-xs">または別途料金で一般入試も対象</span></td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666] font-serif">一般入試のみ</td>
                </tr>

                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147] font-serif">費用（年間）</td>
                  <td className="p-6 text-center bg-[#F8F9FA] font-serif">
                    <p className="text-lg font-bold text-[#800000]">月額 11.8万円〜</p>
                    <p className="text-xs text-[#800000] mt-1">※講習費・教材費 0円</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666] font-serif">年間 150万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666] font-serif">年間 100万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                </tr>

                <tr>
                  <td className="p-6 font-bold text-[#002147] font-serif">質問・相談</td>
                  <td className="p-6 text-center bg-[#F8F9FA] font-serif">
                    <p className="text-[#800000] font-bold">塾長直通ライン</p>
                    <p className="text-xs text-[#800000] mt-1">24時間いつでも質問可能</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666] font-serif">予約制 / 開校時間内</td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666] font-serif">予約制 / 開校時間内</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:hidden mt-8 pb-6 relative">
            <div className="overflow-x-auto overflow-y-visible border border-slate-300 bg-white mt-6">
              <table className="w-full border-collapse" style={{ minWidth: '420px' }}>
                <thead>
                  <tr>
                    <th className="sticky left-0 z-20 p-3 text-left font-bold text-[#333333] text-[13px] bg-[#F3F4F6] border-r border-[#E5E7EB] font-serif" style={{ minWidth: '90px' }}>項目</th>
                    <th className="p-3 text-center font-bold text-white text-[12px] bg-[#002147] relative font-serif" style={{ minWidth: '80px' }}>佐藤塾</th>
                    <th className="p-3 text-center font-bold text-[#555555] text-[11px] bg-white border-l border-[#E5E7EB] font-serif" style={{ minWidth: '80px' }}>特化塾</th>
                    <th className="p-3 text-center font-bold text-[#555555] text-[11px] bg-[#FAFAFA] border-l border-[#E5E7EB] font-serif" style={{ minWidth: '80px' }}>一般塾</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB] font-serif">小論文添削</td>
                    <td className="p-3 bg-[#F8F9FA] text-center font-serif">
                      <p className="text-[12px] font-bold text-[#800000] leading-snug">回数無制限<br /><span className="text-[10px] text-[#800000] font-normal">（塾長の直接添削）</span></p>
                    </td>
                    <td className="p-3 bg-white text-center text-[11px] text-[#666666] border-l border-[#E5E7EB] font-serif">週1〜4回</td>
                    <td className="p-3 bg-[#FAFAFA] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB] font-serif">週1回</td>
                  </tr>

                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB] font-serif">対策範囲</td>
                    <td className="p-3 bg-[#F8F9FA] text-center font-serif">
                      <p className="text-[12px] font-bold text-[#800000] leading-snug">AO・一般二刀流</p>
                    </td>
                    <td className="p-3 bg-white text-center text-[11px] text-[#666666] border-l border-[#E5E7EB] font-serif">AOのみ</td>
                    <td className="p-3 bg-[#FAFAFA] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB] font-serif">一般のみ</td>
                  </tr>

                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB] font-serif">月額費用</td>
                    <td className="p-3 bg-[#F8F9FA] text-center font-serif">
                      <p className="text-[13px] font-bold text-[#800000]">11.8万〜</p>
                      <p className="text-[10px] text-[#800000]">※講習費0円</p>
                    </td>
                    <td className="p-3 bg-white text-center text-[11px] text-[#666666] border-l border-[#E5E7EB] font-serif">12万〜+講習費</td>
                    <td className="p-3 bg-[#FAFAFA] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB] font-serif">8万〜+講習費</td>
                  </tr>

                  <tr>
                    <td className="sticky left-0 z-20 p-3 pb-6 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB] font-serif">相談対応</td>
                    <td className="p-3 pb-6 bg-[#F8F9FA] text-center font-serif">
                      <p className="text-[12px] font-bold text-[#800000] leading-snug">塾長直通ライン</p>
                    </td>
                    <td className="p-3 pb-6 bg-white text-center text-[11px] text-[#666666] border-l border-[#E5E7EB] font-serif">予約制</td>
                    <td className="p-3 pb-6 bg-[#FAFAFA] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB] font-serif">予約制</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 bg-white border-l-4 border-[#800000] p-5 md:p-6 border border-slate-300">
            <p className="text-sm md:text-base text-[#333333] font-serif">
              <span className="text-[#800000] font-bold">※ 佐藤塾の費用は月額 11.8万円〜。</span>
              講習費、教材費といった追加料金は一切かかりません。他塾のように「合格時には別途〇万円」といった費用も発生しません。
            </p>
          </div>
        </div>
      </section>

      {/* Six Reasons Section */}
      <section className="py-24 px-4 bg-white border-b border-[#E5E7EB]">
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
              <div key={item.num} className="bg-white border border-[#E5E7EB] border-t-4 border-t-[#002147] p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-5 border-b border-[#E5E7EB] pb-4 mb-4">
                  <div className="text-4xl font-bold text-[#C5A059] font-serif tracking-tighter">
                    {item.num}.
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-[#002147] font-serif tracking-wide">{item.title}</h4>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#333333] leading-relaxed font-serif">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="AO入試受験の有無で決められるシンプルなプラン">2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="relative flex flex-col bg-white border border-slate-300 border-t-8 border-t-[#800000]">
              <div className="absolute top-4 right-4 bg-white text-[#800000] border border-[#800000] text-xs font-bold px-3 py-1 font-serif tracking-widest">
                人気No.1
              </div>

              <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-wide text-[#002147]">SFC二刀流<br />AO入試＋一般入試プラン</h4>
              </div>

              <div className="flex-1 flex flex-col p-6 md:p-8">
                <div className="mb-6">
                  <p className="text-[#666666] text-xs mb-1 font-serif">月額料金</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#800000] font-serif">138,000</span>
                    <span className="text-xl font-bold text-[#800000] font-serif">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-1 font-serif">/ 月（税込 151,800円）</p>
                </div>

                <div className="flex items-center gap-3 mb-6 border-b border-[#E5E7EB] pb-4">
                  <span className="text-[#C5A059] font-bold font-serif text-lg">✓</span>
                  <span className="text-sm font-bold text-[#002147] font-serif">追加講習費 0円</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold mt-0.5 font-serif">・</span>
                    <span className="text-sm text-[#333333] font-serif">塾長1on1授業 <span className="font-bold text-[#800000]">週1回</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold mt-0.5 font-serif">・</span>
                    <span className="text-sm text-[#333333] font-serif">小論文・書類の超高速添削 <span className="font-bold text-[#800000]">回数無制限</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold mt-0.5 font-serif">・</span>
                    <span className="text-sm text-[#333333] font-serif">受験戦略立案（AO・一般 二刀流対応）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold mt-0.5 font-serif">・</span>
                    <span className="text-sm text-[#333333] font-serif">英語・数学・情報の学習支援 <span className="font-bold text-[#800000]">学習計画と徹底管理</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#800000] font-bold mt-0.5 font-serif">・</span>
                    <span className="text-sm text-[#333333] font-serif">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-3">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button className="w-full rounded-none bg-[#800000] hover:bg-[#600000] text-white h-14 text-base font-bold font-serif">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course">
                    <Button variant="outline" className="w-full rounded-none border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-12 text-sm font-bold transition-colors duration-300 font-serif">
                      このプランの詳細を確認する
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col bg-white border border-slate-300 border-t-8 border-t-[#002147]">
              <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-wide text-[#002147]">他塾併願者に推奨<br />小論文特化プラン</h4>
              </div>

              <div className="flex-1 flex flex-col p-6 md:p-8">
                <div className="mb-6">
                  <p className="text-[#666666] text-xs mb-1 font-serif">月額料金</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#002147] font-serif">118,000</span>
                    <span className="text-xl font-bold text-[#002147] font-serif">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-1 font-serif">/ 月（税込 129,800円）</p>
                </div>

                <div className="flex items-center gap-3 mb-6 border-b border-[#E5E7EB] pb-4">
                  <span className="text-[#666666] font-bold font-serif text-lg">✓</span>
                  <span className="text-sm font-bold text-[#666666] font-serif">追加講習費 0円</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold mt-0.5 font-serif">・</span>
                    <span className="text-sm text-[#333333] font-serif">塾長1on1授業 <span className="font-bold text-[#002147]">月1回</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold mt-0.5 font-serif">・</span>
                    <span className="text-sm text-[#333333] font-serif">小論文の超高速添削 <span className="font-bold text-[#002147]">回数無制限</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold mt-0.5 font-serif">・</span>
                    <span className="text-sm text-[#333333] font-serif">指導科目 <span className="font-bold text-[#002147]">小論文のみ</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#002147] font-bold mt-0.5 font-serif">・</span>
                    <span className="text-sm text-[#333333] font-serif">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-3">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button variant="outline" className="w-full rounded-none border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-14 text-base font-medium font-serif">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course">
                    <Button variant="outline" className="w-full rounded-none border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-12 text-sm font-bold transition-colors duration-300 font-serif">
                      このプランの詳細を確認する
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white border border-[#E5E7EB] border-l-4 border-l-[#800000] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 border border-[#800000] flex items-center justify-center text-[#800000] font-bold font-serif text-xl">
                !
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-[#002147] mb-2 font-serif">AO入試合格 ＝ 卒業。合格後の費用は一切かかりません。</p>
                <p className="text-sm md:text-base text-[#333333] leading-relaxed font-serif">
                  AO入試合格後は、合格発表日の月末をもって自動退塾（契約終了）となります。だからこそ、親御様も安心してお子さんの受験を応援できます。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white border border-[#E5E7EB] p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 border-r border-[#E5E7EB] pr-4">
                <span className="text-[#800000] font-bold font-serif mt-0.5">✓</span>
                <div>
                  <p className="font-bold text-[#002147] text-sm mb-1 font-serif">入会金＋授業料のみ</p>
                  <p className="text-xs text-[#666666] font-serif">追加講習費や合格祝福金などは一切かかりません。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#800000] font-bold font-serif mt-0.5">✓</span>
                <div>
                  <p className="font-bold text-[#002147] text-sm mb-1 font-serif">月単位でプラン変更可能</p>
                  <p className="text-xs text-[#666666] font-serif">学習進度や状況に応じて、柔軟に対応できます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essay Method Section */}
      <section className="py-20 md:py-24 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto text-center border border-slate-300 p-10 bg-white relative overflow-hidden">
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#002147]/30"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#002147]/30"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#002147]/30"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#002147]/30"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] font-serif mb-8 tracking-wide relative z-10" style={{ wordBreak: 'keep-all' }}>
            佐藤塾の小論文指導とは
          </h2>
          <p className="text-base md:text-lg text-[#333333] leading-relaxed mb-10 max-w-2xl mx-auto font-serif relative z-10">
            慶應SFC合格に欠かせない「問いを立てる力」を、塾長がどのように鍛えているか。合格メソッドの全貌を公開しています。
          </p>
          <Link href="/guide/essay" className="relative z-10">
            <Button className="w-full max-w-full rounded-none bg-[#002147] hover:bg-[#800000] text-white font-bold px-4 md:px-10 py-6 h-auto text-sm md:text-lg transition-colors duration-300 whitespace-normal font-serif">
              小論文学習メソッドの詳細説明はこちら
            </Button>
          </Link>
        </div>
      </section>

      {/* SFC Guides Section */}
      <section className="py-24 px-4" style={{ backgroundColor: '#002147' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-wide mb-6">
              SFC合格のための完全対策ガイド
            </h2>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-serif">
              佐藤塾が積み重ねてきた「小論文」と「AO入試」の攻略メソッドを、すべて無料で公開しています。ぜひ読んでみてください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/guide/essay/articles" className="group block h-full">
              <div className="bg-white rounded-none p-8 h-full border border-white hover:border-[#C5A059] transition-colors duration-300 flex flex-col relative overflow-hidden">
                <div className="absolute -top-4 -right-4 text-7xl font-bold font-serif text-[#002147]/5 select-none">ESSAY</div>
                <h3 className="text-2xl font-bold text-[#002147] font-serif mb-4 group-hover:text-[#800000] transition-colors border-b border-[#E5E7EB] pb-2 relative z-10">
                  小論文 対策ガイド
                </h3>
                <p className="text-[#333333] mb-8 leading-relaxed flex-1 mt-4 font-serif relative z-10">
                  「何を書けばいいかわからない」を抜け出して、SFCの教授をうなずかせる文章の組み立て方と、資料の読み解き方をわかりやすく解説します。
                </p>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto font-serif relative z-10">
                  <span>記事一覧を見る</span>
                  <span className="ml-4 text-xl">→</span>
                </div>
              </div>
            </Link>

            <Link href="/ao-guide" className="group block h-full">
              <div className="bg-white rounded-none p-8 h-full border border-white hover:border-[#C5A059] transition-colors duration-300 flex flex-col relative overflow-hidden">
                <div className="absolute -top-4 -right-4 text-8xl font-bold font-serif text-[#800000]/5 select-none">AO</div>
                <h3 className="text-2xl font-bold text-[#800000] font-serif mb-4 group-hover:text-[#002147] transition-colors border-b border-[#E5E7EB] pb-2 relative z-10">
                  AO入試 対策ガイド
                </h3>
                <p className="text-[#333333] mb-8 leading-relaxed flex-1 mt-4 font-serif relative z-10">
                  目立つ実績がなくても大丈夫。自分だけの研究テーマの見つけ方から、志望理由書やポートフォリオの作り方まで、一つひとつ丁寧に解説します。
                </p>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto font-serif relative z-10">
                  <span>ガイドを見る</span>
                  <span className="ml-4 text-xl">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB] scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <SectionTitle subtitle="「自分の実績や文章力で本当に受かるのか」――その不安、まずはすべて私にぶつけてください。一人ひとりの指導密度を極限まで保つため、今年度の新規受付は残り5名となっております。">
            30秒で申し込み！個別相談を予約する
          </SectionTitle>

          <div className="bg-white border border-slate-300 border-t-8 border-t-[#800000]">
            <div className="p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 border border-[#800000] flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-[#800000] font-serif">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002147] mb-4 font-serif">送信が完了しました！</h3>
                  <p className="text-[#333333] leading-relaxed mb-6 text-lg font-serif">
                    お申し込みいただきありがとうございます。<br />
                    担当者より24時間以内にご連絡いたします。
                  </p>
                  <p className="text-sm text-[#666666] font-serif">
                    ※メールが届かない場合は、迷惑メールフォルダをご確認ください。
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  {formError && (
                    <div className="bg-red-50 border border-red-200 p-4">
                      <p className="text-sm text-red-700 font-medium font-serif">{formError}</p>
                    </div>
                  )}

                  <div className="mb-8 p-6 bg-slate-50 border border-slate-200">
                    <p className="text-sm text-[#333333] font-bold mb-3 font-serif">
                      ※ ご相談者の8割が<span className="text-[#800000] border-b border-[#800000]">「実績ゼロ」「小論文未経験」</span>からのスタートです。現在の実力は一切問いません。
                    </p>
                    <p className="text-sm text-[#333333] font-bold font-serif">
                      ※ 無理な入塾勧誘は一切行いません。まずはSFC受験のプロ（塾長）との壁打ちとしてお気軽にご利用ください。
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif">
                      お名前 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="佐藤塾太郎"
                      className="rounded-none border-border focus:border-[#002147] h-12 font-serif"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif">
                      メールアドレス <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      className="rounded-none border-border focus:border-[#002147] h-12 font-serif"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif">
                      電話番号 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="09012345678"
                      className="rounded-none border-border focus:border-[#002147] h-12 font-serif"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif">
                      ご希望のプラン <span className="text-[#800000]">*</span>
                    </label>
                    <select
                      className="w-full h-12 px-4 border border-border rounded-none bg-white text-foreground focus:border-[#002147] focus:outline-none focus:ring-1 focus:ring-[#002147] font-serif"
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      required
                    >
                      <option value="">プランを選択してください</option>
                      <option value="complete">AO入試＋一般入試：SFC二刀流プラン</option>
                      <option value="basic">小論文のみ：小論文特化プラン</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif">
                      ご質問・ご相談
                    </label>
                    <Textarea
                      placeholder="SFC合格に向けて不安なこと、知りたいことをご自由にお書きください。塾長が直接お答えします。"
                      className="rounded-none border-border focus:border-[#002147] min-h-32 font-serif"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full max-w-full rounded-none bg-[#800000] hover:bg-[#C5A059] hover:text-[#002147] text-white min-h-14 h-auto px-4 py-4 text-sm sm:text-base md:text-lg font-bold leading-snug whitespace-normal transition-colors duration-300 group border border-[#800000]"
                    >
                      <span className="flex items-center justify-center gap-4 font-serif tracking-widest">
                        {isLoading ? '送信中...' : '今すぐ無料で個別相談を予約する'}
                        {!isLoading && <span className="text-xl font-serif">→</span>}
                      </span>
                    </Button>
                    <p className="text-xs text-center text-[#666666] mt-4 font-bold tracking-widest font-serif">
                      ※送信後、24時間以内に担当者よりご連絡いたします
                    </p>
                  </div>

                  <p className="text-xs text-center text-[#999999] pt-2 font-serif">
                    送信いただいた情報は、お客様へのサービス提供のため、安全に管理されます。
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm text-[#800000] font-bold tracking-[0.2em] mb-2 font-serif">まだ不安がある方へ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif">よくある質問（FAQ）</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-[#FAF9F6] border border-[#E5E7EB]">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-slate-50 transition-colors">
                <span className="font-bold text-[#002147] font-serif tracking-wide">
                  パソコンを持っていない、または操作が苦手ですが大丈夫ですか？
                </span>
                <span className="text-[#002147] font-serif text-xl font-bold group-open:hidden">＋</span>
                <span className="text-[#002147] font-serif text-xl font-bold hidden group-open:block">－</span>
              </summary>
              <div className="px-6 pb-6 text-[#333333] leading-relaxed border-t border-[#E5E7EB] pt-4 mt-2 font-serif">
                はい、まったく問題ありません。佐藤塾は<strong>スマートフォン1台</strong>だけで、添削も指導もすべて完結するように作られています。パソコンを持っているかどうかは合否に関係しませんので、安心して始めてください。
              </div>
            </details>

            <details className="group bg-[#FAF9F6] border border-[#E5E7EB]">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-slate-50 transition-colors">
                <span className="font-bold text-[#002147] font-serif tracking-wide">
                  なぜ50%という驚異的な合格率を実現できるのですか？
                </span>
                <span className="text-[#002147] font-serif text-xl font-bold group-open:hidden">＋</span>
                <span className="text-[#002147] font-serif text-xl font-bold hidden group-open:block">－</span>
              </summary>
              <div className="px-6 pb-6 text-[#333333] leading-relaxed border-t border-[#E5E7EB] pt-4 mt-2 font-serif">
                塾長自身が生徒一人ひとりの答案にすべて目を通し、「なぜそう考えたのか？」という根本の問いに本気で向き合うからです。表面的なテクニックに頼らず、SFC合格に必要な「独自性」と「思考力」を地道に引き出すこの指導こそが、実績ゼロからの大逆転を生み出しています。
              </div>
            </details>

            <details className="group bg-[#FAF9F6] border border-[#E5E7EB]">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-slate-50 transition-colors">
                <span className="font-bold text-[#002147] font-serif tracking-wide">
                  入会金はかかりますか？
                </span>
                <span className="text-[#002147] font-serif text-xl font-bold group-open:hidden">＋</span>
                <span className="text-[#002147] font-serif text-xl font-bold hidden group-open:block">－</span>
              </summary>
              <div className="px-6 pb-6 text-[#333333] leading-relaxed border-t border-[#E5E7EB] pt-4 mt-2 font-serif">
                入塾時に入会金として<strong>税込10万円</strong>をいただきます。それ以降は月額料金だけのお支払いで、追加の講習料などは一切かかりません。他塾のように後から追加費用が発生することもないので、安心して始めていただけます。
              </div>
            </details>

            <details className="group bg-[#FAF9F6] border border-[#E5E7EB]">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-slate-50 transition-colors">
                <span className="font-bold text-[#002147] font-serif tracking-wide">
                  途中で他のプランに変更できますか？
                </span>
                <span className="text-[#002147] font-serif text-xl font-bold group-open:hidden">＋</span>
                <span className="text-[#002147] font-serif text-xl font-bold hidden group-open:block">－</span>
              </summary>
              <div className="px-6 pb-6 text-[#333333] leading-relaxed border-t border-[#E5E7EB] pt-4 mt-2 font-serif">
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