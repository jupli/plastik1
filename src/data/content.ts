import type { IconName } from "@/components/Icon";
import { SITE } from "@/config/site";

/* ============================================================
 * ROUTES & NAVIGATION
 * ============================================================ */
export const PAGE_IDS = ["home", "about", "services", "products", "portfolio", "process", "contact"] as const;
export type PageId = (typeof PAGE_IDS)[number];

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Our Services" },
  { id: "products", label: "Products" },
  { id: "portfolio", label: "Portfolio" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export const pageHref = (id: PageId) => (id === "home" ? "#/" : `#/${id}`);

/* ============================================================
 * SEO — per-page title & meta description
 * ============================================================ */
export const PAGE_META: Record<PageId, { title: string; description: string }> = {
  home: {
    title: `${SITE.companyName} | Custom Plastic Screen & Packaging Printing`,
    description:
      "Professional custom plastic screen printing for bags, food packaging, pouches and promotional products. Sharp prints, flexible quantities and reliable delivery.",
  },
  about: {
    title: `About Us | ${SITE.companyName}`,
    description:
      "Learn about our plastic screen printing expertise, vision, mission, quality control and commitment to customer satisfaction.",
  },
  services: {
    title: `Our Services | ${SITE.companyName}`,
    description:
      "Custom plastic bag printing, packaging printing, food & beverage packaging, logo printing on plastic, promotional printing and bulk orders.",
  },
  products: {
    title: `Product Catalog | ${SITE.companyName}`,
    description:
      "Browse printed plastic bags, shopping bags, food packaging, plastic pouches, branded packaging and promotional plastic products.",
  },
  portfolio: {
    title: `Portfolio | ${SITE.companyName}`,
    description:
      "Explore examples of custom plastic printing projects including shopping bags, food packaging, pouches and branded promotional items.",
  },
  process: {
    title: `Production Process | ${SITE.companyName}`,
    description:
      "From consultation and design preparation to printing, quality inspection and delivery — see how we produce your custom plastic prints.",
  },
  contact: {
    title: `Contact Us | ${SITE.companyName}`,
    description:
      "Request a quote or ask a question via WhatsApp, phone, email or our contact form. We reply quickly to custom printing inquiries.",
  },
};

/* ============================================================
 * IMAGERY
 * Stock photography (Pexels) and generated product mockups.
 * ============================================================ */
const pexels = (id: string, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMG = {
  heroBags: "/images/generated-hero-bags.jpg",
  screenPrint: "/images/generated-screen-print.jpg",
  pouchMockup: "/images/generated-pouch-mockup.jpg",
  promo: "/images/generated-promo.jpg",
  branded: "/images/generated-branded-packaging.jpg",
  pressMachine: pexels("1440504"),
  pressRoller: pexels("6620992"),
  printSheets: pexels("9550363"),
  inspection: pexels("35383622"),
  delivery: pexels("6169055"),
  conveyor: pexels("18631424"),
  sealing: pexels("4820844"),
  coffee: pexels("4829083"),
  shoppingBags: pexels("5926245"),
  apples: pexels("14106347"),
  sugar: pexels("21582446"),
  consultation: pexels("8112162"),
  kraftBag: pexels("29914081"),
  printingParts: pexels("19837529"),
};

/* ============================================================
 * PRODUCTS (catalog)
 * ============================================================ */
export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  applications: string[];
}

export const PRODUCT_FILTERS = ["All", "Bags", "Food & Beverage", "Packaging", "Promotional", "Custom Applications"];

export const PRODUCTS: Product[] = [
  {
    id: "printed-plastic-bags",
    name: "Printed Plastic Bags",
    category: "Bags",
    image: IMG.heroBags,
    summary: "Durable plastic carrier bags printed with your logo, colours and messaging.",
    description:
      "Strong, lightweight plastic bags printed with your logo, colours and brand messaging. A practical everyday carrier that keeps your brand visible at every checkout.",
    applications: ["Retail stores & minimarkets", "Bakeries & restaurants", "Fashion & lifestyle boutiques", "Event and bazaar giveaways"],
  },
  {
    id: "shopping-bags",
    name: "Shopping Bags",
    category: "Bags",
    image: IMG.shoppingBags,
    summary: "Eye-catching shopping bags with handles that turn every purchase into a brand moment.",
    description:
      "Shopping bags with strong handles and bold, full-colour graphics. Designed to make customers proud to carry your brand out of the store.",
    applications: ["Clothing & fashion retail", "Cosmetics & beauty stores", "Gift shops & department stores", "Promotional campaigns"],
  },
  {
    id: "food-packaging",
    name: "Food Packaging",
    category: "Food & Beverage",
    image: IMG.apples,
    summary: "Printed plastic packaging for snacks, bakery, produce and dry goods.",
    description:
      "Clear, appetising printed packaging that carries your product information and brand identity. We print on the plastic materials commonly used for food applications.",
    applications: ["Snacks & confectionery", "Bakery & bread bags", "Fresh produce & fruit", "Dry goods & grains"],
  },
  {
    id: "plastic-pouches",
    name: "Plastic Pouches",
    category: "Packaging",
    image: IMG.pouchMockup,
    summary: "Stand-up and flat pouches with custom graphics for retail products.",
    description:
      "Pouches printed with full-colour graphics and matte or gloss finishes. A modern, shelf-ready format for coffee, snacks, spices, powders and more.",
    applications: ["Coffee & tea", "Spices & seasonings", "Snacks & dried foods", "Cosmetics & personal care refills"],
  },
  {
    id: "custom-branded-packaging",
    name: "Custom Branded Packaging",
    category: "Packaging",
    image: IMG.branded,
    summary: "Mailer bags, sleeves and packaging that carry your brand to the customer's door.",
    description:
      "Branded mailers, printed sleeves and packaging inserts that protect products and reinforce your identity from the warehouse to the customer's doorstep.",
    applications: ["E-commerce mailer bags", "Printed product sleeves", "Subscription box packaging", "Branded packaging for SMEs"],
  },
  {
    id: "promotional-plastic-products",
    name: "Promotional Plastic Products",
    category: "Promotional",
    image: IMG.promo,
    summary: "Branded tote bags, drinkware, keychains and plastic cards for events and giveaways.",
    description:
      "Practical promotional items printed with your logo: tote bags, drinkware, keychains, tags and plastic cards for events, corporate gifting and customer rewards.",
    applications: ["Trade shows & exhibitions", "Corporate gifts & employee kits", "Loyalty & membership cards", "Store giveaways"],
  },
  {
    id: "other-plastic-applications",
    name: "Other Plastic Applications",
    category: "Custom Applications",
    image: IMG.screenPrint,
    summary: "Screen-printed plastic sheets, signage, labels and custom surfaces.",
    description:
      "From point-of-sale graphics and labels to custom plastic sheets and industrial parts, we print on a wide range of plastic surfaces to match your specification.",
    applications: ["Point-of-sale signage", "Labels & stickers on plastic", "Industrial & equipment panels", "Custom one-off surfaces"],
  },
];

/* ============================================================
 * SERVICES
 * ============================================================ */
export interface Service {
  id: string;
  title: string;
  icon: IconName;
  image: string;
  summary: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "plastic-bag-printing",
    title: "Custom Plastic Bag Printing",
    icon: "shopping",
    image: IMG.pressRoller,
    summary:
      "Full-colour printing on carrier, shopping and retail bags. We handle artwork, colour matching and production so your bags look consistent from the first roll to the last.",
    features: ["Full-colour and single-colour options", "Consistent colour matching across batches", "Sizes and handles to suit your product"],
  },
  {
    id: "plastic-packaging-printing",
    title: "Plastic Packaging Printing",
    icon: "box",
    image: IMG.conveyor,
    summary:
      "Printed plastic packaging for a wide range of products. We print on films, sheets and pouches with clear registration and sharp graphics for shelf-ready packaging.",
    features: ["Films, sheets and pouch materials", "Sharp registration for fine details", "Matte or gloss finish options"],
  },
  {
    id: "food-beverage-packaging",
    title: "Food & Beverage Packaging Printing",
    icon: "shield",
    image: IMG.coffee,
    summary:
      "Packaging printing for food and beverage brands, with clear product information and an attractive finish. We work with you on material suitability for each application.",
    features: ["Product labelling and information layout", "Designs for snacks, bakery and beverages", "Material advice for your application"],
  },
  {
    id: "custom-logo-printing",
    title: "Custom Logo Printing on Plastic",
    icon: "star",
    image: IMG.screenPrint,
    summary:
      "Crisp logo reproduction on plastic bags, containers, packaging and promotional items. Ideal for businesses that need their brand mark to stand out on every product.",
    features: ["Logo optimisation for screen printing", "Solid and multi-colour logo prints", "Brand colour accuracy"],
  },
  {
    id: "brand-promotional-printing",
    title: "Brand Identity & Promotional Printing",
    icon: "tag",
    image: IMG.promo,
    summary:
      "Build a consistent brand presence with printed plastic promotional products, from giveaways to corporate gifts. We help you keep every touchpoint on-brand.",
    features: ["Promotional product range", "Brand-consistent design application", "Small and large promotional runs"],
  },
  {
    id: "custom-design-printing",
    title: "Custom Design Printing on Various Plastics",
    icon: "pen",
    image: IMG.printSheets,
    summary:
      "Have a unique design? We print custom artwork on many types of plastic surfaces, including sheets, films, bags and promotional substrates, with a design check before production.",
    features: ["Artwork preparation and proofing", "Multiple plastic substrates", "Pre-production design review"],
  },
  {
    id: "bulk-custom-order-printing",
    title: "Bulk & Custom Order Printing",
    icon: "factory",
    image: IMG.pressMachine,
    summary:
      "Large runs and custom order sizes handled with production discipline. Flexible order quantities mean you can start small or scale up as your business grows.",
    features: ["Flexible order quantities", "Scheduled production for repeat orders", "Packing and delivery planning"],
  },
];

