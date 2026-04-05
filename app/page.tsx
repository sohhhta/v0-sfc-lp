'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { useState } from 'react'
import { Check, MessageCircle, PenTool } from 'lucide-react'

// Section divider component with visual rhythm
function SectionDivider({ variant = 'navy' }: { variant?: 'navy' | 'sepia' }) {
  if (variant === 'sepia') {
    return (
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002147]/5 to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'url(/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'sepia(100%) contrast(0.8)',
          }}
        />
      </div>
    )
  }
  return (
    <div className="h-16 bg-gradient-to-r from-transparent via-[#002147]/10 to-transparent" />
  )
}

export default function Page() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary font-serif tracking-wide">佐藤塾</h1>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium">無料相談</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Keio SFC Campus"
            fill
            className="object-cover"
            style={{ filter: 'sepia(30%) contrast(0.95) brightness(0.95)' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 font-serif tracking-tight text-balance">
            慶應SFC合格への<br />最短距離
          </h2>
          <p className="text-xl md:text-2xl text-foreground mb-10 font-medium">
            3人に2人が合格する、<span className="text-secondary font-bold font-serif">独自のAI伴走ロジック</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base font-semibold px-8 py-6">
              無料相談に申し込む
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8 py-6">
              詳しく見る
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 text-center bg-card/90 backdrop-blur-sm rounded-lg p-8 border border-border shadow-lg">
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary font-serif tracking-tight">66<span className="text-4xl">%</span></p>
              <p className="text-sm text-muted-foreground mt-2 font-medium">2026年合格率</p>
            </div>
            <div className="border-l border-r border-border px-4">
              <p className="text-5xl md:text-6xl font-bold text-primary font-serif tracking-tight">9<span className="text-4xl">名</span></p>
              <p className="text-sm text-muted-foreground mt-2 font-medium">2026年合格者</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary font-serif tracking-tight">49<span className="text-4xl">名</span></p>
              <p className="text-sm text-muted-foreground mt-2 font-medium">7年累計合格者</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="sepia" />

      {/* Problem Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/[0.02] via-transparent to-[#002147]/[0.02]" />
        <div className="max-w-4xl mx-auto relative">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 text-primary font-serif tracking-tight">
            SFC合格を阻む「壁」
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-secondary/30 bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center gap-3 font-serif text-xl">
                  <span className="text-2xl">&#10005;</span>
                  学校の先生でも指導困難
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  SFCの小論文は独特な評価基準。学校の一般的な指導方法では対応できない複雑さがあります。
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary/30 bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center gap-3 font-serif text-xl">
                  <span className="text-2xl">&#10005;</span>
                  答えがない出題
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  「正解」が存在しない論述問題。どう対策すればいいのか、多くの受験生が絶望感を感じています。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider variant="navy" />

      {/* Solution Section: Two AIs */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary font-serif tracking-tight">
            佐藤塾の解答：2つの知能
          </h3>
          <p className="text-center text-muted-foreground mb-20 text-lg">
            添削AIと相談AIが、あなたの合格を全方位からサポート
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* AI 1: Essay Editing */}
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/[0.03] to-transparent overflow-hidden shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-primary font-serif text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <PenTool className="w-5 h-5 text-primary" />
                  </div>
                  添削AI「論理の研磨」
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-card border-2 border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-xs text-muted-foreground mb-2 font-medium">原稿用紙イメージ</p>
                  <div className="bg-[#FFFEF0] p-3 rounded text-sm font-mono border border-[#D4AF37]/20">
                    <div className="line-through text-secondary/80">問題な部分がここにあります</div>
                    <div className="text-secondary text-xs mt-1 font-sans">→ より論理的に構成してください</div>
                  </div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <span>小論文の論理構成を瞬時に添削</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <span>24時間無制限に利用可能</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <span>SFC特化の指導ロジック</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI 2: Consultation */}
            <Card className="border-2 border-secondary/30 bg-gradient-to-br from-secondary/[0.03] to-transparent overflow-hidden shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-secondary font-serif text-xl">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                  </div>
                  相談AI「戦略の並走」
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-card border-2 border-secondary/20 rounded-lg p-4 mb-6">
                  <p className="text-xs text-muted-foreground mb-2 font-medium">対話チャット</p>
                  <div className="space-y-2 text-xs">
                    <div className="bg-primary/5 p-2 rounded border border-primary/10">
                      <strong className="text-primary">あなた:</strong> 小論文の選題で悩んでいます
                    </div>
                    <div className="bg-muted p-2 rounded border border-border">
                      <strong className="text-foreground">AI:</strong> その選題の背景を深掘りすることで...
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <span>受験全般の疑問に即答</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <span>メンタルサポート充実</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <span>24時間対応</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider variant="sepia" />

      {/* Comparison Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/[0.02] via-transparent to-[#002147]/[0.02]" />
        <div className="max-w-5xl mx-auto relative">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 text-primary font-serif tracking-tight">
            なぜ佐藤塾が選ばれるのか
          </h3>

          <div className="overflow-x-auto rounded-lg shadow-lg border border-border">
            <table className="w-full text-sm border-collapse bg-card">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-5 text-left font-bold font-serif text-base">項目</th>
                  <th className="p-5 text-center font-bold font-serif text-base bg-secondary">佐藤塾</th>
                  <th className="p-5 text-center font-bold font-serif text-base">一般的な予備校</th>
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

      <SectionDivider variant="navy" />

      {/* Ecosystem Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 text-primary font-serif tracking-tight">
            二刀流相乗効果とエコシステム
          </h3>

          <div className="bg-card border-2 border-primary/20 rounded-xl p-10 shadow-lg">
            <div className="space-y-10">
              {[
                { num: '1', title: '計画', desc: 'AO・一般の受験戦略を統合的に立案' },
                { num: '2', title: 'AI支援', desc: '添削AI・相談AIで日々の施策をサポート' },
                { num: '3', title: 'レポート', desc: '進捗と課題を可視化したレポート提供' },
                { num: '4', title: '塾長1on1', desc: '月1回の個別面談で戦略を調整' },
              ].map((item, index) => (
                <div key={item.num} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-2xl font-serif shadow-md">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl font-serif text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block w-px h-16 bg-gradient-to-b from-accent/50 to-transparent absolute left-7 mt-20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="sepia" />

      {/* Six Reasons Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/[0.02] via-transparent to-[#002147]/[0.02]" />
        <div className="max-w-5xl mx-auto relative">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 text-primary font-serif tracking-tight">
            佐藤塾が選ばれる6つの理由
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: '01', title: 'AO・一般二刀流対応', desc: 'どちらの受験方式でも、あるいは両方での受験でも完全サポート' },
              { num: '02', title: 'AI添削無制限', desc: '24時間いつでも、何度でも小論文を添削。時間制限なし' },
              { num: '03', title: '通塾ゼロ', desc: 'すべてオンライン。通塾時間を勉強に充てられる' },
              { num: '04', title: 'SFC特化ロジック', desc: '7年間の指導実績に基づく、SFC合格に必要な全てを網羅' },
              { num: '05', title: 'メンタルサポート充実', desc: '相談AIと塾長が受験のあらゆる不安に対応' },
              { num: '06', title: '返金保証制度', desc: 'AO合格で受講料の50%を返金。安心の仕組み' },
            ].map((item) => (
              <Card key={item.num} className="border border-border hover:border-primary/40 transition-all hover:shadow-lg bg-card">
                <CardHeader>
                  <div className="flex items-start gap-5">
                    <div className="text-5xl font-bold text-accent font-serif tracking-tighter">
                      {item.num}
                    </div>
                    <div className="pt-2">
                      <CardTitle className="text-lg font-serif">{item.title}</CardTitle>
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

      <SectionDivider variant="navy" />

      {/* Pricing Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary font-serif tracking-tight">
            料金プラン
          </h3>
          <p className="text-center text-muted-foreground mb-20 text-lg font-serif">
            衝撃の合格支援制度
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Main Plan */}
            <Card className="border-4 border-secondary shadow-2xl transform md:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground px-8 py-6">
                <Badge className="bg-accent text-accent-foreground mb-4 inline-block font-semibold">推奨プラン</Badge>
                <h4 className="text-2xl font-bold font-serif">AO・一般 完全攻略<br />二刀流プラン</h4>
              </div>
              <CardContent className="pt-10 relative">
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

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-base font-semibold shadow-lg">
                  このプランに申し込む
                </Button>
              </CardContent>
            </Card>

            {/* Secondary Plan */}
            <Card className="border-2 border-primary/20 bg-card">
              <CardHeader className="bg-primary/5 border-b border-border">
                <h4 className="text-xl font-bold text-primary font-serif">小論文特化プラン</h4>
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

                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-base font-medium">
                  詳しく見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider variant="sepia" />

      {/* Instructor Message Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]" />
        <div className="max-w-4xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10" />
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
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-serif tracking-tight">
                塾長からのメッセージ
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                SFCの小論文は「正解を書く試験」ではなく、「あなたの思考を表現する試験」です。
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                7年間で49名の合格者を輩出した経験と、最新のAI技術を組み合わせ、あなたの「本当の実力」を引き出します。
              </p>
              <p className="text-lg text-foreground mb-10 leading-relaxed">
                <strong className="text-primary">私が直接、あなたと並走することを約束します。</strong>
              </p>
              <div className="border-l-4 border-accent pl-6">
                <p className="text-xl font-bold text-secondary font-serif">
                  佐藤 〇〇
                </p>
                <p className="text-base text-muted-foreground mt-1">佐藤塾 塾長</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="navy" />

      {/* Contact Form Section */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif tracking-tight">
              まずは1分で無料相談
            </h3>
            <p className="text-lg text-muted-foreground">
              合格への第一歩をここから始めましょう
            </p>
          </div>

          <Card className="border-2 border-primary/30 shadow-xl">
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

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-base font-semibold shadow-lg">
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
      <footer className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-3 font-serif">佐藤塾</h3>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            慶應義塾大学 SFC（総合政策学部・環境情報学部）受験対策専門塾
          </p>
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/60">
              &copy; 2026 佐藤塾. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
