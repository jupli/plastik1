import { useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { NAV_ITEMS, pageHref, type PageId } from "@/data/content";
import { waLink } from "@/lib/whatsapp";

export default function Navbar({ current }: { current: PageId }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [current]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 shadow-[0_1px_0_rgba(11,31,58,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#/" aria-label="Go to homepage" className="shrink-0">
          <Logo light={!solid} />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => {
            const active = item.id === current;
            return (
              <a
                key={item.id}
                href={pageHref(item.id)}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  active
                    ? solid
                      ? "text-accent-500"
                      : "text-white"
                    : solid
                      ? "text-navy-800 hover:text-accent-500"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent-500 transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`grid h-11 w-11 place-items-center rounded-full transition-colors xl:hidden ${
              solid ? "text-navy-900 hover:bg-navy-900/5" : "text-white hover:bg-white/10"
            }`}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white transition-all duration-300 xl:hidden ${
          open ? "max-h-[32rem] border-t border-navy-900/10 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="container-x flex flex-col py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={pageHref(item.id)}
              aria-current={item.id === current ? "page" : undefined}
              className={`flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-semibold transition-colors ${
                item.id === current ? "bg-accent-500/10 text-accent-600" : "text-navy-900 hover:bg-navy-900/5"
              }`}
            >
              {item.label}
              <Icon name="arrow" className="h-4 w-4 opacity-50" />
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-3 w-full sm:hidden"
          >
            Get a Quote on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
