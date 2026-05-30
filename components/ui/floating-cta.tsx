'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 画面内に2つのボタンが共存するのを防ぐため、Heroセクション（ファーストビュー）のボタンを監視
    // 既存のHeroセクションのCTAエリア、またはHeroコンテナ自体をターゲットにします
    // トップページ以外のページでも正常に機能するよう、Heroセクションに共通するh1タグや特定のセクションを広く監視します
    const heroTarget = document.querySelector('h1')

    if (!heroTarget) {
      // 監視対象が見つからない下層ページなどの場合は、スクロール量（100px以上）で安全にフォールバック表示制御します
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Heroのメインタイトル・ボタン（ファーストビュー）が画面外に出たら下部CTAを表示開始
        // 画面内に戻ってきたら（isIntersectingがtrue）、下部CTAを即座に非表示にする
        setIsVisible(!entry.isIntersecting)
      },
      {
        root: null,
        // ファーストビューの要素が完全に画面外に出た瞬間にトリガーをかけるため、閾値を0に設定
        threshold: 0,
        // ヘッダーや安全圏を考慮し、画面上部に少しマージンを持たせる設定
        rootMargin: '-80px 0px 0px 0px'
      }
    )

    observer.observe(heroTarget)
    return () => observer.unobserve(heroTarget)
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
    <div 
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-white via-white/95 to-transparent transition-all duration-300 ${
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
  )
}