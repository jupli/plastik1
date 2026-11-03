import { useCallback, useState } from "react";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IMG, PORTFOLIO, PORTFOLIO_FILTERS } from "@/data/content";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);
  const lightboxItems = items.map((p) => ({ title: p.title, category: p.category, image: p.image }));

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const changeLightbox = useCallback((i: number) => setActiveIndex(i), []);

  return (
    <>
      <PageHero
        page="portfolio"
        eyebrow="Our Portfolio"
        title="Examples of Our Printing Work"
        description="Browse finished printing projects across shopping bags, food packaging, pouches, branded packaging and promotional items."
        image={IMG.screenPrint}
      />

      <section className="section bg-white pt-16">
        <div className="container-x">
          <div role="group" aria-label="Filter portfolio by category" className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {PORTFOLIO_FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setFilter(f);
                    setActiveIndex(null);
                  }}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "border-navy-900 bg-navy-900 text-white shadow-lg shadow-navy-900/20"
                      : "border-slate-200 text-navy-800 hover:border-accent-500 hover:text-accent-500"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 80} className="mb-6 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View ${item.title}`}
                  className="zoom-wrap group relative block w-full overflow-hidden rounded-2xl text-left shadow-md shadow-navy-900/5 transition-shadow duration-300 hover:shadow-xl"
                >
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full object-cover" />
                  <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/90 via-navy-950/15 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-400">
                      {item.category}
                    </span>
                    <span className="mt-1 font-bold text-white">{item.title}</span>
                  </span>
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy-900 opacity-0 shadow transition-all duration-300 group-hover:opacity-100">
                    <Icon name="search" className="h-4 w-4" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          {items.length === 0 && <p className="mt-12 text-center text-slate-500">No projects in this category yet.</p>}

          <p className="mt-8 text-center text-xs text-slate-400">
            Showcase images are illustrative examples of our printing work. Click any image to view it larger.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want something like this for your brand?"
        text="Send us your logo or design and we will suggest the right plastic material, print method and quantity for your project."
      />

      <Lightbox items={lightboxItems} index={activeIndex} onClose={closeLightbox} onChange={changeLightbox} />
    </>
  );
}
