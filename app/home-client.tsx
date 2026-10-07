'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Check, ArrowRight, PenTool, Target, ArrowDown, ArrowUp, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { FloatingCTA } from '@/components/ui/floating-cta'

// Section title with Keio blue decorative lines
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]/40" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]/40" />
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.04em] md:tracking-[0.08em] leading-snug text-balance">
        {children}
      </h3>
      {subtitle && (
        <p className="text-[#333333] mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]/40" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]/40" />
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
    <div className="min-h-screen bg-[#FAF9F6] text-[#333333]">
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
            className="absolute inset-0 w-full h-full object-cover grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-[#002147]/85"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex-1 flex flex-col justify-center pt-24 pb-12">

          {/* Hook Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-white/30 bg-white/5 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 rounded-full">
            <span className="flex h-2 w-2 bg-[#C5A059] animate-pulse rounded-full"></span>
            <span className="text-sm md:text-base font-bold text-white tracking-[0.1em] font-serif">慶應SFC（総合政策・環境情報）専門塾</span>
          </div>

          {/* Main Copy */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif tracking-normal sm:tracking-wider leading-tight sm:leading-relaxed text-balance drop-shadow-md animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            偏差値40台、実績ゼロからでも。<br />
            塾長が直接寄り添う1on1指導で掴む、<br />
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-[#C5A059] block mt-4 leading-tight">SFC合格。</span>
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium font-serif animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            合格者の8割が「小論文未経験」「実績ゼロ」からのスタートです。<br className="hidden md:block" />
            マニュアル通りの指導ではありません。塾長自身が生徒一人ひとりの個性と本気で向き合い、魅力を引き出します。<br className="hidden md:block" />
            2人に1人が合格する確かな実績で、SFC合格へと導きます。
          </p>

          {/* Enhanced CTA Area */}
          <div className="mb-16 relative w-full max-w-[540px] mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <div className="relative flex flex-col items-center w-full">
              <div className="mb-4 flex items-center justify-center gap-3 bg-white/10 border border-[#C5A059]/40 px-4 py-3 backdrop-blur-md rounded-full w-full">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-red-400 opacity-75 rounded-full"></span>
                  <span className="relative inline-flex h-2 w-2 bg-red-500 rounded-full"></span>
                </span>
                <p className="text-white text-sm sm:text-base font-bold tracking-wider leading-snug text-center font-serif">
                  一人ひとりへの指導の質を守るため、<br className="sm:hidden" />今年度の新規受付は <span className="text-[#C5A059] text-lg sm:text-xl ml-1 border-b border-[#C5A059]">残り5名</span>
                </p>
              </div>

              <a href="#contact-form" onClick={handleSmoothScroll} className="w-full block">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-[#800000] hover:bg-[#C5A059] text-white text-lg md:text-xl font-bold py-7 h-auto transition-colors duration-300 border border-white/20 group shadow-lg"
                >
                  <span className="flex items-center justify-center gap-4 font-serif">
                    無料で個別相談を予約する
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="md:hidden flex flex-col items-center justify-center p-6 border border-[#C5A059]/40 bg-[#002147]/50 backdrop-blur-sm rounded-2xl mb-4">
              <p className="text-xs text-[#C5A059] mb-1 tracking-[0.2em] font-bold uppercase font-serif">2026年度 合格率</p>
              <p className="text-6xl font-bold text-[#C5A059] tracking-tight font-serif">50<span className="text-2xl">%</span></p>
              <p className="text-sm text-white/80 mt-2 font-medium">(全受験生14名中7名が合格)</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:hidden">
              <div className="flex flex-col items-center justify-center p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl h-full">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium font-serif">2026年度 受講継続率</p>
                <p className="text-4xl font-bold text-white font-serif">93<span className="text-lg ml-0.5">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl h-full">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium font-serif">6年間累計</p>
                <p className="text-4xl font-bold text-white font-serif">39<span className="text-lg ml-0.5">名</span></p>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-0 border border-white/20 bg-[#002147]/40 backdrop-blur-md rounded-2xl items-stretch overflow-hidden">
              <div className="flex flex-col items-center justify-center p-8 border-r border-white/20 h-full">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase font-serif">2026年度 受講継続率</p>
                <p className="text-6xl font-bold text-white font-serif">93<span className="text-2xl ml-1">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-10 bg-[#800000]/80 relative z-20 border-r border-white/20 h-full">
                <p className="text-xs text-[#C5A059] mb-2 tracking-[0.2em] font-bold uppercase font-serif">2026年度 合格率</p>
                <p className="text-7xl font-bold text-[#C5A059] tracking-tight font-serif">50<span className="text-3xl">%</span></p>
                <p className="text-sm text-white/90 mt-3 font-medium">(全受験生14名中7名が合格)</p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 h-full">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase font-serif">6年間累計</p>
                <p className="text-6xl font-bold text-white font-serif">39<span className="text-2xl ml-1">名</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 pb-8 flex flex-col items-center animate-pulse">
          <span className="text-white/60 text-xs tracking-[0.3em] mb-3 font-medium font-serif">SCROLL</span>
          <div className="w-px h-12 bg-[#C5A059]/70"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-28 px-4 bg-white border-b border-[#E5E7EB]">
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed text-balance">
              なぜ、一般的な塾や学校の対策では、<br className="hidden sm:block" />
              慶應SFCの合格ラインに届かないのか？
            </h2>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-8" />
          </div>

          <div className="space-y-12 md:space-y-24">
            <div className="relative">
              <div className="md:hidden absolute -top-4 -left-2 opacity-[0.03] pointer-events-none">
                <span className="text-8xl font-bold text-[#800000] font-serif leading-none">01</span>
              </div>
              <div className="hidden md:flex gap-12 items-start">
                <div className="flex-shrink-0 w-28 text-center pt-2">
                  <span className="text-sm font-bold text-[#800000]/60 tracking-widest block mb-1 font-serif">原因</span>
                  <span className="text-7xl font-bold text-[#800000]/20 font-serif leading-none block">01</span>
                </div>
                <div className="border-l border-slate-200 pl-10 py-2 flex-1">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                    SFC専用の対策になっていない
                  </h3>
                  <p className="text-[#333333] leading-relaxed text-lg">
                    学校や一般的な塾で教わるのは、幅広い大学に対応した「標準的な書き方」です。しかし、SFCは受験生ならではの独自の視点や考え方を求める特殊な入試です。そのため、ありきたりな模範解答では合格ラインに届きません。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/30 pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 01</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  SFC専用の対策になっていない
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  学校や一般的な塾で教わるのは、幅広い大学に対応した「標準的な書き方」です。しかし、SFCは受験生ならではの独自の視点や考え方を求める特殊な入試です。そのため、ありきたりな模範解答では合格ラインに届きません。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="md:hidden absolute -top-4 -left-2 opacity-[0.03] pointer-events-none">
                <span className="text-8xl font-bold text-[#800000] font-serif leading-none">02</span>
              </div>
              <div className="hidden md:flex gap-12 items-start">
                <div className="flex-shrink-0 w-28 text-center pt-2">
                  <span className="text-sm font-bold text-[#800000]/60 tracking-widest block mb-1 font-serif">原因</span>
                  <span className="text-7xl font-bold text-[#800000]/20 font-serif leading-none block">02</span>
                </div>
                <div className="border-l border-slate-200 pl-10 py-2 flex-1">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                    添削の回数が少なすぎる
                  </h3>
                  <p className="text-[#333333] leading-relaxed text-lg">
                    大手の塾や予備校では、答案を提出してから返却されるまでに1週間ほどかかることが多く、月の回数制限もあります。小論文の上達には「書いて直す」という試行錯誤が欠かせませんが、この待ち時間が成長の妨げになってしまいます。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/30 pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 02</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  添削の回数が少なすぎる
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  大手の塾や予備校では、答案を提出してから返却されるまでに1週間ほどかかることが多く、月の回数制限もあります。小論文の上達には「書いて直す」という試行錯誤が欠かせませんが、この待ち時間が成長の妨げになってしまいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="md:hidden absolute -top-4 -left-2 opacity-[0.03] pointer-events-none">
                <span className="text-8xl font-bold text-[#800000] font-serif leading-none">03</span>
              </div>
              <div className="hidden md:flex gap-12 items-start">
                <div className="flex-shrink-0 w-28 text-center pt-2">
                  <span className="text-sm font-bold text-[#800000]/60 tracking-widest block mb-1 font-serif">原因</span>
                  <span className="text-7xl font-bold text-[#800000]/20 font-serif leading-none block">03</span>
                </div>
                <div className="border-l border-slate-200 pl-10 py-2 flex-1">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                    AO入試と一般入試の「共倒れ」
                  </h3>
                  <p className="text-[#333333] leading-relaxed text-lg">
                    AO入試の準備に時間をかけすぎると一般入試の勉強が遅れ、逆に一般入試に絞るとAO入試というせっかくのチャンスを逃してしまいます。この2つの両立を一人で計画するのは難しく、中途半端になってしまうケースが少なくありません。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/30 pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 03</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  AO入試と一般入試の「共倒れ」
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  AO入試の準備に時間をかけすぎると一般入試の勉強が遅れ、逆に一般入試に絞るとAO入試というせっかくのチャンスを逃してしまいます。この2つの両立を一人で計画するのは難しく、中途半端になってしまうケースが少なくありません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Message Section */}
      <section className="py-24 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative flex justify-center md:justify-start">
              {/* Principal's Profile Photo - 上品なスタイル */}
              <div className="w-full max-w-[360px] aspect-[4/5] bg-white border border-slate-200 p-2 shadow-sm rounded-xl">
                <img
                  src="/og-image.png"
                  alt="佐藤塾 塾長 佐藤颯太"
                  className="w-full h-full object-cover grayscale-[15%] rounded-lg"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-[#800000]/50" />
                <span className="text-sm font-bold text-[#800000] tracking-[0.2em] font-serif">MESSAGE</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002147] mb-8 font-serif tracking-[0.05em] leading-snug">
                偏差値40台からでも遅くない。<br />私と一緒に合格を掴みましょう。
              </h3>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed">
                「もともと文章を書くのが得意なわけじゃない」「誇れるような実績もない」。SFCに合格した先輩たちの多くも、最初は同じような不安を抱えていました。
              </p>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed">
                エリートしか受からない、特別な才能が必要だ、という誤解は捨ててください。<br />正しい戦略を立てて、一つひとつの課題にしっかり向き合えば、大逆転は十分に可能です。
              </p>
              <p className="text-base md:text-lg text-[#333333] mb-8 leading-relaxed">
                6年間で39名の合格者をサポートしてきた経験をもとに、あなたの「本当の魅力」を引き出します。
              </p>
              <p className="text-lg md:text-xl text-[#800000] mb-10 leading-relaxed font-bold font-serif">
                私が直接、最後まで伴走することをお約束します。
              </p>
              <div className="border-l-2 border-[#002147] pl-5 py-1">
                <p className="text-lg font-bold text-[#002147] font-serif tracking-wide">
                  総合政策学部卒業生 佐藤颯太
                </p>
                <p className="text-sm text-[#666666] mt-1 font-serif">佐藤塾 塾長</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RE-DESIGNED: Daily Coaching Cycle */}
      <section className="py-28 px-4 bg-white border-b border-[#E5E7EB] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionTitle subtitle="「自分にもできるのかな」「今からで間に合うのかな」――そんな不安一つひとつに、塾長が丁寧に寄り添い、一緒に解決していきます。">
            小規模塾だから実現できる手厚いサポート。<br className="hidden md:block" />合格へ導く佐藤塾の指導サイクル
          </SectionTitle>

          {/* PC版：3x3 グリッドによる絶対に崩れない（被らない）サイクルUI */}
          <div className="relative mt-16 hidden md:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-4 lg:gap-x-8 gap-y-8 items-stretch max-w-5xl mx-auto">

            {/* --- 1段目 --- */}
            {/* 01 左上 */}
            <div className="bg-[#FAF9F6] border border-slate-200 p-8 flex flex-col relative h-full rounded-2xl">
              <div className="flex items-center gap-4 mb-5 border-b border-slate-200 pb-4">
                <div className="text-2xl font-bold text-[#002147] font-serif">01.</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-tight font-serif">いつでも気軽にLINEで提出</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">小論文の答案や志望理由書が書けたら、スマートフォンからLINEでいつでも提出できます。回数に制限はありません。</p>
              </div>
            </div>

            {/* 矢印 01 -> 02 */}
            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-[#C5A059]/60" />
            </div>

            {/* 02 右上 */}
            <div className="bg-[#FAF9F6] border border-slate-200 p-8 flex flex-col relative h-full rounded-2xl">
              <div className="flex items-center gap-4 mb-5 border-b border-slate-200 pb-4">
                <div className="text-2xl font-bold text-[#002147] font-serif">02.</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-tight font-serif">迅速で丁寧な直接添削</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">すべての答案に塾長自身が目を通し、あなたの考え方の癖や改善点を丁寧に見抜きます。<strong className="text-[#800000]">提出から24時間以内にフィードバック</strong>をお返しし、SFC特有の論理的な文章力を一緒に身につけていきます。</p>
              </div>
            </div>

            {/* --- 2段目 --- */}
            {/* 矢印 04 -> 01 */}
            <div className="flex items-center justify-center">
              <ArrowUp className="w-8 h-8 text-[#C5A059]/60" />
            </div>

            {/* 中央：四角い画像＆バッジ */}
            <div className="flex flex-col items-center justify-center w-[240px] lg:w-[320px] mx-auto py-4">
              <div className="w-full aspect-video border border-slate-200 bg-white p-1 relative flex items-center justify-center mb-4 rounded-xl">
                <img
                  src="/fv-coaching.jpg"
                  alt="佐藤塾 塾長とのオンライン1on1指導風景"
                  className="w-full h-full object-cover object-center grayscale-[10%] rounded-lg"
                />
              </div>
              <div className="bg-white border border-[#002147] text-[#002147] px-6 lg:px-8 py-2.5 font-bold flex items-center justify-center tracking-widest text-sm lg:text-base whitespace-nowrap font-serif w-full rounded-full">
                対話と添削を何度も繰り返す
              </div>
            </div>

            {/* 矢印 02 -> 03 */}
            <div className="flex items-center justify-center">
              <ArrowDown className="w-8 h-8 text-[#C5A059]/60" />
            </div>

            {/* --- 3段目 --- */}
            {/* 04 左下 */}
            <div className="bg-[#FAF9F6] border border-slate-200 p-8 flex flex-col relative h-full rounded-2xl">
              <div className="flex items-center gap-4 mb-5 border-b border-slate-200 pb-4">
                <div className="text-2xl font-bold text-[#002147] font-serif">04.</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-tight font-serif">塾長直通の相談ライン</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">課題を進める中でわからないことや迷うことがあれば、いつでも塾長のLINEへ相談できます。小さな不安もすぐに解消し、勉強に集中できる環境を整えます。</p>
              </div>
            </div>

            {/* 矢印 03 -> 04 */}
            <div className="flex items-center justify-center">
              <ArrowLeft className="w-8 h-8 text-[#C5A059]/60" />
            </div>

            {/* 03 右下 */}
            <div className="bg-[#FAF9F6] border border-slate-200 p-8 flex flex-col relative h-full rounded-2xl">
              <div className="flex items-center gap-4 mb-5 border-b border-slate-200 pb-4">
                <div className="text-2xl font-bold text-[#800000] font-serif">03.</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#800000] leading-tight font-serif">塾長との1on1オンライン指導</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">週に1回程度の面談を実施し、直近の学習を振り返ります。小論文やAO対策の進捗確認だけでなく、英語や数学など他教科の学習計画づくりも一緒にサポートします。</p>
              </div>
            </div>

          </div>

          {/* スマホ版：縦型タイムライン */}
          <div className="md:hidden relative mt-12 space-y-4 max-w-md mx-auto">
            {/* 01 */}
            <div className="bg-[#FAF9F6] border border-slate-200 p-6 relative z-10 flex flex-col rounded-xl">
              <div className="flex items-center gap-4 mb-3 border-b border-slate-200 pb-3">
                <div className="text-xl font-bold text-[#002147] font-serif">01.</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif">いつでもLINEで提出</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">小論文の答案や志望理由書が書けたら、スマートフォンからLINEでいつでも提出できます。回数に制限はありません。</p>
              </div>
            </div>

            <div className="flex justify-center py-1 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 02 */}
            <div className="bg-[#FAF9F6] border border-slate-200 p-6 relative z-10 flex flex-col rounded-xl">
              <div className="flex items-center gap-4 mb-3 border-b border-slate-200 pb-3">
                <div className="text-xl font-bold text-[#002147] font-serif">02.</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif">迅速で丁寧な直接添削</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">すべての答案に塾長自身が目を通し、あなたの考え方の癖や改善点を丁寧に見抜きます。<strong className="text-[#800000]">提出から24時間以内にフィードバック</strong>をお返しし、SFC特有の論理的な文章力を一緒に身につけていきます。</p>
              </div>
            </div>

            <div className="flex justify-center py-1 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 03 */}
            <div className="bg-white border-2 border-[#800000]/20 relative z-10 flex flex-col rounded-xl overflow-hidden">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-4 mb-3 border-b border-slate-100 pb-3">
                  <div className="text-xl font-bold text-[#800000] font-serif">03.</div>
                  <h3 className="text-lg font-bold text-[#800000] font-serif">塾長との1on1オンライン指導</h3>
                </div>
                <p className="text-[#333333] text-sm leading-relaxed">
                  週に1回程度の面談を実施し、直近の学習を振り返ります。小論文やAO対策の進捗確認だけでなく、英語や数学など他教科の学習計画づくりも一緒にサポートします。
                </p>
              </div>
              <div className="mx-6 mb-6 aspect-video bg-slate-100 flex items-center justify-center border border-slate-200 p-1 rounded-lg">
                <img src="/fv-coaching.jpg" alt="指導風景" className="w-full h-full object-cover object-center rounded" />
              </div>
            </div>

            <div className="flex justify-center py-1 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 04 */}
            <div className="bg-[#FAF9F6] border border-slate-200 p-6 relative z-10 flex flex-col rounded-xl">
              <div className="flex items-center gap-4 mb-3 border-b border-slate-200 pb-3">
                <div className="text-xl font-bold text-[#002147] font-serif">04.</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif">塾長直通の相談ライン</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">課題を進める中でわからないことや迷うことがあれば、いつでも塾長のLINEへ相談できます。小さな不安もすぐに解消し、勉強に集中できる環境を整えます。</p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-10 pt-6 relative z-10 border-t border-slate-200">
              <p className="text-[#002147] font-bold text-base tracking-widest text-center text-balance leading-relaxed font-serif">
                対話と添削を何度も繰り返す
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* リアルな添削ビフォーアフター Section */}
      <section className="relative py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              AIには見抜けない一人ひとりの個性。<br className="sm:hidden" />
              塾長直筆の丁寧な赤ペン添削
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-4xl mx-auto text-left md:text-center">
              SFCの教授陣は、表面的な知識をまとめただけの文章をすぐに見抜きます。<br className="hidden md:block" />
              だからこそ佐藤塾では、<strong className="text-[#800000]">塾長自らがすべての答案を読み込み、あなたの本音と情熱を引き出すために何度でも添削</strong>を行います。
            </p>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-8" />
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl mt-12 shadow-sm">
            <div className="p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-[#002147] font-serif mb-10 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
                <PenTool className="w-5 h-5 text-[#002147]" />
                実際の添削事例：思考を深め、自分だけの言葉を見つける
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Before */}
                <div className="bg-[#FAF9F6] p-8 border border-slate-200 rounded-xl relative pt-12 flex flex-col h-full">
                  <span className="absolute top-0 left-0 bg-slate-500 text-white text-xs font-bold px-4 py-2 tracking-widest font-serif rounded-tl-xl rounded-br-lg">生徒の初回答案（Before）</span>
                  <div className="flex-1">
                    <p className="text-[#666666] leading-loose text-base mt-2">
                      「私は地域の過疎化問題に興味があります。解決のためには、IT技術を活用して遠隔地からでも医療や教育を受けられるようにするべきだと思います。」
                    </p>
                  </div>
                </div>
                
                {/* After */}
                <div className="bg-white p-8 border-2 border-[#800000]/20 rounded-xl relative pt-12 flex flex-col h-full">
                  <span className="absolute top-0 left-0 bg-[#800000] text-white text-xs font-bold px-4 py-2 tracking-widest font-serif rounded-tl-xl rounded-br-lg">塾長の赤ペン添削（After）</span>
                  <div className="flex-1">
                    <p className="text-[#333333] font-medium leading-loose text-base mt-2">
                      「『IT技術を活用』では抽象的すぎて、SFCの教授には刺さりません。<strong className="text-[#800000] border-b border-dashed border-[#800000]/50 pb-0.5">あなたが実際に足を踏み入れたA町の事例</strong>をベースに、『高齢者が直感的に使えるUIを持った遠隔医療アプリのプロトタイプ提案』まで具体化しましょう。なぜあなたがそれをやるのか、原体験をもっと具体的に書いてみましょう！」
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-[#666666] leading-relaxed text-sm font-medium flex items-start gap-3">
                  <span className="text-[#800000] font-bold mt-0.5 font-serif">※</span>
                  <span>単なる「てにをは」の修正で終わらせることはありません。「なぜSFCに行きたいのか」「社会をどう変えたいのか」という根本的な問いに、塾長が本気で向き合います。この対話の積み重ねが、合格への一番の近道です。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate CTA Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden border-b border-[#E5E7EB]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/5 to-[#800000]/5"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif mb-6 leading-snug">
            「自分に何ができるかわからない」<br className="md:hidden" />と悩んでいませんか？
          </h3>
          <p className="text-base md:text-lg text-[#333333] mb-8 leading-relaxed">
            実績ゼロからの大逆転は、<strong className="text-[#800000] border-b border-[#800000]/30 pb-0.5">「今の自分を正しく知り、プロと一緒に戦略を立てること」</strong>から始まります。<br className="hidden md:block" />まずは無料相談で、あなたの不安や現状をすべて私に聞かせてください。
          </p>
          <a href="#contact-form" onClick={handleSmoothScroll}>
            <Button className="w-full max-w-full rounded-full bg-[#800000] hover:bg-[#C5A059] text-white font-bold px-4 md:px-10 py-6 h-auto text-base md:text-xl transition-all duration-300 shadow-md hover:shadow-lg whitespace-normal group">
              <span className="flex items-center gap-3 font-serif">
                まずは無料で個別相談を予約する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
        </div>
      </section>

      {/* Roadmap Section (実績の注入) */}
      <section className="py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              合格までのロードマップ
            </h2>
            <div className="max-w-3xl mx-auto text-left md:text-center">
              <p className="text-base md:text-lg text-[#333333] leading-relaxed mb-4">
                いつ、何をして合格を掴むか。もちろん個人差はありますが、今からの学習ロードマップの目安は以下の通りです。
              </p>
              <div className="bg-white border border-[#C5A059]/40 p-5 md:p-6 shadow-sm inline-block text-left rounded-xl">
                <p className="text-base md:text-lg text-[#333333] leading-relaxed">
                  <strong className="text-[#800000]">例年、秋口（9月〜11月）からのスタートでも多くの生徒が合格を勝ち取っています。</strong><br />
                  昨年度も、9月入塾の中嶋さん、10月入塾の菅原くん、11月入塾の元吉さんなどが、限られた時間の中で見事合格を掴みました。<span className="text-xs text-[#999999] ml-1">[cite: 1]</span>
                </p>
              </div>
            </div>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-10" />
          </div>

          {/* PC版ロードマップ */}
          <div className="hidden lg:block">
            <div className="relative pt-8">
              {/* Horizontal Timeline Line */}
              <div className="absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-[#E5E7EB]" />

              <div className="grid grid-cols-3 gap-8 items-stretch">
                {/* STEP 01: 9月〜10月 */}
                <div className="relative flex flex-col h-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white border border-[#002147] text-[#002147] flex items-center justify-center font-bold text-xl font-serif z-10 rounded-full">
                      01
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#FAF9F6] px-4 py-1">
                      <span className="text-sm font-bold text-[#002147] tracking-widest font-serif">9月〜10月</span>
                    </div>
                  </div>
                  <div className="bg-white p-8 border border-slate-200 border-t-4 border-t-[#002147] rounded-2xl relative flex-1 flex flex-col shadow-sm">
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center border-b border-[#E5E7EB] pb-4">
                      基礎を固め、あなただけの<br />「視点」を見つける
                    </h3>
                    <div className="flex-1">
                      <p className="text-sm text-[#666666] leading-relaxed">
                        まずは短めの要約や小論文に取り組みます。塾長との添削と対話を通じて論理的な文章の型を身につけながら、あなたならではの<strong className="text-[#800000]">「視点」</strong>や<strong className="text-[#800000]">「独自性」</strong>を探していきます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 02: 11月 */}
                <div className="relative flex flex-col h-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white border border-[#002147] text-[#002147] flex items-center justify-center font-bold text-xl font-serif z-10 rounded-full">
                      02
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#FAF9F6] px-4 py-1">
                      <span className="text-sm font-bold text-[#002147] tracking-widest font-serif">11月</span>
                    </div>
                  </div>
                  <div className="bg-white p-8 border border-slate-200 border-t-4 border-t-[#002147] rounded-2xl relative flex-1 flex flex-col shadow-sm">
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center border-b border-[#E5E7EB] pb-4">
                      他学部の過去問を活用し、<br />実践力を養う
                    </h3>
                    <div className="flex-1">
                      <p className="text-sm text-[#666666] leading-relaxed">
                        SFCの過去問へ本格的に入る前に、慶應経済学部などの小論文に取り組みます。時間配分を意識し、本番に近い形式で練習することで、確かな<strong className="text-[#800000]">実践力</strong>を鍛えます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 03: 12月〜入試 */}
                <div className="relative flex flex-col h-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white border border-[#800000] text-[#800000] flex items-center justify-center font-bold text-xl font-serif z-10 rounded-full">
                      03
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#FAF9F6] px-4 py-1">
                      <span className="text-sm font-bold text-[#800000] tracking-widest font-serif">12月〜入試直前</span>
                    </div>
                  </div>
                  <div className="bg-white p-8 border border-[#800000]/30 border-t-4 border-t-[#800000] rounded-2xl relative flex-1 flex flex-col shadow-sm">
                    <h3 className="text-lg font-bold text-[#800000] font-serif mb-4 mt-2 leading-snug text-center border-b border-[#E5E7EB] pb-4">
                      SFCの過去問演習で、<br />どんな出題にも対応できる力を
                    </h3>
                    <div className="flex-1">
                      <p className="text-sm text-[#666666] leading-relaxed">
                        残り期間はSFCの過去問演習に集中します。同じ問題でも切り口を変えて複数の答案を作成し、あらゆるテーマに対応できる<strong className="text-[#800000]">柔軟な思考力</strong>を身につけます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* スマホ版ロードマップ */}
          <div className="lg:hidden mt-10">
            <div className="relative max-w-md mx-auto px-2">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[2.25rem] top-4 bottom-10 w-px bg-[#E5E7EB]" />

              {/* STEP 01: 9月〜10月 */}
              <div className="relative pl-14 pb-10 flex flex-col h-full">
                <div className="absolute left-4 top-2 w-10 h-10 bg-white text-[#002147] border border-[#002147] flex items-center justify-center font-bold text-base font-serif z-10 rounded-full">
                  01
                </div>
                <div className="bg-white p-6 border border-slate-200 border-l-4 border-l-[#002147] rounded-xl flex-1 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-[#002147] tracking-wider font-serif">9月〜10月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-3">
                    基礎を固め、あなただけの「視点」を見つける
                  </h3>
                  <div className="flex-1">
                    <p className="text-sm text-[#666666] leading-relaxed">
                      まずは短めの要約や小論文に取り組みます。塾長の添削を通じて論理的な文章の型を身につけながら、あなたならではの「視点」や「独自性」を探していきます。
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 02: 11月 */}
              <div className="relative pl-14 pb-10 flex flex-col h-full">
                <div className="absolute left-4 top-2 w-10 h-10 bg-white text-[#002147] border border-[#002147] flex items-center justify-center font-bold text-base font-serif z-10 rounded-full">
                  02
                </div>
                <div className="bg-white p-6 border border-slate-200 border-l-4 border-l-[#002147] rounded-xl flex-1 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-[#002147] tracking-wider font-serif">11月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-3">
                    他学部の過去問を活用し、実践力を養う
                  </h3>
                  <div className="flex-1">
                    <p className="text-sm text-[#666666] leading-relaxed">
                      SFCの過去問へ本格的に入る前に、慶應経済学部などの小論文に取り組みます。時間配分を意識し、本番に近い形式で練習することで、確かな実践力を鍛えます。
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 03: 12月〜 */}
              <div className="relative pl-14 pb-4 flex flex-col h-full">
                <div className="absolute left-4 top-2 w-10 h-10 bg-white text-[#800000] border border-[#800000] flex items-center justify-center font-bold text-base font-serif z-10 rounded-full">
                  03
                </div>
                <div className="bg-white p-6 border border-[#800000]/30 border-l-4 border-l-[#800000] rounded-xl flex-1 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-[#800000] tracking-wider font-serif">12月〜入試直前</span>
                  </div>
                  <h3 className="text-base font-bold text-[#800000] font-serif mb-3">
                    SFCの過去問演習で、どんな出題にも対応できる力を
                  </h3>
                  <div className="flex-1">
                    <p className="text-sm text-[#666666] leading-relaxed">
                      残り期間はSFCの過去問演習に集中します。同じ問題でも切り口を変えて複数の答案を作成し、あらゆるテーマに対応できる柔軟な思考力を身につけます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-28 px-4 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              佐藤塾と他塾の比較表
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto">
              佐藤塾は、保護者の方にもご安心いただけるよう、授業料のわかりやすさと、一人ひとりに寄り添う手厚い指導を大切にしています。
            </p>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-8" />
          </div>

          <div className="hidden md:block pt-6 overflow-visible rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-left font-bold font-serif text-base tracking-wide bg-[#FAF9F6] text-[#333333] border-r border-slate-200 w-1/4 rounded-tl-2xl">項目</th>
                  <th className="p-6 text-center font-bold font-serif text-xl tracking-widest bg-[#002147] text-white border-x border-[#002147] relative w-[30%]">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#002147] text-xs font-bold px-4 py-1 border border-[#002147] rounded-full tracking-widest whitespace-nowrap">SFC特化</span>
                    佐藤塾
                  </th>
                  <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-white text-[#666666] border-x border-slate-200">SFC特化塾</th>
                  <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-[#FAF9F6] text-[#666666] rounded-tr-2xl">一般の予備校</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-6 font-bold text-[#002147] font-serif border-r border-slate-200">小論文の添削</td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#002147] font-bold border-x border-[#002147]/10">回数無制限<br /><span className="text-xs text-[#666666] font-normal mt-1 block">（塾長による迅速・丁寧な直接添削）</span></td>
                  <td className="p-6 text-center bg-white text-[#666666] border-x border-slate-200">週1〜4回<br /><span className="text-xs">（対面メイン）</span></td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#666666]">週1回<br /><span className="text-xs">（学生バイト中心）</span></td>
                </tr>

                <tr className="border-b border-slate-200">
                  <td className="p-6 font-bold text-[#002147] font-serif border-r border-slate-200">対策範囲</td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#002147] font-bold border-x border-[#002147]/10"><span className="text-[#800000]">AO・一般 併願対応</span><br /><span className="text-xs text-[#666666] font-normal mt-1 block">（完全伴走）</span></td>
                  <td className="p-6 text-center bg-white text-[#666666] border-x border-slate-200">AOのみ<br /><span className="text-xs">または別途料金</span></td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#666666]">一般入試のみ</td>
                </tr>

                <tr className="border-b border-slate-200">
                  <td className="p-6 font-bold text-[#002147] font-serif border-r border-slate-200">費用（年間）</td>
                  <td className="p-6 text-center bg-[#FAF9F6] border-x border-[#002147]/10">
                    <p className="text-lg font-bold text-[#800000]">月額 11.8万円〜</p>
                    <p className="text-xs text-[#666666] mt-1 font-medium">※講習費・教材費 一切不要</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666] border-x border-slate-200">年間 150万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#666666]">年間 100万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                </tr>

                <tr>
                  <td className="p-6 font-bold text-[#002147] font-serif border-r border-slate-200 rounded-bl-2xl">質問・相談</td>
                  <td className="p-6 text-center bg-[#FAF9F6] border-x border-[#002147]/10">
                    <p className="text-base font-bold text-[#002147]">塾長直通ライン</p>
                    <p className="text-xs text-[#666666] mt-1 font-medium">24時間いつでも可能</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666] border-x border-slate-200">予約制 / 開校時間内</td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#666666] rounded-br-2xl">予約制 / 開校時間内</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:hidden mt-8 pb-6 relative">
            <div className="overflow-x-auto overflow-y-visible border border-slate-200 bg-white mt-6 rounded-xl shadow-sm">
              <table className="w-full border-collapse" style={{ minWidth: '460px' }}>
                <thead>
                  <tr>
                    <th className="sticky left-0 z-20 p-3 text-left font-bold text-[#333333] text-[13px] bg-[#FAF9F6] border-r border-slate-200 font-serif" style={{ minWidth: '90px' }}>項目</th>
                    <th className="p-3 text-center font-bold text-white text-[13px] bg-[#002147] relative font-serif" style={{ minWidth: '100px' }}>佐藤塾</th>
                    <th className="p-3 text-center font-bold text-[#666666] text-xs bg-white border-l border-slate-200 font-serif" style={{ minWidth: '80px' }}>特化塾</th>
                    <th className="p-3 text-center font-bold text-[#666666] text-xs bg-[#FAF9F6] border-l border-slate-200 font-serif" style={{ minWidth: '80px' }}>一般塾</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-slate-200 font-serif">小論文添削</td>
                    <td className="p-3 bg-[#FAF9F6] text-center font-serif">
                      <p className="text-[13px] font-bold text-[#002147] leading-snug">回数無制限</p>
                      <p className="text-[10px] text-[#666666] mt-1 font-normal">塾長の直接添削</p>
                    </td>
                    <td className="p-3 bg-white text-center text-xs text-[#666666] border-l border-slate-200">週1〜4回</td>
                    <td className="p-3 bg-[#FAF9F6] text-center text-xs text-[#666666] border-l border-slate-200">週1回</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-slate-200 font-serif">対策範囲</td>
                    <td className="p-3 bg-[#FAF9F6] text-center font-serif">
                      <p className="text-[13px] font-bold text-[#800000] leading-snug">AO・一般 併願</p>
                    </td>
                    <td className="p-3 bg-white text-center text-xs text-[#666666] border-l border-slate-200">AOのみ</td>
                    <td className="p-3 bg-[#FAF9F6] text-center text-xs text-[#666666] border-l border-slate-200">一般のみ</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-slate-200 font-serif">月額費用</td>
                    <td className="p-3 bg-[#FAF9F6] text-center font-serif">
                      <p className="text-[13px] font-bold text-[#800000]">11.8万〜</p>
                      <p className="text-[10px] text-[#666666] mt-1">※講習費0円</p>
                    </td>
                    <td className="p-3 bg-white text-center text-xs text-[#666666] border-l border-slate-200">12万〜<br/>+講習費</td>
                    <td className="p-3 bg-[#FAF9F6] text-center text-xs text-[#666666] border-l border-slate-200">8万〜<br/>+講習費</td>
                  </tr>

                  <tr>
                    <td className="sticky left-0 z-20 p-3 pb-6 font-bold text-[#002147] text-[13px] bg-white border-r border-slate-200 font-serif">相談対応</td>
                    <td className="p-3 pb-6 bg-[#FAF9F6] text-center font-serif">
                      <p className="text-[13px] font-bold text-[#002147] leading-snug">塾長直通ライン</p>
                    </td>
                    <td className="p-3 pb-6 bg-white text-center text-xs text-[#666666] border-l border-slate-200">予約制</td>
                    <td className="p-3 pb-6 bg-[#FAF9F6] text-center text-xs text-[#666666] border-l border-slate-200">予約制</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 bg-white border-l-4 border-[#002147] p-5 md:p-6 shadow-sm border border-slate-200 rounded-r-xl">
            <p className="text-sm md:text-base text-[#333333] leading-relaxed">
              <strong className="text-[#800000]">※ 佐藤塾の費用は月額 11.8万円〜。</strong><br className="md:hidden" />
              講習費、教材費といった追加料金は一切かかりません。他塾のように「合格時には別途〇万円」といった費用も発生しません。
            </p>
          </div>
        </div>
      </section>

      {/* Six Reasons Section */}
      <section className="py-24 px-4 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>佐藤塾が選ばれる6つの理由</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {[
              { num: '01', title: 'AOと一般の併願対応', desc: 'どちらの受験方式でも、あるいは両方での受験でも総合的にサポートします。' },
              { num: '02', title: '24時間以内の迅速な添削', desc: '提出された書類や小論文の課題を塾長がすぐに見直し、成長のスピードを止めません。' },
              { num: '03', title: '塾長との丁寧な1on1指導', desc: 'SFC合格の鍵となる「あなたらしさ」を言葉にするため、塾長が直接対話します。' },
              { num: '04', title: 'AO合格後の追加費用なし', desc: 'AO入試で合格した場合はその時点で卒業（自動退塾）となり、以降の費用はかかりません。' },
              { num: '05', title: 'SFCに特化した指導ノウハウ', desc: '6年間で培った指導実績をもとに、SFC合格に必要な考え方を網羅しています。' },
              { num: '06', title: '完全オンラインで通塾不要', desc: '指導はすべてオンライン。移動にかかる時間を自分の勉強に充てられます。' },
            ].map((item) => (
              <Card key={item.num} className="bg-white shadow-sm border border-slate-200 rounded-2xl hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
                    <div className="text-3xl font-bold text-[#C5A059] font-serif">
                      {item.num}.
                    </div>
                    <CardTitle className="text-lg md:text-xl font-serif tracking-wide text-[#002147] m-0">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-2">
                  <p className="text-sm md:text-base text-[#666666] leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-28 px-4 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="AO入試を受験するかどうかで選べるシンプルなプラン">2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-12">
            
            {/* Plan 1 */}
            <div className="relative flex flex-col bg-white border border-slate-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-full overflow-hidden">
              <div className="absolute top-6 right-6 bg-[#FAF9F6] text-[#002147] border border-[#002147]/20 px-4 py-1.5 text-xs font-bold font-serif tracking-widest rounded-full z-10">
                人気No.1
              </div>

              <div className="bg-white border-b-2 border-[#002147] px-8 py-10 text-center">
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-wide text-[#002147]">AO・一般 併願プラン</h4>
              </div>

              <div className="flex-1 flex flex-col p-8 md:p-10 bg-[#FAF9F6]">
                <div className="mb-6 text-center border-b border-slate-200 pb-8">
                  <p className="text-[#666666] text-sm mb-2 font-serif font-bold tracking-widest">月額料金</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-[#800000] font-serif">138,000</span>
                    <span className="text-xl font-bold text-[#800000] font-serif">円</span>
                  </div>
                  <p className="text-sm text-[#666666] mt-2 font-serif">（税込 151,800円）</p>
                </div>

                <div className="mb-8 text-center bg-white py-3 rounded-xl border border-[#002147]/10">
                  <span className="text-sm font-bold text-[#002147] font-serif">追加講習費・教材費 一切不要</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1 px-2">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333] font-medium">塾長1on1授業 <span className="font-bold">週1回</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333] font-medium">丁寧な直接添削 <span className="font-bold">回数無制限</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333] font-medium">受験戦略立案（AO・一般）</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333] font-medium">英・数・情報の学習計画管理</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333] font-medium">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button className="w-full rounded-xl bg-[#800000] hover:bg-[#C5A059] text-white h-16 text-base md:text-lg font-bold font-serif tracking-widest transition-colors shadow-md">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course" className="text-center mt-2">
                    <span className="text-sm font-bold text-[#666666] border-b border-[#E5E7EB] pb-1 hover:text-[#002147] transition-colors">プランの詳細を確認する</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="relative flex flex-col bg-white border border-slate-200 shadow-sm h-full rounded-3xl overflow-hidden">
              <div className="bg-white border-b-2 border-slate-100 px-8 py-10 text-center">
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-wide text-[#666666]">一般入試 特化プラン</h4>
              </div>

              <div className="flex-1 flex flex-col p-8 md:p-10 bg-white">
                <div className="mb-6 text-center border-b border-slate-100 pb-8">
                  <p className="text-[#999999] text-sm mb-2 font-serif font-bold tracking-widest">月額料金</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-[#666666] font-serif">118,000</span>
                    <span className="text-xl font-bold text-[#666666] font-serif">円</span>
                  </div>
                  <p className="text-sm text-[#999999] mt-2 font-serif">（税込 129,800円）</p>
                </div>

                <div className="mb-8 text-center bg-[#FAF9F6] py-3 rounded-xl border border-slate-200">
                  <span className="text-sm font-bold text-[#666666] font-serif">追加講習費・教材費 一切不要</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1 px-2">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] mt-2 flex-shrink-0 opacity-40" />
                    <span className="text-base text-[#666666] font-medium">塾長1on1授業 <span className="font-bold text-[#333333]">月1回</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] mt-2 flex-shrink-0 opacity-40" />
                    <span className="text-base text-[#666666] font-medium">丁寧な直接添削 <span className="font-bold text-[#333333]">回数無制限</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] mt-2 flex-shrink-0 opacity-40" />
                    <span className="text-base text-[#666666] font-medium">指導科目 <span className="font-bold text-[#333333]">小論文のみ</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] mt-2 flex-shrink-0 opacity-40" />
                    <span className="text-base text-[#666666] font-medium">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button variant="outline" className="w-full rounded-xl border-2 border-[#002147]/20 text-[#002147] hover:border-[#002147] hover:bg-transparent h-16 text-base md:text-lg font-bold font-serif tracking-widest transition-colors">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course" className="text-center mt-2">
                    <span className="text-sm font-bold text-[#999999] border-b border-[#E5E7EB] pb-1 hover:text-[#002147] transition-colors">プランの詳細を確認する</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#FAF9F6] border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#002147]/20 flex items-center justify-center bg-white">
              <span className="text-xl font-serif font-bold text-[#002147]">!</span>
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="text-lg md:text-xl font-bold text-[#002147] mb-3 font-serif">AO入試で合格した場合は、その時点で卒業となります。</p>
              <p className="text-sm md:text-base text-[#666666] leading-relaxed font-medium">
                AO入試合格後は、合格発表日の月末をもって自動退塾（契約終了）となります。合格後の不要な費用は一切かかりませんので、保護者の方も安心してお子様の受験を応援していただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Essay Method Section */}
      <section className="py-20 md:py-24 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto text-center border border-slate-200 p-10 md:p-16 bg-white rounded-3xl shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif mb-6 tracking-wide" style={{ wordBreak: 'keep-all' }}>
            佐藤塾の小論文指導とは
          </h2>
          <p className="text-sm md:text-base text-[#666666] leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            慶應SFC合格に欠かせない「問いを立てる力」を、塾長がどのように鍛えているか。合格メソッドの全貌を公開しています。
          </p>
          <Link href="/guide/essay" className="inline-block w-full md:w-auto">
            <Button className="w-full md:w-auto rounded-full bg-white text-[#002147] font-bold px-10 py-6 h-auto text-sm md:text-base transition-colors duration-300 font-serif tracking-widest border border-[#002147] hover:bg-[#002147] hover:text-white">
              小論文学習メソッドを読む
            </Button>
          </Link>
        </div>
      </section>

      {/* SFC Guides Section */}
      <section className="py-24 px-4" style={{ backgroundColor: '#002147' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-widest mb-6">
              SFC対策 完全ガイド
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
              佐藤塾が積み重ねてきた「小論文」と「AO入試」の攻略メソッドを、すべて無料で公開しています。ぜひ読んでみてください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Link href="/guide/essay/articles" className="group block h-full">
              <div className="bg-white/5 rounded-3xl border border-white/20 p-8 md:p-10 hover:border-[#C5A059] hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white font-serif mb-4 group-hover:text-[#C5A059] transition-colors border-b border-white/20 pb-4 inline-block w-fit">
                  小論文 対策ガイド
                </h3>
                <div className="flex-1">
                  <p className="text-white/70 mb-8 leading-relaxed text-sm font-medium mt-4">
                    「何を書けばいいかわからない」を抜け出して、SFCの教授をうなずかせる文章の組み立て方と、資料の読み解き方を解説します。
                  </p>
                </div>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto font-serif text-sm tracking-widest">
                  <span>記事一覧を読む</span>
                  <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/ao-guide" className="group block h-full">
              <div className="bg-white/5 rounded-3xl border border-white/20 p-8 md:p-10 hover:border-[#C5A059] hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white font-serif mb-4 group-hover:text-[#C5A059] transition-colors border-b border-white/20 pb-4 inline-block w-fit">
                  AO入試 対策ガイド
                </h3>
                <div className="flex-1">
                  <p className="text-white/70 mb-8 leading-relaxed text-sm font-medium mt-4">
                    目立つ実績がなくても大丈夫。自分だけの研究テーマの見つけ方から、志望理由書やポートフォリオの作り方まで解説します。
                  </p>
                </div>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto font-serif text-sm tracking-widest">
                  <span>ガイドを読む</span>
                  <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB] scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <SectionTitle subtitle="「自分の実績や文章力で本当に受かるのか」――その不安、まずはすべて私にぶつけてください。一人ひとりへの指導の質を守るため、今年度の新規受付は残り5名となっております。">
            無料の個別相談を予約する
          </SectionTitle>

          <div className="bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-[#002147]/5 text-[#002147] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#002147] mb-6 font-serif tracking-widest">送信完了</h3>
                  <p className="text-[#333333] leading-relaxed mb-8 text-base font-medium border-y border-slate-100 py-6">
                    お申し込みいただきありがとうございます。<br />
                    担当者より24時間以内にご連絡いたします。
                  </p>
                  <p className="text-xs text-[#666666] font-bold">
                    ※メールが届かない場合は、迷惑メールフォルダをご確認ください。
                  </p>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleFormSubmit}>
                  {formError && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                      <p className="text-sm text-red-700 font-bold">{formError}</p>
                    </div>
                  )}

                  <div className="mb-10 p-6 bg-[#FAF9F6] border border-slate-200 rounded-xl">
                    <p className="text-sm text-[#002147] font-bold mb-3 leading-relaxed">
                      ※ ご相談者の8割が「実績ゼロ」「小論文未経験」からのスタートです。現在の実力は一切問いません。
                    </p>
                    <p className="text-sm text-[#002147] font-bold leading-relaxed">
                      ※ 無理な入塾勧誘は一切行いません。まずはSFC受験のプロ（塾長）との壁打ちとしてお気軽にご利用ください。
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      お名前 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="佐藤塾太郎"
                      className="rounded-xl border border-slate-300 focus:border-[#002147] focus:ring-0 h-14 font-serif text-base bg-[#FAF9F6]"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      メールアドレス <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      className="rounded-xl border border-slate-300 focus:border-[#002147] focus:ring-0 h-14 font-serif text-base bg-[#FAF9F6]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      電話番号 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="09012345678"
                      className="rounded-xl border border-slate-300 focus:border-[#002147] focus:ring-0 h-14 font-serif text-base bg-[#FAF9F6]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      ご希望のプラン <span className="text-[#800000]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full h-14 px-4 border border-slate-300 rounded-xl bg-[#FAF9F6] text-[#333333] focus:border-[#002147] focus:outline-none focus:ring-0 font-serif text-base appearance-none cursor-pointer"
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        required
                      >
                        <option value="">プランを選択してください</option>
                        <option value="complete">AO入試＋一般入試：SFC二刀流プラン</option>
                        <option value="basic">小論文のみ：小論文特化プラン</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#002147]">
                        <ArrowDown className="w-4 h-4 opacity-50" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3 font-serif tracking-widest">
                      ご質問・ご相談
                    </label>
                    <Textarea
                      placeholder="SFC合格に向けて不安なこと、知りたいことをご自由にお書きください。塾長が直接お答えします。"
                      className="rounded-xl border border-slate-300 focus:border-[#002147] focus:ring-0 min-h-[160px] font-serif text-base bg-[#FAF9F6] p-4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full max-w-full rounded-full bg-[#800000] hover:bg-[#C5A059] text-white min-h-[64px] h-auto px-4 text-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group"
                    >
                      <span className="flex items-center justify-center gap-4 font-serif tracking-widest">
                        {isLoading ? '送信中...' : '個別相談を予約する'}
                        {!isLoading && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                      </span>
                    </Button>
                    <p className="text-xs text-center text-[#666666] mt-6 font-bold tracking-widest">
                      ※送信後、24時間以内に担当者よりご連絡いたします
                    </p>
                  </div>

                  <p className="text-xs text-center text-[#999999] pt-4 font-medium">
                    送信いただいた情報は、お客様へのサービス提供のため、安全に管理されます。
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-[#002147] font-bold tracking-[0.2em] mb-3 font-serif">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif tracking-widest">よくある質問</h2>
          </div>

          <div className="space-y-4">
            <details className="group border-b border-slate-200 pb-4">
              <summary className="flex items-center justify-between cursor-pointer py-4 hover:opacity-70 transition-opacity list-none">
                <span className="font-bold text-[#002147] font-serif tracking-wide text-base md:text-lg">
                  パソコンを持っていませんが大丈夫ですか？
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4 bg-[#FAF9F6] rounded-full p-2 border border-slate-200">
                  <ArrowDown className="w-5 h-5 text-[#002147]" />
                </span>
              </summary>
              <div className="pt-4 pb-4 text-[#666666] leading-relaxed font-medium text-sm md:text-base">
                はい、まったく問題ありません。佐藤塾は<strong>スマートフォン1台</strong>だけで、添削も指導もすべて完結するように作られています。パソコンを持っているかどうかは合否に関係しませんので、安心して始めてください。
              </div>
            </details>

            <details className="group border-b border-slate-200 pb-4">
              <summary className="flex items-center justify-between cursor-pointer py-4 hover:opacity-70 transition-opacity list-none">
                <span className="font-bold text-[#002147] font-serif tracking-wide text-base md:text-lg">
                  なぜ50%という高い合格率を実現できるのですか？
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4 bg-[#FAF9F6] rounded-full p-2 border border-slate-200">
                  <ArrowDown className="w-5 h-5 text-[#002147]" />
                </span>
              </summary>
              <div className="pt-4 pb-4 text-[#666666] leading-relaxed font-medium text-sm md:text-base">
                塾長自身が生徒一人ひとりの答案にすべて目を通し、「なぜそう考えたのか？」という根本の問いに本気で向き合うからです。表面的なテクニックに頼らず、SFC合格に必要な「独自性」と「思考力」を地道に引き出すこの指導こそが、実績ゼロからの大逆転を生み出しています。
              </div>
            </details>

            <details className="group border-b border-slate-200 pb-4">
              <summary className="flex items-center justify-between cursor-pointer py-4 hover:opacity-70 transition-opacity list-none">
                <span className="font-bold text-[#002147] font-serif tracking-wide text-base md:text-lg">
                  入会金はかかりますか？
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4 bg-[#FAF9F6] rounded-full p-2 border border-slate-200">
                  <ArrowDown className="w-5 h-5 text-[#002147]" />
                </span>
              </summary>
              <div className="pt-4 pb-4 text-[#666666] leading-relaxed font-medium text-sm md:text-base">
                入塾時に入会金として<strong>税込10万円</strong>をいただきます。それ以降は月額料金だけのお支払いで、追加の講習料などは一切かかりません。他塾のように後から追加費用が発生することもないので、安心して始めていただけます。
              </div>
            </details>

            <details className="group border-b border-slate-200 pb-4">
              <summary className="flex items-center justify-between cursor-pointer py-4 hover:opacity-70 transition-opacity list-none">
                <span className="font-bold text-[#002147] font-serif tracking-wide text-base md:text-lg">
                  途中で他のプランに変更できますか？
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4 bg-[#FAF9F6] rounded-full p-2 border border-slate-200">
                  <ArrowDown className="w-5 h-5 text-[#002147]" />
                </span>
              </summary>
              <div className="pt-4 pb-4 text-[#666666] leading-relaxed font-medium text-sm md:text-base">
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