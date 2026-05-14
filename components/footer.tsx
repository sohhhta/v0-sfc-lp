'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#002147] text-white py-16 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold font-serif mb-2 tracking-wider">佐藤塾</h3>
            <p className="text-gray-400 text-sm tracking-widest uppercase font-sans">
              Keio SFC Prep School
            </p>
          </div>
          <div className="flex flex-wrap gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline">
              ホーム
            </Link>
            <Link href="/course" className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline">
              コース・料金
            </Link>
            <Link href="/results" className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline">
              合格実績
            </Link>
            <Link href="/guide" className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline">
              小論文ガイド
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
          <p>&copy; 2026 佐藤塾. All rights reserved.</p>
          <p>慶應義塾大学SFC（総合政策学部・環境情報学部）受験対策専門</p>
        </div>
      </div>
    </footer>
  )
}