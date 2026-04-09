import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://floridaairservice.net'),
  title: 'Florida Air Services | 24/7 AC Repair in Fort Lauderdale & Broward',
  description: 'Family-owned HVAC experts keeping South Florida cool since 1990. 24/7 emergency AC repair, installation, and commercial refrigeration. State Licensed #CAC012143.',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Florida Air Services | 24/7 AC Repair',
    description: 'Family-owned HVAC experts keeping South Florida cool since 1990. 24/7 emergency AC repair, installation, and commercial refrigeration.',
    url: 'https://floridaairservice.net',
    siteName: 'Florida Air Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Air Services | 24/7 AC Repair',
    description: 'Family-owned HVAC experts keeping South Florida cool since 1990. 24/7 emergency AC repair.',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❄️</text></svg>',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased pb-[64px] md:pb-0`} suppressHydrationWarning>
        <JsonLd />
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
