import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, ArticleNavigation } from "@/components/article-ui";
import { TableOfContents } from "@/components/table-of-contents";
import { MessageSquare, Target, Lightbulb, CheckCircle2 } from "lucide-react";

const articleTitle = "【資料読解編】膨大な資料から使えるデータを瞬時に見抜くテクニック";
const articleDescription = "総合政策・環境情報学部で出題される大量のグラフや文章。すべてを読もうとして時間切れになる受験生へ、自分の主張を補強する「エビデンス」だけを素早く抽出する読解法を解説します。";

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
  { id: "section-1", title: "1. なぜSFCの小論文には膨大な資料がつくのか？" },
  { id: "section-2", title: "2. 資料を「最初から全部読む」のは罠" },
  { id: "section-3", title: "3. 自分の主張を補強する「エビデンス」の探し方" },
  { id: "section-4", title: "【実録】「全部読まないと不安」から脱却し、必要なデータだけを射抜く視点へ" }
];

export default function DataReadingPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <ArticleContainer>
        <ArticleHeader
          category="SFC小論文 対策ガイド"
          title={<>【資料読解編】膨大な資料から使えるデータを<br className="hidden md:block" />瞬時に見抜くテクニック</>}
          readTime={6}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              慶應SFCの小論文を開いた瞬間、多くの受験生が絶望します。それは、問題文の後に続く「数ページから数十ページにも及ぶ膨大な資料（グラフ、論文の抜粋、記事など）」の存在です。
            </p>
            <p>
              「これを全部読んでから書かないといけないのか…」と思った時点で、すでにSFCの仕掛けた罠にハマっています。本記事では、時間切れを防ぎ、自分の主張を強力に裏付けるための「エビデンス」だけを素早く抽出する資料読解のテクニックを解説します。
            </p>

            <TableOfContents items={tocItems} />

            <h2 id="section-1" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              1. なぜSFCの小論文には膨大な資料がつくのか？
            </h2>
            <p>
              SFCがわざわざ膨大な資料を用意する理由は「読解力を試すため」ではありません。大学での研究活動と同じように、<strong>「与えられた情報の中から、自分の問題解決に必要なデータを見つけ出し、論理の構築に活用できるか」</strong>を測るためです。資料は「読むべき課題」ではなく「使える武器（ツール）」なのです。
            </p>

            <h2 id="section-2" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              2. 資料を「最初から全部読む」のは罠
            </h2>
            <p>
              真面目な受験生ほど、資料Aから順に一言一句読もうとします。しかし、120分という制限時間の中でそれをやってしまうと、肝心の「自分の解決策を考え、文章を構成し、執筆する」時間が確実になくなります。SFCの小論文において、資料をすべて熟読することは物理的に不可能な設計になっていると心得ましょう。
            </p>

            <h2 id="section-3" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              3. 自分の主張を補強する「エビデンス」の探し方
            </h2>
            <p>
              正しいアプローチは「スキャニング（拾い読み）」です。まず設問を読み、自分がどのような方向性で解答を作るか（仮説・アウトライン）を決めます。その上で、「自分の主張の根拠となるデータはどこか？」「予想される反論に対する材料はないか？」という<strong>明確な目的（問い）を持って資料の海に潜る</strong>のです。目的があれば、見出しや図表のキャプションを見るだけで、必要な情報がどこにあるかが瞬時に分かります。
            </p>

            {/* --- ここから加筆セクション --- */}
            <h2 id="section-4" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-16 mb-6">
              【実録】「全部読まないと不安」から脱却し、必要なデータだけを射抜く視点へ
            </h2>
            <p>
              ここで、佐藤塾の指導によって「資料の沼」から抜け出し、見事SFC合格を果たしたFさんのケーススタディをご紹介します。
            </p>
            <p>
              Fさんは非常に真面目な性格で、入塾当初は「配られた資料A〜Eを、隅から隅まで一言一句逃さず読まないと不安になる」という状態でした。その結果、読むだけで60分以上を消費してしまい、肝心の「自分の意見を構成して書く」時間が圧倒的に足りず、常に文字数不足でタイムオーバーになっていました。
            </p>
            <p>
              この致命的なタイムロスの原因を特定し、読解のスタンスを180度変えたのが、<strong>塾長との「思考プロセス分析（1on1）」</strong>です。
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 my-8 space-y-6">
              {/* 塾長からの問い */}
              <div className="flex items-start">
                <div className="bg-[#002147] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#002147] mb-1">塾長からの問い（1on1面談）</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「Fさん、資料を読むときに『何か良いことが書いてないかな』と受け身で読んでいないかな？ SFCの資料は、問題解決の『材料集』なんだ。スーパーに買い物に行く時、夕飯のメニューを決めずに全部の棚を端から端まで見ないよね？」</p>
                </div>
              </div>

              {/* 生徒の深掘り */}
              <div className="flex items-start">
                <div className="bg-[#800000] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#800000] mb-1">Fさんの気づき</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「あ…。たしかに、何も考えずに『とりあえず読まなきゃ』と思って読んでいました。だから途中で何が大事なのか分からなくなって、何度も同じところを読み返して時間がなくなっていたんですね。」</p>
                </div>
              </div>

              {/* 解決策の提示 */}
              <div className="flex items-start">
                <div className="bg-[#C5A059] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 mb-1">「読む」から「証拠を探す」へのパラダイムシフト</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「そう、だから資料を読む前に『仮説』を立てるんだ。設問を見て『自分はこういう主張でいこう。そのためには、これを裏付けるデータ（エビデンス）が必要だ』と当たりをつけてから資料に向かう。すると、必要な情報だけが目に飛び込んでくるようになるよ。」</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-xl border border-green-100 my-8 flex items-start">
              <CheckCircle2 className="text-green-600 mr-4 mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-green-800 font-bold text-lg mt-0 mb-3">読解時間が半減し、構成に時間を割けるように</h4>
                <p className="text-sm text-green-800 mb-0 leading-relaxed">
                  この「仮説思考」による資料の拾い読み（スキャニング）をAI壁打ちで徹底的に反復した結果、Fさんの資料読解時間は半分以下に短縮されました。余った時間を「論理構成のブラッシュアップ」に充てられるようになり、見事な合格答案を安定して出力できるようになったのです。
                </p>
              </div>
            </div>
            {/* --- ここまで加筆セクション --- */}

          </div>
        </div>

        <AuthorBox />

        <ArticleNavigation
          prev={{ title: "【時間配分編】120分をどう使う？構成メモ作成から執筆までの最適タイムマネジメント", href: "/guide/time-management" }}
          back={{ title: "SFC小論文 対策記事一覧に戻る", href: "/guide/essay/articles" }}
          next={{ title: "【頻出テーマ編】SFC小論文で狙われる「テクノロジーと社会問題」の攻略法", href: "/guide/tech-society" }}
        />
      </ArticleContainer>
    </main>
  );
}