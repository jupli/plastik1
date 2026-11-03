import { img } from "../config/site";

/* =============================================================
   CONTENT — services, products, portfolio, process, advantages.
   All copy is placeholder marketing content; edit freely.
   ============================================================= */

export type Spec = { label: string; value: string };

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
  specs: Spec[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "plastic-bag-printing",
    index: "01",
    title: "Custom Plastic Bag Printing",
    short: "HDPE, LDPE & PP bags printed with your logo, size and handle type.",
    description:
      "We print shopping bags, die-cut boutique bags, t-shirt bags (kresek) and roll bags on HDPE, LDPE, PP and biodegradable substrates. One to six colour spot printing with tight registration, available in glossy, matte or doff finish.",
    bullets: [
      "HDPE / LDPE / PP / oxo-biodegradable film",
      "Die-cut, T-shirt, vest, flat & roll bag formats",
      "Up to 6 colours, front & back or gusset printing",
      "Micron thickness from 0.03 mm to 0.15 mm",
    ],
    image: img.shoppingSale,
    icon: "bag",
    specs: [
      { label: "Material", value: "HDPE / LDPE / PP" },
      { label: "Colours", value: "1 – 6 spot colours" },
      { label: "MOQ", value: "5.000 pcs / design" },
      { label: "Lead time", value: "7 – 14 working days" },
    ],
  },
  {
    slug: "packaging-printing",
    index: "02",
    title: "Plastic Packaging Printing",
    short: "Pouches, sachets, vacuum bags and laminated film for retail shelves.",
    description:
      "Full packaging printing for stand-up pouches, three-side seal sachets, vacuum bags, zipper pouches and laminated rollstock. We match Pantone references and prepare your artwork for cylinder or screen production.",
    bullets: [
      "Stand-up pouch, zipper, three-side seal, vacuum bag",
      "Laminated structures: PET/ALU/PE, NY/PE, OPP/CPP",
      "Pantone colour matching with drawdown approval",
      "Rollstock or finished-pouch delivery",
    ],
    image: img.zipperPouch,
    icon: "pouch",
    specs: [
      { label: "Format", value: "Pouch / sachet / roll" },
      { label: "Colours", value: "CMYK + 2 spot" },
      { label: "MOQ", value: "3.000 pcs" },
      { label: "Lead time", value: "10 – 21 working days" },
    ],
  },
  {
    slug: "food-beverage-printing",
    index: "03",
    title: "Food & Beverage Packaging Printing",
    short: "Food-grade inks for coffee, snacks, frozen food and beverage brands.",
    description:
      "Low-odour, food-safe ink systems printed on the outer laminate layer for coffee pouches with degassing valves, snack and chips bags, frozen food vacuum packs, cup sealing film and sauce sachets — with BPOM-ready labelling support.",
    bullets: [
      "Food-grade, low-migration ink systems",
      "Coffee pouches with valve & zipper",
      "Cup sealing film / lidding printing",
      "Nutrition, halal & BPOM label layout support",
    ],
    image: img.coffeeLine,
    icon: "cup",
    specs: [
      { label: "Ink", value: "Food-grade, low odour" },
      { label: "Colours", value: "CMYK + spot" },
      { label: "MOQ", value: "2.000 pcs" },
      { label: "Lead time", value: "10 – 18 working days" },
    ],
  },
  {
    slug: "logo-printing-on-plastic",
    index: "04",
    title: "Custom Logo Printing on Plastic",
    short: "Screen printing directly on bottles, pails, jerry cans and containers.",
    description:
      "Direct screen printing on rigid plastic: PET & HDPE bottles, cosmetic pumps, jerry cans, pails, buckets, crates and housings. Cylindrical and flat-bed printing with UV-cured and solvent inks that resist abrasion and moisture.",
    bullets: [
      "Round, oval & flat surface screen printing",
      "PET, HDPE, PP, acrylic and PVC substrates",
      "UV-cure ink for scratch & chemical resistance",
      "Gold, silver and fluorescent ink options",
    ],
    image: img.pumpBottles,
    icon: "bottle",
    specs: [
      { label: "Surface", value: "Round / flat / oval" },
      { label: "Colours", value: "1 – 4 colours" },
      { label: "MOQ", value: "500 pcs" },
      { label: "Lead time", value: "5 – 12 working days" },
    ],
  },
  {
    slug: "brand-promotional-printing",
    index: "05",
    title: "Brand Identity & Promotional Printing",
    short: "Event kits, goodie bags, hampers and POS materials in your brand colours.",
    description:
      "Complete promotional printing runs: branded goodie bags, hampers and parcel packaging, event merchandise, acrylic sign holders, corrugated plastic signage and retail POS display materials — colour-matched to your brand guideline.",
    bullets: [
      "Goodie bags, hampers, parcel & gift packaging",
      "Acrylic, PVC sheet & corrugated plastic signage",
      "Brand guideline colour matching (Pantone / RAL)",
      "Bundled kits for events, launch and retail promo",
    ],
    image: img.bagsYellow,
    icon: "spark",
    specs: [
      { label: "Items", value: "Bags, signage, POS" },
      { label: "Colours", value: "Full colour + spot" },
      { label: "MOQ", value: "300 pcs" },
      { label: "Lead time", value: "5 – 10 working days" },
    ],
  },
  {
    slug: "custom-surface-printing",
    index: "06",
    title: "Custom Design Printing on Plastic Surfaces",
    short: "Any printable plastic surface — from thin film to rigid sheet.",
    description:
      "Bring your own material or buy it from us. We print custom graphics on plastic sheets, tubes, folders, ID cards, blister trays, dashboard panels, machine covers and injection-moulded parts, with pre-treatment (corona / flame) for durable adhesion.",
    bullets: [
      "Corona & flame pre-treatment for adhesion",
      "Adhesion, scratch and tape-pull testing",
      "Sheet size up to 70 × 100 cm",
      "Prototypes and single-piece sampling available",
    ],
    image: img.squeegee,
    icon: "layers",
    specs: [
      { label: "Max sheet", value: "70 × 100 cm" },
      { label: "Colours", value: "1 – 8 colours" },
      { label: "MOQ", value: "100 pcs (sample OK)" },
      { label: "Lead time", value: "4 – 10 working days" },
    ],
  },
  {
    slug: "bulk-custom-orders",
    index: "07",
    title: "Bulk & Custom Order Printing",
    short: "From trial runs to scheduled monthly production contracts.",
    description:
      "Flexible capacity planning for resellers, distributors and manufacturers: small trial runs to validate your design, then scheduled bulk production with consigned stock, staged delivery and locked pricing for the contract period.",
    bullets: [
      "Trial run 500 – 5.000 pcs before scaling",
      "Monthly capacity up to 3.000.000 impressions",
      "Staged delivery & consigned stock in our warehouse",
      "Contract pricing locked for 6 – 12 months",
    ],
    image: img.warehouse,
    icon: "stack",
    specs: [
      { label: "Capacity", value: "3.000.000 impr / month" },
      { label: "Runs", value: "Trial → bulk" },
      { label: "MOQ", value: "500 pcs" },
      { label: "Delivery", value: "Staged / nationwide" },
    ],
  },
];

