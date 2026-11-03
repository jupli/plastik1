import type { ReactElement, SVGProps } from "react";
import { site } from "../config/site";

/* =============================================================
   Hand-drawn inline SVG icon set (no icon library).
   24×24 grid · 1.6 stroke · round caps.
   ============================================================= */

type P = SVGProps<SVGSVGElement>;

const base = (p: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 24,
  height: 24,
  ...p,
});

/* ---------- brand mark ---------- */
export function Logo({
  className = "",
  tone = "dark",
  compact = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const ink = tone === "dark" ? "#0a1a2f" : "#ffffff";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 44 44" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" aria-hidden="true">
        <rect width="44" height="44" rx="10" fill={ink} />
        <path d="M22 6v32M6 22h32" stroke="#f2621c" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="22" r="9.5" fill="none" stroke={tone === "dark" ? "#ffffff" : "#0a1a2f"} strokeWidth="2" />
        <circle cx="22" cy="22" r="3.2" fill="#f2621c" />
        <path d="M35.5 8.5l-2.4 2.4M8.5 8.5l2.4 2.4" stroke={ink === "#ffffff" ? "#f2621c" : "#f2621c"} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      {!compact && (
        <span className="leading-none">
          <span
            className="block font-display text-[1.05rem] font-black tracking-[-0.02em] uppercase"
            style={{ color: ink, fontStretch: "112%" }}
          >
            {site.name}
          </span>
          <span className="mt-1 block font-mono text-[0.55rem] tracking-[0.24em] uppercase" style={{ color: tone === "dark" ? "#52647c" : "rgba(255,255,255,.6)" }}>
            Plastic Printing Co.
          </span>
        </span>
      )}
    </span>
  );
}

