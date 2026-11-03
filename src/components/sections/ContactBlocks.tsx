import { useState, type FormEvent } from "react";
import { cn } from "../../utils/cn";
import { addressString, mapsUrl, site, waLink } from "../../config/site";
import { services } from "../../data/content";
import { Icon } from "../Icons";
import { Btn, Reveal } from "../ui";

/* =============================================================
   CONTACT FORM — client-side validation + WhatsApp hand-off
   ============================================================= */

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  deadline: string;
  message: string;
};

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: services[0].title,
  quantity: "",
  deadline: "",
  message: "",
};

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name (min. 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(f.email.trim())) e.email = "Enter a valid email address, e.g. name@company.co.id.";
  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 8) e.phone = "Enter an active phone / WhatsApp number (min. 8 digits).";
  if (f.quantity && !/\d/.test(f.quantity)) e.quantity = "Quantity should contain a number, e.g. 10.000 pcs.";
  if (f.message.trim().length < 15) e.message = "Tell us a bit more — at least 15 characters (product, size, colours).";
  return e;
}

function composeMessage(f: Fields) {
  return [
    `Halo ${site.name}, saya ingin meminta penawaran.`,
    ``,
    `Nama        : ${f.name}`,
    f.company ? `Perusahaan  : ${f.company}` : "",
    `Email       : ${f.email}`,
    `Telepon/WA  : ${f.phone}`,
    `Layanan     : ${f.service}`,
    f.quantity ? `Jumlah      : ${f.quantity}` : "",
    f.deadline ? `Target jadi : ${f.deadline}` : "",
    ``,
    `Kebutuhan:`,
    f.message,
  ]
    .filter(Boolean)
    .join("\n");
}

const inputBase =
  "w-full border bg-white px-4 py-3.5 font-sans text-[0.92rem] text-navy-900 placeholder:text-muted/60 transition-colors duration-300 focus:border-flame-500 focus:outline-none";

