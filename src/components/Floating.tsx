import { useState } from "react";
import { cn } from "../utils/cn";
import { DEFAULT_WA_MESSAGE, site, waLink } from "../config/site";
import { useScrollInfo } from "../lib/hooks";
import { Icon } from "./Icons";

/* Floating WhatsApp CTA + back-to-top, revealed after scrolling. */
export function FloatingActions() {
  const { y, progress } = useScrollInfo();
  const [tip, setTip] = useState(false);
  const visible = y > 420;

  return (
    <div
      className={cn(
        "fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 transition-all duration-500 sm:bottom-7 sm:right-7",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group flex h-11 w-11 items-center justify-center border border-navy-900/15 bg-white text-navy-800 shadow-[0_10px_30px_-14px_rgba(10,26,47,.6)] transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:text-flame-600"
        aria-label="Back to top"
      >
        <Icon name="arrow" className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5" />
        <svg viewBox="0 0 44 44" className="pointer-events-none absolute h-11 w-11 -rotate-90">
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="var(--color-flame-500)"
            strokeWidth="2"
            strokeDasharray={2 * Math.PI * 20}
            strokeDashoffset={2 * Math.PI * 20 * (1 - progress)}
            opacity="0.5"
          />
        </svg>
      </button>

      <div
        className="relative"
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
      >
        <span
          className={cn(
            "pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap border border-navy-900/10 bg-white px-3 py-2 font-mono text-[0.7rem] text-navy-800 shadow-[0_12px_30px_-16px_rgba(10,26,47,.6)] transition-all duration-300 sm:block",
            tip ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
          )}
        >
          Need a quote? Chat with us →
        </span>
        <a
          href={waLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="u-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_36px_-12px_rgba(37,211,102,.75)] transition-transform duration-300 hover:scale-105"
          aria-label="Chat with us on WhatsApp"
        >
          <Icon name="whatsapp" className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}

/* Small inline WhatsApp button used inside cards */
export function WhatsAppButton({
  message,
  label = "Inquire on WhatsApp",
  className,
}: {
  message: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 bg-[#25D366] px-5 py-3 font-display text-[0.75rem] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb457] hover:shadow-[0_14px_30px_-14px_rgba(37,211,102,.8)]",
        className
      )}
    >
      <Icon name="whatsapp" className="h-[1.1rem] w-[1.1rem]" />
      {label}
    </a>
  );
}

export const siteName = site.name;
