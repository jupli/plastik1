/**
 * SITE CONFIGURATION
 * ------------------------------------------------------------
 * Replace every placeholder value below with your real business details.
 * All pages, the navigation, footer, WhatsApp buttons and contact page
 * read from this file, so you only need to edit it in one place.
 */
export const SITE = {
  /** Legal / trading name shown in the navbar, footer and SEO titles */
  companyName: "[Company Name]",
  /** Initials shown inside the logo mark (replace the Logo component with your logo image if preferred) */
  logoInitials: "CN",
  tagline: "Custom Plastic Screen & Packaging Printing",
  city: "[City], Indonesia",
  /** Canonical public URL of the website */
  url: "https://www.yourcompany.co.id",

  /** WhatsApp number in international format, digits only (e.g. 6281234567890) */
  whatsappNumber: "6281234567890",
  /** Default pre-filled WhatsApp message */
  whatsappMessage: "Hello, I would like to consult about your custom plastic printing services.",

  phoneDisplay: "+62 812-3456-7890",
  phoneHref: "+6281234567890",
  email: "info@yourcompany.co.id",

  address: "[Street Address], [District], [City], [Province] [Postal Code], Indonesia",
  /** Query used for the Google Maps link. Can be replaced with a Google Maps embed URL. */
  mapsQuery: "[Street Address] [City] Indonesia",

  hours: [
    { days: "Monday – Friday", time: "08:00 – 17:00 WIB" },
    { days: "Saturday", time: "08:00 – 13:00 WIB" },
  ],

  /**
   * Optional: endpoint that accepts a JSON POST from the contact form
   * (e.g. a serverless function, Formspree, or your own backend).
   * Leave empty to use the built-in WhatsApp fallback.
   */
  formEndpoint: "",

  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },

  /** Headline numbers. Replace "00" with your verified figures. */
  stats: [
    { value: "00+", label: "Years of Experience" },
    { value: "00+", label: "Projects Completed" },
    { value: "00+", label: "Active Clients" },
    { value: "00", label: "Product Categories" },
  ],
} as const;
