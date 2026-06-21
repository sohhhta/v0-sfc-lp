import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, ArticleNavigation } from "@/components/article-ui";
import { TableOfContents } from "@/components/table-of-contents";
import { MessageSquare, Target, Lightbulb, CheckCircle2 } from "lucide-react";

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
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <ArticleContainer>
        <ArticleHeader
          theme="ao"
          category="SFC AO入試 対策ガイド"
          title={<>慶應SFCのAO入試に「すごい実績」は不要。<br className="hidden md:block" />一般・AO&quot;二刀流&quot;が合格の最短距離である理由</>}
          readTime={6}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
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
              たしかに、SFCのAO入試合格者の中には、起業家や国際大会のメダリストもいます。しかし、それは全体のごく一部に過ぎません。SFCの教授陣が最も見たいのは「過去の華々しい結果」ではなく、<strong>「身近な社会問題に対する強い当事者意識」と「それを解決しようとする思考のプロセス」</strong>です。
            </p>
            <p>
              「地元の商店街が寂れている理由を自分なりに調査した」「学校の校則のおかしな点についてアンケートを取り、先生に改善案を出した」といった、地に足の着いた泥臭い活動の方が、表面的なビジネスコンテストの賞状よりも高く評価されることは多々あります。
            </p>

            <h2 id="section-2" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              2. 小論文とAO入試は「評価基準」が全く同じ
            </h2>
            <p>
              佐藤塾が「一般（小論文）とAOの二刀流」を強く推奨するのには理由があります。それは、<strong>両者の評価基準の根幹が完全に一致しているから</strong>です。
            </p>
            <p>
              小論文で求められる「資料から課題を発見し、論理的な解決策を提示する力」は、そっくりそのままAO入試の「志望理由書（自分が解決したい課題と、SFCでの研究計画）」を書く力に直結します。つまり、小論文の勉強をすることが、そのまま最高のAO対策になるのです。
            </p>

            <h2 id="section-3" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              3. 「二刀流」がもたらす圧倒的な相乗効果
            </h2>
            <p>
              二刀流のメリットはそれだけではありません。AO入試のために自分のテーマを深く探究し、専門書を読み込んだ経験は、一般入試の小論文において「誰よりも解像度の高い具体例（エビデンス）」として機能します。AO対策が小論文の質を上げ、小論文対策がAOの論理性を鍛える。この無限ループに入った受験生は、圧倒的なスピードで合格圏内へと駆け上がります。
            </p>

            {/* --- ここから加筆セクション --- */}
            <h2 id="section-4" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-16 mb-6">
              【実録】「起業しなきゃ」の強迫観念から解放され、日常の探究で合格を掴んだ軌跡
            </h2>
            <p>
              ここで、特別な実績が何一つない状態から佐藤塾に入塾し、見事AO入試でSFC合格を勝ち取ったHさんのケーススタディをご紹介します。
            </p>
            <p>
              Hさんは「AOを受けるなら何かすごいことをしなきゃ！」と焦るあまり、自分の興味とは無関係な「途上国の貧困問題を解決するNPO法人の立ち上げ」という、極めてハードルの高い計画を無理やり志望理由書に書こうとしていました。当然、中身が伴わず、文章は完全にストップしてしまいました。
            </p>
            <p>
              この硬直状態を打破したのが、<strong>佐藤塾のAI壁打ちと、塾長による「徹底的な自己分析（1on1）」</strong>でした。
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 my-8 space-y-6">
              {/* 塾長からの問い */}
              <div className="flex items-start">
                <div className="bg-[#002147] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#002147] mb-1">塾長からの問い（1on1面談）</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「Hさん、NPO法人の話は一旦忘れよう。Hさんが最近、日常生活の中で『これ、絶対におかしいよな』『なんとかしたいな』って理不尽に感じたことは何かある？ どんなに小さなことでもいいから教えて。」</p>
                </div>
              </div>

              {/* 生徒の深掘り */}
              <div className="flex items-start">
                <div className="bg-[#800000] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#800000] mb-1">Hさんの気づき</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「うーん…。あ、私の通っている高校は自転車通学が多いんですが、雨の日にレインコートを着て自転車に乗ると、視界が悪くてすごく危ないんです。実際に事故も起きていて。でも、学校は『安全運転を心がけろ』と言うだけで何の対策もしてくれなくて、ずっとイライラしていました。」</p>
                </div>
              </div>

              {/* 解決策の提示 */}
              <div className="flex items-start">
                <div className="bg-[#C5A059] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 mb-1">「日常のイライラ」を「研究テーマ」へ昇華</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「それだよ！ それこそが本物の当事者意識だ。じゃあ、SFCの環境情報学部で『人間工学』や『プロダクトデザイン』を学んで、視界を遮らない画期的なレインウェアを開発する、というのはどうだろう？ まずは今のレインコートの欠点を分析してみよう！」</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-xl border border-green-100 my-8 flex items-start">
              <CheckCircle2 className="text-green-600 mr-4 mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-green-800 font-bold text-lg mt-0 mb-3">「借り物の夢」を捨て、圧倒的な熱量へ</h4>
                <p className="text-sm text-green-800 mb-0 leading-relaxed">
                  Hさんは「借り物の大きな問題」を捨て、「自分の身近な理不尽」に向き合う決意をしました。AI壁打ちを使って自転車事故の統計データを調べ、自分なりにレインコートの改良案をスケッチし始めました。そのリアルな探究のプロセスが高く評価され、Hさんは見事AO入試で合格を手にしたのです。
                </p>
              </div>
            </div>
            {/* --- ここまで加筆セクション --- */}

          </div>
        </div>

        <AuthorBox />

        <ArticleNavigation
          back={{ title: "AO入試 対策記事一覧に戻る", href: "/ao-guide/articles" }}
          next={{ title: "慶應SFCの志望理由書に「立派な社会問題」は不要。自分だけの研究テーマを見つける3ステップと思考の罠", href: "/ao-guide/theme" }}
        />
      </ArticleContainer>
    </main>
  );
}