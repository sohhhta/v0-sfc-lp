import { Metadata } from "next";
import {
  ArticleH2,
  ArticleCTA,
  TableOfContents,
  AuthorBox,
  ArticleNavigation,
  ArticleHighlight,
  ArticleHeader,
  ArticleContainer,
} from "@/components/article-ui";

const articleTitle = "慶應SFCのAO入試に「すごい実績」は不要。一般・AO“二刀流”が合格の最短距離である理由";
const articleDescription = "「特別な実績がないとSFCのAO入試には受からない」は誤解です。一般入試とAO入試を並行する「二刀流」戦略と、原体験の圧倒的な深掘りこそが合格への最短距離。SFC専門塾がその理由を解説します。";

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

const tocItems = [
  { id: "section-1", label: "誤解だらけのSFC AO入試：「起業」も「全国大会」も必須ではない" },
  { id: "section-2", label: "なぜ「AO単願」は危険なのか？佐藤塾が“二刀流”を強く推奨する理由" },
  { id: "section-3", label: "あなたの中にある「まだ言語化されていない問い」を見つける方法" },
];

export default function AoStrategyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <ArticleContainer>

        <ArticleHeader
          theme="ao"
          category="SFC AO入試 対策ガイド"
          title={<>【二刀流戦略】一般入試と<br className="hidden md:block" />AO入試の相乗効果</>}
          readTime={5}
        />

        <div className="p-8 md:p-12 text-slate-800">
          <TableOfContents items={tocItems} />

          <ArticleH2 id="section-1">
            誤解だらけのSFC AO入試：「起業」も「全国大会」も必須ではない
          </ArticleH2>

          <p className="mb-6 leading-relaxed">「SFCのAO入試に合格するには、学生起業や全国大会での優勝経験が必要だ」</p>
          <p className="mb-6 leading-relaxed">毎年、面談に訪れる受験生や保護者の方から、必ずと言っていいほど聞かれる言葉です。</p>
          <p className="mb-6 leading-relaxed">ネット上には華々しい実績を持つ合格者の声が溢れており、そう思い込んでしまうのも無理はありません。</p>
          <p className="mb-6 leading-relaxed">しかし、結論から申し上げます。</p>
          <p className="mb-10 leading-relaxed text-lg"><ArticleHighlight>「特別な実績がなければ合格できない」というのは完全な誤解です。</ArticleHighlight></p>
          <p className="mb-6 leading-relaxed">確かに、目を引く実績を持つ受験生は目立ちます。</p>
          <p className="mb-6 leading-relaxed">ですが、SFCの教授陣が出願書類の中で本質的に求めているのは、過去の活動実績や大会記録の羅列ではありません。</p>
          <p className="mb-10 leading-relaxed text-lg">彼らが見極めようとしているのは、<ArticleHighlight>未解決の社会課題に対する「未来へのオーナーシップ（当事者意識）」</ArticleHighlight>なのです。</p>

          <ArticleH2 id="section-2">
            なぜ「AO単願」は危険なのか？佐藤塾が“二刀流”を強く推奨する理由
          </ArticleH2>

          <p className="mb-6 leading-relaxed">実績づくりに焦るあまり、AO入試の対策だけに没頭してしまう受験生が多くいます。</p>
          <p className="mb-6 leading-relaxed">佐藤塾では、AO入試のみに絞る「AO単願」という戦略を推奨していません。</p>
          <p className="mb-10 leading-relaxed text-lg"><ArticleHighlight>一般入試に向けた「小論文対策」こそが、AO入試の書類と面接に圧倒的な説得力をもたらすからです。</ArticleHighlight></p>
          <p className="mb-6 leading-relaxed">SFCの小論文では、与えられた資料から問題の構造を読み解き、論理的に解決策を提示する力が求められます。</p>
          <p className="mb-6 leading-relaxed">この訓練を通じて鍛え上げられた「論理的思考力（ロジック）」は、そのまま志望理由書の骨格になります。</p>
          <p className="mb-6 leading-relaxed">「AOと一般、両方なんて手が回らない」と考えるかもしれません。</p>
          <p className="mb-10 leading-relaxed">しかし実際は逆であり、両者を並行して進める「二刀流」こそが、思考の質を高め合う最短距離のロードマップなのです。</p>

          <ArticleH2 id="section-3">
            あなたの中にある「まだ言語化されていない問い」を見つける方法
          </ArticleH2>

          <p className="mb-6 leading-relaxed">では、実績がない状態から、どのようにしてSFCの教授を納得させる志望理由書を作ればよいのでしょうか。</p>
          <p className="mb-6 leading-relaxed">答えは「あなた自身の原体験を極限まで深掘りすること」にあります。</p>
          <p className="mb-6 leading-relaxed">しかし、自分一人の頭の中で考えていても、視点はすぐにループし、行き詰まってしまいます。</p>
          <p className="mb-10 leading-relaxed text-lg">だからこそ佐藤塾では、<ArticleHighlight>24時間稼働のAIとの壁打ちで圧倒的な量の思考をこなし、塾長との1on1でその質を極限まで高める</ArticleHighlight>という環境を用意しています。</p>
          <p className="mb-6 leading-relaxed">AIがあなたの思考の「抜け漏れ」を的確に洗い出し、塾長である私がSFCの合格基準に照らし合わせてロジックを磨き上げます。</p>
          <p className="mb-6 leading-relaxed">このプロセスを経ることで、借り物ではない、あなただけの確固たる「問い（テーマ）」が必ず見つかります。</p>

          <ArticleNavigation
            back={{ title: "AO入試 対策記事一覧に戻る", href: "/ao-guide/articles" }}
            next={{
              title: "【テーマ設定編】自分だけの研究テーマを見つける3ステップ",
              href: "/ao-guide/theme",
            }}
          />

          <AuthorBox />

          <ArticleCTA />
        </div>
      </ArticleContainer>
    </main>
  );
}
