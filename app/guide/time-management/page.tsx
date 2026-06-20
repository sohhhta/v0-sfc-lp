import { Metadata } from "next";
import { ArticleHeader, ArticleContainer, AuthorBox } from "@/components/article-ui";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid, Clock, Pencil, BrainCircuit, AlertTriangle } from "lucide-react";
import Link from "next/link";

const articleTitle = "【時間配分編】120分をどう使う？構成メモ作成から執筆までの最適タイムマネジメント";
const articleDescription = "SFC小論文の120分間で時間が足りなくなる受験生必見。最初40分で合否が決まるPREP法を用いた「構成メモ」の作り方と、焦らず書き切るための具体的なタイムマネジメント術を解説します。";

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
              佐藤塾では、<strong>「最初の40分は絶対に原稿用紙に文字を書き込んではならない」</strong>と厳しく指導しています。なぜなら、原稿を書きながら「次はどう展開しようか…」と考えてしまうと、途中で思いつきのアイデアが混ざり、SFCが最も嫌う「論理の飛躍（論理破綻）」を引き起こすからです。
            </p>
            <p>
              小論文の合否は、書き始める前の「構成メモ（設計図）」の緻密さで9割決まります。本記事では、120分を最大限に活用し、ブレることなく書き切るための黄金のタイムマネジメントを解説します。
            </p>

            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              黄金の時間配分：40分・60分・20分
            </h2>
            
            <div className="space-y-6 my-8">
              <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
                <h3 className="flex items-center text-xl font-bold text-[#002147] mt-0 mb-4">
                  <BrainCircuit className="mr-2" />
                  【前半40分】設問分析・資料スキャン・構成メモ（設計図）
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
                  このように、どの段落でどの資料をエビデンスとして使うか（Exampleの配置）までを最初の40分で完全にフィックスさせます。この設計図があれば、不本意な論理の飛躍は絶対に起こりません。
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
                <h3 className="flex items-center text-xl font-bold text-slate-800 mt-0 mb-3">
                  <Pencil className="mr-2" />
                  【中盤60分】設計図を文字に「翻訳」する作業
                </h3>
                <p className="text-sm md:text-base text-slate-700 mb-0">
                  PREPの構造図が完成していれば、あとの60分はそれを原稿用紙の文字数に合わせて膨らませるだけの「翻訳作業」です。途中で「やっぱりこっちの意見にしよう」と論旨を変更するのは絶対にNGです。迷わず、止まらず、設計図通りに文字を紡ぎ出します。
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
                時間をかけて書いたのに点数が伸びない原因は、最初の40分の「設計図」にあります。<br />
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            {/* --- ここから加筆セクション --- */}
            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-16 mb-6">
              佐藤塾式・圧倒的な時間管理を生む「2つの掟」
            </h2>
            <p>
              ここまで一般的な時間配分の考え方を解説しましたが、実際のSFC入試という極限状態において、確実に1500字を書き切るためには、さらなる「割り切り」と「戦略」が必要です。佐藤塾で徹底的に指導している独自のタイムマネジメント術を公開します。
            </p>

            <div className="space-y-8 my-8">
              {/* 掟1: 資料の読み飛ばし */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="bg-[#800000] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <h3 className="font-bold text-slate-800 text-xl m-0">資料は「設問に応えるため」だけに読む</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  SFCの膨大な資料を前にすると、多くの受験生が「全てを満遍なく読まなければ」という罠に陥ります。しかし、私たちの目的は資料の専門家になることではなく、<strong>「設問に応えること」</strong>です。
                </p>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  設問の意図を正確に把握していれば、それに沿った資料の読み解きだけを行えば足ります。アンテナに引っかからない箇所は、<strong>時には思い切って読み飛ばしたり、理解度70%で次へ進んでしまっても全く問題ありません。</strong>重要なのは、全ての資料を完璧に理解することではなく、設問に応えるためのエビデンスを見つけ出すことと、何より「時間管理」なのです。
                </p>
              </div>

              {/* 掟2: 文章設計図 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="bg-[#002147] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <h3 className="font-bold text-slate-800 text-xl m-0">書き始める前に「文章設計図」を完成させる</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  資料を読み終えた後、焦ってすぐに原稿用紙のマス目を埋め始めてはいけません。佐藤塾では、頭の中を整理する目的で<strong>「文章設計図」</strong>という独自のフォーマットを作成することを義務付けています。
                </p>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  これは、回答の大枠の構造（PREP法など）を可視化するものです。ここで決めた構造を絶対に崩さずに実際の執筆を進めることが極めて重要です。この設計図があることで、「考えながら書き進める」という迷走状態を防ぎ、<strong>一貫性を保ちながら、かつ設問の要件を完全に満たした回答をハイスピードで作成すること</strong>が可能になります。
                </p>
              </div>
            </div>

            <div className="bg-[#C5A059]/10 p-6 md:p-8 rounded-2xl border border-[#C5A059]/30 my-8">
              <h3 className="text-[#800000] font-bold text-lg mb-3 flex items-center mt-0">
                <AlertTriangle className="mr-2" size={20} />
                圧倒的な「質」と「時間管理」を持って本番へ
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed m-0">
                これらのスキルは、頭で理解しただけですぐにできるものではありません。佐藤塾では、過去問はもちろんのこと、塾長が独自に作成した予想問題や教材を通じ、この「割り切った資料読解」と「文章設計図の作成」を徹底的に反復させます。この訓練を繰り返すことで、本番の極限状態でも圧倒的な質を保ったまま、確実な時間管理で合格答案を書き上げることができるようになります。
              </p>
            </div>
            {/* --- ここまで加筆セクション --- */}
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
          <Link className="flex items-center text-right text-[#002147] hover:text-[#C5A059] transition-colors group w-full sm:w-auto justify-end" href="/guide/tech-society">
            <div className="text-sm">
              <div className="text-slate-400 mb-1">次の記事</div>
              <div className="font-bold">頻出テーマ編</div>
            </div>
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20}/>
          </Link>
        </div>
      </ArticleContainer>
    </main>
  );
}
