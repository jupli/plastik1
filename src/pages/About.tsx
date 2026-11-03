import { img, site, waLink } from "../config/site";
import { segments } from "../data/content";
import { Icon } from "../components/Icons";
import { Btn, Bullets, Eyebrow, Reveal, SectionHead, SpecTable } from "../components/ui";
import { CtaBand, PageHeader, ProductionShowcase, StatsBand, Testimonials, WhyUs } from "../components/sections/Blocks";

/* =============================================================
   ABOUT US
   ============================================================= */

const values = [
  {
    n: "01",
    t: "Precision",
    d: "Registration, colour density and seal strength are measured, not guessed. Every batch carries a QC record.",
  },
  {
    n: "02",
    t: "Honesty",
    d: "If a design cannot hold on a certain material or quantity, we say so before production — not after delivery.",
  },
  {
    n: "03",
    t: "Craft",
    d: "Screen printing is still a hand-tuned process. Our senior operators mix ink and set pressure by feel and by test.",
  },
  {
    n: "04",
    t: "Partnership",
    d: "Most clients stay for years. We grow their packaging as their volume grows, without re-doing the artwork.",
  },
];

const capabilities = [
  { k: "Screen printing", v: "Manual & semi-auto · up to 8 colours" },
  { k: "Flexo printing", v: "Film & bags · 1 – 6 colours" },
  { k: "Rotogravure", v: "Laminated packaging · CMYK + spot" },
  { k: "Max sheet size", v: "70 × 100 cm rigid plastic" },
  { k: "Film width", v: "up to 1.200 mm rollstock" },
  { k: "Monthly capacity", v: "± 3.000.000 impressions" },
  { k: "Workshop", v: "1.800 m² print + warehouse" },
  { k: "Team", v: "38 people, 2 shifts" },
];

const qcChecks = [
  "Colour deviation vs. approved master (ΔE ≤ 2.0)",
  "Ink adhesion — cross-cut & tape-pull test",
  "Scratch and abrasion resistance on rigid parts",
  "Seal strength and burst test for pouches",
  "Dimensional check: width, length, gusset, micron",
  "Visual defect sorting under standard light box",
];