/* ----------------------------- PRODUCTS ----------------------------- */

export type Product = {
  id: string;
  name: string;
  category: string;
  blurb: string;
  image: string;
  specs: Spec[];
  badge?: string;
};

export const productCategories = [
  "All Products",
  "Printed Bags",
  "Pouches & Packaging",
  "Food & Beverage",
  "Bottles & Containers",
  "Promotional",
] as const;

export const products: Product[] = [
  {
    id: "hdpe-shopping-bag",
    name: "Printed HDPE Shopping Bag",
    category: "Printed Bags",
    blurb:
      "The everyday retail workhorse — strong HDPE film with die-cut handle and up to 4 colours of your logo and store information.",
    image: img.shoppingSale,
    badge: "Best seller",
    specs: [
      { label: "Material", value: "HDPE 0.05 mm" },
      { label: "Size", value: "25 × 40 to 40 × 60 cm" },
      { label: "Print", value: "1 – 4 colours" },
      { label: "MOQ", value: "5.000 pcs" },
    ],
  },
  {
    id: "boutique-die-cut-bag",
    name: "Die-Cut Boutique Bag",
    category: "Printed Bags",
    blurb:
      "Softer LDPE with a premium matte or glossy finish, patched handle and full-face branding for fashion and beauty retailers.",
    image: img.tissueBags,
    specs: [
      { label: "Material", value: "LDPE 0.08 mm" },
      { label: "Finish", value: "Matte / glossy / doff" },
      { label: "Print", value: "2 – 6 colours" },
      { label: "MOQ", value: "3.000 pcs" },
    ],
  },
  {
    id: "tshirt-kresek-bag",
    name: "T-Shirt Bag (Kresek)",
    category: "Printed Bags",
    blurb:
      "Vest-handle bags for minimarkets, grocery stores and food stalls, available in high-density or recycled resin.",
    image: img.polyBag,
    specs: [
      { label: "Material", value: "HDPE / recycled" },
      { label: "Size", value: "Small – jumbo" },
      { label: "Print", value: "1 – 2 colours" },
      { label: "MOQ", value: "10.000 pcs" },
    ],
  },
  {
    id: "zipper-stand-up-pouch",
    name: "Zipper Stand-Up Pouch",
    category: "Pouches & Packaging",
    blurb:
      "Resealable pouch with bottom gusset, ideal for snacks, powder, pet food and dried goods on retail shelves.",
    image: img.zipperPouch,
    badge: "Popular",
    specs: [
      { label: "Structure", value: "PET / PE laminate" },
      { label: "Feature", value: "Zipper + gusset" },
      { label: "Print", value: "CMYK + spot" },
      { label: "MOQ", value: "3.000 pcs" },
    ],
  },
  {
    id: "kraft-window-sachet",
    name: "Sachet & Small Pouch",
    category: "Pouches & Packaging",
    blurb:
      "Three-side seal sachets for sample sizes, single-serve portions, spice blends and refill packs.",
    image: img.kraftSachet,
    specs: [
      { label: "Seal", value: "3-side / back seal" },
      { label: "Volume", value: "5 – 250 ml" },
      { label: "Print", value: "1 – 6 colours" },
      { label: "MOQ", value: "10.000 pcs" },
    ],
  },
  {
    id: "resealable-green-pouch",
    name: "Resealable Printed Pouch",
    category: "Pouches & Packaging",
    blurb:
      "Full-colour laminated pouch with tear notch and resealable zipper — the standard for premium dry goods branding.",
    image: img.greenPouch,
    specs: [
      { label: "Structure", value: "OPP / CPP matte" },
      { label: "Feature", value: "Tear notch, zipper" },
      { label: "Print", value: "Full colour" },
      { label: "MOQ", value: "2.000 pcs" },
    ],
  },
  {
    id: "coffee-pouch-valve",
    name: "Coffee Pouch with Valve",
    category: "Food & Beverage",
    blurb:
      "One-way degassing valve, aluminium barrier layer and food-grade inks for roasteries and coffee brands.",
    image: img.snackBag,
    badge: "Food grade",
    specs: [
      { label: "Structure", value: "PET / ALU / PE" },
      { label: "Feature", value: "Degassing valve" },
      { label: "Ink", value: "Food grade" },
      { label: "MOQ", value: "2.000 pcs" },
    ],
  },
  {
    id: "snack-chips-bag",
    name: "Snack & Chips Packaging",
    category: "Food & Beverage",
    blurb:
      "High-impact shelf graphics on metallised laminate with strong seal integrity for fried and extruded snacks.",
    image: img.dumplingPack,
    specs: [
      { label: "Structure", value: "OPP / MET-PET / PE" },
      { label: "Seal", value: "Back seal fin" },
      { label: "Print", value: "CMYK + 2 spot" },
      { label: "MOQ", value: "5.000 pcs" },
    ],
  },
  {
    id: "frozen-vacuum-bag",
    name: "Frozen Food Vacuum Bag",
    category: "Food & Beverage",
    blurb:
      "Puncture-resistant nylon vacuum bags printed with brand and product information for frozen and chilled lines.",
    image: img.streetFoodBags,
    specs: [
      { label: "Structure", value: "NY / PE 90 micron" },
      { label: "Feature", value: "Vacuum safe, −20 °C" },
      { label: "Print", value: "1 – 4 colours" },
      { label: "MOQ", value: "5.000 pcs" },
    ],
  },
  {
    id: "cup-sealing-film",
    name: "Cup Sealing Film (Lidding)",
    category: "Food & Beverage",
    blurb:
      "Printed roll lidding for beverage cups — full-colour branding that stays legible after sealing and chilling.",
    image: img.bagLine,
    specs: [
      { label: "Format", value: "Roll, 90 – 95 mm" },
      { label: "Print", value: "Full colour" },
      { label: "Yield", value: "± 1.200 cups / roll" },
      { label: "MOQ", value: "20 rolls" },
    ],
  },
  {
    id: "pet-bottle-print",
    name: "Branded PET Bottles",
    category: "Bottles & Containers",
    blurb:
      "Direct screen printing on round PET and HDPE bottles for beverages, sauces, cosmetics and household chemicals.",
    image: img.bottlesMinimal,
    specs: [
      { label: "Volume", value: "60 ml – 1.000 ml" },
      { label: "Print", value: "1 – 4 colours" },
      { label: "Ink", value: "UV cure" },
      { label: "MOQ", value: "1.000 pcs" },
    ],
  },
  {
    id: "cosmetic-pump-print",
    name: "Cosmetic Pump & Tube Printing",
    category: "Bottles & Containers",
    blurb:
      "Fine-detail logo printing on pump bottles, tubes and jars with soft-touch compatible ink systems.",
    image: img.squeezeBottles,
    specs: [
      { label: "Surface", value: "Round / flat" },
      { label: "Detail", value: "Line min. 0.3 mm" },
      { label: "Print", value: "1 – 3 colours" },
      { label: "MOQ", value: "500 pcs" },
    ],
  },
  {
    id: "jerrycan-pail-print",
    name: "Jerry Can, Pail & Bucket Printing",
    category: "Bottles & Containers",
    blurb:
      "Durable industrial marking on jerry cans, pails and buckets for oil, paint, chemicals and food ingredients.",
    image: img.oilCans,
    specs: [
      { label: "Volume", value: "1 L – 25 L" },
      { label: "Print", value: "1 – 2 colours" },
      { label: "Ink", value: "Solvent / UV" },
      { label: "MOQ", value: "500 pcs" },
    ],
  },
  {
    id: "goodie-bag-promo",
    name: "Promotional Goodie Bag",
    category: "Promotional",
    blurb:
      "Event and campaign bags in thick glossy film with rope or die-cut handles — a walking billboard for your brand.",
    image: img.bagsFlatlay,
    badge: "Event ready",
    specs: [
      { label: "Material", value: "LDPE 0.10 mm" },
      { label: "Handle", value: "Rope / die-cut" },
      { label: "Print", value: "2 – 6 colours" },
      { label: "MOQ", value: "500 pcs" },
    ],
  },
  {
    id: "hamper-parcel-pack",
    name: "Hampers & Parcel Packaging",
    category: "Promotional",
    blurb:
      "Seasonal gift packaging sets — printed bags, wraps and courier packs designed as one branded family.",
    image: img.parcel,
    specs: [
      { label: "Set", value: "Bag + wrap + label" },
      { label: "Finish", value: "Gloss / matte" },
      { label: "Print", value: "Full colour" },
      { label: "MOQ", value: "300 sets" },
    ],
  },
  {
    id: "acrylic-signage",
    name: "Custom Plastic Signage & Display",
    category: "Promotional",
    blurb:
      "Acrylic, PVC sheet and corrugated plastic signage for retail counters, exhibitions and wayfinding.",
    image: img.shoppingRow,
    specs: [
      { label: "Material", value: "Acrylic / PVC / PP board" },
      { label: "Size", value: "Up to 70 × 100 cm" },
      { label: "Print", value: "1 – 8 colours" },
      { label: "MOQ", value: "50 pcs" },
    ],
  },
];

