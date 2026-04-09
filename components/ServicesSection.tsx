import { siteCopy } from '@/constants/copy';
import RevealOnScroll from './RevealOnScroll';

const serviceIcons: Record<string, string> = {
  "emergency-repair": "🚨",
  "new-installation": "❄️",
  "preventative-maintenance": "🔧",
  "commercial-refrigeration": "🏢",
  "indoor-air-quality": "🌬️",
  "ductwork-ventilation": "💨"
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[var(--color-off-white)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-orange)] text-xs tracking-widest uppercase font-bold block mb-3">
            OUR EXPERTISE
          </span>
          <h2 className="text-[var(--color-navy-deep)] text-4xl font-bold mb-4 font-outfit">
            Comprehensive HVAC Solutions
          </h2>
          <p className="text-[var(--color-text-dark)]/60 text-lg">
            Zero downtime. Fixed right the first time.
          </p>
        </div>

        {/* Grid */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteCopy.services.map((service) => (
              <div
                key={service.id}
                className="bg-white border-t-4 border-[var(--color-orange)] shadow-lg p-8 rounded-b-lg transition-transform duration-300 hover:-translate-y-[5px] flex flex-col"
              >
                <div className="text-4xl mb-6">{serviceIcons[service.id] || "🔧"}</div>
                <h3 className="text-[var(--color-navy-deep)] text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
