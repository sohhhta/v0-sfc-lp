import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { TableOfContents, ArticleH2, ArticleNavigation, ArticleHighlight, ArticleHeader, ArticleContainer } from '@/components/article-ui'

const tocItems = [
  { id: "sec1", label: "「圧迫面接」の正体は、教授からの知的なディスカッション" },
  { id: "sec2", label: "完璧な台本の暗記は捨てる。「自分の言葉」の作り方" },
  { id: "sec3", label: "想定外の質問には「誠実さと未来志向」で切り返す" },
  { id: "sec4", label: "佐藤塾の1on1が「対話力」を飛躍的に高める理由" },
];

const articleTitle = "【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方";
const articleDescription = "SFCのAO入試面接で受験生が恐れる「鋭いツッコミ」の正体と、暗記に頼らず本質的な議論を展開するためのマインドセット・準備方法を解説します。";

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

export default function InterviewPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方 | 佐藤塾",
    "description": "SFCのAO入試面接で受験生が恐れる「鋭いツッコミ」の正体と、暗記に頼らず本質的な議論を展開するためのマインドセット・準備方法を解説します。",
    "image": "https://lifeeling.jp/hero.jpg",
    "author": {
      "@type": "Person",
      "name": "佐藤颯太"
    },
    "publisher": {
      "@type": "Organization",
      "name": "佐藤塾"
    },
    "mainEntityOfPage": "https://lifeeling.jp/ao-guide/interview"
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
            title={<>【面接対策編】面接官の「圧迫」を<br className="hidden md:block" />「対話」に変える、主導権の握り方</>}
            readTime={5}
          />

          <TableOfContents items={tocItems} />

          <div className="prose prose-slate max-w-none leading-[1.9] text-gray-700">
            <p className="text-lg mb-8 italic border-l-4 border-[#C5A059] pl-6 py-2 text-slate-600 bg-slate-50 mt-12">
              「志望理由書の内容を根本から否定されるような、厳しいツッコミを受けたと先輩から聞いた」<br />
              「面接で頭が真っ白になったらどうしよう……」
            </p>
            <p className="mb-12">
              書類選考（1次選考）を通過した受験生から、面接に対する強い不安の声をよく耳にします。確かに、SFCの面接は一般的な大学の「志望動機を確認するだけの面接」とは異なり、鋭い質問が飛んでくることが多いのは事実です。しかし、それらを恐れる必要はありません。本記事では、面接を「試練」から「対話」へと変えるための具体的な準備方法について解説します。
            </p>

            <ArticleH2 id="sec1">1. 「圧迫面接」の正体は、教授からの知的なディスカッション</ArticleH2>
            <p>
              まず、前提として知っておくべきことは、SFCの教授陣は受験生をいじめようとして鋭い質問をしているわけではないということです。
            </p>
            <p className="mb-6">
              彼らが確認したいのは、<ArticleHighlight>「あなたが提出した志望理由書や研究テーマが、借り物の言葉ではなく、心からの熱量と深い考察に基づいているか」</ArticleHighlight>です。「なぜ他のアプローチではなく、その手法なのか？」「その課題が解決されたとして、新たなデメリットは生まれないか？」といった質問は、研究者として当然抱く純粋な疑問です。これを「圧迫」と捉えて萎縮するのではなく、「自分の研究テーマに興味を持ってディスカッションしてくれている」と捉え直すことが、主導権を握る第一歩です。
            </p>

            <ArticleH2 id="sec2">2. 完璧な台本の暗記は捨てる。「自分の言葉」の作り方</ArticleH2>
            <p>
              面接対策において最も危険なのは、想定質問に対する「完璧な台本（スクリプト）」を作り、それを一言一句暗記しようとすることです。
            </p>
            <p className="mb-6">
              SFCの面接は、一問一答のテストではありません。暗記した台本を読み上げている最中に予期せぬ角度からツッコミが入ると、途端に頭が真っ白になってしまいます。準備すべきは台本ではなく、<ArticleHighlight>「なぜこのテーマなのか」「なぜ今なのか」「なぜ自分なのか」「なぜSFCなのか」</ArticleHighlight>というコアとなる論理の柱です。この4つの柱さえブレなければ、どんな変化球の質問が来ても、自分の言葉で柔軟に打ち返すことができます。
            </p>

            <ArticleH2 id="sec3">3. 想定外の質問には「誠実さと未来志向」で切り返す</ArticleH2>
            <p>
              どれほど準備をしても、高校生の知識では到底答えられない専門的な質問や、全く考えてもみなかった視点からの質問が飛んでくることがあります。
            </p>
            <p className="mb-6">
              そのような時、知ったかぶりをして適当なことを答えたり、沈黙してしまったりするのは避けましょう。教授陣も、高校生がすべてを知っているとは思っていません。重要なのは<ArticleHighlight>「自分の現在の限界を誠実に認め、それをSFCでどう乗り越えるかを示すこと」</ArticleHighlight>です。<br />
              「その視点は持っていませんでした。非常に重要な点だと思います。入学後は〇〇教授の研究会で、まさにその〇〇の観点を取り入れて研究を深めたいと考えています」と切り返すことができれば、ピンチは一転して「学びへの意欲」をアピールする最大のチャンスに変わります。
            </p>

            <ArticleH2 id="sec4">4. 佐藤塾の1on1が「対話力」を飛躍的に高める理由</ArticleH2>
            <p>
              このような「本質的な対話力」は、一人で鏡に向かって練習していても身につきません。また、志望理由書の背景知識を深く理解していない相手と形だけの模擬面接をしても効果は薄いでしょう。
            </p>
            <p className="mb-12">
              佐藤塾では、あなたの研究テーマの論理構造を共に組み上げた塾長自身が、SFCの教授陣の視点に立って1on1で徹底的なディスカッション（模擬面接）を行います。表面的なマナーや話し方の指導ではなく、「研究の穴」を容赦なく突き、それをどう論理的に防御・展開するかという<ArticleHighlight>実践的な学術的対話のトレーニング</ArticleHighlight>を繰り返します。この泥臭い準備こそが、本番での圧倒的な自信と主導権をもたらすのです。
            </p>

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
                  佐藤塾 塾長。慶應SFC受験対策の専門家。これまで数十名の受験生と向き合い、書類作成から面接対策まで���貫した伴走指導を実施。本番で実力を120%発揮させるメンタルと論理的思考力の育成に定評がある。
                </p>
                <Link href="/#contact-form" className="text-sm font-bold text-[#800000] hover:underline inline-flex items-center">
                  塾長から詳しい指導方針を聞く <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>

            <ArticleNavigation 
              prev={{ title: "【志望理由書編】SFC教授の心を動かす「志望理由書」の書き方と構成", href: "/ao-guide/statement" }} 
              back={{ title: "AO入試 対策記事一覧に戻る", href: "/ao-guide/articles" }} 
            />

            <div className="mt-20 p-10 bg-[#002147] text-white rounded-3xl text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 font-serif">SFC教授との「対話」を楽しむ準備を</h3>
              <p className="mb-10 text-slate-300 max-w-2xl mx-auto">
                面接は落とすための試験ではなく、あなたの情熱を直接伝える最高のプレゼンテーションの場です。本番で自信を持って語れるよう、まずは一度、佐藤塾のディスカッションを体験してみませんか。
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
  )
}
