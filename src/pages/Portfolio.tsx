import { img, site, waLink } from "../config/site";
import { projects } from "../data/content";
import { Icon } from "../components/Icons";
import { Btn, Eyebrow, Reveal, SectionHead, SpecTable } from "../components/ui";
import { CtaBand, PageHeader, SegmentMarquee, StatsBand, Testimonials } from "../components/sections/Blocks";
import { PortfolioGrid } from "../components/sections/Catalog";

/* =============================================================
   PORTFOLIO
   ============================================================= */

const featured = projects[0];

export default function Portfolio() {
  return (
    <>
      <PageHeader
        crumb="Portfolio"
        eyebrow="Finished projects"
        title={
          <>
            Print that had to survive the <span className="text-flame-500">shelf, the freezer and the courier</span>
          </>
        }
        lead="Selected work from our production floor: coffee pouches, retail bag programmes, bottle marking, frozen food packaging, promotional kits and industrial containers. Open any tile for the project scope."
        image={img.screenPrinter}
        facts={[
          { k: "Projects shown", v: `${projects.length} of 400+` },
          { k: "Industries", v: "F&B · Retail · Industrial" },
          { k: "Reorder rate", v: "78% of clients" },
          { k: "Since", v: site.established },
        ]}
      />

      {/* ---------- featured case ---------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="u-grid-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <Reveal>
            <Eyebrow>Case study</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal variant="left" className="lg:col-span-7">
              <figure className="group relative overflow-hidden border border-navy-900/10">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="u-label absolute left-4 top-4 bg-navy-950/85 px-3 py-1.5 text-flame-400 backdrop-blur-sm">
                  Featured · {featured.year}
                </span>
              </figure>
            </Reveal>

            <div className="lg:col-span-5">
              <Reveal variant="right">
                <h2 className="u-display text-[1.9rem] leading-[0.98] text-navy-900 sm:text-[2.5rem]">
                  {featured.title}
                </h2>
                <p className="mt-3 font-mono text-[0.78rem] text-muted">{featured.client}</p>
                <p className="mt-5 text-[0.98rem] leading-relaxed text-muted">
                  The client came to us with a pouch that faded on the shelf and a seal that failed during shipping. We
                  rebuilt the laminate structure, matched their brand orange against a Pantone master, moved the artwork
                  to a four-colour process with two spot colours for the logo, and set a seal temperature window that
                  survived a drop test from waist height.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-7 border border-navy-900/10 bg-mist p-5">
                  <SpecTable
                    rows={[
                      { label: "Scope", value: featured.scope.split("·")[0].trim() },
                      { label: "Structure", value: "PET / ALU / PE + valve" },
                      { label: "Colours", value: "CMYK + 2 Pantone" },
                      { label: "Run size", value: "8.000 pcs / quarter" },
                    ]}
                  />
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { v: "0", u: "seal failures" },
                    { v: "ΔE 1.4", u: "colour match" },
                    { v: "9 days", u: "lead time" },
                  ].map((m) => (
                    <div key={m.u} className="border-t-2 border-flame-500 pt-3">
                      <p className="u-display text-[1.4rem] leading-none text-navy-900">{m.v}</p>
                      <p className="mt-1.5 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-muted">{m.u}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={220}>
                <Btn
                  href={waLink(`Halo ${site.name}, saya melihat case study "${featured.title}". Saya butuh kemasan serupa untuk produk saya.`)}
                  external
                  icon="whatsapp"
                  className="mt-8"
                >
                  I need something like this
                </Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- gallery ---------- */}
      <section id="gallery" className="relative overflow-hidden bg-mist py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Project gallery"
            title={
              <>
                Browse by <span className="text-flame-500">industry</span>
              </>
            }
            lead="Use the filters to see work from your sector. Click any project to open it full size — arrow keys move between projects."
          />
          <div className="mt-12">
            <PortfolioGrid />
          </div>
        </div>
      </section>

      <SegmentMarquee />

      {/* ---------- industries ---------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Sectors"
            title={
              <>
                The industries we print for <span className="text-flame-500">most often</span>
              </>
            }
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-navy-900/12 bg-navy-900/12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "cup", t: "Food & beverage", d: "Roasteries, snack producers, frozen food, beverage outlets and catering packs.", img: img.streetFoodBags },
              { icon: "cart", t: "Retail & fashion", d: "Boutiques, minimarkets, shoe stores, pharmacies and gift shops.", img: img.tissueBags },
              { icon: "bottle", t: "Cosmetic & personal care", d: "Skincare brands, hair care, essential oils and home care liquids.", img: img.skincareBottles },
              { icon: "machine", t: "Manufacturing & industrial", d: "Lubricants, chemicals, paints, adhesives and component makers.", img: img.bottleConveyor },
              { icon: "spark", t: "Corporate & events", d: "Banks, agencies, exhibition kits, hampers and employee merchandise.", img: img.parcel },
              { icon: "bag", t: "UMKM & startups", d: "First-run branding packages with flexible quantities and free artwork help.", img: img.zipperPouch },
            ].map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 80}>
                <article className="group relative h-full overflow-hidden bg-white p-7 transition-colors duration-500 hover:bg-navy-950">
                  <img
                    src={c.img}
                    alt={c.t}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-25"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center border border-navy-900/12 text-flame-600 transition-colors duration-500 group-hover:border-flame-500 group-hover:bg-flame-500 group-hover:text-white">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 font-display text-[1.15rem] font-extrabold uppercase tracking-[-0.015em] text-navy-900 transition-colors duration-500 group-hover:text-white">
                    {c.t}
                  </h3>
                  <p className="relative mt-2.5 text-[0.9rem] leading-relaxed text-muted transition-colors duration-500 group-hover:text-navy-200">
                    {c.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand tone="dark" />
      <Testimonials />
      <CtaBand
        title="Your project could be next in this gallery."
        text="Send your artwork and quantity — we will produce a sample, photograph it, and share the result before you commit to a bulk order."
      />
    </>
  );
}
