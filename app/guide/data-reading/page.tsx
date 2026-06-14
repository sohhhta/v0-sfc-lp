import { Metadata } from "next";
import { ArticleHeader, ArticleContainer } from "@/components/article-ui";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const articleTitle = "【資料読解編】SFC特有の「膨大な資料」から使えるデータを瞬時に見抜くテクニック";
const articleDescription = "総合政策・環境情報学部で出題される大量のグラフや文章。すべてを読もうとして時間切れになる受験生へ、自分の主張を補強する「エビデンス」だけを素早く抽出する読解法を解説します。";

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

export default function DataReadingPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-slate-50 min-h-screen">
      <ArticleContainer>
        <ArticleHeader 
          theme="essay"
          category="SFC小論文 対策ガイド"
          title={<>【資料読解編】SFC特有の「膨大な資料」から<br className="hidden md:block" />使えるデータを瞬時に見抜くテクニック</>}
          readTime={5}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-700 font-medium leading-relaxed mb-8">
              慶應SFC（特に環境情報学部）の小論文を開いた瞬間、その資料の多さに圧倒された経験はありませんか？数ページにわたる文章、複雑な統計データやグラフ群。これらを「最初から最後まで真面目に読む」受験生は、確実に時間切れで不合格になります。SFCが求めているのは「情報処理能力」ではなく、「目的達成のためのデータ抽出能力」です。
            </p>

            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              1. 資料は「読む」ものではなく「使う」もの
            </h2>
            <p>
              SFCの小論文における資料の役割は、現代文のテストのような「筆者の主張を読み取る」ことではありません。あなた自身が設定した問題解決のアプローチを、<strong>客観的に補強するための武器（エビデンス）</strong>として用意されているパーツの山なのです。
            </p>

            <div className="bg-slate-50 border-l-4 border-[#800000] p-6 my-8 rounded-r-lg">
              <h4 className="font-bold text-[#800000] mt-0 mb-2 flex items-center">
                <Search size={18} className="mr-2" />
                佐藤塾メソッド：逆算型リーディング
              </h4>
              <p className="text-slate-700 text-sm mb-0">
                1. まず「設問」を読み、自分が何を書くべきか（ゴール）を設定する。<br />
                2. そのゴールに到達するために「どんなデータが必要か」を仮説立てる。<br />
                3. 仮説に合致するグラフやキーワードだけを、膨大な資料から「スキャン」して拾い上げる。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#002147] pb-2 mt-12 mb-6">
              2. グラフや表から「異常値」を見逃さない
            </h2>
            <p>
              データが提示されている場合、全体を漫然と眺めるのはやめましょう。SFCの教授陣がわざわざそのデータを用意したのには、必ず意図があります。注目すべきは以下の3点です。
            </p>
            <ul>
              <li><strong>急激な変化：</strong> ある年から急激に数値が上がっている（下がっている）箇所はないか。</li>
              <li><strong>逆転現象：</strong> AとBの関係性が途中で逆転しているポイントはないか。</li>
              <li><strong>外れ値（異常値）：</strong> 全体の傾向から明らかに外れているデータはないか。そこには隠れた社会課題が潜んでいます。</li>
            </ul>
            <p>
              これらを指摘し、「なぜこの現象が起きているのか？」をあなた自身の視点で考察することが、SFCが求める「問題発見・解決」の第一歩となります。
            </p>

            <div className="bg-[#002147] text-white p-8 rounded-2xl mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 font-serif text-white">圧倒的な情報から、本質だけを抽出する力を。</h3>
              <p className="mb-8 text-blue-100 text-sm md:text-base">
                SFCの過去問を前に手が止まってしまう方へ。<br />
                佐藤塾のAI伴走指導なら、資料のどこに着目すべきか、24時間いつでも壁打ちが可能です。
              </p>
              <Link href="/#contact">
                <Button className="bg-[#C5A059] hover:bg-[#B38D45] text-white font-bold py-6 px-10 rounded-full text-lg w-full sm:w-auto shadow-lg shadow-[#C5A059]/20 transition-all hover:scale-105">
                  無料相談でメソッドを体験する
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-slate-100 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 border border-slate-200">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
            <Image alt="佐藤塾 塾長" className="object-cover" fill src="/jukucho.jpg"/>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#002147] mb-2">佐藤塾 塾長</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              慶應SFC（総合政策学部・環境情報学部）受験対策の専門家。これまで数十名の受験生と向き合い、独自のAI伴走システムと1on1指導を組み合わせたメソッドで、偏差値に依存しない逆転合格を多数輩出。
            </p>
            <div className="relative w-32 h-10">
              <Image alt="佐藤塾長 サイン" className="object-contain object-left opacity-80" fill src="/signature.png"/>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 border-t border-slate-200">
          <Link className="flex items-center text-slate-500 hover:text-[#002147] transition-colors group w-full sm:w-auto" href="/guide/past-exams">
            <ArrowRight className="mr-2 rotate-180 transform transition-transform group-hover:-translate-x-1" size={20}/>
            <div className="text-sm">
              <div className="text-slate-400 mb-1">前の記事</div>
              <div className="font-bold">過去問演習編</div>
            </div>
          </Link>
          <Link className="text-slate-400 hover:text-[#002147] transition-colors p-2" href="/guide/essay/articles">
            <LayoutGrid size={24}/>
          </Link>
          {/* No.09は未作成のためダミーリンク */}
          <div className="w-full sm:w-auto opacity-50 cursor-not-allowed">
            <div className="flex items-center text-right text-slate-400 justify-end">
              <div className="text-sm">
                <div className="text-slate-400 mb-1">次の記事</div>
                <div className="font-bold">時間配分編(準備中)</div>
              </div>
              <ArrowRight className="ml-2" size={20} />
            </div>
          </div>
        </div>
      </ArticleContainer>
    </main>
  );
}
