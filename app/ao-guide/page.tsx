'use client'

import React from 'react';
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle2, Lightbulb, ShieldCheck, ArrowRight, BrainCircuit, UserCheck, GraduationCap, ArrowUpRight, Target } from 'lucide-react';

// 佐藤塾の既存下層ページ（essay/page.tsx）と一字一句違わぬ共通見出し装飾コンポーネント
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-[0.08em]">
        {children}
      </h3>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px w-16 bg-[#002147]" />
        <div className="w-2 h-2 bg-[#002147] rotate-45" />
        <div className="h-px w-16 bg-[#002147]" />
      </div>
    </div>
  )
}

export default function AoGuidePage() {
  return (
    <div className="min-h-screen bg-background text-slate-900 font-sans leading-relaxed selection:bg-[#C5A059]/30">
      {/* Hero Section - 既存下層ページと100%同一の背景・テキスト中央揃え（text-center）仕様 */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#002147] to-[#003d6b]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A059] border border-[#C5A059]/50 px-5 py-2 rounded-full mb-8 uppercase">
            SFC AO CONCEPT LP
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-6 font-serif tracking-[0.08em]" style={{ wordBreak: 'keep-all' }}>
            AO入試攻略メソッド
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
            実績を誇るだけの書類は不要、大学入学を「ゴール」ではなく「手段」に変える、佐藤塾のオーナーシップ教育。
          </p>
        </div>
      </section>

      {/* Main Content - 既存下層ページと共通のコンテナ幅・余白構造 */}
      <main className="max-w-5xl mx-auto px-4 py-16 md:py-20">

        {/* Section 1: 実績がないと合格できない、は勘違い */}
        <section className="mb-20">
          <SectionTitle>実績がないと合格できない、は勘違い</SectionTitle>
          
          <div className="grid md:grid-cols-12 gap-8 items-center mt-12">
            <div className="md:col-span-7 space-y-6">
              <p className="text-base md:text-lg text-[#333333] leading-loose">
                「世界一周をしました」と「日本一周をしました」。<br />
                一見、世界一周の方が社会的な評価が高く、AO入試でも有利に思えるかもしれません。しかし、慶應SFCの教授陣が見ているのは、その表面的なスケールではありません。
              </p>
              <div className="bg-white border-l-4 border-[#002147] px-6 md:px-10 py-6 rounded-lg shadow-lg border border-slate-100">
                <p className="font-bold text-[#002147] mb-2 text-base md:text-lg">
                  「どうして世界または日本一周をしようと思ったのか？」
                </p>
                <p className="text-[#333333] text-sm md:text-base leading-relaxed">
                  その行動の背景にある独自の動機（意志）と、そこから得た問いが、あなたが大学で進めたい研究の方向性とどれほど強固に繋がっているか。この「因果の解像度」こそが合否を分ける基準です。
                </p>
              </div>
              <p className="text-[#333333]">
                佐藤塾では、過去の実績を並べるだけの書類作成は行いません。あなたの内側にある純粋な「なぜ」を対話を通じて一緒に探索し、SFCの学問領域へと論理的に接続します。
              </p>
            </div>

            <div className="md:col-span-5 bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 shadow-md">
              <h3 className="text-lg font-serif font-bold text-[#002147] mb-4 flex items-center gap-2">
                <Target className="text-[#800000]" size={20} />
                SFCが見抜く2つの本質
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-slate-200">
                  <span className="text-xs font-bold text-[#800000] block mb-1">✕ 誤ったアプローチ</span>
                  <p className="text-sm font-medium text-[#333333]">「こんなにすごい実績があるから合格させてください」という実績アピール</p>
                </div>
                <div className="bg-white p-4 rounded border border-[#C5A059]/40 bg-[#C5A059]/5">
                  <span className="text-xs font-bold text-[#002147] block mb-1">◯ 正しいアプローチ</span>
                  <p className="text-sm font-bold text-[#002147]">「この問題意識を解決するために、SFCのこの環境が必要である」という必然性</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 合格率50.0%を支える「非・美化」戦略（塾長指示により解決策の前段へ移動） */}
        <section className="mb-20">
          <SectionTitle>合格率50.0%を支える「非・美化」戦略</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#800000] rounded flex items-center justify-center mb-6 text-white shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#002147] mb-4 tracking-wide">
                1. 一般入試と並行するロードマップ
              </h4>
              <p className="text-[#333333] text-sm md:text-base leading-loose">
                AO入試は非常に倍率も高い不確実な試験です。だからこそ、佐藤塾では「一般入試の学力を同時に身につけるロードマップ」を前提として指導を行います。
              </p>
              <p className="text-[#333333] text-sm md:text-base leading-loose mt-4">
                「万が一AOが不合格でも一般で戦いきれる」という絶対的な学力と精神的な余裕。これがあるからこそ、AOの書類作成においても守りに入らず、大胆で力強いロジックを展開することが可能になります。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#002147] rounded flex items-center justify-center mb-6 text-white shadow-sm">
                <UserCheck size={24} />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#002147] mb-4 tracking-wide">
                2. 評価ベースの「割引」を捨て、自分ごと化する
              </h4>
              <p className="text-[#333333] text-sm md:text-base leading-loose">
                「こう書いた方が評価されるのではないか」といった他人軸の割引を重視した書類は、SFCの教授陣に一瞬で見抜かれます。
              </p>
              <p className="text-[#333333] text-sm md:text-base leading-loose mt-4">
                大切なのは、自分で考え、自分で調査し、自ら根拠を持って明文化するプロセスです。この「オーナーシップ（自律性）」が芽生えた受験生は、塾長への質問の質が劇的に変わり、自分の研究テーマに関して誰よりも深い解像度を持つようになります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 24時間SFC専用AI伴走指導（塾長指示により解決策としてストーリーの山場へ配置） */}
        <section className="mb-20">
          <SectionTitle>24時間SFC専用AI伴走指導</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#C5A059]">
                <BrainCircuit size={24} />
                <span className="text-xs font-bold tracking-widest uppercase">SOLUTION METHOD</span>
              </div>
              <h4 className="text-xl md:text-2xl font-serif font-bold text-[#002147] tracking-[0.08em] leading-tight">
                ボトムアップで積み上げる、思考の高速化。
              </h4>
              <p className="text-[#333333] leading-relaxed">
                最初から完璧な構成案を考えて提出する必要は一切ありません。あなたの頭の中にある断片的な興味や関心を、まずはそのまま佐藤塾のAIシステムにぶつけてください。
              </p>
              <p className="text-[#333333] leading-relaxed">
                あらゆる可能性、あらゆる direction（方向性）、あらゆる先行研究や手段の調査をAIと共に徹底的に行います。この高速な試行錯誤（ブラッシュアップ）の積み重ねが、あなたの思考を劇的に進化させます。
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#800000] shrink-0 mt-1" size={18} />
                  <span className="text-sm text-[#333333]"><strong>4年間ブレない自信の構築:</strong> 腑に落ちるまで検証し尽くすため、入学後もそのまま走り続けられる研究計画が完成します。</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#800000] shrink-0 mt-1" size={18} />
                  <span className="text-sm text-[#333333]"><strong>圧倒的なアウトプットスピード:</strong> 完璧主義による停滞をゼロにし、面接でも「自分の言葉」で自信を持って受け答えができるようになります。</span>
                </div>
              </div>
            </div>

            {/* AI Interaction Simulation Component */}
            <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-200">
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
                    <p className="leading-relaxed text-slate-200">素晴らしい着眼点です。単なる批判に留めず、SFCの「環境情報学」の視点から、ローカルメディアを用いた自律的なコミュニティ再定義 of 先行研究と接続してみましょう。以下の3つのアプローチが考えられます...</p>
                  </div>
                </div>
                <div className="bg-[#C5A059]/10 text-[#002147] p-3 rounded border border-[#C5A059]/30 text-xs font-medium">
                  💡 <strong>効果:</strong> この圧倒的な対話量によって自分の研究に誰よりも詳しくなり、二次試験の面接でも「自分の言葉」で自信を持って受け答えができるようになります。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Recent Trends */}
        <section className="mb-10">
          <div className="bg-[#002147] text-white p-8 md:p-12 rounded-xl shadow-xl flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="p-4 bg-[#C5A059] rounded-lg text-[#002147] shrink-0 shadow-md">
              <Lightbulb size={36} />
            </div>
            <div className="space-y-4">
              <h4 className="text-xl md:text-2xl font-serif font-bold tracking-[0.08em]">
                直近のSFC AO入試が求める人物像の真実
              </h4>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                現在のSFC入試において、求められるオーナーシップの基準はさらに高まっています。
              </p>
              <p className="text-slate-100 text-sm md:text-base leading-loose">
                どんなに素晴らしい実績の持ち主であっても、「大学に入学すること」がゴールになっている受験生は冷酷に落とされます。大学をあくまで「手段」として位置づけ、「本当にそれをやりたいのか？」「大学の4年間、外部環境が変わってもやり続けることができるのか？」という、強烈な意志と客観的な根拠がこれまで以上に対比されています。
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* CTA Section - essay/page.tsxの下部コンバージョンエリアと100%同一のコンポーネント・クラス設計 */}
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