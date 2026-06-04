import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "SFC小論文 対策記事一覧 | 佐藤塾",
  description: "慶應SFCの小論文対策に特化した記事一覧です。問題発見・解決の思考プロセスから、実際の過去問を用いたロジカルライティングの実践手法まで、合格に必要なノウハウを網羅しています。",
};

export default function EssayArticlesPortal() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* ヘッダーセクション */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-[#002147] rounded-full mb-6 text-[#C5A059] shadow-lg">
            <BookOpen size={36} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#002147] font-serif mb-6 tracking-wider">
            SFC小論文 対策記事一覧
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            SFC特有の「問題発見・解決」の思考プロセスを身につけ、真っ白な原稿用紙から合格答案を生み出すための実践的なノウハウを公開しています。
          </p>
        </div>

        {/* 記事グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 第1号記事カード */}
          <Link href="/guide/logic-writing" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
              <Image
                src={`/api/og?title=${encodeURIComponent("慶應SFCの小論文で「合格点」に届かない理由とは？")}`}
                alt="サムネイル"
                width={1200}
                height={630}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <span className="text-xs font-bold text-[#C5A059] mb-3 tracking-wider">MIND & TECHNIQUE</span>
              <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors">
                【実践編】合格点に届かない理由とロジカルライティング
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                多くの受験生が陥る『設問の置き去り』を解決する。設問の正確な把握、論理的な構成、体系的な解答からなるロジカルライティングの手順を解説。
              </p>
              <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Coming Soon カード */}
          <div className="flex flex-col bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 overflow-hidden opacity-80">
            <div className="relative h-48 md:h-56 w-full bg-slate-200 flex items-center justify-center">
              <span className="text-slate-400 font-bold text-lg tracking-widest">COMING SOON</span>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-center text-center">
              <span className="text-xs font-bold text-slate-400 mb-3 tracking-wider">PAST EXAMS</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-500 mb-4 leading-tight">
                【過去問解体編】白紙から合格答案を生み出すプロセスの可視化
              </h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                現在、塾長が精魂込めて執筆中です。SFCの実際の過去問を使用し、どのように資料を読み解き、論理を構築していくのかをステップバイステップで解説します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
