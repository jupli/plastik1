import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { site, waLink } from "../../config/site";
import { processSteps, services, type Service } from "../../data/content";
import { useRoute } from "../../lib/router";
import { Icon } from "../Icons";
import { Btn, Bullets, Eyebrow, Reveal, SectionHead, SpecTable } from "../ui";

/* =============================================================
   SERVICES — sticky preview + accordion rows
   ============================================================= */
export function ServicesAccordion({ items = services }: { items?: Service[] }) {
  const route = useRoute();
  const [open, setOpen] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? open;

  // Deep links: /services#slug opens and reveals the matching service
  useEffect(() => {
    if (!route.anchor) return;
    const i = items.findIndex((s) => s.slug === route.anchor);
    if (i >= 0) {
      setOpen(i);
      setHover(i);
    }
  }, [route.anchor, items]);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* sticky visual */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-32">
          <div className="relative aspect-[4/3.3] overflow-hidden border border-navy-900/10 bg-navy-950">
            {items.map((s, i) => (
              <img
                key={s.slug}
                src={s.image}
                alt={s.title}
                loading="lazy"
                decoding="async"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                  shown === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                )}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="u-label text-flame-400">Service {items[shown]?.index}</span>
              <p className="mt-2 font-display text-[1.4rem] font-extrabold uppercase leading-tight tracking-[-0.02em] text-white">
                {items[shown]?.title}
              </p>
            </div>
            <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-white/25 bg-navy-950/60 text-flame-400 backdrop-blur-sm">
              <Icon name={items[shown]?.icon ?? "layers"} className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-5 border border-navy-900/10 bg-mist p-5">
            <SpecTable rows={items[shown]?.specs ?? []} />
          </div>
        </div>
      </div>

      {/* accordion */}
      <div className="lg:col-span-7">
        <div className="border-t border-navy-900/12">
          {items.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.slug}
                id={s.slug}
                className="scroll-mt-32 border-b border-navy-900/12"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start gap-5 py-6 text-left"
                >
                  <span
                    className={cn(
                      "mt-1 font-mono text-[0.72rem] transition-colors",
                      isOpen ? "text-flame-600" : "text-muted/70 group-hover:text-flame-500"
                    )}
                  >
                    {s.index}
                  </span>
                  <span className="flex-1">
                    <span
                      className={cn(
                        "block font-display text-[1.2rem] font-extrabold uppercase leading-tight tracking-[-0.02em] transition-colors sm:text-[1.55rem]",
                        isOpen ? "text-flame-600" : "text-navy-900 group-hover:text-flame-600"
                      )}
                    >
                      {s.title}
                    </span>
                    <span className="mt-2 block text-[0.9rem] leading-relaxed text-muted">{s.short}</span>
                  </span>
                  <span
                    className={cn(
                      "mt-1 flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-400",
                      isOpen
                        ? "rotate-45 border-flame-500 bg-flame-500 text-white"
                        : "border-navy-900/18 text-navy-800 group-hover:border-flame-500 group-hover:text-flame-600"
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
                    <div className="pb-8 pl-0 sm:pl-10">
                      <p className="text-[0.95rem] leading-relaxed text-navy-800">{s.description}</p>
                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <Bullets items={s.bullets} />
                        <div className="border border-navy-900/10 bg-white p-4 sm:hidden lg:block">
                          <SpecTable rows={s.specs} />
                        </div>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Btn
                          href={waLink(
                            `Halo ${site.name}, saya tertarik dengan layanan ${s.title}. Bisa minta penawaran dan contoh material?`
                          )}
                          external
                          size="sm"
                          icon="whatsapp"
                        >
                          Ask about this service
                        </Btn>
                        <Btn to="/contact" variant="outline" size="sm" icon="arrow">
                          Request quotation
                        </Btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   SERVICE TILES — home page highlights
   ============================================================= */
export function ServiceTiles({ limit = 6 }: { limit?: number }) {
  const items = services.slice(0, limit);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
          <a
            href={`#/services#${s.slug}`}
            className="group relative flex h-full flex-col justify-end overflow-hidden border border-navy-900/10 bg-navy-950 p-6 text-white"
            style={{ minHeight: "20rem" }}
          >
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-[1.1s] ease-out group-hover:scale-110 group-hover:opacity-70"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10" />
            <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-flame-500 transition-transform duration-500 group-hover:scale-x-100" />

            <span className="relative flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center border border-white/25 bg-navy-950/50 text-flame-400 backdrop-blur-sm transition-colors duration-500 group-hover:border-flame-500 group-hover:bg-flame-500 group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <span className="font-mono text-[0.7rem] text-navy-300">{s.index}</span>
            </span>

            <span className="relative mt-auto block pt-16">
              <span className="block font-display text-[1.2rem] font-extrabold uppercase leading-tight tracking-[-0.02em]">
                {s.title}
              </span>
              <span className="mt-2.5 block max-h-0 overflow-hidden text-[0.87rem] leading-relaxed text-navy-200 transition-all duration-500 group-hover:max-h-28">
                {s.short}
              </span>
              <span className="mt-4 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-flame-400">
                Explore
                <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

/* =============================================================
   PROCESS — vertical rail with scroll-driven progress
   ============================================================= */
function useSectionProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const start = window.innerHeight * 0.85;
        const total = r.height + start - window.innerHeight * 0.25;
        setP(Math.max(0, Math.min(1, (start - r.top) / total)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);
  return { ref, progress: p };
}

export function ProcessRail() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
      {/* rail */}
      <div className="absolute left-[1.4rem] top-2 hidden h-[calc(100%-2rem)] w-px bg-navy-900/12 sm:block lg:left-1/2 lg:-translate-x-1/2">
        <div
          className="w-full bg-gradient-to-b from-flame-500 to-flame-600 transition-[height] duration-200"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <ol className="space-y-6 lg:space-y-16">
        {processSteps.map((s, i) => {
          const right = i % 2 === 1;
          return (
            <Reveal
              as="li"
              key={s.no}
              id={`step-${s.no}`}
              delay={40}
              variant={right ? "right" : "left"}
              className="relative scroll-mt-32"
            >
              <div className="grid gap-5 lg:grid-cols-2 lg:gap-12">
                {/* marker */}
                <span
                  className="absolute left-0 top-1 hidden h-11 w-11 items-center justify-center rounded-full border-2 border-flame-500 bg-white font-display text-[0.8rem] font-black text-flame-600 sm:flex lg:left-1/2 lg:-translate-x-1/2"
                  aria-hidden="true"
                >
                  {s.no}
                </span>

                <div className={cn("lg:row-start-1", right ? "lg:col-start-2" : "lg:col-start-1")}>
                  <article className="group border border-navy-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-flame-500/50 hover:shadow-[0_28px_60px_-34px_rgba(10,26,47,.5)] sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center bg-navy-900 font-display text-[0.72rem] font-black text-flame-400 sm:hidden">
                        {s.no}
                      </span>
                      <span className="u-label border border-flame-500/30 bg-flame-50 px-2.5 py-1 text-flame-700">
                        {s.duration}
                      </span>
                      <span className="ml-auto h-px flex-1 bg-navy-900/10 transition-colors duration-500 group-hover:bg-flame-500/40" />
                    </div>
                    <h3 className="u-display mt-4 text-[1.45rem] text-navy-900 sm:text-[1.8rem]">{s.title}</h3>
                    <p className="mt-3 text-[0.94rem] leading-relaxed text-muted">{s.summary}</p>
                    <ul className="mt-5 space-y-2">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 font-mono text-[0.76rem] text-navy-800">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-flame-500" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>

                {s.image && (
                  <div className={cn("lg:row-start-1", right ? "lg:col-start-1" : "lg:col-start-2")}>
                    <figure className="group relative h-full min-h-[13rem] overflow-hidden border border-navy-900/10 bg-navy-950">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover opacity-90 transition-transform duration-[1.3s] ease-out group-hover:scale-108"
                      />
                      <span className="absolute inset-0 bg-gradient-to-tr from-navy-950/70 to-transparent" />
                      <figcaption className="u-label absolute bottom-4 left-4 text-white/85">{s.title}</figcaption>
                    </figure>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}

/* =============================================================
   PROCESS HEADER BLOCK (eyebrow + lead) used on the process page
   ============================================================= */
export function ProcessIntro() {
  return (
    <SectionHead
      eyebrow="Production workflow"
      title={
        <>
          Six controlled steps, from first chat to <span className="text-flame-500">sealed cartons</span>
        </>
      }
      lead="No black box. You always know which stage your order is at, who is handling it and when it ships. Here is exactly how a job moves through our floor."
      action={
        <Btn href={waLink(`Halo ${site.name}, saya ingin konsultasi kebutuhan cetak plastik.`)} external icon="whatsapp">
          Start a consultation
        </Btn>
      }
    />
  );
}

export function ProcessFacts() {
  const facts = [
    { icon: "clock", k: "Quotation", v: "Within 1 × 24 hours" },
    { icon: "pen", k: "Artwork proof", v: "1 – 2 working days" },
    { icon: "machine", k: "Production", v: "5 – 14 working days" },
    { icon: "truck", k: "Delivery", v: "Jabodetabek own fleet" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((f, i) => (
        <Reveal key={f.k} delay={i * 80}>
          <div className="group flex items-center gap-4 border border-navy-900/10 bg-white p-5 transition-all duration-400 hover:-translate-y-1 hover:border-flame-500/50">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-mist text-flame-600 transition-colors duration-400 group-hover:bg-flame-500 group-hover:text-white">
              <Icon name={f.icon} className="h-5 w-5" />
            </span>
            <div>
              <p className="u-label text-muted">{f.k}</p>
              <p className="mt-1 font-display text-[0.95rem] font-extrabold uppercase tracking-[-0.01em] text-navy-900">
                {f.v}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ServicesEyebrow() {
  return <Eyebrow>What we print</Eyebrow>;
}
