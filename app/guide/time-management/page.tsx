import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox } from "@/components/article-ui";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid, Clock, Pencil, BrainCircuit } from "lucide-react";
import Link from "next/link";

const articleTitle = "【時間配分編】120分をどう使う？構成メモ作成から執筆までの最適タイムマネジメント";
const articleDescription = "SFC小論文の120分間で時間が足りなくなる受験生必見。最初の30分で合否が決まるPREP法を用いた「構成メモ」の作り方と、焦らず書き切るための具体的なタイムマネジメント術を解説します。";

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

export default function TimeManagementPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-slate-50 min-h-screen">
      <ArticleContainer>
        <ArticleHeader 
          theme="essay"
          category="SFC小論文 対策ガイド"
          title={<>【時間配分編】120分をどう使う？<br className="hidden md:block" />構成メモ作成から執筆までの最適タイムマネジメント</>}
          readTime={7}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              SFCの小論文は120分。圧倒的な資料量と記述量（1000字〜1500字以上）を前に、多くの受験生が「とにかく早く書き始めなければ」と焦って原稿用紙にペンを走らせます。しかし、これが不合格への最大の罠です。
            </p>
            <p>
              佐藤塾では、<strong>「最初の30分は絶対に原稿用紙に文字を書き込んではならない」</strong>と厳しく指導しています。なぜなら、原稿を書きながら「次はどう展開しようか…」と考えてしまうと、途中で思いつきのアイデアが混ざり、SFCが最も嫌う「論理の飛躍（論理破綻）」を引き起こすからです。
            </p>
            <p>
              小論文の合否は、書き始める前の「構成メモ（設計図）」の緻密さで9割決まります。本記事では、120分を最大限に活用し、ブレることなく書き切るための黄金のタイムマネジメントを解説します。
            </p>

            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              黄金の時間配分：30分・70分・20分
            </h2>
            
            <div className="space-y-6 my-8">
              <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
                <h3 className="flex items-center text-xl font-bold text-[#002147] mt-0 mb-4">
                  <BrainCircuit className="mr-2" />
                  【前半30分】設問分析・資料スキャン・構成メモ（設計図）
                </h3>
                <p className="text-sm md:text-base text-slate-700 mb-4">
                  最も重要なフェーズです。ここで「書きながら考える」ことを完全に排除するため、問題用紙の余白に世界で最も論理的な文章構成である「PREP法」に基づいた強固な構造図を作成します。
                </p>
                <div className="bg-white p-5 rounded-lg border border-slate-200 text-sm md:text-base">
                  <h4 className="font-bold text-[#800000] mb-3 border-b border-slate-100 pb-2">佐藤塾メソッド：PREP構造図の型</h4>
                  <ul className="space-y-3 mb-0 list-none pl-0">
                    <li><strong className="text-[#002147]">P (Point - 結論):</strong> 今回のテーマに対する自分の明確な主張・解決策。</li>
                    <li><strong className="text-[#002147]">R (Reason - 理由):</strong> なぜその解決策が有効なのか。SFC的視点に基づく論理的な理由。</li>
                    <li><strong className="text-[#002147]">E (Example - 具体例・根拠):</strong> 理由を補強する事実。<br /><span className="text-[#800000] font-bold">★ここで「資料2のグラフA」や「資料4の専門家の意見」など、事前に抽出したエビデンスを配置しておく。</span></li>
                    <li><strong className="text-[#002147]">P (Point - 結論):</strong> 以上の論理と根拠から、この解決策が必要であるという再確認と社会的意義。</li>
                  </ul>
                </div>
                <p className="text-sm md:text-base text-slate-700 mt-4 mb-0">
                  このように、どの段落でどの資料をエビデンスとして使うか（Exampleの配置）までを最初の30分で完全にフィックスさせます。この設計図があれば、不本意な論理の飛躍は絶対に起こりません。
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
                <h3 className="flex items-center text-xl font-bold text-slate-800 mt-0 mb-3">
                  <Pencil className="mr-2" />
                  【中盤70分】設計図を文字に「翻訳」する作業
                </h3>
                <p className="text-sm md:text-base text-slate-700 mb-0">
                  PREPの構造図が完成していれば、あとの70分はそれを原稿用紙の文字数に合わせて膨らませるだけの「翻訳作業」です。途中で「やっぱりこっちの意見にしよう」と論旨を変更するのは絶対にNGです。迷わず、止まらず、設計図通りに文字を紡ぎ出します。
                </p>
              </div>
              
              <div className="bg-red-50 p-6 md:p-8 rounded-xl border border-red-100">
                <h3 className="flex items-center text-xl font-bold text-[#800000] mt-0 mb-3">
                  <Clock className="mr-2" />
                  【後半20分】推敲・修正・文字数調整
                </h3>
                <p className="text-sm md:text-base text-slate-700 mb-0">
                  最後に必ず20分を残してください。誤字脱字のチェックはもちろん、設問の条件（「〇〇という言葉を使って」「資料2を踏まえて」など）を落としていないか最終確認を行います。この20分が、D判定をC判定に、B判定をA判定（合格）へと押し上げます。
                </p>
              </div>
            </div>

            <div className="bg-[#002147] text-white p-8 rounded-2xl mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 font-serif text-white">あなたの構成メモ、論理破綻していませんか？</h3>
              <p className="mb-8 text-blue-100 text-sm md:text-base">
                時間をかけて書いたのに点数が伸びない原因は、最初の30分の「設計図」にあります。<br />
                佐藤塾のAI壁打ちを使えば、あなたの構成メモの論理的な飛躍を瞬時に指摘し、修正できます。
              </p>
              <Link href="/#contact">
                <Button className="bg-[#C5A059] hover:bg-[#B38D45] text-white font-bold py-6 px-10 rounded-full text-lg w-full sm:w-auto shadow-lg shadow-[#C5A059]/20 transition-all hover:scale-105">
                  無料相談で構成メモの添削を受ける
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <AuthorBox />

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 border-t border-slate-200">
          <Link className="flex items-center text-slate-500 hover:text-[#002147] transition-colors group w-full sm:w-auto" href="/guide/data-reading">
            <ArrowRight className="mr-2 rotate-180 transform transition-transform group-hover:-translate-x-1" size={20}/>
            <div className="text-sm">
              <div className="text-slate-400 mb-1">前の記事</div>
              <div className="font-bold">資料読解編</div>
            </div>
          </Link>
          <Link className="text-slate-400 hover:text-[#002147] transition-colors p-2" href="/guide/essay/articles">
            <LayoutGrid size={24}/>
          </Link>
          <div className="w-full sm:w-auto opacity-50 cursor-not-allowed">
            <div className="flex items-center text-right text-slate-400 justify-end">
              <div className="text-sm">
                <div className="text-slate-400 mb-1">次の記事</div>
                <div className="font-bold">頻出テーマ編(準備中)</div>
              </div>
              <ArrowRight className="ml-2" size={20} />
            </div>
          </div>
        </div>
      </ArticleContainer>
    </main>
  );
}
