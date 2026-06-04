
'use client'

import React from 'react';
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BookOpen, BrainCircuit, FileSearch, PenTool, LightbulbOff, RefreshCw, MessageSquare } from 'lucide-react';

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "慶應SFC 小論文・完全攻略ガイド | 佐藤塾",
    "description": "SFC小論文に「天才的なひらめき」や「模範解答の暗記」は不要。求められているのは『問題発見・解決』の論理的思考プロセスです。",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "佐藤塾",
      "url": "https://lifeeling.jp"
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "SFCの小論文は、天才的な発想力がないと合格できませんか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "奇抜なアイデアや天才的な発想力は全く不要です。SFCの小論文は「与えられた膨大な資料から論理の制約を読み解き、矛盾なく解決策を組み立てるパズル」です。論理的思考力さえ鍛えれば、誰でも確実に合格点に到達できます。"
          }
        },
        {
          "@type": "Question",
          "name": "一般的な小論文の「序論・本論・結論」の型で書けば受かりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SFCの小論文において、一般的な型への当てはめは非常に危険です。設問ごとに複雑な条件設定や資料分析が求められるため、SFC特有の「問題発見・解決のプロセス」に沿った柔軟な論理構築力が必須となります。"
          }
        },
        {
          "@type": "Question",
          "name": "佐藤塾の小論文対策は、他塾と何が違うのですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "完成された「美しすぎる模範解答」を渡すだけの指導は行いません。AIを活用して大量の社会課題の切り口を壁打ちし、塾長との1on1を通じて「真っ白な原稿用紙から、どのような手順で論理を組み立てていけばよいか」という泥臭い思考プロセスそのものを徹底的に鍛え上げます。"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background text-slate-900 font-sans leading-relaxed selection:bg-[#C5A059]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#002147] to-[#003d6b]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A059] border border-[#C5A059]/50 px-5 py-2 rounded-full mb-8 uppercase">
            SFC ESSAY CONCEPT LP
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-6 font-serif tracking-[0.08em]" style={{ wordBreak: 'keep-all' }}>
            小論文攻略メソッド
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
            「奇抜なアイデア」も「模範解答の暗記」も不要。<br />SFCが求める『問題発見・解決』の思考プロセスを完全解剖。
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-16 md:py-20">

        {/* Section 1: 致命的な誤解 */}
        <section className="mb-20">
          <SectionTitle>SFC小論文に対する「致命的な誤解」</SectionTitle>
          <div className="grid md:grid-cols-12 gap-8 items-center mt-12">
            <div className="md:col-span-7 space-y-6">
              <p className="text-base md:text-lg text-[#333333] leading-loose">
                大量の資料、複雑な条件設定、時には図や絵を描かせる難解な設問。<br />
                SFCの小論文問題を見て、「自分には天才的な発想力がないから無理だ」と絶望する受験生は後を絶ちません。あるいは、一般的な小論文の「序論・本論・結論」の型に無理やり当てはめようとして手が止まってしまうケースも多発しています。
              </p>
              <div className="bg-white border-l-4 border-[#800000] px-6 md:px-10 py-6 rounded-lg shadow-lg border border-slate-100">
                <p className="font-bold text-[#800000] mb-2 text-base md:text-lg flex items-center gap-2">
                  <LightbulbOff size={20} />
                  SFCに「ひらめき」は一切不要です
                </p>
                <p className="text-[#333333] text-sm md:text-base leading-relaxed">
                  赤本や他塾のサイトに載っている「美しすぎる模範解答」を見て焦る必要はありません。SFCが求めているのは、誰も思いつかないような奇抜なアイデアではなく、<strong className="text-[#002147]">「与えられた資料から制約を正確に読み取り、矛盾なく論理を組み立てる力」</strong>なのです。
                </p>
              </div>
            </div>
            <div className="md:col-span-5 bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 shadow-md">
              <h3 className="text-lg font-serif font-bold text-[#002147] mb-4 flex items-center gap-2">
                <PenTool className="text-[#002147]" size={20} />
                小論文対策の罠
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-slate-200">
                  <span className="text-xs font-bold text-[#800000] block mb-1">✕ 陥りがちな罠</span>
                  <p className="text-sm font-medium text-[#333333]">「模範解答」を暗記し、それらしい言葉で原稿用紙を埋めようとする</p>
                </div>
                <div className="bg-white p-4 rounded border border-[#C5A059]/40 bg-[#C5A059]/5">
                  <span className="text-xs font-bold text-[#002147] block mb-1">◯ 合格者の思考</span>
                  <p className="text-sm font-bold text-[#002147]">真っ白な原稿用紙を前に、資料の意図を汲み取り「思考のプロセス」を可視化する</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SFC小論文の正体 */}
        <section className="mb-20">
          <div className="bg-[#002147] text-white p-8 md:p-12 rounded-xl shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-[#C5A059] rounded-full flex items-center justify-center shadow-lg">
                  <FileSearch size={48} className="text-[#002147]" />
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <h4 className="text-xl md:text-2xl font-serif font-bold tracking-[0.08em] text-[#C5A059]">
                  SFC小論文の正体は「AO入試のペーパーテスト化」
                </h4>
                <p className="text-slate-200 text-base leading-loose">
                  SFCの小論文は、国語のテストでも、作文コンクールでもありません。それは、あなたが大学に入ってから行う「問題発見・解決」のプロセスを、試験時間内に紙の上でシミュレーションできるかを測るテストです。
                </p>
                <p className="text-slate-200 text-base leading-loose">
                  だからこそ、佐藤塾では「文章の書き方」よりも先に「物事の考え方・論理の組み立て方」を徹底的に鍛えます。この思考力こそが、本番でどんな未知のテーマが出題されてもパニックにならずに対応できる「最強の現場対応力」となります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 佐藤塾のメソッド */}
        <section className="mb-20">
          <SectionTitle>佐藤塾が提供する「再現性のある」小論文対策</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#002147] rounded flex items-center justify-center mb-6 text-white shadow-sm">
                <BrainCircuit size={24} />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#002147] mb-4 tracking-wide">
                AIを活用した「思考の壁打ち」
              </h4>
              <p className="text-[#333333] text-sm md:text-base leading-loose flex-grow">
                小論文に必要なのは、様々な社会課題に対する「引き出しの多さ」です。佐藤塾のSFC特化AIを利用し、あらゆるテーマに対する解決策の切り口やディスカッションを24時間高速で繰り返すことで、あなたの思考の幅とスピードを極限まで拡張します。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#800000] rounded flex items-center justify-center mb-6 text-white shadow-sm">
                <MessageSquare size={24} />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#002147] mb-4 tracking-wide">
                塾長との1on1で論理の飛躍を潰す
              </h4>
              <p className="text-[#333333] text-sm md:text-base leading-loose flex-grow">
                自分が書いた答案は、自分では論理の破綻に気づけません。AIによる基礎力の底上げに加えて、塾長との徹底的な1on1指導により「なぜこの結論に至ったのか」「この制約条件を見落としていないか」というプロセスを泥臭く解体し、確実に得点できる論理構築力を定着させます。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-[#800000] to-[#600000]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">
            小論文対策に限界を感じたら、無料相談へ
          </h2>
          <p className="text-base text-white/80 mb-8 leading-relaxed">
            「何から手をつければいいか分からない」「書いた答案が合っているか不安」<br />
            あなたの現在地を診断し、SFC合格までの最短ルートをご提案します。
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
  );
}