function Field({
  label,
  hint,
  error,
  children,
  required,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="u-label text-navy-800">
          {label} {required && <span className="text-flame-600">*</span>}
        </span>
        {hint && <span className="font-mono text-[0.65rem] text-muted/80">{hint}</span>}
      </span>
      <span className="mt-2 block">{children}</span>
      <span
        className={cn(
          "mt-1.5 flex items-center gap-1.5 overflow-hidden font-mono text-[0.68rem] text-flame-700 transition-all duration-300",
          error ? "max-h-8 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Icon name="close" className="h-3 w-3 shrink-0" strokeWidth={2.4} />
        {error}
      </span>
    </label>
  );
}

export function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState<Fields | null>(null);

  const set = (k: keyof Fields) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = ev.target.value;
    setF((prev) => ({ ...prev, [k]: value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(f);
    setErrors(next);
    if (Object.keys(next).length) {
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.focus();
      return;
    }
    setSent(f);
    // Hand the validated inquiry to WhatsApp so it reaches the sales team instantly.
    window.open(waLink(composeMessage(f)), "_blank", "noopener,noreferrer");
  };

  if (sent) {
    return (
      <div className="relative overflow-hidden border border-navy-900/10 bg-white p-8 sm:p-10">
        <div className="u-dots-flame pointer-events-none absolute right-0 top-0 h-32 w-32 opacity-25" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-flame-500 text-white">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.4} />
        </span>
        <h3 className="u-display relative mt-6 text-[1.7rem] text-navy-900">Thank you, {sent.name.split(" ")[0]}!</h3>
        <p className="relative mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted">
          Your inquiry is ready to send. A WhatsApp window with your details has been opened — press send and our sales
          team will reply within working hours. Prefer email? Use the button below and your message will be attached to a
          new draft.
        </p>

        <dl className="relative mt-7 grid gap-x-8 gap-y-3 border-y border-navy-900/10 py-6 sm:grid-cols-2">
          {[
            ["Name", sent.name],
            ["Company", sent.company || "—"],
            ["Email", sent.email],
            ["Phone / WhatsApp", sent.phone],
            ["Service", sent.service],
            ["Quantity", sent.quantity || "—"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-4 border-b border-navy-900/6 pb-2 last:border-0">
              <dt className="u-label text-muted">{k}</dt>
              <dd className="text-right font-mono text-[0.76rem] text-navy-900">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-7 flex flex-wrap gap-3">
          <a
            href={waLink(composeMessage(sent))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] px-5 py-3 font-display text-[0.75rem] font-bold uppercase text-white transition-colors hover:bg-[#1fb457]"
          >
            <Icon name="whatsapp" className="h-4 w-4" /> Open WhatsApp again
          </a>
          <a
            href={`mailto:${site.emailSales}?subject=${encodeURIComponent(`Inquiry — ${sent.service}`)}&body=${encodeURIComponent(composeMessage(sent))}`}
            className="inline-flex items-center gap-2 border border-navy-900/20 px-5 py-3 font-display text-[0.75rem] font-bold uppercase text-navy-900 transition-colors hover:border-flame-500 hover:text-flame-600"
          >
            <Icon name="mail" className="h-4 w-4" /> Send by email
          </a>
          <Btn
            variant="ghost"
            size="md"
            icon="arrow"
            iconRight={false}
            onClick={() => {
              setSent(null);
              setF(empty);
            }}
          >
            Write another inquiry
          </Btn>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative border border-navy-900/10 bg-white p-6 sm:p-9">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-navy-900/10 pb-6">
        <div>
          <h3 className="u-display text-[1.6rem] text-navy-900">Inquiry form</h3>
          <p className="mt-2 max-w-md text-[0.9rem] text-muted">
            Fields marked <span className="text-flame-600">*</span> are required. The more detail you give about material,
            size and quantity, the more accurate our quotation.
          </p>
        </div>
        <span className="u-label border border-navy-900/12 bg-mist px-3 py-1.5 text-navy-700">Reply &lt; 15 min</span>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <input
            className={cn(inputBase, errors.name ? "border-flame-500" : "border-navy-900/15")}
            value={f.name}
            onChange={set("name")}
            placeholder="Budi Santoso"
            data-invalid={!!errors.name}
            autoComplete="name"
          />
        </Field>
        <Field label="Company / brand" hint="optional">
          <input
            className={cn(inputBase, "border-navy-900/15")}
            value={f.company}
            onChange={set("company")}
            placeholder="PT. Maju Bersama"
            autoComplete="organization"
          />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input
            className={cn(inputBase, errors.email ? "border-flame-500" : "border-navy-900/15")}
            value={f.email}
            onChange={set("email")}
            placeholder="nama@perusahaan.co.id"
            data-invalid={!!errors.email}
            type="email"
            autoComplete="email"
          />
        </Field>
        <Field label="Phone / WhatsApp" required error={errors.phone}>
          <input
            className={cn(inputBase, errors.phone ? "border-flame-500" : "border-navy-900/15")}
            value={f.phone}
            onChange={set("phone")}
            placeholder="0812 3456 7890"
            data-invalid={!!errors.phone}
            type="tel"
            autoComplete="tel"
          />
        </Field>
        <Field label="Service needed">
          <select
            className={cn(inputBase, "border-navy-900/15 appearance-none pr-10")}
            value={f.service}
            onChange={set("service")}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2352647c' stroke-width='1.8' stroke-linecap='round'%3E%3Cpath d='m7 10 5 5 5-5'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.85rem center",
              backgroundSize: "1.1rem",
            }}
          >
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Other / not sure yet</option>
          </select>
        </Field>
        <Field label="Estimated quantity" hint="optional" error={errors.quantity}>
          <input
            className={cn(inputBase, errors.quantity ? "border-flame-500" : "border-navy-900/15")}
            value={f.quantity}
            onChange={set("quantity")}
            placeholder="10.000 pcs"
            data-invalid={!!errors.quantity}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Project details" required hint="material · size · colours · design file" error={errors.message}>
            <textarea
              rows={5}
              className={cn(inputBase, "resize-y", errors.message ? "border-flame-500" : "border-navy-900/15")}
              value={f.message}
              onChange={set("message")}
              placeholder="Contoh: kantong HDPE 30 × 50 cm, sablon 2 warna (logo + alamat toko), sudah ada file AI. Target produksi bulan depan."
              data-invalid={!!errors.message}
            />
          </Field>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-navy-900/10 pt-6">
        <Btn type="submit" size="lg" icon="arrow">
          Submit inquiry
        </Btn>
        <p className="max-w-xs font-mono text-[0.68rem] leading-relaxed text-muted">
          Submitting opens WhatsApp with your details pre-filled. We never share your data with third parties.
        </p>
      </div>
    </form>
  );
}

/* =============================================================
   MAP — Google Maps placeholder (swap in embedSrc when ready)
   ============================================================= */
export function MapPlaceholder() {
  return (
    <div className="relative overflow-hidden border border-navy-900/10 bg-navy-900">
      {site.maps.embedSrc ? (
        <iframe
          title={`${site.name} location on Google Maps`}
          src={site.maps.embedSrc}
          className="h-[26rem] w-full border-0 grayscale-[35%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="relative h-[26rem] w-full">
          {/* stylised map */}
          <svg viewBox="0 0 800 500" className="h-full w-full" role="img" aria-label="Map placeholder showing workshop location">
            <rect width="800" height="500" fill="#0f2740" />
            <g stroke="rgba(255,255,255,.06)" strokeWidth="1">
              {Array.from({ length: 16 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" />
              ))}
              {Array.from({ length: 11 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} />
              ))}
            </g>
            <g stroke="rgba(255,255,255,.14)" strokeWidth="10" fill="none">
              <path d="M-20 320 L280 250 L520 300 L820 210" />
              <path d="M180 -20 L230 200 L190 520" />
              <path d="M600 -20 L560 180 L640 520" />
            </g>
            <g stroke="rgba(255,255,255,.09)" strokeWidth="4" fill="none">
              <path d="M-20 130 L820 170" />
              <path d="M400 -20 L420 520" />
              <path d="M-20 430 L820 390" />
            </g>
            <g fill="rgba(255,255,255,.05)">
              <rect x="60" y="60" width="90" height="60" />
              <rect x="300" y="90" width="70" height="50" />
              <rect x="640" y="330" width="110" height="70" />
              <rect x="120" y="360" width="80" height="60" />
            </g>
            {/* location pin */}
            <g transform="translate(392,236)">
              <circle r="46" fill="rgba(242,98,28,.18)">
                <animate attributeName="r" values="34;58;34" dur="3.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values=".5;0;.5" dur="3.6s" repeatCount="indefinite" />
              </circle>
              <circle r="26" fill="rgba(242,98,28,.22)" />
              <path
                d="M0 -34c-11 0-20 9-20 20 0 15 20 34 20 34s20-19 20-34c0-11-9-20-20-20Z"
                fill="#f2621c"
                stroke="#fff"
                strokeWidth="2.5"
              />
              <circle cy="-14" r="6.5" fill="#fff" />
            </g>
          </svg>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />

          <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-4 border border-white/12 bg-navy-950/85 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6">
            <div className="max-w-sm">
              <p className="u-label text-flame-400">Workshop &amp; office</p>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-white">{addressString}</p>
              <p className="mt-2 font-mono text-[0.7rem] text-navy-300">
                {site.maps.lat.toFixed(4)}, {site.maps.lng.toFixed(4)}
              </p>
            </div>
            <a
              href={mapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-white/25 px-4 py-3 font-display text-[0.72rem] font-bold uppercase text-white transition-colors hover:border-flame-500 hover:bg-flame-500"
            >
              <Icon name="pin" className="h-4 w-4" /> Open in Google Maps
              <Icon name="arrowUp" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* =============================================================
   CONTACT CHANNEL CARDS
   ============================================================= */
export function ContactChannels() {
  const channels = [
    {
      icon: "whatsapp",
      label: "WhatsApp / sales",
      value: site.phoneMobile,
      note: "Fastest response · 08:00 – 21:00 WIB",
      href: waLink(`Halo ${site.name}, saya ingin bertanya soal layanan cetak plastik.`),
      external: true,
    },
    {
      icon: "phone",
      label: "Office phone",
      value: site.phone,
      note: "Monday – Friday, 08:00 – 17:00 WIB",
      href: `tel:${site.phone.replace(/\s/g, "")}`,
    },
    {
      icon: "mail",
      label: "Email",
      value: site.email,
      note: "Quotations, artwork files & invoices",
      href: `mailto:${site.email}`,
    },
    {
      icon: "pin",
      label: "Workshop",
      value: `${site.address.line1}, ${site.address.line2}`,
      note: `${site.address.city}, ${site.address.region} ${site.address.postcode}`,
      href: mapsUrl(),
      external: true,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {channels.map((c, i) => (
        <Reveal key={c.label} delay={i * 80}>
          <a
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className="group flex h-full items-start gap-4 border border-navy-900/10 bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-flame-500/60 hover:shadow-[0_24px_50px_-30px_rgba(10,26,47,.5)]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy-900 text-flame-400 transition-colors duration-400 group-hover:bg-flame-500 group-hover:text-white">
              <Icon name={c.icon} className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="u-label block text-muted">{c.label}</span>
              <span className="mt-1.5 block font-display text-[1.02rem] font-extrabold uppercase tracking-[-0.01em] text-navy-900 break-words">
                {c.value}
              </span>
              <span className="mt-1.5 block font-mono text-[0.7rem] text-muted">{c.note}</span>
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export function HoursCard() {
  return (
    <div className="relative overflow-hidden border border-white/12 bg-white/5 p-6 backdrop-blur-sm">
      <div className="u-dots-flame pointer-events-none absolute -right-6 -top-6 h-24 w-24 opacity-30" />
      <h3 className="u-label relative text-flame-400">Business hours</h3>
      <ul className="relative mt-4 space-y-3">
        {site.hours.map((h) => (
          <li key={h.day} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 last:border-0">
            <span className="text-[0.9rem] text-navy-200">{h.day}</span>
            <span className="font-mono text-[0.78rem] text-white">{h.time}</span>
          </li>
        ))}
      </ul>
      <p className="relative mt-4 font-mono text-[0.7rem] leading-relaxed text-navy-300">
        Production runs 2 shifts Mon – Sat. Rush orders accepted subject to press availability.
      </p>
    </div>
  );
}
