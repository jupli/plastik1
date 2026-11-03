import { addressString, nav, site, waLink, DEFAULT_WA_MESSAGE } from "../config/site";
import { services } from "../data/content";
import { Link } from "../lib/router";
import { Icon, Logo } from "./Icons";
import { Btn } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-flame-600/12 blur-[100px]" />
      <div className="u-noise" />

      <div className="relative mx-auto max-w-[1400px] px-5 pt-16 sm:px-6 lg:pt-20 xl:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-navy-200">
              {site.legalName} is a plastic screen printing and packaging printing workshop serving Indonesian
              businesses since {site.established}. From a 500-piece trial run to scheduled bulk production — your
              brand, printed sharp on plastic.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Screen printing", "Flexo & rotogravure", "Food-grade inks", "In-house design"].map((t) => (
                <span key={t} className="u-label border border-white/15 px-3 py-1.5 text-navy-200">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center border border-white/15 text-navy-200 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:bg-flame-500 hover:text-white"
                  aria-label={s.label}
                  title={`${s.label} — ${s.handle}`}
                >
                  <Icon
                    name={s.label === "LinkedIn" ? "linkedin" : s.label === "Instagram" ? "instagram" : "cart"}
                    className="h-[1.15rem] w-[1.15rem]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* services */}
          <div className="lg:col-span-3">
            <h3 className="u-label text-flame-400">Our Services</h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="group flex items-start gap-2 text-[0.9rem] text-navy-200 transition-colors hover:text-white"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-flame-500 transition-transform duration-300 group-hover:scale-150" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div className="lg:col-span-2">
            <h3 className="u-label text-flame-400">Company</h3>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="group flex items-start gap-2 text-[0.9rem] text-navy-200 transition-colors hover:text-white"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-flame-500 transition-transform duration-300 group-hover:scale-150" />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="u-label mt-8 text-flame-400">Download</h3>
            <a
              href={waLink(`Halo ${site.name}, boleh minta katalog produk & price list terbaru?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-[0.78rem] text-navy-200 transition-colors hover:text-flame-300"
            >
              <Icon name="doc" className="h-4 w-4" /> Request catalogue (PDF)
            </a>
          </div>

          {/* contact */}
          <div className="lg:col-span-3">
            <h3 className="u-label text-flame-400">Workshop &amp; Office</h3>
            <ul className="mt-5 space-y-4 text-[0.9rem] text-navy-200">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-flame-500" />
                <span>{addressString}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="whatsapp" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-flame-500" />
                <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.phoneMobile} <span className="text-navy-400">(WhatsApp)</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-flame-500" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-flame-500" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Btn href={waLink(DEFAULT_WA_MESSAGE)} external icon="whatsapp" iconRight={false} className="w-full sm:w-auto">
                Chat on WhatsApp
              </Btn>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-7 text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem]">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-[0.72rem]">
            {site.city} · NPWP 00.000.000.0-000.000 · NIB 0000 0000 00000
          </p>
        </div>
      </div>

      {/* oversized stroke wordmark */}
      <div className="relative -mb-2 overflow-hidden px-5 sm:px-6 xl:px-10" aria-hidden="true">
        <p className="u-display-wide u-stroke-text select-none whitespace-nowrap text-center text-[15vw] leading-[0.8]">
          Plastic Printing
        </p>
      </div>
      <div className="h-2 w-full bg-gradient-to-r from-flame-600 via-flame-400 to-navy-600" />
    </footer>
  );
}
