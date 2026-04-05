'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { useState } from 'react'
import { Check, MessageCircle, PenTool } from 'lucide-react'

export default function Page() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">佐藤塾</h1>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">無料相談</Button>
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
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6" style={{ fontFamily: 'serif' }}>
            慶應SFC合格への<br />最短距離
          </h2>
          <p className="text-xl md:text-2xl text-foreground mb-8 font-medium">
            3人に2人が合格する、<span className="text-secondary font-bold">独自のAI伴走ロジック</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              無料相談に申し込む
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary">
              詳しく見る
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center bg-white/80 backdrop-blur rounded-lg p-6">
            <div>
              <p className="text-3xl font-bold text-primary" style={{ fontFamily: 'serif' }}>66%</p>
              <p className="text-sm text-foreground">2026年合格率</p>
            </div>
            <div className="border-l border-r border-border">
              <p className="text-3xl font-bold text-primary" style={{ fontFamily: 'serif' }}>9名</p>
              <p className="text-sm text-foreground">2026年合格者</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary" style={{ fontFamily: 'serif' }}>49名</p>
              <p className="text-sm text-foreground">7年累計合格者</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-white/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-primary" style={{ fontFamily: 'serif' }}>
            SFC合格を阻む「壁」
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-secondary bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  学校の先生でも指導困難
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  SFCの小論文は独特な評価基準。学校の一般的な指導方法では対応できない複雑さがあります。
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  答えがない出題
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  「正解」が存在しない論述問題。どう対策すればいいのか、多くの受験生が絶望感を感じています。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section: Two AIs */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 text-primary" style={{ fontFamily: 'serif' }}>
            佐藤塾の解答：2つの知能
          </h3>
          <p className="text-center text-foreground mb-16">
            添削AIと相談AIが、あなたの合格を全方位からサポート
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI 1: Essay Editing */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <PenTool className="text-primary" />
                  添削AI「論理の研磨」
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border-2 border-primary/20 rounded p-4 mb-4">
                  <p className="text-xs text-muted-foreground mb-2">原稿用紙イメージ</p>
                  <div className="bg-yellow-50 p-3 rounded text-sm font-mono">
                    <div className="line-through text-red-500">問題な部分がここにあります</div>
                    <div className="text-red-500 text-xs">→ より論理的に構成してください</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                    <span>小論文の論理構成を瞬時に添削</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                    <span>24時間無制限に利用可能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                    <span>SFC特化の指導ロジック</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI 2: Consultation */}
            <Card className="border-2 border-secondary bg-gradient-to-br from-secondary/5 to-transparent overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-secondary">
                  <MessageCircle className="text-secondary" />
                  相談AI「戦略の並走」
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border-2 border-secondary/20 rounded p-4 mb-4">
                  <p className="text-xs text-muted-foreground mb-2">対話チャット</p>
                  <div className="space-y-2 text-xs">
                    <div className="bg-blue-50 p-2 rounded">
                      <strong>あなた:</strong> 小論文の選題で悩んでいます
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <strong>AI:</strong> その選題の背景を深掘りすることで...
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>受験全般の疑問に即答</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>メンタルサポート充実</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>24時間対応</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-white/20 to-background">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-primary" style={{ fontFamily: 'serif' }}>
            なぜ佐藤塾が選ばれるのか
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left font-bold">項目</th>
                  <th className="p-4 text-center font-bold bg-secondary">佐藤塾</th>
                  <th className="p-4 text-center font-bold">一般的な予備校</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold">小論文添削</td>
                  <td className="p-4 text-center bg-secondary/10">
                    <Badge className="bg-secondary text-white">24時間無制限</Badge>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">週1回程度</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold">対策範囲</td>
                  <td className="p-4 text-center bg-secondary/10">
                    <Badge className="bg-secondary text-white">AO・一般 二刀流</Badge>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">別途高額オプション</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold">費用</td>
                  <td className="p-4 text-center bg-secondary/10">
                    <Badge className="bg-secondary text-white">13.8万円・追加なし</Badge>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">30万円〜（別途費用あり）</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">指導体制</td>
                  <td className="p-4 text-center bg-secondary/10">
                    <Badge className="bg-secondary text-white">塾長が直接伴走</Badge>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">学生チューター中心</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-primary" style={{ fontFamily: 'serif' }}>
            二刀流相乗効果とエコシステム
          </h3>

          <div className="bg-white border-2 border-primary rounded-lg p-8">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg" style={{ fontFamily: 'serif' }}>
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg">計画</h4>
                  <p className="text-muted-foreground">AO・一般の受験戦略を統合的に立案</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg" style={{ fontFamily: 'serif' }}>
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg">AI支援</h4>
                  <p className="text-muted-foreground">添削AI・相談AIで日々の施策をサポート</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg" style={{ fontFamily: 'serif' }}>
                  3
                </div>
                <div>
                  <h4 className="font-bold text-lg">レポート</h4>
                  <p className="text-muted-foreground">進捗と課題を可視化したレポート提供</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg" style={{ fontFamily: 'serif' }}>
                  4
                </div>
                <div>
                  <h4 className="font-bold text-lg">塾長1on1</h4>
                  <p className="text-muted-foreground">月1回の個別面談で戦略を調整</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Reasons Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-white/20 to-background">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-primary" style={{ fontFamily: 'serif' }}>
            佐藤塾が選ばれる6つの理由
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'AO・一般二刀流対応', desc: 'どちらの受験方式でも、あるいは両方での受験でも完全サポート' },
              { num: '02', title: 'AI添削無制限', desc: '24時間いつでも、何度でも小論文を添削。時間制限なし' },
              { num: '03', title: '通塾ゼロ', desc: 'すべてオンライン。通塾時間を勉強に充てられる' },
              { num: '04', title: 'SFC特化ロジック', desc: '7年間の指導実績に基づく、SFC合格に必要な全てを網羅' },
              { num: '05', title: 'メンタルサポート充実', desc: '相談AIと塾長が受験のあらゆる不安に対応' },
              { num: '06', title: '返金保証制度', desc: 'AO合格で受講料の50%を返金。安心の仕組み' },
            ].map((item) => (
              <Card key={item.num} className="border-2 border-primary/20 hover:border-primary/50 transition">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-secondary" style={{ fontFamily: 'serif' }}>
                      {item.num}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 text-primary" style={{ fontFamily: 'serif' }}>
            料金プラン
          </h3>
          <p className="text-center text-foreground mb-16 text-lg">
            衝撃の合格支援制度
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Plan */}
            <Card className="border-4 border-secondary shadow-xl transform md:scale-105">
              <div className="bg-secondary text-white px-6 py-4">
                <Badge className="bg-white text-secondary mb-3 inline-block">推奨プラン</Badge>
                <h4 className="text-2xl font-bold">AO・一般 完全攻略<br />二刀流プラン</h4>
              </div>
              <CardContent className="pt-8">
                <div className="mb-6">
                  <p className="text-muted-foreground text-sm mb-2">受講料</p>
                  <p className="text-5xl font-bold text-primary" style={{ fontFamily: 'serif' }}>
                    138,000<span className="text-xl">円</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">（税込）</p>
                </div>

                <div className="bg-secondary/10 rounded p-4 mb-6">
                  <p className="text-sm font-semibold text-secondary mb-2">返金特典</p>
                  <p className="text-lg font-bold text-secondary">
                    AO入試合格時、残金の50%を返金
                  </p>
                </div>

                <p className="text-sm text-foreground mb-6">
                  最短合格を目指す。早く受かれば、負担も半分に。
                </p>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>AI添削 24時間無制限</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>相談AI 24時間対応</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>塾長個別面談 月1回</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>追加費用なし</span>
                  </li>
                </ul>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-base">
                  このプランに申し込む
                </Button>
              </CardContent>
            </Card>

            {/* Secondary Plan */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-primary/5">
                <h4 className="text-xl font-bold text-primary">小論文特化プラン</h4>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="mb-6">
                  <p className="text-muted-foreground text-sm mb-2">受講料</p>
                  <p className="text-5xl font-bold text-primary" style={{ fontFamily: 'serif' }}>
                    98,000<span className="text-xl">円</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">（税込）</p>
                </div>

                <p className="text-sm text-foreground mb-6">
                  小論文に特化した集中支援プラン
                </p>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI添削 24時間無制限</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>相談AI（限定利用）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>塾長個別面談 月1回</span>
                  </li>
                </ul>

                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white h-12 text-base">
                  詳しく見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructor Message Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/jukucho.jpg"
                alt="塾長"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40">
                <Image
                  src="/signature.png"
                  alt="塾長サイン"
                  width={150}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'serif' }}>
                塾長からのメッセージ
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                SFCの小論文は「正解を書く試験」ではなく、「あなたの思考を表現する試験」です。
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                7年間で49名の合格者を輩出した経験と、最新のAI技術を組み合わせ、あなたの「本当の実力」を引き出します。
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                <strong>私が直接、あなたと並走することを約束します。</strong>
              </p>
              <p className="text-lg font-bold text-secondary">
                佐藤 〇〇<br />
                <span className="text-base font-normal text-muted-foreground">佐藤塾 塾長</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'serif' }}>
              まずは1分で無料相談
            </h3>
            <p className="text-lg text-foreground">
              合格への第一歩をここから始めましょう
            </p>
          </div>

          <Card className="border-2 border-primary shadow-lg">
            <CardContent className="pt-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    お名前 <span className="text-secondary">*</span>
                  </label>
                  <Input placeholder="山田太郎" className="border-primary/30" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    メールアドレス <span className="text-secondary">*</span>
                  </label>
                  <Input 
                    type="email" 
                    placeholder="example@email.com" 
                    className="border-primary/30"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    電話番号 <span className="text-secondary">*</span>
                  </label>
                  <Input placeholder="09012345678" className="border-primary/30" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    ご質問・ご相談
                  </label>
                  <Textarea 
                    placeholder="佐藤塾について気になることなどをお聞きします" 
                    className="border-primary/30 min-h-32"
                  />
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-base font-semibold">
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
      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">佐藤塾</h3>
          <p className="text-white/80 mb-6">
            慶應義塾大学 SFC（総合政策学部・環境情報学部）受験対策専門塾
          </p>
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-white/60">
              © 2026 佐藤塾. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
