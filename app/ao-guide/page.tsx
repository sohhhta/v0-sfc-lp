import { Metadata } from "next";
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "AO入試 攻略ガイド（記事一覧） | 慶應SFC専門塾 佐藤塾",
  description: "「すごい実績」は不要。慶應SFCの教授陣が本当に求めている「未来へのオーナーシップ」を言語化し、合格を掴み取るための佐藤塾独自のメソッド・記事一覧です。",
};

export default function AoGuidePortalPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans leading-relaxed selection:bg-[#C5A059]/30">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#002147] to-[#003d6b]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A059] border border-[#C5A059]/50 px-5 py-2 rounded-full mb-8 uppercase">
            AO ENTRANCE EXAM GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-6 font-serif tracking-[0.08em]" style={{ wordBreak: 'keep-all' }}>
            AO入試 攻略ガイド
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
            「すごい実績」は不要。慶應SFCの教授陣が本当に求めている「未来へのオーナーシップ」を言語化し、合格を掴み取るためのメソッドを公開します。
          </p>
        </div>
      </section>

      {/* 記事一覧 Section */}
      <main className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#002147] border-b-2 border-[#C5A059] pb-3 flex items-center gap-3">
            <BookOpen className="text-[#800000]" size={28} />
            記事一覧
          </h2>
        </div>

        {/* 記事カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 第1号記事カード */}
          <Link href="/ao-guide/strategy" className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 w-full bg-[#002147] overflow-hidden">
              <img 
                src={`/api/og?title=${encodeURIComponent("慶應SFCのAO入試に「すごい実績」は不要。一般・AO“二刀流”が合格の最短距離である理由")}`} 
                alt="サムネイル" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold text-[#C5A059] mb-3">戦略・マインド編</span>
              <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-4 leading-tight group-hover:text-[#800000] transition-colors">
                慶應SFCのAO入試に「すごい実績」は不要。一般・AO“二刀流”が合格の最短距離である理由
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow">
                「特別な実績がないと合格できない」は誤解です。一般入試との両立戦略と、圧倒的な原体験の深掘りこそがSFC合格の最短ルートであることを解説します。
              </p>
              <div className="flex items-center text-[#800000] font-bold text-sm mt-auto">
                記事を読む <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Coming Soon枠 */}
          <div className="flex flex-col bg-slate-100/50 rounded-2xl border border-dashed border-slate-300 shadow-sm overflow-hidden items-center justify-center p-8 text-center min-h-[350px]">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-400">
              <BookOpen size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-400 mb-2">
              【テーマ設定編】「問題発見・解決」の本当の意味
            </h3>
            <span className="inline-block bg-slate-200 text-slate-500 text-xs font-bold px-3 py-1 rounded-full mt-2">
              Coming Soon
            </span>
          </div>

        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-[#800000] to-[#600000]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">
            AO入試対策で迷ったら、まずは無料相談
          </h2>
          <p className="text-base text-white/80 mb-8 leading-relaxed">
            あなたの現在地を診断し、SFC合格までの道筋を塾長が直接ご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact-form">
              <Button className="bg-[#C5A059] hover:bg-[#9d8a42] text-[#002147] font-bold px-10 py-6 h-auto w-full sm:w-auto">
                無料で塾長に相談する
              </Button>
            </Link>
            <Link href="/course">
              <Button className="border-2 border-[#C5A059] text-[#C5A059] bg-transparent hover:bg-[#C5A059] hover:text-[#002147] font-bold px-10 py-6 h-auto transition-all duration-300 w-full sm:w-auto">
                コース詳細を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
