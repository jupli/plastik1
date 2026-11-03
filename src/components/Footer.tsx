import Icon from "./Icon";
import Logo from "./Logo";
import { SITE } from "@/config/site";
import { NAV_ITEMS, pageHref } from "@/data/content";
import { waLink } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Custom screen printing and packaging printing on plastic. Quality prints, flexible quantities and reliable
            delivery for brands of every size.
          </p>
          <div className="flex items-center gap-3">
            {Object.entries(SITE.socials).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-xs font-bold uppercase text-white/70 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-500 hover:text-white"
              >
                {name.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={pageHref(item.id)} className="text-white/60 transition-colors hover:text-accent-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/60">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Working Hours</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-white/80">{h.time}</span>
              </li>
            ))}
          </ul>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm mt-7">
            <Icon name="whatsapp" className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 md:flex-row">
          <p>
            © {year} {SITE.companyName}. All rights reserved.
          </p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
