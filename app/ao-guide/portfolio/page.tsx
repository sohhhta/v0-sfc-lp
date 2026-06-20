import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, ArticleNavigation, TableOfContents } from "@/components/article-ui";
import { Button } from "@/components/ui/button";
import { FileText, Lightbulb } from "lucide-react";
import Link from "next/link";

const articleTitle = "【任意提出資料編】「活動実績ゼロ」からでも勝負できるポートフォリオの作り方";
const articleDescription = "「アプリ開発や起業の経験がないとSFCは受からない」という誤解を解き、活動実績ゼロからでも教授の心を動かす「思考プロセスの視覚化」によるポートフォリオ作成術を解説します。";

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
  { id: "section-1", title: "1. 「結果」ではなく「プロセス」を視覚化する" },
  { id: "section-2", title: "2. いますぐ始められる「3つの行動実績」" },
];

export default function PortfolioPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <ArticleContainer>
        <ArticleHeader
          theme="ao"
          category="SFC AO入試 対策ガイド"
          title={<>【任意提出資料編】「活動実績ゼロ」からでも<br className="hidden md:block" />勝負できるポートフォリオの作り方</>}
          readTime={6}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              SFCのAO入試における「任意提出資料（ポートフォリオ）」。この言葉を聞いて、「自分にはアプリ開発の経験も、起業の経験も、ビジネスコンテストでの優勝経験もないから提出できるものがない」と絶望している受験生は非常に多いです。
            </p>
            <p>
              しかし、それは大きな誤解です。SFCの教授陣は、高校生に対してプロ顔負けの「完成された実績」など求めていません。彼らが見たいのは、あなたの<strong>「探究心の深さ」と「試行錯誤の軌跡（思考プロセス）」</strong>です。本記事では、目立つ実績がゼロの状態からでも、教授を唸らせるポートフォリオを作り上げる佐藤塾のメソッドを公開します。
            </p>

            <TableOfContents items={tocItems} />

            <h2 id="section-1" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              1. 「結果」ではなく「プロセス」を視覚化する
            </h2>
            <p>
              大会での受賞歴や資格といった「結果」の羅列は、実はSFCの教授にとってそこまで魅力的な資料ではありません。なぜなら、それだけでは「あなたが大学に入ってからどう学び、どう困難を乗り越えるか」という<strong>再現性</strong>が測れないからです。
            </p>
            <p>
              活動実績がないのであれば、あなたがこれまでに「何を調べ、何を考え、誰に話を聞きに行き、どう壁にぶつかっているのか」という<strong>現在進行形の泥臭いプロセス</strong>を資料化すれば良いのです。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <FileText className="text-[#002147] mb-3" size={24} />
                <h4 className="font-bold text-[#002147] mt-0 mb-2">NGなポートフォリオ</h4>
                <ul className="text-sm text-slate-700 m-0 pl-5">
                  <li>・賞状や資格証明書のコピーだけ</li>
                  <li>・部活の大会結果の羅列</li>
                  <li>・文字ばかりで論文のような資料</li>
                </ul>
              </div>
              <div className="bg-[#C5A059]/10 p-6 rounded-xl border border-[#C5A059]/30">
                <Lightbulb className="text-[#C5A059] mb-3" size={24} />
                <h4 className="font-bold text-[#800000] mt-0 mb-2">合格するポートフォリオ</h4>
                <ul className="text-sm text-slate-700 m-0 pl-5">
                  <li>・テーマに関する大量の読書・考察ノート</li>
                  <li>・専門家へアポを取りインタビューした記録</li>
                  <li>・現場（フィールドワーク）での写真と気付き</li>
                </ul>
              </div>
            </div>

            <h2 id="section-2" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              2. いますぐ始められる「3つの行動実績」
            </h2>
            <p>
              「過去に実績がない」のであれば、志望理由書を書きながら「今、この瞬間から実績（行動）を作る」しかありません。以下の3つは、佐藤塾の塾生が提出の数ヶ月前から実践し、見事なポートフォリオへと昇華させている具体的なアクションです。
            </p>

            <ul className="space-y-6 my-6">
              <li className="flex items-start">
                <div className="bg-[#002147] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1 mr-3 text-sm">1</div>
                <div>
                  <strong>マインドマップと文献調査の記録：</strong><br />
                  自分のテーマについて、どんな本や論文を読み、どう思考が変化したかをマインドマップや図解でまとめます。「〇〇という本を読み、Aという仮説は間違っていると気づき、Bの方向へシフトした」という挫折と修正の記録は、極めて高く評価されます。
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#002147] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1 mr-3 text-sm">2</div>
                <div>
                  <strong>当事者へのヒアリング（一次情報の獲得）：</strong><br />
                  ネットの検索結果（二次情報）だけで構成された資料はすぐに見抜かれます。あなたのテーマが「教育」なら学校の先生や塾の生徒に、「地域活性」なら市役所の担当者に、勇気を出してインタビューを行い、その議事録と考察をまとめましょう。
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#002147] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1 mr-3 text-sm">3</div>
                <div>
                  <strong>未完成のプロトタイプ（模型・ワイヤーフレーム）：</strong><br />
                  解決策のアイデアがあるなら、完成していなくても良いので「形」にしてみましょう。アプリなら画面の絵（ワイヤーフレーム）を描き、プロダクトなら紙粘土や段ボールで模型を作ります。その写真を載せるだけで、熱量は10倍伝わります。
                </div>
              </li>
            </ul>

            <div className="bg-[#002147] text-white p-8 rounded-2xl mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 font-serif text-white">「あなただけの思考プロセス」を武器にする</h3>
              <p className="mb-8 text-blue-100 text-sm md:text-base">
                「自分には何もない」と諦める前に、佐藤塾の無料相談にお越しください。<br />
                AI壁打ちとプロの視点で、あなたの過去の経験や日々の思考の中から、SFC教授の心を動かす「ポートフォリオの種」を必ず見つけ出します。
              </p>
              <Link href="/#contact-form">
                <Button className="bg-[#C5A059] hover:bg-[#B38D45] text-white font-bold py-6 px-10 rounded-full text-lg w-full sm:w-auto shadow-lg shadow-[#C5A059]/20 transition-all hover:scale-105">
                  無料相談でポートフォリオの種を見つける
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <AuthorBox />

        <ArticleNavigation
          prev={{ title: "【志望理由書編】SFC教授の心を動かす「志望理由書」の書き方と構成", href: "/ao-guide/statement" }}
          back={{ title: "AO入試 対策記事一覧に戻る", href: "/ao-guide/articles" }}
          next={{ title: "【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方", href: "/ao-guide/interview" }}
        />
      </ArticleContainer>
    </main>
  );
}