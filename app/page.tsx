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
          <span className="text-[#002147]"></span>
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
            最短距������、合格する思考を鍛え上げる。
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
              2つのAIを佐藤塾が開発
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
      <section className="py-28 px-4 bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
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

          {/* Desktop: Full 3-column table */}
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
                {/* Row 1: 小論文の添削 */}
                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147]">小論文の添削</td>
                  <td className="p-6 text-center bg-[#800000]/5 text-[#333333] font-semibold">24時間無制限<br /><span className="text-xs text-[#666666]">（AI×塾長）</span></td>
                  <td className="p-6 text-center bg-white text-[#666666]">週1〜4回<br /><span className="text-xs">（対面メイン）</span></td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666]">週1回<br /><span className="text-xs">（学生バイト中心）</span></td>
                </tr>

                {/* Row 2: 対策範囲 */}
                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147]">対策範囲</td>
                  <td className="p-6 text-center bg-[#800000]/5 text-[#333333] font-semibold"><span className="text-[#800000] font-bold">AO・一般 二刀流</span><br /><span className="text-xs text-[#666666]">（完全並走）</span></td>
                  <td className="p-6 text-center bg-white text-[#666666]">AOのみ<br /><span className="text-xs">または別途料金で一般入試も対象</span></td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666]">一般入試のみ</td>
                </tr>

                {/* Row 3: 費用 */}
                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-6 font-bold text-[#002147]">費用（年間）</td>
                  <td className="p-6 text-center bg-[#800000]/5">
                    <p className="text-lg font-bold text-[#800000]">月額 11.8万円〜</p>
                    <p className="text-xs text-[#800000] mt-1 font-semibold">※講習費・教材費 0円</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666]">年間 150万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666]">年間 100万円〜<br /><span className="text-xs">（講習は別料金）</span></td>
                </tr>

                {/* Row 4: 質問・相談 */}
                <tr>
                  <td className="p-6 font-bold text-[#002147]">質問・相談</td>
                  <td className="p-6 text-center bg-[#800000]/5">
                    <p className="text-[#800000] font-bold">24時間 / 予約不要</p>
                    <p className="text-xs text-[#666666] mt-1">いつでも即時回答</p>
                  </td>
                  <td className="p-6 text-center bg-white text-[#666666]">予約制 / 開校時間内</td>
                  <td className="p-6 text-center bg-[#FAFAFA] text-[#666666]">予約制 / 開校時間内</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile: Horizontal scroll - simplified stable design */}
          <div className="md:hidden mt-8 pb-4">
            <div className="overflow-x-auto overflow-y-visible rounded-lg shadow-lg bg-white">
              <table className="w-full border-collapse" style={{ minWidth: '420px' }}>
                <thead>
                  <tr>
                    <th className="sticky left-0 z-20 p-3 text-left font-bold text-[#333333] text-[13px] bg-white border-r border-[#E5E7EB]" style={{ minWidth: '90px' }}>項目</th>
                    <th className="p-3 pt-5 text-center font-bold text-white text-[12px] bg-[#800000] relative" style={{ minWidth: '140px' }}>
                      <span className="absolute top-[-10px] left-1/2 bg-[#C5A059] text-[#002147] text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-sm whitespace-nowrap z-30" style={{ transform: 'translateX(-50%)' }}>SFC特化</span>
                      佐藤塾
                    </th>
                    <th className="p-3 text-center font-bold text-[#555555] text-[11px] bg-[#F8F8F8] border-l border-[#E5E7EB]" style={{ minWidth: '80px' }}>特化塾</th>
                    <th className="p-3 text-center font-bold text-[#555555] text-[11px] bg-[#F3F3F3] border-l border-[#E5E7EB]" style={{ minWidth: '80px' }}>一般塾</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB]">小論文添削</td>
                    <td className="p-3 bg-[#fff5f5] text-center">
                      <p className="text-[12px] font-bold text-[#800000] leading-snug">24時間無制限</p>
                    </td>
                    <td className="p-3 bg-[#F8F8F8] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">週1〜4回</td>
                    <td className="p-3 bg-[#F3F3F3] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">週1回</td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB]">対策範囲</td>
                    <td className="p-3 bg-[#fff5f5] text-center">
                      <p className="text-[12px] font-bold text-[#800000] leading-snug">AO・一般二刀流</p>
                    </td>
                    <td className="p-3 bg-[#F8F8F8] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">AOのみ</td>
                    <td className="p-3 bg-[#F3F3F3] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">一般のみ</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="sticky left-0 z-20 p-3 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB]">月額費用</td>
                    <td className="p-3 bg-[#fff5f5] text-center">
                      <p className="text-[13px] font-bold text-[#800000]">11.8万〜</p>
                      <p className="text-[10px] text-[#800000] font-semibold">※講習費0円</p>
                    </td>
                    <td className="p-3 bg-[#F8F8F8] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">12万〜+講習費</td>
                    <td className="p-3 bg-[#F3F3F3] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">8万〜+講習費</td>
                  </tr>

                  {/* Row 4 — extra pb to clear scrollbar */}
                  <tr>
                    <td className="sticky left-0 z-20 p-3 pb-6 font-bold text-[#002147] text-[13px] bg-white border-r border-[#E5E7EB]">相談対応</td>
                    <td className="p-3 pb-6 bg-[#fff5f5] text-center">
                      <p className="text-[12px] font-bold text-[#800000] leading-snug">24時間予約不要</p>
                    </td>
                    <td className="p-3 pb-6 bg-[#F8F8F8] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">予約制</td>
                    <td className="p-3 pb-6 bg-[#F3F3F3] text-center text-[11px] text-[#666666] border-l border-[#E5E7EB]">予約制</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cost Disclaimer */}
          <div className="mt-10 bg-white rounded-lg border-l-4 border-[#800000] p-5 md:p-6 shadow-md">
            <p className="text-sm md:text-base text-[#333333]">
              <span className="text-[#800000] font-bold">※ 佐藤塾の費用は月額 11.8万円〜。</span>
              講習費、教材費といった追加料金は<span className="font-bold">一切かかりません</span>。他塾のように「合格時には別途〇万円」といった費用も発生しません。
            </p>
          </div>
        </div>
      </section>

      {/* Cycle Section - 4 Steps */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed">
              合格を生む4ステップ・サイクル
            </h2>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          {/* Desktop: Cycle Layout */}
          <div className="hidden lg:block relative">
            {/* Center text */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <div className="bg-white rounded-full w-48 h-48 flex items-center justify-center shadow-lg border-2 border-[#002147]/10">
                <div>
                  <p className="text-sm text-[#C5A059] font-bold tracking-wider mb-1">SUCCESS CYCLE</p>
                  <p className="text-lg font-bold text-[#002147] font-serif">合格率66.7%を<br />支えるサイクル</p>
                </div>
              </div>
            </div>

            {/* Circular arrows SVG */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px]" viewBox="0 0 420 420">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#002147" />
                </marker>
              </defs>
              {/* Circular path arrows */}
              <path d="M 210 40 A 170 170 0 0 1 380 210" fill="none" stroke="#002147" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <path d="M 380 210 A 170 170 0 0 1 210 380" fill="none" stroke="#002147" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <path d="M 210 380 A 170 170 0 0 1 40 210" fill="none" stroke="#002147" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <path d="M 40 210 A 170 170 0 0 1 210 40" fill="none" stroke="#002147" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>

            {/* 4 Cards positioned around the circle: Top=01, Right=02, Bottom=03, Left=04 */}
            <div className="grid grid-cols-2 gap-x-96 gap-y-16 py-8">
              {/* Top: Step 01 - 学習計画 */}
              <div className="col-span-2 flex justify-center">
                <div className="bg-white border-2 border-[#002147]/20 rounded-lg p-6 w-80 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold text-[#002147]/20 font-serif">01</span>
                    <h4 className="text-lg font-bold text-[#002147] font-serif">学習計画</h4>
                  </div>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    志望校選定から、1週間単位の学習戦術まで、一人ひとりに最適化された「勝てるロードマップ」を塾長と共に策定します。
                  </p>
                </div>
              </div>

              {/* Middle: Step 04 (left) and Step 02 (right) - clockwise order */}
              <div className="flex justify-start">
                <div className="bg-white border-4 border-[#800000] rounded-lg p-6 w-80 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold text-[#800000]/30 font-serif">04</span>
                    <h4 className="text-lg font-bold text-[#002147] font-serif">塾長1on1授業</h4>
                  </div>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    <span className="text-[#800000] font-bold">週1回</span>で総括を行い、AIでは解決できない深い悩みや高度な思考を<span className="text-[#800000] font-bold">「わかるまで」</span>塾長が直接指導。再び次の計画へと繋げます。
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-white border-2 border-[#002147]/20 rounded-lg p-6 w-80 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold text-[#002147]/20 font-serif">02</span>
                    <h4 className="text-lg font-bold text-[#002147] font-serif">AI支援</h4>
                  </div>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    日々の演習は、独自開発AIが<span className="text-[#800000] font-bold">24時間無制限</span>で並走。添削の待ち時間や疑問を短縮し、圧倒的な学習量を担保します。
                  </p>
                </div>
              </div>

              {/* Bottom: Step 03 - 進捗レポート */}
              <div className="col-span-2 flex justify-center">
                <div className="bg-white border-2 border-[#002147]/20 rounded-lg p-6 w-80 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold text-[#002147]/20 font-serif">03</span>
                    <h4 className="text-lg font-bold text-[#002147] font-serif">進捗レポート</h4>
                  </div>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    AIと塾長があなたの学習データを同期。現在の位置と課題を可視化し、客観的なデータに基づいた軌道修正を行います。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Vertical flow with curved connectors */}
          <div className="lg:hidden">
            {/* Center label */}
            <div className="text-center mb-10">
              <div className="inline-block bg-[#002147] text-white px-6 py-3 rounded-full">
                <p className="text-sm font-bold tracking-wider">合格率66.7%を支えるサイクル</p>
              </div>
            </div>

            <div className="relative max-w-md mx-auto">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#002147] via-[#002147] to-[#002147]" />

              {/* Step 01 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-lg font-serif shadow-md z-10">
                  01
                </div>
                <div className="bg-white border-2 border-[#002147]/20 rounded-lg p-5 shadow-md">
                  <h4 className="text-lg font-bold text-[#002147] font-serif mb-2">学習計画（受験戦略の立案）</h4>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    志望校選定から、1週間単位の学習戦術まで一人ひとりに最適化された「勝てるロードマップ」を塾長と共に策定します。
                  </p>
                </div>
                {/* Curved arrow */}
                <svg className="absolute left-10 -bottom-2 w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M12 19l-4-4M12 19l4-4" stroke="#002147" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 02 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-lg font-serif shadow-md z-10">
                  02
                </div>
                <div className="bg-white border-2 border-[#002147]/20 rounded-lg p-5 shadow-md">
                  <h4 className="text-lg font-bold text-[#002147] font-serif mb-2">24時間無制限のAI支援</h4>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    日々の演習は、独自開発AIが<span className="text-[#800000] font-bold">24時間無制限</span>で並走。添削の待ち時間や疑問を短縮し、圧倒的な学習量を担保します。
                  </p>
                </div>
                <svg className="absolute left-10 -bottom-2 w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M12 19l-4-4M12 19l4-4" stroke="#002147" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 03 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-lg font-serif shadow-md z-10">
                  03
                </div>
                <div className="bg-white border-2 border-[#002147]/20 rounded-lg p-5 shadow-md">
                  <h4 className="text-lg font-bold text-[#002147] font-serif mb-2">進捗レポートの可視化</h4>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    AIと塾長があなたの学習データを踏まえ、現在の位置と合格までの課題を可視化し、客観的なデータに基づいた軌道修正を行います。
                  </p>
                </div>
                <svg className="absolute left-10 -bottom-2 w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M12 19l-4-4M12 19l4-4" stroke="#002147" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 04 - Emphasized */}
              <div className="relative pl-16 pb-4">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold text-lg font-serif shadow-md z-10">
                  04
                </div>
                <div className="bg-white border-4 border-[#800000] rounded-lg p-5 shadow-lg">
                  <h4 className="text-lg font-bold text-[#002147] font-serif mb-2">週1回の塾長1on1授業</h4>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    <span className="text-[#800000] font-bold">週1回</span>で総括を行い、AIでは解決できない深い悩みや高度な思考を<span className="text-[#800000] font-bold">「わかるまで」</span>直接指導。再び次の計画へと繋げます。
                  </p>
                </div>
              </div>

              {/* Return arrow to step 01 */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 text-[#002147]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M17 11H7M7 11l4-4M7 11l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-bold tracking-wider">01へ戻り、サイクルを繰り返す</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M7 11h10M17 11l-4-4M17 11l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section - Timeline */}
      <section className="py-28 px-4 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-[#002147] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-relaxed mb-6">
              SFC合格への最短ルート：<br className="sm:hidden" />二刀流ロードマップ
            </h2>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto">
              いつ、何のためにAIを使い、塾長も併走するか。合格までの道筋を明確にします。
            </p>
            <div className="w-12 h-px bg-[#002147] mx-auto mt-8" />
          </div>

          {/* Desktop: Horizontal Steps */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#002147] via-[#800000] to-[#C5A059]" />

              <div className="grid grid-cols-3 gap-8">
                {/* Step 01 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-lg font-serif shadow-lg z-10 border-4 border-white">
                      01
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#002147]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="text-sm font-bold text-[#002147]">4月〜6月</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-[#002147]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#002147]/10 text-[#002147] text-xs font-bold px-2 py-1 rounded">AI中心</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-3">
                      基礎構築期：<br />AIで論理の型をマスター
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      <span className="text-[#800000] font-bold">添削AI</span>を使い倒し、SFC特有の「論理的思考」を無意識レベルまで叩き込む。小論文の基礎学習に取り組む。
                    </p>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold text-lg font-serif shadow-lg z-10 border-4 border-white">
                      02
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#800000]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <span className="text-sm font-bold text-[#800000]">7月〜9月</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-[#800000]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#800000]/10 text-[#800000] text-xs font-bold px-2 py-1 rounded">塾長中心</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-3">
                      戦略深化期：<br />塾長との1on1で独自性を磨く
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      AO入試の出願に向け、<span className="text-[#800000] font-bold">塾長が直接対話</span>であなたの「強み」を言語化。唯一無二の志望理由書作成や徹底的な面接対策を行う。
                    </p>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059] text-[#002147] flex items-center justify-center font-bold text-lg font-serif shadow-lg z-10 border-4 border-white">
                      03
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                      <span className="text-sm font-bold text-[#C5A059]">10月〜入試</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-[#C5A059]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold px-2 py-1 rounded">AI×塾長</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] font-serif mb-3">
                      一般入試期：<br />AO入試を一般入試にも活かす
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      <span className="text-[#800000] font-bold">相談AI</span>で細かい課題を解決し続ける。AO入試と一般入試横断で長期間取り組んだ小論文を強みに、合格を確実なものに。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative max-w-md mx-auto">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#002147] via-[#800000] to-[#C5A059]" />

              {/* Step 01 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-lg font-serif shadow-md z-10">
                  01
                </div>
                <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-[#002147]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#002147]/10 text-[#002147] text-xs font-bold px-2 py-1 rounded">AI中心</span>
                    <span className="text-xs font-bold text-[#002147]">4月〜7月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-2">
                    基礎構築期：AIで論理の型をマスター
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    <span className="text-[#800000] font-bold">添削AI</span>を使い倒し、SFC特有の「論理的思考」を無意識レベルまで叩き込む。小論文の基礎はこの時期に完成。
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold text-lg font-serif shadow-md z-10">
                  02
                </div>
                <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-[#800000]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#800000]/10 text-[#800000] text-xs font-bold px-2 py-1 rounded">塾長中心</span>
                    <span className="text-xs font-bold text-[#800000]">8月〜10月</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-2">
                    戦略深化期：塾長との1on1で独自性を磨く
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    AO入試の出願に向け、<span className="text-[#800000] font-bold">塾長が直接対話</span>であなたの「強み」を言語化。唯一無二の志望理由書を作成。
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#C5A059] text-[#002147] flex items-center justify-center font-bold text-lg font-serif shadow-md z-10">
                  03
                </div>
                <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-[#C5A059]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold px-2 py-1 rounded">AI×塾長</span>
                    <span className="text-xs font-bold text-[#C5A059]">11月〜入試</span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] font-serif mb-2">
                    総仕上げ期：二刀流で合格率を最大化
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    <span className="text-[#800000] font-bold">相談AI</span>でメンタルを維持しつつ、AOと一般の両面から合格を狙う。小論文と学科試験の相乗効果で、合格を確実なものに。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Reasons Section - Gray */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>佐藤塾が選ばれる6つの理由</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'AOと一般二刀流対応', desc: 'どちらの受験方式でも、あるいは両方での受験でも完全サポート' },
              { num: '02', title: 'AI添削無制限', desc: '24時間いつでも、何度でも小論文を添削。時間制限なし' },
              { num: '03', title: '学習の徹底管理', desc: '週次、月次で学習計画を策定し、管理する' },
              { num: '04', title: '返金保証制度', desc: 'AO合格で受講料の50%を返金。安心の仕組み' },
              { num: '05', title: 'SFC特化ロジック', desc: '7年間の指導実績に基づく、SFC合格に必要な全てを網羅' },
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

      {/* Pricing Section - White */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="明朗会計・追加費用なし">2つの料金プラン</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Main Plan - 受験生限定プラン */}
            <div className="relative flex flex-col bg-white shadow-xl border-4 border-[#800000] rounded-xl overflow-hidden">
              {/* 人気No.1 ラベル */}
              <div className="absolute top-4 right-4 bg-[#C5A059] text-[#002147] text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                人気No.1
              </div>
              
              <div className="bg-[#800000] text-white px-6 py-6">
                <p className="text-xs font-bold text-[#C5A059] tracking-wider mb-2">受験生限定</p>
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-wide">SFC二刀流<br />完全攻略プラン</h4>
              </div>
              
              <div className="flex-1 flex flex-col p-6 md:p-8">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-[#666666] text-xs mb-1">月額料金</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#800000] font-serif">118,000</span>
                    <span className="text-xl font-bold text-[#800000]">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-1">/ 月（税込129,800円）</p>
                </div>

                {/* Zero fees highlight */}
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-sm font-bold text-[#002147]">入会金 0円</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-sm font-bold text-[#002147]">追加講習費 0円</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">AI添削 <span className="font-bold text-[#800000]">24時間無制限</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">塾長1on1授業 <span className="font-bold text-[#800000]">週1回</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">受験戦略立案（AO・一般 二刀流対応）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#800000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">相談AI 24時間対応</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white h-14 text-base font-bold shadow-lg mt-auto">
                  このプランに申し込む
                </Button>
              </div>
            </div>

            {/* Secondary Plan - 一般プラン */}
            <div className="relative flex flex-col bg-white shadow-md border-2 border-[#E5E7EB] rounded-xl overflow-hidden">
              <div className="bg-[#F3F4F6] text-[#333333] px-6 py-6 border-b border-[#E5E7EB]">
                <p className="text-xs font-bold text-[#666666] tracking-wider mb-2">一般向け</p>
                <h4 className="text-xl md:text-2xl font-bold font-serif tracking-wide text-[#002147]">AI小論文<br />基礎特化プラン</h4>
              </div>
              
              <div className="flex-1 flex flex-col p-6 md:p-8">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-[#666666] text-xs mb-1">月額料金</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[#002147] font-serif">78,000</span>
                    <span className="text-xl font-bold text-[#002147]">円</span>
                  </div>
                  <p className="text-sm text-[#333333] mt-1">/ 月（税込85,800円）</p>
                </div>

                {/* Zero fees highlight */}
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#666666]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-sm text-[#666666]">入会金 0円</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#666666]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-sm text-[#666666]">追加講習費 0円</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">AI添削 24時間無制限</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#002147] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#333333]">相談AI 24時間対応</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-50">
                    <svg className="w-5 h-5 text-[#999999] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span className="text-sm text-[#999999]">塾長1on1授業は含まれません</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Button variant="outline" className="w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white h-14 text-base font-medium mt-auto">
                  詳しく見る
                </Button>
              </div>
            </div>
          </div>

          {/* Contract Notes */}
          <div className="mt-10 bg-[#F8F9FA] rounded-lg p-5 md:p-6 border border-[#E5E7EB]">
            <p className="text-sm text-[#333333] leading-relaxed mb-3">
              <span className="font-bold text-[#002147]">※ AO入試合格後は、合格発表日の月末をもって自動退塾（契約終了）となります。</span>無駄な継続費用は一切かかりません。
            </p>
            <p className="text-xs text-[#666666]">
              会費ペイによる安心の月額決済システムを導入しています。
            </p>
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
            まずは1分で無料相��
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
