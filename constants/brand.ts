export interface SiteConfig {
  name: string;
  shortName: string;
  owner: string;
  license: string;
  established: string;
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    address: string;
  };
  socials: {
    facebook: string;
    instagram: string;
  };
  serviceAreas: string[];
  rating: string;
  brands: string[];
}

export const siteConfig: SiteConfig = {
  name: "Florida Air Services",
  shortName: "FAS",
  owner: "Jessica",
  license: "CAC012143",
  established: "1990",
  contact: {
    phone: "+19544925559",
    displayPhone: "(954) 492-5559",
    email: "Jessica@floridaairservices.net",
    address: "Fort Lauderdale, FL"
  },
  socials: {
    facebook: "https://www.facebook.com/FloridaAirServices",
    instagram: "https://www.instagram.com/florida_airservices/"
  },
  serviceAreas: [
    "Fort Lauderdale",
    "Tamarac",
    "Coral Springs",
    "Pompano Beach",
    "Boca Raton",
    "Hollywood",
    "Plantation",
    "Davie",
    "Weston"
  ],
  rating: "5.0",
  brands: ["CARRIER", "TRANE", "LENNOX", "RHEEM", "GOODMAN", "YORK"]
};
