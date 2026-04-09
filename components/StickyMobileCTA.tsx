'use client';

import { Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/constants/brand';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden h-16 grid grid-cols-2 border-t border-white/10 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
      {/* Button A: Schedule */}
      <a
        href="#contact"
        className="bg-slate-900 flex items-center justify-center gap-2 text-white font-black text-sm tracking-tighter uppercase transition-colors active:bg-slate-800"
      >
        <Calendar size={18} className="text-[var(--color-ice-blue)]" />
        SCHEDULE
      </a>

      {/* Button B: Call Now */}
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="bg-[var(--color-orange)] flex items-center justify-center gap-2 text-white font-black text-sm tracking-tighter uppercase transition-colors active:bg-[var(--color-orange-dark)]"
      >
        <div className="relative">
          <Phone size={18} fill="currentColor" className="animate-pulse" />
        </div>
        CALL NOW
      </a>
    </div>
  );
}
