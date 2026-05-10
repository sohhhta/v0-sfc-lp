'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  ChevronRight, 
  PenTool, 
  BarChart, 
  BookOpen, 
  Clock, 
  CheckCircle2 
} from 'lucide-react'

// 佐藤塾共通の装飾付きセクションタイトル（他ページと統一）
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-10 mt-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif tracking-wider">
        {children}
      </h2>
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
    </div>
  )
}

export default function LogicWritingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      {/* --- ナビゲーション（app/page.tsx を完全踏襲） --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-[#002147] font-serif">佐藤塾</span>
              <span className="text-[10px] text-[#002147] tracking-[0.2em] font-medium">慶應SFC合格への最短距離</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium hover:text-[#C5A059] transition-colors">ホーム</Link>
              <Link href="/course" className="text-sm font-medium hover:text-[#C5A059] transition-colors">コース・料金</Link>
              <Link href="/results" className="text-sm font-medium hover:text-[#C5A059] transition-colors">合格実績</Link>
              <Link href="/#contact-form">
                <Button className="bg-[#002147] hover:bg-[#003366] text-white rounded-none px-6">
                  無料相談・体験授業
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#002147]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4">
            <Link href="/" className="block text-base font-medium" onClick={() => setIsMenuOpen(false)}>ホーム</Link>
            <Link href="/course" className="block text-base font-medium" onClick={() => setIsMenuOpen(false)}>コース・料金</Link>
            <Link href="/results" className="block text-base font-medium" onClick={() => setIsMenuOpen(false)}>合格実績</Link>
            <Link href="/#contact-form" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#002147] text-white rounded-none">無料相談・体験授業</Button>
            </Link>
          </div>
        )}
      </nav>

      {/* --- メインコンテンツ --- */}
      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          {/* 記事ヘッダー */}
          <header className="mb-12 text-center">
            <div className="inline-block px-4 py-1 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold tracking-widest mb-6 rounded-full">
              SFC小論文 対策ガイド
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002147] leading-[1.3] mb-8 font-serif">
              慶應SFCの小論文で<br className="hidden md:block" />「合格点」に届かない理由とは？
            </h1>
            <div className="flex items-center justify-center text-gray-500 text-sm space-x-6 border-y border-gray-100 py-4">
              <span className="flex items-center"><Clock size={16} className="mr-1.5 text-[#800000]" /> 読了目安：5分</span>
              <span className="font-bold text-[#002147]">監修：佐藤塾 塾長 佐藤颯太</span>
            </div>
          </header>

          {/* 記事本文 */}
          <div className="prose prose-slate max-w-none leading-[1.9] text-gray-700">
            <div className="bg-[#f8f9fa] p-8 rounded-2xl border-l-4 border-[#C5A059] mb-12 italic text-lg shadow-sm">
              「SFCの小論文は、特別な才能がないと合格点をもらえないのではないか？」<br />
              「独創的なアイデアなんて、自分には思いつかない……」
            </div>
            
            <p className="mb-8">
              受験生や保護者の方から、このような不安の声をよくいただきます。しかし、数多くの逆転合格者の答案を分析してきた結果、一つの明快な事実が見えてきました。
            </p>

            <div className="bg-[#002147] text-white p-8 rounded-xl my-10 shadow-lg">
              <p className="font-bold text-lg mb-0 leading-relaxed">
                慶應SFCの小論文で点数が伸び悩む最大の原因は、内容の「面白さ」以前に、大学側が求めている「学問のルール」に沿った書き方（ロジカルライティング）ができていないことにあります。
              </p>
            </div>

            <SectionTitle>1. なぜ、あなたの小論文は「評価の対象」にならないのか？</SectionTitle>
            <p>
              多くの受験生が「何かすごいことを書かなければ」と焦るあまり、問いかけ（設問）を置き去りにして、自分の言いたいことだけを書いてしまいます。
            </p>
            <p>
              SFCの採点官が見ているのは、あなたの「感性」だけではありません。「出題者の意図を正確に読み取り、筋道を立てて、客観的に自分の考えを組み立てられているか」という、<span className="font-bold text-[#002147] border-b-2 border-[#C5A059]/30">大学で学ぶために必要な「考える手順」</span>が身についているかを確認しています。
            </p>
            <p>
              接続詞の使い方が不自然だったり、話が急に飛躍したりする文章は、どんなに良いアイデアが含まれていても、合格点には届きません。まずは「相手に伝わる書き方の基本」を整えること。これが、実は合格への一番の近道なのです。
            </p>

            <SectionTitle>2. 「練習の量」が、本番の揺るぎない自信に変わる</SectionTitle>
            <p>
              この「筋道を立てて書く力」は、スポーツと同じで、頭で理解するだけでは身につきません。何度も書いて、そのたびに客観的な指摘を受け、修正する。この繰り返しによって、初めて自分の技術になります。
            </p>
            <p>
              ここで多くの受験生が直面するのが、<strong>「添削の回数が足りない」</strong>という壁です。
              従来の指導では、先生一人が見られる数に限りがあったり、指導者の「好みの書き方」に偏ってしまったりする課題がありました。
            </p>
            <p>
              この課題を克服するために、私たちが辿り着いたのが、客観的な視点を持つAIと経験豊富な講師によるダブルチェックです。一人の講師の感覚だけに頼らず、納得いくまで何度も繰り返す。この圧倒的な演習量こそが、本番での迷いを消し去ります。
            </p>

            <SectionTitle>3. 長期の準備期間が「逆転合格」を現実にする理由</SectionTitle>
            <p>
              「直前の対策だけで何とかしたい」というお気持ちもよく分かります。しかし、長年染み付いた「書き方のクセ」を直し、新しい思考の基礎を作るには、やはり一定の時間が必要です。
            </p>
            <p>
              いきなり過去問という難しい課題に挑んで自信を失うのではなく、まずは「論理的に考え、書く」という土台から一歩ずつ積み上げる。
              このプロセスを数ヶ月かけて丁寧に踏むことで、今の偏差値がどうあっても、本番で「慶應SFCが求めているレベル」に到達する力が備わります。
            </p>

            <SectionTitle>4. SFC対策で磨いた力は、一生モノの財産になる</SectionTitle>
            <p>
              SFCの小論文対策は、非常に特殊だと思われがちです。しかし、ここで身につける「論理的に考える力」は、他大学の入試はもちろん、大学入学後のレポート作成、さらには社会に出てからの資料作成でも、最強の武器になります。
            </p>
            <p>
              事実、SFCを志してこの力を磨いた受験生たちは、<strong>青山学院、法政、立教、中央</strong>といった難関大学にも併願して合格を勝ち取っています。SFCのために学んだことは、決して無駄にならず、どこでも通用する「一生モノの知力」になるのです。
            </p>

            {/* コンタクトエリア */}
            <div className="mt-20 p-10 bg-[#f4f1e0] rounded-2xl border border-[#C5A059]/30 text-center shadow-inner">
              <h3 className="text-2xl font-bold text-[#002147] mb-6 font-serif">合格を願うすべての受験生へ</h3>
              <p className="mb-8 text-gray-600 leading-relaxed max-w-2xl mx-auto">
                合格点に届かないことを、過度に恐れる必要はありません。
                正しいルールを知り、十分な練習を積みさえすれば、SFCの門は必ず開きます。
              </p>
              <p className="mb-10 text-gray-600 leading-relaxed max-w-2xl mx-auto">
                もし、今の自分の書き方に不安があるなら、一度客観的なフィードバックを受けてみることをお勧めします。自分の弱点を知ることは、合格に向けた最も大きな一歩になるはずです。
              </p>
              <Link href="/#contact-form">
                <Button className="bg-[#800000] hover:bg-[#600000] text-white font-bold py-7 px-10 text-lg rounded-none shadow-xl transition-transform hover:scale-105">
                  まずは無料相談・体験授業から
                  <ChevronRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* --- フッター（app/page.tsx を完全踏襲） --- */}
      <footer className="bg-[#002147] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-serif mb-2 tracking-wider">佐藤塾</h3>
              <p className="text-gray-400 text-sm tracking-widest uppercase">Keio SFC Prep School</p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline">ホーム</Link>
              <Link href="/course" className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline">コース・料金</Link>
              <Link href="/results" className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline">合格実績</Link>
              <Link href="/#contact-form" className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline">お問い合わせ</Link>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; 2026 佐藤塾. All rights reserved.</p>
            <p>慶應義塾大学SFC（総合政策学部・環境情報学部）受験対策専門</p>
          </div>
        </div>
      </footer>
    </div>
  )
}