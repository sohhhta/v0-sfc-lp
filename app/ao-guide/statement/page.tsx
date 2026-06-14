import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TableOfContents,
  ArticleH2,
  ArticleHighlight,
  ArticleHeader,
  ArticleContainer,
  ArticleNavigation,
  AuthorBox,
} from "@/components/article-ui";

const tocItems = [
  { id: "sec1", label: "ありがちなNG例：「夢を語るポエム」からの脱却" },
  { id: "sec2", label: "合格する志望理由書の「3つの要件」" },
  { id: "sec3", label: "佐藤塾のAI壁打ち×塾長指導" },
];

const articleTitle = "【志望理由書編】SFC教授の心を動かす「志望理由書」の書き方と構成";
const articleDescription =
  "SFCに対する熱意を論理的な文章に落とし込む方法を解説。単なる「夢を語るポエム」から脱却し、合格を勝ち取るための志望理由書の型と構成ステップ。";

export const metadata: Metadata = {
  title: `${articleTitle} | 佐藤塾`,
  description: articleDescription,
  openGraph: {
    title: `${articleTitle} | 佐藤塾`,
    description: articleDescription,
    images: [
      {
        url: `https://www.sfc-satojuku.com/api/og?title=${encodeURIComponent(articleTitle)}`,
        width: 1200,
        height: 630,
        alt: articleTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${articleTitle} | 佐藤塾`,
    description: articleDescription,
    images: [`https://www.sfc-satojuku.com/api/og?title=${encodeURIComponent(articleTitle)}`],
  },
};

export default function StatementPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${articleTitle} | 佐藤塾`,
    description: articleDescription,
    image: "https://lifeeling.jp/hero.jpg",
    author: {
      "@type": "Person",
      name: "佐藤颯太",
    },
    publisher: {
      "@type": "Organization",
      name: "佐藤塾",
    },
    mainEntityOfPage: "https://lifeeling.jp/ao-guide/statement",
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="pt-32 md:pt-40 pb-20">
        <ArticleContainer>
          <ArticleHeader
            theme="ao"
            category="SFC AO入試 対策ガイド"
            title={
              <>
                【志望理由書編】SFC教授の心を動かす
                <br className="hidden md:block" />
                「志望理由書」の書き方と構成
              </>
            }
            readTime={6}
          />

          <TableOfContents items={tocItems} />

          <div className="prose prose-slate max-w-none leading-[1.9] text-gray-700">
            <p className="text-lg mb-12 italic border-l-4 border-[#C5A059] pl-6 py-2 text-slate-600 bg-slate-50 mt-12">
              AO入試において、あなたの分身となり、教授陣に熱意と論理性を伝える最大の武器が「志望理由書（2000字）」です。しかし、多くの受験生が「熱意を伝えること」と「夢を語ること」を履き違え、単なるポエムを提出して不合格となっています。SFCが求めているのは、社会の問題を解決するための「論理的な設計図」です。
            </p>

            <ArticleH2 id="sec1">1. ありがちなNG例：「夢を語るポエム」からの脱却</ArticleH2>
            <p>
              SFCの志望理由書で最も多い失敗は、自分の過去の辛い経験や、未来の壮大な夢をエモーショナルに語るだけで終わってしまうパターンです。
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg not-prose">
              <h4 className="font-bold text-red-800 mt-0 mb-3 flex items-center">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-2">
                  NG例
                </span>
                情熱だけで具体性がない
              </h4>
              <p className="text-red-900 text-sm mb-0 leading-relaxed">
                「私は貧困問題に心を痛め、将来は世界中の子供たちを笑顔にしたいです。そのためにはSFCの多様な学びが必要です。」
                <span className="block mt-3 font-bold">
                  → 教授の視点：「素晴らしい夢だが、具体的に何をどう解決するのか？なぜ他大学ではなくSFCなのか？」
                </span>
              </p>
            </div>
            <p className="mb-6">
              SFCの教授陣は、あなたの夢の「熱量」だけでなく、
              <ArticleHighlight>それを実現するための「方法論」と「実現可能性」</ArticleHighlight>
              を厳しくチェックしています。
            </p>

            <ArticleH2 id="sec2">2. 合格する志望理由書の「3つの要件」</ArticleH2>
            <p className="mb-6">
              SFCの志望理由書は、以下の3つの要素が直線で美しく繋がっている必要があります。これを
              <ArticleHighlight>「過去・現在・未来の論理的接続」</ArticleHighlight>
              と呼びます。
            </p>

            <div className="space-y-6 my-8 not-prose">
              <div className="flex items-start bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="bg-[#002147] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-[#002147] mt-0 mb-2">
                    問題の発見（過去の原体験）
                  </h3>
                  <p className="text-sm text-slate-700 mb-0 leading-relaxed">
                    なぜあなたはその問題に気づいたのか。机上の空論ではない、あなただけの実体験に基づいた強烈な問題意識を提示します。
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="bg-[#002147] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-[#002147] mt-0 mb-2">
                    解決へのアプローチ（SFCである必然性）
                  </h3>
                  <p className="text-sm text-slate-700 mb-0 leading-relaxed">
                    その問題を解決するために、なぜ「SFCの〇〇研究会」でなければならないのか。他大学や他学部ではダメな理由（＝SFCの独自性）を論理的に説明します。
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="bg-[#002147] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-[#002147] mt-0 mb-2">
                    社会への還元（未来のビジョン）
                  </h3>
                  <p className="text-sm text-slate-700 mb-0 leading-relaxed">
                    SFCでの学びを経て、最終的にどのようなプロダクトや仕組みを作り、社会をどう変革したいのか。明確なゴールを描きます。
                  </p>
                </div>
              </div>
            </div>

            <ArticleH2 id="sec3">3. 佐藤塾のAI壁打ち×塾長指導</ArticleH2>
            <p>
              この「論理的接続」を高校生が一人で完璧に組み上げるのは至難の業です。そこで佐藤塾では、独自のAIシステムを利用した24時間体制の壁打ちで「思考の解像度」を極限まで高めます。
            </p>
            <p className="mb-12">
              AIがあなたの曖昧なアイデアに対して「その問題の根本原因は何か？」「なぜそのアプローチが有効なのか？」と鋭い問いを投げかけます。そして、引き出された思考のピースを、
              <ArticleHighlight>塾長がSFCの評価基準に合わせて緻密な論理構造へと組み上げます。</ArticleHighlight>
            </p>

            <AuthorBox />

            <ArticleNavigation
              prev={{ title: "【テーマ設定編】自分だけの研究テーマを見つける3ステップ", href: "/ao-guide/theme" }}
              back={{ title: "AO入試 対策記事一覧に戻る", href: "/ao-guide/articles" }}
              next={{ title: "【面接対策編】面接官の「圧迫」を「対話」に変える", href: "/ao-guide/interview" }}
            />

            <div className="mt-20 p-10 bg-[#002147] text-white rounded-3xl text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 font-serif">
                あなたの「熱意」を「論理」に変換します
              </h3>
              <p className="mb-10 text-slate-300 max-w-2xl mx-auto">
                志望理由書の構成で行き詰まっている方、自分のアイデアがSFCで通用するか不安な方。無料相談で、あなたの志望理由書の「論理の穴」を明確にします。
              </p>
              <Link href="/#contact-form">
                <Button className="bg-[#C5A059] hover:bg-[#B48F48] text-[#002147] font-bold py-7 px-12 text-lg rounded-none">
                  無料相談・体験授業を予約する
                </Button>
              </Link>
            </div>
          </div>
        </ArticleContainer>
      </main>
    </div>
  );
}