/* ---------- service / concept icons ---------- */
const Bag = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 8h12l1.2 12.2a1.5 1.5 0 0 1-1.5 1.8H6.3a1.5 1.5 0 0 1-1.5-1.8L6 8Z" />
    <path d="M9.2 8V6.4A2.8 2.8 0 0 1 12 3.6a2.8 2.8 0 0 1 2.8 2.8V8" />
    <path d="M8.6 12.4h6.8" />
  </svg>
);
const Pouch = (p: P) => (
  <svg {...base(p)}>
    <path d="M6.5 3.5h11v3.2l-1.3 1.6v10.4a2 2 0 0 1-2 2H9.8a2 2 0 0 1-2-2V8.3L6.5 6.7V3.5Z" />
    <path d="M7.8 12.5h8.4" />
    <path d="M10 16.4h4" />
  </svg>
);
const Cup = (p: P) => (
  <svg {...base(p)}>
    <path d="M5.5 7h13l-1.2 12.3a2 2 0 0 1-2 1.7H8.7a2 2 0 0 1-2-1.7L5.5 7Z" />
    <path d="M4.4 7h15.2" />
    <path d="M12 3v4" />
    <path d="M8 11.5h8" />
  </svg>
);
const Bottle = (p: P) => (
  <svg {...base(p)}>
    <path d="M10 2.8h4v3.1l1.8 2.2a4 4 0 0 1 .9 2.5v9a2.4 2.4 0 0 1-2.4 2.4H9.7A2.4 2.4 0 0 1 7.3 19.6v-9a4 4 0 0 1 .9-2.5L10 5.9V2.8Z" />
    <path d="M7.3 13.4h9.4" />
    <path d="M7.3 17h9.4" />
  </svg>
);
const Spark = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 2.8l2.1 5.6 5.6 2.1-5.6 2.1L12 18.2l-2.1-5.6L4.3 10.5l5.6-2.1L12 2.8Z" />
    <path d="M18.4 16.6l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1Z" />
  </svg>
);
const Layers = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3.2 3.4 7.6 12 12l8.6-4.4L12 3.2Z" />
    <path d="M3.4 12.4 12 16.8l8.6-4.4" />
    <path d="M3.4 16.9 12 21.3l8.6-4.4" />
  </svg>
);
const Stack = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.4" y="3.6" width="17.2" height="5" rx="1.2" />
    <rect x="3.4" y="9.6" width="17.2" height="5" rx="1.2" />
    <rect x="3.4" y="15.6" width="17.2" height="5" rx="1.2" />
    <path d="M7 6.1h.01M7 12.1h.01M7 18.1h.01" strokeWidth="2.4" />
  </svg>
);
const Quality = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 2.9 4.8 5.7v6c0 4.3 2.9 8.1 7.2 9.4 4.3-1.3 7.2-5.1 7.2-9.4v-6L12 2.9Z" />
    <path d="M8.9 12.1l2.2 2.3 4-4.6" />
  </svg>
);
const Pen = (p: P) => (
  <svg {...base(p)}>
    <path d="M16.3 3.6l4.1 4.1-11 11-5 1 1-5 10.9-11.1Z" />
    <path d="M14.3 5.6l4.1 4.1" />
    <path d="M4 21h16" />
  </svg>
);
const Price = (p: P) => (
  <svg {...base(p)}>
    <path d="M11.4 2.9H4.6a1.7 1.7 0 0 0-1.7 1.7v6.8c0 .45.18.88.5 1.2l8.2 8.2a1.7 1.7 0 0 0 2.4 0l6.8-6.8a1.7 1.7 0 0 0 0-2.4l-8.2-8.2a1.7 1.7 0 0 0-1.2-.5Z" />
    <circle cx="7.6" cy="7.6" r="1.5" />
  </svg>
);
const Flexible = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h10M18 7h2M4 12h3M11 12h9M4 17h8M16 17h4" />
    <circle cx="16" cy="7" r="2.1" />
    <circle cx="9" cy="12" r="2.1" />
    <circle cx="14" cy="17" r="2.1" />
  </svg>
);
const Machine = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.1" />
    <path d="M12 2.6v2.6M12 18.8v2.6M21.4 12h-2.6M5.2 12H2.6M18.6 5.4l-1.8 1.8M7.2 16.8l-1.8 1.8M18.6 18.6l-1.8-1.8M7.2 7.2 5.4 5.4" />
  </svg>
);
const Truck = (p: P) => (
  <svg {...base(p)}>
    <path d="M2.8 6.4h10.6v9.8H2.8z" />
    <path d="M13.4 9.6h3.9l3 3v3.6h-6.9z" />
    <circle cx="7" cy="18.2" r="1.9" />
    <circle cx="17" cy="18.2" r="1.9" />
    <path d="M8.9 18.2h6.2" />
  </svg>
);
const Chat = (p: P) => (
  <svg {...base(p)}>
    <path d="M20.5 12c0 4-3.8 7.2-8.5 7.2a10 10 0 0 1-2.8-.4L4.2 20.5l1.3-3.6A6.8 6.8 0 0 1 3.5 12C3.5 8 7.3 4.8 12 4.8s8.5 3.2 8.5 7.2Z" />
    <path d="M8.6 11.2h.01M12 11.2h.01M15.4 11.2h.01" strokeWidth="2.2" />
  </svg>
);

