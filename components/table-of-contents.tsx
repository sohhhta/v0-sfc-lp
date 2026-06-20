import React from 'react';
import Link from 'next/link';
import { List } from 'lucide-react';

export interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-4 border-b-2 border-[#002147] pb-3">
        <List className="text-[#002147]" size={24}/>
        <h2 className="text-xl font-bold text-[#002147] m-0 font-serif tracking-wider">目次</h2>
      </div>
      <ul className="space-y-3 m-0 p-0 list-none">
        {items.map((item, index) => (
          <li key={index} className="m-0 p-0">
            <Link className="text-slate-700 hover:text-[#800000] hover:underline transition-colors flex items-start gap-2 text-sm md:text-base leading-relaxed" href={`#${item.id}`}>
              <span className="text-[#C5A059] font-bold mt-0.5 flex-shrink-0">•</span>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
