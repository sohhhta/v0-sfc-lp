import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, ArticleNavigation } from "@/components/article-ui";
import { TableOfContents } from "@/components/table-of-contents";
import { MessageSquare, Target, Lightbulb, CheckCircle2 } from "lucide-react";

const articleTitle = "【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方";
const articleDescription = "SFCのAO面接は「圧迫面接」と言われがちですが、実は違います。想定問答の暗記を捨て、教授と対等に議論し、面接の主導権を握るためのマインドセットと準備方法を解説します。";

export const metadata: Metadata = {
  title: `${articleTitle} | 佐藤塾`,
  description: articleDescription,
  openGraph: {
    title: `${articleTitle} | 佐藤塾`,
    description: articleDescription,
    images: [
      {
        url: `https://www.sfc-satojuku.com/api/og?title=${encodeURIComponent("【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方")}`,
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
    images: [`https://www.sfc-satojuku.com/api/og?title=${encodeURIComponent("【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方")}`],
  },
};

const tocItems = [
  { id: "section-1", title: "1. SFCの「圧迫面接」の正体は「愛のある深掘り」" },
  { id: "section-2", title: "2. 「想定問答の暗記」が確実に不合格を招く理由" },
  { id: "section-3", title: "3. 面接の主導権を握る「対話力」の鍛え方" },
  { id: "section-4", title: "【実録】「暗記ロボット」から脱却し、白熱した議論を楽しんで合格した軌跡" }
];

export default function InterviewPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <ArticleContainer>
        <ArticleHeader
          theme="ao"
          category="SFC AO入試 対策ガイド"
          title={<>【面接対策編】面接官の「圧迫」を「対話」に変える、<br className="hidden md:block" />主導権の握り方</>}
          readTime={6}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              書類選考を突破し、いよいよ迎えるSFCのAO入試・2次面接。ネット上には「SFCの面接は圧迫面接だ」「教授に厳しく詰められて泣いてしまった」といった恐ろしい噂が溢れています。
            </p>
            <p>
              しかし、SFCの教授陣は決して受験生をいじめたいわけではありません。本記事では、SFCの面接の真の目的を明らかにし、多くの受験生が陥る「暗記の罠」から抜け出して、面接官と対等に議論するための佐藤塾流マインドセットを解説します。
            </p>

            <TableOfContents items={tocItems} />

            <h2 id="section-1" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              1. SFCの「圧迫面接」の正体は「愛のある深掘り」
            </h2>
            <p>
              「なぜその手法で解決できると思うの？」「それ、既存のサービスで十分じゃない？」。SFCの面接では、志望理由書やポートフォリオの痛いところを容赦なく突かれます。
            </p>
            <p>
              これを「圧迫」と捉えて萎縮してしまう受験生が多いですが、実はこれは教授からの<strong>「愛のある深掘り（ストレステスト）」</strong>です。彼らは「この学生は、自分の研究テーマの限界や弱点をどこまで客観視できているか」「予想外の指摘を受けたときに、どう思考をフル回転させるか」という、研究者としての『知的な耐久力』を見ているのです。
            </p>

            <h2 id="section-2" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              2. 「想定問答の暗記」が確実に不合格を招く理由
            </h2>
            <p>
              面接が不安なあまり、分厚い「想定問答集」を作り、一言一句暗記しようとする受験生がいます。しかし、SFCの面接においてこれは<strong>最悪の悪手</strong>です。
            </p>
            <p>
              暗記した原稿を読み上げるだけの学生は、教授からすれば「対話が成立しない人間（＝大学で一緒に研究できない人間）」に映ります。想定外の質問が来た瞬間にフリーズしてしまい、不自然な沈黙が流れてジ・エンドとなります。面接はスピーチコンテストではなく、血の通った「コミュニケーション」なのです。
            </p>

            <h2 id="section-3" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              3. 面接の主導権を握る「対話力」の鍛え方
            </h2>
            <p>
              では、どうすれば良いのか。それは<strong>「キーワード思考」と「逆質問」</strong>です。文章を丸暗記するのではなく、「聞かれたらこの3つのキーワードを使って説明する」というフックだけを用意しておきます。
            </p>
            <p>
              そして、教授から鋭い指摘を受けた時は、「おっしゃる通り、その点は私も課題だと感じていました。教授の専門分野である〇〇の視点から見ると、どのようなアプローチが有効だとお考えですか？」と、逆に議論を広げるのです。ここまで来れば、面接は「テスト」ではなく「楽しい研究会議」に変わります。
            </p>

            {/* --- ここから加筆セクション --- */}
            <h2 id="section-4" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-16 mb-6">
              【実録】「暗記ロボット」から脱却し、白熱した議論を楽しんで合格した軌跡
            </h2>
            <p>
              ここで、極度の緊張から「暗記ロボット」になってしまっていたKさんが、佐藤塾の指導を通じて面接の主導権を握る「対話のプロ」へと変貌し、見事合格したケーススタディをご紹介します。
            </p>
            <p>
              Kさんは志望理由書の完成度こそ高かったものの、面接練習になるとガチガチに緊張してしまい、事前に作ったノートの文章を一言一句間違えずに読もうとして、目が宙を泳いでいました。少しでも質問の角度を変えると「えっと…準備していません」とパニックになってしまっていたのです。
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 my-8 space-y-6">
              <div className="flex items-start">
                <div className="bg-[#002147] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#002147] mb-1">塾長からの問い（1on1面談）</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「Kさん、面接官はKさんを落とすために意地悪な質問をしているんじゃないよ。『この高校生、面白い視点を持ってるな。大学に入ったら一緒に研究してみたいな』って思いながら話しかけてくれているんだ。だから、完璧な正解を返そうとしなくていい。分からないことは『分からないので一緒に考えたい』でいいんだよ。」</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#800000] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#800000] mb-1">Kさんの気づき</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「そうなんですか…？ 私はずっと、面接は『テスト』で、教授は『採点者』だと思っていました。少しでも間違えたら即不合格になるんじゃないかって、恐怖で頭がいっぱいになっていたんです。」</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#C5A059] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 mb-1">「AI壁打ち」によるランダムな対話訓練</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「よし、じゃあマインドセットを変えよう。今日から想定問答のノートは捨てる！ その代わり、佐藤塾の『SFC教授シミュレーションAI』を使って、毎日15分、ランダムに飛んでくる質問に対して『自分の言葉でキャッチボールをする』練習だけをやろう。」</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-xl border border-green-100 my-8 flex items-start">
              <CheckCircle2 className="text-green-600 mr-4 mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-green-800 font-bold text-lg mt-0 mb-3">面接本番で「教授と笑い合う」余裕を獲得</h4>
                <p className="text-sm text-green-800 mb-0 leading-relaxed">
                  ノートを捨て、AIとの「対話」を繰り返したKさんは、次第に自分の思考をリアルタイムで言語化する楽しさに気づきました。本番の面接でも、教授からの鋭いツッコミに対して「その視点は抜け落ちていました！実は〜」と身振り手振りを交えて白熱した議論を展開。「あっという間の30分でした」と笑顔で会場から出てき見事合格を果たしました。
                </p>
              </div>
            </div>
            {/* --- ここまで加筆セクション --- */}

          </div>
        </div>

        <AuthorBox />

        <ArticleNavigation
          prev={{ title: "【任意提出資料編】「活動実績ゼロ」からでも勝負できるポートフォリオの作り方", href: "/ao-guide/portfolio" }}
          back={{ title: "AO入試 対策記事一覧に戻る", href: "/ao-guide/articles" }}
        />
      </ArticleContainer>
    </main>
  );
}