import { img, site, waLink } from "../config/site";
import { Icon } from "../components/Icons";
import { Btn, Bullets, Eyebrow, Reveal, SectionHead } from "../components/ui";
import { CtaBand, Faq, PageHeader, WhyUs } from "../components/sections/Blocks";
import { ServicesAccordion } from "../components/sections/Process";

/* =============================================================
   OUR SERVICES
   ============================================================= */

const methods = [
  {
    name: "Screen printing",
    icon: "layers",
    best: "Rigid plastic: bottles, pails, containers, acrylic, sheets",
    colours: "1 – 8 spot colours, very dense ink film",
    moq: "from 500 pcs",
    cost: "Low setup, best for short & medium runs",
    note: "Our core speciality. Ink sits thick and opaque — ideal for solid logos on dark plastic.",
  },
  {
    name: "Flexo printing",
    icon: "machine",
    best: "Plastic bags and film in roll form (HDPE, LDPE, PP)",
    colours: "1 – 6 colours",
    moq: "from 5.000 pcs",
    cost: "Fast, economical at volume",
    note: "Photopolymer plates, water or solvent based ink. Standard for shopping bags and kresek.",
  },
  {
    name: "Rotogravure",
    icon: "drop",
    best: "Laminated packaging, pouches, sachets, lidding film",
    colours: "CMYK process + spot, photographic quality",
    moq: "from 3.000 pcs",
    cost: "Cylinder cost, cheapest per piece at high volume",
    note: "The right choice when your artwork has gradients, product photography or fine detail.",
  },
];

const materials = [
  { n: "HDPE", d: "Stiff, economical film for shopping and vest bags." },
  { n: "LDPE", d: "Soft glossy film for boutique and goodie bags." },
  { n: "PP", d: "Heat resistant, clear film and woven sacks." },
  { n: "PET", d: "Rigid bottles, jars and clear laminate outer layer." },
  { n: "NY / PE", d: "Vacuum bag structures for frozen food." },
  { n: "OPP / CPP", d: "Snack and confectionery packaging laminates." },
  { n: "Acrylic", d: "Signage, display holders, POS material." },
  { n: "PVC sheet", d: "Folders, boxes, ID cards, blister trays." },
  { n: "PP corrugated", d: "Lightweight signage boards and box liners." },
];

