import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import AboutLegacy from '@/components/AboutLegacy';
import BrandsSection from '@/components/BrandsSection';
import ReviewsSection from '@/components/ReviewsSection';
import ServiceArea from '@/components/ServiceArea';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <AboutLegacy />
      <BrandsSection />
      <ReviewsSection />
      <ServiceArea />
      <ContactSection />
      <Footer />
    </main>
  );
}
