import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { img, waLink, DEFAULT_WA_MESSAGE } from "../../config/site";
import { advantages, faqs, segments, stats, testimonials } from "../../data/content";
import { Link } from "../../lib/router";
import { prefersReducedMotion } from "../../lib/hooks";
import { Icon } from "../Icons";
import { Btn, DarkBackdrop, Eyebrow, Marquee, Reveal, SectionHead, SpecTable, Stat } from "../ui";

/* =============================================================
   PAGE HEADER — inner pages
   ============================================================= */
export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  crumb,
  facts,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image: string;
  crumb: string;
  facts?: { k: string; v: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-28 text-white lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(115%_85%_at_85%_0%,#16345a_0%,#0a1a2f_52%,#050f1d_100%)]" />
      <div className="u-grid-dark absolute inset-0 opacity-70" />
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-flame-600/16 blur-[120px]" />
      <div className="u-noise" />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-14 sm:px-6 lg:pb-20 xl:px-10">
        <nav className="flex items-center gap-2 font-mono text-[0.7rem] text-navy-300" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-flame-400">
            Home
          </Link>
          <span className="text-flame-500">/</span>
          <span className="text-white">{crumb}</span>
        </nav>

        <div className="mt-7 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="u-display-wide mt-5 text-[clamp(2.3rem,6vw,4.4rem)]">{title}</h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-navy-200">{lead}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href={waLink(DEFAULT_WA_MESSAGE)} external icon="whatsapp">
                  Chat on WhatsApp
                </Btn>
                <Btn to="/contact" variant="light" icon="arrow">
                  Request a quotation
                </Btn>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} variant="right" className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden border border-white/12">
                <img
                  src={image}
                  alt={crumb}
                  className="u-kenburns h-56 w-full object-cover sm:h-72"
                  loading="eager"
                  decoding="async"
                />
              </div>
              {facts && (
                <div className="mt-4 border border-white/12 bg-white/5 p-4 backdrop-blur-sm">
                  <SpecTable rows={facts.map((f) => ({ label: f.k, value: f.v }))} tone="light" />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
      <div className="h-1.5 w-full bg-gradient-to-r from-flame-600 via-flame-400 to-navy-600" />
    </section>
  );
}

/* =============================================================
   STATS BAND
   ============================================================= */
export function StatsBand({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <section className={cn("relative overflow-hidden py-16", tone === "dark" ? "bg-navy-950" : "bg-mist")}>
      {tone === "dark" && <DarkBackdrop />}
      {tone === "light" && <div className="u-dots pointer-events-none absolute inset-0 opacity-60" />}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} variant="scale">
              <Stat {...s} tone={tone === "dark" ? "light" : "dark"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   WHY CHOOSE US — bento layout
   ============================================================= */
export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="u-grid-light pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
        <SectionHead
          eyebrow="Why choose us"
          title={
            <>
              Seven reasons factories and <span className="text-flame-500">brand owners</span> stay with us
            </>
          }
          lead="We are not the cheapest quote in the market and we do not pretend to be. What we promise is repeatable quality, clear communication and delivery dates that hold — order after order."
          action={
            <Btn to="/about" variant="outline" icon="arrow">
              More about the company
            </Btn>
          }
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {advantages.map((a, i) => {
            // 6-column bento: 2+2+2 / 3+3 / 2+4
            const span = ["md:col-span-3 lg:col-span-2", "md:col-span-3 lg:col-span-2", "md:col-span-3 lg:col-span-2", "md:col-span-3 lg:col-span-3", "md:col-span-3 lg:col-span-3", "md:col-span-3 lg:col-span-2", "md:col-span-6 lg:col-span-4"][i];
            return (
              <Reveal key={a.title} delay={i * 70} className={span}>
                <article className="group relative flex h-full flex-col overflow-hidden border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-flame-500/60 hover:shadow-[0_28px_60px_-32px_rgba(10,26,47,.5)]">
                  <span className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-flame-500/10 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center bg-navy-900 text-flame-400 transition-colors duration-500 group-hover:bg-flame-500 group-hover:text-white">
                      <Icon name={a.icon} className="h-6 w-6" />
                    </span>
                    <span className="u-label text-navy-900/20">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.28rem] font-extrabold uppercase tracking-[-0.015em] text-navy-900">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.93rem] leading-relaxed text-muted">{a.text}</p>
                  {a.metric && (
                    <p className="mt-5 inline-flex w-fit items-center gap-2 border border-flame-500/30 bg-flame-50 px-3 py-1.5 font-mono text-[0.68rem] text-flame-700">
                      <span className="h-1.5 w-1.5 rotate-45 bg-flame-500" />
                      {a.metric}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border border-navy-900/10 bg-mist px-7 py-6">
            <span className="u-label text-navy-700">We serve</span>
            {segments.map((s) => (
              <span key={s} className="font-mono text-[0.76rem] text-muted transition-colors hover:text-flame-600">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =============================================================
   PRODUCTION SHOWCASE — sticky two-column
   ============================================================= */
export function ProductionShowcase() {
  return (
    <section id="production" className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
      <DarkBackdrop />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 xl:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHead
              tone="light"
              eyebrow="Inside the workshop"
              title={
                <>
                  A production floor built around <span className="text-flame-500">plastic</span>
                </>
              }
              lead="Semi-automatic screen printing lines, flexo presses for film, laminating and cutting units, plus a dedicated QC bench. Everything under one roof in East Jakarta — so nothing gets lost between vendors."
            />
            <div className="mt-9 space-y-4">
              {[
                { k: "Facility", v: "1.800 m² workshop + warehouse" },
                { k: "Equipment", v: "Screen lines · flexo · laminator · cutter" },
                { k: "Team", v: "38 operators, designers & QC staff" },
                { k: "Shifts", v: "2 shifts, Mon – Sat" },
              ].map((row, i) => (
                <Reveal key={row.k} delay={i * 80}>
                  <div className="group flex items-center justify-between gap-6 border-b border-white/12 py-3 transition-colors hover:border-flame-500/60">
                    <span className="u-label text-navy-300">{row.k}</span>
                    <span className="text-right font-mono text-[0.82rem] text-white transition-transform duration-300 group-hover:-translate-x-1">
                      {row.v}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-9">
              <Btn to="/process" variant="primary" icon="arrow">
                See the production process
              </Btn>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {[
            { src: img.pressRollers, alt: "Printing press rollers applying ink to plastic film", label: "Press rollers", span: "sm:col-span-2" },
            { src: img.screenPrinter, alt: "Operator running a manual screen printing machine", label: "Screen station" },
            { src: img.qcInspect, alt: "Quality control inspecting freshly printed sheets", label: "QC bench" },
            { src: img.packingLine, alt: "Finished packaging moving along the packing line", label: "Packing line" },
            { src: img.team, alt: "Production team in uniform on the factory floor", label: "Our team" },
          ].map((p, i) => (
            <Reveal key={p.label} delay={i * 90} className={p.span} variant="scale">
              <figure className={cn("group relative overflow-hidden border border-white/12", p.span ? "aspect-[16/8]" : "aspect-[4/3]")}>
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                  <span className="font-display text-sm font-extrabold uppercase tracking-wide">{p.label}</span>
                  <span className="flex h-7 w-7 items-center justify-center border border-white/25 text-white transition-all duration-300 group-hover:border-flame-500 group-hover:bg-flame-500">
                    <Icon name="arrowUp" className="h-3.5 w-3.5" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   TESTIMONIALS — auto-advancing slider
   ============================================================= */
export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const active = testimonials[i];

  return (
    <section
      className="relative overflow-hidden bg-mist py-20 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="u-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <Eyebrow>Client voices</Eyebrow>
            <h2 className="u-display mt-4 text-[2.1rem] leading-[0.95] text-navy-900 sm:text-[2.6rem]">
              Repeat orders are our best review
            </h2>
            <div className="mt-6 flex items-center gap-3">
              {testimonials.map((t, idx) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={cn(
                    "h-1.5 transition-all duration-500",
                    idx === i ? "w-10 bg-flame-500" : "w-4 bg-navy-900/20 hover:bg-navy-900/40"
                  )}
                />
              ))}
              <span className="ml-2 font-mono text-[0.7rem] text-muted">
                {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <figure className="relative border border-navy-900/10 bg-white p-8 shadow-[0_30px_70px_-40px_rgba(10,26,47,.45)] sm:p-11">
              <Icon name="quote" className="h-9 w-9 text-flame-500/25" />
              <blockquote
                key={i}
                className="mt-5 font-display text-[1.25rem] font-semibold leading-[1.45] tracking-[-0.015em] text-navy-900 sm:text-[1.6rem]"
                style={{ animation: prefersReducedMotion() ? undefined : "fadeSlide .6s cubic-bezier(.16,1,.3,1)" }}
              >
                “{active.quote}”
              </blockquote>
              <figcaption className="mt-7 flex flex-wrap items-center gap-4 border-t border-navy-900/10 pt-6">
                <span className="flex h-11 w-11 items-center justify-center bg-navy-900 font-display text-sm font-black text-flame-400">
                  {active.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-sm font-extrabold uppercase tracking-wide text-navy-900">{active.name}</p>
                  <p className="font-mono text-[0.72rem] text-muted">
                    {active.role} · {active.place}
                  </p>
                </div>
                <span className="ml-auto flex gap-1 text-flame-500" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9 2.9-6Z" />
                    </svg>
                  ))}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeSlide{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}

/* =============================================================
   FAQ — accordion
   ============================================================= */
export function Faq({ items = faqs }: { items?: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-navy-900/10 border-y border-navy-900/10">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start gap-5 py-6 text-left"
            >
              <span className="mt-1 font-mono text-[0.7rem] text-flame-600">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={cn(
                  "flex-1 font-display text-[1.05rem] font-extrabold uppercase tracking-[-0.01em] transition-colors sm:text-[1.2rem]",
                  isOpen ? "text-flame-600" : "text-navy-900 group-hover:text-flame-600"
                )}
              >
                {f.q}
              </span>
              <span
                className={cn(
                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-400",
                  isOpen ? "rotate-135 border-flame-500 bg-flame-500 text-white" : "border-navy-900/20 text-navy-800 group-hover:border-flame-500"
                )}
              >
                <Icon name="plus" className="h-4 w-4" strokeWidth={2} />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 pl-10 pr-12 text-[0.95rem] leading-relaxed text-muted">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* =============================================================
   CTA BAND
   ============================================================= */
export function CtaBand({
  title = "Ready to print your brand on plastic?",
  text = "Send us your artwork, your target quantity and your deadline. You will get a written quotation, material recommendation and production schedule within one working day.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-flame-500 py-16 text-white lg:py-20">
      <div className="u-halftone pointer-events-none absolute inset-0 opacity-[0.14]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[3rem] border-white/10" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full border-2 border-white/15" />
      <div className="u-noise" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="u-display-wide text-[clamp(1.9rem,4.4vw,3.2rem)]">{title}</h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-white/85">{text}</p>
            </Reveal>
          </div>
          <Reveal delay={160} className="lg:col-span-4">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-navy-950 px-7 py-4 font-display text-[0.82rem] font-bold uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-900"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-[#25D366]" /> WhatsApp us now
              </a>
              <Btn to="/contact" variant="light" size="md" icon="arrow">
                Send inquiry
              </Btn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   SEGMENT MARQUEE (light)
   ============================================================= */
export function SegmentMarquee() {
  return <Marquee items={segments} tone="dark" speed="fast" reverse />;
}
