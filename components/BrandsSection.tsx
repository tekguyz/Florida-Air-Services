import { siteConfig } from '@/constants/brand';

export default function BrandsSection() {
  return (
    <section className="bg-white py-14 border-y border-[var(--color-navy-deep)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase font-bold block mb-8">
          AUTHORIZED DEALER & REPAIR SPECIALISTS
        </span>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {siteConfig.brands.map((brand, index) => (
            <div
              key={index}
              className="border-[1.5px] border-[var(--color-navy-deep)]/20 text-[var(--color-text-dark)]/75 font-bold px-6 py-3 rounded-full transition-colors duration-300 hover:bg-[var(--color-navy-deep)] hover:text-white hover:border-[var(--color-navy-deep)] cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
