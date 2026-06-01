import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// 強調マーカー
export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-[#800000] border-b-2 border-[#C5A059]/40 bg-[#C5A059]/10 px-1 rounded-sm">
    {children}
  </span>
);

// 記事用H2見出し
export const ArticleH2 = ({ icon: Icon, children }: { icon: any, children: React.ReactNode }) => (
  <h2 className="text-xl md:text-2xl font-bold text-[#002147] border-b-2 border-[#C5A059] pb-3 mb-8 flex items-center gap-2 mt-16">
    <Icon className="w-6 h-6 text-[#800000]" />
    {children}
  </h2>
);

// 記事末尾の共通CTA
export const ArticleCTA = () => (
  <section className="bg-slate-100 p-8 rounded-xl border border-slate-200 mt-16">
    <h3 className="text-xl font-bold text-[#002147] mb-6 text-center">
      まとめ：小手先のテクニックを捨て、自分の人生と向き合おう
    </h3>
    <p className="mb-8 text-center text-slate-700 leading-relaxed">
      SFCのAO入試は、決して「実績の品評会」ではありません。<br />
      今のあなたに自信を持てる実績がなくても、全く問題ありません。<br />
      大切なのは、これからSFCで何を成し遂げたいかという「本気の覚悟」です。
    </p>

    <div className="bg-white p-6 rounded-lg shadow-sm text-center border-t-4 border-[#800000]">
      <h4 className="text-lg font-bold text-[#800000] mb-4">
        あなたの「SFCへの想い」を、私にぶつけてみませんか？
      </h4>
      <p className="mb-6 text-slate-600 text-sm md:text-base">
        今年度の伴走指導は残り枠がわずかとなっています。<br />
        実績がないと悩んでいる方、テーマが決まらない方、まずは無料相談で現状の課題を整理しましょう。
      </p>
      <Link
        href="/#contact"
        className="inline-flex items-center justify-center gap-2 bg-[#800000] text-white px-8 py-4 rounded-full font-bold hover:bg-[#600000] transition-colors duration-300 shadow-md hover:shadow-lg w-full md:w-auto"
      >
        無料で塾長に個別相談する
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </section>
);
