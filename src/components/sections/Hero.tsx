import { img, site, waLink, DEFAULT_WA_MESSAGE } from "../../config/site";
import { stats } from "../../data/content";
import { Link } from "../../lib/router";
import { Icon } from "../Icons";
import { Btn, MaskLines, Reveal } from "../ui";
import { useParallax } from "../../lib/hooks";

/* =============================================================
   HERO — asymmetric split, press photography + live job ticket
   ============================================================= */

const marqueeItems = [
  "Plastic bag printing",
  "Stand-up pouches",
  "Food & beverage packaging",
  "Screen printing on bottles",
  "Promotional goodie bags",
  "Cup sealing film",
  "Jerry can & pail marking",
  "Bulk production contracts",
];

export function Hero() {
  const { ref, offset } = useParallax<HTMLDivElement>(26);

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-28 text-white lg:pt-36">
      {/* ambient layers */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_8%,#16345a_0%,#0a1a2f_46%,#050f1d_100%)]" />
      <div className="u-grid-dark absolute inset-0 opacity-80" />
      <div className="absolute -left-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-flame-600/20 blur-[130px]" />
      <div className="absolute right-1/4 top-0 h-[22rem] w-[22rem] rounded-full bg-navy-400/20 blur-[120px]" />
      <div className="u-dots-flame absolute bottom-24 left-6 hidden h-40 w-40 opacity-40 lg:block" />
      <div className="u-noise" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 pb-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-20 xl:px-10">
        {/* ---------- copy ---------- */}
        <div className="lg:col-span-7 xl:col-span-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="u-label inline-flex items-center gap-2 border border-flame-500/40 bg-flame-500/10 px-3 py-1.5 text-flame-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flame-400" />
                </span>
                Press line running · Est. {site.established}
              </span>
              <span className="u-label text-navy-300">{site.city}</span>
            </div>
          </Reveal>

          <h1 className="u-display-wide mt-7 text-[clamp(2.6rem,7.6vw,5.6rem)] text-white">
            <MaskLines
              lines={[
                <>Professional</>,
                <>
                  Custom <span className="text-flame-500">Plastic</span>
                </>,
                <>
                  <span className="u-stroke-text">Printing</span> Solutions
                </>,
              ]}
              delay={120}
            />
          </h1>

          <Reveal delay={260}>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-navy-200 sm:text-[1.08rem]">
              {site.name} is a specialist screen printing and packaging printing workshop for plastic substrates.
              We turn your logo, artwork and brand colours into production-ready print on bags, pouches, bottles,
              containers and promotional plastic — with food-grade inks, tight registration and honest lead times.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Btn to="/contact" size="lg" icon="arrow">
                Get a Quote
              </Btn>
              <Btn to="/services" size="lg" variant="light" icon="arrow">
                Explore Our Services
              </Btn>
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-1 font-mono text-[0.78rem] text-navy-200 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                  <Icon name="whatsapp" className="h-4 w-4" />
                </span>
                Fast quote on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* proof row */}
          <Reveal delay={420}>
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-7 border-t border-white/12 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="u-display text-[1.9rem] leading-none text-white">
                    {s.value}
                    <span className="text-flame-500">{s.suffix}</span>
                  </dt>
                  <dd className="mt-2 font-mono text-[0.66rem] uppercase leading-snug tracking-[0.14em] text-navy-300">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* ---------- imagery ---------- */}
        <div ref={ref} className="relative lg:col-span-5 xl:col-span-6">
          <div className="relative mx-auto max-w-[34rem] lg:mt-4 lg:max-w-none" style={{ transform: `translateY(${offset}px)` }}>
            {/* rotating seal */}
            <div className="absolute -right-5 -top-10 z-20 hidden h-28 w-28 lg:block lg:h-32 lg:w-32 xl:-right-10">
              <svg viewBox="0 0 120 120" className="u-spin-slow h-full w-full">
                <defs>
                  <path id="seal" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <circle cx="60" cy="60" r="58" fill="#0a1a2f" stroke="rgba(242,98,28,.5)" strokeWidth="1" />
                <text fill="#ffffff" fontSize="10.4" fontFamily="IBM Plex Mono, monospace" letterSpacing="2.6">
                  <textPath href="#seal">
                    SCREEN PRINTING · PLASTIC PACKAGING · CUSTOM LOGO ·
                  </textPath>
                </text>
                <circle cx="60" cy="60" r="26" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
                <path d="M60 44v32M44 60h32" stroke="#f2621c" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="60" cy="60" r="5" fill="#f2621c" />
              </svg>
            </div>

            {/* main image */}
            <figure className="relative overflow-hidden border border-white/12 bg-navy-900">
              <div className="aspect-[4/3.4] w-full overflow-hidden sm:aspect-[4/3]">
                <img
                  src={img.pressCloseup}
                  alt="Operator applying orange ink to a printing press roller on the plastic printing production floor"
                  className="u-kenburns h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  width={1400}
                  height={1000}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="u-label text-flame-400">Production floor</p>
                  <p className="mt-1.5 font-display text-lg font-extrabold uppercase tracking-[-0.01em]">
                    Press line 02 · 6-colour run
                  </p>
                </div>
                <span className="font-mono text-[0.68rem] text-navy-300">
                  {new Date().getFullYear()}
                </span>
              </figcaption>
            </figure>

            {/* job ticket card */}
            <div className="u-float absolute -bottom-10 -left-4 w-[16.5rem] border border-navy-900/10 bg-white p-4 text-navy-900 shadow-[0_28px_60px_-24px_rgba(0,0,0,.75)] sm:-left-10 lg:-bottom-14 lg:-left-16">
              <div className="flex items-center justify-between border-b border-navy-900/10 pb-2.5">
                <span className="u-label text-flame-600">Job ticket</span>
                <span className="font-mono text-[0.62rem] text-muted">#PC-0042</span>
              </div>
              <dl className="mt-2.5 space-y-1.5 font-mono text-[0.7rem]">
                {[
                  ["Substrate", "LDPE 0.08 mm"],
                  ["Ink", "Food-grade, 4 spot"],
                  ["Quantity", "25.000 pcs"],
                  ["Lead time", "10 working days"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-2">
                    <dt className="text-muted">{k}</dt>
                    <dd className="font-semibold text-navy-900">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-3 flex items-center gap-1.5 border-t border-navy-900/10 pt-2.5">
                {["#f2621c", "#0a1a2f", "#f5a623", "#ffffff"].map((c) => (
                  <span
                    key={c}
                    className="h-3.5 w-3.5 rounded-full ring-1 ring-navy-900/15"
                    style={{ background: c }}
                  />
                ))}
                <span className="ml-auto font-mono text-[0.6rem] text-muted">Colour set</span>
              </div>
            </div>

            {/* secondary image */}
            <figure className="absolute -right-3 top-1/2 hidden w-40 -translate-y-1/2 overflow-hidden border-4 border-navy-950 shadow-[0_20px_50px_-20px_rgba(0,0,0,.8)] lg:block xl:-right-8 xl:w-52">
              <img
                src={img.squeegee}
                alt="Screen printing squeegee pushing ink through a mesh screen"
                className="h-36 w-full object-cover transition-transform duration-700 hover:scale-110 xl:h-44"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <div className="mt-20 flex items-center gap-3 lg:mt-24 lg:hidden">
            <Link to="/products" className="u-label text-flame-300">
              View product catalogue
            </Link>
            <span className="h-px flex-1 bg-white/15" />
          </div>
        </div>
      </div>

      {/* capability marquee */}
      <div className="relative border-y border-white/10 bg-navy-900/80">
        <div className="group flex overflow-hidden">
          <div className="u-marquee-track fast">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span key={i} className="flex shrink-0 items-center gap-5 py-4 pr-5">
                <span className="font-display text-[0.95rem] font-extrabold uppercase tracking-[-0.01em] text-white/85">
                  {m}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-flame-500" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