/* ----------------------------- PORTFOLIO ----------------------------- */

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  scope: string;
  image: string;
  tall?: boolean;
};

export const portfolioCategories = [
  "All Projects",
  "Food & Beverage",
  "Retail",
  "Packaging",
  "Industrial",
  "Promotional",
] as const;

export const projects: Project[] = [
  {
    id: "pr-01",
    title: "Kopi Senja — Coffee Pouch Series",
    client: "Specialty roastery, Bandung",
    category: "Food & Beverage",
    year: "2025",
    scope: "Structure design · 4-colour laminate · zipper + valve pouch",
    image: img.snackBag,
    tall: true,
  },
  {
    id: "pr-02",
    title: "Retail Chain HDPE Bag Rollout",
    client: "Minimarket group, Jabodetabek",
    category: "Retail",
    year: "2025",
    scope: "3 sizes · 2 colours · 1.2 million pcs / year contract",
    image: img.shoppingSale,
  },
  {
    id: "pr-03",
    title: "Skincare Bottle Screen Printing",
    client: "Cosmetic brand, Jakarta",
    category: "Industrial",
    year: "2024",
    scope: "Direct print on PET · UV ink · 3 SKUs",
    image: img.bottlesMinimal,
  },
  {
    id: "pr-04",
    title: "Snack Brand Full Colour Pouch",
    client: "UMKM food producer, Surabaya",
    category: "Packaging",
    year: "2025",
    scope: "Artwork preparation · CMYK + Pantone matching",
    image: img.dumplingPack,
    tall: true,
  },
  {
    id: "pr-05",
    title: "Fashion Boutique Die-Cut Bags",
    client: "Apparel retailer, Semarang",
    category: "Retail",
    year: "2024",
    scope: "Matte LDPE · patched handle · foil-effect ink",
    image: img.tissueBags,
  },
  {
    id: "pr-06",
    title: "Lubricant Jerry Can Marking",
    client: "Oils & lubricants manufacturer",
    category: "Industrial",
    year: "2024",
    scope: "Solvent ink · abrasion tested · 5 L & 20 L",
    image: img.oilCans,
  },
  {
    id: "pr-07",
    title: "Street Food Packaging Set",
    client: "F&B franchise, Yogyakarta",
    category: "Food & Beverage",
    year: "2025",
    scope: "Transparent bag + printed sticker · 40 outlets",
    image: img.streetFoodBags,
  },
  {
    id: "pr-08",
    title: "Corporate Hampers Programme",
    client: "Banking client, Jakarta",
    category: "Promotional",
    year: "2024",
    scope: "Bag, wrap & label family · 2.500 sets",
    image: img.parcel,
  },
  {
    id: "pr-09",
    title: "Zipper Pouch Redesign",
    client: "Pet food distributor",
    category: "Packaging",
    year: "2025",
    scope: "Structure change · 5 SKU artwork adaptation",
    image: img.zipperPouch,
  },
  {
    id: "pr-10",
    title: "Trade Show Signage Kit",
    client: "Manufacturing exporter",
    category: "Promotional",
    year: "2024",
    scope: "Corrugated plastic + acrylic counter display",
    image: img.shoppingRow,
  },
  {
    id: "pr-11",
    title: "Cosmetic Pump Bottle Series",
    client: "Personal care startup",
    category: "Industrial",
    year: "2025",
    scope: "Fine-line logo print · soft-touch compatible",
    image: img.pumpBottles,
  },
  {
    id: "pr-12",
    title: "Grocery Vest Bag Program",
    client: "Wholesaler, Medan",
    category: "Retail",
    year: "2024",
    scope: "Recycled resin · single colour · monthly delivery",
    image: img.bagsFlatlay,
  },
];

