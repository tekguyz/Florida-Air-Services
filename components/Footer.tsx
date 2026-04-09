import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '@/constants/brand';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-darkest)] pt-16 pb-8 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* The Icon - Fixed width for alignment */}
              <span className="text-3xl shrink-0">❄️</span>
              
              {/* The Text Stack - Perfectly aligned left */}
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-tight text-2xl uppercase leading-none">
                  FLORIDA AIR
                </span>
                <span className="text-[var(--color-orange)] text-sm tracking-[0.2em] font-black uppercase leading-none mt-1">
                  SERVICES
                </span>
              </div>
            </div>
            <p className="text-sm mb-6 max-w-xs leading-relaxed">
              Family-owned HVAC experts keeping South Florida cool since {siteConfig.established}. Zero corporate fluff, just absolute competence.
            </p>
            <div className="flex flex-col gap-4">
              <div className="inline-block bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm self-start">
                <span className="text-[var(--color-ice-blue)]">State Licensed</span> #{siteConfig.license}
              </div>
              
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Follow our team</p>
                <div className="flex gap-4">
                  <a 
                    href={siteConfig.socials.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-[var(--color-orange)] transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href={siteConfig.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-[var(--color-orange)] transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="hover:text-[var(--color-orange)] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#legacy" className="hover:text-[var(--color-orange)] transition-colors">
                  30-Year Legacy
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-[var(--color-orange)] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="#service-area" className="hover:text-[var(--color-orange)] transition-colors">
                  Service Area
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">24/7 Emergency Dispatch</h4>
            <a href={`tel:${siteConfig.contact.phone}`} className="block text-[var(--color-orange)] text-4xl font-black hover:text-white transition-colors min-h-[48px] py-2">
              {siteConfig.contact.displayPhone}
            </a>
            <p className="mt-4 text-sm text-white/60">
              Call now for immediate response in Broward & Palm Beach counties.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">License #{siteConfig.license}</p>
        </div>
      </div>
    </footer>
  );
}
