import { siteConfig } from '@/constants/brand';
import { siteCopy } from '@/constants/copy';

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": siteConfig.name,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "url": "https://floridaairservice.net",
    "image": "https://floridaairservice.net/assets/fas-logo.png",
    "license": siteConfig.license,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fort Lauderdale",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.184597,
      "longitude": -80.285486
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Broward County"
      },
      {
        "@type": "City",
        "name": "Palm Beach County"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
