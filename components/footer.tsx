'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 md:py-16 px-4 font-sans mt-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">ホーム</Link>
          <Link href="/course" className="text-white/80 hover:text-white transition-colors text-sm">コース・料金</Link>
          <Link href="/results" className="text-white/80 hover:text-white transition-colors text-sm">合格実績</Link>
          <Link href="/guide/logic-writing" className="text-white/80 hover:text-white transition-colors text-sm">小論文ガイド</Link>
          <Link href="/ao-guide" className="text-white/80 hover:text-white transition-colors text-sm">AO入試ガイド</Link>
        </div>

        <div className="text-center border-t border-white/10 pt-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif tracking-[0.1em]">佐藤塾</h3>
          <p className="text-white/80 mb-8 text-base">
            慶應義塾大学 SFC（総合政策学部・環境情報学部）受験対策専門塾
          </p>
          <p className="text-xs text-white/40">
            &copy; 2026 佐藤塾. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}