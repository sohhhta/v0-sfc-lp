'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'ホーム', href: '/' },
    { name: 'コース・料金', href: '/course' },
    { name: '合格実績', href: '/results' },
    { name: '小論文ガイド', href: '/guide' },
    { name: 'AO入試ガイド', href: '/ao-guide' }, // 将来用
  ]

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-[#002147] font-serif">佐藤塾</span>
            <span className="text-[10px] text-[#002147] tracking-[0.2em] font-medium uppercase">Keio SFC Prep School</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-[#333333] hover:text-[#C5A059] transition-colors">
                {link.name}
              </Link>
            ))}
            <Link href="/#contact-form">
              <Button className="bg-[#002147] hover:bg-[#003366] text-white rounded-none px-6">
                相談・体験授業
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#002147]">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="block text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link href="/#contact-form" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-[#002147] text-white rounded-none">相談・体験授業</Button>
          </Link>
        </div>
      )}
    </nav>
  )
}