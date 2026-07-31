import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Lightbulb, FileEdit, FolderKanban, Users, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
}

// 佐藤塾共通のセクションタイトル
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#002147] font-serif tracking-[0.08em] leading-snug">
        {children}
      </h2>
      {subtitle && (
        <p className="text-[#666666] mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
    </div>
  )
}

const articles = [
  {
    title: '慶應SFCのAO入試に「すごい実績」は不要。一般・AO"二刀流"が合格の最短距離である理由',
    description: '「起業経験や国際大会での入賞がないとSFCのAOは受からない」という誤解を解き、一般入試の小論文対策とAO入試対策がどのように相乗効果を生むのか、その具体的な戦略を解説します。',
    href: '/ao-guide/strategy',
    icon: Target,
    category: '戦略・マインドセット',
    color: 'from-[#800000] to-[#600000]',
    badgeBg: 'bg-[#800000]/10',
    badgeText: 'text-[#800000]',
    imageTitle: "慶應SFCのAO入試に「すごい実績」は不要。一般・AO二刀流が合格の最短距離である理由"
  },
  {
    title: '慶應SFCの志望理由書に「立派な社会問題」は不要。自分だけの研究テーマを見つける3ステップと思考の罠',
    description: '「ニュースで見るような大きな社会問題じゃないと合格できない？」そんな不安を解き、SFCの教授陣が本当に求めている「内発的な動機」を見つけるための具体的なステップと、陥りがちな思考の罠を解説します。',
    href: '/ao-guide/theme',
    icon: Lightbulb,
    category: 'テーマ設定',
    color: 'from-[#002147] to-[#001a2e]',
    badgeBg: 'bg-[#002147]/10',
    badgeText: 'text-[#002147]',
    imageTitle: "慶應SFCの志望理由書に「立派な社会問題」は不要。自分だけの研究テーマを見つける3ステップと思考の罠"
  },
  {
    title: '【志望理由書編】SFC教授の心を動かす「志望理由書」の書き方と構成',
    description: 'SFCに対する熱意を論理的な文章に落とし込む方法を解説。単なる「夢を語るポエム」から脱却し、合格を勝ち取るための志望理由書の「3つの要件」と構成ステップを具体的に示します。',
    href: '/ao-guide/statement',
    icon: FileEdit,
    category: '志望理由書',
    color: 'from-[#C5A059] to-[#9d8a42]',
    badgeBg: 'bg-[#C5A059]/10',
    badgeText: 'text-[#C5A059]',
    imageTitle: "【志望理由書編】SFC教授の心を動かす「志望理由書」の書き方と構成"
  },
  {
    title: '【任意提出資料編】「活動実績ゼロ」からでも勝負できるポートフォリオの作り方',
    description: '「アプリ開発や起業の経験がないとSFCは受からない」という誤解を解き、活動実績ゼロからでも教授の心を動かす「思考プロセスの視覚化」によるポートフォリオ作成術を解説します。',
    href: '/ao-guide/portfolio',
    icon: FolderKanban,
    category: 'ポートフォリオ',
    color: 'from-[#002147] to-[#001a2e]',
    badgeBg: 'bg-[#002147]/10',
    badgeText: 'text-[#002147]',
    imageTitle: "【任意提出資料編】「活動実績ゼロ」からでも勝負できるポートフォリオの作り方"
  },
  {
    title: '【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方',
    description: 'SFC特有の鋭いツッコミに対して、暗記した解答ではなく「自分の言葉」で本質的な議論を展開するためのマインドセットと、佐藤塾ならではの実践的な準備方法を解説します。',
    href: '/ao-guide/interview',
    icon: Users,
    category: '面接対策',
    color: 'from-[#800000] to-[#600000]',
    badgeBg: 'bg-[#800000]/10',
    badgeText: 'text-[#800000]',
    imageTitle: "【面接対策編】面接官の「圧迫」を「対話」に変える、主導権の握り方"
  }
]

export default function AoGuideArticlesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": articles.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://lifeeling.jp${article.href}`,
      "name": article.title
    }))
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-[#002147] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 10px)' }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <span className="text-sm font-bold text-white tracking-widest">SFC完全攻略メソッド公開</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif tracking-wider leading-tight">
            慶應SFC <span className="text-[#C5A059]">AO入試</span><br className="hidden md:block" />
            対策ガイド
          </h1>
          <p className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            「すごい実績」がなくても、SFCは合格できる。<br />
            佐藤塾が6年間で蓄積した、研究テーマの設定から面接対策までの全ノウハウを体系的にまとめました。
          </p>
        </div>
      </section>

      {/* Article List Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="AO入試対策を5つのステップに分解。あなたが今抱えている課題から読み進めてください。">
            AO入試攻略の5ステップ
          </SectionTitle>

          <div className="grid gap-8">
            {articles.map((article, index) => {
              return (
                <Link href={article.href} key={index} className="group block bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Thumbnail Area */}
                    <div className="relative h-48 md:h-auto md:w-2/5 bg-[#002147] overflow-hidden flex-shrink-0">
                      <Image 
                        src={`/api/og?title=${encodeURIComponent(article.imageTitle)}`} 
                        alt="サムネイル" 
                        fill
                        priority={index === 0}
                        quality={90}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>

                    {/* Content Area */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${article.badgeBg} ${article.badgeText}`}>
                          {article.category}
                        </span>
                        <span className="text-sm font-bold text-slate-400">STEP 0{index + 1}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#002147] font-serif mb-4 group-hover:text-[#800000] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-[#666666] leading-relaxed text-sm md:text-base mb-6">
                        {article.description}
                      </p>
                      <div className="mt-auto flex items-center justify-end text-[#800000] font-bold text-sm">
                        <span className="tracking-wider">記事を読む</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  )
}