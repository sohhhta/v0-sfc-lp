import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, AlertCircle, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "合格実績 | 佐藤塾",
  description: "合格率50.0%を誇る佐藤塾の慶應SFC（総合政策学部・環境情報学部）合格実績。入塾前後の圧倒的な小論文の成長（Before/After）と、逆転合格を果たした生徒たちの声をご紹介します。",
  openGraph: {
    title: "合格実績 | 佐藤塾",
    description: "合格率50.0%を誇る佐藤塾の慶應SFC（総合政策学部・環境情報学部）合格実績。入塾前後の圧倒的な小論文の成長（Before/After）と、逆転合格を果たした生徒たちの声をご紹介します。",
    images: [
      {
        url: "https://www.sfc-satojuku.com/hero.jpg",
        width: 1200,
        height: 630,
        alt: "佐藤塾 慶應SFC専門オンライン塾",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "合格実績 | 佐藤塾",
    description: "合格率50.0%を誇る佐藤塾の慶應SFC（総合政策学部・環境情報学部）合格実績。入塾前後の圧倒的な小論文の成長（Before/After）と、逆転合格を果たした生徒たちの声をご紹介します。",
    images: ["https://www.sfc-satojuku.com/hero.jpg"],
  },
};

export default function ResultsPage() {
  return (
    <main className="pt-32 md:pt-40 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#002147] mb-6 font-serif leading-tight">
            圧倒的な成長の軌跡<br className="hidden sm:block" />
            <span className="text-[#C5A059]">SFC逆転合格の実績</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            佐藤塾が誇るのは、表面的な合格者数ではありません。「何もない」と焦っていた受験生たちが、AI伴走と緻密な論理構築指導によって「SFCが求める思考力」を身につけ、自らの力で合格を勝ち取ったプロセスそのものです。
          </p>
        </div>

        {/* Before / After Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <TrendingUp className="text-[#C5A059] mr-3" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-[#002147]">小論文：たった3ヶ月での劇的変化</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-slate-100 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              
              {/* Before */}
              <div className="flex flex-col h-full bg-slate-50 p-6 rounded-2xl border-t-4 border-slate-300">
                <div className="flex items-center mb-4">
                  <span className="bg-slate-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">入塾前（3ヶ月前）</span>
                  <h3 className="font-bold text-slate-700 text-lg">文字数が埋まらず、論理が飛躍</h3>
                </div>
                {/* プレースホルダー画像 */}
                <div className="relative w-full aspect-[4/3] bg-slate-200 rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-slate-300">
                  <div className="text-slate-400 text-sm flex flex-col items-center">
                    <AlertCircle className="mb-2 opacity-50" size={32} />
                    <span>入塾前の小論文画像</span>
                  </div>
                  {/* 本番時はここに <Image src="/before-essay.jpg" layout="fill" objectFit="cover" /> 等を配置 */}
                </div>
                <div className="bg-white p-4 rounded-xl text-sm text-slate-600 border border-slate-200 flex-grow">
                  <p className="mb-2"><strong className="text-[#800000]">【当時の課題】</strong></p>
                  <ul className="list-disc pl-5 space-y-1 mb-0">
                    <li>「書きながら考える」癖があり、途中で論旨がブレる</li>
                    <li>資料のデータを全く引用できず、主観的な感想文になっている</li>
                    <li>120分かけても800字程度しか書けない（時間切れ）</li>
                  </ul>
                </div>
              </div>

              {/* Arrow Indicator (PC: Center absolute, Mobile: between cards) */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#002147] rounded-full items-center justify-center shadow-xl z-10 border-4 border-white">
                <ArrowRight className="text-white" size={24} />
              </div>
              <div className="flex lg:hidden justify-center -my-6 relative z-10">
                <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center shadow-lg border-4 border-white transform rotate-90">
                  <ArrowRight className="text-white" size={20} />
                </div>
              </div>

              {/* After */}
              <div className="flex flex-col h-full bg-[#C5A059]/5 p-6 rounded-2xl border-t-4 border-[#C5A059]">
                <div className="flex items-center mb-4">
                  <span className="bg-[#C5A059] text-white text-xs font-bold px-3 py-1 rounded-full mr-3">入塾後（本番直前）</span>
                  <h3 className="font-bold text-[#002147] text-lg">PREP構造で説得力のある1500字へ</h3>
                </div>
                {/* プレースホルダー画像 */}
                <div className="relative w-full aspect-[4/3] bg-white rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-[#C5A059]/30 shadow-inner">
                  <div className="text-[#C5A059] text-sm flex flex-col items-center">
                    <CheckCircle2 className="mb-2 opacity-50" size={32} />
                    <span>合格レベルの小論文画像</span>
                  </div>
                  {/* 本番時はここに <Image src="/after-essay.jpg" layout="fill" objectFit="cover" /> 等を配置 */}
                </div>
                <div className="bg-white p-4 rounded-xl text-sm text-slate-700 border border-[#C5A059]/20 shadow-sm flex-grow">
                  <p className="mb-2"><strong className="text-[#002147]">【佐藤塾の指導による変化】</strong></p>
                  <ul className="list-disc pl-5 space-y-1 mb-0">
                    <li>最初の30分で<strong>「PREP法の構成メモ」</strong>を作成する型を完全習得</li>
                    <li>AI壁打ちにより、複数の資料をクロス分析してエビデンスとして配置</li>
                    <li>構成に迷いがないため、残り70分で一気呵成に1500字を書き切る</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">逆転合格を果たした塾生の声</h2>
            <p className="text-slate-600">※プライバシー保護のため、仮名で掲載しております。</p>
          </div>

          <div className="space-y-8">
            {/* Case 1 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="bg-blue-50 text-[#002147] font-bold py-2 px-4 rounded-lg inline-block mb-4 text-sm">
                  SFC 環境情報学部 合格
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Aさん（高3・現役生）</h3>
                <p className="text-[#800000] text-sm font-semibold mb-4">活動実績ゼロからのAO突破</p>
                <div className="text-sm text-slate-500 space-y-2">
                  <p><strong>入塾時期：</strong> 高3の6月</p>
                  <p><strong>受講コース：</strong> AO入試・小論文対策</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <Quote className="text-[#C5A059] opacity-30 mb-2" size={40} />
                <p className="text-slate-700 leading-relaxed mb-6 font-medium">
                  「最初はアプリ開発などの派手な実績がなく、AO入試は諦めかけていました。しかし、佐藤塾のAI壁打ちを通じて自分の過去を深掘りするうちに、日常の些細な疑問が立派な研究テーマになることに気づかされました。」
                </p>
                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl">
                  <strong>佐藤塾長からのコメント：</strong><br/>
                  Aさんは「実績がない」と思い込んでいただけでした。無料相談の段階で彼女の思考の深さを見抜き、「結果」ではなく、文献調査から専門家へのインタビューへと至る「思考のプロセス」をポートフォリオとして視覚化する戦略に切り替えました。面接でもそのプロセスが高く評価され、見事合格を掴み取りました。
                </p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="bg-blue-50 text-[#002147] font-bold py-2 px-4 rounded-lg inline-block mb-4 text-sm">
                  SFC 総合政策学部 合格
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Bくん（浪人生）</h3>
                <p className="text-[#800000] text-sm font-semibold mb-4">模試E判定からの小論文大逆転</p>
                <div className="text-sm text-slate-500 space-y-2">
                  <p><strong>入塾時期：</strong> 浪人年の8月</p>
                  <p><strong>受講コース：</strong> 一般入試（小論文特化）</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <Quote className="text-[#C5A059] opacity-30 mb-2" size={40} />
                <p className="text-slate-700 leading-relaxed mb-6 font-medium">
                  「大手予備校の小論文模試ではずっとE判定。自分の書く文章がなぜ評価されないのか全く分かりませんでした。佐藤塾に入り、『最初の30分は絶対に書くな』という指導を受け、PREP法の構造図作りを徹底したことで、世界が変わりました。」
                </p>
                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl">
                  <strong>佐藤塾長からのコメント：</strong><br/>
                  Bくんは文章力はあるものの、設問分析と資料の抽出（エビデンスの選定）が弱く、論理が破綻する癖がありました。毎日のようにAI相手に「構成メモだけ」を壁打ちさせる特訓を行い、論理の骨組みを作る力を徹底的に鍛え上げました。本番では15分余らせて見直しができたと報告を受けた時、合格を確信しました。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#002147] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('/hero.jpg')] bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">次は、あなたの番です。</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              「今の自分の実力で受かるのか不安」「小論文・AOの何から手をつけていいか分からない」。その悩み、まずは無料相談で私たちにぶつけてください。
            </p>
            <Link href="/#contact">
              <Button className="bg-[#C5A059] hover:bg-[#B38D45] text-white font-bold py-6 px-12 rounded-full text-lg w-full sm:w-auto shadow-lg shadow-[#C5A059]/20 transition-all hover:scale-105">
                無料相談に申し込む
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
