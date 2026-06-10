'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronRight, Clock } from 'lucide-react'
import { TableOfContents, ArticleH2, ArticleNavigation, ArticleHighlight } from '@/components/article-ui'

const tocItems = [
  { id: "sec1", label: "いきなり資料を読み始めない。「設問の要求」を正確に把握する" },
  { id: "sec2", label: "資料から「真の問題」を見つけ出す思考法" },
  { id: "sec3", label: "書き始める前の勝負。「論理のアウトライン」を構築する" },
  { id: "sec4", label: "SFCが求める「当事者意識（オーナーシップ）」の示し方" },
];

export default function PastExamsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【過去問演習編】白紙から合格答案を組み立てる思考プロセスの可視化 | 佐藤塾",
    "description": "SFC小論文の過去問演習において、膨大な資料をどう読み解き、どう論理を構築するのか。設問の把握からアウトライン作成、当事者意識の示し方まで、具体的なプロセスを解説します。",
    "image": "https://lifeeling.jp/hero.jpg",
    "author": {
      "@type": "Person",
      "name": "佐藤颯太"
    },
    "publisher": {
      "@type": "Organization",
      "name": "佐藤塾"
    },
    "mainEntityOfPage": "https://lifeeling.jp/guide/past-exams"
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      
      <main className="pt-32 md:pt-40 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          {/* ヘッダー */}
          <header className="mb-12 text-center">
            <div className="inline-block px-4 py-1 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold tracking-widest mb-6 rounded-full">
              SFC小論文 対策ガイド
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#002147] leading-[1.3] mb-8 font-serif">
              【過去問演習編】白紙から合格答案を<br className="hidden md:block" />組み立てる思考プロセスの可視化
            </h1>
            <div className="flex items-center justify-center text-gray-500 text-sm space-x-6 border-y border-gray-100 py-4">
              <span className="flex items-center"><Clock size={16} className="mr-1.5 text-[#800000]" /> 6分で読めます</span>
              <span className="font-bold text-[#002147]">監修：佐藤颯太</span>
            </div>
          </header>

          <TableOfContents items={tocItems} />

          <div className="prose prose-slate max-w-none leading-[1.9] text-gray-700">
            <p className="text-lg mb-8 italic border-l-4 border-[#C5A059] pl-6 py-2 text-slate-600 bg-slate-50 mt-12">
              「過去問を開いてみたものの、資料の多さに圧倒されて何から手をつけていいか分からない」<br />
              「模範解答の記述が立派すぎて、試験時間内に自分がこれを書けるイメージが湧かない」
            </p>
            <p className="mb-12">
              SFCの小論文対策を始めたばかりの受験生が、最初に直面する壁です。しかし、完成された模範解答をどれだけ読んでも、本番で同じように書けるようにはなりません。必要なのは、特別なセンスではなく、<ArticleHighlight>「真っ白な原稿用紙から、どのような手順で論理を組み立てていくか」という具体的なプロセス</ArticleHighlight>を身につけることです。本記事では、過去問を解く際の具体的なステップを解説します。
            </p>

            <ArticleH2 id="sec1">1. いきなり資料を読み始めない。「設問の要求」を正確に把握する</ArticleH2>
            <p>
              SFCの小論文では、数十ページに及ぶ膨大な資料が提示されることがあります。試験開始と同時に1ページ目から丁寧に資料を読み始めてしまうと、時間がいくらあっても足りません。
            </p>
            <p className="mb-6">
              まず行うべきは<ArticleHighlight>「設問文の熟読と条件の抽出」</ArticleHighlight>です。例えば、「資料A〜Dを踏まえ、現在の社会における問題点を〇〇字以内で要約し、それに対するあなたの解決策を〇〇字で提案しなさい」といった具体的な要求をマーキングします。「何について書くべきか」「どの資料を使うよう指定されているか」「字数配分はどうなっているか」という<ArticleHighlight>論理の外枠（制約）</ArticleHighlight>を最初に確定させることが、すべての出発点となります。
            </p>

            <ArticleH2 id="sec2">2. 資料から「真の問題」を見つけ出す思考法</ArticleH2>
            <p>
              設問の要求を把握したら、それに沿って資料を読み解きます。ここで重要なのは、資料に書かれている表面的な事実をそのまま書き写すのではなく、<ArticleHighlight>その背後にある「構造的な問題（ボトルネック）」を見つけ出すこと</ArticleHighlight>です。
            </p>
            <p className="mb-6">
              例えば「食品ロス」に関する資料があったとします。「日本では年間〇〇トンの食品が捨てられている、だからもったいない」と書くのは単なる事実の羅列です。SFCで評価されるのは、「テクノロジーが発展しているのに、なぜ食品の需給予測が最適化されないのか」「法的な規制がリサイクルを阻んでいるのではないか」といった、<ArticleHighlight>問題が解決されない根本的な原因（真の問題）</ArticleHighlight>を提示する力です。佐藤塾では、この「視点の広げ方」をAIとの壁打ちを通じて徹底的にトレーニングします。
            </p>

            <ArticleH2 id="sec3">3. 書き始める前の勝負。「論理のアウトライン」を構築する</ArticleH2>
            <p>
              真の問題が見えてきたら、すぐに原稿用紙に書き始めたくなるかもしれません。しかし、文章を書きながら論理を考えようとすると、途中で筋道が破綻しやすくなります。
            </p>
            <p className="mb-6">
              必ず、問題用紙の余白を使って<ArticleHighlight>「アウトライン（論理の骨組み）」</ArticleHighlight>を作成してください。箇条書きやマインドマップ形式で、「①真の問題の定義」「②その問題が発生している原因（資料に基づく根拠）」「③原因を取り除くための具体的な解決策」「④解決策がもたらす未来（結論）」というブロックを配置します。この骨組みが論理的に繋がっているかを確認してから、初めて原稿用紙のマス目を埋める作業に入ります。
            </p>

            <ArticleH2 id="sec4">4. SFCが求める「当事者意識（オーナーシップ）」の示し方</ArticleH2>
            <p>
              最後に、解決策を提示する際の最も重要なポイントについてお伝えします。それは<ArticleHighlight>「評論家にならず、当事者（オーナーシップを持つ者）として書く」</ArticleHighlight>ということです。
            </p>
            <p className="mb-12">
              「政府が法律を変えるべきだ」「国民の意識を高めるべきだ」といった、誰かがやってくれるのを待つような意見は評価されません。<ArticleHighlight>「自分自身が（あるいは自分が立ち上げるプロジェクトが）、既存のテクノロジーや社会の仕組みをどのように活用し、この問題を解決に導くのか」</ArticleHighlight>という、地に足のついた実現可能性と当事者意識が求められます。佐藤塾の1on1指導では、生徒一人ひとりの興味関心とSFCの出題テーマをすり合わせ、この「自分事として語る力」を磨き上げていきます。
            </p>

            {/* 塾長プロフィール */}
            <div className="mt-24 p-8 border border-gray-200 rounded-3xl flex flex-col md:flex-row items-center gap-8 bg-slate-50/50">
              <div className="relative w-24 h-24 flex-shrink-0 border-2 border-[#C5A059] rounded-full overflow-hidden">
                <Image
                  src="/og-image.png"
                  alt="佐藤塾 塾長 佐藤颯太"
                  fill
                  className="object-cover object-top scale-125"
                  unoptimized
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-tighter">監修者</span>
                  <h4 className="text-xl font-bold text-[#002147] font-serif">佐藤 颯太 <span className="text-sm font-medium text-gray-500">Sota Sato</span></h4>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  佐藤塾 塾長。慶應SFC受験対策の専門家。これまで数多くの受験生と向き合い、独自の「ロジカルライティング・メソッド」と最新のAI技術を融合させた指導で、多数の逆転合格者を輩出。
                </p>
                <Link href="/#contact-form" className="text-sm font-bold text-[#800000] hover:underline inline-flex items-center">
                  塾長から詳しい指導方針を聞く <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* 共通のナビゲーション */}
            <ArticleNavigation 
              prev={{ title: "【実践編】合格点に届かない理由とロジカルライティング", href: "/guide/logic-writing" }} 
              back={{ title: "SFC小論文 対策記事一覧", href: "/guide/essay/articles" }} 
            />

            {/* CTA */}
            <div className="mt-20 p-10 bg-[#002147] text-white rounded-3xl text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 font-serif">合格へのプロセスを、共に歩みませんか</h3>
              <p className="mb-10 text-slate-300 max-w-2xl mx-auto">
                「正しい手順」を知り、「客観的なフィードバック」を受け続けること。それがSFC小論文攻略の唯一にして最短のルートです。まずは現状の課題をご相談ください。
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