/* ============================================================
 * PORTFOLIO
 * Showcase images are illustrative examples. Replace with your own
 * finished project photography and client-approved work.
 * ============================================================ */
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const PORTFOLIO_FILTERS = ["All", "Shopping Bags", "Food & Beverage", "Packaging", "Promotional", "Screen Printing"];

export const PORTFOLIO: PortfolioItem[] = [
  { id: "p1", title: "Mailer & Sleeve Packaging Set", category: "Packaging", image: IMG.branded },
  { id: "p2", title: "Stand-up Pouch Collection", category: "Food & Beverage", image: IMG.pouchMockup },
  { id: "p3", title: "Promotional Merchandise Kit", category: "Promotional", image: IMG.promo },
  { id: "p4", title: "Screen Print Production", category: "Screen Printing", image: IMG.screenPrint },
  { id: "p5", title: "Printed Shopping Bag Series", category: "Shopping Bags", image: IMG.heroBags },
  { id: "p6", title: "Coffee Pack Branding", category: "Food & Beverage", image: IMG.coffee },
  { id: "p7", title: "Retail Carry Bag Design", category: "Shopping Bags", image: IMG.shoppingBags },
  { id: "p8", title: "Fresh Produce Packaging", category: "Food & Beverage", image: IMG.apples },
  { id: "p9", title: "Dry Goods Packaging", category: "Packaging", image: IMG.sugar },
];

