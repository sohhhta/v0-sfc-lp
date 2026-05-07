'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'PC操作が苦手ですが大丈夫ですか？',
    answer: 'はい、スマホやタブレットでも利用可能です。文字入力ができれば問題ありません。'
  },
  {
    question: 'なぜ50%という高い合格率なのですか？',
    answer: 'AIによる圧倒的な演習量と、塾長による個別戦略が両立しているからです。'
  },
  {
    question: '途中でプランの変更はできますか？',
    answer: 'はい、月単位で柔軟に変更可能です。'
  },
  {
    question: 'その他、ご質問があれば記載ください',
    answer: '無料相談でお聞きした内容に基づいて、個別にご説明させていただきます。'
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
