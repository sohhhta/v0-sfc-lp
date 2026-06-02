import Link from "next/link";

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
    <img
      src="/og-image.png"
      alt="塾長 佐藤颯太"
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
