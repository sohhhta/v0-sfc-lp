'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 1. 各ページ（トップ・下層すべて）のファーストビュー（Hero内）にあるメインCTAボタンを正確に捕捉
    // トップページの「無料で個別相談を予約する」ボタン、または下層ページのHero内ボタンをクラスや構造からピンポイントで指定
    const mainCtaButton =
      document.querySelector('section.relative a[href="#contact-form"] button') ||
      document.querySelector('section.relative Link[href="/#contact-form"] button') ||
      document.querySelector('section.relative a[href*="contact-form"]') ||
      document.querySelector('h1'); // 万が一のためのフォールバック

    if (!mainCtaButton) {
      // 予期せぬ理由でボタンが検知できない場合は、スクロール量（200px）で安全に制御
      const handleScroll = () => {
        setIsVisible(window.scrollY > 200)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

    // 2. Intersection Observerによる精密な共存防止ロジック（PC/SP共通）
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ファーストビューのメインボタンが「1ミリでも画面内にある」場合は、下部フローティングを完全に消す（共存防止）
        // 画面外に完全に退出（isIntersecting === false）したら、下部フローティングを滑らかに出現させる
        setIsVisible(!entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0, // 完全に画面外に出た瞬間を正確に捉える
        rootMargin: '-80px 0px 0px 0px' // 固定ヘッダーの高さ分、上部にマージンを持たせる
      }
    )

    observer.observe(mainCtaButton)
    return () => observer.unobserve(mainCtaButton)
  }, [])

  // フォームへの滑らかな高速スムーススクロール処理
  const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const targetElement = document.getElementById('contact-form')
    if (targetElement) {
      const headerHeight = 80
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* =========================================================================
          1. SP版（モバイル端末用）：画面最下部にピタッと吸い付く横長100%の極上UI
         ========================================================================= */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-white via-white/95 to-transparent transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        <Button
          onClick={handleScrollToForm}
          className="w-full h-14 bg-[#800000] hover:bg-[#600000] text-white font-bold text-base shadow-[0_4px_16px_rgba(128,0,0,0.35)] rounded-lg tracking-wide active:scale-[0.98] transition-transform"
        >
          無料で塾長に相談する
        </Button>
      </div>

      {/* =========================================================================
          2. PC版（デスクトップ用）：画面右下にスマートに常時追従する洗練されたカード型UI
         ========================================================================= */}
      <div
        className={`hidden md:block fixed bottom-8 right-8 z-[100] transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' : 'opacity-0 translate-y-4 pointer-events-none scale-95'
          }`}
      >
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-[0_10px_30px_rgba(0,33,71,0.15)] border-2 border-[#C5A059]/30 text-center max-w-[260px] animate-in fade-in duration-300">
          <p className="text-[11px] font-bold text-[#C5A059] tracking-[0.15em] mb-1.5 uppercase">SATOJUKU SPECIAL</p>
          <h4 className="text-sm font-serif font-bold text-[#002147] mb-3 leading-snug">慶應SFC 合格への第一歩</h4>
          <Button
            onClick={handleScrollToForm}
            className="w-full bg-[#800000] hover:bg-[#C5A059] hover:text-[#002147] text-white font-bold text-xs py-3 h-auto shadow-md transition-all duration-200"
          >
            無料で塾長に個別相談する
          </Button>
        </div>
      </div>
    </>
  )
}