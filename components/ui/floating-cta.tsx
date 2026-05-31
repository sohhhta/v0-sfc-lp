'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 各ページ（トップ・下層すべて）のファーストビューにあるメインCTAボタンを正確にキャッチ
    const mainCtaButton = 
      document.querySelector('section.relative a[href="#contact-form"] button') || 
      document.querySelector('section.relative Link[href="/#contact-form"] button') ||
      document.querySelector('section.relative a[href*="contact-form"]') ||
      document.querySelector('h1')

    if (!mainCtaButton) {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 200)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

    // 二重表示を防ぐためのIntersection Observer（ファーストビューのボタンと同期）
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px'
      }
    )

    observer.observe(mainCtaButton)
    return () => observer.unobserve(mainCtaButton)
  }, [])

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
          1. SP版（モバイル端末用）：画面最下部にピタッと吸い付く横長100%のUI
         ========================================================================= */}
      <div 
        className={`md:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-white via-white/95 to-transparent transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
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
          2. PC版（デスクトップ用）：サイズ拡張 ＆ メリット・動線訴求の洗練された追従カード
         ========================================================================= */}
      <div 
        className={`hidden md:block fixed bottom-8 right-8 z-[100] transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' : 'opacity-0 translate-y-4 pointer-events-none scale-95'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-sm p-6 rounded-xl shadow-[0_12px_40px_rgba(0,33,71,0.18)] border-2 border-[#C5A059]/40 text-left w-[340px] animate-in fade-in duration-300">
          {/* メリット訴求：新規枠の希少性 */}
          <span className="inline-block text-[11px] font-bold text-[#800000] bg-[#800000]/5 border border-[#800000]/20 px-2.5 py-0.5 rounded-sm tracking-wider uppercase mb-3">
            【限定受付】今年度新規枠 残り13名
          </span>
          
          {/* ベネフィット訴求：2人に1人が合格する戦略の直接提案 */}
          <h4 className="text-base font-serif font-bold text-[#002147] mb-2 leading-snug">
            2人に1人が合格するSFC受験戦略を、<br />塾長が直接個別で提案します。
          </h4>
          
          {/* 簡易動線の訴求 */}
          <p className="text-[10px] text-[#C5A059] font-bold text-center mb-1.5 tracking-wide">
            ⏱ 30秒でカンタン予約・全国オンライン対応
          </p>
          
          <Button 
            onClick={handleScrollToForm}
            className="w-full bg-[#800000] hover:bg-[#002147] text-white font-bold text-sm py-4 h-auto shadow-md transition-all duration-200 tracking-wider"
          >
            無料で個別相談を予約する
          </Button>
        </div>
      </div>
    </>
  )
}