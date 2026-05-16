import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AoGuidePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-6 font-sans">
      <div className="text-center max-w-xl mx-auto">
        <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A059] border border-[#C5A059]/50 px-5 py-2 rounded-full mb-6 uppercase">
          AO ENTRANCE GUIDE
        </span>
        <h1 className="text-2xl md:text-4xl font-bold text-[#002147] mb-4 font-serif">
          AO入試対策ガイド
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
          ただいま慶應SFCのAO入試（志望理由書・面接）における「問題発見能力」の磨き方を徹底解説した特化ガイド記事を執筆中です。近日中に公開いたします。
        </p>
        <Link href="/">
          <Button className="bg-[#002147] hover:bg-[#800000] text-white px-8 py-6 h-auto font-bold transition-all">
            ホームへ戻る
          </Button>
        </Link>
      </div>
    </div>
  )
}