/* ----------------------------- PROCESS ----------------------------- */

export type Step = {
  no: string;
  title: string;
  duration: string;
  summary: string;
  points: string[];
  image?: string;
};

export const processSteps: Step[] = [
  {
    no: "01",
    title: "Customer Consultation",
    duration: "Day 1",
    summary:
      "We start with your product, quantity and budget. A dedicated sales engineer maps the right material, ink and printing method, then issues a written quotation.",
    points: [
      "Product & usage discussion",
      "Quantity, budget and target price",
      "Method recommendation: screen, flexo or rotogravure",
      "Written quotation within 1 × 24 hours",
    ],
    image: img.designer,
  },
  {
    no: "02",
    title: "Design Preparation",
    duration: "Day 1 – 3",
    summary:
      "Our in-house studio prepares production artwork: dieline creation, vector clean-up, colour separation, trapping and a printed drawdown for your approval.",
    points: [
      "Dieline & template creation",
      "Vector clean-up and colour separation",
      "Pantone matching and drawdown approval",
      "Free digital proof, 2 revision rounds",
    ],
    image: img.designStudio,
  },
  {
    no: "03",
    title: "Material Selection",
    duration: "Day 2 – 4",
    summary:
      "Resin, micron thickness and laminate structure are selected and tested against your filling, sealing and shelf requirements before bulk material is booked.",
    points: [
      "HDPE / LDPE / PP / PET / NY selection",
      "Micron thickness & tensile testing",
      "Food-grade and halal compliance check",
      "Material sample approval by client",
    ],
    image: img.plasticTexture,
  },
  {
    no: "04",
    title: "Printing Process",
    duration: "Day 4 – 10",
    summary:
      "Screen preparation, ink mixing and press setup, then production runs with hourly colour checks. Registration is verified on first-piece approval before mass run.",
    points: [
      "Screen / cylinder preparation",
      "First-piece approval with client sign-off",
      "Hourly in-process colour & registration check",
      "Curing and drying per ink system",
    ],
    image: img.pressMechanics,
  },
  {
    no: "05",
    title: "Quality Inspection",
    duration: "Day 10 – 11",
    summary:
      "Every batch passes QC for colour deviation, adhesion (tape pull), seal strength, size tolerance and print defects. Rejected pieces never leave the floor.",
    points: [
      "Colour deviation measured against master",
      "Tape-pull adhesion & scratch test",
      "Seal strength and drop test",
      "AQL sampling with written QC report",
    ],
    image: img.qcWorker,
  },
  {
    no: "06",
    title: "Packaging & Delivery",
    duration: "Day 11 – 14",
    summary:
      "Finished goods are counted, bundled in protective inner packing, labelled per SKU and shipped — staged delivery or full consignment to your warehouse.",
    points: [
      "Counting, bundling & carton packing",
      "SKU labelling and packing list",
      "Jabodetabek own-fleet, inter-island cargo",
      "Staged delivery schedules available",
    ],
    image: img.courier,
  },
];

