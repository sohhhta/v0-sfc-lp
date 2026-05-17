import React from 'react';
import { CheckCircle2, Lightbulb, ShieldCheck, Zap, ArrowRight, BrainCircuit, UserCheck, GraduationCap, ArrowUpRight, BookOpen, Target } from 'lucide-react';

export const metadata = {
  title: '慶應SFC AO入試・完全攻略ガイド | 合格率50.0%の佐藤塾',
  description: '世界一周の実績より「なぜそれをするのか」の意志。24時間AI伴走×塾長1on1で、あなたの志望理由を「4年間走り続けられる確信」へと昇華させます。',
};

// 佐藤塾の象徴的な見出し装飾コンポーネント（実コードの設計に準拠）
const SectionDivider = () => (
  <div className="flex items-center justify-center gap-4 my-6">
    <div className="h-px w-16 bg-[#002147]" />
    <div className="w-2 h-2 bg-[#002147] rotate-45" />
    <div className="h-px w-16 bg-[#002147]" />
  </div>
);

export default function AoGuidePage() {
  return (
    <div className="bg-white text-slate-900 font-sans leading-relaxed selection:bg-[#C5A059]/30">
      {/* Hero Section - /guide/essayや/resultsなどの下層ページと完全に統一した背景・余白仕様 */}
      <section className="relative pt-24 pb-16 bg-[#002147] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.15),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded bg-[#C5A059] text-[#002147] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              SFC AO CONCEPT LP
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 tracking-[0.08em] leading-tight">
              才能の有無ではない。<br className="hidden sm:inline" />
              SFC AO入試で「2人に1人が合格する」<br />
              真実の攻略ロジック。
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 font-light leading-relaxed">
              実績を誇るだけの書類は、もういらない。<br />
              「大学入学を手段」に変える、佐藤塾のオーナーシップ教育。
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#C5A059] text-white font-bold px-8 py-4 rounded transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                無料相談で可能性を診断する <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Core Realism */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#002147] tracking-[0.08em]">
            実績の大きさは、合否に関係ない
          </h2>
          <SectionDivider />
          <p className="text-slate-600 mt-4">
            多くの受験生や一般の専門塾が陥る「AO入試の最大の勘違い」がここにあります。
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <p className="text-base md:text-lg leading-loose text-slate-800">
              「世界一周をしました」と「日本一周をしました」。<br />
              一見、世界一周の方が社会的な評価が高く、AO入試でも有利に思えるかもしれません。しかし、慶應SFCの教授陣が見ているのは、その**表面的なスケールではありません**。
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#C5A059] shadow-sm">
              <p className="font-bold text-[#002147] mb-2 text-base md:text-lg">
                「どうして世界（日本）を一周しようと思ったのか？」
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                その行動の背景にある独自の動機（意志）と、そこから得た問いが、あなたが大学で進めたい研究の方向性とどれほど強固に繋がっているか。この「因果の解像度」こそが合否を分ける唯一の基準です。
              </p>
            </div>
            <p className="text-slate-800">
              佐藤塾では、過去の華々しい実績をただ並べるだけの無意味な書類作成は行いません。あなたの内側にある純粋な「なぜ」を、SFCの学問領域へと論理的に接続します。
            </p>
          </div>

          <div className="md:col-span-5 bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-[#002147] mb-4 flex items-center gap-2">
              <Target className="text-[#800000]" size={20} />
              SFCが見抜く2つの本質
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-slate-200">
                <span className="text-xs font-bold text-[#800000] block mb-1">✕ 誤ったアプローチ</span>
                <p className="text-sm font-medium text-slate-700">「こんなにすごい実績があるから合格させてください」という実績アピール</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#C5A059]/40 bg-[#C5A059]/5">
                <span className="text-xs font-bold text-[#002147] block mb-1">◯ 正しいアプローチ</span>
                <p className="text-sm font-bold text-[#002147]">「この強烈な問題意識を解決するために、SFCのこの環境環境が必要である」という必然性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI Companion (Method 1) */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#C5A059]">
                <BrainCircuit size={24} />
                <span className="text-xs font-bold tracking-widest uppercase">METHOD 01</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#002147] tracking-[0.08em] leading-tight">
                ボトムアップで積み上げる、<br />24時間SFC専用AI伴走指導。
              </h2>
              <p className="text-slate-700 leading-relaxed">
                最初から完璧な構成案を考えて提出する必要は一切ありません。あなたの頭の中にある断片的な興味や関心を、まずはそのまま佐藤塾のAIシステムにぶつけてください。
              </p>
              <p className="text-slate-700 leading-relaxed">
                あらゆる可能性、あらゆる方向性、あらゆる先行研究や手段の調査をAIと共に徹底的に行います。この高速な試行錯誤（ブラッシュアップ）の積み重ねが、あなたの思考を劇的に進化させます。
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#800000] shrink-0 mt-1" size={18} />
                  <span className="text-sm text-slate-800"><strong>4年間ブレない自信の構築:</strong> 腑に落ちるまで検証し尽くすため、入学後もそのまま走り続けられる研究計画が完成します。</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#800000] shrink-0 mt-1" size={18} />
                  <span className="text-sm text-slate-800"><strong>圧倒的なアウトプットスピード:</strong> 完璧主義による停滞をゼロにし、ボトムアップで質の高い書類を構築します。</span>
                </div>
              </div>
            </div>

            {/* AI Interaction Simulation Component */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-mono text-slate-400">SatoJuku AI Dashboard</span>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex flex-col items-end">
                  <div className="bg-slate-100 text-slate-800 p-3 rounded-lg max-w-[90%] rounded-tr-none">
                    <p className="text-xs text-slate-500 font-bold mb-1">受験生</p>
                    <p className="leading-relaxed">メディアによる地方の過疎化のイメージを覆したいという断片的なアイデアしかありません...</p>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="bg-[#002147] text-white p-3 rounded-lg max-w-[90%] rounded-tl-none">
                    <p className="text-xs text-[#C5A059] font-bold mb-1">佐藤塾SFC特化AI</p>
                    <p className="leading-relaxed text-slate-200">素晴らしい着眼点です。単なる批判に留めず、SFCの「環境情報学」の視点から、ローカルメディアを用いた自律的なコミュニティ再定義の先行研究と接続してみましょう。以下の3つのアプローチが考えられます...</p>
                  </div>
                </div>
                <div className="bg-[#C5A059]/10 text-[#002147] p-3 rounded border border-[#C5A059]/30 text-xs font-medium">
                  💡 <strong>効果:</strong> この圧倒的な対話量によって自分の研究に誰よりも詳しくなり、二次試験の面接でも「自分の言葉」で自信を持って受け答えができるようになります。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Dual Track Strategy */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#002147] tracking-[0.08em]">
            合格率50.0%を支える「非・美化」戦略
          </h2>
          <SectionDivider />
          <p className="text-slate-600 mt-4">
            佐藤塾の合格率が「2人に1人」という驚異的な数値を維持している裏側には、徹底して現実を見据えた2つの共通点があります。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#800000] rounded flex items-center justify-center mb-6 text-white shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#002147] mb-4 tracking-wide">
              1. AO入試を特別視せず、一般入試と並行する
            </h3>
            <p className="text-slate-700 text-sm md:text-base leading-loose">
              AO入試は定員が増えたとはいえ、依然として不確実性の高い厳しい試験です。だからこそ、佐藤塾では**「一般入試の学力を同時に身につける教育ロードマップ」**を前提として指導を行います。
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-loose mt-4">
              「万が一AOがダメでも一般で叩き切れる」という絶対的な実力と精神的な余裕。これがあるからこそ、AOの書類作成においても守りに入らず、大胆で力強いロジックを展開することが可能になります。
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#002147] rounded flex items-center justify-center mb-6 text-white shadow-sm">
              <UserCheck size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#002147] mb-4 tracking-wide">
              2. 評価ベースの「割引」を捨て、自分ごと化する
            </h3>
            <p className="text-slate-700 text-sm md:text-base leading-loose">
              「こう書いた方がウケが良いのではないか」「この実績を出せば評価されるのではないか」といった、他人軸の評価を前提とした書類（割引された自己表現）は、SFCの教授陣に一瞬で見抜かれます。
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-loose mt-4">
              大切なのは、自分で考え、自分で調査し、自ら根拠を持って明文化するプロセスです。この**「オーナーシップ（自律性）」**が芽生えた受験生は、塾長への質問の質が劇的に変わり、自分の研究テーマに関して誰よりも深い解像度を持つようになります。
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Recent Trends */}
      <section className="py-16 md:py-20 bg-[#002147] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center md:text-left flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="p-4 bg-[#C5A059] rounded-lg text-[#002147] shrink-0 shadow-md">
              <Lightbulb size={36} />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-[0.08em]">
                直近のSFC AO入試が求める人物像の真実
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                現在のSFC入試において、求められるオーナーシップの基準はさらに高まっています。
              </p>
              <p className="text-slate-100 text-sm md:text-base leading-loose">
                どんなに素晴らしい実績の持ち主であっても、「大学に入学すること」がゴールになっている受験生は冷酷に落とされます。大学をあくまで「手段」として位置づけ、**「本当にそれをやりたいのか？」「大学の4年間、外部環境が変わってもやり続けることができるのか？」**という、強烈な意志と客観的な根拠がこれまで以上に対比されています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section id="contact" className="py-20 md:py-28 bg-white text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 bg-[#C5A059]/10 text-[#002147] rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002147] tracking-[0.08em] mb-4">
            次の「50.0%」に入るのは、あなたです。
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            表面的なコピペ書類や代筆指導では、SFCの面接を突破することはできません。24時間のAI伴走と塾長による 1on1 の最終研磨で、あなただけの「ブレない軸」を構築しませんか？
          </p>
          <div className="inline-block bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto">
            <p className="text-sm font-bold text-[#800000] mb-3 flex items-center justify-center gap-1">
              <span>★</span> 現在、個別体験・無料相談を受付中
            </p>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              塾長自らが現在の状況をヒアリングし、SFC AO入試への最適な学習・対策ロードマップをご提案します。
            </p>
            <a 
              href="/#contact" 
              className="w-full inline-flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#C5A059] text-white text-base font-bold px-8 py-4 rounded transition-all duration-300 shadow-[0_4px_24px_rgba(128,0,0,0.2)] hover:scale-[1.02]"
            >
              塾長に無料相談する <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}