export default function About() {
  return (
    <>
      <PageHeader
        crumb="About Us"
        eyebrow={`Since ${site.established} · ${site.city}`}
        title={
          <>
            A specialist workshop for <span className="text-flame-500">plastic printing</span>
          </>
        }
        lead={`${site.legalName} prints custom designs, logos and branding onto plastic materials and packaging products. We work with small businesses, retailers, food & beverage brands, manufacturers and corporate clients across Indonesia.`}
        image={img.team}
        facts={[
          { k: "Established", v: site.established },
          { k: "Speciality", v: "Plastic screen printing" },
          { k: "Clients", v: "UMKM → corporate" },
          { k: "Location", v: site.address.city },
        ]}
      />

      {/* ---------- introduction ---------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="u-grid-light pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 xl:px-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Company introduction</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="u-display mt-5 text-[2rem] leading-[0.96] text-navy-900 sm:text-[2.7rem]">
                Built around one question: <span className="text-flame-500">“will this print still look right in six months?”</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-7 space-y-4 text-[1rem] leading-relaxed text-muted">
                <p>
                  {site.name} was founded in {site.established} in {site.address.city} as a small screen printing table
                  serving local shops that needed their logo on plastic bags. That single product line taught us
                  everything that matters in plastic printing: how resin behaves under ink, how micron thickness changes
                  colour perception, and how a bag fails in a customer's hand.
                </p>
                <p>
                  Today the workshop handles rigid plastic screen printing, film and bag printing, laminated packaging
                  runs and promotional plastic products. Our clients range from a single-outlet coffee shop ordering 500
                  pouches to retail groups on annual contracts measured in millions of pieces.
                </p>
                <p>
                  We keep design, pre-press, printing, quality control and packing under one roof. That is the reason our
                  lead times hold and the reason a reorder in month eleven matches the colour approved in month one.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Btn to="/services" icon="arrow">
                  Explore our services
                </Btn>
                <Btn href={waLink(`Halo ${site.name}, saya ingin mengenal perusahaan Anda dan melihat contoh produksi.`)} external variant="outline" icon="whatsapp">
                  Talk to our team
                </Btn>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="right">
              <figure className="relative overflow-hidden border border-navy-900/10">
                <img
                  src={img.screenCraft}
                  alt="Operator pulling a squeegee across a screen printing frame"
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 to-transparent p-5">
                  <p className="u-label text-flame-400">Craft</p>
                  <p className="mt-1.5 font-display text-[1.05rem] font-extrabold uppercase text-white">
                    Manual screen station 01
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-5 border border-navy-900/10 bg-mist p-6">
                <p className="u-label text-navy-700">Business focus</p>
                <ul className="mt-4 space-y-2.5">
                  {segments.slice(0, 6).map((s) => (
                    <li key={s} className="flex items-center gap-3 text-[0.9rem] text-navy-900">
                      <span className="h-1.5 w-1.5 rotate-45 bg-flame-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- vision & mission ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
        <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-flame-600/16 blur-[120px]" />
        <div className="u-noise" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            tone="light"
            eyebrow="Direction"
            title={
              <>
                Vision &amp; <span className="text-flame-400">mission</span>
              </>
            }
            lead="Short statements we actually plan against every quarter."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="group h-full border border-white/12 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-flame-500/50 hover:bg-white/8">
                <span className="flex h-12 w-12 items-center justify-center bg-flame-500 text-white">
                  <Icon name="spark" className="h-6 w-6" />
                </span>
                <h3 className="u-display mt-6 text-[1.7rem] text-white">Our vision</h3>
                <p className="mt-4 text-[1rem] leading-relaxed text-navy-200">
                  To become the most trusted plastic printing partner for Indonesian businesses — the workshop a brand
                  owner recommends without hesitation, because the colour is right, the date is kept and the price is
                  fair.
                </p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={90}>
              <div className="group h-full border border-white/12 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-flame-500/50 hover:bg-white/8">
                <span className="flex h-12 w-12 items-center justify-center border border-flame-500 text-flame-400">
                  <Icon name="machine" className="h-6 w-6" />
                </span>
                <h3 className="u-display mt-6 text-[1.7rem] text-white">Our mission</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "Deliver sharp, durable print on every plastic substrate we accept.",
                    "Make custom packaging accessible to small and medium businesses.",
                    "Keep artwork, production and QC in-house so quality stays consistent.",
                    "Reduce waste through accurate material planning and reprint-free runs.",
                  ].map((m) => (
                    <li key={m} className="flex gap-3 text-[0.95rem] leading-relaxed text-navy-200">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-flame-400" strokeWidth={2.4} />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* values */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <div className="group h-full border-t-2 border-flame-500 bg-white/5 p-6 transition-colors duration-500 hover:bg-white/10">
                  <span className="font-mono text-[0.7rem] text-flame-400">{v.n}</span>
                  <h4 className="mt-3 font-display text-[1.15rem] font-extrabold uppercase tracking-[-0.01em] text-white">
                    {v.t}
                  </h4>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-navy-200">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand tone="light" />

      {/* ---------- expertise ---------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 xl:px-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Our expertise</Eyebrow>
              </Reveal>
              <Reveal delay={70}>
                <h2 className="u-display mt-5 text-[2rem] leading-[0.96] text-navy-900 sm:text-[2.6rem]">
                  Printing on plastic is not printing on paper
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-[1rem] leading-relaxed text-muted">
                  Plastic is non-porous. Ink sits on the surface instead of soaking in, which changes drying time,
                  adhesion, colour density and durability. Getting it right means controlling surface treatment, ink
                  chemistry, squeegee pressure and curing — on every single run.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 border border-navy-900/10 bg-mist p-6">
                  <p className="u-label text-navy-700">Production capabilities</p>
                  <div className="mt-4">
                    <SpecTable rows={capabilities.map((c) => ({ label: c.k, value: c.v }))} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="right">
              <figure className="overflow-hidden border border-navy-900/10">
                <img
                  src={img.pressSheets}
                  alt="Printing press running plastic material through the print unit"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Reveal delay={60}>
                <div className="border border-navy-900/10 p-6">
                  <h3 className="font-display text-[1.1rem] font-extrabold uppercase tracking-[-0.01em] text-navy-900">
                    Materials we master
                  </h3>
                  <div className="mt-4">
                    <Bullets
                      items={[
                        "HDPE, LDPE, LLDPE film & bags",
                        "PP, PET, OPP, NY laminates",
                        "Rigid PET, HDPE bottles & jars",
                        "Acrylic, PVC sheet, PP corrugated board",
                        "Injection-moulded parts & housings",
                      ]}
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={130}>
                <div className="border border-navy-900/10 p-6">
                  <h3 className="font-display text-[1.1rem] font-extrabold uppercase tracking-[-0.01em] text-navy-900">
                    Ink systems
                  </h3>
                  <div className="mt-4">
                    <Bullets
                      items={[
                        "Solvent-based screen ink for rigid plastic",
                        "UV-cure ink for abrasion resistance",
                        "Water-based ink for film & paper hybrid",
                        "Food-grade low-odour ink for F&B",
                        "Metallic, fluorescent & soft-touch effects",
                      ]}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- quality control ---------- */}
      <section className="relative overflow-hidden bg-mist py-20 lg:py-28">
        <div className="u-dots pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal variant="left">
                <figure className="relative overflow-hidden border border-navy-900/10">
                  <img
                    src={img.qcInspect}
                    alt="Quality control staff inspecting printed material against a light box"
                    className="aspect-[4/3.4] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute left-4 top-4 bg-navy-950/85 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-flame-400 backdrop-blur-sm">
                    QC bench · bay 3
                  </span>
                </figure>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <SectionHead
                eyebrow="Quality control & customer satisfaction"
                title={
                  <>
                    Six checks before your order is <span className="text-flame-500">allowed to ship</span>
                  </>
                }
                lead="Quality is not a final inspection — it is a sequence of decisions. Our QC staff sign off at each checkpoint and keep a record with your batch number."
              />
              <div className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {qcChecks.map((c, i) => (
                  <Reveal key={c} delay={i * 70}>
                    <div className="group flex gap-4 border-b border-navy-900/10 pb-4">
                      <span className="font-mono text-[0.7rem] text-flame-600">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-[0.93rem] leading-relaxed text-navy-800 transition-colors group-hover:text-navy-950">
                        {c}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Btn to="/process#step-05" variant="navy" icon="arrow">
                    See the QC stage
                  </Btn>
                  <Btn to="/contact" variant="outline" icon="arrow">
                    Request a sample
                  </Btn>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ProductionShowcase />
      <WhyUs />
      <Testimonials />
      <CtaBand
        title="Come see the workshop, or start with a sample."
        text="Clients are welcome to visit our production floor in East Jakarta by appointment. If you are further away, we will courier physical samples of materials and printed references to your office."
      />
    </>
  );
}
