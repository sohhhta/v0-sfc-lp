'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'AO入試と一般入試のどちらを受験するか決まっていないのですが',
    answer: 'SFC二刀流プランをお勧めします。このプランではAO入試・一般入試両方の対策を行いますので、いずれの入試形式にも対応できます。'
  },
  {
    question: '他塾と併用することはできますか',
    answer: 'もちろん可能です。特に小論文特化プランは他塾の授業と組み合わせてご利用いただくことを想定した設計になっています。'
  },
  {
    question: '月途中での退会は可能ですか',
    answer: 'はい、月単位でのご退会が可能です。合格後は自動退塾となり、追加の費用は一切発生しません。'
  },
  {
    question: '料金プランの変更はできますか',
    answer: 'はい、月単位でプランの変更が可能です。学習進度や状況に応じて、いつでも柔軟に対応できます。お気軽にご相談ください。'
  }
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={index}
          className="border-b border-[#E5E7EB] last:border-b-0"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
          >
            <span className="text-lg font-medium text-[#002147] pr-8">
              {item.question}
            </span>
            <span className="text-2xl text-[#D4AF37] flex-shrink-0">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-40 pb-6' : 'max-h-0'
            }`}
          >
            <p className="text-[#666666] leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
