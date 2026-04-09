import Image from 'next/image';
import Link from 'next/link';
import { siteCopy } from '@/constants/copy';
import { siteConfig } from '@/constants/brand';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1667983453881-4992fe86ab1b?q=80&w=2070&auto=format&fit=crop"
          alt="Professional HVAC technician working on an AC unit"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-navy-deep)] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="max-w-[700px]">
          {/* Eyebrow */}
          <div className="inline-block border border-[var(--color-orange)]/40 text-[var(--color-orange)] rounded-full px-4 py-1.5 text-sm font-bold mb-6 bg-black/20 backdrop-blur-sm">
            {siteCopy.hero.badge}
          </div>

          {/* Headline */}
          <h1 className="font-outfit text-white font-black leading-[1.05] text-[clamp(2.5rem,5.5vw,4.5rem)]">
            <span className="block">{siteCopy.hero.headingLine1}</span>
            <span className="block text-[var(--color-ice-blue)]">{siteCopy.hero.headingLine2}</span>
          </h1>

          {/* Divider */}
          <div className="w-[60px] h-[4px] bg-[var(--color-orange)] mt-6 mb-6 mx-auto md:mx-0" />

          {/* Subheadline */}
          <p className="font-inter text-lg text-white/75 max-w-[550px] mx-auto md:mx-0">
            {siteCopy.hero.subheading}
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="bg-[var(--color-orange)] hover:bg-[var(--color-orange-dark)] text-white font-black rounded-lg px-8 py-4 text-lg transition-colors text-center flex items-center justify-center gap-2 min-h-[48px]"
            >
              🚨 CALL {siteConfig.contact.displayPhone}
            </a>
            <Link
              href="#contact"
              className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 font-bold rounded-lg px-8 py-4 text-lg transition-colors text-center min-h-[48px] flex items-center justify-center"
            >
              Schedule Service
            </Link>
          </div>

          {/* Trust Row */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="text-[var(--color-ice-blue)]">✅</span> License #{siteConfig.license}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[var(--color-orange)]">⭐</span> {siteConfig.rating} Star Rated
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[var(--color-ice-blue)]">📅</span> Est. {siteConfig.established}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
