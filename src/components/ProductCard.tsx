import Icon from "./Icon";
import type { Product } from "@/data/content";
import { waProductInquiry } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  /** When provided, shows a "Details" button that opens the product modal */
  onDetails?: () => void;
}

export default function ProductCard({ product, onDetails }: ProductCardProps) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className="zoom-wrap relative aspect-[4/3] bg-slate-100">
        <img
          src={product.image}
          alt={`${product.name} — ${product.category}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-900 shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-navy-900">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {onDetails && (
            <button
              type="button"
              onClick={onDetails}
              className="btn btn-line btn-sm flex-1"
            >
              Details
            </button>
          )}
          <a
            href={waProductInquiry(product.name)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-navy btn-sm flex-1"
          >
            <Icon name="chat" className="h-4 w-4" />
            Inquire
          </a>
        </div>
      </div>
    </article>
  );
}
