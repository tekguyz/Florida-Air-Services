import Image from 'next/image';
import { siteCopy } from '@/constants/copy';

export default function AboutLegacy() {
  const points = [
    "State Licensed",
    "All Major Brands",
    "5.0 Google Rating",
    "Rapid Dispatch"
  ];

  return (
    <section id="legacy" className="bg-[var(--color-navy-mid)] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - Text (55%) */}
          <div className="w-full lg:w-[55%]">
            <span className="text-[var(--color-ice-blue)] text-sm font-bold tracking-widest uppercase block mb-4">
              FAMILY OWNED SINCE 1990
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit leading-tight">
              {siteCopy.legacy.heading}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl">
              {siteCopy.legacy.body}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-ice-blue)]/10 flex items-center justify-center shrink-0">
                    <span className="text-[var(--color-ice-blue)]">✓</span>
                  </div>
                  <span className="font-medium text-white/90">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image (45%) */}
          <div className="w-full lg:w-[45%] relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop"
                alt="Florida Air Services Technician"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-deep)]/80 to-transparent" />
            </div>
            
            {/* Absolute Badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white text-[var(--color-navy-deep)] p-5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-10">
              <div className="bg-[var(--color-orange)]/10 p-3 rounded-full">
                <span className="text-[var(--color-orange)] text-xl">⭐</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">5.0 Rated</p>
                <p className="text-sm text-[var(--color-text-muted)]">across South Florida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
