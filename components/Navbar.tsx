'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '@/constants/brand';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Handle scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: '30-Year Legacy', href: '#legacy' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[var(--color-navy-deep)] border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section - Unified Branding Desktop & Mobile */}
          <Link 
            href="/" 
            className="flex flex-col z-[110] outline-none" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {!logoError ? (
              <div className="relative w-40 h-10 sm:w-64 sm:h-12">
                <Image 
                  src="/assets/fas-logo.png" 
                  alt={siteConfig.name} 
                  fill 
                  className="object-contain object-left"
                  onError={() => setLogoError(true)}
                  priority
                />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {/* The Icon - Fixed width for alignment */}
                <span className="text-2xl sm:text-3xl shrink-0">❄️</span>
                
                {/* The Text Stack - Perfectly aligned left */}
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-tight text-xl sm:text-2xl uppercase leading-none">
                    FLORIDA AIR
                  </span>
                  <span className="text-[var(--color-orange)] text-[10px] sm:text-sm tracking-[0.2em] font-black uppercase leading-none mt-1">
                    SERVICES
                  </span>
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-[var(--color-orange)] transition-colors duration-200 text-sm font-bold uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="tel:+19544925559"
              className="bg-[var(--color-orange)] hover:bg-[var(--color-orange-dark)] text-white font-black rounded-md px-6 py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(242,125,38,0.4)] text-xs tracking-tighter uppercase inline-flex items-center gap-2 min-h-[48px]"
            >
              <Phone size={14} fill="currentColor" />
              (954) 492-5559
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-[110] p-3 text-white transition-transform active:scale-90 min-h-[48px] min-w-[48px] flex items-center justify-center outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[var(--color-navy-deep)] z-[105] transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col h-full pt-32 pb-12 px-8">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-3xl font-black text-white hover:text-[var(--color-orange)] transition-all duration-300 min-h-[48px] flex items-center ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <a
              href="tel:+19544925559"
              className="bg-[var(--color-orange)] text-white font-black rounded-xl py-5 text-xl text-center shadow-lg active:scale-95 transition-transform min-h-[48px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🚨 CALL (954) 492-5559
            </a>
            
            <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
              <p className="text-[var(--color-ice-blue)]/60 text-xs font-bold uppercase tracking-widest">
                Serving Broward Since 1990
              </p>
              <p className="text-white text-sm font-bold">
                State Licensed #CAC012143
              </p>
            </div>

            <div className="flex justify-center gap-8 pt-4">
              <a 
                href={siteConfig.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[var(--color-orange)] transition-colors p-2"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={28} />
              </a>
              <a 
                href={siteConfig.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[var(--color-orange)] transition-colors p-2"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}