import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "SFC小論文 対策ガイド | 佐藤塾",
  description: "慶應SFCの小論文に特化した対策ガイドです。独自のロジカルライティング・メソッドと過去問演習による実践的な思考プロセスを解説します。",
  openGraph: {
    title: "SFC小論文 対策ガイド | 佐藤塾",
    description: "慶應SFCの小論文に特化した対策ガイドです。独自のロジカルライティング・メソッドと過去問演習による実践的な思考プロセスを解説します。",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "SFC小論文 対策ガイド | 佐藤塾",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SFC小論文 対策ガイド | 佐藤塾",
    description: "慶應SFCの小論文に特化した対策ガイドです。独自のロジカルライティング・メソッドと過去問演習による実践的な思考プロセスを解説します。",
    images: ["/hero.jpg"],
  },
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

          {/* 第2号記事カード: 過去問演習編 */}
          <Link href="/guide/past-exams" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
              <Image
                src={`/api/og?title=${encodeURIComponent("【過去問演習編】白紙から合格答案を組み立てる思考プロセスの可視化")}`}
                alt="サムネイル"
                width={1200}
                height={630}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <span className="text-xs font-bold text-[#C5A059] mb-3 tracking-wider">PAST EXAMS</span>
              <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors">
                【過去問演習編】白紙から合格答案を組み立てる思考プロセスの可視化
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                SFC小論文の過去問演習において、膨大な資料をどう読み解き、どう論理を構築するのか。設問の把握からアウトライン作成、当事者意識の示し方まで、具体的なプロセスを解説します。
              </p>
              <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* 第3号記事カード: 資料読解編 */}
          <Link href="/guide/data-reading" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
              <Image
                src={`/api/og?title=${encodeURIComponent("【資料読解編】SFC特有の「膨大な資料」から使えるデータを瞬時に見抜くテクニック")}`}
                alt="サムネイル"
                width={1200}
                height={630}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <span className="text-xs font-bold text-[#C5A059] mb-3 tracking-wider">DATA READING</span>
              <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors">
                【資料読解編】膨大な資料から使えるデータを瞬時に見抜くテクニック
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                総合政策・環境情報学部で出題される大量のグラフや文章。すべてを読もうとして時間切れになる受験生へ、自分の主張を補強する「エビデンス」だけを素早く抽出する読解法を解説します。
              </p>
              <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* 第4号記事カード: 時間配分編 */}
          <Link href="/guide/time-management" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
              <Image
                src={`/api/og?title=${encodeURIComponent("【時間配分編】120分をどう使う？構成メモ作成から執筆までの最適タイムマネジメント")}`}
                alt="サムネイル"
                width={1200}
                height={630}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <span className="text-xs font-bold text-[#C5A059] mb-3 tracking-wider">TIME MANAGEMENT</span>
              <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors">
                【時間配分編】120分をどう使う？構成メモ作成から執筆までの最適タイムマネジメント
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                SFC小論文で「時間が足りない」と焦る受験生へ。最初の30分で合否が決まる「構成メモ」の作り方と、120分を効率的に使い切るための黄金の時間配分法を解説します。
              </p>
              <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* 第5号記事カード: 頻出テーマ編 */}
          <Link href="/guide/tech-society" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 md:h-56 w-full bg-[#002147] overflow-hidden">
              <Image
                src={`/api/og?title=${encodeURIComponent("【頻出テーマ編】SFC小論文で狙われる「テクノロジーと社会問題」の攻略法")}`}
                alt="サムネイル"
                width={1200}
                height={630}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <span className="text-xs font-bold text-[#C5A059] mb-3 tracking-wider">TECH & SOCIETY</span>
              <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors">
                【頻出テーマ編】SFC小論文で狙われる「テクノロジーと社会問題」の攻略法
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                AIやデータサイエンスなどのテクノロジーを用いて、現代の社会課題をどう解決するか。SFC小論文で最も頻出するテーマに対し、教授陣が高く評価する「SFC的アプローチ」の型を解説します。
              </p>
              <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
