import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, ArticleNavigation } from "@/components/article-ui";
import { TableOfContents } from "@/components/table-of-contents";
import { MessageSquare, Target, Lightbulb, CheckCircle2 } from "lucide-react";

const articleTitle = "慶應SFCの志望理由書に「立派な社会問題」は不要。自分だけの研究テーマを見つける3ステップと思考の罠";
const articleDescription = "SDGsや貧困問題など、立派すぎるテーマを設定して失敗するSFC受験生は後を絶ちません。本当に評価される「自分だけの研究テーマ」を掘り起こすための具体的なステップを解説します。";

export const metadata: Metadata = {
  title: `${articleTitle} | 佐藤塾`,
  description: articleDescription,
  openGraph: {
    title: `${articleTitle} | 佐藤塾`,
    description: articleDescription,
    images: [
      {
        url: `https://www.sfc-satojuku.com/api/og?title=${encodeURIComponent("慶應SFCの志望理由書に「立派な社会問題」は不要")}`,
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
    images: [`https://www.sfc-satojuku.com/api/og?title=${encodeURIComponent("慶應SFCの志望理由書に「立派な社会問題」は不要")}`],
  },
};

const tocItems = [
  { id: "section-1", title: "1. 面接官は「借り物のテーマ」を1秒で見抜く" },
  { id: "section-2", title: "2. 「好き」や「違和感」を学問に接続する" },
  { id: "section-3", title: "3. 研究テーマを見つける3つのステップ" },
  { id: "section-4", title: "【実録】「SDGsの罠」から抜け出し、ニッチな偏愛でSFCを射止めた軌跡" }
];

export default function ThemePage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <ArticleContainer>
        <ArticleHeader
          theme="ao"
          category="SFC AO入試 対策ガイド"
          title={<>慶應SFCの志望理由書に「立派な社会問題」は不要。<br className="hidden md:block" />自分だけの研究テーマを見つける3ステップと思考の罠</>}
          readTime={7}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              SFCのAO入試において、最も重要かつ受験生が最初につまずくのが「研究テーマの設定」です。
            </p>
            <p>
              「社会に貢献する立派なテーマでなければ合格できない」と思い込み、ネットで見つけたSDGsや環境問題をそのままテーマにしてしまう受験生が後を絶ちません。しかし、それは確実に不合格へと向かう「思考の罠」です。本記事では、SFCの教授陣が本当に求めている「あなただけの研究テーマ」を掘り起こすステップを解説します。
            </p>

            <TableOfContents items={tocItems} />

            <h2 id="section-1" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              1. 面接官は「借り物のテーマ」を1秒で見抜く
            </h2>
            <p>
              SFCの教授陣は、毎年何千枚もの志望理由書を読み、数え切れないほどの受験生と面接をしています。「海洋プラスチック問題を解決したい」「途上国の教育格差をなくしたい」といったテーマは、一見立派ですが、本人の強烈な原体験（なぜあなたがそれをやるのか？）が伴っていなければ、「どこかで聞いたような借り物の言葉」として一瞬で見抜かれます。
            </p>

            <h2 id="section-2" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              2. 「好き」や「違和感」を学問に接続する
            </h2>
            <p>
              SFCが求めているのは、世界を救う壮大な目標ではなく、<strong>「あなた自身が心の底から熱狂できるもの」や「日常で強く感じる違和感」</strong>です。アニメが好き、ゲームが好き、特定のスポーツが好き。そうした「偏愛」や「個人的な悩み」を起点とし、そこに「学問的なアプローチ」を掛け合わせることで、誰にも真似できない最強の研究テーマが生まれます。
            </p>

            <h2 id="section-3" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              3. 研究テーマを見つける3つのステップ
            </h2>
            <ul className="space-y-4 my-6">
              <li><strong>ステップ1（原体験の棚卸し）：</strong> 幼少期から現在まで、自分が時間を忘れて没頭したこと、悔しかったこと、疑問に思ったことをすべて書き出す。</li>
              <li><strong>ステップ2（課題の言語化）：</strong> その中で「もっとこうなればいいのに」という不満や課題を見つける。</li>
              <li><strong>ステップ3（SFCの学問との接続）：</strong> その課題を解決するために、SFCのどの教授の下で、どんなテクノロジーやデザイン、社会学の手法を学ぶ必要があるかを結びつける。</li>
            </ul>

            {/* --- ここから加筆セクション --- */}
            <h2 id="section-4" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-16 mb-6">
              【実録】「SDGsの罠」から抜け出し、ニッチな偏愛でSFCを射止めた軌跡
            </h2>
            <p>
              ここで、見栄えの良い「借り物のテーマ」で行き詰まっていたIさんが、佐藤塾の1on1を通じて自分の「偏愛」に目覚め、AO合格を勝ち取ったケーススタディをご紹介します。
            </p>
            <p>
              Iさんは入塾当初、「海洋プラスチックゴミの削減による海洋生態系の保全」というテーマを掲げていました。しかし、彼女自身は海沿いに住んでいるわけでもなく、海洋生物に特別な思い入れもありませんでした。AI壁打ちで「なぜあなたがそれを解決したいのですか？」と問われても、ネットの受け売りのような言葉しか出てこない状態でした。
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 my-8 space-y-6">
              <div className="flex items-start">
                <div className="bg-[#002147] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#002147] mb-1">塾長からの問い（1on1面談）</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「Iさん、海洋プラ問題の志望理由書、なんだかIさんの"体温"を感じないんだよね。無理して『いいこと』を書こうとしてない？ 一旦SDGsは忘れて、Iさんが休日にお金と時間を一番使っている趣味って何？」</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#800000] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#800000] mb-1">Iさんの気づき</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「えっ…休日はずっと古着屋を巡っています。買った古着を自分でミシンでリメイクして、フリマアプリで売ったりするのが大好きで…。でも、そんなのただの趣味だし、大学の志望理由にはならないですよね？」</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#C5A059] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 mb-1">「偏愛」から唯一無二の研究テーマへ</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「いや、それこそが最強の武器だよ！ アパレル産業の大量廃棄は深刻な社会問題だ。Iさんの『古着リメイク』の技術と熱量に、SFCで学べる『プラットフォーム構築（IT）』や『ビジネスモデル設計』を掛け合わせたら、『Z世代向けの古着アップサイクル循環システム』という立派な研究テーマになるよ！」</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-xl border border-green-100 my-8 flex items-start">
              <CheckCircle2 className="text-green-600 mr-4 mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-green-800 font-bold text-lg mt-0 mb-3">自分の言葉で語れるから、面接でも無双できる</h4>
                <p className="text-sm text-green-800 mb-0 leading-relaxed">
                  大好きな「古着」をテーマにした途端、Iさんのタイピングは止まらなくなりました。AI壁打ち相手にも「実際のリメイク市場の課題」を熱く語るようになり、志望理由書の質が劇的に向上。面接でも教授と古着ビジネスの展望で大盛り上がりし、見事合格を勝ち取りました。
                </p>
              </div>
            </div>
            {/* --- ここまで加筆セクション --- */}

          </div>
        </div>

        <AuthorBox />

        <ArticleNavigation
          prev={{ title: "慶應SFCのAO入試に「すごい実績」は不要。一般・AO\"二刀流\"が合格の最短距離である理由", href: "/ao-guide/strategy" }}
          back={{ title: "AO入試 対策記事一覧に戻る", href: "/ao-guide/articles" }}
          next={{ title: "【志望理由書編】SFC教授の心を動かす「志望理由書」の書き方と構成", href: "/ao-guide/statement" }}
        />
      </ArticleContainer>
    </main>
  );
}