const addons = [
  {
    icon: "pen",
    t: "Design & pre-press",
    items: ["Dieline creation", "Vector redraw of logo", "Colour separation & trapping", "Two free revision rounds"],
  },
  {
    icon: "quality",
    t: "Finishing",
    items: ["Matte / glossy lamination", "Hot stamp & metallic ink", "Emboss-like texture varnish", "Eyelet, rope & patched handle"],
  },
  {
    icon: "layers",
    t: "Converting",
    items: ["Cutting & sealing to size", "Zipper and valve fitting", "Perforation & tear notch", "Rollstock rewinding"],
  },
  {
    icon: "truck",
    t: "Logistics",
    items: ["SKU bundling & labelling", "Carton packing with list", "Staged delivery schedules", "Nationwide cargo partners"],
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        crumb="Our Services"
        eyebrow="What we do"
        title={
          <>
            Printing services for every <span className="text-flame-500">plastic surface</span>
          </>
        }
        lead="Seven dedicated services covering bags, packaging, food & beverage products, rigid plastic, promotional items and bulk contracts. Open a service to see materials, colour options, minimum order and lead time."
        image={img.pressRollers}
        facts={[
          { k: "Services", v: "7 dedicated lines" },
          { k: "Colours", v: "Up to 8 spot / CMYK" },
          { k: "MOQ", v: "from 500 pcs" },
          { k: "Lead time", v: "5 – 14 working days" },
        ]}
      />

      {/* ---------- accordion ---------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="u-grid-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Service catalogue"
            title={
              <>
                Pick the service that matches <span className="text-flame-500">your product</span>
              </>
            }
            lead="Each service below lists real production parameters so you can compare before contacting us. Specifications shown are typical — final values depend on your artwork and quantity."
          />
          <div className="mt-14">
            <ServicesAccordion />
          </div>
        </div>
      </section>

      {/* ---------- methods ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
        <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-flame-600/14 blur-[120px]" />
        <div className="u-noise" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            tone="light"
            eyebrow="Printing methods"
            title={
              <>
                Three technologies, <span className="text-flame-400">chosen for your job</span>
              </>
            }
            lead="We do not push one machine on every order. Material, artwork complexity and quantity decide which technology gives you the best price-to-quality ratio."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {methods.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <article className="group flex h-full flex-col border border-white/12 bg-white/5 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-flame-500/60 hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center border border-flame-500/40 bg-flame-500/10 text-flame-400 transition-colors duration-500 group-hover:bg-flame-500 group-hover:text-white">
                      <Icon name={m.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-[0.68rem] text-navy-300">0{i + 1}</span>
                  </div>
                  <h3 className="u-display mt-6 text-[1.5rem] text-white">{m.name}</h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-navy-200">{m.note}</p>
                  <dl className="mt-6 space-y-3 border-t border-white/12 pt-5">
                    {[
                      ["Best for", m.best],
                      ["Colours", m.colours],
                      ["MOQ", m.moq],
                      ["Cost profile", m.cost],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="u-label text-navy-300">{k}</dt>
                        <dd className="mt-1 text-[0.88rem] leading-snug text-white">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- materials ---------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Substrates"
            title={
              <>
                Materials we print on <span className="text-flame-500">every week</span>
              </>
            }
            lead="Bring your own material or source it through us. Below are the substrates we keep in stock or order on a rolling schedule."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-navy-900/12 bg-navy-900/12 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((m, i) => (
              <Reveal key={m.n} delay={(i % 3) * 70}>
                <div className="group flex h-full items-start gap-4 bg-white p-6 transition-colors duration-400 hover:bg-mist">
                  <span className="flex h-11 w-16 shrink-0 items-center justify-center border border-navy-900/12 font-display text-[0.82rem] font-black uppercase tracking-[-0.01em] text-navy-900 transition-colors duration-400 group-hover:border-flame-500 group-hover:bg-flame-500 group-hover:text-white">
                    {m.n}
                  </span>
                  <p className="text-[0.88rem] leading-relaxed text-muted">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-6 flex flex-wrap items-center gap-5 border border-navy-900/10 bg-mist px-7 py-6">
              <Icon name="chat" className="h-6 w-6 text-flame-600" />
              <p className="max-w-xl text-[0.92rem] text-navy-800">
                Material not listed? We regularly print on recycled resin, biodegradable compounds, foamed PP and
                coated films. Send a sample and we will run an adhesion test.
              </p>
              <Btn
                href={waLink(`Halo ${site.name}, saya punya material khusus yang ingin dicetak. Bisa dites dulu?`)}
                external
                size="sm"
                icon="whatsapp"
                className="ml-auto"
              >
                Ask about your material
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- add-ons ---------- */}
      <section className="relative overflow-hidden bg-mist py-20 lg:py-28">
        <div className="u-dots pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <Eyebrow>Included &amp; add-on</Eyebrow>
                </Reveal>
                <Reveal delay={70}>
                  <h2 className="u-display mt-5 text-[2rem] leading-[0.96] text-navy-900 sm:text-[2.5rem]">
                    Everything around the print itself
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-5 text-[0.98rem] leading-relaxed text-muted">
                    Design work, finishing, converting and packing are handled by the same team — no third-party
                    handoffs, no waiting for another vendor's schedule.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <figure className="mt-8 overflow-hidden border border-navy-900/10">
                    <img
                      src={img.designStudio}
                      alt="Designer preparing packaging artwork for production"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1.3s] hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </Reveal>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {addons.map((a, i) => (
                <Reveal key={a.t} delay={i * 80}>
                  <article className="group h-full border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-flame-500/50 hover:shadow-[0_28px_55px_-34px_rgba(10,26,47,.5)]">
                    <span className="flex h-12 w-12 items-center justify-center bg-navy-900 text-flame-400 transition-colors duration-500 group-hover:bg-flame-500 group-hover:text-white">
                      <Icon name={a.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-[1.15rem] font-extrabold uppercase tracking-[-0.015em] text-navy-900">
                      {a.t}
                    </h3>
                    <div className="mt-4">
                      <Bullets items={a.items} />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyUs />

      {/* ---------- faq ---------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1100px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Service FAQ"
            title={
              <>
                Ordering details, <span className="text-flame-500">answered</span>
              </>
            }
          />
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
