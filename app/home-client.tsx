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
<div className="text-center mb-16 px-4">
  <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
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
        "description": "慶應SFC（総合政策・環境情報）の一般入試・小論文対策に特化した専門塾。代表によるマンツーマン指導のため【本年度は残り3名】で募集を締め切ります。まずは完全無料の1週間お試し添削へ。",
        "image": "https://lifeeling.jp/hero.jpg",
        "founder": {
          "@type": "Person",
          "name": "佐藤颯太",
          "jobTitle": "塾長",
          "description": "慶應義塾大学総合政策学部卒業生。6年間で39名のSFC合格者を輩出。"
        },
        "knowsAbout": ["慶應SFC対策", "一般入試小論文", "ロジカルライティング"],
        "priceRange": "¥¥¥"
      },
      {
        "@type": "WebSite",
        "@id": "https://lifeeling.jp/#website",
        "url": "https://lifeeling.jp",
        "name": "【残り3名】慶應SFC特化の一般入試・小論文対策｜佐藤塾",
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
            10月からでも、絶対に間に合わせる。<br className="hidden md:block" />
            塾長が直接寄り添う1on1指導で掴む、
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#D4AF37] drop-shadow-none block mt-4 leading-tight">SFC合格。</span>
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            合格者の8割が、小論文未経験からのスタート。<br className="hidden md:block" />
            塾長があなたの答案に直接向き合うことで、<br className="hidden md:block" />残り期間での合格圏内に入ることを実現します。
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
                  一人ひとりへの指導の質を守るため、<br className="sm:hidden md:block" />今年度の直前対策パックの受付は<span className="text-[#C5A059] text-lg sm:text-xl ml-1 border-b border-[#C5A059]">残り3名</span>
                </p>
              </div>

              <a href="#contact-form" onClick={handleSmoothScroll} className="w-full block">
                <Button
                  size="lg"
                  className="w-full bg-[#800000] hover:bg-[#C5A059] text-white text-lg md:text-xl font-bold py-8 h-auto shadow-[0_4px_24px_rgba(128,0,0,0.6)] hover:shadow-[0_8px_32px_rgba(197,160,89,0.5)] transition-all duration-300 hover:-translate-y-1 border border-white/20 rounded-full group"
                >
                  <span className="flex items-center justify-center gap-2 font-serif flex-wrap px-2">
                    個別面談 ＆ お試し添削を予約する
                    <ArrowRight className="w-6 h-6 ml-1 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="md:hidden flex flex-col items-center justify-center p-6 border border-[#C5A059] rounded-lg bg-[#C5A059]/10 backdrop-blur-sm shadow-lg mb-4">
              <p className="text-xs text-[#C5A059] mb-1 tracking-[0.2em] font-bold uppercase font-serif">2026年度 合格実績</p>
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
              「なんとなく書けている気」が一番危ない。<br className="hidden sm:block" />
              SFCの小論文で落ちる2つの理由
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
                    一般的な小論文の学習になってしまっているから
                  </h3>
                  <p className="text-[#333333] leading-loose text-base md:text-lg">
                    特定の型に当てはめることや初めから過去問に入るなど、複雑な内容や出題形式に対応できない形で学習をしてしまっているからです。ありきたりな言葉では合格ラインに届きませ��。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/30 pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 01</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  一般的な小論文の学習になってしまっているから
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  特定の型に当てはめることや初めから過去問に入るなど、複雑な内容や出題形式に対応できない形で学習をしてしまっているからです。ありきたりな言葉では合格ラインに届きません。
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
                    「書いて直す」絶対的な回数が足りないから
                  </h3>
                  <p className="text-[#333333] leading-loose text-base md:text-lg">
                    小論文は添削と反復が全てです。大手予備校の平均添削回数は週2回、個別塾でも週3.5回程度ですが、佐藤塾では平均5回、最大で毎日の添削を行っています。直前期の「待ち時間」は成長の妨げになります。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-2 border-[#800000]/30 pl-5">
                <div className="text-xs font-bold text-[#800000] tracking-[0.2em] mb-2 font-serif">原因 02</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  「書いて直す」絶対的な回数が足りないから
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  小論文は添削と反復が全てです。大手予備校の平均添削回数は週2回、個別塾でも週3.5回程度ですが、佐藤塾では平均5回、最大で毎日の添削を行っています。直前期の「待ち時間」は成長の妨げになります。
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
  <h3 className="max-w-3xl text-[1.65rem] leading-[1.65] md:text-3xl md:leading-[1.55] lg:text-4xl lg:leading-[1.5] font-bold text-[#002147] mb-8 font-serif tracking-normal">
            <span className="block">SFCの小論文は、</span>
            <span className="block text-[#800000]">「事前に準備したアイデアや型」に<br className="hidden sm:block" />当てはめただけでは受かりません。</span>
            <span className="mt-4 block text-[1.8rem] leading-[1.55] md:text-3xl lg:text-4xl">あなたの泥臭い本音を<br className="hidden sm:block" />ぶつけてください。</span>
          </h3>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed">
                「文章が書けない」「すごい経験なんてない」。毎年のように、秋になると同じ不安を抱えた受験生がやってきます。私自身も最初からスラスラ書けたわけではありません。だからこそ、真っ白な原稿用紙を前にした時の苦しさも、壁の越え方も誰よりも知っています。
              </p>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed">
                どこかの参考書にあるような言葉や、AIが書いたような小論文はSFCには通用しません。必要なのは、あなたの中に眠る原体験を、徹底的な対話で言葉にする泥臭い作業です。
              </p>
              <p className="text-base md:text-lg text-[#333333] mb-8 leading-relaxed">
                佐藤塾は、私一人がすべての答案に向き合う小さな塾です。だからこそ、大手にはできない圧倒的な熱量とスピードで、あなたの「本当の魅力」を引き出します。
              </p>
              <p className="text-lg md:text-xl text-[#800000] mb-10 leading-relaxed font-bold font-serif inline-block" style={{ textDecoration: 'underline', textDecorationStyle: 'wavy', textUnderlineOffset: '6px' }}>
                SFC合格への最短距離を、私が直接、最後まで伴走します。
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
<SectionTitle>
              不安や迷いを残さない。<br className="hidden md:block" />塾長が完全密着する合格までの指導サイクル
            </SectionTitle>

          {/* PC版：3x3 グリッドによる絶対に崩れない（被らない）サイクルUI */}
          <div className="relative mt-16 hidden md:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-2 lg:gap-x-4 gap-y-6 lg:gap-y-8 items-stretch max-w-6xl mx-auto">

            {/* --- 1段目 --- */}
            {/* 01 左上 */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm flex flex-col justify-center relative hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 lg:gap-4 mb-5 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0 text-sm lg:text-base">01</div>
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-snug">ご自身のペースで、<br className="hidden lg:block" />いつでも気軽にLINEで提出</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">小論文の答案や志望理由書が書けたら、スマートフォンからLINEでいつでも提出できます。<strong className="text-[#800000]">回数に制限はありません。</strong></p>
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
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-snug">提出された答案は、塾長が<br className="hidden lg:block" />すぐに返却します</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">塾長がすべての答案に目を通し、考え方の癖を見抜きます。<strong className="text-[#800000]">24時間以内にフィードバック</strong>し、論理的に書く力を伸ばします。</p>
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
                <h3 className="text-lg lg:text-xl font-bold text-[#002147] leading-snug">迷ったときはいつでも、<br className="hidden lg:block" />塾長に直接ご相談ください</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">課題で迷ったときは、<strong className="text-[#800000]">いつでも塾長のLINEに相談</strong>できます。不安をすぐに解消し、勉強に集中できます。</p>
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
                <h3 className="text-lg lg:text-xl font-bold text-[#800000] leading-snug">塾長とのオンライン面談で、<br className="hidden lg:block" />総括と計画の見直しをします</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm lg:text-base leading-relaxed">週に1回程度の面談を実施。小論文やAO対策の進捗確認だけでなく、<strong className="text-[#800000]">英語や数学など他教科の学習計画づくりも一緒にサポート</strong>します。</p>
              </div>
            </div>

          </div>

          {/* スマホ版：縦型タイムライン */}
          <div className="md:hidden relative mt-12 space-y-4 max-w-md mx-auto">
            {/* 01 */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-slate-200 shadow-sm relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4 border-b border-slate-200 pb-3">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">01</div>
                <h3 className="text-base font-bold text-[#002147] leading-snug">ご自身のペースで、<br className="hidden lg:block" />いつでも気軽にLINEで提出</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">小論文の答案や志望理由書が書けたら、スマートフォンからLINEでいつでも提出できます。<strong className="text-[#800000]">回数に制限はありません。</strong></p>
              </div>
            </div>

            <div className="flex justify-center py-1 relative z-0">
              <ArrowDown className="w-5 h-5 text-[#C5A059]" />
            </div>

            {/* 02 */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-slate-200 shadow-sm relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4 border-b border-slate-200 pb-3">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold font-serif flex-shrink-0">02</div>
                <h3 className="text-base font-bold text-[#002147] leading-snug">提出された答案は、塾長が<br className="hidden lg:block" />すぐに返却します</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">塾長がすべての答案に目を��し、考え方の癖を見抜きます。<strong className="text-[#800000]">24時間以内にフィードバック</strong>し、論理的に書く力を伸ばします。</p>
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
                  <h3 className="text-base font-bold text-[#800000] leading-snug">塾長とのオンライン面談で、<br className="hidden lg:block" />総括と計画の見直しをします</h3>
                </div>
                <p className="text-[#333333] text-sm leading-relaxed mb-2">
                  週に1回程度の面談を実施。小論文やAO対策の進捗確認だけでなく、<strong className="text-[#800000]">英語や数学など他教科の学習計画づくりも一緒にサポート</strong>します。
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
                <h3 className="text-base font-bold text-[#002147] leading-snug">迷ったときはいつでも、<br className="hidden lg:block" />塾長に直接ご相談ください</h3>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm leading-relaxed">課題で迷ったときは、<strong className="text-[#800000]">いつでも塾長のLINEに相談</strong>できます。不安をすぐに解消し、勉強に集中できます。</p>
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
                      いじめ問題をなくすため、学校に相談窓口を増やすべきだと思います。
                    </p>
                  </div>
                </div>
                
                {/* After - 要件1: アドバイスの簡潔化とTO BE例の追加 */}
                <div className="bg-white p-8 md:p-10 border-2 border-[#800000]/20 rounded-2xl relative pt-16 flex flex-col h-full shadow-sm">
                  <span className="absolute top-0 left-0 bg-[#800000] text-white text-xs font-bold px-4 py-2 tracking-widest font-serif rounded-tl-2xl rounded-br-xl">塾長のフィードバック</span>
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                      <p className="text-[#800000] font-bold text-sm mb-2 flex items-center gap-2">
                        <span className="text-base"></span> 塾長のアドバイス
                      </p>
                      <p className="text-[#333333] font-medium text-sm md:text-base leading-relaxed">
                        「相談窓口を増やす」は誰でも言えます。<strong className="text-[#800000] border-b border-[#800000]/50">あなたが実際に不登校の友人と接して感じた「先生にも親にも言えないリアルな空気感」</strong>を書いてください。
                      </p>
                    </div>
                    <div>
                      <p className="text-[#002147] font-bold text-sm mb-3 flex items-center gap-2">
                        <span className="text-base"></span> 書き直し例（TO BE）
                      </p>
                      <p className="text-[#666666] leading-relaxed text-sm md:text-base border-l-2 border-[#C5A059] pl-4 py-1 bg-yellow-50/50">
                        教室という閉鎖空間では、相談窓口の存在自体が「密告」のリスクになる。私が友人の話を聞いて気づいたのは、大人が介入しない「生徒同士の匿名の逃げ場」の必要性だった。
                      </p>
                    </div>
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
            今の小論文の書き方で、<br className="md:hidden" />本当にSFCに受かるのか不安な方へ。
          </h3>
          <p className="text-base md:text-lg text-[#333333] mb-8 leading-relaxed">
            直前期の第一歩は、<strong className="text-[#800000]">「今の自分の現在地を正しく知ること」</strong>です。<br className="hidden md:block" />まずは、あなたの今の答案や悩みを、そのまま私に見せてください。
          </p>
          <a href="#contact-form" onClick={handleSmoothScroll} className="inline-block w-full sm:w-auto">
            <Button className="w-full sm:w-auto min-w-[320px] rounded-full bg-[#800000] hover:bg-[#C5A059] text-white font-bold px-8 py-5 h-auto text-base md:text-lg transition-colors duration-300 shadow-md group">
              <span className="flex items-center justify-center gap-2 font-serif text-center flex-wrap">
                無料の個別面談 ＆<br className="sm:hidden" />お試し添削に申し込む
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
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
              <div className="bg-white border border-[#C5A059]/40 p-6 md:p-8 shadow-sm inline-block text-left rounded-2xl">
                <p className="text-base md:text-lg text-[#333333] leading-relaxed">
                  <strong className="text-[#800000]">残り数ヶ月で、何をどこまでやれば届くのか。</strong><br />
                  10月以降の限られた時間で逆転するための、極限まで無駄を省いた学習スケジュールです。
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
                      基礎を固め、あなただけの<br className="hidden lg:block" />「視点」を見つける
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
                      他学部の過去問を活用し、<br className="hidden lg:block" />実践力を養う
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
                      SFCの過去問演習で、<br className="hidden lg:block" />どんな出題にも対応できる力���
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

      {/* Four Reasons Section */}
      <section className="py-24 md:py-32 px-4 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>佐藤塾が選ばれる4つの理由</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch mt-16">
            {[
              { num: '01', title: '24時間以内の圧倒的な添削スピード', desc: '直前期の「待ち時間」をゼロにします。提出された小論文は即座に添削し、学習のペースを止めません。' },
              { num: '02', title: '塾長直轄の完全1on1指導', desc: '学生バイトは一切なし。塾長が直接対話し、SFC合格の鍵となる「自分らしさ」と思考の癖を矯正します。' },
              { num: '03', title: '出題意図を見抜くSFC特化ノウハウ', desc: '表面的な知識ではなく「問いを立てる力」を鍛えます。6年間の経験をもとにSFC特有の考え方を教えます。' },
              { num: '04', title: '直前期に強い完全オンライン指導', desc: '移動時間をゼロにし、自宅を最高の環境に変えます。直前期の貴重な時間をすべて自分の勉強に充てられます。' },
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
          <SectionTitle subtitle="残り期間の本気度に合わせて選べる、2つの料金プランをご用意しました。">料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-16">
            
            {/* Plan 1 */}
            <div className="flex flex-col bg-white border border-[#800000]/30 rounded-3xl shadow-xl overflow-hidden relative h-full">
              <div className="bg-[#800000] text-white px-6 py-8 text-center flex flex-col items-center justify-center min-h-[180px]">
                <span className="inline-block bg-white text-[#800000] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest shadow-sm mb-4">
                  【本年度 新規受入 残り3名】
                </span>
                <h4 className="text-xl md:text-2xl font-bold tracking-wide font-serif leading-snug">月額サブスクリプションプラン</h4>
                <p className="text-white/80 text-sm mt-3 font-medium">SFC一般入試（小論文）を本気で完成させたい方</p>
              </div>

              <div className="flex-1 flex flex-col p-8 md:p-12">
                <div className="mb-8 text-center border-b border-slate-100 pb-8">
                  <p className="text-[#666666] text-sm mb-3 font-medium tracking-widest">月額料金</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#800000] font-serif">88,000</span>
                    <span className="text-xl font-bold text-[#800000]">円 / 月</span>
                  </div>
                  <p className="text-sm text-[#800000] mt-3 font-bold">別途 初回入塾金 50,000円</p>
                </div>

                <div className="mb-8 bg-[#FAF9F6] py-3 rounded-xl border border-slate-100 flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-[#800000]" />
                  <span className="text-sm font-bold text-[#333333]">追加講習費・教材費 一切不要</span>
                </div>

                <ul className="space-y-5 mb-10 flex-1 px-2">
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">過去問徹底添削 <span className="font-bold text-[#800000]">無制限</span></span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">塾長オンライン面談（週1回）</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">直前期の学習戦略・スケジュール管理</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">塾長直通LINE 質問し放題（解約まで）</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-5 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button className="w-full rounded-full bg-[#800000] hover:bg-[#C5A059] text-white h-16 text-base font-bold transition-colors shadow-md group whitespace-normal leading-snug">
                      無料で「個別面談 ＆ お試し添削」を体験する
                    </Button>
                  </a>

                </div>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="flex flex-col bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden relative h-full">
              <div className="bg-slate-100 text-[#002147] px-6 py-8 text-center flex flex-col items-center justify-center min-h-[180px]">
                <h4 className="text-xl md:text-2xl font-bold tracking-wide font-serif leading-snug">単発プラン（5回分）</h4>
                <p className="text-[#666666] text-sm mt-3 font-medium">他塾と併用・伸び悩みを解消したい方</p>
              </div>

              <div className="flex-1 flex flex-col p-8 md:p-12">
                <div className="mb-8 text-center border-b border-slate-100 pb-8">
                  <p className="text-[#666666] text-sm mb-3 font-medium tracking-widest">チケット料金（5回）</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#002147] font-serif">98,000</span>
                    <span className="text-xl font-bold text-[#002147]">円</span>
                  </div>
                  <p className="text-sm text-[#002147] mt-3 font-bold">入塾金不要</p>
                </div>

                <div className="mb-8 bg-[#FAF9F6] py-3 rounded-xl border border-slate-100 flex items-center justify-center gap-2 opacity-80">
                  <Check className="w-4 h-4 text-[#666666]" />
                  <span className="text-sm font-bold text-[#666666]">追加講習費・教材費 一切不要</span>
                </div>

                <ul className="space-y-6 mb-12 flex-1 px-2 opacity-90">
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">お好きな過去問・テーマを5回分添削</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">塾長による丁寧な赤ペンフィードバック</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002147] shrink-0" />
                    <span className="text-base text-[#333333] font-medium">LINEでの質疑応答（該答案件について）</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-5 mt-auto">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button variant="outline" className="w-full rounded-full border-2 border-slate-200 text-[#002147] hover:border-[#002147] hover:bg-transparent h-16 text-base font-bold transition-colors whitespace-normal leading-snug">
                      無料で「個別面談 ＆ お試し添削」を体験する
                    </Button>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Essay Method Section */}
      <section className="py-24 md:py-32 px-4 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto text-center bg-[#FAF9F6] p-12 md:p-20 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002147] font-serif mb-8 tracking-wide">
            佐藤塾の小論文指���とは
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
                    「何を書けばいいかわからない」を抜け出して、SFCの教授をうなず���せる文章の組み立て方と、資料の読み解き方を解説します。
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
          
          {/* AO Notice Block */}
          <div className="mb-16 bg-white border border-[#002147]/20 p-6 rounded-2xl text-center shadow-sm">
            <p className="text-[#333333] text-sm md:text-base font-medium leading-relaxed">
              <span className="text-[#800000] font-bold">【お知らせ】</span><br />
              今年度のAO入試対策は受付を終了いたしました。<br />
              現在は<strong className="text-[#002147]">「一般入試（小論文）対策」</strong>に特化して指導を行っております。
            </p>
          </div>

          <SectionTitle>
            無料の個別面談 ＆<br className="md:hidden"/> 1週間「お試し添削」に申し込む
          </SectionTitle>

          <div className="bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl overflow-hidden mt-16">
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-16 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#002147]/5 text-[#002147] rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#002147] mb-6 font-serif">お申し込みが完了しました！</h3>
                  <p className="text-[#333333] leading-loose mb-10 text-base md:text-lg border-y border-slate-100 py-8 font-medium">
                    個別面談へのお申し込みありがとうございます。<br />
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

                  <div className="mb-10 p-6 md:p-8 bg-[#FAF9F6] border border-[#C5A059]/40 rounded-xl">
                    <h4 className="font-bold text-[#800000] mb-3 font-serif">📝 面談およびお試し添削の流れ</h4>
                    <p className="text-sm text-[#333333] leading-relaxed font-medium">
                      面談で現状をヒアリング後、<strong>「要約＋意見」のミニ小論文（全3回）の無料添削</strong>を行います。無理な勧誘は一切しません。まずはプロとの壁打ちとしてご利用ください。
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
                      検討中のプラン <span className="text-[#800000]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full h-14 px-4 border border-slate-300 rounded-xl bg-white text-[#333333] focus:border-[#002147] focus:outline-none focus:ring-1 focus:ring-[#002147] text-base appearance-none cursor-pointer"
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        required
                      >
                        <option value="">プランを選択してください</option>
<option value="monthly">月額サブスクリプションプラン</option>
  <option value="ticket">単発プラン（5回分）</option>
                        <option value="undecided">まだ決めていない（面談後に相談したい）</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#666666]">
                        <ArrowDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#002147] mb-3">
                      現在の状況やご相談（任意）
                    </label>
                    <Textarea
                      placeholder="「小論文を書いたことがない」「英語の成績が伸び悩んでいる」など、SFC合格に向けて不安なことがあればご自由にお書きください。塾長が直接お答えします。"
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
                      <span className="flex items-center justify-center gap-3 font-serif tracking-widest flex-wrap">
                        {isLoading ? '送信中...' : '無料の個別面談に申し込む'}
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
                はい、問題ありません。佐藤塾はスマートフォン1台で、添削も指導もすべて受けられます。パソコンの有無は合否に関係しませんので、安心して始めてください。
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
                塾長が一人ひとりの答案に目を通し、「なぜそう考えたのか？」に向き合うからです。表面的なテクニックではなく、SFC合格に必要な「独自性」と「思考力」を引き出し、実績ゼロからの逆転合格につなげます。
              </div>
            </details>

            <details className="group border-b border-slate-200 pb-2">
              <summary className="flex items-center justify-between cursor-pointer py-6 hover:opacity-70 transition-opacity list-none">
                <span className="font-bold text-[#002147] text-base md:text-lg leading-relaxed">
                  入塾金はかかりますか？
                </span>
                <span className="text-[#C5A059] text-2xl font-bold group-open:hidden ml-6 flex-shrink-0">＋</span>
                <span className="text-[#C5A059] text-2xl font-bold hidden group-open:block ml-6 flex-shrink-0">－</span>
              </summary>
              <div className="pt-2 pb-8 text-[#666666] leading-loose text-base font-medium">
                「月額サブスクリプションプラン」をご契約の場合のみ、初回に入塾金として税込50,000円を���ただいております。「単発プラン（5回分）」をご利用の場合は入塾金は不要です。月額プランはいつでも解約可能ですので、直前期からでも安心して始めていただけます。
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
                はい、状況に合わせて柔軟に対応できますので、お気軽にご相談ください。
              </div>
            </details>
          </div>
        </div>
      </section>
      <FloatingCTA />
    </div>
  )
}
