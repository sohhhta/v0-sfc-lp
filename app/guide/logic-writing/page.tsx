import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, ArticleNavigation } from "@/components/article-ui";
import { TableOfContents } from "@/components/table-of-contents";
import { MessageSquare, Target, Lightbulb, CheckCircle2 } from "lucide-react";

const articleTitle = "【実践編】合格点に届かない理由とロジカルライティング";
const articleDescription = "多くの受験生が陥る『設問の置き去り』を解決する。設問の正確な把握、論理的な構成、体系的な解答からなるロジカルライティングの手順を解説。";

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
  { id: "section-1", title: "1. なぜあなたの答案は「合格点」に届かないのか？" },
  { id: "section-2", title: "2. SFCが求める「ロジカルライティング」の基本" },
  { id: "section-3", title: "3. 設問の要求を100%満たす文章構成法" },
  { id: "section-4", title: "【実録】独創的な「ポエム」が、隙のない「合格答案」へと覚醒した軌跡" }
];

export default function LogicWritingPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <ArticleContainer>
        <ArticleHeader
          category="SFC小論文 対策ガイド"
          title={<>【実践編】合格点に届かない理由と<br className="hidden md:block" />ロジカルライティング</>}
          readTime={7}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              SFCの小論文対策において、多くの受験生が直面する壁。それは「自分ではよく書けたと思うのに、なぜか点数が伸びない（合格できない）」という現象です。
            </p>
            <p>
              文章力がある、アイデアが面白い、字数も埋まっている。それなのになぜ不合格になるのか？本記事では、その致命的な原因である「設問の置き去り」という罠と、それを防ぎ確実に合格点を狙うための「ロジカルライティング」の基本手順を解説します。
            </p>

            <TableOfContents items={tocItems} />

            <h2 id="section-1" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              1. なぜあなたの答案は「合格点」に届かないのか？
            </h2>
            <p>
              不合格になる答案の9割に共通する特徴があります。それは<strong>「設問に答えていない」</strong>ということです。
            </p>
            <p>
              SFCの小論文は、テーマが魅力的であるがゆえに、受験生は「自分の書きたいこと」「自分が持っている知識」を披露する方に意識が向いてしまいます。結果として、問題文で問われている「〇〇を踏まえて」「〇〇について論じなさい」という<strong>出題者の要求（制約条件）を無視した、ただの"独りよがりなポエム"</strong>が完成してしまいます。
            </p>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-6">
              <h4 className="font-bold text-[#800000] mt-0 mb-2">よくある「設問無視」のパターン</h4>
              <ul className="text-sm text-slate-700 m-0 pl-5">
                <li>・「資料AとBの対立点を指摘し〜」とあるのに、資料に全く触れていない。</li>
                <li>・「具体的な解決策を提案せよ」とあるのに、問題の背景分析だけで終わっている。</li>
                <li>・問われていることではなく、自分が過去に探究したテーマを強引に語っている。</li>
              </ul>
            </div>

            <h2 id="section-2" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              2. SFCが求める「ロジカルライティング」の基本
            </h2>
            <p>
              SFCが求めているのは、小説家のような美しい表現力ではありません。<strong>「与えられた前提（資料や設問）を正確に読み取り、論理的に筋道を立てて、自分の主張を第三者に納得させる力」</strong>です。
            </p>
            <p>
              そこで必要になるのが「ロジカルライティング」のスキルです。どんなに斬新なアイデアでも、論理という器に乗っていなければ、大学の学問の場（研究論文など）では評価されません。
            </p>

            <h2 id="section-3" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              3. 設問の要求を100%満たす文章構成法
            </h2>
            <p>
              論理的な文章を書き、かつ「設問に答える」ための最も確実な方法は、<strong>書き始める前に「構成メモ（アウトライン）」を徹底的に作り込むこと</strong>です。
            </p>
            <ul className="space-y-4 my-6">
              <li>
                <strong>① 設問の分解：</strong> まずは問題文を読み、出題者が「何を求めているか（タスク）」を箇条書きで抜き出します。
              </li>
              <li>
                <strong>② PREP法による骨組み作成：</strong> 「Point（結論）」「Reason（理由）」「Example（具体例・資料の引用）」「Point（結論）」の順番で、段落の構成を決めます。
              </li>
              <li>
                <strong>③ 設問との照らし合わせ：</strong> 作った骨組みが、①で抜き出したタスクをすべて網羅しているかを確認します。
              </li>
            </ul>
            <p>
              この「構成案」の段階で勝負の8割は決まっています。文章を書き出すのは、構成案が完全に固まってからです。
            </p>

            {/* --- ここから加筆セクション --- */}
            <h2 id="section-4" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-16 mb-6">
              【実録】独創的な「ポエム」が、隙のない「合格答案」へと覚醒した軌跡
            </h2>
            <p>
              ここで、佐藤塾で実際に「ロジカルライティング」を身につけ、逆転合格を果たしたEくんのケーススタディをご紹介します。
            </p>
            <p>
              Eくんは発想力こそ豊かでしたが、入塾当初の答案は「自分の書きたいアイデアを書き連ねるだけ」の、いわば独創的なポエムでした。設問の要求（条件）を無視しているため、SFCの基準では残念ながら「採点対象外」となってしまう状態でした。
            </p>
            <p>
              この根本的なズレを矯正したのが、<strong>佐藤塾のAI添削と、塾長による「徹底的な思考の整理（1on1）」</strong>です。
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 my-8 space-y-6">
              {/* 塾長からの問い */}
              <div className="flex items-start">
                <div className="bg-[#002147] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#002147] mb-1">塾長からの問い（1on1面談）</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「Eくんのアイデアはすごく面白い。でも、今回の設問は『資料A〜Cを踏まえて、問題のボトルネックを指摘せよ』だよね？Eくんの答案には、資料の記述が1つも使われていないよ。これだと"会話のキャッチボール"が成立していないよね？」</p>
                </div>
              </div>
              
              {/* 生徒の深掘り */}
              <div className="flex items-start">
                <div className="bg-[#800000] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#800000] mb-1">Eくんの気づき</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「ハッとしました…。自分のアイデアをアピールすることばかり考えて、"出題者が何を聞いているか"を完全に無視していました。でも、どう構成すれば論理的になるのか分かりません。」</p>
                </div>
              </div>

              {/* 解決策の提示 */}
              <div className="flex items-start">
                <div className="bg-[#C5A059] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 mb-1">論理の型（PREP法）のインストール</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「大丈夫、そこで『型』を使うんだ。まずはPREP法（結論・理由・具体例・結論）の骨組みだけを問題用紙の余白に書こう。そして『具体例（E）』の部分に、必ず資料から見つけた根拠を配置するルールを徹底してみて。」</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-xl border border-green-100 my-8 flex items-start">
              <CheckCircle2 className="text-green-600 mr-4 mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-green-800 font-bold text-lg mt-0 mb-3">「ひらめき」を「説得力」に変える力</h4>
                <p className="text-sm text-green-800 mb-0 leading-relaxed">
                  その後、EくんはAI添削を使ってこの「型に当てはめる訓練」を週に何度も繰り返しました。結果、持ち前の豊かな発想力を「誰もが納得する強固な論理」という器に乗せることができるようになり、見事SFCの合格を勝ち取ったのです。
                </p>
              </div>
            </div>
            {/* --- ここまで加筆セクション --- */}

          </div>
        </div>

        <AuthorBox />

        <ArticleNavigation
          back={{ title: "SFC小論文 対策記事一覧に戻る", href: "/guide/essay/articles" }}
          next={{ title: "【時間配分編】120分をどう使う？構成メモ作成から執筆までの最適タイムマネジメント", href: "/guide/time-management" }}
        />
      </ArticleContainer>
    </main>
  );
}
