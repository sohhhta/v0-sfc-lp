'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'ホーム', href: '/' },
    { name: 'コース・料金', href: '/course' },
    { name: '合格実績', href: '/results' },
    { name: '小論文ガイド', href: '/guide/logic-writing' }, // 記事一覧ができたら /guide に変更
    { name: 'AO入試ガイド', href: '/ao-guide' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo - app/page.tsxのデザインと完全一致 */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-bold text-primary font-serif tracking-[0.1em]">佐藤塾</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm text-[#333333] hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side - ボタンデザインをapp/page.tsxと完全一致 */}
        <div className="flex items-center gap-4">
          <Link href="/#contact-form" className="hidden md:block">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-medium">
              無料相談を申し込む
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#F0F0F0] rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-2 text-sm text-[#333333] hover:bg-[#F0F0F0] rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#contact-form" onClick={() => setMobileMenuOpen(false)} className="block pt-2">
            <Button variant="outline" className="w-full border-primary text-primary font-medium">
              無料相談
            </Button>
          </Link>
        </div>
      )}
    </nav>
  )
}