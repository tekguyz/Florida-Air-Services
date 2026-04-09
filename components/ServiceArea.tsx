import { siteConfig } from '@/constants/brand';

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-[var(--color-off-white)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[var(--color-navy-deep)] text-3xl md:text-4xl font-bold mb-12 font-outfit">
          Serving South Florida
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {siteConfig.serviceAreas.map((city, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--color-navy-deep)]/10 text-[var(--color-navy-deep)] font-medium px-6 py-3 rounded-full shadow-sm"
            >
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
