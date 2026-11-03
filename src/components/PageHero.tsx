import { type PageId, NAV_ITEMS } from "@/data/content";

interface PageHeroProps {
  page: PageId;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

/** Dark banner used at the top of every inner page. */
export default function PageHero({ page, eyebrow, title, description, image }: PageHeroProps) {
  const label = NAV_ITEMS.find((n) => n.id === page)?.label ?? title;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-950/90 to-navy-900/70" />
      <div className="grid-pattern absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/55">
          <a href="#/" className="transition-colors hover:text-white">
            Home
          </a>
          <span aria-hidden="true">/</span>
          <span className="text-white/90" aria-current="page">
            {label}
          </span>
        </nav>
        <p className="animate-fade-up eyebrow">{eyebrow}</p>
        <h1 className="animate-fade-up mt-3 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: "0.08s" }}>
          {title}
        </h1>
        <p className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg" style={{ animationDelay: "0.16s" }}>
          {description}
        </p>
      </div>
    </section>
  );
}
