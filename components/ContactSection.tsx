'use client';

import { useState } from 'react';
import { siteConfig } from '@/constants/brand';
import { siteCopy } from '@/constants/copy';
import MapEmbed from './MapEmbed';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('form-name', 'fas-leads');

    try {
      const response = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[var(--color-navy-mid)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Info & Map */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-white text-4xl font-bold mb-6 font-outfit">
              Ready for Reliable AC?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Whether it's a 2 AM emergency or a routine checkup, Jessica's team is ready to dispatch.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center text-[var(--color-orange)] shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-wider font-bold">24/7 Dispatch</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="font-black text-2xl hover:text-[var(--color-orange)] transition-colors min-h-[48px] flex items-center">
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center text-[var(--color-orange)] shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-wider font-bold">Service Area</p>
                  <p className="font-bold text-lg">Broward & Palm Beach</p>
                </div>
              </div>
            </div>

            <MapEmbed />
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <div className="w-20 h-20 bg-[var(--color-ice-blue)] rounded-full flex items-center justify-center text-4xl mb-6">
                    ✅
                  </div>
                  <h3 className="text-[var(--color-navy-deep)] text-2xl font-bold mb-2">Request Received</h3>
                  <p className="text-[var(--color-text-muted)] mb-6">
                    Jessica's team has received your request. For immediate emergency response, please call us directly.
                  </p>
                  <a 
                    href={`tel:${siteConfig.contact.phone}`}
                    className="bg-[var(--color-orange)] hover:bg-[var(--color-orange-dark)] text-white font-bold rounded-lg px-8 py-4 text-lg transition-colors flex items-center justify-center min-h-[48px]"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="text-[var(--color-navy-deep)] text-2xl font-bold mb-6">
                    Request Dispatch
                  </h3>
                  {isError && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">
                      There was an error submitting your request. Please try again or call us directly.
                    </div>
                  )}
                  <form 
                    action="/forms.html"
                    name="fas-leads" 
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>
                    
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Phone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          required 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent outline-none transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="serviceNeeded" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Service Needed</label>
                      <select 
                        id="serviceNeeded" 
                        name="serviceNeeded" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a service...</option>
                        {siteCopy.services.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us what's going on with your system..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-orange-dark)] text-white font-bold rounded-lg px-8 py-4 text-lg transition-colors flex justify-center items-center gap-2 disabled:opacity-70 min-h-[48px]"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Dispatch'} {!isSubmitting && <span>→</span>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
