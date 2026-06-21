import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, ArticleNavigation } from "@/components/article-ui";
import { TableOfContents } from "@/components/table-of-contents";
import { MessageSquare, Target, Lightbulb, CheckCircle2 } from "lucide-react";

const articleTitle = "【過去問演習編】白紙から合格答案を組み立てる思考プロセスの可視化";
const articleDescription = "SFC小論文の過去問演習において、膨大な資料をどう読み解き、どう論理を構築するのか。設問の把握からアウトライン作成、当事者意識の示し方まで、具体的なプロセスを解説します。";

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
  { id: "section-1", title: "1. 過去問は「解く」のではなく「分析する」" },
  { id: "section-2", title: "2. 白紙からアウトラインを構築する3ステップ" },
  { id: "section-3", title: "3. 「当事者意識」を答案に落とし込む" },
  { id: "section-4", title: "【実録】「ただ書いて満足」から脱却し、出題者の意図をハックする視点へ" }
];

export default function PastExamsPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <ArticleContainer>
        <ArticleHeader
          category="SFC小論文 対策ガイド"
          title={<>【過去問演習編】白紙から合格答案を組み立てる<br className="hidden md:block" />思考プロセスの可視化</>}
          readTime={7}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              基礎的な書き方や資料の読み方を学んだら、次はいよいよ過去問演習です。しかし、「とりあえず過去問を解いて、模範解答を読んで満足する」という勉強法では、いつまで経ってもSFCの小論文には太刀打ちできません。
            </p>
            <p>
              本記事では、真っ白な原稿用紙から「合格レベルの答案」を確実かつシステマティックに組み立てるための、具体的な思考プロセスと過去問の活用法を解説します。
            </p>

            <TableOfContents items={tocItems} />

            <h2 id="section-1" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              1. 過去問は「解く」のではなく「分析する」
            </h2>
            <p>
              過去問をただの「練習問題」として扱ってはいけません。SFCの過去問は、教授陣からの「私たちはこういう思考ができる学生を求めている」という強烈なメッセージです。設問の意図を正確に読み取り、「なぜこの資料が提示されているのか」「どのような論理展開が期待されているのか」を分析することが、過去問演習の最大の目的です。
            </p>

            <h2 id="section-2" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              2. 白紙からアウトラインを構築する3ステップ
            </h2>
            <p>
              いきなり原稿用紙のマス目を埋め始めるのは危険です。必ず以下のステップでアウトライン（構成案）を構築しましょう。
            </p>
            <ul className="space-y-4 my-6">
              <li><strong>① 設問の要求整理：</strong> 何を、どの順番で、どの程度の分量で書くべきかをリストアップする。</li>
              <li><strong>② 材料の配置：</strong> 資料から抽出したエビデンスや自分のアイデアを、PREP法などの論理の型に当てはめる。</li>
              <li><strong>③ 論理の飛躍チェック：</strong> 各段落のつながりが自然か、第三者が読んで納得できるかを確認する。</li>
            </ul>

            <h2 id="section-3" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              3. 「当事者意識」を答案に落とし込む
            </h2>
            <p>
              SFCの教授陣は、評論家のように客観的な意見だけを述べる学生を評価しません。「その社会問題に対して、あなた自身はどう関わり、どう解決していくのか」という当事者意識（オーナーシップ）が求められます。自分の過去の経験や、将来SFCで学びたいこととリンクさせて論じることで、答案の説得力は飛躍的に高まります。
            </p>

            {/* --- ここから加筆セクション --- */}
            <h2 id="section-4" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-16 mb-6">
              【実録】「ただ書いて満足」から脱却し、出題者の意図をハックする視点へ
            </h2>
            <p>
              ここで、過去問を10年分以上解きながらも一向に手応えを掴めず苦しんでいたHさんが、佐藤塾の指導で「合格答案の設計図」を手に入れたケーススタディをご紹介します。
            </p>
            <p>
              Hさんは非常に勉強熱心でしたが、過去問演習のやり方が「時間を測って書き、模範解答を見て一喜一憂するだけ」という作業になっていました。そのため、少しでも傾向が変わると手も足も出なくなり、点数が安定しませんでした。
            </p>
            <p>
              この「作業としての演習」から抜け出させたのが、<strong>佐藤塾のAI添削と、塾長による「出題者視点のインストール（1on1）」</strong>です。
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 my-8 space-y-6">
              {/* 塾長からの問い */}
              <div className="flex items-start">
                <div className="bg-[#002147] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#002147] mb-1">塾長からの問い（1on1面談）</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「Hさん、たくさん過去問を解いて偉いね。でも、解いた後に『この問題を作った教授は、受験生のどういう能力を試したかったのか？』まで考えているかな？ 模範解答と自分の答案を見比べるだけじゃなくて、採点基準そのものを想像してみよう。」</p>
                </div>
              </div>

              {/* 生徒の深掘り */}
              <div className="flex items-start">
                <div className="bg-[#800000] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#800000] mb-1">Hさんの気づき</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「採点基準の想像…。考えたこともありませんでした。ただ『上手な文章』が書ければ受かると思っていました。でも、教授がわざわざこの資料を用意したってことは、そこから論理を組み立てる能力を見たいってことですよね。」</p>
                </div>
              </div>

              {/* 解決策の提示 */}
              <div className="flex items-start">
                <div className="bg-[#C5A059] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 mb-1">「採点者視点」によるアウトライン設計</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「その通り。だから、いきなり書き始めるのではなく、まずは『出題者の意図を満たすアウトライン』だけを徹底的に作る訓練をしよう。AI壁打ちを使って、『この構成で教授は納得するか？』を何度もシミュレーションするんだ。」</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-xl border border-green-100 my-8 flex items-start">
              <CheckCircle2 className="text-green-600 mr-4 mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-green-800 font-bold text-lg mt-0 mb-3">自己満足から脱却し、安定した合格ラインへ</h4>
                <p className="text-sm text-green-800 mb-0 leading-relaxed">
                  Hさんはその後、「解答を書き切る」ことよりも「アウトラインを練る」ことに時間を割くようになりました。AIによる客観的な評価と塾長との対話を通じて「出題者視点」をインストールした結果、どんな奇問が出ても確実に合格ラインを超える論理構成を瞬時に組み立てられるようになり、見事合格を掴み取りました。
                </p>
              </div>
            </div>
            {/* --- ここまで加筆セクション --- */}

          </div>
        </div>

        <AuthorBox />

        <ArticleNavigation
          prev={{ title: "【頻出テーマ編】SFC小論文で狙われる「テクノロジーと社会問題」の攻略法", href: "/guide/tech-society" }}
          back={{ title: "SFC小論文 対策記事一覧に戻る", href: "/guide/essay/articles" }}
        />
      </ArticleContainer>
    </main>
  );
}