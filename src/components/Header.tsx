import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { nav, site, waLink, DEFAULT_WA_MESSAGE } from "../config/site";
import { Link, useRoute } from "../lib/router";
import { useBodyLock, useScrollInfo } from "../lib/hooks";
import { Icon, Logo } from "./Icons";
import { Btn } from "./ui";

/* =============================================================
   Header — utility bar + sticky main bar + mobile drawer
   ============================================================= */
export function Header() {
  const route = useRoute();
  const { y, progress } = useScrollInfo();
  const [open, setOpen] = useState(false);
  const solid = y > 40;

  useBodyLock(open);

  useEffect(() => {
    setOpen(false);
  }, [route.path, route.anchor]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* utility bar */}
        <div
          className={cn(
            "hidden overflow-hidden border-b border-white/10 bg-navy-950 text-white transition-all duration-500 lg:block",
            solid ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          )}
        >
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-2.5 xl:px-10">
            <div className="flex items-center gap-7 font-mono text-[0.72rem] text-navy-200">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-flame-400">
                <Icon name="phone" className="h-3.5 w-3.5 text-flame-500" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-flame-400">
                <Icon name="mail" className="h-3.5 w-3.5 text-flame-500" /> {site.email}
              </a>
              <span className="flex items-center gap-2">
                <Icon name="clock" className="h-3.5 w-3.5 text-flame-500" /> Mon–Fri 08:00–17:00 WIB
              </span>
            </div>
            <div className="flex items-center gap-5 font-mono text-[0.72rem] text-navy-300">
              <span className="hidden xl:inline">Serving UMKM · Retail · F&amp;B · Manufacturing</span>
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-flame-400"
                  aria-label={s.label}
                >
                  <Icon
                    name={s.label === "LinkedIn" ? "linkedin" : s.label === "Instagram" ? "instagram" : "cart"}
                    className="h-4 w-4"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* main bar */}
        <div
          className={cn(
            "relative border-b transition-all duration-500",
            solid
              ? "border-navy-900/10 bg-white/92 py-2 shadow-[0_10px_40px_-24px_rgba(10,26,47,.55)] backdrop-blur-xl"
              : "border-transparent bg-white/70 py-3.5 backdrop-blur-md"
          )}
        >
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-6 xl:px-10">
            <Link to="/" ariaLabel={`${site.name} — home`} className="shrink-0">
              <Logo className={cn("transition-transform duration-500", solid ? "scale-95" : "scale-100")} />
            </Link>

            <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
              {nav.map((item) => {
                const active = route.path === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "group relative px-3.5 py-2 font-display text-[0.82rem] font-bold uppercase tracking-[-0.005em] transition-colors duration-300",
                      active ? "text-flame-600" : "text-navy-800 hover:text-flame-600"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-0.5 left-3.5 h-[2px] bg-flame-500 transition-all duration-300",
                        active ? "w-[calc(100%-1.75rem)]" : "w-0 group-hover:w-[calc(100%-1.75rem)]"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-11 w-11 items-center justify-center border border-navy-900/15 text-navy-800 transition-all duration-300 hover:border-flame-500 hover:bg-flame-500 hover:text-white sm:flex"
                aria-label="Chat on WhatsApp"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
              </a>
              <Btn to="/contact" size="sm" className="hidden sm:inline-flex" icon="arrow">
                Get a Quote
              </Btn>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex h-11 w-11 items-center justify-center border border-navy-900/15 text-navy-900 transition-colors hover:border-flame-500 hover:text-flame-600 xl:hidden"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Icon name="menu" className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* scroll progress */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent">
            <div
              className="h-full origin-left bg-gradient-to-r from-flame-500 to-flame-300 transition-[width] duration-150"
              style={{ width: `${Math.max(progress * 100, 0.5)}%` }}
            />
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(26rem,90vw)] flex-col bg-navy-900 transition-transform duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)]",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5">
            <Logo tone="light" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-flame-500 hover:text-flame-400"
              aria-label="Close menu"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <nav className="relative flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {nav.map((item, i) => {
                const active = route.path === item.to;
                return (
                  <li
                    key={item.to}
                    className="transition-all duration-500"
                    style={{
                      transform: open ? "none" : "translateX(24px)",
                      opacity: open ? 1 : 0,
                      transitionDelay: `${120 + i * 55}ms`,
                    }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "group flex items-baseline justify-between border-b border-white/8 py-4 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] transition-colors",
                        active ? "text-flame-400" : "text-white hover:text-flame-300"
                      )}
                    >
                      {item.label}
                      <span className="font-mono text-[0.65rem] text-navy-400">0{i + 1}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 space-y-3 font-mono text-[0.78rem] text-navy-200">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-flame-300">
                <Icon name="phone" className="h-4 w-4 text-flame-500" /> {site.phoneMobile}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-flame-300">
                <Icon name="mail" className="h-4 w-4 text-flame-500" /> {site.email}
              </a>
              <p className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-flame-500" />
                <span>
                  {site.address.line1}, {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postcode}
                </span>
              </p>
            </div>
          </nav>

          <div className="relative border-t border-white/10 p-6">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 bg-flame-500 px-6 py-4 font-display text-sm font-bold uppercase text-white transition-colors hover:bg-flame-600"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
