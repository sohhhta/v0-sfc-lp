'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check, ArrowRight, PenTool } from 'lucide-react'

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
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

export default function EssayGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#002147] to-[#003d6b]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A059] border border-[#C5A059]/50 px-5 py-2 rounded-full mb-8 uppercase">
            ESSAY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-6 font-serif tracking-[0.08em]" style={{ wordBreak: 'keep-all' }}>
            SFC小論文攻略メソッド
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
            慶應SFC合格に必要な「問題発見・解決能力」を測る小論文試験。その全容と対策の大枠を解説しています。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-16 md:py-20">

        {/* SFC小論文とは */}
        <section className="mb-20">
          <SectionTitle>SFC小論文とは</SectionTitle>
          <div className="bg-white border-l-4 border-[#002147] px-6 md:px-10 py-8 rounded-lg shadow-lg mb-8">
            <p className="text-base md:text-lg text-[#333333] leading-relaxed font-medium">
              SFCの小論文は、文章力ではなく<span className="text-[#800000] font-bold">「問題発見・解決能力」を測る試験</span>です。平均でも10枚以上の膨大な資料を読み解き、現代社会の複雑な課題に対し、あなた独自の具体的な解決策を提示することが求められます。
            </p>
          </div>
        </section>

        {/* SFC小論文の3つの特徴 */}
        <section className="mb-20">
          <SectionTitle>SFC小論文の3つの特徴</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#002147]/30 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-[#002147] font-serif mb-4">圧倒的な資料量</h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                学部によっては20ページ近い資料が出されることもあり、<span className="text-[#800000] font-bold">速読力と情報の取捨選択が必須</span>。限られた試験時間で、どの資料が最も重要かを見抜く判断力が問われます。
              </p>
            </div>

            <div className="bg-white border-2 border-[#800000]/30 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-[#800000] font-serif mb-4">配点の高さ</h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                英語や数学と同じ<span className="text-[#800000] font-bold">200点満点</span>。小論文での逆転合格が最も起きやすいのがSFC。一教科の比重が極めて大きいからこそ、集中的な対策が効果的です。
              </p>
            </div>

            <div className="bg-white border-2 border-[#C5A059]/30 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-[#C5A059] font-serif mb-4">「問い」を立てる力</h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                与えられた課題に答えるだけでなく、<span className="text-[#800000] font-bold">「何が真の問題なのか」を自ら定義する力</span>が最も評価されます。これがSFCで最も求められる思考力です。
              </p>
            </div>
          </div>
        </section>

        {/* 効果的な学習法 */}
        <section className="mb-20">
          <SectionTitle>効果的な学習法</SectionTitle>
          <div className="space-y-6">
            <div className="bg-[#F8F9FA] border-l-4 border-[#002147] pl-6 py-6 rounded-r-lg">
              <h4 className="text-lg font-bold text-[#002147] font-serif mb-3">小論文の基礎を固める</h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                まずは、ロジカルシンキングとロジカルライティングの基礎を固めます。その他にも接続詞や体系的記述なども学びます。<span className="font-bold">この過程を踏めるかどうかが合格に一番影響します</span>。
              </p>
            </div>

            <div className="bg-[#F8F9FA] border-l-4 border-[#800000] pl-6 py-6 rounded-r-lg">
              <h4 className="text-lg font-bold text-[#800000] font-serif mb-3">とにかく量をこなす</h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                次に様々な問題に対して、自分の思考を言語化しフィードバックをもらうという工程をとにかく踏みましょう。佐藤塾ではAIによる即時フィードバックで<span className="font-bold">圧倒的な量の担保を実現します</span>。この反復サイクルが、最も効率的な学習方法です。
              </p>
            </div>

            <div className="bg-[#F8F9FA] border-l-4 border-[#C5A059] pl-6 py-6 rounded-r-lg">
              <h4 className="text-lg font-bold text-[#C5A059] font-serif mb-3">過去問の「型」を覚える</h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                総合政策と環境情報の出題傾向の違いを理解し、何度も反復練習する。<span className="font-bold">1年度の問題に対しても複数の回答を作成し、SFCの過去問を徹底的に叩き込みましょう</span>。全く異なる年度の問題も特定のパターンに落とし込めます。
              </p>
            </div>

            <div className="bg-[#F8F9FA] border-l-4 border-[#002147] pl-6 py-6 rounded-r-lg">
              <h4 className="text-lg font-bold text-[#002147] font-serif mb-3">同じ人に長期的に指導してもらう</h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                長期的に指導してもらうことで、過去の内容も踏まえ自分では気づけない「独自の視点」を磨き上げます。<span className="font-bold">佐藤塾ではAIの添削だけでなく、人間にしかできない指導を塾長自ら行うことで、AIと人間を組み合わせた指導を実現しています。</span>
              </p>
            </div>
          </div>
        </section>

        {/* 書き方のポイント */}
        <section className="mb-20">
          <SectionTitle>書き方のポイント</SectionTitle>
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#002147] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-[#002147] font-serif mb-3">設問の意図を正確に捉える</h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                出題者が何を求めているか、資料のどこにヒントがあるかを最初に見抜く。この第一段階が不正確だと、その後の論述がいくら素晴らしくても合格点に達しません。
              </p>
            </div>

            <div className="bg-white border-2 border-[#C5A059] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-[#C5A059] font-serif mb-3">小論文として成立する文を書く</h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                ロジカルにライティングすることは小論文にとって最重要です。どれだけ面白い内容や独自性が高い内容を書いても論理的に書かれていないと高得点は取れません。
              </p>
            </div>

            <div className="bg-white border-2 border-[#800000] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-[#800000] font-serif mb-3">独自性と実現可能性</h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                単なる理想論や一般論ではなく、技術的・社会的に実行可能かつ独自性がある解決策を提示するようにしましょう。SFCが求めているのは、現実を見据えた実践的かつ個性的な思考力です。
              </p>
            </div>
          </div>
        </section>

        {/* 【位置調整】個別記事（ロジカルライティング）への案内カードを、下部CTAのすぐ上に移動しました */}
        <section className="mt-24 mb-10">
          <div className="bg-[#800000]/5 border-2 border-[#800000]/20 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center flex-shrink-0">
                <PenTool size={22} />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#800000] tracking-wider uppercase block mb-1">RECOMMENDED ARTICLE</span>
                <h4 className="text-lg md:text-xl font-bold text-[#002147] font-serif">
                  【実践編】合格点に届かない理由とロジカルライティング
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  採点官に評価される文章の書き方をステップバイステップで詳しく解説。
                </p>
              </div>
            </div>
            <Link href="/guide/logic-writing" className="w-full md:w-auto">
              <Button className="bg-[#800000] hover:bg-[#600000] text-white font-bold w-full md:w-auto px-6 py-4 flex items-center justify-center gap-2 whitespace-nowrap">
                この記事を読む <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </section>

      </main>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-[#800000] to-[#600000]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">
            小論文対策で迷ったら、まずは無料相談
          </h2>
          <p className="text-base text-white/80 mb-8 leading-relaxed">
            あなたの現在地を診断し、SFC合格までの道筋を塾長が直接ご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact-form">
              <Button className="bg-[#C5A059] hover:bg-[#9d8a42] text-[#002147] font-bold px-10 py-6 h-auto w-full sm:w-auto">
                無料で塾長に相談する
              </Button>
            </Link>
            <Link href="/course">
              <Button className="border-2 border-[#C5A059] text-[#C5A059] bg-transparent hover:bg-[#C5A059] hover:text-[#002147] font-bold px-10 py-6 h-auto transition-all duration-300 w-full sm:w-auto">
                コース詳細を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}