/* ----------------------------- ADVANTAGES ----------------------------- */

export const advantages: {
  icon: string;
  title: string;
  text: string;
  metric?: string;
}[] = [
  {
    icon: "quality",
    title: "High-Quality Printing",
    text: "Sharp registration, dense ink coverage and consistent colour from the first piece to the last carton.",
    metric: "ΔE ≤ 2.0 colour tolerance",
  },
  {
    icon: "pen",
    title: "Custom Designs",
    text: "In-house design studio builds dielines, adapts your brand guideline and prepares press-ready artwork at no extra cost.",
  },
  {
    icon: "price",
    title: "Competitive Pricing",
    text: "Direct-from-factory pricing with transparent cost breakdown per material, colour and quantity.",
  },
  {
    icon: "flexible",
    title: "Flexible Order Quantities",
    text: "Start with a 500-piece trial run, then scale to bulk production without re-doing your artwork.",
    metric: "MOQ from 500 pcs",
  },
  {
    icon: "machine",
    title: "Professional Production",
    text: "Semi-automatic screen lines, flexo presses and laminating units run by trained operators on daily shifts.",
    metric: "3.000.000 impressions / month",
  },
  {
    icon: "truck",
    title: "Reliable Delivery",
    text: "Committed lead times, real-time production updates and staged delivery to match your stock cycle.",
    metric: "98.4% on-time delivery",
  },
  {
    icon: "chat",
    title: "Friendly Customer Service",
    text: "One dedicated contact person on WhatsApp — from quotation to after-sales, in Bahasa or English.",
    metric: "Response < 15 minutes",
  },
];

