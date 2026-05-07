'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

// Section title component (consistent with main LP)
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em]">
        {children}
      </h2>
      {subtitle && (
        <p className="text-[#666666] mt-4 text-lg">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
    </div>
  )
}

export default function ResultsPage() {
  // Placeholder data for results
  const yearlyResults = [
    { year: '2025年度', total: 'XX名', sfc: 'XX名', ao: 'XX名', general: 'XX名' },
    { year: '2024年度', total: 'XX名', sfc: 'XX名', ao: 'XX名', general: 'XX名' },
    { year: '2023年度', total: 'XX名', sfc: 'XX名', ao: 'XX名', general: 'XX名' },
    { year: '2022年度', total: 'XX名', sfc: 'XX名', ao: 'XX名', general: 'XX名' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#002147] font-serif tracking-[0.1em]">佐藤塾</Link>
          <Link href="/#contact-form">
            <Button variant="outline" className="border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white font-medium">無料相談を申し込む</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#002147] to-[#003d6b]">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-[#C5A059] text-[#002147] text-sm font-bold mb-6">ACHIEVEMENTS</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-wide mb-6">
            合格実績
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            佐藤塾から巣立った合格者たちの実績をご紹介します
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-2 border-[#002147]/10 rounded-xl">
              <p className="text-sm text-[#666666] mb-2">累計合格者数</p>
              <p className="text-4xl font-bold text-[#002147]">XXX<span className="text-lg">名</span></p>
            </Card>
            <Card className="text-center p-6 border-2 border-[#800000]/10 rounded-xl">
              <p className="text-sm text-[#666666] mb-2">SFC合格率</p>
              <p className="text-4xl font-bold text-[#800000]">XX<span className="text-lg">%</span></p>
            </Card>
            <Card className="text-center p-6 border-2 border-[#002147]/10 rounded-xl">
              <p className="text-sm text-[#666666] mb-2">AO入試合格者</p>
              <p className="text-4xl font-bold text-[#002147]">XX<span className="text-lg">名</span></p>
            </Card>
            <Card className="text-center p-6 border-2 border-[#002147]/10 rounded-xl">
              <p className="text-sm text-[#666666] mb-2">一般入試合格者</p>
              <p className="text-4xl font-bold text-[#002147]">XX<span className="text-lg">名</span></p>
            </Card>
          </div>
        </div>
      </section>

      {/* Yearly Results */}
      <section className="py-28 px-4 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Yearly Results">
            年度別合格実績
          </SectionTitle>

          <div className="space-y-6">
            {yearlyResults.map((result) => (
              <Card key={result.year} className="bg-white rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-[#002147] text-white p-6 md:w-48 flex items-center justify-center">
                      <span className="text-xl font-bold font-serif">{result.year}</span>
                    </div>
                    <div className="flex-1 p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <p className="text-xs text-[#666666] mb-1">合格者総数</p>
                        <p className="text-2xl font-bold text-[#002147]">{result.total}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#666666] mb-1">SFC合格</p>
                        <p className="text-2xl font-bold text-[#800000]">{result.sfc}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#666666] mb-1">AO入試</p>
                        <p className="text-2xl font-bold text-[#002147]">{result.ao}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#666666] mb-1">一般入試</p>
                        <p className="text-2xl font-bold text-[#002147]">{result.general}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University List */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="University List">
            合格大学一覧
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-2 border-[#800000]/20 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#002147] font-serif mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#800000] rounded-full" />
                  慶應義塾大学
                </h3>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#800000]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    総合政策学部（XX名）
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#800000]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    環境情報学部（XX名）
                  </li>
                  <li className="flex items-center gap-2 text-[#666666] text-sm">
                    【プレースホルダー】その他の学部を追加
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-[#002147]/20 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#002147] font-serif mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#002147] rounded-full" />
                  その他の大学
                </h3>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#002147]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    【プレースホルダー】大学名（XX名）
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#002147]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    【プレースホルダー】大学名（XX名）
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#002147]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    【プレースホルダー】大学名（XX名）
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-28 px-4 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Success Stories">
            合格者の声
          </SectionTitle>

          <div className="space-y-6">
            <Card className="bg-white rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#002147] to-[#003d6b] px-6 py-4">
                <Badge className="bg-[#C5A059] text-[#002147] text-xs font-bold">AO入試合格</Badge>
                <p className="text-white font-bold text-lg mt-2">【プレースホルダー】学部名 Aさん</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-[#333333] leading-relaxed">
                  【プレースホルダー】合格者の体験談を入力してください。どのような経緯で佐藤塾を選び、どのような学習を経て合格に至ったのかを記載します。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#002147] to-[#003d6b] px-6 py-4">
                <Badge className="bg-[#C5A059] text-[#002147] text-xs font-bold">一般入試合格</Badge>
                <p className="text-white font-bold text-lg mt-2">【プレースホルダー】学部名 Bさん</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-[#333333] leading-relaxed">
                  【プレースホルダー】合格者の体験談を入力してください。小論文対策を通じてどのように実力を伸ばしたのかを記載します。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#002147] to-[#003d6b] px-6 py-4">
                <Badge className="bg-[#C5A059] text-[#002147] text-xs font-bold">保護者様</Badge>
                <p className="text-white font-bold text-lg mt-2">【プレースホルダー】C様</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-[#333333] leading-relaxed">
                  【プレースホルダー】保護者様の声を入力してください。お子様の成長や塾のサポートについての感想を記載します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#800000] to-[#600000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
            次の合格者はあなたです
          </h2>
          <p className="text-white/80 text-lg mb-8">
            まずは無料相談であなたの目標をお聞かせください
          </p>
          <Link href="/#contact-form">
            <Button size="lg" className="bg-white text-[#800000] hover:bg-[#C5A059] hover:text-white font-bold px-12 py-6 h-auto text-lg">
              無料で個別相談を予約する
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-bold font-serif tracking-[0.1em] mb-4">佐藤塾</h2>
          <p className="text-white/60 text-sm mb-6">慶應SFC専門 AI伴走型オンライン塾</p>
          <div className="flex justify-center gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">トップページ</Link>
            <Link href="/course" className="hover:text-white transition-colors">コース・料金</Link>
            <Link href="/results" className="hover:text-white transition-colors">合格実績</Link>
            <Link href="/guide/essay" className="hover:text-white transition-colors">小論文対策</Link>
          </div>
          <p className="text-white/40 text-xs mt-8">© 2025 佐藤塾 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
