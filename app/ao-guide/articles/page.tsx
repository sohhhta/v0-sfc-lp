import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SFC AO入試 対策ガイド | 佐藤塾",
  description: "慶應SFCのAO入試に特化した対策ガイドです。志望理由書の書き方から自由記述、面接対策まで、合格に直結する戦略を解説します。",
  openGraph: {
    title: "SFC AO入試 対策ガイド | 佐藤塾",
    description: "慶應SFCのAO入試に特化した対策ガイドです。志望理由書の書き方から自由記述、面接対策まで、合格に直結する戦略を解説します。",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "SFC AO入試 対策ガイド | 佐藤塾",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SFC AO入試 対策ガイド | 佐藤塾",
    description: "慶應SFCのAO入試に特化した対策ガイドです。志望理由書の書き方から自由記述、面接対策まで、合格に直結する戦略を解説します。",
    images: ["/hero.jpg"],
  },
};

export default function AoArticlesPortal() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "url": "https://lifeeling.jp/ao-guide/strategy", "name": "慶應SFCのAO入試に「すごい実績」は不要。一般・AO二刀流が合格の最短距離である理由" },
      { "@type": "ListItem", "position": 2, "url": "https://lifeeling.jp/ao-guide/theme", "name": "慶應SFCの志望理由書に「立派な社会問題」は不要。自分だけの研究テーマを見つける3ステップと思考の罠" },
      { "@type": "ListItem", "position": 3, "url": "https://lifeeling.jp/ao-guide/statement", "name": "【志望理由書編】SFC教授の心を動かす「志望理由書」の書き方と構成" },
      { "@type": "ListItem", "position": 4, "url": "https://lifeeling.jp/ao-guide/portfolio", "name": "【任意提出資料編】「活動実績ゼロ」からでも勝負できるポートフォリオの作り方" },
      { "@type": "ListItem", "position": 5, "url": "https://lifeeling.jp/ao-guide/interview", "name": "【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方" }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーローセクション（新規追加） */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-[#002147] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 10px)' }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 shadow-sm">
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <span className="text-sm font-bold text-white tracking-widest">SFC完全攻略メソッド公開</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif tracking-wider leading-tight">
            慶應SFC <span className="text-[#C5A059]">AO入試</span><br className="hidden md:block" />
            対策ガイド
          </h1>
          <p className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            SFC合格に直結する「志望理由書」「自由記述」「面接」の実践的なノウハウを、テーマ別に体系化して公開しています。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-16 md:py-24">
        
        {/* STEP 1 セクション */}
        <div className="mb-20">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-[#002147] text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">1</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif leading-snug">
                合格に向けた「戦略」と「自分だけのテーマ」を決める
              </h2>
            </div>
            <p className="text-slate-600 md:ml-16 text-sm md:text-base leading-relaxed">
              AO入試は最初の方向性で結果が大きく変わります。まずは自分の過去を振り返り、SFCが求める「問題発見」に繋がるテーマをしっかり定めましょう。
            </p>
          </div>

          {/* STEP 1 カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:ml-16">
            {/* 記事カード: 二刀流戦略 */}
            <Link href="/ao-guide/strategy" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
                <Image 
                  src={`/api/og?title=${encodeURIComponent("慶應SFCのAO入試に「すごい実績」は不要。一般・AO二刀流が合格の最短距離である理由")}`} 
                  alt="サムネイル" 
                  fill
                  priority
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-[#C5A059] mb-3 tracking-wider bg-[#C5A059]/10 inline-block w-fit px-3 py-1 rounded-full">STRATEGY</span>
                <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors font-serif">
                  慶應SFCのAO入試に「すごい実績」は不要。一般・AO"二刀流"が合格の最短距離である理由
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                  「起業経験や国際大会での入賞がないとSFCのAOは受からない」という誤解を解き、一般入試の小論文対策とAO入試対策がどのように相乗効果を生むのか、その具体的な戦略を解説します。
                </p>
                <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                  記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* 記事カード: テーマ設定編 */}
            <Link href="/ao-guide/theme" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
                <Image 
                  src={`/api/og?title=${encodeURIComponent("慶應SFCの志望理由書に「立派な社会問題」は不要。自分だけの研究テーマを見つける3ステップと思考の罠")}`} 
                  alt="サムネイル" 
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-[#002147] mb-3 tracking-wider bg-[#002147]/10 inline-block w-fit px-3 py-1 rounded-full">THEME</span>
                <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors font-serif">
                  慶應SFCの志望理由書に「立派な社会問題」は不要。自分だけの研究テーマを見つける3ステップと思考の罠
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                  「ニュースで見るような大きな社会問題じゃないと合格できない？」そんな不安を解き、SFCの教授陣が本当に求めている「内発的な動機」を見つけるための具体的なステップと、陥りがちな思考の罠を解説します。
                </p>
                <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                  記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* STEP 2 セクション */}
        <div className="mb-20">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-[#800000] text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">2</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif leading-snug">
                ぼんやりしたアイデアを「具体的な研究計画」にまとめる
              </h2>
            </div>
            <p className="text-slate-600 md:ml-16 text-sm md:text-base leading-relaxed">
              テーマが決まったら、それを「熱意だけの文章」ではなく、具体的な解決策を伴う「SFCが求める研究計画」として志望理由書にまとめていくステップです。
            </p>
          </div>

          {/* STEP 2 カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:ml-16">
            {/* 記事カード: 志望理由書編 */}
            <Link href="/ao-guide/statement" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
                <Image 
                  src={`/api/og?title=${encodeURIComponent("【志望理由書編】SFC教授の心を動かす「志望理由書」の書き方と構成")}`} 
                  alt="サムネイル" 
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-[#C5A059] mb-3 tracking-wider bg-[#C5A059]/10 inline-block w-fit px-3 py-1 rounded-full">STATEMENT</span>
                <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors font-serif">
                  【志望理由書編】SFC教授の心を動かす「志望理由書」の書き方と構成
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                  SFCに対する熱意を論理的な文章に落とし込む方法を解説。単なる「夢を語るポエム」から脱却し、合格を勝ち取るための志望理由書の「3つの要件」と構成ステップを具体的に示します。
                </p>
                <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                  記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* STEP 3 セクション */}
        <div className="mb-10">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-[#C5A059] text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">3</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] font-serif leading-snug">
                自分の魅力を資料で伝え、面接で面接官としっかり対話する
              </h2>
            </div>
            <p className="text-slate-600 md:ml-16 text-sm md:text-base leading-relaxed">
              書類ができたら、最後はあなたの魅力を直接伝える番です。ポートフォリオで実績を分かりやすく見せ、面接本番で教授たちと自信を持って対話するための準備を行います。
            </p>
          </div>

          {/* STEP 3 カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:ml-16">
            {/* 記事カード: 任意提出資料編 */}
            <Link href="/ao-guide/portfolio" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
                <Image 
                  src={`/api/og?title=${encodeURIComponent("【任意提出資料編】「活動実績ゼロ」からでも勝負できるポートフォリオの作り方")}`} 
                  alt="サムネイル" 
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-[#002147] mb-3 tracking-wider bg-[#002147]/10 inline-block w-fit px-3 py-1 rounded-full">PORTFOLIO</span>
                <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors font-serif">
                  【任意提出資料編】「活動実績ゼロ」からでも勝負できるポートフォリオの作り方
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                  「アプリ開発や起業の経験がないとSFCは受からない」という誤解を解き、活動実績ゼロからでも教授の心を動かす「思考プロセスの視覚化」によるポートフォリオ作成術を解説します。
                </p>
                <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                  記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* 記事カード: 面接対策編 */}
            <Link href="/ao-guide/interview" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
                <Image 
                  src={`/api/og?title=${encodeURIComponent("【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方")}`} 
                  alt="サムネイル" 
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-[#800000] mb-3 tracking-wider bg-[#800000]/10 inline-block w-fit px-3 py-1 rounded-full">INTERVIEW</span>
                <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors font-serif">
                  【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                  SFC特有の鋭いツッコミに対して、暗記した解答ではなく「自分の言葉」で本質的な議論を展開するためのマインドセットと、佐藤塾ならではの実践的な準備方法を解説します。
                </p>
                <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                  記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ボトムCTAセクション（新規追加） */}
      <section className="py-20 md:py-28 px-4 bg-[#002147] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white font-serif mb-6 leading-snug">
            あなたの「日常の違和感」が、<br className="md:hidden" />
            SFC合格の鍵になる。
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            記事を読んで「自分にはどんなテーマが作れるだろう？」と悩んだら、まずは無料相談で塾長と壁打ちをしましょう。実績ゼロからでも、一緒にあなただけの強みを見つけ出します。
          </p>
          <Link href="/#contact-form">
            <Button size="lg" className="bg-[#800000] hover:bg-[#C5A059] text-white text-lg font-bold px-10 py-7 rounded-full shadow-[0_4px_24px_rgba(128,0,0,0.6)] hover:shadow-[0_8px_32px_rgba(197,160,89,0.5)] transition-all duration-300 hover:-translate-y-1 group">
              塾長に無料で相談してみる
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}