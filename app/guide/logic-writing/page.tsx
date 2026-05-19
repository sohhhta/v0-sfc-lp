'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronRight, Clock, List } from 'lucide-react'

// 装飾付き見出しコンポーネント（既存マスタのid受け渡しロジックを完全復元）
function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div className="text-center mb-10 mt-20" id={id}>
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-12 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-12 bg-[#002147]" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif tracking-wider">
        {children}
      </h2>
    </div>
  )
}

export default function LogicWritingPage() {
  // 実践ガイドとしてのE-E-A-T評価を最大化させるArticleスキーマ
  const logicJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "慶應SFCの小論文で「合格点」に届かない理由とは？ | 佐藤塾",
    "description": "多くの受験生が陥る『設問の置き去り』を解決する。設問の正確な把握、論理的な構成、体系的な解答からなるロジカルライティングの手順を解説。",
    "image": "https://lifeeling.jp/hero.jpg",
    "author": {
      "@type": "Person",
      "name": "佐藤颯太"
    },
    "publisher": {
      "@type": "Organization",
      "name": "佐藤塾"
    },
    "mainEntityOfPage": "https://lifeeling.jp/guide/logic-writing"
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(logicJsonLd) }}
      />
      
      <main className="pt-32 md:pt-40 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          {/* ヘッダー */}
          <header className="mb-12 text-center">
            <div className="inline-block px-4 py-1 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold tracking-widest mb-6 rounded-full">
              SFC小論文 対策ガイド
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#002147] leading-[1.3] mb-8 font-serif">
              慶應SFCの小論文で<br className="hidden md:block" />「合格点」に届かない理由とは？
            </h1>
            <div className="flex items-center justify-center text-gray-500 text-sm space-x-6 border-y border-gray-100 py-4">
              <span className="flex items-center"><Clock size={16} className="mr-1.5 text-[#800000]" /> 5分で読めます</span>
              <span className="font-bold text-[#002147]">監修：佐藤颯太</span>
            </div>
          </header>

          {/* 目次 (ToC) */}
          <div className="bg-[#F8F9FA] p-8 rounded-2xl mb-16 border border-gray-100">
            <h3 className="text-lg font-bold text-[#002147] mb-4 flex items-center">
              <List size={20} className="mr-2 text-[#C5A059]" /> この記事のポイント
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#002147]">
              <li><a href="#sec1" className="hover:text-[#C5A059] flex items-center">・「評価の対象」にならない原因とは？</a></li>
              <li><a href="#sec2" className="hover:text-[#C5A059] flex items-center">・圧倒的練習量を支えるAI添削の役割</a></li>
              <li><a href="#sec3" className="hover:text-[#C5A059] flex items-center">・逆転合格に必要な「準備期間」の真実</a></li>
              <li><a href="#sec4" className="hover:text-[#C5A059] flex items-center">・SFC対策が他大学合格に繋がる理由</a></li>
            </ul>
          </div>

          <div className="prose prose-slate max-w-none leading-[1.9] text-gray-700">
            <p className="text-lg mb-8 italic border-l-4 border-[#C5A059] pl-6 py-2 text-slate-600 bg-slate-50">
              「SFCの小論文は、特別な才能がないと合格点をもらえないのではないか？」<br />
              「独創的なアイデアなんて、自分には思いつかない……」
            </p>
            <p className="mb-12">
              毎年、多くの受験生からこのような相談を受けます。しかし、断言します。SFCの小論文に<strong>奇抜なひらめきや天性のセンスは不要</strong>です。合格点に届かない最大の理由は、才能の不足ではなく、採点官に評価される「書き方のルール」を知らないことにあります。
            </p>

            <SectionTitle id="sec1">1. なぜ、あなたの小論文は「評価の対象」にならないのか？</SectionTitle>
            <p>
              多くの受験生が「何かすごいことを書かなければ」と焦るあまり、問いかけ（設問）を置き去りにしてしまいます。
              SFCの採点官が見ているのは、あなたの「感性」以上に、<strong>大学で学ぶために必要な「考える手順」</strong>が身についているかです。
            </p>
            <p className="mb-6">
              どれほど独自性の高いアイデアであっても、設問の要求からズレていたり、論理の飛躍があったりする文章は、採点基準にすら乗りません。まずは「相手の問いに正確に、過不足なく答える」という、ロジカルライティングの徹底的な反復が必要です。
            </p>

            {/* 図解エリア */}
            <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
                <div className="w-10 h-10 bg-[#002147] text-white flex items-center justify-center rounded-full mx-auto mb-4 font-bold">1</div>
                <p className="font-bold text-sm">設問の正確な把握</p>
                <p className="text-xs text-gray-500 mt-2">求められている問いに<br />真っ直ぐ答える</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
                <div className="w-10 h-10 bg-[#002147] text-white flex items-center justify-center rounded-full mx-auto mb-4 font-bold">2</div>
                <p className="font-bold text-sm">論理的な構成</p>
                <p className="text-xs text-gray-500 mt-2">接続詞を正しく使い<br />筋道を通す</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
                <div className="w-10 h-10 bg-[#002147] text-white flex items-center justify-center rounded-full mx-auto mb-4 font-bold">3</div>
                <p className="font-bold text-sm">体系的な解答</p>
                <p className="text-xs text-gray-500 mt-2">自分の考えを<br />客観的に組み立てる</p>
              </div>
            </div>

            <SectionTitle id="sec2">2. 「練習の量」が、本番の揺るぎない自信に変わる</SectionTitle>
            <p>
              論理的な書き方は、頭で理解するだけでは身につきません。佐藤塾がAI添削を導入したのは、従来の指導では難しかった<strong>「圧倒的な演習量」</strong>を、塾長とAIのダブルチェックで実現するためです。
            </p>
            <p className="mb-6">
              週に1回、数日待って添削を受け取るだけのスピード感では、SFCの複雑な過去問に対応する修正力は育ちません。書いたその場でAIが構造的な不備を指摘し、何度も書き直す。この高速な試行錯誤を繰り返すことで、本番のプレッシャー下でもブレない論理的思考力が脳に定着します。
            </p>
            {/* まとめポイントボックス */}
            <div className="bg-[#800000]/5 border-l-4 border-[#800000] p-6 my-8 rounded-r-xl text-sm">
              <p className="font-bold text-[#800000] mb-1">💡 ポイント</p>
              「昨日よりも、3ヶ月前よりも、自分の文章が分かりやすくなっている」という成長実感こそが、逆転合格のガソリンになります。
            </div>

            <SectionTitle id="sec3">3. 逆転合格に必要な「準備期間」の真実</SectionTitle>
            <p>
              「小論文の対策は秋からで間に合う」という予備校の言葉を真に受けてはいけません。SFCの200点という配点は、他大学とは比較にならないほど重く、求められる教養（社会問題、データサイエンス、デザイン思考など）の範囲も広大です。
            </p>
            <p className="mb-12">
              理想的なスタートは春（4月〜6月）。この時期にAIを使い倒して「論理の型」と「基礎知識」を脳に叩き込んでおくからこそ、夏以降に塾長との1on1面談で、誰にも真似できない「独自性の磨き上げ」に全リソースを集中させることが可能になります。
            </p>

            <SectionTitle id="sec4">4. SFC対策で磨いた力は、一生モノの財産になる</SectionTitle>
            <p>
              多くの人が「SFCの小論文は特殊すぎて、併願校の対策にならない」と勘違いしています。しかし、佐藤塾の塾生たちは、SFCのために磨いた力で、<strong>青山学院、法政、立教、中央</strong>といった難関大学にも次々と合格しています。
            </p>
            <p className="mb-12">
              これは、佐藤塾で教える内容が単なる小論文のテクニックではなく、どこでも通用する「本質的な知力」そのものだからです。SFCという最高峰を目指す過程で培われる圧倒的な論理力は、一般入試の現代文や他学部の小論文をも容易に凌駕する強力な武器になります。
            </p>

            {/* 塾長プロフィール */}
            <div className="mt-24 p-8 border border-gray-200 rounded-3xl flex flex-col md:flex-row items-center gap-8 bg-slate-50/50">
              <div className="relative w-24 h-24 flex-shrink-0 border-2 border-[#C5A059] rounded-full overflow-hidden">
                <Image
                  src="/jukucho.jpg"
                  alt="佐藤塾 塾長 佐藤颯太"
                  fill
                  className="object-cover object-top scale-125"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-tighter">監修者</span>
                  <h4 className="text-xl font-bold text-[#002147] font-serif">佐藤 颯太 <span className="text-sm font-medium text-gray-500">Sota Sato</span></h4>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  佐藤塾 塾長。慶應SFC受験対策の専門家。これまで数百名の受験生と向き合い、独自の「ロジカルライティング・メソッド」と最新のAI技術を融合させた指導で、多数の逆転合格者を輩出。
                </p>
                <Link href="/#contact-form" className="text-sm font-bold text-[#800000] hover:underline inline-flex items-center">
                  塾長から詳しい指導方針を聞く <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 p-10 bg-[#002147] text-white rounded-3xl text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 font-serif">合格への第一歩を、ここから</h3>
              <p className="mb-10 text-slate-300 max-w-2xl mx-auto">
                正しいルールを知り、十分な練習を積みさえすれば、SFCの門は必ず開きます。まずはあなたの現状を詳しくお聞かせください。
              </p>
              <Link href="/#contact-form">
                <Button className="bg-[#C5A059] hover:bg-[#B48F48] text-[#002147] font-bold py-7 px-12 text-lg rounded-none">
                  無料相談・体験授業を予約する
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}