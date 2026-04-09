export interface ServiceCopy {
  id: string;
  title: string;
  shortDescription: string;
}

export interface ReviewCopy {
  name: string;
  text: string;
  location: string;
}

export interface SiteCopy {
  hero: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    subheading: string;
  };
  services: ServiceCopy[];
  legacy: {
    heading: string;
    body: string;
  };
  reviews: ReviewCopy[];
}

export const siteCopy: SiteCopy = {
  hero: {
    badge: "🔥 10% OFF PARTS OR NEW INSTALLATIONS",
    headingLine1: "Don't Sweat The",
    headingLine2: "South Florida Heat.",
    subheading: "Keeping Broward and Palm Beach counties cool since 1990. State-licensed, family-owned, and ready to dispatch 24/7. When your AC goes down, Florida Air Services shows up."
  },
  services: [
    {
      id: "emergency-repair",
      title: "24/7 Emergency AC Repair",
      shortDescription: "Rapid dispatch to restore your cooling fast. We arrive equipped to fix the problem on the first visit."
    },
    {
      id: "new-installation",
      title: "New AC Installation",
      shortDescription: "High-efficiency systems installed perfectly. We properly size your unit to maximize lifespan and lower your energy bills."
    },
    {
      id: "preventative-maintenance",
      title: "Preventative Maintenance",
      shortDescription: "Stop breakdowns before they happen. Our comprehensive tune-ups keep your system running efficiently year-round."
    },
    {
      id: "commercial-refrigeration",
      title: "Commercial Refrigeration",
      shortDescription: "Zero downtime for your business. We service walk-in coolers, freezers, and commercial HVAC systems."
    },
    {
      id: "indoor-air-quality",
      title: "Indoor Air Quality",
      shortDescription: "Breathe easier. We install UV lights, advanced filtration, and purification systems to eliminate South Florida humidity and allergens."
    },
    {
      id: "ductwork-ventilation",
      title: "Ductwork & Ventilation",
      shortDescription: "Seal leaks and improve airflow. We repair and replace damaged ducts to ensure even cooling in every room."
    }
  ],
  legacy: {
    heading: "30 Years. Zero Excuses.",
    body: "Since 1990, Florida Air Services has been the trusted name in South Florida HVAC. We aren't a faceless corporate franchise; we are a family-owned team managed by Jessica, built on honesty and transparent pricing. Holding state license #CAC012143 means we meet the highest standards of safety and expertise. We do the job right the first time, every time."
  },
  reviews: [
    {
      name: "Sarah M.",
      text: "Our AC died at 9 PM on a Saturday. Jessica's team was here within an hour. They didn't try to sell me a whole new system, just replaced the bad capacitor and got us cooling again. Honest and fast.",
      location: "Fort Lauderdale"
    },
    {
      name: "Jaimi H.",
      text: "I had two other companies quote me thousands for a new unit. Florida Air Services came out, found a leak, sealed it, and recharged the freon for a fraction of the price. They saved me a ton of money.",
      location: "Tamarac"
    },
    {
      name: "Christine D.",
      text: "The installation crew was incredibly professional. They arrived on time, protected our floors, and installed our new high-efficiency system perfectly. The house has never been this cool.",
      location: "Boca Raton"
    }
  ]
};
