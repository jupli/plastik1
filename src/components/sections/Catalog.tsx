import { useEffect, useMemo, useState } from "react";
import { cn } from "../../utils/cn";
import { site, waLink } from "../../config/site";
import {
  portfolioCategories,
  products,
  productCategories,
  projects,
  type Product,
  type Project,
} from "../../data/content";
import { useBodyLock } from "../../lib/hooks";
import { Icon } from "../Icons";
import { Btn, Chip, Reveal } from "../ui";

/* =============================================================
   Shared modal shell
   ============================================================= */
function Modal({
  open,
  onClose,
  children,
  label,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  label: string;
}) {
  useBodyLock(open);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] flex items-center justify-center p-4 transition-[visibility] duration-400 sm:p-6",
        open ? "visible" : "invisible pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity duration-400",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-white/12 bg-white shadow-[0_40px_100px_-30px_rgba(0,0,0,.8)] transition-all duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)]",
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.97] opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}

/* =============================================================
   PRODUCT CARD + GRID (interactive catalogue)
   ============================================================= */

function productMessage(p: Product) {
  return `Halo ${site.name}, saya ingin menanyakan produk: ${p.name} (${p.category}). Mohon informasi harga, MOQ dan lead time. Terima kasih.`;
}

export function ProductCard({
  product,
  onOpen,
  index,
  compact = false,
}: {
  product: Product;
  onOpen?: (p: Product) => void;
  index?: number;
  compact?: boolean;
}) {
  return (
    <Reveal delay={((index ?? 0) % 3) * 90} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden border border-navy-900/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-flame-500/50 hover:shadow-[0_30px_60px_-32px_rgba(10,26,47,.5)]">
        <button
          type="button"
          onClick={() => onOpen?.(product)}
          className="relative block w-full overflow-hidden text-left"
          aria-label={`View details for ${product.name}`}
        >
          <span className={cn("block w-full overflow-hidden bg-mist", compact ? "aspect-[4/3]" : "aspect-[4/3.6]")}>
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.09]"
            />
          </span>
          <span className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="u-label absolute bottom-3 left-3 flex translate-y-3 items-center gap-2 bg-white/95 px-3 py-1.5 text-navy-900 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Icon name="search" className="h-3.5 w-3.5 text-flame-600" /> Quick view
          </span>
        </button>

        {product.badge && (
          <span className="absolute right-3 top-3 bg-flame-500 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white">
            {product.badge}
          </span>
        )}
        <span className="u-label absolute left-3 top-3 bg-navy-950/80 px-2.5 py-1 text-white backdrop-blur-sm">
          {product.category}
        </span>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-[1.05rem] font-extrabold uppercase leading-tight tracking-[-0.015em] text-navy-900 transition-colors group-hover:text-flame-600">
            {product.name}
          </h3>
          <p className="mt-2.5 flex-1 text-[0.88rem] leading-relaxed text-muted">{product.blurb}</p>

          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-navy-900/10 pt-4">
            {product.specs.slice(0, 4).map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted/80">{s.label}</dt>
                <dd className="mt-0.5 font-mono text-[0.72rem] font-medium text-navy-900">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={waLink(productMessage(product))}
              target="_blank"
              rel="noopener noreferrer"
              className="group/wa inline-flex flex-1 items-center justify-center gap-2 bg-navy-900 px-4 py-2.5 font-display text-[0.7rem] font-bold uppercase text-white transition-colors hover:bg-[#25D366]"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> Inquire
            </a>
            <button
              type="button"
              onClick={() => onOpen?.(product)}
              className="inline-flex items-center justify-center border border-navy-900/15 px-4 py-2.5 font-display text-[0.7rem] font-bold uppercase text-navy-800 transition-colors hover:border-flame-500 hover:text-flame-600"
            >
              Specs
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  return (
    <Modal open={!!product} onClose={onClose} label={product?.name ?? "Product"}>
      {product && (
        <div className="grid md:grid-cols-2">
          <div className="relative overflow-hidden bg-mist">
            <img src={product.image} alt={product.name} className="h-full max-h-[32rem] w-full object-cover" />
            <span className="u-label absolute left-4 top-4 bg-navy-950/85 px-3 py-1.5 text-white">{product.category}</span>
          </div>
          <div className="flex flex-col p-7 sm:p-9">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-navy-900/15 bg-white text-navy-800 transition-colors hover:border-flame-500 hover:text-flame-600 md:relative md:right-auto md:top-auto md:ml-auto"
              aria-label="Close"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
            <h3 className="u-display mt-4 text-[1.7rem] text-navy-900">{product.name}</h3>
            <p className="mt-3 text-[0.94rem] leading-relaxed text-muted">{product.blurb}</p>

            <dl className="mt-6 divide-y divide-navy-900/10 border-y border-navy-900/10">
              {product.specs.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="u-label text-muted">{s.label}</dt>
                  <dd className="font-mono text-[0.78rem] text-navy-900">{s.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-5 space-y-2 text-[0.86rem] text-muted">
              {[
                "Free artwork check & digital proof",
                "Material samples available before bulk",
                "Price depends on quantity, colours and size",
              ].map((l) => (
                <li key={l} className="flex gap-2.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-flame-500" strokeWidth={2.4} />
                  {l}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-3 pt-7">
              <a
                href={waLink(productMessage(product))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] px-5 py-3 font-display text-[0.75rem] font-bold uppercase text-white transition-colors hover:bg-[#1fb457]"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> Inquire on WhatsApp
              </a>
              <Btn onClick={onClose} variant="outline" size="md">
                Keep browsing
              </Btn>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

export function ProductGrid({
  limit,
  showFilters = true,
  compact,
}: {
  limit?: number;
  showFilters?: boolean;
  compact?: boolean;
}) {
  const [cat, setCat] = useState<string>(productCategories[0]);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Product | null>(null);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter(
      (p) =>
        (cat === productCategories[0] || p.category === cat) &&
        (!term || p.name.toLowerCase().includes(term) || p.blurb.toLowerCase().includes(term) || p.category.toLowerCase().includes(term))
    );
  }, [cat, q]);

  const shown = limit ? list.slice(0, limit) : list;

  return (
    <>
      {showFilters && (
        <Reveal className="mb-9">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="u-no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {productCategories.map((c) => (
                <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
                  {c}
                </Chip>
              ))}
            </div>
            <label className="group relative flex w-full items-center lg:w-72">
              <Icon name="search" className="pointer-events-none absolute left-3.5 h-4 w-4 text-muted" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products…"
                className="w-full border border-navy-900/15 bg-white py-3 pl-10 pr-3 font-mono text-[0.78rem] text-navy-900 placeholder:text-muted/70 focus:border-flame-500 focus:outline-none"
              />
            </label>
          </div>
          <p className="mt-4 font-mono text-[0.72rem] text-muted">
            Showing {shown.length} of {products.length} products
            {cat !== productCategories[0] && <> · category: {cat}</>}
            {q && <> · search: “{q}”</>}
          </p>
        </Reveal>
      )}

      {shown.length === 0 ? (
        <div className="border border-dashed border-navy-900/20 bg-mist p-12 text-center">
          <p className="font-display text-lg font-extrabold uppercase text-navy-900">No product matches that filter</p>
          <p className="mt-2 text-sm text-muted">Try another keyword, or ask us directly — we print many items not listed here.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Btn variant="outline" size="sm" onClick={() => { setQ(""); setCat(productCategories[0]); }}>
              Reset filters
            </Btn>
            <Btn href={waLink(`Halo ${site.name}, saya mencari produk cetak plastik khusus. Bisa dibantu?`)} external size="sm" icon="whatsapp">
              Ask our team
            </Btn>
          </div>
        </div>
      ) : (
        <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", compact ? "xl:grid-cols-4" : "xl:grid-cols-3")}>
          {shown.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} onOpen={setOpen} compact={compact} />
          ))}
        </div>
      )}

      <ProductModal product={open} onClose={() => setOpen(null)} />
    </>
  );
}

/* =============================================================
   PORTFOLIO GRID + LIGHTBOX
   ============================================================= */
export function PortfolioGrid({ limit, showFilters = true }: { limit?: number; showFilters?: boolean }) {
  const [cat, setCat] = useState<string>(portfolioCategories[0]);
  const [idx, setIdx] = useState<number | null>(null);

  const list = useMemo(
    () => projects.filter((p) => cat === portfolioCategories[0] || p.category === cat),
    [cat]
  );
  const shown = limit ? list.slice(0, limit) : list;
  const active = idx !== null ? shown[idx] : null;

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((v) => (v === null ? v : (v + 1) % shown.length));
      if (e.key === "ArrowLeft") setIdx((v) => (v === null ? v : (v - 1 + shown.length) % shown.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, shown.length]);

  return (
    <>
      {showFilters && (
        <Reveal className="mb-9">
          <div className="u-no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {portfolioCategories.map((c) => (
              <Chip
                key={c}
                active={cat === c}
                onClick={() => {
                  setCat(c);
                  setIdx(null);
                }}
              >
                {c}
              </Chip>
            ))}
          </div>
        </Reveal>
      )}

      <div className="grid auto-rows-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal
            key={p.id}
            delay={(i % 3) * 80}
            className={cn(p.tall && !limit ? "sm:row-span-2" : "")}
            variant="scale"
          >
            <button
              type="button"
              onClick={() => setIdx(i)}
              className="group relative block h-full w-full overflow-hidden border border-navy-900/10 bg-navy-950 text-left"
              aria-label={`Open project: ${p.title}`}
            >
              <span className={cn("block h-full w-full overflow-hidden", p.tall && !limit ? "min-h-[30rem]" : "min-h-[15rem]")}>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-92 transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-100"
                />
              </span>
              <span className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
              <span className="absolute inset-x-0 bottom-0 block p-5">
                <span className="u-label flex items-center gap-2 text-flame-400">
                  {p.category} <span className="text-navy-400">· {p.year}</span>
                </span>
                <span className="mt-2 block font-display text-[1.05rem] font-extrabold uppercase leading-tight tracking-[-0.015em] text-white">
                  {p.title}
                </span>
                <span className="mt-1.5 block max-h-0 overflow-hidden font-mono text-[0.72rem] text-navy-200 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {p.client}
                  <br />
                  {p.scope}
                </span>
              </span>
              <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center border border-white/30 bg-navy-950/50 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <Icon name="arrowUp" className="h-4 w-4" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setIdx(null)} label={active?.title ?? "Project"}>
        {active && (
          <div className="relative">
            <div className="relative max-h-[62vh] overflow-hidden bg-navy-950">
              <img src={active.image} alt={active.title} className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-6 border-t border-navy-900/10 bg-white p-6 sm:p-8">
              <div className="max-w-xl">
                <p className="u-label text-flame-600">
                  {active.category} · {active.year}
                </p>
                <h3 className="u-display mt-3 text-[1.6rem] text-navy-900">{active.title}</h3>
                <p className="mt-2 font-mono text-[0.78rem] text-muted">{active.client}</p>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">{active.scope}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIdx((v) => (v === null ? v : (v - 1 + shown.length) % shown.length))}
                  className="flex h-11 w-11 items-center justify-center border border-navy-900/15 text-navy-800 transition-colors hover:border-flame-500 hover:text-flame-600"
                  aria-label="Previous project"
                >
                  <Icon name="arrow" className="h-4 w-4 rotate-180" />
                </button>
                <span className="font-mono text-[0.75rem] text-muted">
                  {String((idx ?? 0) + 1).padStart(2, "0")} / {String(shown.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => setIdx((v) => (v === null ? v : (v + 1) % shown.length))}
                  className="flex h-11 w-11 items-center justify-center border border-navy-900/15 text-navy-800 transition-colors hover:border-flame-500 hover:text-flame-600"
                  aria-label="Next project"
                >
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
                <Btn
                  href={waLink(`Halo ${site.name}, saya melihat project "${active.title}" di portfolio. Saya ingin diskusi kebutuhan serupa.`)}
                  external
                  size="sm"
                  icon="whatsapp"
                  className="ml-2"
                >
                  Similar project
                </Btn>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIdx(null)}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center border border-white/25 bg-navy-950/60 text-white backdrop-blur-sm transition-colors hover:bg-flame-500"
              aria-label="Close gallery"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>
        )}
      </Modal>
    </>
  );
}

export type { Project };