/* ---------- UI icons ---------- */
const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...p}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 19.04 5 9.85 9.85 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 0 1 5.82 2.41 8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.24 8.21Z" />
  </svg>
);
const Phone = (p: P) => (
  <svg {...base(p)}>
    <path d="M6.3 3.4h3l1.5 3.8-2 1.4a11.4 11.4 0 0 0 5.6 5.6l1.4-2 3.8 1.5v3a1.8 1.8 0 0 1-2 1.8C11.2 18 6 12.8 4.5 5.4a1.8 1.8 0 0 1 1.8-2Z" />
  </svg>
);
const Mail = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2" />
    <path d="m3.4 6.6 8.6 6.2 8.6-6.2" />
  </svg>
);
const Pin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10.2" r="2.6" />
  </svg>
);
const Clock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.3 2" />
  </svg>
);
const ArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12h15.5" />
    <path d="m13.6 6 6 6-6 6" />
  </svg>
);
const ArrowUpRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7" />
    <path d="M8.4 7H17v8.6" />
  </svg>
);
const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);
const Plus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 4.6v14.8M4.6 12h14.8" />
  </svg>
);
const Close = (p: P) => (
  <svg {...base(p)}>
    <path d="M5.6 5.6 18.4 18.4M18.4 5.6 5.6 18.4" />
  </svg>
);
const Menu = (p: P) => (
  <svg {...base(p)}>
    <path d="M3.6 7h16.8M3.6 12h16.8M3.6 17h11" />
  </svg>
);
const Chevron = (p: P) => (
  <svg {...base(p)}>
    <path d="m7 9.8 5 5 5-5" />
  </svg>
);
const Quote = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
    <path d="M9.4 5.5C6.2 6.9 4 10 4 13.6 4 16.6 5.8 18.5 8.2 18.5c2.1 0 3.7-1.5 3.7-3.5 0-1.9-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.4-1.7 1.9-3.3 3.7-4.2l-1.9-2.1Zm9 0c-3.2 1.4-5.4 4.5-5.4 8.1 0 3 1.8 4.9 4.2 4.9 2.1 0 3.7-1.5 3.7-3.5 0-1.9-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.4-1.7 1.9-3.3 3.7-4.2l-1.9-2.1Z" />
  </svg>
);
const Search = (p: P) => (
  <svg {...base(p)}>
    <circle cx="10.8" cy="10.8" r="6.4" />
    <path d="m15.6 15.6 4 4" />
  </svg>
);
const Instagram = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17 7h.01" strokeWidth="2.2" />
  </svg>
);
const LinkedIn = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="3" />
    <path d="M7.6 10.4v6M7.6 7.6v.01M11.6 16.4v-6M11.6 12.9c0-1.4.9-2.5 2.4-2.5s2.4 1 2.4 2.5v3.5" />
  </svg>
);
const Cart = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 4h2.2l2.3 10.6h9.8L19.6 7H6" />
    <circle cx="9" cy="19" r="1.6" />
    <circle cx="16.6" cy="19" r="1.6" />
  </svg>
);
const Doc = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 2.9h7.4L18.8 8v13.1H6z" />
    <path d="M13.2 3v5.2h5.4" />
    <path d="M8.8 13h6.6M8.8 16.6h4.4" />
  </svg>
);
const Drop = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3.2c3 3.6 5.6 6.6 5.6 9.6a5.6 5.6 0 1 1-11.2 0c0-3 2.6-6 5.6-9.6Z" />
    <path d="M9.4 13.6a2.6 2.6 0 0 0 2.6 2.6" />
  </svg>
);

const registry: Record<string, (p: P) => ReactElement> = {
  bag: Bag,
  pouch: Pouch,
  cup: Cup,
  bottle: Bottle,
  spark: Spark,
  layers: Layers,
  stack: Stack,
  quality: Quality,
  pen: Pen,
  price: Price,
  flexible: Flexible,
  machine: Machine,
  truck: Truck,
  chat: Chat,
  whatsapp: WhatsApp,
  phone: Phone,
  mail: Mail,
  pin: Pin,
  clock: Clock,
  arrow: ArrowRight,
  arrowUp: ArrowUpRight,
  check: Check,
  plus: Plus,
  close: Close,
  menu: Menu,
  chevron: Chevron,
  quote: Quote,
  search: Search,
  instagram: Instagram,
  linkedin: LinkedIn,
  cart: Cart,
  doc: Doc,
  drop: Drop,
};

export function Icon({ name, className = "", ...rest }: { name: string; className?: string } & P) {
  const C = registry[name] ?? Spark;
  return <C className={className} {...rest} />;
}
