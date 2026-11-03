import { img, site, waLink } from "../config/site";
import { Icon } from "../components/Icons";
import { Btn, Reveal, SectionHead } from "../components/ui";
import { CtaBand, PageHeader } from "../components/sections/Blocks";
import { ProductGrid } from "../components/sections/Catalog";

/* =============================================================
   PRODUCT CATALOGUE
   ============================================================= */

const howToOrder = [
  {
    n: "01",
    t: "Pick a product",
    d: "Browse the catalogue below and open the item that matches your packaging. Every card lists material, size range, print colours and MOQ.",
  },
  {
    n: "02",
    t: "Send your artwork",
    d: "Attach a logo or design file (AI, PDF, PNG). If you have none, our studio draws it for you and sends a digital proof for approval.",
  },
  {
    n: "03",
    t: "Approve & produce",
    d: "You confirm the proof, quantity and delivery date. Production starts, you get progress updates, then goods ship with a packing list.",
  },
];

export default function Products() {
  return (
    <>
      <PageHeader
        crumb="Products"
        eyebrow="Product catalogue"
        title={
          <>
            Printed plastic products, <span className="text-flame-500">ready to specify</span>
          </>
        }
        lead="Bags, pouches, food packaging, bottles, containers and promotional plastic — all printable with your logo, artwork and brand colours. Filter by category or search for the item you need, then inquire in one tap."
        image={img.printedBags}
        facts={[
          { k: "Products listed", v: "16 items" },
          { k: "Categories", v: "5 groups" },
          { k: "Custom sizes", v: "On request" },
          { k: "Sample", v: "Available" },
        ]}
      />

      {/* ---------- catalogue ---------- */}
      <section id="catalogue" className="relative overflow-hidden bg-mist py-20 lg:py-24">
        <div className="u-grid-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Browse"
            title={
              <>
                Explore the <span className="text-flame-500">catalogue</span>
              </>
            }
            lead="Prices depend on quantity, number of colours, material thickness and finishing — so we quote per project. What you see here are the real production parameters for each item."
          />
          <div className="mt-12">
            <ProductGrid />
          </div>
        </div>
      </section>

      {/* ---------- custom request ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-24">
        <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-flame-600/16 blur-[120px]" />
        <div className="u-noise" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-12 xl:px-10">
          <div className="lg:col-span-7">
            <SectionHead
              tone="light"
              eyebrow="Not in the list?"
              title={
                <>
                  We print items that do not fit a <span className="text-flame-400">catalogue page</span>
                </>
              }
              lead="Machine covers, blister trays, folders, ID cards, injection-moulded housings, corrugated plastic signage, custom-shaped pouches. Send a photo of the item, its dimensions and your target quantity — we will tell you within a day whether it is printable and at what cost."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={waLink(`Halo ${site.name}, saya punya produk plastik khusus yang ingin dicetak. Ini detailnya: `)} external icon="whatsapp">
                Send item on WhatsApp
              </Btn>
              <Btn to="/contact" variant="light" icon="arrow">
                Use the inquiry form
              </Btn>
            </div>
          </div>
          <Reveal variant="right" className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: img.containers, alt: "Assorted plastic containers ready for custom printing" },
                { src: img.skincareBottles, alt: "Skincare bottles printed with custom branding" },
                { src: img.pouchBagSet, alt: "Pouch and bag packaging set mockup" },
                { src: img.shoppingRow, alt: "Row of printed promotional bags" },
              ].map((p, i) => (
                <figure
                  key={p.src}
                  className={`group overflow-hidden border border-white/12 ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- how to order ---------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="How to order"
            title={
              <>
                Three steps from browsing to <span className="text-flame-500">delivered cartons</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {howToOrder.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <article className="group relative h-full overflow-hidden border border-navy-900/10 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-flame-500/50 hover:shadow-[0_28px_55px_-34px_rgba(10,26,47,.5)]">
                  <span className="u-display absolute -right-2 -top-4 text-[6rem] leading-none text-navy-900/6 transition-colors duration-500 group-hover:text-flame-500/12">
                    {s.n}
                  </span>
                  <span className="relative flex h-11 w-11 items-center justify-center bg-navy-900 text-flame-400 transition-colors duration-500 group-hover:bg-flame-500 group-hover:text-white">
                    <Icon name={i === 0 ? "cart" : i === 1 ? "pen" : "truck"} className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-5 font-display text-[1.2rem] font-extrabold uppercase tracking-[-0.015em] text-navy-900">
                    {s.t}
                  </h3>
                  <p className="relative mt-3 text-[0.93rem] leading-relaxed text-muted">{s.d}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-6 flex flex-wrap items-center gap-4 border border-navy-900/10 bg-mist px-7 py-6">
              <span className="u-label text-navy-700">File formats we accept</span>
              {["AI", "EPS", "PDF", "SVG", "PSD", "TIFF", "PNG 300 dpi"].map((f) => (
                <span key={f} className="border border-navy-900/15 bg-white px-3 py-1.5 font-mono text-[0.72rem] text-navy-900">
                  {f}
                </span>
              ))}
              <a
                href={waLink(`Halo ${site.name}, saya ingin mengirim file desain untuk dicek.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 font-mono text-[0.75rem] text-flame-600 transition-colors hover:text-flame-700"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> Send your file for a free check
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want a physical sample before committing?"
        text="We keep printed references for most catalogue items and can courier them to your office. For your own artwork, a paid prototype run is available and credited back against your bulk order."
      />
    </>
  );
}
