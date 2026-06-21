import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, ArticleNavigation } from "@/components/article-ui";
import { TableOfContents } from "@/components/table-of-contents";
import { MessageSquare, Target, Lightbulb, CheckCircle2 } from "lucide-react";

const articleTitle = "【頻出テーマ編】SFC小論文で狙われる「テクノロジーと社会問題」の攻略法";
const articleDescription = "AIやデータサイエンスなどのテクノロジーを用いて、現代の社会課題をどう解決するか。SFC小論文で最も頻出するテーマに対し、教授陣が高く評価する「SFC的アプローチ」の型を解説します。";

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
  { id: "section-1", title: "1. なぜSFCは「テクノロジー×社会」を問うのか？" },
  { id: "section-2", title: "2. バズワード（AI、IoTなど）をただ並べるのはNG" },
  { id: "section-3", title: "3. 教授陣が高く評価する「SFC的アプローチ」の型" },
  { id: "section-4", title: "【実録】バズワードの羅列から、地に足の着いた「SFC的解決策」への進化" }
];

export default function TechSocietyPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <ArticleContainer>
        <ArticleHeader
          category="SFC小論文 対策ガイド"
          title={<>【頻出テーマ編】SFC小論文で狙われる<br className="hidden md:block" />「テクノロジーと社会問題」の攻略法</>}
          readTime={6}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              SFC（総合政策学部・環境情報学部）の小論文において、毎年のように形を変えて出題される最重要テーマがあります。それが「テクノロジーを用いた社会問題の解決」です。
            </p>
            <p>
              しかし、多くの受験生は「AIを使えばすべて解決する」といった、現実離れしたSFのような答案を書いてしまいがちです。本記事では、SFCの教授陣が本当に求めている「テクノロジーと社会のリアルな結びつき（SFC的アプローチ）」を答案に落とし込む方法を解説します。
            </p>

            <TableOfContents items={tocItems} />

            <h2 id="section-1" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              1. なぜSFCは「テクノロジー×社会」を問うのか？
            </h2>
            <p>
              SFCは文系・理系の枠を取り払い、社会の複雑な問題を解決できる「問題発見・解決のプロフェッショナル」を育成する学部です。現代社会において、テクノロジー（特にITやデータサイエンス）を抜きにして社会問題を語ることはできません。だからこそ、テクノロジーの「可能性」と「限界」の両方を正しく理解しているかどうかが問われるのです。
            </p>

            <h2 id="section-2" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              2. バズワード（AI、IoTなど）をただ並べるのはNG
            </h2>
            <p>
              「高齢化社会の課題は、AIとIoTとロボットを活用すれば解決できます」——このような、いわゆる「バズワード」をただ並べただけの答案は、教授から最も嫌われます。なぜなら「そのテクノロジーが具体的にどう機能し、社会のどのボトルネックを解消するのか」という踏み込んだ思考が欠如しているからです。魔法の杖としてテクノロジーを使うのではなく、現実的な「道具」として扱う視点が必要です。
            </p>

            <h2 id="section-3" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              3. 教授陣が高く評価する「SFC的アプローチ」の型
            </h2>
            <p>
              高く評価される答案には、必ず以下の「SFC的アプローチ」の型が組み込まれています。
            </p>
            <ul className="space-y-4 my-6">
              <li><strong>① ボトルネックの特定：</strong> 社会問題の中で、どこが一番の「詰まり（原因）」になっているかを分析する。</li>
              <li><strong>② テクノロジーの適材適所：</strong> そのボトルネックを解消するために、どのテクノロジーの「どんな機能」が最適かを具体的に提案する。</li>
              <li><strong>③ 人間と社会の受容性：</strong> テクノロジーを導入した際に起こりうる「人間の心理的抵抗」や「法的な壁」などのデメリットにも言及し、それをどう乗り越えるかまで論じる。</li>
            </ul>

            {/* --- ここから加筆セクション --- */}
            <h2 id="section-4" className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-16 mb-6">
              【実録】バズワードの羅列から、地に足の着いた「SFC的解決策」への進化
            </h2>
            <p>
              ここで、佐藤塾の指導を通じて「テクノロジーを魔法の杖にする」悪癖から抜け出し、SFC合格を勝ち取ったGくんのケーススタディをご紹介します。
            </p>
            <p>
              GくんはIT関連のニュースを読むのが好きで、最新技術の知識は豊富でした。しかし、入塾当初の答案は「過疎地域の交通問題は、完全自動運転の空飛ぶ車を導入すれば解決する」といった、現状の法規制やコストを完全に無視した「夢物語（SF）」になってしまっていました。
            </p>
            <p>
              彼の豊富な知識を「SFCが求める地に足の着いた論理」へと変換したのが、<strong>佐藤塾のAI壁打ちと、塾長による「制約条件のインストール（1on1）」</strong>でした。
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 my-8 space-y-6">
              {/* 塾長からの問い */}
              <div className="flex items-start">
                <div className="bg-[#002147] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#002147] mb-1">塾長からの問い（1on1面談）</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「Gくんの空飛ぶ車のアイデア、未来の話としては面白いね。でもSFCの教授が聞きたいのは『いま目の前にある社会のボトルネックを、どう現実的に解消するか』なんだ。もしGくんが過疎地の村長だったら、明日から空飛ぶ車を導入できる？ 予算は？ お年寄りは乗ってくれるかな？」</p>
                </div>
              </div>

              {/* 生徒の深掘り */}
              <div className="flex items-start">
                <div className="bg-[#800000] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#800000] mb-1">Gくんの気づき</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「うっ…無理ですね。予算もないし、そもそもお年寄りは怖がって乗らないかもしれません。僕はテクノロジーの『凄さ』ばかりに気を取られて、それを使う『人間』や『社会のルール』のことを全く考えていませんでした。」</p>
                </div>
              </div>

              {/* 解決策の提示 */}
              <div className="flex items-start">
                <div className="bg-[#C5A059] text-white p-3 rounded-lg mr-4 flex-shrink-0 mt-1">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 mb-1">「制約条件」と「限界」を組み込んだアプローチへ</p>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">「その視点が『SFC的アプローチ』の第一歩だよ！ テクノロジーを提案するときは、必ず『人間の心理的な壁』や『コスト・法律の壁』というデメリットをセットで書くこと。そして、それをどう乗り越えるかという泥臭い仕組み（システム）を提案できれば、一気に説得力が増すよ。」</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-xl border border-green-100 my-8 flex items-start">
              <CheckCircle2 className="text-green-600 mr-4 mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-green-800 font-bold text-lg mt-0 mb-3">「ITオタク」から「問題解決のプロ」へ</h4>
                <p className="text-sm text-green-800 mb-0 leading-relaxed">
                  その後、GくんはAI壁打ちを通じて「自分の提案に対する反論（デメリット）」を徹底的にシミュレーションしました。その結果、「既存のコミュニティバスに予約アプリを導入し、スマホが使えない高齢者には電話オペレーターを介在させる」といった、現実の社会システムに寄り添った血の通った提案ができるようになり、SFC合格を見事勝ち取ったのです。
                </p>
              </div>
            </div>
            {/* --- ここまで加筆セクション --- */}

          </div>
        </div>

        <AuthorBox />

        <ArticleNavigation
          prev={{ title: "【資料読解編】膨大な資料から使えるデータを瞬時に見抜くテクニック", href: "/guide/data-reading" }}
          back={{ title: "SFC小論文 対策記事一覧に戻る", href: "/guide/essay/articles" }}
          next={{ title: "【過去問演習編】白紙から合格答案を組み立てる思考プロセスの可視化", href: "/guide/past-exams" }}
        />
      </ArticleContainer>
    </main>
  );
}