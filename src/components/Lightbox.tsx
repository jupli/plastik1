import { useEffect } from "react";
import Icon from "./Icon";
import { waLink } from "@/lib/whatsapp";

export interface LightboxItem {
  title: string;
  category: string;
  image: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

/** Full-screen image viewer with keyboard (Esc / arrows) and touch-friendly navigation. */
export default function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const isOpen = index !== null;
  const total = items.length;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null) onChange((index + 1) % total);
      if (e.key === "ArrowLeft" && index !== null) onChange((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, index, total, onClose, onChange]);

  if (index === null) return null;
  const item = items[index];

  const navBtn =
    "absolute top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-accent-500";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 sm:right-6 sm:top-6"
      >
        <Icon name="close" className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index - 1 + total) % total);
        }}
        className={`${navBtn} left-2 sm:left-6`}
      >
        <Icon name="arrow" className="h-5 w-5 rotate-180" />
      </button>

      <figure
        className="animate-lightbox flex max-h-full w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
        />
        <figcaption className="mt-5 flex w-full flex-col items-center gap-3 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-400">{item.category}</p>
            <p className="mt-1 text-lg font-bold">{item.title}</p>
            <p className="text-xs text-white/50">
              {index + 1} / {total}
            </p>
          </div>
          <a
            href={waLink(`Hello, I like your "${item.title}" project. I would like to discuss a similar order.`)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Discuss a Similar Project
          </a>
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index + 1) % total);
        }}
        className={`${navBtn} right-2 sm:right-6`}
      >
        <Icon name="arrow" className="h-5 w-5" />
      </button>
    </div>
  );
}