/* ----------------------------- NUMBERS ----------------------------- */

export const stats: { value: number; suffix: string; label: string; note: string }[] = [
  { value: 13, suffix: "+", label: "Years in plastic printing", note: "since 2012" },
  { value: 850, suffix: "+", label: "Brands served nationwide", note: "UMKM to corporate" },
  { value: 3, suffix: "M", label: "Impressions per month", note: "installed capacity" },
  { value: 98, suffix: "%", label: "On-time delivery rate", note: "rolling 12 months" },
];

/* ----------------------------- CLIENTS / SEGMENTS ----------------------------- */

export const segments = [
  "Small Businesses (UMKM)",
  "Medium Enterprises",
  "Retailers & Minimarkets",
  "Food & Beverage Brands",
  "Manufacturers",
  "Cosmetic & Personal Care",
  "Corporate & Institutions",
  "Distributors & Resellers",
];

/* ----------------------------- TESTIMONIALS (placeholders) ----------------------------- */
/* EDIT: replace with real, approved client testimonials */

export const testimonials = [
  {
    quote:
      "We moved our whole pouch range here after two bad experiences elsewhere. Colour consistency finally matches our brand guideline, and the artwork team fixed our files without charging extra.",
    name: "R. Prasetyo",
    role: "Founder — Specialty Coffee Roastery",
    place: "Bandung",
  },
  {
    quote:
      "Trial run of 500 bags first, then bulk. That flexibility is exactly what a small brand needs. Delivery was on schedule for eleven consecutive months.",
    name: "D. Kusuma",
    role: "Owner — Retail Boutique",
    place: "Semarang",
  },
  {
    quote:
      "Screen printing on our HDPE bottles is clean and does not rub off during transport. The QC report they send with every batch makes our internal audit much easier.",
    name: "S. Halim",
    role: "Procurement Manager — Household Chemicals",
    place: "Jakarta",
  },
];

