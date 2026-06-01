import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// 強調マーカー
export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-[#800000] border-b-2 border-[#C5A059]/40 bg-[#C5A059]/10 px-1 rounded-sm">
    {children}
  </span>
);

// 記事用H2見出し（左に紺の縦線、下に金の細い横線）
export const ArticleH2 = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => (
  <h2
    id={id}
    className="scroll-mt-24 text-xl md:text-2xl font-bold text-[#002147] border-l-4 border-[#002147] border-b border-[#C5A059] pl-4 pb-3 mb-8 mt-16 leading-snug"
  >
    {children}
  </h2>
);

// 記事タイトル直下の著者情報
export const AuthorProfile = ({ date }: { date: string }) => (
  <div className="flex items-center gap-3 mt-6">
    <img
      src="/jukucho.jpg"
      alt="塾長 佐藤颯太"
      className="w-11 h-11 rounded-full object-cover border-2 border-[#C5A059]"
    />
    <div className="leading-tight">
      <p className="text-sm font-bold text-white">塾長 佐藤颯太</p>
      <p className="text-xs text-white/70">公開日: {date}</p>
    </div>
  </div>
);

// 記事冒頭の目次
export const TableOfContents = ({
  items,
}: {
  items: { id: string; label: string }[];
}) => (
  <nav
    aria-label="この記事の目次"
    className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-12"
  >
    <p className="text-base font-bold text-[#002147] mb-4">この記事の目次</p>
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={item.id} className="flex gap-2 leading-relaxed">
          <span className="text-[#C5A059] font-bold">{String(i + 1).padStart(2, "0")}</span>
          <a
            href={`#${item.id}`}
            className="text-slate-700 hover:text-[#800000] hover:underline transition-colors text-sm md:text-base"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

// 記事末尾の著者紹介ボックス
export const AuthorBox = () => (
  <section className="flex flex-col sm:flex-row gap-5 items-center sm:items-start bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mt-16">
    <img
      src="/jukucho.jpg"
      alt="塾長 佐藤颯太"
      className="w-24 h-24 rounded-full object-cover border-4 border-[#C5A059] shrink-0"
    />
    <div className="text-center sm:text-left">
      <p className="text-xs text-[#800000] font-bold mb-1">この記事を書いた人</p>
      <p className="text-lg font-bold text-[#002147] mb-3">塾長 佐藤颯太</p>
      <p className="text-sm text-slate-600 leading-relaxed">
        慶應SFC専門塾の塾長。<Highlight>2人に1人が合格</Highlight>という圧倒的な実績を誇る。
        単なる受験テクニックではなく、生徒自身が社会課題の当事者となる「オーナーシップ教育」を信条とし、
        AIとの壁打ちと1on1指導を融合させた独自メソッドで、一人ひとりの「本気の覚悟」を合格へと導いている。
      </p>
    </div>
  </section>
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
