import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, TableOfContents } from "@/components/article-ui";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid, Search, TrendingUp } from "lucide-react";
import Link from "next/link";

const tocItems = [
  { id: "sec1", label: "現代文の癖を捨てろ。「設問からの逆算」が全て" },
  { id: "sec2", label: "グラフや表の「変曲点」と「異常値」に社会課題が潜む" },
  { id: "sec3", label: "複数の資料を「クロス分析」して独自の結論を生む" },
];

const articleTitle = "【資料読解編】SFC特有の「膨大な資料」から使えるデータを瞬時に見抜くテクニック";
const articleDescription = "総合政策・環境情報学部で出題される大量のグラフや文章。すべてを読もうとして時間切れになる受験生へ、自分の主張を補強する「エビデンス」だけを素早く抽出する読解法を解説します";

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

export default function DataReadingPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-slate-50 min-h-screen">
      <ArticleContainer>
        <ArticleHeader 
          theme="essay"
          category="SFC小論文 対策ガイド"
          title={<>【資料読解編】SFC特有の「膨大な資料」から<br className="hidden md:block" />使えるデータを瞬時に見抜くテクニック</>}
          readTime={6}
        />

        <TableOfContents items={tocItems} />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              慶應SFC（特に環境情報学部）の小論文を開いた瞬間、その資料の多さに圧倒された経験はありませんか？数ページにわたる専門的な文章、複雑な統計データ、そして見慣れない散布図やグラフ群。これらを「1ページ目から最後まで真面目に読み込もう」とする受験生は、確実に時間切れとなり不合格になります。
            </p>
            <p>
              SFCの教授陣は、あなたの「現代文的な読解力」を測りたいわけではありません。彼らが求めているのは、社会に散らばるノイズだらけの情報の中から、<strong>自分の仮説を証明するための「エビデンス（証拠）」を素早く抽出し、論理を組み立てる能力</strong>です。本記事では、SFC小論文を攻略するための「逆算型リーディング」とデータの読み解き方を解説します。
            </p>

            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6" id="sec1">
              1. 現代文の癖を捨てろ。「設問からの逆算」が全て
            </h2>
            <p>
              多くの受験生が陥る罠が、「資料1から順に読み、内容を要約しようとする」ことです。SFC小論文において、資料は「読む」ものではなく、あなたの主張を補強するために「使う（検索する）」ものです。
            </p>
            
            <div className="bg-slate-50 border-l-4 border-[#800000] p-6 my-8 rounded-r-lg">
              <h4 className="font-bold text-[#800000] mt-0 mb-2 flex items-center">
                <Search size={18} className="mr-2" />
                佐藤塾メソッド：逆算型スキャニング
              </h4>
              <p className="text-slate-700 text-sm mb-0">
                1. <strong>絶対に資料から読まない。</strong>まず「最終設問（問2や問3）」を読み、自分が何を書くべきか（ゴール）を設定する。<br />
                2. そのゴールを達成・証明するために「どのようなデータ（原因・現状・結果）が必要か」を頭の中で仮説立てる。<br />
                3. 仮説の証明に必要なキーワードや数値だけを、膨大な資料の山から「スキャン」して拾い上げる。不要な段落は丸ごと読み飛ばす勇気を持つ。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6" id="sec2">
              2. グラフや表の「変曲点」と「異常値」に社会課題が潜む
            </h2>
            <p>
              データやグラフが提示されている場合、全体を漫然と眺めて「〇〇は増加傾向にある」などと当たり前のことを書いても評価はゼロです。SFCの作問者がわざわざそのデータを用意したのには、必ず「気づいてほしい意図」があります。
            </p>
            <ul className="space-y-4 my-6">
              <li className="flex items-start">
                <TrendingUp className="mr-3 text-[#C5A059] flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>急激な変化（変曲点）：</strong><br />
                  ある年を境に急激に数値が上がっている（または下がっている）箇所はないか。そこには必ず「法改正」「技術革新」「パンデミック」などの外部要因（トリガー）が存在します。
                </div>
              </li>
              <li className="flex items-start">
                <TrendingUp className="mr-3 text-[#C5A059] flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>逆転現象と異常値：</strong><br />
                  「AよりもBの方が高いはず」という常識に反して、逆転しているポイントはないか。全体の傾向から明らかに外れている外れ値（異常値）はないか。そこに着目することで、「なぜそのような現象が起きているのか？」という独自の問題発見に繋がります。
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6" id="sec3">
              3. 複数の資料を「クロス分析」して独自の結論を生む
            </h2>
            <p>
              SFCの小論文が難解とされる最大の理由は、「資料Aの内容をまとめるだけ」では解答できない点にあります。高得点を獲得する答案は、必ず<strong>複数の資料を論理的に結びつけて（クロス分析して）</strong>書かれています。
            </p>
            <p>
              例えば、「資料1（テクノロジーの進化に関する文章）」と「資料3（地方の高齢化率を示すグラフ）」があったとします。凡庸な受験生はそれぞれを別々に論じますが、合格する受験生は「資料3で示された地方の高齢化問題（課題）を、資料1のテクノロジー（解決策）を用いてどう解決するか」というように、資料同士を掛け合わせて独自の解決プロセスを提示します。
            </p>

            <div className="bg-[#002147] text-white p-8 rounded-2xl mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 font-serif text-white">「情報に溺れる側」から「情報を操る側」へ。</h3>
              <p className="mb-8 text-blue-100 text-sm md:text-base">
                SFCの過去問を前に、時間が足りず手が止まってしまう方へ。<br />
                佐藤塾のAI伴走指導なら、膨大な資料の「どこに着目し、どう結びつけるべきか」という思考プロセスを24時間いつでも壁打ち・添削可能です。
              </p>
              <Link href="/#contact">
                <Button className="bg-[#C5A059] hover:bg-[#B38D45] text-white font-bold py-6 px-10 rounded-full text-lg w-full sm:w-auto shadow-lg shadow-[#C5A059]/20 transition-all hover:scale-105">
                  無料相談でメソッドを体験する
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <AuthorBox />

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 border-t border-slate-200">
          <Link className="flex items-center text-slate-500 hover:text-[#002147] transition-colors group w-full sm:w-auto" href="/guide/past-exams">
            <ArrowRight className="mr-2 rotate-180 transform transition-transform group-hover:-translate-x-1" size={20}/>
            <div className="text-sm">
              <div className="text-slate-400 mb-1">前の記事</div>
              <div className="font-bold">過去問演習編</div>
            </div>
          </Link>
          <Link className="text-slate-400 hover:text-[#002147] transition-colors p-2" href="/guide/essay/articles">
            <LayoutGrid size={24}/>
          </Link>
          <Link className="flex items-center text-right text-[#002147] hover:text-[#C5A059] transition-colors group w-full sm:w-auto justify-end" href="/guide/time-management">
            <div className="text-sm">
              <div className="text-slate-400 mb-1">次の記事</div>
              <div className="font-bold">時間配分編</div>
            </div>
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20}/>
          </Link>
        </div>
      </ArticleContainer>
    </main>
  );
}
