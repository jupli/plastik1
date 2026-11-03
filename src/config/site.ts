/* =============================================================
   EDITABLE SITE CONFIGURATION
   -------------------------------------------------------------
   Everything below is a placeholder for a real business profile.
   Replace the values marked `EDIT` before going live.
   ============================================================= */

export const site = {
  /** EDIT: legal company name */
  name: "Plastindo Cetak",
  /** EDIT: legal entity name used in invoices / footer */
  legalName: "PT. Plastindo Cetak Prima",
  /** Short brand mark shown in the logo lockup */
  mark: "PC",
  /** EDIT: positioning line */
  tagline: "Custom Plastic Screen Printing & Packaging Printing",
  established: "2012", // EDIT
  city: "Jakarta, Indonesia", // EDIT

  /** EDIT: WhatsApp number in international format, digits only (no +, no spaces) */
  whatsapp: "6281200000000",
  /** EDIT: displayed phone number */
  phone: "+62 21 0000 0000",
  phoneMobile: "+62 812 0000 0000",
  /** EDIT: business email */
  email: "hello@plastindocetak.co.id",
  emailSales: "sales@plastindocetak.co.id",

  /** EDIT: full workshop + office address */
  address: {
    line1: "Jl. Kawasan Industri Raya No. 88",
    line2: "Blok C-5, Cakung",
    city: "Jakarta Timur",
    region: "DKI Jakarta",
    postcode: "13910",
    country: "Indonesia",
  },

  /** EDIT: Google Maps — set the query or an embed URL for the real location */
  maps: {
    query: "Kawasan Industri Pulogadung, Jakarta Timur, DKI Jakarta",
    /** Replace with your own Google Maps embed `src` (Google Maps → Share → Embed a map) */
    embedSrc: "",
    lat: -6.1855,
    lng: 106.9005,
  },

  /** EDIT: opening hours */
  hours: [
    { day: "Monday – Friday", time: "08:00 – 17:00 WIB" },
    { day: "Saturday", time: "08:00 – 14:00 WIB" },
    { day: "Sunday & Public Holidays", time: "Closed" },
  ],

  /** EDIT: social profiles */
  socials: [
    { label: "Instagram", handle: "@plastindocetak", url: "https://instagram.com/" },
    { label: "LinkedIn", handle: "Plastindo Cetak", url: "https://linkedin.com/" },
    { label: "Tokopedia", handle: "Official Store", url: "https://tokopedia.com/" },
  ],
} as const;

export const addressString = `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.region} ${site.address.postcode}, ${site.address.country}`;

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.maps.query)}`;
}

/** Builds a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string, number = site.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE = `Halo ${site.name}, saya ingin menanyakan layanan cetak plastik. Mohon informasi penawaran harganya. Terima kasih.`;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Production", to: "/process" },
  { label: "Contact", to: "/contact" },
] as const;

/* =============================================================
   IMAGE LIBRARY  (realistic printing / packaging photography)
   Sized through the CDN query string for fast loading.
   ============================================================= */
const p = (id: string, w: number, h?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}${
    h ? `&h=${h}` : ""
  }`;

export const img = {
  // Production floor & presses
  pressCloseup: p("6620992", 1400, 1000),
  pressOperator: p("6621000", 1200, 900),
  pressMechanics: p("1440504", 1200, 900),
  printShopHands: p("1092050", 1000, 750),
  bottleConveyor: p("18631424", 1200, 800),
  pressRollers: p("19837529", 1200, 900),
  pressSheets: p("9550363", 1200, 800),
  operator: p("6525848", 1200, 800),
  qcInspect: p("36376452", 1200, 800),
  qcWorker: p("35383622", 1200, 800),
  engineer: p("32845671", 1000, 750),
  team: p("31090804", 1200, 800),
  bagLine: p("4820844", 900, 1200),
  packingLine: p("4820838", 900, 1200),
  coffeeLine: p("31570362", 1200, 800),

  // Screen printing craft
  squeegee: p("1509308", 1200, 800),
  screenPrinter: p("27893067", 1200, 800),
  screenHand: p("27893069", 900, 700),
  screenCraft: p("34117503", 900, 1200),
  screenWorkshop: p("3966277", 1200, 800),
  screenFlag: p("27893044", 1000, 700),

  // Design studio
  designStudio: p("7675031", 1200, 800),
  designer: p("13451104", 1000, 750),
  digitalArtist: p("7315755", 900, 1200),

  // Bags & packaging products
  printedBags: p("9878727", 1000, 800),
  greenPouch: p("16100293", 900, 1200),
  zipperPouch: p("12024976", 1200, 800),
  kraftSachet: p("12039675", 1000, 750),
  pouchBagSet: p("12039607", 1000, 750),
  snackBag: p("9513108", 900, 1200),
  dumplingPack: p("26611769", 900, 1200),
  streetFoodBags: p("29155320", 1200, 800),
  parcel: p("4440875", 1000, 750),
  polyBag: p("4440867", 1000, 750),
  shoppingSale: p("5926461", 900, 1200),
  shoppingRow: p("5872361", 1200, 800),
  bagsFlatlay: p("7987867", 1200, 800),
  tissueBags: p("5556300", 900, 1200),
  bagsYellow: p("5868241", 900, 1200),

  // Bottles, containers, rigid plastic
  bottlesMinimal: p("11753640", 1200, 800),
  pumpBottles: p("8015790", 1200, 800),
  squeezeBottles: p("8049849", 1200, 800),
  skincareBottles: p("10600142", 1200, 800),
  containers: p("3806781", 900, 1200),
  oilCans: p("37190228", 900, 1200),

  // Logistics & delivery
  courier: p("6169178", 1200, 800),
  loadingVan: p("6169668", 1200, 800),
  warehouse: p("29607924", 1200, 800),
  truckBoxes: p("36256798", 900, 1100),

  // Texture
  plasticTexture: p("18541871", 1200, 900),
} as const;