/* ----------------------------- FAQ ----------------------------- */

export const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ depends on the product: 500 pcs for rigid plastic screen printing (bottles, pails, acrylic), 5.000 pcs for printed plastic bags, and 2.000 – 3.000 pcs for laminated pouches. Trial runs below MOQ are possible for first-time clients — ask our sales team for availability.",
  },
  {
    q: "Which file formats do you accept?",
    a: "Vector files are best: AI, EPS, PDF or SVG with outlined fonts. We also accept high-resolution PSD, TIFF or PNG (min. 300 dpi at actual size). If you only have a logo image, our design studio can redraw it as production-ready artwork.",
  },
  {
    q: "How long does production take?",
    a: "Standard lead time is 5 – 14 working days after artwork and material approval, depending on quantity, colour count and substrate. Rush service is available for promotional deadlines — it is quoted case by case.",
  },
  {
    q: "Can you print on material I supply?",
    a: "Yes. We accept client-supplied plastic film, bottles, sheets and moulded parts. We will run an adhesion test first, because some treated or recycled surfaces need corona or flame pre-treatment before ink can bond properly.",
  },
  {
    q: "Are the inks safe for food packaging?",
    a: "For food and beverage products we use low-odour, food-grade ink systems printed on the outer laminate layer, so ink never contacts the product directly. We also support BPOM, halal and nutrition label layout requirements.",
  },
  {
    q: "Do you ship outside Jakarta?",
    a: "Yes. We deliver with our own fleet across Jabodetabek and use trusted cargo partners for Sumatra, Kalimantan, Sulawesi, Bali and Nusa Tenggara. Goods are bundled, cartoned and labelled per SKU with a packing list.",
  },
  {
    q: "Can I get a sample before ordering in bulk?",
    a: "Absolutely. We provide digital proofs free of charge, printed drawdowns for colour approval, and physical samples for a sampling fee that is credited back on your bulk order.",
  },
];
