import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, ArticleNavigation, ArticleHighlight, ArticleCTA } from "@/components/article-ui";
import { TableOfContents } from "@/components/table-of-contents";
import { MessageSquare, Target, Lightbulb } from "lucide-react";

const articleTitle = "慶應SFCのAO入試に「すごい実績」は不要。一般・AO\"二刀流\"が合格の最短距離である理由";
const articleDescription = "「起業経験や国際大会での入賞がないとSFCのAOは受からない」という誤解を解き、一般入試の小論文対策とAO入試対策がどのように相乗効果を生むのか、その具体的な戦略を解説します。";

export const metadata: Metadata = {
  title: `${articleTitle} | 佐藤塾`,
  description: articleDescription,
  openGraph: {
    title: `${articleTitle} | 佐藤塾`,
    description: articleDescription,
    images: [
      {
        url: `https://www.sfc-satojuku.com/api/og?title=${encodeURIComponent("慶應SFCのAO入試に「すごい実績」は不要。一般・AO二刀流が合格の最短距離である理由")}`,
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
    images: [`https://www.sfc-satojuku.com/api/og?title=${encodeURIComponent("慶應SFCのAO入試に「すごい実績」は不要。一般・AO二刀流が合格の最短距離である理由")}`],
  },
};

const tocItems = [
  { id: "section-1", title: "1. 「すごい実績がないと受からない」は最大の誤解" },
  { id: "section-2", title: "2. 小論文とAO入試は「評価基準」が全く同じ" },
  { id: "section-3", title: "3. 「二刀流」がもたらす圧倒的な相乗効果" },
  { id: "section-4", title: "【実録】「起業しなきゃ」の強迫観念から解放され、日常の探究で合格を掴んだ軌跡" }
];

export default function AoStrategyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": articleTitle,
    "description": articleDescription,
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "佐藤塾",
      "url": "https://www.sfc-satojuku.com"
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "慶應SFCのAO入試は、華々しい実績がないと合格できませんか？",
          "acceptedAnswer": { "@type": "Answer", "text": "表面的な実績のスケールは合否に関係ありません。SFCの教授陣が見ているのは、行動の背景にある独自の動機（意志）と、大学での研究テーマとの強固な繋がりです。" }
        }
      ]
    }
  };

  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ArticleContainer>
        <ArticleHeader
          theme="ao"
          category="SFC AO入試 対策ガイド"
          title={<>慶應SFCのAO入試に「すごい実績」は不要。<br className="hidden md:block" />一般・AO&quot;二刀流&quot;が合格の最短距離である理由</>}
          readTime={6}
        />

        <div className="prose prose-lg prose-slate max-w-none">
          <p>
            「SFCのAO入試を受けたいけれど、自分にはアプリ開発や起業の経験、ビジネスコンテストでの優勝歴なんてないから絶対に無理だ…」
          </p>
          <p>
            毎年、数え切れないほどの受験生からこのような相談を受けます。しかし、結論から言えばそれは<strong>大きな誤解</strong>です。本記事では、華々しい実績を持たない普通の高校生が、なぜSFCのAO入試を突破できるのか。そして、一般入試（小論文）とAO入試を両方対策する「二刀流」がいかに最強の戦略であるかを解説します。
          </p>

          <TableOfContents items={tocItems} />

          <h2 id="section-1" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
            1. 「すごい実績がないと受からない」は最大の誤解
          </h2>
          <p>
            SFCの教授陣が見ているのは「過去の華々しい結果」ではなく、<strong>「身近な社会問題に対する強い当事者意識」と「それを解決しようとする思考のプロセス」</strong>です。
          </p>
          <p>
            「地元の商店街を調査した」「校則の理不尽に対して改善案を出した」といった、地に足の着いた泥臭い探究の方が、表面的なビジネスコンテストの賞状よりも高く評価されます。佐藤塾では、あなたの内なる「なぜ」を対話を通じて探索し、論理的に接続します。
          </p>

          <h2 id="section-2" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
            2. 小論文とAO入試は「評価基準」が全く同じ
          </h2>
          <p>
            佐藤塾が「一般（小論文）とAOの二刀流」を推奨する理由は、<strong>両者の評価基準の根幹が完全に一致しているから</strong>です。
          </p>
          <p>
            小論文で求められる「資料から課題を発見し、論理的な解決策を提示する力」は、そっくりそのままAO入試の「志望理由書（自分が解決したい課題と、SFCでの研究計画）」を書く力に直結します。
          </p>

          <h2 id="section-3" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
            3. 「二刀流」がもたらす圧倒的な相乗効果
          </h2>
          <p>
            AO対策で深めた専門知識は、小論文試験において<ArticleHighlight>誰よりも解像度の高いエビデンス</ArticleHighlight>として機能します。AO対策が小論文の質を上げ、小論文対策がAOの論理性を鍛える。この無限ループに入った受験生は、圧倒的なスピードで合格圏内へ到達します。
          </p>

          <h2 id="section-4" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-16 mb-6">
            【実録】「起業しなきゃ」の強迫観念から解放され、日常の探究で合格を掴んだ軌跡
          </h2>
          <p>
            特別な実績がなかったHさんのケーススタディです。彼女は「起業しなきゃ」という強迫観念で書類が書けなくなっていましたが、塾長との1on1で「自転車通学の安全」という身近な課題を発見しました。
          </p>

          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 my-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#002147] text-white p-3 rounded-lg flex-shrink-0"><MessageSquare size={24} /></div>
              <div>
                <p className="font-bold text-[#002147] text-sm mb-1">塾長からの問い</p>
                <p className="text-slate-700 text-sm">「Hさん、無理なNPOの話は忘れよう。最近イライラした理不尽なことはある？」</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#800000] text-white p-3 rounded-lg flex-shrink-0"><Target size={24} /></div>
              <div>
                <p className="font-bold text-[#800000] text-sm mb-1">Hさんの気づき</p>
                <p className="text-slate-700 text-sm">「雨の日のレインコート、視界が悪くて危ないのに学校が対策をくれないことです。」</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#C5A059] text-white p-3 rounded-lg flex-shrink-0"><Lightbulb size={24} /></div>
              <div>
                <p className="font-bold text-[#002147] text-sm mb-1">「日常のイライラ」をテーマへ昇華</p>
                <p className="text-slate-700 text-sm">「それだ！SFCで製品開発を学んで、視界を遮らないレインウェアを作ろう！」</p>
              </div>
            </div>
          </div>

          <ArticleCTA />
        </div>

        <AuthorBox />

        <ArticleNavigation
          back={{ title: "AO入試 対策記事一覧に戻る", href: "/ao-guide/articles" }}
          next={{ title: "慶應SFCの研究テーマ設定の極意", href: "/ao-guide/theme" }}
        />
      </ArticleContainer>
    </main>
  );
}