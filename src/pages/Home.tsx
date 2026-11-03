import { img, site, waLink } from "../config/site";
import { processSteps } from "../data/content";
import { Link } from "../lib/router";
import { Icon } from "../components/Icons";
import { Btn, Eyebrow, Reveal, SectionHead } from "../components/ui";
import { Hero } from "../components/sections/Hero";
import { CtaBand, Faq, ProductionShowcase, SegmentMarquee, Testimonials, WhyUs } from "../components/sections/Blocks";
import { PortfolioGrid, ProductGrid } from "../components/sections/Catalog";
import { ServiceTiles } from "../components/sections/Process";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ---------------- intro ---------------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="u-dots pointer-events-none absolute right-0 top-10 hidden h-52 w-52 opacity-70 lg:block" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 xl:px-10">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="u-display mt-5 text-[2.1rem] leading-[0.95] text-navy-900 sm:text-[2.9rem] lg:text-[3.2rem]">
                We print brands onto <span className="text-flame-500">plastic</span> — and we do only that.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-muted">
                <p>
                  {site.name} started in {site.established} with one manual screen table and a stack of HDPE bags. Today we
                  run screen printing lines for rigid plastic, flexo presses for film and packaging, and a small design
                  studio that turns rough ideas into press-ready artwork.
                </p>
                <p>
                  Most of our clients are Indonesian businesses that need branding to look consistent — a coffee roaster
                  whose pouch must match the café signage, a retailer whose bag must match the store colour, a manufacturer
                  whose jerry cans must carry legible, abrasion-resistant marking.
                </p>
              </div>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn to="/about" variant="navy" icon="arrow">
                  About the company
                </Btn>
                <Btn to="/process" variant="outline" icon="arrow">
                  How production works
                </Btn>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal variant="right">
              <div className="relative">
                <div className="overflow-hidden border border-navy-900/10">
                  <img
                    src={img.screenWorkshop}
                    alt="Screen printing workshop with operators preparing printed plastic products"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-8 -left-4 hidden w-60 border border-navy-900/10 bg-navy-950 p-5 text-white shadow-[0_28px_60px_-30px_rgba(10,26,47,.8)] sm:block lg:-left-10">
                  <p className="u-display text-[2.6rem] leading-none text-flame-500">13+</p>
                  <p className="mt-2 font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.14em] text-navy-200">
                    Years printing on plastic substrates
                  </p>
                </div>
                <div className="absolute -right-3 top-6 hidden items-center gap-2 border border-navy-900/10 bg-white px-4 py-3 shadow-[0_20px_45px_-28px_rgba(10,26,47,.7)] lg:flex">
                  <Icon name="quality" className="h-5 w-5 text-flame-500" />
                  <span className="font-mono text-[0.7rem] text-navy-900">QC checked · every batch</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "machine", t: "In-house production", d: "No outsourcing to third-party vendors." },
                  { icon: "pen", t: "Free artwork support", d: "Dieline, vector clean-up & colour separation." },
                  { icon: "drop", t: "Food-grade inks", d: "Low-odour systems for F&B packaging." },
                  { icon: "flexible", t: "Flexible MOQ", d: "Trial runs from 500 pieces." },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="group flex gap-3.5 border border-navy-900/10 bg-mist p-4 transition-colors duration-400 hover:border-flame-500/50 hover:bg-white"
                  >
                    <Icon name={c.icon} className="h-5 w-5 shrink-0 text-flame-600 transition-transform duration-400 group-hover:scale-110" />
                    <div>
                      <p className="font-display text-[0.86rem] font-extrabold uppercase tracking-[-0.005em] text-navy-900">{c.t}</p>
                      <p className="mt-1 text-[0.8rem] leading-relaxed text-muted">{c.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SegmentMarquee />

      {/* ---------------- featured products ---------------- */}
      <section id="products-preview" className="relative overflow-hidden bg-mist py-20 lg:py-28">
        <div className="u-grid-light pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Featured products"
            title={
              <>
                Printed plastic our clients <span className="text-flame-500">order most</span>
              </>
            }
            lead="Bags, pouches, bottles and promotional plastic — each printed to your specification. Tap any product for the full technical sheet and an instant WhatsApp inquiry."
            action={
              <Btn to="/products" variant="navy" icon="arrow">
                View full catalogue
              </Btn>
            }
          />
          <div className="mt-14">
            <ProductGrid limit={6} showFilters={false} />
          </div>
        </div>
      </section>

      {/* ---------------- services ---------------- */}
      <section id="services-preview" className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Our services"
            title={
              <>
                Seven printing services, <span className="text-flame-500">one production floor</span>
              </>
            }
            lead="From a 500-piece bottle run to a million-piece annual bag contract. Choose a service to see materials, colour options, MOQ and lead time."
            action={
              <Btn to="/services" variant="outline" icon="arrow">
                All services & specs
              </Btn>
            }
          />
          <div className="mt-14">
            <ServiceTiles limit={6} />
          </div>
        </div>
      </section>

      {/* ---------------- production ---------------- */}
      <ProductionShowcase />

      {/* ---------------- advantages ---------------- */}
      <WhyUs />

      {/* ---------------- portfolio preview ---------------- */}
      <section className="relative overflow-hidden bg-mist py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Portfolio preview"
            title={
              <>
                Work that left our floor <span className="text-flame-500">this year</span>
              </>
            }
            lead="A selection of finished projects across food & beverage, retail, packaging, industrial marking and promotional printing."
            action={
              <Btn to="/portfolio" variant="navy" icon="arrow">
                Open the gallery
              </Btn>
            }
          />
          <div className="mt-14">
            <PortfolioGrid limit={6} showFilters={false} />
          </div>
        </div>
      </section>

      {/* ---------------- process teaser ---------------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-24">
        <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-flame-600/14 blur-[110px]" />
        <div className="u-noise" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            tone="light"
            eyebrow="Production process"
            title={
              <>
                How your order moves <span className="text-flame-400">through the workshop</span>
              </>
            }
            action={
              <Btn to="/process" variant="light" icon="arrow">
                Full process breakdown
              </Btn>
            }
          />

          <ol className="mt-14 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.no} delay={i * 70}>
                <Link
                  to={`/process#step-${s.no}`}
                  className="group flex h-full flex-col bg-navy-950 p-6 transition-colors duration-500 hover:bg-navy-900"
                >
                  <span className="flex items-center justify-between">
                    <span className="u-display text-[2rem] leading-none text-white/18 transition-colors duration-500 group-hover:text-flame-500">
                      {s.no}
                    </span>
                    <Icon
                      name="arrow"
                      className="h-4 w-4 -translate-x-2 text-flame-500 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                  <span className="mt-6 block font-display text-[0.95rem] font-extrabold uppercase leading-tight tracking-[-0.01em]">
                    {s.title}
                  </span>
                  <span className="mt-2 block font-mono text-[0.66rem] uppercase tracking-[0.14em] text-navy-400">
                    {s.duration}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- testimonials ---------------- */}
      <Testimonials />

      {/* ---------------- faq + contact ---------------- */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 xl:px-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHead
                eyebrow="Common questions"
                title={
                  <>
                    Before you <span className="text-flame-500">ask</span>
                  </>
                }
                lead="Answers to the questions our sales team receives every day."
              />
              <div className="mt-8 border border-navy-900/10 bg-mist p-6">
                <p className="font-display text-[1.05rem] font-extrabold uppercase tracking-[-0.01em] text-navy-900">
                  Still unsure about material or quantity?
                </p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                  Send a photo of your current packaging and tell us your target price. We will recommend the closest
                  workable specification.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Btn href={waLink(`Halo ${site.name}, saya ingin konsultasi spesifikasi kemasan plastik.`)} external size="sm" icon="whatsapp">
                    WhatsApp consult
                  </Btn>
                  <Btn to="/contact" variant="outline" size="sm" icon="arrow">
                    Contact page
                  </Btn>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Faq />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
