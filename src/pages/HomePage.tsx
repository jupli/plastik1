import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";
import { SITE } from "@/config/site";
import { IMG, PORTFOLIO, PRODUCTS, PROCESS_STEPS, SERVICES, STRENGTHS, pageHref } from "@/data/content";
import { waLink } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProducts />
      <ServiceHighlights />
      <Advantages />
      <PortfolioPreview />
      <ProcessPreview />
      <CtaBand />
    </>
  );
}

/* ---------------- Hero ---------------- */
const HERO_HIGHLIGHTS: { icon: IconName; label: string }[] = [
  { icon: "pen", label: "Custom Designs" },
  { icon: "layers", label: "Flexible Quantities" },
  { icon: "eye", label: "Quality Inspection" },
  { icon: "truck", label: "Reliable Delivery" },
];

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-950 text-white">
      <img
        src={IMG.heroBags}
        alt="Custom printed plastic shopping bags with navy and orange brand graphics"
        fetchPriority="high"
        className="hero-bg absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="container-x flex flex-1 items-center pb-16 pt-36 sm:pt-40">
        <div className="max-w-2xl">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {SITE.tagline}
          </span>

          <h1
            className="animate-fade-up mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Custom <span className="text-accent-500">Plastic Printing</span> Solutions
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            We print your logo, brand and artwork onto plastic bags, food packaging, pouches and promotional products.
            Sharp colour, durable ink and dependable delivery for small businesses, growing brands and manufacturers.
          </p>

          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-primary">
              Get a Quote
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href={pageHref("services")} className="btn btn-outline">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-950/70 backdrop-blur-md">
        <div className="container-x grid grid-cols-2 gap-5 py-6 lg:grid-cols-4">
          {HERO_HIGHLIGHTS.map((h) => (
            <div key={h.label} className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-500/15 text-accent-400">
                <Icon name={h.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-white/85">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Company intro ---------------- */
function Intro() {
  const points = [
    "Full-colour and single-colour screen printing",
    "Consistent colour matching across every batch",
    "Printing on bags, films, sheets and packaging",
  ];

  return (
    <section className="section bg-white">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="zoom-wrap overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
            <img
              src={IMG.screenPrint}
              alt="Screen printing with orange ink being spread across a mesh screen on a plastic print table"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="animate-float absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xl sm:left-auto sm:right-8 sm:w-80">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-white">
              <Icon name="print" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">Screen Printing Specialists</p>
              <p className="text-xs text-slate-500">Bags, sheets, packaging &amp; promotional plastics</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="eyebrow">About {SITE.companyName}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
            Specialists in printing on plastic, from one design to large production runs
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {SITE.companyName} is a plastic screen printing and packaging printing company serving small businesses,
            retailers, food and beverage brands, manufacturers and corporate clients. We pair skilled craftsmanship with
            organised production so every print looks sharp, lasts longer and represents your brand well.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-navy-900">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <a href={pageHref("about")} className="btn btn-line mt-10">
            About Our Company
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Featured products ---------------- */
function FeaturedProducts() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Products"
          title="Featured Printing Products"
          subtitle="From printed carrier bags to food pouches and promotional items, every product can be customised with your brand."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.slice(0, 4).map((product, i) => (
            <Reveal key={product.id} delay={i * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={pageHref("products")} className="btn btn-navy">
            View Full Catalog
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Service highlights ---------------- */
function ServiceHighlights() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title="Printing Solutions for Every Stage of Your Brand"
          subtitle="Whether you are launching a new product or restocking a proven design, we have a service for the job."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.slice(0, 4).map((service, i) => (
            <Reveal key={service.id} delay={i * 90}>
              <a href={pageHref("services")} className="card group block h-full p-7">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-accent-500">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-bold leading-snug text-navy-900">{service.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent-500">
                  Learn more
                  <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={pageHref("services")} className="btn btn-line">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Advantages ---------------- */
function Advantages() {
  return (
    <section className="section relative overflow-hidden bg-navy-900 text-white">
      <div className="grid-pattern absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title="Built for Quality, Reliability and Growth"
          subtitle="Our strengths come from careful production, honest communication and a genuine commitment to every client."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {SITE.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-4xl font-extrabold text-accent-500 sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-white/65">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STRENGTHS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:bg-white/10">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-500/15 text-accent-400">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio preview ---------------- */
function PortfolioPreview() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Portfolio"
            title="Selected Printing Projects"
            subtitle="A glimpse of custom printed plastic products across bags, pouches, packaging and promotional items."
          />
          <a href={pageHref("portfolio")} className="btn btn-line shrink-0 self-start md:self-auto">
            Browse Portfolio
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {PORTFOLIO.slice(0, 4).map((item, i) => (
            <Reveal key={item.id} delay={i * 90}>
              <a href={pageHref("portfolio")} className="zoom-wrap group relative block aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-accent-400">
                    {item.category}
                  </span>
                  <span className="mt-1 block text-sm font-bold text-white sm:text-base">{item.title}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">Showcase images are illustrative examples.</p>
      </div>
    </section>
  );
}

/* ---------------- Process preview ---------------- */
function ProcessPreview() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Production Process"
          title="From First Idea to Finished Product"
          subtitle="A transparent, six-step workflow that keeps your project on schedule and on spec."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <span className="text-4xl font-extrabold text-accent-500/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-bold leading-snug text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={pageHref("process")} className="btn btn-navy">
            See the Full Process
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
