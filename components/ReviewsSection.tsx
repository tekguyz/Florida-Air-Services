'use client';

import { siteCopy } from '@/constants/copy';
import RevealOnScroll from './RevealOnScroll';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[var(--color-navy-deep)] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white font-bold text-4xl font-outfit">
            Perfect 5.0 — Consistently.
          </h2>
        </div>

        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteCopy.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-[var(--color-navy-mid)] border-l-[3px] border-[var(--color-orange)] p-8 rounded-r-lg shadow-xl"
              >
                <div className="flex text-[var(--color-orange)] mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-white/80 italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-white font-bold">
                  — {review.name}
                </p>
                <p className="text-white/50 text-sm mt-1">
                  {review.location}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
