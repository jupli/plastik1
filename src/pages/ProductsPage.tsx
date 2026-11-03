import { useEffect, useState } from "react";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { IMG, PRODUCTS, PRODUCT_FILTERS, type Product } from "@/data/content";
import { waProductInquiry } from "@/lib/whatsapp";

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Product | null>(null);

  const items = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        page="products"
        eyebrow="Product Catalog"
        title="Printed Plastic Products for Every Business"
        description="Explore our range of custom printed plastic bags, packaging, pouches and promotional products. Every item can be tailored to your brand."
        image={IMG.shoppingBags}
      />

      <section className="section bg-white pt-16">
        <div className="container-x">
          <div role="group" aria-label="Filter products by category" className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {PRODUCT_FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
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

          <p className="mt-8 text-center text-sm text-slate-500">
            Showing {items.length} product{items.length !== 1 ? "s" : ""}. Custom sizes, materials and quantities are
            available on request.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product, i) => (
              <Reveal key={product.id} delay={(i % 3) * 80}>
                <ProductCard product={product} onDetails={() => setSelected(product)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a product that isn't listed?"
        text="Share your idea with us. We print on many plastic surfaces, so tell us what you have in mind and we will recommend the best option."
      />

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-950/70 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="animate-lightbox relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy-900 shadow transition-colors hover:bg-accent-500 hover:text-white"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          <img src={product.image} alt={product.name} className="h-64 w-full object-cover md:h-full" />
          <div className="p-7 sm:p-10">
            <p className="eyebrow">{product.category}</p>
            <h2 id="product-modal-title" className="mt-3 text-2xl font-extrabold leading-tight text-navy-900 sm:text-3xl">
              {product.name}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">{product.description}</p>

            <h3 className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-navy-900">Common Applications</h3>
            <ul className="mt-3 space-y-2.5">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-slate-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <a
              href={waProductInquiry(product.name)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp mt-8 w-full"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Inquire on WhatsApp
            </a>
            <p className="mt-3 text-center text-xs text-slate-500">
              Share your size, quantity and artwork for an accurate quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
