'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { useState } from 'react'
import { Check, ArrowRight, PenTool, Target, X } from 'lucide-react'
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
      <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-[0.08em] leading-snug">
        {children}
      </h3>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
    </div>
  )
}

// AI Correction Demo Component (Interactive Before/After)
function AICorrectionDemo() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-white border-2 border-[#002147]/10 rounded-xl overflow-hidden shadow-sm mt-6">
      <div className="flex border-b border-[#E5E7EB] bg-[#F8F9FA] overflow-x-auto hide-scrollbar">
        <button
          onClick={() => setStep(1)}
          className={`flex-1 py-4 px-4 text-sm font-bold transition-colors min-w-[140px] ${step === 1 ? 'bg-[#002147] text-white' : 'text-[#666666] hover:bg-[#002147]/5'}`}
        >
          1. 生徒の答案提出
        </button>
        <button
          onClick={() => setStep(2)}
          className={`flex-1 py-4 px-4 text-sm font-bold transition-colors min-w-[140px] ${step === 2 ? 'bg-[#800000] text-white' : 'text-[#666666] hover:bg-[#800000]/5'}`}
        >
          2. AIの1次スクリーニング
        </button>
        <button
          onClick={() => setStep(3)}
          className={`flex-1 py-4 px-4 text-sm font-bold transition-colors min-w-[140px] ${step === 3 ? 'bg-[#C5A059] text-white' : 'text-[#666666] hover:bg-[#C5A059]/5'}`}
        >
          3. 修正後の答案
        </button>
      </div>

      <div className="p-6 md:p-8 min-h-[280px] flex flex-col justify-center">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 relative">
              <span className="absolute -top-3 -right-3 bg-slate-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm transform rotate-6">入塾直後</span>
              <p className="text-[#333333] leading-relaxed md:text-lg">
                「私はAIの進化に反対だ。なぜなら、人間の仕事が奪われてしまうからだ。最近もスーパーのレジが自動化されている。このままでは人間はAIに支配されてしまうため、国はAIの開発を法律で禁止すべきだと思う。」
              </p>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000] animate-pulse" />
              <span className="text-sm font-bold text-[#800000]">佐藤塾AIによる1次チェック結果</span>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-red-900 leading-relaxed">「AIは仕事を奪う」という思いつきの<strong>感情論</strong>で書かれています。</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-red-900 leading-relaxed">SFCが求める「客観的なデータや資料の引用」が一切ありません。</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-red-900 leading-relaxed">「レジの自動化」から「AIの禁止」へと<strong>深刻な論理の飛躍</strong>が起きています。PREP法を用いて構成を練り直しましょう。</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="bg-[#C5A059]/10 p-5 rounded-lg border border-[#C5A059]/30 relative">
              <span className="absolute -top-3 -right-3 bg-[#002147] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm transform rotate-6">SFC合格レベル</span>
              <p className="text-[#333333] leading-relaxed text-base md:text-lg">
                「<strong className="text-[#002147]">【P】</strong>地方の医療過疎問題に対し、AI画像診断技術の導入を推進すべきだと考える。<strong className="text-[#002147]">【R】</strong>なぜなら、専門医不足の地域では初期診断の遅れが深刻化しており、テクノロジーによる代替が急務だからである。<strong className="text-[#002147]">【E】</strong>資料2が示す通り、A県では医師1人あたりの負担が全国平均の2倍を超えている。AIに定型診断を代替させることで、<strong className="text-[#002147]">【P】</strong>医師は『人間にしかできない医療』に専念でき、地域医療の質は向上すると考える。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
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
        "image": "https://lifeeling.jp/fv-coaching.jpg",
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

      {/* Hero Section - FOCUS ON HUMAN COACHING & REVERSE SUCCESS */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background with navy gradient overlay - Placeholder for actual coaching image */}
        <div className="absolute inset-0 bg-slate-200">
          <Image
            src="/fv-coaching.jpg" // 塾長がオンライン指導している実際の風景画像
            alt="塾長によるオンライン指導風景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/95 via-[#002147]/85 to-[#002147]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex-1 flex flex-col justify-center pt-24 pb-12">

          {/* Hook Badge - Instant clarity on specialization */}
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="text-sm md:text-base font-bold text-white tracking-widest">慶應SFC（総合政策・環境情報）専門塾</span>
          </div>

          {/* Main Copy - Reverse Success & Human First */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif tracking-wider leading-tight drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            偏差値40台、実績ゼロから。<br />
            塾長の泥臭い1on1指導で掴む、<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#D4AF37] drop-shadow-none">SFC合格。</span>
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            「特別な才能」や「全国レベルの実績」は必要ありません。<br className="hidden md:block" />
            基礎の反復はAIに任せ、応用と受験戦略は塾長が直接1on1で叩き込む。<br className="hidden md:block" />
            2人に1人が合格する圧倒的実績で、最短距離でSFC合格へ導きます。
          </p>

          {/* Enhanced CTA Area */}
          <div className="mb-16 relative w-full max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C5A059]/30 to-[#800000]/30 blur-xl rounded-full opacity-70 animate-pulse"></div>

            <div className="relative flex flex-col items-center">
              <p className="bg-[#800000]/95 border border-white/20 text-white font-bold text-sm md:text-base mb-4 px-4 py-2 rounded-md tracking-widest shadow-md">
                ※SFC入試に間に合わせるには、この8月中のスタートが実質的な最終ボーダーラインです。
              </p>
              <a href="#contact-form" onClick={handleSmoothScroll} className="w-full block">
                <Button
                  size="lg"
                  className="w-full bg-[#800000] hover:bg-[#C5A059] text-white text-lg md:text-xl font-bold py-8 h-auto shadow-[0_4px_24px_rgba(128,0,0,0.6)] hover:shadow-[0_8px_32px_rgba(197,160,89,0.5)] transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-white/50 rounded-full group"
                >
                  <span className="flex items-center gap-3">
                    無料で個別相談を予約する
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </a>
              <div className="flex items-center gap-2 mt-5">
                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <p className="text-white/90 text-sm font-bold tracking-wider">
                  指導密度を極限まで保つため、今年度の新規受付は <span className="text-[#C5A059] text-base border-b border-[#C5A059]">残り7名</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="md:hidden flex flex-col items-center justify-center p-6 border-2 border-[#C5A059] rounded-lg bg-[#C5A059]/10 backdrop-blur-sm shadow-lg mb-4">
              <p className="text-xs text-[#C5A059] mb-1 tracking-[0.2em] font-bold uppercase">2026年度 合格率</p>
              <p className="text-6xl font-bold text-[#C5A059] tracking-tight" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>50<span className="text-2xl">%</span></p>
              <p className="text-sm text-[#D4AF37] mt-2 font-medium drop-shadow-[0_0_8px_rgba(0,33,71,1)]">(全受験生14名中7名が合格)</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:hidden">
              <div className="flex flex-col items-center justify-center p-4 border-2 border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium">2026年度 受講継続率</p>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>93<span className="text-lg ml-0.5">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border-2 border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium">6年間累計</p>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>39<span className="text-lg ml-0.5">名</span></p>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center p-6 border-2 border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase">2026年度 受講継続率</p>
                <p className="text-6xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>93<span className="text-2xl ml-1">%</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 border-2 border-[#C5A059] rounded-lg bg-[#C5A059]/10 backdrop-blur-sm shadow-lg scale-110 -my-2 relative z-20">
                <p className="text-xs text-[#C5A059] mb-2 tracking-[0.2em] font-bold uppercase">2026年度 合格率</p>
                <p className="text-7xl font-bold text-[#C5A059] tracking-tight" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>50<span className="text-3xl">%</span></p>
                <p className="text-sm text-[#D4AF37] mt-3 font-medium drop-shadow-[0_0_8px_rgba(0,33,71,1)]">(全受験生14名中7名が合格)</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 border-2 border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase">6年間累計</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed text-balance">
              なぜ、一般的な塾・学校の対策では、<br className="hidden sm:block" />
              慶應SFCの合格ラインに届かないのか？
            </h2>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          <div className="space-y-12 md:space-y-28">
            <div className="relative">
              <div className="md:hidden absolute -top-2 -left-2 opacity-[0.08] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">01</span>
              </div>
              <div className="hidden md:flex gap-14">
                <div className="flex-shrink-0 w-32">
                  <span className="text-4xl font-bold text-[#800000]/20 font-serif leading-tight tracking-wide block">原因</span>
                  <span className="text-8xl font-bold text-[#800000]/20 font-serif leading-none block -mt-1">01</span>
                </div>
                <div className="border-l-4 border-[#002147] pl-10 py-2 flex-1">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-5">
                    SFC専用の対策になっていない
                  </h3>
                  <p className="text-[#333333] leading-loose text-lg">
                    学校や普通の塾が教えるのは、どの大学でも使える「一般的な書き方」です。しかし、SFCは独自の視点を求める特殊な入試であり、独自観点を考慮できていないありきたりな回答では、合格点には届きません。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-4 border-[#002147] pl-5">
                <div className="text-xs font-bold text-[#C5A059] tracking-[0.2em] mb-1">原因 01</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  SFC専用の対策になっていない
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  学校や普通の塾が教えるのは、どの大学でも使える「一般的な書き方」です。しかし、SFCは独自の視点を求める特殊な入試であり、独自観点を考慮できていないありきたりな回答では、合格点には届きません。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="md:hidden absolute -top-2 -left-2 opacity-[0.08] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">02</span>
              </div>
              <div className="hidden md:flex gap-14">
                <div className="flex-shrink-0 w-32">
                  <span className="text-4xl font-bold text-[#800000]/20 font-serif leading-tight tracking-wide block">原因</span>
                  <span className="text-8xl font-bold text-[#800000]/20 font-serif leading-none block -mt-1">02</span>
                </div>
                <div className="border-l-4 border-[#002147] pl-10 py-2 flex-1">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-5">
                    添削の回数が少なすぎる
                  </h3>
                  <p className="text-[#333333] leading-loose text-lg">
                    大手塾や学校は添削が返ってくるまで1週間かかり、回数制限（月4回〜最大12回など）もあります。合格には圧倒的な質の高い試行錯誤が必要なのに、この「待ち時間」と「頻度の低さ」が受験生の成長を止めてしまいます。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-4 border-[#002147] pl-5">
                <div className="text-xs font-bold text-[#C5A059] tracking-[0.2em] mb-1">原因 02</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  添削の回数が少なすぎる
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  大手塾は添削が返ってくるまで1週間かかり、回数制限（月4回〜最大12回など）もあります。合格には圧倒的な質の高い試行錯誤が必要なのに、この「待ち時間」と「頻度の低さ」が受験生の成長を止めてしまいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="md:hidden absolute -top-2 -left-2 opacity-[0.08] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">03</span>
              </div>
              <div className="hidden md:flex gap-14">
                <div className="flex-shrink-0 w-32">
                  <span className="text-4xl font-bold text-[#800000]/20 font-serif leading-tight tracking-wide block">原因</span>
                  <span className="text-8xl font-bold text-[#800000]/20 font-serif leading-none block -mt-1">03</span>
                </div>
                <div className="border-l-4 border-[#002147] pl-10 py-2 flex-1">
                  <h3 className="text-2xl font-bold text-[#002147] font-serif tracking-wide mb-5">
                    AO入試と一般入試の「共倒れ」
                  </h3>
                  <p className="text-[#333333] leading-loose text-lg">
                    AO入試の準備で一般入試の対策がおろそかになり、一般入試に絞れば、AO入試というSFCへの挑戦機会が少なくなってしまう。一人では抱えきれない学習計画が、合格を遠ざけます。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-4 border-[#002147] pl-5">
                <div className="text-xs font-bold text-[#C5A059] tracking-[0.2em] mb-1">原因 03</div>
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

      {/* Instructor Message Section (Moved UP for "Human-first" trust building) */}
      <section className="py-24 px-4 bg-[#F9F9F9] border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center md:justify-start">
              {/* Principal's Profile Photo */}
              <div className="w-full max-w-[400px] aspect-[4/5] bg-slate-200 rounded-xl shadow-xl relative overflow-hidden">
                 <Image
                  src="/og-image.png"
                  alt="佐藤塾 塾長 佐藤颯太"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#002147]" />
                <span className="text-sm font-medium text-primary tracking-widest">MESSAGE</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-serif tracking-[0.08em] leading-snug">
                偏差値40台からの<br/>大逆転を、私が直接導く。
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                「もともと文章を書くのが苦手」「すごい実績なんてない」。SFC合格者の8割は、皆さんと同じ不安を抱えてスタートしました。
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                エリートしか受からないという誤解を捨ててください。<br/>正しい戦略を立て、泥臭く地道に指導を吸収すれば、大逆転は十分に可能です。
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                6年間で39名の逆転合格を生み出したノウハウで、あなたの「本当の実力」を引き出します。
              </p>
              <p className="text-lg text-foreground mb-10 leading-relaxed">
                <strong className="text-primary border-b-2 border-accent">私が直接、あなたと並走することを約束します。</strong>
              </p>
              <div className="border-l-4 border-accent pl-6">
                <p className="text-xl font-bold text-secondary font-serif tracking-wide">
                  総合政策学部卒業生 佐藤颯太
                </p>
                <p className="text-base text-muted-foreground mt-1">佐藤塾 塾長</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (1st Filtering AI) */}
      <section className="relative py-28 px-4 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002147' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              塾長の指導を最大化する、<br className="sm:hidden" />
              1次スクリーニングAI
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-4xl mx-auto text-left md:text-center">
              小論文の基本となる文章構成や論理展開のズレは、過去のSFC合格者データを学習したAIが24時間以内に1次スクリーニングを行います。<br className="hidden md:block" />
              <strong className="text-[#800000]">その上で、塾長との1on1指導では「SFC教授を唸らせるあなた独自のアイデア作り」や「探究テーマの言語化」といった、人間にしかできない本質的な指導に100%の時間を注ぎます。</strong>
            </p>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          <div className="space-y-16 md:space-y-20">
            <div className="bg-white border-l-4 border-[#002147] shadow-lg rounded-r-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-[#C5A059] tracking-[0.2em] uppercase">SYSTEM 01</span>
                  <div className="h-px flex-1 bg-[#002147]/10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                  24時間以内のフィードバック
                </h3>
                <p className="text-[#333333] leading-relaxed text-base md:text-lg mb-4 border-l-2 border-[#C5A059] pl-4">
                  提出後、まずはAIが24時間以内に「SFCの評価基準」に照らし合わせ、基礎的な論理のズレを指摘します。これにより、塾長との貴重な面談時間を「基礎の修正」ではなく「強みの発見」にフル活用できます。
                </p>
                
                <AICorrectionDemo />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Division Section */}
      <section className="py-28 px-4 bg-[#F9F9F9] border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="基礎はAIで無限に。応用は塾長が直接叩き込む。">
            塾長 × AI の役割分担
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* 塾長の役割を先に配置 */}
            <div className="bg-[#fff5f5] rounded-xl p-8 border-l-4 border-[#800000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#800000] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#002147] font-serif">塾長 の役割</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#800000] font-bold text-lg">→</span>
                  <span className="text-sm text-[#333333]"><span className="font-bold text-[#800000]">SFCに受かる独自性</span>の発見と指導</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#800000] font-bold text-lg">→</span>
                  <span className="text-sm text-[#333333]">不安をなくす<span className="font-bold text-[#800000]">受験戦略の立案と並走</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#800000] font-bold text-lg">→</span>
                  <span className="text-sm text-[#333333]">志望理由書やポートフォリオの<span className="font-bold text-[#800000]">最終完成</span></span>
                </li>
              </ul>
              <p className="text-xs text-[#666666] mt-6 pt-6 border-t border-[#800000]/20 font-bold">
                AIにはできない、人による泥臭い「熱量と戦略」
              </p>
            </div>

            {/* AIの役割を後に配置 */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-[#002147] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#002147] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#002147] font-serif">AI の役割</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#002147] font-bold text-lg">→</span>
                  <span className="text-sm text-[#333333]">基礎的な論理破綻の<span className="font-bold text-[#002147]">1次スクリーニング</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#002147] font-bold text-lg">→</span>
                  <span className="text-sm text-[#333333]">24時間以内の<span className="font-bold text-[#002147]">フィードバック</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#002147] font-bold text-lg">→</span>
                  <span className="text-sm text-[#333333]">圧倒的な演習量をこなすための<span className="font-bold text-[#002147]">壁打ち相手</span></span>
                </li>
              </ul>
              <p className="text-xs text-[#666666] mt-6 pt-6 border-t border-[#002147]/20 font-bold">
                ヒューマンエラーを防ぐ「高速インフラ」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate CTA Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/5 to-[#800000]/5"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif mb-6 leading-snug">
            「自分に何ができるかわからない」<br className="md:hidden"/>と悩んでいませんか？
          </h3>
          <p className="text-base md:text-lg text-[#333333] mb-8 leading-relaxed">
            実績ゼロからの大逆転は、<strong className="text-[#800000] border-b border-[#800000]">「現状を正確に把握し、プロと正しい戦略を立てること」</strong>から始まります。<br className="hidden md:block"/>まずは無料相談で、あなたの不安や現状をすべて塾長に聞かせてください。
          </p>
          <a href="#contact-form" onClick={handleSmoothScroll}>
            <Button className="bg-[#800000] hover:bg-[#C5A059] text-white font-bold px-10 py-6 h-auto text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-full group">
              <span className="flex items-center gap-2">
                まずは無料で塾長に相談する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
        </div>
      </section>

      {/* Roadmap Section (UPDATED FOR AUGUST START & FULL CSS VISUALS) */}
      <section className="py-28 px-4 bg-[#F9F9F9] border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              合格までのロードマップ
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto">
              いつ、何をして合格を掴むか。SFC合格への最短の道筋を可視化します。
            </p>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          {/* PC版ロードマップ (Pure CSS Timeline) */}
          <div className="hidden lg:block">
            <div className="relative pt-8">
              {/* Horizontal Timeline Line */}
              <div className="absolute top-16 left-[10%] right-[10%] h-1.5 bg-gradient-to-r from-[#002147] via-[#800000] to-[#C5A059] rounded-full" />

              <div className="grid grid-cols-3 gap-10">
                {/* STEP 01: 8月 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-xl font-serif shadow-lg z-10 border-4 border-[#F9F9F9]">
                      01
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#002147]/10 px-4 py-1.5 rounded-full">
                      <span className="text-sm font-bold text-[#002147] tracking-wider">8月</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#002147] hover:shadow-xl transition-shadow relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#002147] text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                      塾長×AI
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center">
                      出願書類の<br />急ピッチでの完成
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      受験生のヒアリングを基に佐藤塾が志望理由書等の素案を作成します。その後、AIの1次チェックを活用して論理破綻をなくし、塾長と共にSFC特有の<strong className="text-[#800000]">「独自性」</strong>を引き上げます。
                    </p>
                  </div>
                </div>

                {/* STEP 02: 9月〜10月 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold text-xl font-serif shadow-lg z-10 border-4 border-[#F9F9F9]">
                      02
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#800000]/10 px-4 py-1.5 rounded-full">
                      <span className="text-sm font-bold text-[#800000] tracking-wider">9月〜10月</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#800000] hover:shadow-xl transition-shadow relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#800000] text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                      小論文×面接
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center">
                      出願完了と<br />「二刀流」の本格始動
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      出願後、息つく間もなく小論文と面接対策を並走させます。ここで面接に振り切らず、一般入試でも通用する<strong className="text-[#800000]">「書く力」</strong>を培うことがSFC合格の最大の鍵となります。
                    </p>
                  </div>
                </div>

                {/* STEP 03: 11月〜入試 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold text-xl font-serif shadow-lg z-10 border-4 border-[#F9F9F9]">
                      03
                    </div>
                    <div className="mt-4 flex items-center gap-2 bg-[#C5A059]/20 px-4 py-1.5 rounded-full">
                      <span className="text-sm font-bold text-[#002147] tracking-wider">11月〜入試</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#C5A059] hover:shadow-xl transition-shadow relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#002147] text-xs font-bold px-3 py-1 rounded shadow-sm">
                      二刀流で合格へ
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-4 mt-2 leading-snug text-center">
                      面接本番と<br />一般入試への完全接続
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      10月のAO2次面接本番に挑むと同時に、一般入試に向けた対策を並走します。AOに依存しない<strong className="text-[#800000]">二刀流</strong>を活かし、いかなる状況でも合格圏内に入ることを目指します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* スマホ版ロードマップ (Pure CSS Vertical Timeline) */}
          <div className="lg:hidden mt-10">
            <div className="relative max-w-md mx-auto px-4">
              {/* Vertical Timeline Line */}
              <div className="absolute left-10 top-4 bottom-10 w-1 bg-gradient-to-b from-[#002147] via-[#800000] to-[#C5A059] rounded-full" />

              {/* STEP 01: 8月 */}
              <div className="relative pl-14 pb-12">
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-base font-serif shadow-md z-10 border-[3px] border-[#F9F9F9]">
                  01
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-[#E5E7EB] border-l-4 border-l-[#002147]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#002147]/10 text-[#002147] text-xs font-bold px-2 py-1 rounded">塾長×AI</span>
                    <span className="text-xs font-bold text-[#002147] tracking-wider">8月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-2">
                    出願書類の急ピッチでの完成
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    受験生のヒアリングを基に佐藤塾が素案を作成。AIの1次チェックで論理破綻をなくし、塾長1on1で<strong className="text-[#800000]">「独自性」</strong>を極限まで引き上げます。
                  </p>
                </div>
              </div>

              {/* STEP 02: 9月 */}
              <div className="relative pl-14 pb-12">
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold text-base font-serif shadow-md z-10 border-[3px] border-[#F9F9F9]">
                  02
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-[#E5E7EB] border-l-4 border-l-[#800000]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#800000]/10 text-[#800000] text-xs font-bold px-2 py-1 rounded">小論文×面接</span>
                    <span className="text-xs font-bold text-[#800000] tracking-wider">9月〜10月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-2">
                    出願完了と「二刀流」の本格始動
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    出願後、息つく間もなく小論文と面接対策を並走。一般入試でも通用する<strong className="text-[#800000]">「書く力」</strong>を培うことがSFC合格の鍵となります。
                  </p>
                </div>
              </div>

              {/* STEP 03: 10月〜 */}
              <div className="relative pl-14 pb-4">
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold text-base font-serif shadow-md z-10 border-[3px] border-[#F9F9F9]">
                  03
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-[#E5E7EB] border-l-4 border-l-[#C5A059]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#C5A059]/20 text-[#002147] text-xs font-bold px-2 py-1 rounded">二刀流で合格へ</span>
                    <span className="text-xs font-bold text-[#C5A059] tracking-wider">11月〜入試</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-2">
                    面接本番と一般入試への完全接続
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    10月のAO2次面接に挑むと同時に一般対策を並走。<strong className="text-[#800000]">二刀流</strong>の準備がもたらす精神的余裕で合格を確実なものにします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-28 px-4 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              佐藤塾と他塾の比較表
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto">
              佐藤塾は授業料の透明性と、圧倒的な指導密度を担保しています。
            </p>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          <div className="hidden md:block pt-6 overflow-visible rounded-lg shadow-lg">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-left font-bold font-serif text-base tracking-wide bg-[#F3F4F6] text-[#333333] border-r border-[#E5E7EB]">項目</th>
                  <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-[#800000]/95 text-white border-4 border-[#C5A059] relative">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#002147] text-xs font-bold px-4 py-1 rounded-full shadow-md z-20">SFC特化</span>
                    佐藤塾
                  </th>
                  <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-white text-[#333333] border-l border-r border-[#E5E7EB]">SFC特化塾</th>
                  <th className="p-6 text-center font-bold font-serif text-base tracking-wide bg-[#FAFAFA] text-[#333333]">一般の予備校</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147]">小論文の添削</td>
                  <td className="p-6 text-center bg-[#800000]/5 text-[#333333] font-semibold">回数無制限<br /><span className="text-xs text-[#666666]">（AI1次チェック＋塾長）</span></td>
                  <td className="p-6 text-center bg-white text-[#666666]">週1〜4回<br /><span className="text-xs">（対面メイン）</span></td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666]">週1回<br /><span className="text-xs">（学生バイト中心）</span></td>
                </tr>

                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147]">対策範囲</td>
                  <td className="p-6 text-center bg-[#800000]/5 text-[#333333] font-semibold"><span className="text-[#800000] font-bold">AO・一般 二刀流</span><br /><span className="text-xs text-[#666666]">（完全並走）</span></td>
                  <td className="p-6 text-center bg-white text-[#666666]">AOのみ<br /><span className="text-xs">または別途料金で一般入試も対象</span></td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666]">一般入試のみ</td>
                </tr>

                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147]">費用（年間）</td>
                  <td className="p-6 text-center bg-[#800000]/5">
                    <p className="text-lg font-bold text-[#800000]">月額 11.8万円〜</p>
                    <p className="text-xs text-[#800000] mt-1 font-semibold">※講習費・教材費 0円</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666]">年間 150万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666]">年間 100万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                </tr>

                <tr>
                  <td className="p-6 font-bold text-[#002147]">質問・相談</td>
                  <td className="p-6 text-center bg-[#800000]/5">
                    <p className="text-[#800000] font-bold">塾長直通ライン</p>
                    <p className="text-xs text-[#666666] mt-1">24時間いつでも質問可能</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666]">予約制 / 開校時間内</td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666]">予約制 / 開校時間内</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:hidden mt-8 pb-6 relative">
            <div className="overflow-x-auto overflow-y-visible rounded-lg shadow-lg bg-white mt-6">
              <table className="w-full border-collapse" style={{ minWidth: '420px' }}>
                <thead>
                  <tr>
                    <th className="sticky left-0 z-20 p-3 text-left font-bold text-[#333333] text-[13px] bg-white border-r border-[#E5E7EB]" style={{ minWidth: '90px' }}>項目</th>
                    <th className="p-3 text-center font-bold text-white text-[12px] bg-[#800000] relative" style={{ minWidth: '80px' }}>佐藤塾</th>
                    <th className="p-3 text-center font-bold text-[#555555] text-[11px] bg-[#F8F8F8] border-l border-[#E5E7EB]" style={{ minWidth: '80px' }}>特化塾</th>
                    <th className="p-3 text-center font-bold text-[#555555] text-[11px] bg-[#F3F3F3] border-l border-[#E5E7EB]" style={{ minWidth: '80px' }}>一般塾</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB]">小論文添削</td>
                    <td className="p-3 bg-[#fff5f5] text-center">
                      <p className="text-[12px] font-bold text-[#800000] leading-snug">回数無制限</p>
                    </td>
                    <td className="p-3 bg-[#F8F8F8] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">週1〜4回</td>
                    <td className="p-3 bg-[#F3F3F3] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">週1回</td>
                  </tr>

                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB]">対策範囲</td>
                    <td className="p-3 bg-[#fff5f5] text-center">
                      <p className="text-[12px] font-bold text-[#800000] leading-snug">AO・一般二刀流</p>
                    </td>
                    <td className="p-3 bg-[#F8F8F8] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">AOのみ</td>
                    <td className="p-3 bg-[#F3F3F3] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">一般のみ</td>
                  </tr>

                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB]">月額費用</td>
                    <td className="p-3 bg-[#fff5f5] text-center">
                      <p className="text-[13px] font-bold text-[#800000]">11.8万〜</p>
                      <p className="text-[10px] text-[#800000] font-semibold">※講習費0円</p>
                    </td>
                    <td className="p-3 bg-[#F8F8F8] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">12万〜+講習費</td>
                    <td className="p-3 bg-[#F3F3F3] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">8万〜+講習費</td>
                  </tr>

                  <tr>
                    <td className="sticky left-0 z-20 p-3 pb-6 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB]">相談対応</td>
                    <td className="p-3 pb-6 bg-[#fff5f5] text-center">
                      <p className="text-[12px] font-bold text-[#800000] leading-snug">塾長直通ライン</p>
                    </td>
                    <td className="p-3 pb-6 bg-[#F8F8F8] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">予約制</td>
                    <td className="p-3 pb-6 bg-[#F3F3F3] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">予約制</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-lg border-l-4 border-[#800000] p-5 md:p-6 shadow-md">
            <p className="text-sm md:text-base text-[#333333]">
              <span className="text-[#800000] font-bold">※ 佐藤塾の費用は月額 11.8万円〜。</span>
              講習費、教材費といった追加料金は一切かかりません。他塾のように「合格時には別途〇万円」といった費用も発生しません。
            </p>
          </div>
        </div>
      </section>

      {/* Essay Method Section */}
      <section className="py-20 md:py-24 px-4" style={{ backgroundColor: '#C5A05910' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] font-serif mb-8 tracking-wide" style={{ wordBreak: 'keep-all' }}>
            佐藤塾の小論文指導とは
          </h2>
          <p className="text-base md:text-lg text-[#333333] leading-relaxed mb-10 max-w-2xl mx-auto">
            慶應SFC合格に必要な「問いを立てる力」を、AIと塾長がどう鍛えるか。合格メソッドの全貌を公開しています。
          </p>
          <Link href="/guide/essay">
            <Button className="bg-[#002147] hover:bg-[#800000] text-white font-bold px-10 py-6 h-auto text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              佐藤塾が培ってきた「小論文」と「AO入試」の攻略メソッドをすべて公開しています。無料ですのでぜひご覧ください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/guide/essay/articles" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 h-full border-4 border-transparent hover:border-[#C5A059] transition-all duration-300 shadow-xl hover:-translate-y-2 flex flex-col">
                <div className="w-14 h-14 bg-[#002147]/10 rounded-full flex items-center justify-center mb-6">
                  <PenTool className="w-7 h-7 text-[#002147]" />
                </div>
                <h3 className="text-2xl font-bold text-[#002147] font-serif mb-4 group-hover:text-[#800000] transition-colors">
                  小論文 対策ガイド
                </h3>
                <p className="text-[#333333] mb-8 leading-relaxed flex-1">
                  「何を書けばいいかわからない」から脱却し、SFC教授を唸らせる論理構成の型と資料読解の極意を解説します。
                </p>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto">
                  <span>記事一覧を見る</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/ao-guide" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 h-full border-4 border-transparent hover:border-[#C5A059] transition-all duration-300 shadow-xl hover:-translate-y-2 flex flex-col">
                <div className="w-14 h-14 bg-[#800000]/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#800000]" />
                </div>
                <h3 className="text-2xl font-bold text-[#800000] font-serif mb-4 group-hover:text-[#002147] transition-colors">
                  AO入試 対策ガイド
                </h3>
                <p className="text-[#333333] mb-8 leading-relaxed flex-1">
                  「すごい実績」がなくても勝てる。自分だけの研究テーマの探し方から志望理由書、ポートフォリオ作成まで完全解説。
                </p>
                <div className="flex items-center text-[#C5A059] font-bold mt-auto">
                  <span>ガイドを見る</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Six Reasons Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>佐藤塾が選ばれる6つの理由</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'AOと一般二刀流対応', desc: 'どちらの受験方式でも、あるいは両方での受験でも完全サポート' },
              { num: '02', title: '24時間1次チェックAI', desc: '提出書類や小論文の論理破綻をAIが瞬時に弾き、修正時間を短縮' },
              { num: '03', title: '塾長の熱量ある1on1', desc: 'SFC合格の明暗を分ける「独自性」の言語化を塾長が直接指導' },
              { num: '04', title: 'AO合格後の追加費用0円', desc: 'AO合格後は卒業となり自動退塾となります。追加料金は不要' },
              { num: '05', title: 'SFC特化ロジック', desc: '6年間の指導実績に基づく、SFC合格に必要な全てを網羅' },
              { num: '06', title: '通塾ゼロ', desc: '指導も授業もすべてオンライン。通塾時間を勉強に充てられる' },
            ].map((item) => (
              <Card key={item.num} className="bg-white shadow-md border-t-2 border-t-primary border-x-0 border-b-0 rounded-lg hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-5">
                    <div className="text-5xl font-bold text-accent font-serif tracking-tighter">
                      {item.num}
                    </div>
                    <div className="pt-2">
                      <CardTitle className="text-lg font-serif tracking-wide">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-28 px-4 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="AO入試受験の有無で決められるシンプルなプラン">2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="relative flex flex-col bg-white shadow-xl border-4 border-[#800000] rounded-xl overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#800000] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 border-2 border-[#C5A059]">
                人気No.1
              </div>

              <div className="bg-gradient-to-br from-[#800000] to-[#600000] text-white px-6 py-6">
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-wide">SFC二刀流<br />AO入試＋一般入試プラン</h4>
              </div>

              <div className="flex-1 flex flex-col p-6 md:p-8">
                <div className="mb-6">
                  <p className="text-[#666666] text-xs mb-1">月額料金</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#800000] font-serif">138,000</span>
                    <span className="text-xl font-bold text-[#800000]">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-1">/ 月（税込 151,800円）</p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm font-bold text-[#002147]">追加講習費 0円</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">塾長1on1授業 <span className="font-bold text-[#800000]">週1回</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">AI 1次スクリーニング <span className="font-bold text-[#800000]">回数無制限</span></span>
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
                    <span className="text-sm text-[#333333]">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-3">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white h-14 text-base font-bold shadow-lg">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course">
                    <Button variant="outline" className="w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-12 text-sm font-bold transition-all duration-300 hover:shadow-lg group">
                      このプランの詳細を確認する
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col bg-white shadow-md border-2 border-[#E5E7EB] rounded-xl overflow-hidden">
              <div className="bg-[#F3F4F6] text-[#333333] px-6 py-6 border-b border-[#E5E7EB]">
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-wide text-[#002147]">他塾併願者に推奨<br />小論文特化プラン</h4>
              </div>

              <div className="flex-1 flex flex-col p-6 md:p-8">
                <div className="mb-6">
                  <p className="text-[#666666] text-xs mb-1">月額料金</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#002147] font-serif">118,000</span>
                    <span className="text-xl font-bold text-[#002147]">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-1">/ 月（税込 129,800円）</p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-[#666666]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm text-[#666666]">追加講習費 0円</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">塾長1on1授業 <span className="font-bold text-[#002147]">月1回</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">AI 1次スクリーニング <span className="font-bold text-[#002147]">回数無制限</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">指導科目 <span className="font-bold text-[#002147]">小論文のみ</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">塾長直通の相談ライン</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-3">
                  <a href="#contact-form" onClick={handleSmoothScroll}>
                    <Button variant="outline" className="w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-14 text-base font-medium">
                      このプランで相談を予約する
                    </Button>
                  </a>
                  <Link href="/course">
                    <Button variant="outline" className="w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-12 text-sm font-bold transition-all duration-300 hover:shadow-lg group">
                      このプランの詳細を確認する
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

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
                  AO入試合格後は、合格発表日の月末をもって自動退塾（契約終了）となります。だからこそ、親御様も安心してお子さんの受験を応援できます。
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
                  <p className="font-bold text-[#002147] text-sm mb-1">入会金＋授業料のみ</p>
                  <p className="text-xs text-[#666666]">追加講習費や合格祝福金などは一切かかりません。</p>
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

      {/* Contact Form Section */}
      <section id="contact-form" className="py-28 px-4 bg-white scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <SectionTitle subtitle="「自分の実績や文章力で本当に受かるのか」――その不安、まずはすべて私にぶつけてください。一人ひとりの指導密度を極限まで保つため、今年度の新規受付は残り7名となっております。">
            30秒で申し込み！個別相談を予約する
          </SectionTitle>

          <Card className="bg-white shadow-xl border-t-8 border-t-[#800000] border-x border-b border-border rounded-2xl">
            <CardContent className="pt-10">
              {isSubmitted ? (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#800000]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
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
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  {formError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-sm text-red-700 font-medium">{formError}</p>
                    </div>
                  )}

                  <div className="mb-8 p-4 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB]">
                    <p className="text-sm text-[#333333] font-bold mb-2">
                      ※ ご相談者の8割が<span className="text-[#800000]">「実績ゼロ」「小論文未経験」</span>からのスタートです。現在の実力は一切問いません。
                    </p>
                    <p className="text-sm text-[#333333] font-bold">
                      ※ 無理な入塾勧誘は一切行いません。まずはSFC受験のプロ（塾長）との壁打ちとしてお気軽にご利用ください。
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      お名前 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="佐藤塾太郎"
                      className="border-border focus:border-[#002147] h-12"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      メールアドレス <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      className="border-border focus:border-[#002147] h-12"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      電話番号 <span className="text-[#800000]">*</span>
                    </label>
                    <Input
                      placeholder="09012345678"
                      className="border-border focus:border-[#002147] h-12"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      ご希望のプラン <span className="text-[#800000]">*</span>
                    </label>
                    <select
                      className="w-full h-12 px-4 border border-border rounded-md bg-white text-foreground focus:border-[#002147] focus:outline-none focus:ring-1 focus:ring-[#002147]"
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
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      ご質問・ご相談
                    </label>
                    <Textarea
                      placeholder="SFC合格に向けて不安なこと、知りたいことをご自由にお書きください。塾長が直接お答えします。"
                      className="border-border focus:border-[#002147] min-h-32"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#800000] hover:bg-[#C5A059] text-white h-16 text-lg font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed rounded-full group"
                    >
                      {isLoading ? '送信中...' : '今すぐ無料で個別相談を予約する'}
                      {!isLoading && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                    <p className="text-xs text-center text-[#666666] mt-4 font-bold tracking-wider">
                      ※送信後、24時間以内に担当者よりご連絡いたします
                    </p>
                  </div>

                  <p className="text-xs text-center text-muted-foreground pt-2">
                    送信いただいた情報は、お客様へのサービス提供のため、安全に管理されます。
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#F9F9F9]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm text-[#800000] font-bold tracking-widest mb-2">まだ不安がある方へ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif">よくある質問（FAQ）</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#f9fafb]">
                <span className="font-semibold text-[#002147]">
                  パソコンを持っていない、または操作が苦手ですが大丈夫ですか？
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[#333333] leading-relaxed border-t border-border">
                はい、全く問題ありません。本塾のシステムは<strong>スマートフォン1台</strong>で全ての添削・指導が完結するように設計されています。PCの有無が合否に影響することはありませんのでご安心ください。
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#f9fafb]">
                <span className="font-semibold text-[#002147]">
                  なぜ50%という驚異的な合格率を実現できるのですか？
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[#333333] leading-relaxed border-t border-border">
                AIによる<strong>「基礎的な論理破綻の高速スクリーニング」</strong>で時間を生み出し、最も重要な「SFCに受かる独自性の深掘り」と「戦略立案」に塾長が全リソースを割く仕組みを構築しているからです。このシステムこそが、実績ゼロからの大逆転を生み出します。
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#f9fafb]">
                <span className="font-semibold text-[#002147]">
                  入会金はかかりますか？
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[#333333] leading-relaxed border-t border-border">
                入会金は入塾時に必要になります。金額は<strong>税込10万円</strong>となりますが、その後は月額料金のみのご請求となり、追加の講習料などは全くありません。他塾のように後から追加で費用が発生するなどはありませんので安心して始めていただけます。
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#f9fafb]">
                <span className="font-semibold text-[#002147]">
                  途中で他のプランに変更できますか？
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[#333333] leading-relaxed border-t border-border">
                はい、<strong>月単位でのプラン変更が可能</strong>です。学力進捗や状況に応じて柔軟に対応できますので、お気軽にご相談ください。
              </div>
            </details>
          </div>
        </div>
      </section>
      <FloatingCTA />
    </div>
  )
}