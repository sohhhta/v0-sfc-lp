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
        <div className="h-px w-16 bg-[#002147]/40" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]/40" />
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-serif tracking-[0.04em] md:tracking-[0.08em] leading-snug text-balance">
        {children}
      </h3>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
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
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="text-sm md:text-base font-bold text-white tracking-widest font-serif">慶應SFC（総合政策・環境情報）専門塾</span>
          </div>

          {/* Main Copy */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif tracking-normal sm:tracking-wider leading-tight sm:leading-relaxed text-balance drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            偏差値40台、実績ゼロから。<br />
            塾長の泥臭い1on1指導で<span className="sm:hidden"><br /></span><span className="hidden sm:inline"> </span>掴む、<br />
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#D4AF37] drop-shadow-none block mt-4 leading-tight">SFC合格。</span>
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            合格者の8割が「小論文未経験」「実績ゼロ」からのスタートです。<br className="hidden md:block" />
            無機質なマニュアルやシステムに頼るのではなく、塾長があなた一人ひとりと本気で向き合います。<br className="hidden md:block" />
            2人に1人が合格する圧倒的実績で、最短距離でSFC合格へ導きます。
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
                  指導密度を極限まで保つため、<br className="sm:hidden" />今年度の新規受付は<span className="text-[#C5A059] text-lg sm:text-xl ml-1 border-b border-[#C5A059]">残り5名</span>
                </p>
              </div>

              <a href="#contact-form" onClick={handleSmoothScroll} className="w-full block">
                <Button
                  size="lg"
                  className="w-full bg-[#800000] hover:bg-[#C5A059] text-white text-lg md:text-xl font-bold py-8 h-auto shadow-[0_8px_30px_rgba(128,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(197,160,89,0.4)] transition-all duration-300 hover:-translate-y-1 border border-white/20 rounded-full group"
                >
                  <span className="flex items-center justify-center gap-3 font-serif">
                    無料で個別相談を予約する
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="md:hidden flex flex-col items-center justify-center p-6 border border-[#C5A059]/40 rounded-xl bg-white/5 backdrop-blur-md shadow-lg mb-4">
              <p className="text-xs text-[#C5A059] mb-1 tracking-[0.2em] font-bold uppercase font-serif">2026年度 合格率</p>
              <p className="text-6xl font-bold text-[#C5A059] tracking-tight" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>50<span className="text-2xl">%</span></p>
              <p className="text-sm text-white/80 mt-2 font-medium">(全受験生14名中7名が合格)</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:hidden">
              <div className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md shadow-sm h-full">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium font-serif">2026年度 受講継続率</p>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>93<span className="text-lg ml-0.5">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md shadow-sm h-full">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium font-serif">6年間累計</p>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>39<span className="text-lg ml-0.5">名</span></p>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch">
              <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md shadow-sm h-full">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase font-serif">2026年度 受講継続率</p>
                <p className="text-6xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>93<span className="text-2xl ml-1">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 border border-[#C5A059]/40 rounded-2xl bg-[#C5A059]/10 backdrop-blur-md shadow-xl scale-105 relative z-20 h-full">
                <p className="text-xs text-[#C5A059] mb-2 tracking-[0.2em] font-bold uppercase font-serif">2026年度 合格率</p>
                <p className="text-7xl font-bold text-[#C5A059] tracking-tight" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>50<span className="text-3xl">%</span></p>
                <p className="text-sm text-[#D4AF37] mt-3 font-medium">(全受験生14名中7名が合格)</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md shadow-sm h-full">
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
      <section className="relative py-28 px-4 bg-[#F9F9F9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #002147 0px, #002147 1px, transparent 1px, transparent 8px)',
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed text-balance">
              なぜ、一般的な塾・学校の対策では、<br className="hidden sm:block" />
              慶應SFCの合格ラインに届かないのか？
            </h2>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-8" />
          </div>

          <div className="space-y-12 md:space-y-20">
            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="md:hidden absolute -top-4 -left-2 opacity-[0.05] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">01</span>
              </div>
              <div className="hidden md:flex gap-14 items-center">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-xs font-bold text-[#800000]/60 tracking-widest block mb-1">原因</span>
                  <span className="text-7xl font-bold text-[#800000]/20 font-serif leading-none block">01</span>
                </div>
                <div className="border-l border-slate-200 pl-10 py-2 flex-1">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                    SFC専用の対策になっていない
                  </h3>
                  <p className="text-[#333333] leading-relaxed text-lg">
                    学校や普通の塾が教えるのは、どの大学でも使える「一般的な書き方」です。しかし、SFCは独自の視点を求める特殊な入試であり、独自観点を考慮できていないありきたりな回答では、合格点には届きません。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/40 pl-5">
                <div className="text-xs font-bold text-[#C5A059] tracking-[0.2em] mb-2">原因 01</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  SFC専用の対策になっていない
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  学校や普通の塾が教えるのは、どの大学でも使える「一般的な書き方」です。しかし、SFCは独自の視点を求める特殊な入試であり、独自観点を考慮できていないありきたりな回答では、合格点には届きません。
                </p>
              </div>
            </div>

            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="md:hidden absolute -top-4 -left-2 opacity-[0.05] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">02</span>
              </div>
              <div className="hidden md:flex gap-14 items-center">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-xs font-bold text-[#800000]/60 tracking-widest block mb-1">原因</span>
                  <span className="text-7xl font-bold text-[#800000]/20 font-serif leading-none block">02</span>
                </div>
                <div className="border-l border-slate-200 pl-10 py-2 flex-1">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                    添削の回数が少なすぎる
                  </h3>
                  <p className="text-[#333333] leading-relaxed text-lg">
                    大手塾や学校は添削が返ってくるまで1週間かかり、回数制限（月4回〜最大12回など）もあります。合格には圧倒的な質の高い試行錯誤が必要なのに、この「待ち時間」と「頻度の低さ」が受験生の成長を止めてしまいます。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/40 pl-5">
                <div className="text-xs font-bold text-[#C5A059] tracking-[0.2em] mb-2">原因 02</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  添削の回数が少なすぎる
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  大手塾は添削が返ってくるまで1週間かかり、回数制限（月4回〜最大12回など）もあります。合格には圧倒的な質の高い試行錯誤が必要なのに、この「待ち時間」と「頻度の低さ」が受験生の成長を止めてしまいます。
                </p>
              </div>
            </div>

            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="md:hidden absolute -top-4 -left-2 opacity-[0.05] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">03</span>
              </div>
              <div className="hidden md:flex gap-14 items-center">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-xs font-bold text-[#800000]/60 tracking-widest block mb-1">原因</span>
                  <span className="text-7xl font-bold text-[#800000]/20 font-serif leading-none block">03</span>
                </div>
                <div className="border-l border-slate-200 pl-10 py-2 flex-1">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                    AO入試と一般入試の「共倒れ」
                  </h3>
                  <p className="text-[#333333] leading-relaxed text-lg">
                    AO入試の準備で一般入試の対策がおろそかになり、一般入試に絞れば、AO入試というSFCへの挑戦機会が少なくなってしまう。一人では抱えきれない学習計画が、合格を遠ざけます。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/40 pl-5">
                <div className="text-xs font-bold text-[#C5A059] tracking-[0.2em] mb-2">原因 03</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  AO入試と一般入試の「共倒れ」
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  AO入試の準備で一般入試の対策がおろそかになり、一般入試に絞れば、AO入試というSFCへの挑戦機会が少なくなってしまう。一人では抱えきれない学習計画が、合格を遠ざけます。
                </p>
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
          <SectionTitle subtitle="「私でもできるのかな」や「私でも間に合うのかな」という不安を塾長が伴走し解決します。">
            小規模塾だから実現する塾長の手厚い指導。<br className="hidden md:block" />合格に導く佐藤塾メソッド
          </SectionTitle>

          {/* PC版：3x3 グリッドによる絶対に崩れない（被らない）サイクルUI */}
          <div className="relative mt-16 hidden md:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-2 lg:gap-x-4 gap-y-6 lg:gap-y-8 items-stretch max-w-6xl mx-auto">

            {/* --- 1段目 --- */}
            {/* 01 左上 */}
            <div className="bg-[#F8F9FA] rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm flex flex-col relative hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0 text-sm lg:text-base">01</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-tight">いつでも気軽にLINEで提出</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">小論文の答案や志望理由書のドラフトが書けたら、スマホからLINEでいつでも提出。回数制限は一切ありません。</p>
              </div>
            </div>

            {/* 矢印 01 -> 02 */}
            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 text-[#C5A059] opacity-50" />
            </div>

            {/* 02 右上 (脱AI) */}
            <div className="bg-[#F8F9FA] rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm flex flex-col relative hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0 text-sm lg:text-base">02</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-tight">塾長による超高速・直接添削</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">提出後、すべての答案に塾長が直接目を通し、思考のクセを徹底解剖。<strong className="text-[#800000]">24時間以内の超高速フィードバック</strong>で、SFC特有の論理構成を叩き込みます。</p>
              </div>
            </div>

            {/* --- 2段目 --- */}
            {/* 矢印 04 -> 01 */}
            <div className="flex items-center justify-center">
              <ArrowUp className="w-8 h-8 lg:w-10 lg:h-10 text-[#C5A059] opacity-50" />
            </div>

            {/* 中央：四角い画像＆バッジ */}
            <div className="flex flex-col items-center justify-center w-[240px] lg:w-[320px] mx-auto py-2">
              <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-slate-100 flex items-center justify-center mb-4 shadow-sm border border-slate-200">
                <img
                  src="/fv-coaching.jpg"
                  alt="佐藤塾 塾長とのオンライン1on1指導風景"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="bg-[#C5A059] text-white px-6 lg:px-8 py-2.5 rounded-full font-bold shadow-sm flex items-center gap-2 tracking-widest text-sm lg:text-base whitespace-nowrap">
                <RefreshCcw className="w-4 h-4 lg:w-5 lg:h-5 animate-spin-slow" />
                圧倒的密度で反復
              </div>
            </div>

            {/* 矢印 02 -> 03 */}
            <div className="flex items-center justify-center">
              <ArrowDown className="w-8 h-8 lg:w-10 lg:h-10 text-[#C5A059] opacity-50" />
            </div>

            {/* --- 3段目 --- */}
            {/* 04 左下 */}
            <div className="bg-[#F8F9FA] rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm flex flex-col relative hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0 text-sm lg:text-base">04</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-tight">塾長直通ラインで軌道修正</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">面談後、次の課題を進める中で迷ったらいつでも塾長直通のLINEで相談可能。小さな不安をその日のうちに解消し、迷いなく勉強に集中させます。</p>
              </div>
            </div>

            {/* 矢印 03 -> 04 */}
            <div className="flex items-center justify-center">
              <ArrowLeft className="w-8 h-8 lg:w-10 lg:h-10 text-[#C5A059] opacity-50" />
            </div>

            {/* 03 右下 */}
            <div className="bg-[#fff5f5] rounded-2xl p-6 lg:p-8 border border-[#800000]/10 shadow-sm flex flex-col relative hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-4">
                <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0 text-sm lg:text-base">03</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#800000] leading-tight">塾長との1on1オンライン指導</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">面談を実施し、直近の総括を共有。小論文やAOだけではなく、他の教科の学習計画の策定なども行います。</p>
              </div>
            </div>

          </div>

          {/* スマホ版：縦型タイムライン */}
          <div className="md:hidden relative mt-12 space-y-6 max-w-md mx-auto">
            {/* 01 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">01</div>
                <h3 className="text-lg font-bold text-[#002147]">いつでもLINEで提出</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">小論文の答案や志望理由書のドラフトが書けたら、スマホからLINEでいつでも提出。回数制限は一切ありません。</p>
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 02 (脱AI) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">02</div>
                <h3 className="text-lg font-bold text-[#002147]">塾長による超高速・直接添削</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">提出後、すべての答案に塾長が直接目を通し、思考のクセを徹底解剖。<strong className="text-[#800000]">24時間以内の超高速フィードバック</strong>で、SFC特有の論理構成を叩き込みます。</p>
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 03 */}
            <div className="bg-[#fff5f5] rounded-2xl border border-[#800000]/10 overflow-hidden shadow-sm relative z-10 flex flex-col h-full">
              <div className="p-6 flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">03</div>
                  <h3 className="text-lg font-bold text-[#800000]">塾長との1on1オンライン指導</h3>
                </div>
                <p className="text-[#333333] text-sm leading-relaxed mb-4">
                  基礎が整った答案をもとに、週1回の面談を実施。「なぜそう考えたの？」と塾長が直接問いかけ、あなただけの強みを限界まで引き出します。
                </p>
              </div>
              {/* スマホ版もインライン画像を配置 */}
              <div className="mx-6 mb-6 aspect-video bg-slate-100 overflow-hidden rounded-xl flex items-center justify-center border border-slate-200">
                <img src="/fv-coaching.jpg" alt="指導風景" className="w-full h-full object-cover object-center" />
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 04 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">04</div>
                <h3 className="text-lg font-bold text-[#002147]">塾長直通ラインで軌道修正</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">面談後、次の課題を進める中で迷ったらいつでも塾長のLINEに相談可能。小さな不安や相談をその日のうちに解消します。</p>
              </div>
            </div>

            {/* Mobile Cycle Loop Indicator */}
            <div className="flex flex-col items-center mt-12 pt-8 relative z-10">
              <RefreshCcw className="w-8 h-8 text-[#C5A059] mb-4 opacity-70" />
              <p className="text-[#002147] font-bold text-base sm:text-lg tracking-wide sm:tracking-widest text-center text-balance leading-relaxed">
                合格まで、このサイクルを<br/><span className="text-[#800000] border-b border-[#800000]">圧倒的密度で反復</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Message Section */}
      <section className="py-24 px-4 bg-[#F9F9F9] border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center md:justify-start">
              {/* Principal's Profile Photo */}
              <div className="w-full max-w-[400px] aspect-[4/5] bg-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden border border-white/50">
                <img
                  src="/og-image.png"
                  alt="佐藤塾 塾長 佐藤颯太"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#002147]/30" />
                <span className="text-sm font-bold text-[#002147] tracking-widest font-serif">MESSAGE</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#002147] mb-8 font-serif tracking-[0.08em] leading-snug">
                偏差値40台からの<br />大逆転を、私が直接導く。
              </h3>
              <p className="text-lg text-[#333333] mb-6 leading-relaxed">
                「もともと文章を書くのが苦手」「すごい実績なんてない」。SFC合格者の8割は、皆さんと同じ不安を抱えてスタートしました。
              </p>
              <p className="text-lg text-[#333333] mb-6 leading-relaxed">
                エリートしか受からないという誤解を捨ててください。<br />正しい戦略を立て、泥臭く地道に指導を吸収すれば、大逆転は十分に可能です。
              </p>
              <p className="text-lg text-[#333333] mb-6 leading-relaxed">
                6年間で39名の逆転合格を生み出したノウハウで、あなたの「本当の実力」を引き出します。
              </p>
              <p className="text-lg text-[#333333] mb-10 leading-relaxed">
                <strong className="text-[#800000] border-b-2 border-[#800000]/30 pb-1">私が直接、あなたと並走することを約束します。</strong>
              </p>
              <div className="border-l-4 border-[#C5A059] pl-6 py-1">
                <p className="text-xl font-bold text-[#002147] font-serif tracking-wide">
                  総合政策学部卒業生 佐藤颯太
                </p>
                <p className="text-base text-[#666666] mt-2">佐藤塾 塾長</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: リアルな添削ビフォーアフター Section (AIデモの代替・上品デザイン) */}
      <section className="relative py-28 px-4 bg-white overflow-hidden border-t border-[#E5E7EB]">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              「AIには絶対に書けない」<br className="sm:hidden" />
              塾長直筆の泥臭い赤ペン添削
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-4xl mx-auto text-left md:text-center">
              SFCの教授陣は、ChatGPTが書いたような「どこかで見た綺麗事」を一瞬で見抜きます。<br className="hidden md:block" />
              だからこそ佐藤塾では、<strong className="text-[#800000]">塾長自らがすべての答案に目を通し、あなたの本音と情熱を引き出すために真っ赤になるまで添削</strong>します。
            </p>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-8" />
          </div>

          <div className="bg-[#F9F9F9] border border-slate-200 rounded-2xl overflow-hidden mt-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#002147] font-serif mb-10 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
                <PenTool className="w-6 h-6 text-[#800000]" />
                実際の添削事例：思考の「深さ」を限界まで引き出す
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Before */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 relative pt-12 shadow-sm h-full flex flex-col">
                  <span className="absolute top-0 left-0 bg-slate-500 text-white text-xs font-bold px-4 py-2 rounded-br-lg rounded-tl-xl tracking-widest">生徒の初回答案（Before）</span>
                  <div className="flex-1">
                    <p className="text-[#666666] leading-loose text-base mt-2">
                      「私は地域の過疎化問題に興味があります。解決のためには、IT技術を活用して遠隔地からでも医療や教育を受けられるようにするべきだと思います。」
                    </p>
                  </div>
                </div>
                
                {/* After */}
                <div className="bg-[#fff5f5] p-8 rounded-xl border border-[#800000]/20 relative pt-12 shadow-sm h-full flex flex-col">
                  <span className="absolute top-0 left-0 bg-[#800000] text-white text-xs font-bold px-4 py-2 rounded-br-lg rounded-tl-xl tracking-widest">塾長の赤ペン添削（After）</span>
                  <div className="flex-1">
                    <p className="text-[#333333] font-medium leading-loose text-base mt-2">
                      「『IT技術を活用』では抽象的すぎて、SFCの教授には刺さりません。<strong className="text-[#800000] border-b border-dashed border-[#800000]/50 pb-0.5">あなたが実際に足を踏み入れたA町の事例</strong>をベースに、『高齢者が直感的に使えるUIを持った遠隔医療アプリのプロトタイプ提案』まで具体化しましょう。なぜあなたがそれをやるのか、原体験をもっと前面に出してください！」
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-[#666666] leading-relaxed text-sm font-medium flex items-start gap-2">
                  <span className="text-[#800000] font-bold mt-0.5">※</span>
                  <span>表面的なてにをはの修正はしません。「なぜSFCに行きたいのか」「社会をどう変えたいのか」という根本の問いに、塾長が本気でぶつかります。この圧倒的な熱量と対話の反復こそが、偏差値40台からSFC合格をもたらす唯一の道です。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate CTA Section */}
      <section className="py-20 px-4 bg-[#F9F9F9] relative overflow-hidden border-t border-[#E5E7EB]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/5 to-[#800000]/5"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif mb-6 leading-snug">
            「自分に何ができるかわからない」<br className="md:hidden" />と悩んでいませんか？
          </h3>
          <p className="text-base md:text-lg text-[#333333] mb-8 leading-relaxed">
            実績ゼロからの大逆転は、<strong className="text-[#800000] border-b border-[#800000]/30 pb-0.5">「現状を正確に把握し、プロと正しい戦略を立てること」</strong>から始まります。<br className="hidden md:block" />まずは無料相談で、あなたの不安や現状をすべて塾長に聞かせてください。
          </p>
          <a href="#contact-form" onClick={handleSmoothScroll}>
            <Button className="w-full max-w-full bg-[#800000] hover:bg-[#C5A059] text-white font-bold px-4 md:px-10 py-6 h-auto text-base md:text-xl transition-all duration-300 shadow-[0_4px_14px_0_rgb(128,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(197,160,89,0.23)] hover:-translate-y-1 rounded-full group whitespace-normal">
              <span className="flex items-center gap-3">
                まずは無料で塾長に相談する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
        </div>
      </section>

      {/* Roadmap Section (脱AI化) */}
      <section className="py-28 px-4 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              合格までのロードマップ
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto">
              いつ、何をして合格を掴むか。個人差はありますが、今からの学習ロードマップとしては下記の通りです。
            </p>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-8" />
          </div>

          {/* PC版ロードマップ (Pure CSS Timeline) */}
          <div className="hidden lg:block">
            <div className="relative pt-8">
              {/* Horizontal Timeline Line */}
              <div className="absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#002147] via-[#800000] to-[#C5A059] rounded-full opacity-30" />

              <div className="grid grid-cols-3 gap-10 items-stretch">
                {/* STEP 01: 9月〜10月 */}
                <div className="relative h-full flex flex-col">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-xl font-serif shadow-md z-10 border-4 border-white">
                      01
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#002147]/5 px-5 py-1.5 rounded-full border border-[#002147]/10">
                      <span className="text-sm font-bold text-[#002147] tracking-widest">9月〜10月</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 border-t-4 border-t-[#002147] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative flex-1 flex flex-col">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#002147] text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                      塾長の徹底伴走
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center">
                      小論文の基本のきを<br />急ピッチで培う
                    </h3>
                    <div className="flex-1">
                      <p className="text-sm text-[#666666] leading-relaxed">
                        200文字程度の要約や自分の意見に関する小論文を作成してもらいます。その後、塾長が直接添削を通じて論理破綻をなくし、SFC特有の<strong className="text-[#800000]">「独自性」</strong>を引き上げます。これを頻度高く行います。
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 02: 11月 */}
                <div className="relative h-full flex flex-col">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold text-xl font-serif shadow-md z-10 border-4 border-white">
                      02
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#800000]/5 px-5 py-1.5 rounded-full border border-[#800000]/10">
                      <span className="text-sm font-bold text-[#800000] tracking-widest">11月</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 border-t-4 border-t-[#800000] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative flex-1 flex flex-col">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#800000] text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                      塾長の直接指導
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center">
                      慶應経済学部の過去問を通じて<br />実践能力を培う
                    </h3>
                    <div className="flex-1">
                      <p className="text-sm text-[#666666] leading-relaxed">
                        基本を培った後に、慶應SFCの過去問の前に慶應経済の過去問に取り組みます。ここでは時間の制約なども行い<strong className="text-[#800000]">実践能力</strong>を培います。これがSFC過去問へ着手する前の準備となります。
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 03: 12月〜入試 */}
                <div className="relative h-full flex flex-col">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold text-xl font-serif shadow-md z-10 border-4 border-white">
                      03
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#C5A059]/10 px-5 py-1.5 rounded-full border border-[#C5A059]/20">
                      <span className="text-sm font-bold text-[#002147] tracking-widest">12月〜入試</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 border-t-4 border-t-[#C5A059] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative flex-1 flex flex-col">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#002147] text-xs font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                      塾長主体
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center">
                      塾長とともに<br />合格レベルに仕上げていく
                    </h3>
                    <div className="flex-1">
                      <p className="text-sm text-[#666666] leading-relaxed">
                        およそ3ヶ月間は慶應SFCの過去問演習を行います。同じ問題でも複数の答案を作成し、特定の分野に偏らない<strong className="text-[#800000]">柔軟性</strong>を培っていきます。いかなる状況でも合格圏内に入ることを目指します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* スマホ版ロードマップ (Pure CSS Vertical Timeline) */}
          <div className="lg:hidden mt-10">
            <div className="relative max-w-md mx-auto px-4">
              {/* Vertical Timeline Line */}
              <div className="absolute left-9 top-4 bottom-10 w-1 bg-gradient-to-b from-[#002147] via-[#800000] to-[#C5A059] rounded-full opacity-30" />

              {/* STEP 01: 9月〜10月 */}
              <div className="relative pl-14 pb-12">
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-base font-serif shadow-md z-10 border-4 border-white">
                  01
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 border-l-4 border-l-[#002147]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#002147]/5 border border-[#002147]/10 text-[#002147] text-xs font-bold px-3 py-1 rounded-full">塾長の徹底伴走</span>
                    <span className="text-xs font-bold text-[#002147] tracking-wider">9月〜10月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-3">
                    小論文の基本のきを培う
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    200文字程度の要約や自分の意見に関する小論文を作成してもらいます。その後、塾長が直接添削を通じて論理破綻をなくし、SFC特有の<strong className="text-[#800000]">「独自性」</strong>を引き上げます。これを頻度高く行います。
                  </p>
                </div>
              </div>

              {/* STEP 02: 11月 */}
              <div className="relative pl-14 pb-12">
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold text-base font-serif shadow-md z-10 border-4 border-white">
                  02
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 border-l-4 border-l-[#800000]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#800000]/5 border border-[#800000]/10 text-[#800000] text-xs font-bold px-3 py-1 rounded-full">塾長の直接指導</span>
                    <span className="text-xs font-bold text-[#800000] tracking-wider">11月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-3">
                    慶應経済学部の過去問を通じて実践能力を培う
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    基本を培った後に、慶應SFCの過去問の前に慶應経済の過去問に取り組みます。ここでは時間の制約なども行い<strong className="text-[#800000]">実践能力</strong>を培います。これがSFC過去問へ着手する前の準備となります。
                  </p>
                </div>
              </div>

              {/* STEP 03: 12月〜 */}
              <div className="relative pl-14 pb-4">
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold text-base font-serif shadow-md z-10 border-4 border-white">
                  03
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 border-l-4 border-l-[#C5A059]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#002147] text-xs font-bold px-3 py-1 rounded-full">塾長主体</span>
                    <span className="text-xs font-bold text-[#002147] tracking-wider">12月〜入試</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-3">
                    塾長とともに合格レベルに仕上げていく
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    およそ3ヶ月間は慶應SFCの過去問演習を行います。同じ問題でも複数の答案を作成し、特定の分野に偏らない<strong className="text-[#800000]">柔軟性</strong>を培っていきます。いかなる状況でも合格圏内に入ることを目指します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-28 px-4 bg-[#F9F9F9] border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              佐藤塾と他塾の比較表
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto">
              佐藤塾は授業料の透明性と、圧倒的な指導密度を担保しています。
            </p>
            <div className="w-12 h-px bg-[#002147]/40 mx-auto mt-8" />
          </div>

          <div className="hidden md:block pt-6 overflow-visible rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white border border-slate-100">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-8 text-left font-bold font-serif text-base tracking-wide bg-[#FAF9F6] text-[#333333] border-r border-[#E5E7EB] rounded-tl-2xl">項目</th>
                  <th className="p-8 text-center font-bold font-serif text-xl tracking-widest bg-[#002147] text-white border-x border-[#002147] relative w-1/3">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-xs font-bold px-6 py-1.5 rounded-full shadow-md z-20 tracking-widest whitespace-nowrap">SFC特化</span>
                    佐藤塾
                  </th>
                  <th className="p-8 text-center font-bold font-serif text-base tracking-wide bg-white text-[#666666] border-x border-[#E5E7EB]">SFC特化塾</th>
                  <th className="p-8 text-center font-bold font-serif text-base tracking-wide bg-[#FAF9F6] text-[#666666] rounded-tr-2xl">一般の予備校</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147] border-r border-[#E5E7EB]">小論文の添削</td>
                  <td className="p-6 text-center bg-[#002147]/5 text-[#002147] border-x border-[#002147]/10">
                    <p className="text-lg font-bold">回数無制限</p>
                    <p className="text-xs text-[#800000] mt-1">（塾長の超高速・直接添削）</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666] border-x border-[#E5E7EB]">週1〜4回<br /><span className="text-xs">（対面メイン）</span></td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#666666]">週1回<br /><span className="text-xs">（学生バイト中心）</span></td>
                </tr>

                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147] border-r border-[#E5E7EB]">対策範囲</td>
                  <td className="p-6 text-center bg-[#002147]/5 text-[#002147] border-x border-[#002147]/10">
                    <p className="text-lg font-bold text-[#800000]">AO・一般 二刀流</p>
                    <p className="text-xs text-[#800000] mt-1">（完全並走）</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666] border-x border-[#E5E7EB]">AOのみ<br /><span className="text-xs">または別途料金で一般入試も対象</span></td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#666666]">一般入試のみ</td>
                </tr>

                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147] border-r border-[#E5E7EB]">費用（年間）</td>
                  <td className="p-6 text-center bg-[#002147]/5 border-x border-[#002147]/10">
                    <p className="text-xl font-bold text-[#800000]">月額 11.8万円〜</p>
                    <p className="text-xs text-[#800000] mt-1 font-bold">※講習費・教材費 0円</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666] border-x border-[#E5E7EB]">年間 150万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#666666]">年間 100万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                </tr>

                <tr>
                  <td className="p-6 font-bold text-[#002147] border-r border-[#E5E7EB] rounded-bl-2xl">質問・相談</td>
                  <td className="p-6 text-center bg-[#002147]/5 border-x border-[#002147]/10">
                    <p className="text-lg font-bold text-[#800000]">塾長直通ライン</p>
                    <p className="text-xs text-[#800000] mt-1">24時間いつでも質問可能</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666] border-x border-[#E5E7EB]">予約制 / 開校時間内</td>
                  <td className="p-6 text-center bg-[#FAF9F6] text-[#666666] rounded-br-2xl">予約制 / 開校時間内</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:hidden mt-8 pb-6 relative">
            <div className="overflow-x-auto overflow-y-visible rounded-xl shadow-md bg-white mt-6 border border-slate-200">
              <table className="w-full border-collapse" style={{ minWidth: '420px' }}>
                <thead>
                  <tr>
                    <th className="sticky left-0 z-20 p-4 text-left font-bold text-[#333333] text-sm bg-[#FAF9F6] border-r border-[#E5E7EB] border-b border-[#E5E7EB]" style={{ minWidth: '90px' }}>項目</th>
                    <th className="p-4 text-center font-bold text-white text-[13px] bg-[#002147] relative border-b border-[#002147]" style={{ minWidth: '90px' }}>佐藤塾</th>
                    <th className="p-4 text-center font-bold text-[#666666] text-xs bg-white border-l border-b border-[#E5E7EB]" style={{ minWidth: '80px' }}>特化塾</th>
                    <th className="p-4 text-center font-bold text-[#666666] text-xs bg-[#FAF9F6] border-l border-b border-[#E5E7EB]" style={{ minWidth: '80px' }}>一般塾</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-4 font-bold text-[#002147] text-[13px] bg-[#FAF9F6] border-r border-[#E5E7EB]">小論文添削</td>
                    <td className="p-4 bg-[#002147]/5 text-center">
                      <p className="text-[13px] font-bold text-[#002147] leading-snug">回数無制限</p>
                      <p className="text-[10px] text-[#800000] mt-1">塾長の直接添削</p>
                    </td>
                    <td className="p-4 bg-white text-center text-xs text-[#666666] border-l border-[#E5E7EB]">週1〜4回</td>
                    <td className="p-4 bg-[#FAF9F6] text-center text-xs text-[#666666] border-l border-[#E5E7EB]">週1回</td>
                  </tr>

                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-4 font-bold text-[#002147] text-[13px] bg-[#FAF9F6] border-r border-[#E5E7EB]">対策範囲</td>
                    <td className="p-4 bg-[#002147]/5 text-center">
                      <p className="text-[13px] font-bold text-[#800000] leading-snug">AO・一般二刀流</p>
                    </td>
                    <td className="p-4 bg-white text-center text-xs text-[#666666] border-l border-[#E5E7EB]">AOのみ</td>
                    <td className="p-4 bg-[#FAF9F6] text-center text-xs text-[#666666] border-l border-[#E5E7EB]">一般のみ</td>
                  </tr>

                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-4 font-bold text-[#002147] text-[13px] bg-[#FAF9F6] border-r border-[#E5E7EB]">月額費用</td>
                    <td className="p-4 bg-[#002147]/5 text-center">
                      <p className="text-sm font-bold text-[#800000]">11.8万〜</p>
                      <p className="text-[10px] text-[#800000] font-bold mt-1">※講習費0円</p>
                    </td>
                    <td className="p-4 bg-white text-center text-xs text-[#666666] border-l border-[#E5E7EB]">12万〜+講習費</td>
                    <td className="p-4 bg-[#FAF9F6] text-center text-xs text-[#666666] border-l border-[#E5E7EB]">8万〜+講習費</td>
                  </tr>

                  <tr>
                    <td className="sticky left-0 z-20 p-4 pb-6 font-bold text-[#002147] text-[13px] bg-[#FAF9F6] border-r border-[#E5E7EB]">相談対応</td>
                    <td className="p-4 pb-6 bg-[#002147]/5 text-center">
                      <p className="text-[13px] font-bold text-[#800000] leading-snug">塾長直通ライン</p>
                    </td>
                    <td className="p-4 pb-6 bg-white text-center text-xs text-[#666666] border-l border-[#E5E7EB]">予約制</td>
                    <td className="p-4 pb-6 bg-[#FAF9F6] text-center text-xs text-[#666666] border-l border-[#E5E7EB]">予約制</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <p className="text-sm md:text-base text-[#666666] leading-relaxed">
              <strong className="text-[#800000] text-base md:text-lg">※ 佐藤塾の費用は月額 11.8万円〜。</strong><br className="md:hidden" />
              講習費、教材費といった追加料金は一切かかりません。他塾のように「合格時には別途〇万円」といった費用も発生しません。
            </p>
          </div>
        </div>
      </section>

      {/* Six Reasons Section (脱AI化) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>佐藤塾が選ばれる6つの理由</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {[
              { num: '01', title: 'AOと一般二刀流対応', desc: 'どちらの受験方式でも、あるいは両方での受験でも完全サポート' },
              { num: '02', title: '24時間以内の超高速添削', desc: '提出書類や小論文の論理破綻を塾長が瞬時に見抜き、修正時間を短縮' },
              { num: '03', title: '塾長の熱量ある1on1', desc: 'SFC合格の明暗を分ける「独自性」の言語化を塾長が直接指導' },
              { num: '04', title: 'AO合格後の追加費用0円', desc: 'AO合格後は卒業となり自動退塾となります。追加料金は不要' },
              { num: '05', title: 'SFC特化ロジック', desc: '6年間の指導実績に基づく、SFC合格に必要な全てを網羅' },
              { num: '06', title: '通塾ゼロ', desc: '指導も授業もすべてオンライン。通塾時間を勉強に充てられる' },
            ].map((item) => (
              <Card key={item.num} className="bg-white shadow-sm border border-slate-200 rounded-2xl hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-5">
                    <div className="text-4xl md:text-5xl font-bold text-[#C5A059]/40 font-serif tracking-tighter">
                      {item.num}
                    </div>
                    <div className="pt-2">
                      <CardTitle className="text-lg md:text-xl font-serif tracking-wide text-[#002147]">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm md:text-base text-[#666666] leading-relaxed pl-[4.5rem]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (脱AI化) */}
      <section className="py-28 px-4 bg-[#F9F9F9] border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="AO入試受験の有無で決められるシンプルなプラン">2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-12">
            <div className="relative flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 rounded-3xl overflow-hidden transform md:-translate-y-4 h-full">
              <div className="absolute top-6 right-6 bg-[#C5A059] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm z-10 tracking-widest">
                人気No.1
              </div>

              <div className="bg-[#002147] text-white px-8 py-10">
                <h4 className="text-2xl md:text-3xl font-bold font-serif tracking-wide mb-2">SFC二刀流プラン</h4>
                <p className="text-white/80 text-sm font-medium">AO入試 ＋ 一般入試 完全並走</p>
              </div>

              <div className="flex-1 flex flex-col p-8 md:p-10">
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <p className="text-[#666666] text-sm mb-2 font-medium tracking-widest">月額料金</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-[#800000] font-serif">138,000</span>
                    <span className="text-xl font-bold text-[#800000]">円</span>
                  </div>
                  <p className="text-sm text-[#999999] mt-2">（税込 151,800円）</p>
                </div>

                <div className="flex items-center gap-3 mb-8 bg-[#FAF9F6] p-4 rounded-xl">
                  <Check className="w-5 h-5 text-[#C5A059]" />
                  <span className="text-sm font-bold text-[#002147]">追加講習費・教材費 一切0円</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333]">塾長1on1授業 <span className="font-bold text-[#800000]">週1回</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333]">小論文・書類の超高速添削 <span className="font-bold text-[#800000]">回数無制限</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333]">受験戦略立案（AO・一般 二刀流対応）</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333]">英語・数学・情報の学習支援 <span className="font-bold text-[#800000]">徹底管理</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    <span className="text-base text-[#333333]">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button className="w-full bg-[#800000] hover:bg-[#C5A059] text-white h-16 text-lg font-bold rounded-xl shadow-md transition-all duration-300">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course">
                    <Button variant="ghost" className="w-full text-[#002147] hover:text-[#800000] hover:bg-transparent h-12 text-sm font-bold group">
                      プランの詳細を確認する
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-3xl overflow-hidden mt-8 md:mt-0 h-full">
              <div className="bg-[#FAF9F6] text-[#002147] px-8 py-10 border-b border-slate-100">
                <h4 className="text-2xl md:text-3xl font-bold font-serif tracking-wide mb-2">小論文特化プラン</h4>
                <p className="text-[#666666] text-sm font-medium">他塾併願者・小論文対策のみをご希望の方</p>
              </div>

              <div className="flex-1 flex flex-col p-8 md:p-10">
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <p className="text-[#666666] text-sm mb-2 font-medium tracking-widest">月額料金</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-[#002147] font-serif">118,000</span>
                    <span className="text-xl font-bold text-[#002147]">円</span>
                  </div>
                  <p className="text-sm text-[#999999] mt-2">（税込 129,800円）</p>
                </div>

                <div className="flex items-center gap-3 mb-8 bg-[#FAF9F6] p-4 rounded-xl opacity-70">
                  <Check className="w-5 h-5 text-[#666666]" />
                  <span className="text-sm font-bold text-[#666666]">追加講習費・教材費 一切0円</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] mt-2 flex-shrink-0 opacity-60" />
                    <span className="text-base text-[#333333]">塾長1on1授業 <span className="font-bold text-[#002147]">月1回</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] mt-2 flex-shrink-0 opacity-60" />
                    <span className="text-base text-[#333333]">小論文の超高速添削 <span className="font-bold text-[#002147]">回数無制限</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] mt-2 flex-shrink-0 opacity-60" />
                    <span className="text-base text-[#333333]">指導科目 <span className="font-bold text-[#002147]">小論文のみ</span></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] mt-2 flex-shrink-0 opacity-60" />
                    <span className="text-base text-[#333333]">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button variant="outline" className="w-full border-2 border-slate-200 text-[#002147] hover:border-[#002147] hover:bg-transparent h-16 text-lg font-bold rounded-xl transition-all duration-300">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course">
                    <Button variant="ghost" className="w-full text-[#666666] hover:text-[#002147] hover:bg-transparent h-12 text-sm font-bold group">
                      プランの詳細を確認する
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#002147] rounded-3xl p-8 md:p-10 shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-3xl font-serif font-bold text-[#C5A059]">!</span>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl font-bold mb-3 font-serif">AO入試合格 ＝ 卒業。合格後の費用は一切かかりません。</p>
                <p className="text-base text-white/80 leading-relaxed max-w-3xl">
                  AO入試合格後は、合格発表日の月末をもって自動退塾（契約終了）となります。だからこそ、親御様も安心してお子さんの受験を応援できます。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="mt-1 bg-[#800000]/10 p-2 rounded-full flex-shrink-0">
                <Check className="w-4 h-4 text-[#800000]" />
              </div>
              <div>
                <p className="font-bold text-[#002147] text-base mb-2">入会金＋授業料のみ</p>
                <p className="text-sm text-[#666666] leading-relaxed">追加講習費や合格祝福金などは一切かかりません。</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="mt-1 bg-[#800000]/10 p-2 rounded-full flex-shrink-0">
                <Check className="w-4 h-4 text-[#800000]" />
              </div>
              <div>
                <p className="font-bold text-[#002147] text-base mb-2">月単位でプラン変更可能</p>
                <p className="text-sm text-[#666666] leading-relaxed">学習進度や状況に応じて、柔軟に対応できます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essay Method Section */}
      <section className="py-20 md:py-24 px-4 bg-[#FAF9F6] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto text-center bg-white p-10 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] font-serif mb-6 tracking-wide" style={{ wordBreak: 'keep-all' }}>
            佐藤塾の小論文指導とは
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed mb-10 max-w-2xl mx-auto">
            慶應SFC合格に欠かせない「問いを立てる力」を、塾長がどのように鍛えているか。合格メソッドの全貌を公開しています。
          </p>
          <Link href="/guide/essay">
            <Button className="w-full max-w-md bg-[#002147] hover:bg-[#800000] text-white font-bold px-10 py-7 h-auto text-base md:text-lg transition-all duration-300 rounded-full shadow-md hover:shadow-lg whitespace-normal">
              小論文学習メソッドの詳細説明はこちら
            </Button>
          </Link>
        </div>
      </section>

      {/* SFC Guides Section */}
      <section className="py-24 px-4 bg-[#002147]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-widest mb-6">
              SFC合格のための完全対策ガイド
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              佐藤塾が積み重ねてきた「小論文」と「AO入試」の攻略メソッドを、すべて無料で公開しています。ぜひ読んでみてください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Link href="/guide/essay/articles" className="group block h-full">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 h-full border border-white/10 hover:border-[#C5A059]/50 hover:bg-white/10 transition-all duration-300 flex flex-col">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 flex-shrink-0">
                  <PenTool className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif mb-4 group-hover:text-[#C5A059] transition-colors">
                  小論文 対策ガイド
                </h3>
                <div className="flex-1">
                  <p className="text-white/70 mb-10 leading-relaxed">
                    「何を書けばいいかわからない」を抜け出して、SFCの教授をうなずかせる文章の組み立て方と、資料の読み解き方をわかりやすく解説します。
                  </p>
                </div>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto tracking-widest text-sm uppercase">
                  <span>View Articles</span>
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/ao-guide" className="group block h-full">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 h-full border border-white/10 hover:border-[#C5A059]/50 hover:bg-white/10 transition-all duration-300 flex flex-col">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 flex-shrink-0">
                  <Target className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif mb-4 group-hover:text-[#C5A059] transition-colors">
                  AO入試 対策ガイド
                </h3>
                <div className="flex-1">
                  <p className="text-white/70 mb-10 leading-relaxed">
                    目立つ実績がなくても大丈夫。自分だけの研究テーマの見つけ方から、志望理由書やポートフォリオの作り方まで、一つひとつ丁寧に解説します。
                  </p>
                </div>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto tracking-widest text-sm uppercase">
                  <span>View Guide</span>
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
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

          <Card className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 rounded-3xl overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-[#002147] via-[#800000] to-[#C5A059]"></div>
            <CardContent className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-[#800000]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#002147] mb-4 font-serif">送信が完了しました！</h3>
                  <p className="text-[#333333] leading-relaxed mb-6 text-lg">
                    お申し込みいただきありがとうございます。<br />
                    担当者より24時間以内にご連絡いたします。
                  </p>
                  <p className="text-sm text-[#666666]">
                    ※メールが届かない場合は、迷惑メールフォルダをご確認ください。
                  </p>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleFormSubmit}>
                  {formError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="text-sm text-red-700 font-medium">{formError}</p>
                    </div>
                  )}

                  <div className="mb-10 p-6 bg-[#FAF9F6] rounded-xl border border-slate-200">
                    <p className="text-sm text-[#333333] font-bold mb-3 leading-relaxed">
                      ※ ご相談者の8割が<span className="text-[#800000]">「実績ゼロ」「小論文未経験」</span>からのスタートです。現在の実力は一切問いません。
                    </p>
                    <p className="text-sm text-[#333333] font-bold leading-relaxed">
                      ※ 無理な入塾勧誘は一切行いません。まずはSFC受験のプロ（塾長）との壁打ちとしてお気軽にご利用ください。
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3">
                      お名前 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="佐藤塾太郎"
                      className="rounded-xl border-slate-200 focus:border-[#002147] focus:ring-0 h-14 bg-[#FAF9F6] px-4"
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
                      className="rounded-xl border-slate-200 focus:border-[#002147] focus:ring-0 h-14 bg-[#FAF9F6] px-4"
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
                      className="rounded-xl border-slate-200 focus:border-[#002147] focus:ring-0 h-14 bg-[#FAF9F6] px-4"
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
                        className="w-full h-14 px-4 border border-slate-200 rounded-xl bg-[#FAF9F6] text-[#333333] focus:border-[#002147] focus:outline-none focus:ring-1 focus:ring-[#002147] appearance-none"
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        required
                      >
                        <option value="">プランを選択してください</option>
                        <option value="complete">AO入試＋一般入試：SFC二刀流プラン</option>
                        <option value="basic">小論文のみ：小論文特化プラン</option>
                      </select>
                      {/* 上品な下矢印アイコンを追加 */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#002147]">
                        <ArrowDown className="w-4 h-4 opacity-50" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3">
                      ご質問・ご相談
                    </label>
                    <Textarea
                      placeholder="SFC合格に向けて不安なこと、知りたいことをご自由にお書きください。塾長が直接お答えします。"
                      className="rounded-xl border-slate-200 focus:border-[#002147] focus:ring-0 min-h-[160px] bg-[#FAF9F6] p-4 leading-relaxed"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full max-w-full bg-[#800000] hover:bg-[#C5A059] text-white min-h-[64px] h-auto px-6 py-4 text-base md:text-lg font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    >
                      <span className="flex items-center justify-center gap-3">
                        {isLoading ? '送信中...' : '今すぐ無料で個別相談を予約する'}
                        {!isLoading && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                      </span>
                    </Button>
                    <p className="text-xs text-center text-[#666666] mt-6 font-bold tracking-widest">
                      ※送信後、24時間以内に担当者よりご連絡いたします
                    </p>
                  </div>

                  <p className="text-xs text-center text-[#999999] pt-2">
                    送信いただいた情報は、お客様へのサービス提供のため、安全に管理されます。
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-[#800000] font-bold tracking-[0.2em] mb-3 font-serif">FAQ</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#002147] font-serif tracking-widest">よくある質問</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-[#FAF9F6] rounded-2xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 hover:bg-slate-50 transition-colors list-none">
                <span className="font-bold text-[#002147] text-base md:text-lg leading-relaxed">
                  パソコンを持っていない、または操作が苦手ですが大丈夫ですか？
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4 bg-white rounded-full p-2 border border-slate-200">
                  <ArrowDown className="w-5 h-5 text-[#002147]" />
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-[#666666] leading-relaxed pt-2">
                はい、まったく問題ありません。佐藤塾は<strong>スマートフォン1台</strong>だけで、添削も指導もすべて完結するように作られています。パソコンを持っているかどうかは合否に関係しませんので、安心して始めてください。
              </div>
            </details>

            <details className="group bg-[#FAF9F6] rounded-2xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 hover:bg-slate-50 transition-colors list-none">
                <span className="font-bold text-[#002147] text-base md:text-lg leading-relaxed">
                  なぜ50%という驚異的な合格率を実現できるのですか？
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4 bg-white rounded-full p-2 border border-slate-200">
                  <ArrowDown className="w-5 h-5 text-[#002147]" />
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-[#666666] leading-relaxed pt-2">
                塾長自身が生徒一人ひとりの答案にすべて目を通し、「なぜそう考えたのか？」という根本の問いに本気で向き合うからです。表面的なテクニックに頼らず、SFC合格に必要な「独自性」と「思考力」を地道に引き出すこの指導こそが、実績ゼロからの大逆転を生み出しています。
              </div>
            </details>

            <details className="group bg-[#FAF9F6] rounded-2xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 hover:bg-slate-50 transition-colors list-none">
                <span className="font-bold text-[#002147] text-base md:text-lg leading-relaxed">
                  入会金はかかりますか？
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4 bg-white rounded-full p-2 border border-slate-200">
                  <ArrowDown className="w-5 h-5 text-[#002147]" />
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-[#666666] leading-relaxed pt-2">
                入塾時に入会金として<strong>税込10万円</strong>をいただきます。それ以降は月額料金だけのお支払いで、追加の講習料などは一切かかりません。他塾のように後から追加費用が発生することもないので、安心して始めていただけます。
              </div>
            </details>

            <details className="group bg-[#FAF9F6] rounded-2xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 hover:bg-slate-50 transition-colors list-none">
                <span className="font-bold text-[#002147] text-base md:text-lg leading-relaxed">
                  途中で他のプランに変更できますか？
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4 bg-white rounded-full p-2 border border-slate-200">
                  <ArrowDown className="w-5 h-5 text-[#002147]" />
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-[#666666] leading-relaxed pt-2">
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