/* ============================================================
 * PRODUCTION PROCESS
 * ============================================================ */
export interface ProcessStep {
  title: string;
  icon: IconName;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Customer Consultation",
    icon: "chat",
    description:
      "We learn about your goals, product, target market and budget, then recommend the most suitable printing method and material.",
  },
  {
    title: "Design Preparation",
    icon: "pen",
    description:
      "Our team prepares print-ready artwork, checks colour separations and sizing, and sends a digital proof for your approval.",
  },
  {
    title: "Material Selection",
    icon: "layers",
    description:
      "We help you choose the right plastic substrate based on thickness, finish, durability and how the product will be used.",
  },
  {
    title: "Printing Process",
    icon: "print",
    description:
      "Screens are prepared and inks are applied layer by layer with careful registration for sharp, vibrant and consistent results.",
  },
  {
    title: "Quality Inspection",
    icon: "eye",
    description:
      "Each batch is checked for colour accuracy, print alignment, ink adhesion and dimensions before it moves to packing.",
  },
  {
    title: "Packaging & Delivery",
    icon: "truck",
    description:
      "Finished products are carefully packed and dispatched on schedule, with reliable delivery to your location.",
  },
];

/* ============================================================
 * WHY CHOOSE US
 * ============================================================ */
export interface Strength {
  title: string;
  icon: IconName;
  description: string;
}

export const STRENGTHS: Strength[] = [
  {
    title: "High-Quality Printing",
    icon: "star",
    description: "Sharp detail, vibrant colour and durable ink that holds up to handling and daily use.",
  },
  {
    title: "Custom Designs",
    icon: "pen",
    description: "Work from your artwork or let our team help refine your logo and layout for print.",
  },
  {
    title: "Competitive Pricing",
    icon: "tag",
    description: "Fair, transparent quotes that make professional printing affordable for growing businesses.",
  },
  {
    title: "Flexible Order Quantities",
    icon: "layers",
    description: "Start with a small test run or scale to bulk production without compromising quality.",
  },
  {
    title: "Professional Production",
    icon: "factory",
    description: "Organised workflow, clear timelines and inspection at every stage of production.",
  },
  {
    title: "Reliable Delivery",
    icon: "truck",
    description: "Orders are packed carefully and dispatched on the agreed schedule.",
  },
  {
    title: "Friendly Customer Service",
    icon: "headset",
    description: "A responsive team that explains options clearly and keeps you updated throughout.",
  },
];
