import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Clock } from "lucide-react";

// 本文中のハイライト（重要箇所の強調）
export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-b from-transparent from-60% to-[#C5A059]/30 to-60% font-bold text-[#002147]">
    {children}
  </span>
);

// 記事の見出し（紺の縦線＋金の下線の重厚なデザイン、アンカー対応）
export const ArticleH2 = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => (
  <h2
    id={id}
    className="scroll-mt-24 text-xl md:text-2xl font-bold text-[#002147] leading-snug mt-16 mb-8 pl-4 border-l-4 border-[#002147] relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-[3px] after:bg-[#C5A059]"
  >
    {children}
  </h2>
);

// 記事冒頭の目次
export const TableOfContents = ({
  items,
}: {
  items: { id: string; label: string }[];
}) => (
  <nav
    aria-label="目次"
    className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mb-12"
  >
    <p className="text-sm font-bold text-[#002147] tracking-wide mb-4 pb-3 border-b border-slate-200">
      目次
    </p>
    <ol className="flex flex-col gap-3">
      {items.map((item, index) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="flex items-start gap-3 text-slate-700 hover:text-[#800000] transition-colors leading-relaxed"
          >
            <span className="shrink-0 text-[#C5A059] font-bold text-sm mt-0.5">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm md:text-base">{item.label}</span>
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

// 記事末尾の著者紹介ボックス
export const AuthorBox = () => (
  <section className="flex flex-col sm:flex-row gap-5 items-center sm:items-start bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mt-16">
    <Image
      src="/og-image.png"
      alt="塾長 佐藤颯太"
      width={96}
      height={96}
      className="w-24 h-24 rounded-full object-cover border-4 border-[#C5A059] shrink-0"
    />
    <div className="text-center sm:text-left">
      <p className="text-xs font-bold text-[#C5A059] tracking-wide mb-1">
        この記事を書いた人
      </p>
      <p className="text-lg font-bold text-[#002147] mb-2">塾長 佐藤颯太</p>
      <p className="text-sm text-slate-600 leading-relaxed">
        慶應SFC専門塾「佐藤塾」塾長。2人に1人が合格する独自の「AI伴走指導」を確立。
        単なる受験テクニックではなく、生徒一人ひとりの「未来へのオーナーシップ」を引き出す教育を信条とする。
      </p>
    </div>
  </section>
);

// 記事間ナビゲーション（前の記事・一覧に戻る・次の記事の3点配置）
export function ArticleNavigation({
  prev,
  next,
  back,
}: {
  prev?: { title: string; href: string }
  next?: { title: string; href: string }
  back?: { title: string; href: string }
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-t border-gray-200 mt-12 items-center">
      {/* 前の記事 */}
      <div className="flex justify-start order-2 md:order-1">
        {prev && (
          <Link href={prev.href} className="group flex flex-col text-left">
            <span className="text-xs font-bold text-[#C5A059] mb-1">前の記事</span>
            <span className="text-[#002147] font-bold group-hover:text-[#800000] transition-colors line-clamp-2">
              {prev.title}
            </span>
          </Link>
        )}
      </div>

      {/* 一覧に戻る */}
      <div className="flex justify-center order-1 md:order-2">
        {back && (
          <Link href={back.href} className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-full text-sm font-bold text-[#002147] hover:bg-slate-50 transition-colors whitespace-nowrap group">
            <LayoutGrid size={16} className="mr-2 text-[#C5A059] group-hover:text-[#800000] transition-colors" />
            {back.title}
          </Link>
        )}
      </div>

      {/* 次の記事 */}
      <div className="flex justify-end order-3 md:order-3 text-right">
        {next && (
          <Link href={next.href} className="group flex flex-col items-end text-right">
            <span className="text-xs font-bold text-[#C5A059] mb-1">次の記事</span>
            <span className="text-[#002147] font-bold group-hover:text-[#800000] transition-colors line-clamp-2">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}

// 本文中の強調表現（太字＋ゴールドのアンダーライン）統一ルール
export function ArticleHighlight({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-bold border-b-[3px] border-[#C5A059]/60 pb-0.5">
      {children}
    </strong>
  );
}

// 記事のファーストビュー（小論文＝白／AO＝紺背景でテーマ出し分け）
export function ArticleHeader({
  theme,
  category,
  title,
  readTime,
  author = "佐藤颯太",
}: {
  theme: "essay" | "ao";
  category: string;
  title: React.ReactNode;
  readTime: number;
  author?: string;
}) {
  const isAo = theme === "ao";

  return (
    <header
      className={`mb-12 text-center ${
        isAo ? "-mx-6 px-6 pt-16 pb-20 bg-[#002147] text-white" : ""
      }`}
    >
      <div
        className={`inline-block px-4 py-1 text-xs font-bold tracking-widest mb-6 rounded-full ${
          isAo
            ? "bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30"
            : "bg-[#C5A059]/10 text-[#C5A059]"
        }`}
      >
        {category}
      </div>
      <h1
        className={`text-3xl md:text-5xl font-bold leading-[1.3] mb-8 font-serif ${
          isAo ? "text-white" : "text-[#002147]"
        }`}
      >
        {title}
      </h1>
      <div
        className={`flex items-center justify-center text-sm space-x-6 py-4 max-w-2xl mx-auto ${
          isAo
            ? "text-slate-300 border-y border-white/10"
            : "text-gray-500 border-y border-gray-100"
        }`}
      >
        <span className="flex items-center">
          <Clock
            size={16}
            className={`mr-1.5 ${isAo ? "text-[#C5A059]" : "text-[#800000]"}`}
          />{" "}
          {readTime}分で読めます
        </span>
        <span className={`font-bold ${isAo ? "text-white" : "text-[#002147]"}`}>
          監修：{author}
        </span>
      </div>
    </header>
  );
}

// 記事末尾のCTA（無料相談への導線）
export const ArticleCTA = () => (
  <section className="bg-[#002147] text-white rounded-2xl p-8 md:p-10 mt-12 text-center">
    <p className="text-base md:text-lg leading-relaxed mb-6">
      SFCのAO入試は、決して「過去の経歴を競う場」ではありません。<br />
      あなたの中に眠る「問い」を、私たちと一緒に見つけ出しませんか。
    </p>
    <Link
      href="/#contact-form"
      className="inline-block bg-[#C5A059] hover:bg-[#b38f48] text-[#002147] font-bold text-base md:text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
    >
      無料で塾長に相談する
    </Link>
  </section>
);
