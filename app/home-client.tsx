'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Check, ArrowRight, PenTool, Target, X, Video, ArrowDown, ArrowUp, ArrowLeft, RefreshCcw } from 'lucide-react'
import Link from 'next/link'
import { FloatingCTA } from '@/components/ui/floating-cta'

// Section title with Keio blue decorative lines
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]/60" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]/60" />
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-serif tracking-wide leading-snug text-balance">
        {children}
      </h3>
      {subtitle && (
        <p className="text-[#333333] mt-5 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]/60" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]/60" />
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center flex-1 flex flex-col justify-center pt-24 pb-12">

          {/* Hook Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="text-sm md:text-base font-bold text-white tracking-widest font-serif">慶應SFC（総合政策・環境情報）専門塾</span>
          </div>

          {/* Main Copy */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif tracking-wide leading-snug sm:leading-tight text-balance drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            偏差値40台、実績ゼロからでも。<br className="hidden md:block" />
            塾長が直接寄り添う1on1指導で掴む、<br className="block md:hidden" />
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#D4AF37] drop-shadow-none block mt-4 leading-tight">SFC合格。</span>
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            合格者の8割が、小論文未経験・実績ゼロからスタートしています。<br className="hidden md:block" />
            マニュアル化された指導ではなく、塾長が生徒一人ひとりと向き合い、<br className="hidden md:block" />その人だけの強みを引き出します。<br className="hidden md:block" />
            2人に1人が合格する確かな実績で、SFC合格までサポートします。
          </p>

          {/* Enhanced CTA Area */}
          <div className="mb-16 relative w-full max-w-[540px] mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C5A059]/30 to-[#800000]/30 blur-xl rounded-full opacity-70 animate-pulse"></div>

            <div className="relative flex flex-col items-center w-full">
              <div className="mb-4 flex items-center justify-center gap-3 bg-[#002147]/90 border border-[#C5A059]/60 px-4 py-4 rounded-full backdrop-blur-md shadow-xl w-full">
                <span className="relative flex h-3.5 w-3.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
                </span>
                <p className="text-white text-sm sm:text-base font-bold tracking-wider leading-snug text-center">
                  一人ひとりへの指導の質を守るため、<br className="sm:hidden md:block" />今年度の新規受付は<span className="text-[#C5A059] text-lg sm:text-xl ml-1 border-b border-[#C5A059]">残り5名</span>
                </p>
              </div>

              <a href="#contact-form" onClick={handleSmoothScroll} className="w-full block">
                <Button
                  size="lg"
                  className="w-full bg-[#800000] hover:bg-[#C5A059] text-white text-lg md:text-xl font-bold py-8 h-auto shadow-[0_4px_24px_rgba(128,0,0,0.6)] hover:shadow-[0_8px_32px_rgba(197,160,89,0.5)] transition-all duration-300 hover:-translate-y-1 border border-white/20 rounded-full group"
                >
                  <span className="flex items-center justify-center gap-3 font-serif">
                    無料の個別相談を予約する
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="md:hidden flex flex-col items-center justify-center p-6 border border-[#C5A059] rounded-lg bg-[#C5A059]/10 backdrop-blur-sm shadow-lg mb-4">
              <p className="text-xs text-[#C5A059] mb-1 tracking-[0.2em] font-bold uppercase font-serif">2026年度 合格���</p>
              <p className="text-6xl font-bold text-[#C5A059] tracking-tight" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>50<span className="text-2xl">%</span></p>
              <p className="text-sm text-[#D4AF37] mt-2 font-medium drop-shadow-[0_0_8px_rgba(0,33,71,1)]">(全受験生14名中7名が合格)</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:hidden">
              <div className="flex flex-col items-center justify-center p-4 border border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium font-serif">2026年度 受講継続率</p>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>93<span className="text-lg ml-0.5">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium font-serif">6年間累計</p>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>39<span className="text-lg ml-0.5">名</span></p>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center p-6 border border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase font-serif">2026年度 受講継続率</p>
                <p className="text-6xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>93<span className="text-2xl ml-1">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 border border-[#C5A059] rounded-lg bg-[#C5A059]/10 backdrop-blur-sm shadow-lg scale-110 -my-2 relative z-20">
                <p className="text-xs text-[#C5A059] mb-2 tracking-[0.2em] font-bold uppercase font-serif">2026年度 合格率</p>
                <p className="text-7xl font-bold text-[#C5A059] tracking-tight" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>50<span className="text-3xl">%</span></p>
                <p className="text-sm text-[#D4AF37] mt-3 font-medium drop-shadow-[0_0_8px_rgba(0,33,71,1)]">(全受験生14名中7名が合格)</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 border border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase font-serif">6年間累計</p>
                <p className="text-6xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>39<span className="text-2xl ml-1">名</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 pb-8 flex flex-col items-center animate-pulse">
          <span className="text-white/60 text-xs tracking-[0.3em] mb-3 font-medium">SCROLL</span>
          <div className="w-px h-14 bg-gradient-to-b from-[#C5A059] via-white/30 to-transparent"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-28 px-4 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #002147 0px, #002147 1px, transparent 1px, transparent 8px)',
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-wide leading-relaxed text-balance">
              一般的な小論文対策だけで、<br className="hidden sm:block" />
              SFCに合格するのはなぜ難しいのでしょうか？
            </h2>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          <div className="space-y-12 md:space-y-28">
            <div className="relative">
              <div className="md:hidden absolute -top-2 -left-2 opacity-[0.05] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">01</span>
              </div>
              <div className="hidden md:flex gap-14">
                <div className="flex-shrink-0 w-32">
                  <span className="text-sm font-bold text-[#800000]/60 font-serif tracking-widest block mb-1">原因</span>
                  <span className="text-7xl font-bold text-[#800000]/20 font-serif leading-none block -mt-1">01</span>
                </div>
                <div className="border-l border-slate-200 pl-10 py-2 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                    SFCが求める「独自の視点」に特化していないから
                  </h3>
                  <p className="text-[#333333] leading-loose text-base md:text-lg">
                    学校や一般的な塾で教わるのは、幅広い大学に対応した「標準的な書き方」です。しかし、SFCは受験生ならではの独自の視点や考え方を求める特殊な入試です。そのため、ありきたりな模範解答では合格ラインに届きません。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/30 pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 01</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  SFCが求める「独自の視点」に特化していないから
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  学校や一般的な塾で教わるのは、幅広い大学に対応した「標準的な書き方」です。しかし、SFCは受験生ならではの独自の視点や考え方を求める特殊な入試です。そのため、ありきたりな模範解答では合格ラインに届きません。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="md:hidden absolute -top-2 -left-2 opacity-[0.05] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">02</span>
              </div>
              <div className="hidden md:flex gap-14">
                <div className="flex-shrink-0 w-32">
                  <span className="text-sm font-bold text-[#800000]/60 font-serif tracking-widest block mb-1">原因</span>
                  <span className="text-7xl font-bold text-[#800000]/20 font-serif leading-none block -mt-1">02</span>
                </div>
                <div className="border-l border-slate-200 pl-10 py-2 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                    「書いて直す」試行錯誤の回数が足りないから
                  </h3>
                  <p className="text-[#333333] leading-loose text-base md:text-lg">
                    大手の塾や予備校では、答案を提出してから返却されるまでに1週間ほどかかることが多く、月の回数制限もあります。小論文の上達には添削と書き直しの反復が欠かせませんが、この待ち時間が成長の妨げになってしまいます。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/30 pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 02</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  「書いて直す」試行錯誤の回数が足りないから
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  大手の塾や予備校では、答案を提出してから返却されるまでに1週間ほどかかることが多く、月の回数制限もあります。小論文の上達には添削と書き直しの反復が欠かせませんが、この待ち時間が成長の妨げになってしまいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="md:hidden absolute -top-2 -left-2 opacity-[0.05] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">03</span>
              </div>
              <div className="hidden md:flex gap-14">
                <div className="flex-shrink-0 w-32">
                  <span className="text-sm font-bold text-[#800000]/60 font-serif tracking-widest block mb-1">原因</span>
                  <span className="text-7xl font-bold text-[#800000]/20 font-serif leading-none block -mt-1">03</span>
                </div>
                <div className="border-l border-slate-200 pl-10 py-2 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                    AO入試と一般入試の「共倒れ」が起きるから
                  </h3>
                  <p className="text-[#333333] leading-loose text-base md:text-lg">
                    AO入試の準備に時間をかけすぎると一般入試の勉強が遅れ、逆に一般入試に絞るとAO入試というせっかくのチャンスを逃してしまいます。この2つの両立を一人で計画するのは難しく、中途半端になってしまうケースが少なくありません。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/30 pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 03</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  AO入試と一般入試の「共倒れ」が起きるから
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  AO入試の準備に時間をかけすぎると一般入試の勉強が遅れ、逆に一般入試に絞るとAO入試というせっかくのチャンスを逃してしまいます。この2つの両立を一人で計画するのは難しく、中途半端になってしまうケースが少なくありません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Message Section */}
      <section className="py-24 px-4 bg-[#FAF9F6] border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center md:justify-start">
              {/* Principal's Profile Photo */}
              <div className="w-full max-w-[400px] aspect-[4/5] bg-white rounded-xl shadow-sm border border-slate-200 relative overflow-hidden p-2">
                <img
                  src="/og-image.png"
                  alt="佐藤塾 塾長 佐藤颯太"
                  className="w-full h-full object-cover rounded-lg grayscale-[10%]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#800000]/40" />
                <span className="text-sm font-bold text-[#800000] tracking-widest font-serif">MESSAGE</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002147] mb-8 font-serif tracking-wide leading-snug">
                偏差値40台からでも遅くありません。<br />私と一緒に合格を掴みましょう。
              </h3>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed">
                「もともと文章を書くのが苦手」「すごい実績なんてない」。SFCに合格した先輩たちの多くも、最初は同じような不安を抱えていました。
              </p>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed">
                特別な才能が必要だという誤解は捨ててください。<br />正しい戦略を立てて、一つひとつの課題にしっかり向き合えば、大逆転は十分に可能です。
              </p>
              <p className="text-base md:text-lg text-[#333333] mb-8 leading-relaxed">
                6年間で39名の合格者をサポートしてきた経験をもとに、あなたの「本当の魅力」を引き出します。
              </p>
              <p className="text-lg md:text-xl text-[#800000] mb-10 leading-relaxed font-bold font-serif">
                私が直接、最後まで伴走することをお約束します。
              </p>
              <div className="border-l-2 border-[#002147] pl-5 py-1">
                <p className="text-lg font-bold text-[#002147] font-serif tracking-wide">
                  佐藤 颯太
                </p>
                <p className="text-sm text-[#666666] mt-1">佐藤塾 塾長 / 慶應義塾大学 総合政策学部 卒業</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RE-DESIGNED: Daily Coaching Cycle */}
      <section className="py-28 px-4 bg-white border-t border-[#E5E7EB] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002147' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionTitle subtitle="「自分にもできるのかな」「今からで間に合うのかな」といった不安にも、塾長が丁寧に寄り添い、一緒に解決していきます。">
            小規模塾だから実現できる手厚いサポート。<br className="hidden md:block" />合格へ導く佐藤塾の指導サイクル
          </SectionTitle>

          {/* PC版：3x3 グリッドによる絶対に崩れない（被らない）サイクルUI */}
          <div className="relative mt-16 hidden md:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-2 lg:gap-x-4 gap-y-6 lg:gap-y-8 items-stretch max-w-6xl mx-auto">

            {/* --- 1段目 --- */}
            {/* 01 左上 */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm flex flex-col justify-center relative hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-5 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0 text-sm lg:text-base">01</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-snug">ご自身のペースで、<br />いつでも気軽にLINEで提出</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">小論文の答案や志望理由書が書けたら、スマートフォンからLINEでいつでも提出できます。回数に制限はありません。</p>
              </div>
            </div>

            {/* 矢印 01 -> 02 */}
            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 text-[#C5A059] opacity-50" />
            </div>

            {/* 02 右上 */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm flex flex-col justify-center relative hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-5 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0 text-sm lg:text-base">02</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-snug">提出された答案は、塾長が<br />すぐに確認し丁寧に見直します</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">すべての答案に塾長自身が目を通し、あなたの考え方の癖を見抜きます。<strong className="text-[#800000]">提出から24時間以内にフィードバック</strong>し、論理的な文章力を身につけます。</p>
              </div>
            </div>

            {/* --- 2段目 --- */}
            {/* 矢印 04 -> 01 */}
            <div className="flex items-center justify-center">
              <ArrowUp className="w-8 h-8 lg:w-10 lg:h-10 text-[#C5A059] opacity-50" />
            </div>

            {/* 中央：四角い画像＆バッジ */}
            <div className="flex flex-col items-center justify-center w-[240px] lg:w-[320px] mx-auto py-2">
              <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm p-1">
                <img
                  src="/fv-coaching.jpg"
                  alt="佐藤塾 塾長とのオンライン1on1指導風景"
                  className="w-full h-full object-cover object-center rounded-lg grayscale-[10%]"
                />
              </div>
              <div className="bg-white border border-[#002147] text-[#002147] px-6 lg:px-8 py-3 rounded-full font-bold shadow-sm flex items-center justify-center gap-2 tracking-widest text-sm lg:text-base whitespace-nowrap">
                <RefreshCcw className="w-4 h-4 lg:w-5 lg:h-5 text-[#002147]" />
                対話と添削を何度も繰り返す
              </div>
            </div>

            {/* 矢印 02 -> 03 */}
            <div className="flex items-center justify-center">
              <ArrowDown className="w-8 h-8 lg:w-10 lg:h-10 text-[#C5A059] opacity-50" />
            </div>

            {/* --- 3段目 --- */}
            {/* 04 左下 */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm flex flex-col justify-center relative hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-5 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0 text-sm lg:text-base">04</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-snug">迷ったときはいつでも、<br />塾長に直接ご相談ください</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">課題を進める中でわからないことや迷うことがあれば、いつでも塾長のLINEへ相談できます。小さな不安もすぐに解消し、勉強に集中できる環境を整えます。</p>
              </div>
            </div>

            {/* 矢印 03 -> 04 */}
            <div className="flex items-center justify-center">
              <ArrowLeft className="w-8 h-8 lg:w-10 lg:h-10 text-[#C5A059] opacity-50" />
            </div>

            {/* 03 右下 */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-[#800000]/10 shadow-sm flex flex-col justify-center relative hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-5 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0 text-sm lg:text-base">03</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#800000] leading-snug">塾長とのオンライン面談で、<br />あなたらしさを言葉にします</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">週に1回程度の面談を実施。小���文やAO対策の進捗確認だけでなく、英語や数学など他教科の学習計画づくりも一緒にサポートします。</p>
              </div>
            </div>

          </div>

          {/* スマホ版：縦型タイムライン */}
          <div className="md:hidden relative mt-12 space-y-4 max-w-md mx-auto">
            {/* 01 */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-slate-200 shadow-sm relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4 border-b border-slate-200 pb-3">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">01</div>
                <h3 className="text-base font-bold text-[#002147] leading-snug">ご自身のペースで、<br />いつでも気軽にLINEで提出</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">小論文の答案や志望理由書が書けたら、スマートフォンからLINEでいつでも提出できます。回数に制限はありません。</p>
              </div>
            </div>

            <div className="flex justify-center py-1 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 02 */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-slate-200 shadow-sm relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4 border-b border-slate-200 pb-3">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">02</div>
                <h3 className="text-base font-bold text-[#002147] leading-snug">提出された答案は、塾長が<br />すぐに確認し丁寧に見直します</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">すべての答案に塾長自身が目を通し、あなたの考え方の癖を見抜きます。<strong className="text-[#800000]">提出から24時間以内にフィードバック</strong>し、論理的な文章力を身につけます。</p>
              </div>
            </div>

            <div className="flex justify-center py-1 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 03 */}
            <div className="bg-white rounded-2xl border-2 border-[#800000]/10 overflow-hidden shadow-sm relative z-10 flex flex-col h-full">
              <div className="p-6 pb-4 flex-1">
                <div className="flex items-center gap-4 mb-4 border-b border-slate-100 pb-3">
                  <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">03</div>
                  <h3 className="text-base font-bold text-[#800000] leading-snug">オンライン面談で、<br />あなたらしさを言葉にします</h3>
                </div>
                <p className="text-[#333333] text-sm leading-relaxed mb-2">
                  週に1回程度の面談を実施。小論文やAO対策の進捗確認だけでなく、英語や数学など他教科の学習計画づくりもサポートします。
                </p>
              </div>
              <div className="mx-6 mb-6 aspect-video bg-white border border-slate-200 p-1 rounded-xl flex items-center justify-center">
                <img src="/fv-coaching.jpg" alt="指導風景" className="w-full h-full object-cover object-center rounded-lg" />
              </div>
            </div>

            <div className="flex justify-center py-1 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 04 */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-slate-200 shadow-sm relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4 border-b border-slate-200 pb-3">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">04</div>
                <h3 className="text-base font-bold text-[#002147] leading-snug">迷ったときはいつでも、<br />塾長に直接ご相談ください</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">課題を進める中でわからないことや迷うことがあれば、いつでも塾長のLINEへ相談できます。小さな不安もすぐに解消し、勉強に集中できる環境を整えます。</p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-10 pt-6 relative z-10 border-t border-slate-200">
              <div className="bg-white border border-[#002147] px-6 py-3 rounded-full flex items-center gap-2">
                <RefreshCcw className="w-4 h-4 text-[#002147]" />
                <p className="text-[#002147] font-bold text-sm tracking-widest text-center">
                  対話と添削を何度も繰り返す
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* リアルな添削ビフォーアフター Section */}
      <section className="relative py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6 text-balance">
              マニュアルには見抜けない一人ひとりの個性。<br className="hidden md:block" />
              塾長直筆の丁寧な赤ペン添削
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-4xl mx-auto text-left md:text-center">
              SFCの教授陣は、表面的な知識をまとめただけの文章をすぐに見抜きます。<br className="hidden md:block" />
              だからこそ佐藤塾では、<strong className="text-[#800000]">塾長自らがすべての答案を読み込み、生徒の本音と情熱を引き出すために何度でも添削</strong>を行います。
            </p>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-8" />
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl mt-12 shadow-sm overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#002147] font-serif mb-10 text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 border-b border-slate-100 pb-6">
                <PenTool className="w-6 h-6 text-[#002147]" />
                実際の添削事例：思考を深め、自分だけの言葉を見つける
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Before */}
                <div className="bg-[#FAF9F6] p-8 md:p-10 border border-slate-200 rounded-2xl relative pt-16 flex flex-col h-full">
                  <span className="absolute top-0 left-0 bg-slate-500 text-white text-xs font-bold px-4 py-2 tracking-widest font-serif rounded-tl-2xl rounded-br-xl">生徒の初回答案</span>
                  <div className="flex-1">
                    <p className="text-[#666666] leading-loose text-base md:text-lg">
                      「私は地域の過疎化問題に興味があります。解決のためには、IT技術を活用して遠隔地からでも医療や教育を受けられるようにするべきだと思います。」
                    </p>
                  </div>
                </div>
                
                {/* After */}
                <div className="bg-white p-8 md:p-10 border-2 border-[#800000]/20 rounded-2xl relative pt-16 flex flex-col h-full shadow-sm">
                  <span className="absolute top-0 left-0 bg-[#800000] text-white text-xs font-bold px-4 py-2 tracking-widest font-serif rounded-tl-2xl rounded-br-xl">塾長のフィードバック</span>
                  <div className="flex-1">
                    <p className="text-[#333333] font-medium leading-loose text-base md:text-lg">
                      「『IT技術を活用』という言葉は少し抽象的かもしれません。<strong className="text-[#800000] border-b border-dashed border-[#800000]/50 pb-0.5">あなたが実際にA町を訪れて感じた課題</strong>をベースに、『高齢者でも使いやすい遠隔医療アプリの提案』として具体化してみましょう。なぜあなたがそれを作りたいのか、ご自身の体験をもっと前に出してみてください！」
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
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif mb-6 leading-snug">
            「自分に何ができるかわからない」<br className="md:hidden" />と悩んでいませんか？
          </h3>
          <p className="text-base md:text-lg text-[#333333] mb-8 leading-relaxed">
            志望校合格への第一歩は、<strong className="text-[#800000]">「今の自分を正しく知り、正しい戦略を立てること」</strong>から始まります。<br className="hidden md:block" />「今の成績で本当に受かるのか」といった不安があれば、まずは無料相談でお気軽にお話しください。
          </p>
          <a href="#contact-form" onClick={handleSmoothScroll}>
            <Button className="w-full max-w-sm rounded-full bg-[#800000] hover:bg-[#C5A059] text-white font-bold py-6 h-auto text-base md:text-lg transition-colors duration-300 shadow-md group">
              <span className="flex items-center justify-center gap-3 font-serif">
                無料の個別相談を予約する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-28 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              合格までのロードマップ
            </h2>
            <div className="max-w-3xl mx-auto text-left md:text-center">
              <p className="text-base md:text-lg text-[#333333] leading-relaxed mb-6">
                いつ、何をすれば合格できるのか。もちろん個人の状況によりますが、10月以降の標準的な学習スケジュールは以下の通りです。
              </p>
              <div className="bg-white border border-[#C5A059]/40 p-6 md:p-8 shadow-sm inline-block text-left rounded-2xl">
                <p className="text-base md:text-lg text-[#333333] leading-relaxed">
                  <strong className="text-[#800000]">例年、秋口（10月以降）からのスタートでも多くの生徒が合格を勝ち取っています。</strong><br />
                  昨年度も、10月入塾の菅原くんや、11月入塾の元吉さんなどが、限られた時間の中で見事合格を掴みました。<span className="text-xs text-[#999999] ml-1">[cite: 1]</span>
                </p>
              </div>
            </div>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-12" />
          </div>

          {/* PC版ロードマップ */}
          <div className="hidden lg:block">
            <div className="relative pt-8">
              {/* Horizontal Timeline Line */}
              <div className="absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-[#E5E7EB]" />

              <div className="grid grid-cols-3 gap-8 items-stretch">
                {/* STEP 01 */}
                <div className="relative flex flex-col h-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white border border-[#002147] text-[#002147] flex items-center justify-center font-bold text-xl font-serif z-10 rounded-full">
                      01
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-white border border-slate-200 px-5 py-1.5 rounded-full">
                      <span className="text-sm font-bold text-[#002147] tracking-widest font-serif">10月〜11月</span>
                    </div>
                  </div>
                  <div className="bg-white p-8 md:p-10 border border-slate-200 border-t-4 border-t-[#002147] rounded-2xl relative flex-1 flex flex-col shadow-sm">
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center border-b border-[#E5E7EB] pb-5">
                      基礎を固め、あなただけの<br />「視点」を見つける
                    </h3>
                    <div className="flex-1">
                      <p className="text-sm text-[#666666] leading-relaxed">
                        まずは短めの要約や小論文に取り組みます。塾長の添削を通じて論理的な文章の型を身につけながら、あなたならではの「視点」や「独自性」を探していきます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 02 */}
                <div className="relative flex flex-col h-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white border border-[#800000] text-[#800000] flex items-center justify-center font-bold text-xl font-serif z-10 rounded-full">
                      02
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-white border border-slate-200 px-5 py-1.5 rounded-full">
                      <span className="text-sm font-bold text-[#800000] tracking-widest font-serif">12月</span>
                    </div>
                  </div>
                  <div className="bg-white p-8 md:p-10 border border-slate-200 border-t-4 border-t-[#800000] rounded-2xl relative flex-1 flex flex-col shadow-sm">
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center border-b border-[#E5E7EB] pb-5">
                      他学部の過去問を活用し、<br />実践力を養う
                    </h3>
                    <div className="flex-1">
                      <p className="text-sm text-[#666666] leading-relaxed">
                        SFCの過去問へ本格的に入る前に、慶應経済学部などの小論文に取り組みます。時間配分を意識し、本番に近い形式で練習することで、確かな実践力を鍛えます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 03 */}
                <div className="relative flex flex-col h-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white border border-[#C5A059] text-[#C5A059] flex items-center justify-center font-bold text-xl font-serif z-10 rounded-full">
                      03
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-white border border-slate-200 px-5 py-1.5 rounded-full">
                      <span className="text-sm font-bold text-[#C5A059] tracking-widest font-serif">1月〜入試直前</span>
                    </div>
                  </div>
                  <div className="bg-white p-8 md:p-10 border border-slate-200 border-t-4 border-t-[#C5A059] rounded-2xl relative flex-1 flex flex-col shadow-sm">
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center border-b border-[#E5E7EB] pb-5">
                      SFCの過去問演習で、<br />どんな出題にも対応できる力を
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

          {/* スマホ版ロードマップ */}
          <div className="lg:hidden mt-10">
            <div className="relative max-w-md mx-auto px-2">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[2.25rem] top-4 bottom-10 w-px bg-[#E5E7EB]" />

              {/* STEP 01 */}
              <div className="relative pl-14 pb-10 flex flex-col h-full">
                <div className="absolute left-4 top-2 w-10 h-10 bg-white text-[#002147] border border-[#002147] flex items-center justify-center font-bold text-base font-serif z-10 rounded-full">
                  01
                </div>
                <div className="bg-white p-6 md:p-8 border border-slate-200 border-l-4 border-l-[#002147] rounded-2xl flex-1 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-[#002147] tracking-widest font-serif bg-[#FAF9F6] px-3 py-1 rounded-full border border-slate-200">10月〜11月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-3 leading-snug">
                    基礎を固め、あなただけの「視点」を見つける
                  </h3>
                  <div className="flex-1">
                    <p className="text-sm text-[#666666] leading-relaxed">
                      まずは短めの要約や小論文に取り組みます。塾長の添削を通じて論理的な文章の型を身につけながら、あなたならではの「視点」や「独自性」を探していきます。
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 02 */}
              <div className="relative pl-14 pb-10 flex flex-col h-full">
                <div className="absolute left-4 top-2 w-10 h-10 bg-white text-[#800000] border border-[#800000] flex items-center justify-center font-bold text-base font-serif z-10 rounded-full">
                  02
                </div>
                <div className="bg-white p-6 md:p-8 border border-slate-200 border-l-4 border-l-[#800000] rounded-2xl flex-1 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-[#800000] tracking-widest font-serif bg-[#fff5f5] px-3 py-1 rounded-full border border-[#800000]/10">12月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-3 leading-snug">
                    他学部の過去問を活用し、実践力を養う
                  </h3>
                  <div className="flex-1">
                    <p className="text-sm text-[#666666] leading-relaxed">
                      SFCの過去問へ本格的に入る前に、慶應経済学部などの小論文に取り組みます。時間配分を意識し、本番に近い形式で練習することで、確かな実践力を鍛えます。
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 03 */}
              <div className="relative pl-14 pb-4 flex flex-col h-full">
                <div className="absolute left-4 top-2 w-10 h-10 bg-white text-[#C5A059] border border-[#C5A059] flex items-center justify-center font-bold text-base font-serif z-10 rounded-full">
                  03
                </div>
                <div className="bg-white p-6 md:p-8 border border-slate-200 border-l-4 border-l-[#C5A059] rounded-2xl flex-1 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-[#C5A059] tracking-widest font-serif bg-[#FAF9F6] px-3 py-1 rounded-full border border-[#C5A059]/30">1月〜入試直前</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-3 leading-snug">
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

      {/* Six Reasons Section */}
      <section className="py-24 md:py-32 px-4 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>佐藤塾が選ばれる6つの理由</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch mt-16">
            {[
              { num: '01', title: 'AOと一般入試の併願をサポート', desc: 'どちらの受験方式でも、無理のない学習計画で総合的にサポートします。' },
              { num: '02', title: '提出後、迅速で丁寧な添削', desc: '提出された小論文は塾長がすぐに確認・添削し、学習のペースを止めません。' },
              { num: '03', title: '塾長との丁寧な1on1指導', desc: 'SFC合格の鍵となる「自分らしさ」を見つけるため、塾長が直接対話します。' },
              { num: '04', title: 'AO合格後の追加費用なし', desc: 'AO入試で合格した場合はその月で卒業となり、それ以降の費用はかかりません。' },
              { num: '05', title: 'SFCに特化した指導ノウハウ', desc: '6年間で培った指導経験をもとに、SFC合格に必要な考え方を分かりやすく教えます。' },
              { num: '06', title: '完全オンラインで通塾不要', desc: '指導はすべてオンラインで行うため、移動時間を自分の勉強に充てられます。' },
            ].map((item) => (
              <div key={item.num} className="bg-[#FAF9F6] border border-slate-200 p-8 md:p-10 rounded-2xl flex flex-col h-full shadow-sm">
                <div className="flex items-center gap-6 mb-6 border-b border-slate-200 pb-5">
                  <div className="text-3xl md:text-4xl font-bold text-[#C5A059] font-serif">
                    {item.num}.
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-[#002147] m-0 leading-snug font-serif tracking-wide">{item.title}</h4>
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-[#666666] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-32 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="AO入試を受験するかどうかで選べる、シンプルで分かりやすい料金プランです。">2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-16">
            
            {/* Plan 1 */}
            <div className="flex flex-col bg-white border border-slate-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden relative h-full">
              <div className="bg-[#800000] text-white px-8 py-10 text-center relative">
                <span className="absolute top-6 right-6 bg-white text-[#800000] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest shadow-sm">
                  人気No.1
                </span>
                <h4 className="text-2xl font-bold tracking-wide font-serif">AO・一般 併願プラン</h4>
                <p className="text-white/80 text-sm mt-3 font-medium">AO入試と一般入試の両方を対策したい方</p>
              </div>

              <div className="flex-1 flex flex-col p-8 md:p-12">
                <div className="mb-8 text-center border-b border-slate-100 pb-8">
                  <p className="text-[#666666] text-sm mb-3 font-medium tracking-widest">月額料金</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#800000] font-serif">138,000</span>
                    <span className="text-xl font-bold text-[#800000]">円</span>
                  </div>
                  <p className="text-sm text-[#666666] mt-3">（税込 151,800円）</p>
                </div>

                <div className="mb-8 bg-[#FAF9F6] py-3 rounded-xl border border-slate-100 flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-[#800000]" />
                  <span className="text-sm font-bold text-[#333333]">追加講習費・教材費 一切不要</span>
                </div>

                <ul className="space-y-5 mb-10 flex-1 px-2">
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">塾長1on1授業 <span className="font-bold text-[#800000]">週1回</span></span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">納得いくまで、何度でも添削</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">受験戦略の立案</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">英・数・情報の学習計画管理</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-5 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button className="w-full rounded-full bg-[#800000] hover:bg-[#C5A059] text-white h-16 text-base md:text-lg font-bold transition-colors shadow-md group">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course" className="text-center mt-2">
                    <span className="text-sm font-bold text-[#666666] hover:text-[#002147] transition-colors border-b border-[#E5E7EB] pb-1">プランの詳細を見る</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="flex flex-col bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden relative h-full">
              <div className="bg-slate-100 text-[#002147] px-8 py-10 text-center">
                <h4 className="text-2xl font-bold tracking-wide font-serif">一般入試 特化プラン</h4>
                <p className="text-[#666666] text-sm mt-3 font-medium">他塾と併用・小論文対策のみをご希望の方</p>
              </div>

              <div className="flex-1 flex flex-col p-8 md:p-12">
                <div className="mb-8 text-center border-b border-slate-100 pb-8">
                  <p className="text-[#666666] text-sm mb-3 font-medium tracking-widest">月額料金</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#002147] font-serif">118,000</span>
                    <span className="text-xl font-bold text-[#002147]">円</span>
                  </div>
                  <p className="text-sm text-[#666666] mt-3">（税込 129,800円）</p>
                </div>

                <div className="mb-8 bg-[#FAF9F6] py-3 rounded-xl border border-slate-100 flex items-center justify-center gap-2 opacity-80">
                  <Check className="w-4 h-4 text-[#666666]" />
                  <span className="text-sm font-bold text-[#666666]">追加講習費・教材費 一切不要</span>
                </div>

                <ul className="space-y-6 mb-12 flex-1 px-2 opacity-80">
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">塾長1on1授業 <span className="font-bold text-[#002147]">月1回</span></span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">納得いくまで、何度でも添削</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">指導科目 <span className="font-bold text-[#002147]">小論文のみ</span></span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-5 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button variant="outline" className="w-full rounded-full border-2 border-slate-200 text-[#002147] hover:border-[#002147] hover:bg-transparent h-16 text-base md:text-lg font-bold transition-colors">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course" className="text-center mt-2">
                    <span className="text-sm font-bold text-[#666666] hover:text-[#002147] transition-colors border-b border-[#E5E7EB] pb-1">プランの詳細を見る</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FAF9F6] border border-slate-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#002147] font-serif">!</span>
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="text-xl md:text-2xl font-bold text-[#002147] mb-4 font-serif">AO入試で合格した場合は、その時点で卒業となります。</p>
              <p className="text-base text-[#666666] leading-loose font-medium">
                AO入試で合格が決まった場合、合格発表日の月末をもって自動退塾（契約終了）となります。合格後の不要な費用は一切かかりませんので、保護者の方も安心してお子様の受験を応援していただけます。
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm">
            <p className="text-base text-[#333333] text-center leading-loose font-medium">
              <strong className="text-[#800000]">※ 佐藤塾の費用は月額 11.8万円〜。</strong><br className="block md:hidden" />
              追加の講習費や教材費は一切かかりません。<br className="hidden md:block" />他塾のように「合格時には別途〇万円」といった費用も発生しませんのでご安心ください。
            </p>
          </div>
        </div>
      </section>

      {/* Essay Method Section */}
      <section className="py-24 md:py-32 px-4 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto text-center bg-[#FAF9F6] p-12 md:p-20 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002147] font-serif mb-8 tracking-wide">
            佐藤塾の小論文指導とは
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-loose mb-12 max-w-2xl mx-auto font-medium">
            慶應SFC合格に欠かせない「問いを立てる力」を、塾長がどのように指導しているか。そのメソッドを公開しています。
          </p>
          <Link href="/guide/essay" className="inline-block w-full md:w-auto">
            <Button className="w-full md:w-auto rounded-full bg-[#002147] text-white font-bold px-12 py-7 h-auto text-base md:text-lg transition-colors duration-300 hover:bg-[#800000] shadow-md">
              小論文学習メソッドを読む
            </Button>
          </Link>
        </div>
      </section>

      {/* SFC Guides Section */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: '#002147' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-widest mb-6">
              SFC対策 完全ガイド
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-loose font-medium">
              佐藤塾が積み重ねてきた「小論文」と「AO入試」の攻略メソッドを、すべて無料で公開しています。ぜひ読んでみてください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <Link href="/guide/essay/articles" className="group block h-full">
              <div className="bg-transparent border border-white/20 rounded-3xl p-8 md:p-12 hover:border-[#C5A059] transition-colors duration-300 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white font-serif mb-6 group-hover:text-[#C5A059] transition-colors pb-4 border-b border-white/20 inline-block w-fit">
                  小論文 対策ガイド
                </h3>
                <div className="flex-1">
                  <p className="text-white/80 mb-10 leading-loose text-base md:text-lg mt-4 font-medium">
                    「何を書けばいいかわからない」を抜け出して、SFCの教授をうなずかせる文章の組み立て方と、資料の読み解き方を解説します。
                  </p>
                </div>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto font-serif text-base tracking-widest">
                  <span>記事一覧を読む</span>
                  <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/ao-guide" className="group block h-full">
              <div className="bg-transparent border border-white/20 rounded-3xl p-8 md:p-12 hover:border-[#C5A059] transition-colors duration-300 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white font-serif mb-6 group-hover:text-[#C5A059] transition-colors pb-4 border-b border-white/20 inline-block w-fit">
                  AO入試 対策ガイド
                </h3>
                <div className="flex-1">
                  <p className="text-white/80 mb-10 leading-loose text-base md:text-lg mt-4 font-medium">
                    目立つ実績がなくても大丈夫。自分だけの研究テーマの見つけ方から、志望理由書やポートフォリオの作り方まで解説します。
                  </p>
                </div>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto font-serif text-base tracking-widest">
                  <span>ガイドを読む</span>
                  <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 md:py-32 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB] scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <SectionTitle subtitle="「今の成績で本当に受かるのか」「文章を書くのが苦手」といった不安があれば、まずは無料相談でお気軽にお話しください。一人ひとりの生徒にしっかり時間をかけるため、今年度の新規受付は残り5名とさせていただきます。">
            無料の個別相談を予約する
          </SectionTitle>

          <div className="bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl overflow-hidden mt-16">
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-16 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#002147]/5 text-[#002147] rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#002147] mb-6 font-serif">送信が完了しました！</h3>
                  <p className="text-[#333333] leading-loose mb-10 text-base md:text-lg border-y border-slate-100 py-8 font-medium">
                    お申し込みいただきありがとうございます。<br />
                    担当者より24時間以内にご連絡いたします。
                  </p>
                  <p className="text-sm text-[#666666] font-medium">
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

                  <div className="mb-10 p-6 md:p-8 bg-[#FAF9F6] border border-slate-200 rounded-xl">
                    <p className="text-sm text-[#333333] mb-3 leading-relaxed font-medium">
                      ※ ご相談者の8割が<strong>「実績ゼロ」「小論文未経験」</strong>からのスタートです。現在の実力は一切問いません。
                    </p>
                    <p className="text-sm text-[#333333] leading-relaxed font-medium">
                      ※ 無理な入塾勧誘は一切行いません。まずはSFC受験のプロ（塾長）との壁打ちとしてお気軽にご利用ください。
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3">
                      お名前 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="佐藤 太郎"
                      className="rounded-xl border border-slate-300 focus:border-[#002147] focus:ring-1 h-14 bg-white text-base px-4"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3">
                      メールアドレス <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      className="rounded-xl border border-slate-300 focus:border-[#002147] focus:ring-1 h-14 bg-white text-base px-4"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3">
                      電話番号 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="09012345678"
                      className="rounded-xl border border-slate-300 focus:border-[#002147] focus:ring-1 h-14 bg-white text-base px-4"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3">
                      ご希望のプラン <span className="text-[#800000]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full h-14 px-4 border border-slate-300 rounded-xl bg-white text-[#333333] focus:border-[#002147] focus:outline-none focus:ring-1 focus:ring-[#002147] text-base appearance-none cursor-pointer"
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        required
                      >
                        <option value="">プランを選択してください</option>
                        <option value="complete">AO入試＋一般入試：併願プラン</option>
                        <option value="basic">小論文のみ：特化プラン</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#666666]">
                        <ArrowDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3">
                      ご質問・ご相談
                    </label>
                    <Textarea
                      placeholder="SFC合格に向けて不安なこと、知りたいことなどをご自由にお書きください。塾長が直接お答えします。"
                      className="rounded-xl border border-slate-300 focus:border-[#002147] focus:ring-1 min-h-[180px] bg-white p-4 text-base leading-loose"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="pt-8 mt-12 border-t border-slate-200">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-full bg-[#800000] hover:bg-[#C5A059] text-white min-h-[72px] h-auto px-4 text-lg md:text-xl font-bold transition-all duration-300 group shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                      <span className="flex items-center justify-center gap-3 font-serif tracking-widest">
                        {isLoading ? '送信中...' : '個別相談を予約する'}
                        {!isLoading && <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />}
                      </span>
                    </Button>
                    <p className="text-sm text-center text-[#666666] mt-6 font-medium tracking-wide">
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
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002147] font-serif tracking-widest">よくある質問</h2>
          </div>

          <div className="space-y-2">
            <details className="group border-b border-slate-200 pb-2">
              <summary className="flex items-center justify-between cursor-pointer py-6 hover:opacity-70 transition-opacity list-none">
                <span className="font-bold text-[#002147] text-base md:text-lg leading-relaxed">
                  パソコンを持っていませんが、スマートフォンだけでも受講できますか？
                </span>
                <span className="text-[#C5A059] text-2xl font-bold group-open:hidden ml-6 flex-shrink-0">＋</span>
                <span className="text-[#C5A059] text-2xl font-bold hidden group-open:block ml-6 flex-shrink-0">－</span>
              </summary>
              <div className="pt-2 pb-8 text-[#666666] leading-loose text-base font-medium">
                はい、まったく問題ありません。佐藤塾はスマートフォン1台だけで、添削も指導もすべて完結するように作られています。パソコンを持っているかどうかは合否に関係しませんので、安心して始めてください。
              </div>
            </details>

            <details className="group border-b border-slate-200 pb-2">
              <summary className="flex items-center justify-between cursor-pointer py-6 hover:opacity-70 transition-opacity list-none">
                <span className="font-bold text-[#002147] text-base md:text-lg leading-relaxed">
                  なぜこれほど高い合格率が出せるのでしょうか？
                </span>
                <span className="text-[#C5A059] text-2xl font-bold group-open:hidden ml-6 flex-shrink-0">＋</span>
                <span className="text-[#C5A059] text-2xl font-bold hidden group-open:block ml-6 flex-shrink-0">－</span>
              </summary>
              <div className="pt-2 pb-8 text-[#666666] leading-loose text-base font-medium">
                塾長自身が生徒一人ひとりの答案にすべて目を通し、「なぜそう考えたのか？」という根本の問いに本気で向き合うからです。表面的なテクニックに頼らず、SFC合格に必要な「独自性」と「思考力」を地道に引き出すこの指導こそが、実績ゼロからの逆転合格を生み出しています。
              </div>
            </details>

            <details className="group border-b border-slate-200 pb-2">
              <summary className="flex items-center justify-between cursor-pointer py-6 hover:opacity-70 transition-opacity list-none">
                <span className="font-bold text-[#002147] text-base md:text-lg leading-relaxed">
                  入会金はかかりますか？
                </span>
                <span className="text-[#C5A059] text-2xl font-bold group-open:hidden ml-6 flex-shrink-0">＋</span>
                <span className="text-[#C5A059] text-2xl font-bold hidden group-open:block ml-6 flex-shrink-0">－</span>
              </summary>
              <div className="pt-2 pb-8 text-[#666666] leading-loose text-base font-medium">
                入塾時に入会金として税込10万円をいただきます。それ以降は月額料金だけのお支払いで、追加の講習料などは一切かかりません。後から追加費用が発生することもないので、安心して始めていただけます。
              </div>
            </details>

            <details className="group border-b border-slate-200 pb-2">
              <summary className="flex items-center justify-between cursor-pointer py-6 hover:opacity-70 transition-opacity list-none">
                <span className="font-bold text-[#002147] text-base md:text-lg leading-relaxed">
                  途中で他のプランに変更できますか？
                </span>
                <span className="text-[#C5A059] text-2xl font-bold group-open:hidden ml-6 flex-shrink-0">＋</span>
                <span className="text-[#C5A059] text-2xl font-bold hidden group-open:block ml-6 flex-shrink-0">－</span>
              </summary>
              <div className="pt-2 pb-8 text-[#666666] leading-loose text-base font-medium">
                はい、月単位でプランを変更できます。学力の伸びや状況に合わせて柔軟に対応できますので、お気軽にご相談ください。
              </div>
            </details>
          </div>
        </div>
      </section>
      <FloatingCTA />
    </div>
  )
}
