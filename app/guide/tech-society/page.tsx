import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox, TableOfContents, ArticleNavigation } from "@/components/article-ui";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, AlertTriangle, Lightbulb } from "lucide-react";
import Link from "next/link";

const tocItems = [
  { id: "sec1", label: "絶対に避けるべき「評論家・AI脅威論」" },
  { id: "sec2", label: "SFCが高く評価する「テクノロジー×課題解決」の型" },
];

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

export default function TechSocietyPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <ArticleContainer>
        <ArticleHeader 
          theme="essay"
          category="SFC小論文 対策ガイド"
          title={<>【頻出テーマ編】SFC小論文で狙われる<br className="hidden md:block" />「テクノロジーと社会問題」の攻略法</>}
          readTime={6}
        />

        <TableOfContents items={tocItems} />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              慶應SFC（総合政策学部・環境情報学部）の小論文において、過去何度も形を変えて出題されている絶対的な頻出テーマがあります。それが<strong>「テクノロジー（AI、データサイエンス、インターネット等）と社会問題の掛け合わせ」</strong>です。
            </p>
            <p>
              多くの受験生は、AIや最新技術がテーマになると「AIは人間の仕事を奪う危険なものだ」「テクノロジーへの過度な依存は避けるべきだ」といった、評論家のようなネガティブな解答を書いてしまいます。しかし、SFCの教授陣はテクノロジーの最前線で研究を行う専門家です。彼らが求めているのは、テクノロジーを忌避する姿勢ではなく、<strong>「それを道具として使いこなし、どう社会課題を解決するか」という未来志向の設計図</strong>なのです。
            </p>

            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6" id="sec1">
              1. 絶対に避けるべき「評論家・AI脅威論」
            </h2>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-6">
              <h3 className="flex items-center text-lg font-bold text-[#800000] mt-0 mb-2">
                <AlertTriangle className="mr-2" size={20} />
                典型的な不合格答案（NG例）
              </h3>
              <p className="text-sm text-slate-700 mb-0">
                「近年、AIの進化により多くの仕事が奪われると言われている。人間特有の感情やコミュニケーションが失われることは大きな問題だ。したがって、AIの導入には法的な規制を設け、慎重に議論を進めるべきである。」
              </p>
            </div>
            <p>
              一見すると尤もらしい文章ですが、SFCの評価基準では低得点となります。なぜなら、具体的な解決策（あなたなりのアイデア）が全く提示されておらず、現状の懸念をまとめただけの「評論」に終始しているからです。
            </p>

            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6" id="sec2">
              2. SFCが高く評価する「テクノロジー×課題解決」の型
            </h2>
            <p>
              SFCの小論文では、テクノロジーを「魔法の杖」ではなく、「現実的なツール」として扱う必要があります。以下の型（アプローチ）を意��して構成メモを作成してください。
            </p>

            <div className="space-y-6 my-8">
              <div className="flex items-start">
                <div className="bg-[#002147] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1 mr-4">1</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg m-0 mb-1">テクノロジーによる「代替」と「補完」を分ける</h4>
                  <p className="text-sm text-slate-600 m-0">
                    「すべてをAIに任せる」のではなく、データ処理や定型作業はテクノロジーに「代替」させ、人間は意思決定やクリエイティビティに集中するという「補完関係」を描くことが重要です。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#002147] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1 mr-4">2</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg m-0 mb-1">社会のマイナスをゼロにするアプローチ</h4>
                  <p className="text-sm text-slate-600 m-0">
                    少子高齢化、地方の過疎化、教育格差など、具体的な社会課題を一つ設定します。そして「センサー技術を用いて高齢者の見守りコストを下げる」など、テクノロジーを使ってその課題のボトルネックをどう解消するかを論理的に示します。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-[#800000] p-6 my-8 rounded-r-lg">
              <h3 className="flex items-center text-lg font-bold text-[#002147] mt-0 mb-2">
                <Lightbulb className="mr-2" size={20} />
                合格答案のイメージ
              </h3>
              <p className="text-sm text-slate-700 mb-0">
                「地方の医療過疎という課題に対し、AIの画像診断技術を導入する（解決策）。これにより、専門医不足の地域でも初期診断の精度を落とさず（代替）、医師は患者との対話や治療方針の決定に時間を割くことができる（補完）。」
              </p>
            </div>

            <div className="bg-[#002147] text-white p-8 rounded-2xl mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 font-serif text-white">あなたの解決策は、SFCで通用するか？</h3>
              <p className="mb-8 text-blue-100 text-sm md:text-base">
                最新のテクノロジー動向に疎くても、論理的な型の作り方を知っていれば合格答案は作れます。<br />
                佐藤塾の無料相談で、あなたのアイデアをSFCレベルの論理構造へと引き上げる方法を体験してください。
              </p>
              <Link href="/#contact">
                <Button className="bg-[#C5A059] hover:bg-[#B38D45] text-white font-bold py-6 px-10 rounded-full text-lg w-full sm:w-auto shadow-lg shadow-[#C5A059]/20 transition-all hover:scale-105">
                  無料相談でSFC的思考を身につける
                </Button>
              </Link>
            </div>
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
