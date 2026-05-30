'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function FloatingCTA() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 同一ページ内に #contact-form が存在する場合はスムーズスクロール
    const targetElement = document.getElementById('contact-form')
    if (targetElement) {
      e.preventDefault()
      const headerHeight = 80
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* 記事テキストを隠しすぎないよう、上部にグラデーションフェードを敷く */}
      <div className="h-6 bg-gradient-to-t from-white to-transparent" />
      <div className="bg-white/95 backdrop-blur px-4 pb-4 pt-2 border-t border-border">
        <Link href="/#contact-form" onClick={handleClick} className="block">
          <Button className="w-full bg-[#800000] hover:bg-[#660000] text-white font-bold py-6 h-auto text-base shadow-lg">
            無料で塾長に相談する
          </Button>
        </Link>
      </div>
    </div>
  )
}
