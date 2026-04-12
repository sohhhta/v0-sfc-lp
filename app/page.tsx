'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { useState } from 'react'
import { Check } from 'lucide-react'

// Section title with Keio blue decorative lines
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-[0.08em]">
        {children}
      </h3>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
    </div>
  )
}

// Consultation AI Card with tabbed conversations
function ConsultationAICard() {
  const [activeTab, setActiveTab] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const conversations = [
    {
      label: 'AO入試の悩み',
      question: 'AO入試に興味はありますが、全国大会優勝のようなすごい実績がありません。やっぱり諦めるべきでしょうか？',
      answer: 'いいえ、諦めるべきではありません。SFCが求めているのは<highlight>「実績の凄さ」ではなく「問題発見の鋭さ」</highlight>です。過去の合格者も最初は「ただの趣味」と認識していたことを深掘りし、独自の実績にできました。<highlight>まずはあなたが日頃頑張らなくてもできていること</highlight>を書き出してみましょう。'
    },
    {
      label: '小論文の不安',
      question: '小論文を勉強したことがない私でもSFCを目指せるのでしょうか？',
      answer: '<highlight>もちろん、目指せます</highlight>。小論文は量をこなす勉強が最重要です。まずはめちゃくちゃな内容でも良いのでどんどん量をこなしていきましょう。添削内容を踏まえ書き直すことで自然と書けるようになっていきます。<highlight>過去の合格者もこのように学習し始めました</highlight>。焦らず、一緒に着実に進めていきましょう。'
    },
    {
      label: '併願・戦略の疑問',
      question: 'SFC対策に絞ると、他大学が疎かになりそうで不安です',
      answer: '大丈夫です。<highlight>幅広い大学の合格を目指すのではなく、SFC合格から逆算した受験戦略</highlight>が重要になります。SFCで鍛える論理力は早稲田や他の慶應学部でも最大の武器になります。<highlight>負けない併願戦略</highlight>を一緒に立てましょう。'
    }
  ]

  const handleTabChange = (index: number) => {
    if (index !== activeTab) {
      setIsTyping(true)
      setActiveTab(index)
      setTimeout(() => setIsTyping(false), 600)
    }
  }

  const renderAnswer = (text: string) => {
    const parts = text.split(/<highlight>|<\/highlight>/)
    return parts.map((part, i) =>
      i % 2 === 1 ? <span key={i} className="text-[#800000] font-bold">{part}</span> : part
    )
  }

  return (
    <div className="bg-white border-l-4 border-[#800000] shadow-lg rounded-r-lg overflow-hidden">
      <div className="p-6 md:p-10">
        {/* Title */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-bold text-[#C5A059] tracking-[0.2em] uppercase">AI 02</span>
          <div className="h-px flex-1 bg-[#800000]/10" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif tracking-wide mb-4">
          相談用AI
        </h3>

        {/* Development Background */}
        <p className="text-[#333333] leading-relaxed text-base md:text-lg mb-8 border-l-2 border-[#C5A059] pl-4">
          過去の合格者と塾長の会話データや、質問に対する塾長の全回答、そして独自分析した過去問データを集約。24時間、塾長があなたの隣で戦略を練り続ける体験を実現しました。
        </p>

        {/* Guide text */}
        <p className="text-xs text-[#666666] mb-3 flex items-center gap-1">
          <span className="text-[#002147]">?</span>
          あてはまる悩みを押してください
        </p>

        {/* Tabs - Horizontal scroll on mobile */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 mb-5">
          <div className="flex gap-2 md:gap-3 min-w-max md:min-w-0 md:flex-wrap">
            {conversations.map((conv, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${activeTab === index
                  ? 'bg-[#002147] text-white shadow-md'
                  : 'bg-white text-[#333333] border-2 border-[#E5E7EB] hover:border-[#002147]/30'
                  }`}
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {conv.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Mockup - Dialogue Style */}
        <div className="bg-[#F8F9FA] rounded-lg p-4 md:p-6 border border-[#E5E7EB]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#800000]" />
            <span className="text-xs font-bold text-[#002147] tracking-wider">相談AIとの対話</span>
          </div>
          <div className="space-y-3">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-[#002147] text-white rounded-lg rounded-br-none px-4 py-3 max-w-[90%] md:max-w-[85%] shadow-sm">
                <p className="text-sm md:text-base leading-[1.7]">{conversations[activeTab].question}</p>
              </div>
            </div>
            {/* AI response with typing animation */}
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-bl-none px-4 py-3 max-w-[90%] md:max-w-[85%] border border-[#800000]/20 shadow-sm">
                {isTyping ? (
                  <div className="flex items-center gap-1 py-2">
                    <span className="w-2 h-2 bg-[#800000]/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-[#800000]/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-[#800000]/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                ) : (
                  <p className="text-sm md:text-base text-[#333333] leading-[1.7] animate-in fade-in duration-300">
                    {renderAnswer(conversations[activeTab].answer)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary font-serif tracking-[0.1em]">佐藤塾</h1>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-medium">無料相談</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background with navy gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Keio SFC Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/97 via-[#002147]/93 to-[#002147]/98"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex-1 flex flex-col justify-center pt-16">
          {/* Main Copy */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif tracking-wider leading-snug text-balance">
            3人に2人が慶應SFCへ。<br className="hidden sm:block" />
            <span className="text-[#C5A059]">合格率66.7%</span>を叩き出す、<br className="hidden md:block" />
            独自のAI伴走指導。
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            学校では教えられないSFCの正解を、AIと塾長が24時間フルサポート。<br className="hidden md:block" />
            最短距離で、合格する思考を鍛え上げる。
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Button
              size="lg"
              className="bg-[#800000] hover:bg-[#C5A059] text-white text-lg font-bold px-12 py-7 h-auto shadow-[0_4px_24px_rgba(0,33,71,0.5)] hover:shadow-[0_8px_32px_rgba(197,160,89,0.45)] transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#C5A059]"
            >
              まずは塾長に無料相談する
            </Button>
          </div>

          {/* Stats Section - Medal-like design */}
          {/* Mobile: center card full-width on top, two side cards in a row below */}
          {/* Desktop: all three in one row, center slightly elevated */}
          <div className="max-w-4xl mx-auto w-full">
            {/* Center card — full-width on mobile, hidden on md+ (rendered in the 3-col grid) */}
            <div className="md:hidden flex flex-col items-center justify-center p-6 border-2 border-[#C5A059] rounded-lg bg-[#C5A059]/10 backdrop-blur-sm shadow-lg mb-4">
              <p className="text-xs text-[#C5A059] mb-1 tracking-[0.2em] font-bold uppercase">2026年度 合格率</p>
              <p className="text-6xl font-bold text-[#C5A059] tracking-tight" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>66.7<span className="text-2xl">%</span></p>
              <p className="text-sm text-[#D4AF37] mt-2 font-medium drop-shadow-[0_0_8px_rgba(0,33,71,1)]">(全受験生13名中9名が合格)</p>
            </div>

            {/* Side cards row on mobile */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              <div className="flex flex-col items-center justify-center p-4 border-2 border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium">2026年度 合格者</p>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>9<span className="text-lg ml-0.5">名</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border-2 border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-1 tracking-[0.15em] font-medium">7年間累計</p>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>49<span className="text-lg ml-0.5">名</span></p>
              </div>
            </div>

            {/* Desktop: all three in one row */}
            <div className="hidden md:grid md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center p-6 border-2 border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase">2026年度 合格者</p>
                <p className="text-6xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>9<span className="text-2xl ml-1">名</span></p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 border-2 border-[#C5A059] rounded-lg bg-[#C5A059]/10 backdrop-blur-sm shadow-lg scale-110 -my-2">
                <p className="text-xs text-[#C5A059] mb-2 tracking-[0.2em] font-bold uppercase">2026年度 合格率</p>
                <p className="text-7xl font-bold text-[#C5A059] tracking-tight" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>66.7<span className="text-3xl">%</span></p>
                <p className="text-sm text-[#D4AF37] mt-3 font-medium drop-shadow-[0_0_8px_rgba(0,33,71,1)]">(全受験生13名中9名が合格)</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 border-2 border-[#C5A059]/40 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-xs text-white/70 mb-2 tracking-[0.2em] font-medium uppercase">7年間累計</p>
                <p className="text-6xl font-bold text-white" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 700 }}>49<span className="text-2xl ml-1">名</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 mt-16 pb-8 flex flex-col items-center animate-pulse">
          <span className="text-white/60 text-xs tracking-[0.3em] mb-3 font-medium">SCROLL</span>
          <div className="w-px h-14 bg-gradient-to-b from-white/70 via-white/30 to-transparent"></div>
        </div>
      </section>

      {/* Problem Section - Editorial Magazine Style */}
      <section className="relative py-28 px-4 bg-[#F3F4F6] overflow-hidden">
        {/* Pinstripe background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #002147 0px, #002147 1px, transparent 1px, transparent 8px)',
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Section Title - Editorial Style */}
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed text-balance">
              なぜ、一般的な塾の対策では、<br className="hidden sm:block" />
              慶應SFCの合格ラインに届かないのか？
            </h2>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          {/* Walls - Editorial Layout */}
          <div className="space-y-12 md:space-y-28">
            {/* Cause 01 */}
            <div className="relative">
              {/* Mobile: Large text as background watermark */}
              <div className="md:hidden absolute -top-2 -left-2 opacity-[0.08] pointer-events-none">
                <span className="text-7xl font-bold text-[#800000] font-serif leading-none">01</span>
              </div>
              {/* Desktop: Side column layout */}
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
                    学校や普通の塾が教えるのは、どの大学でも使える「一般的な書き方」。しかし、SFCは独自の視点を求める特殊な入試。ありきたりな回答では、合格点には届きません。
                  </p>
                </div>
              </div>
              {/* Mobile: Stacked layout */}
              <div className="md:hidden relative border-l-4 border-[#002147] pl-5">
                <div className="text-xs font-bold text-[#C5A059] tracking-[0.2em] mb-1">原因 01</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  SFC専用の対策になっていない
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  学校や普通の塾が教えるのは、どの大学でも使える「一般的な書き方」。しかし、SFCは独自の視点を求める特殊な入試。ありきたりな回答では、合格点には届きません。
                </p>
              </div>
            </div>

            {/* Cause 02 */}
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
                    大手塾は添削が返ってくるまで1週間かかり、回数制限（月4回など）もあります。合格には圧倒的な質の高い試行錯誤が必要なのに、この「待ち時間」が受験生の成長を止めてしまいます。
                  </p>
                </div>
              </div>
              <div className="md:hidden relative border-l-4 border-[#002147] pl-5">
                <div className="text-xs font-bold text-[#C5A059] tracking-[0.2em] mb-1">原因 02</div>
                <h3 className="text-lg font-bold text-[#002147] font-serif tracking-wide mb-3">
                  添削の回数が少なすぎる
                </h3>
                <p className="text-[#333333] leading-relaxed text-base">
                  大手塾は添削が返ってくるまで1週間かかり、回数制限（月4回など）もあります。合格には圧倒的な質の高い試行錯誤が必要なのに、この「待ち時間」が受験生の成長を止めてしまいます。
                </p>
              </div>
            </div>

            {/* Cause 03 */}
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

          {/* Closing Statement - Three Walls Resolution */}
          <div className="mt-20 md:mt-36 space-y-8 text-center">
            <div className="w-16 h-px bg-[#002147] mx-auto" />
            <p className="text-lg md:text-xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed">
              佐藤塾は、この
              <span className="underline decoration-1 decoration-[#002147] underline-offset-4">「独自性の壁」</span>
              <span className="underline decoration-1 decoration-[#002147] underline-offset-4">「時間の壁」</span>
              <span className="underline decoration-1 decoration-[#002147] underline-offset-4">「回数の壁」</span>を<br className="hidden md:block" />
              すべて解消します。
            </p>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto">
              <span className="text-[#C5A059] mr-1">◆</span>
              佐藤塾が独自に開発したSFC専用AIが、あなたの答案をその場ですぐに分析。24時間、何度でも高品質なフィードバックを受けられる環境で、合格ラインを確実に突破する力を引き上げます。
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section: Two AIs - White with intellectual pattern */}
      <section className="relative py-28 px-4 bg-white overflow-hidden">
        {/* Subtle intellectual pattern background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002147' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              過去合格者の頭脳を学習した、<br className="sm:hidden" />
              2つのAIを独自開発
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto">
              この2つのAIはただの汎用AIではなく、7年間にわたる合格者の全指導データと、塾長の全知見を学習させた、佐藤塾にしか作れない専用の指導システムです。
            </p>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* AI 1: 添削AI */}
            <div className="bg-white border-l-4 border-[#002147] shadow-lg rounded-r-lg overflow-hidden">
              <div className="p-6 md:p-10">
                {/* Title */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-[#C5A059] tracking-[0.2em] uppercase">AI 01</span>
                  <div className="h-px flex-1 bg-[#002147]/10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif tracking-wide mb-4">
                  添削用AI
                </h3>

                {/* Development Background */}
                <p className="text-[#333333] leading-relaxed text-base md:text-lg mb-8 border-l-2 border-[#C5A059] pl-4">
                  7年間の合格者が書いた全答案と、その成長過程（ビフォー・アフター）をすべて学習。SFC特有の評価基準を佐藤塾なりに基準化し、合格ラインを超えるための「添削」と「情報提供」を実現します。
                </p>

                {/* Chat Mockup */}
                <div className="bg-[#F8F9FA] rounded-lg p-5 md:p-6 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#002147]" />
                    <span className="text-xs font-bold text-[#002147] tracking-wider">添削AIからのフィードバック</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 md:p-5 border border-[#002147]/10 shadow-sm">
                    <p className="text-sm md:text-base text-[#333333] leading-relaxed">
                      今回の回答はもう一度書き直してください。修正箇所は3点あります。1つ目は、あなたの主張は<span className="text-[#800000] font-bold">SFCの求める「多角的視点」が不足</span>していることです。具体的には設問2については、単なる現状分析だけでなく、<span className="text-[#800000] font-bold">居住者の権利という対立軸</span>を加えて再構成してください。そうすることで論理の深みが増します。2つ目は、・・・。また、今回の内容における背景知識があまりないように見受けられたので、専門的な知識を培うために「〇〇」というサイトの記事を読んでおいてください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI 2: 相談AI */}
            <ConsultationAICard />
          </div>
        </div>
      </section>

      {/* Comparison Section - Gray */}
      <section className="py-24 px-4 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>なぜ佐藤塾が選ばれるのか</SectionTitle>

          <div className="overflow-x-auto rounded-lg shadow-md bg-white">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-5 text-left font-bold font-serif text-base tracking-wide">項目</th>
                  <th className="p-5 text-center font-bold font-serif text-base tracking-wide bg-secondary">佐藤塾</th>
                  <th className="p-5 text-center font-bold font-serif text-base tracking-wide">一般的な予備校</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-5 font-semibold">小論文添削</td>
                  <td className="p-5 text-center bg-secondary/5">
                    <Badge className="bg-accent text-accent-foreground font-semibold">24時間無制限</Badge>
                  </td>
                  <td className="p-5 text-center text-muted-foreground">週1回程度</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-5 font-semibold">対策範囲</td>
                  <td className="p-5 text-center bg-secondary/5">
                    <Badge className="bg-accent text-accent-foreground font-semibold">AO・一般 二刀流</Badge>
                  </td>
                  <td className="p-5 text-center text-muted-foreground">別途高額オプション</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-5 font-semibold">費用</td>
                  <td className="p-5 text-center bg-secondary/5">
                    <Badge className="bg-accent text-accent-foreground font-semibold">13.8万円・追加なし</Badge>
                  </td>
                  <td className="p-5 text-center text-muted-foreground">30万円〜（別途費用あり）</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">指導体制</td>
                  <td className="p-5 text-center bg-secondary/5">
                    <Badge className="bg-accent text-accent-foreground font-semibold">塾長が直接伴走</Badge>
                  </td>
                  <td className="p-5 text-center text-muted-foreground">学生チューター中心</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ecosystem Section - White */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>二刀流相乗効果とエコシステム</SectionTitle>

          <div className="bg-white border border-border rounded-xl p-10 shadow-md">
            <div className="space-y-8">
              {[
                { num: '1', title: '計画', desc: 'AO・一般の受験戦略を統合的に立���' },
                { num: '2', title: 'AI支援', desc: '添削AI・相談AIで日々の施策をサポート' },
                { num: '3', title: 'レポート', desc: '進捗と課題を可視化したレポート提供' },
                { num: '4', title: '塾長1on1', desc: '月1回の個別面談で戦略を調整' },
              ].map((item) => (
                <div key={item.num} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl font-serif shadow-md">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl font-serif text-foreground tracking-wide">{item.title}</h4>
                    <p className="text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Six Reasons Section - Gray */}
      <section className="py-24 px-4 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>佐藤塾が選ばれる6つの理由</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'AO・一般二刀流対応', desc: 'どちらの受験方式でも、あるいは両方での受験でも完全サポート' },
              { num: '02', title: 'AI添削無制限', desc: '24時間いつでも、何度でも小論文を添削。時間制限なし' },
              { num: '03', title: '通塾ゼロ', desc: 'すべてオンライン。通塾時間を勉強に充てられる' },
              { num: '04', title: 'SFC特化ロジック', desc: '7年間の指導実績に基づく、SFC合格に必要な全てを網羅' },
              { num: '05', title: 'メンタルサポート充実', desc: '相談AIと塾長が受験のあらゆる不安に対応' },
              { num: '06', title: '返金保証制度', desc: 'AO合格で受講料の50%を返金。安心の仕組み' },
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

      {/* Pricing Section - White */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="衝撃の合格支援制度">料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Main Plan */}
            <Card className="bg-white shadow-xl border-2 border-secondary transform md:scale-105 relative overflow-hidden rounded-lg">
              <div className="bg-secondary text-white px-8 py-6">
                <Badge className="bg-accent text-accent-foreground mb-4 inline-block font-semibold">推奨プラン</Badge>
                <h4 className="text-2xl font-bold font-serif tracking-wide">AO・一般 完全攻略<br />二刀流プラン</h4>
              </div>
              <CardContent className="pt-10">
                <div className="mb-8">
                  <p className="text-muted-foreground text-sm mb-2 font-medium">受講料</p>
                  <p className="text-6xl font-bold text-primary font-serif tracking-tight">
                    138,000<span className="text-2xl ml-1">円</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">（税込）</p>
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-5 mb-8">
                  <p className="text-sm font-semibold text-accent mb-2 font-serif">返金特典</p>
                  <p className="text-lg font-bold text-foreground font-serif">
                    AO入試合格時、残金の50%を返金
                  </p>
                </div>

                <p className="text-sm text-foreground mb-8 leading-relaxed">
                  最短合格を目指す。早く受かれば、負担も半分に。
                </p>

                <ul className="space-y-4 mb-10 text-sm">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>AI添削 24時間無制限</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>相談AI 24時間対応</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>塾長個別面談 月1回</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>追加費用なし</span>
                  </li>
                </ul>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-base font-semibold shadow-lg">
                  このプランに申し込む
                </Button>
              </CardContent>
            </Card>

            {/* Secondary Plan */}
            <Card className="bg-white shadow-md border border-border rounded-lg">
              <CardHeader className="bg-[#F9F9F9] border-b border-border">
                <h4 className="text-xl font-bold text-primary font-serif tracking-wide">小論文特化プラン</h4>
              </CardHeader>
              <CardContent className="pt-10">
                <div className="mb-8">
                  <p className="text-muted-foreground text-sm mb-2 font-medium">受講料</p>
                  <p className="text-6xl font-bold text-primary font-serif tracking-tight">
                    98,000<span className="text-2xl ml-1">円</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">（税込）</p>
                </div>

                <p className="text-sm text-foreground mb-8 leading-relaxed">
                  小論文に特化した集中支援プラン
                </p>

                <ul className="space-y-4 mb-10 text-sm">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI添削 24時間無制限</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>相談AI（限定利用）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>塾長個別面談 月1回</span>
                  </li>
                </ul>

                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white h-14 text-base font-medium">
                  詳しく見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructor Message Section - Gray */}
      <section className="py-24 px-4 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/jukucho.jpg"
                alt="塾長"
                width={400}
                height={500}
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-44 h-44">
                <Image
                  src="/signature.png"
                  alt="塾長サイン"
                  width={150}
                  height={100}
                  className="w-full h-auto opacity-80"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#002147]" />
                <span className="text-sm font-medium text-primary tracking-widest">MESSAGE</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-serif tracking-[0.08em]">
                塾長からのメッセージ
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                SFCの小論文は「正解を書く試験」ではなく、「あなたの思考を表現する試験」です。
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                7年間で49名の合格者を輩出した経験と、最新のAI技術を組み合わせ、あなたの「本当の実力」を引き出します��
              </p>
              <p className="text-lg text-foreground mb-10 leading-relaxed">
                <strong className="text-primary">私が直接、あなたと並走することを約束します。</strong>
              </p>
              <div className="border-l-4 border-accent pl-6">
                <p className="text-xl font-bold text-secondary font-serif tracking-wide">
                  佐藤 〇〇
                </p>
                <p className="text-base text-muted-foreground mt-1">佐藤塾 塾長</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - White */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <SectionTitle subtitle="合格への第一歩をここから始めましょう">
            まずは1分で無料相談
          </SectionTitle>

          <Card className="bg-white shadow-md border-t-2 border-t-primary border-x border-b border-border rounded-lg">
            <CardContent className="pt-10">
              <form className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    お名前 <span className="text-secondary">*</span>
                  </label>
                  <Input placeholder="山田太郎" className="border-border focus:border-primary h-12" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    メールアドレス <span className="text-secondary">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    className="border-border focus:border-primary h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    電話番号 <span className="text-secondary">*</span>
                  </label>
                  <Input placeholder="09012345678" className="border-border focus:border-primary h-12" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    ご質問・ご相談
                  </label>
                  <Textarea
                    placeholder="佐藤塾について気になることなどをお聞きします"
                    className="border-border focus:border-primary min-h-36"
                  />
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-base font-semibold shadow-lg">
                  無料相談に申し込む
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  送信いただいた情報は、お客様へのサービス提供のため、安全に管理されます。
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-3 font-serif tracking-[0.1em]">佐藤塾</h3>
          <p className="text-white/80 mb-8 text-lg">
            慶應義塾大学 SFC（総合政策学部・環境情報学部）受験対策専門塾
          </p>
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-white/60">
              &copy; 2026 佐藤塾. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
