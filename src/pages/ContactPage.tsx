import ContactForm from "@/components/ContactForm";
import Icon, { type IconName } from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SITE } from "@/config/site";
import { IMG } from "@/data/content";
import { mapsLink, waLink } from "@/lib/whatsapp";

const INFO: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "phone", label: "Phone", value: SITE.phoneDisplay, href: `tel:${SITE.phoneHref}` },
  { icon: "mail", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: "pin", label: "Business Address", value: SITE.address },
  {
    icon: "clock",
    label: "Working Hours",
    value: SITE.hours.map((h) => `${h.days}: ${h.time}`).join("  ·  "),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        page="contact"
        eyebrow="Contact Us"
        title="Let's Discuss Your Printing Project"
        description="Message us on WhatsApp, call, send an email or fill in the form. Share your product, quantity and timeline and we will get back to you."
        image={IMG.consultation}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-5 lg:gap-14">
          <Reveal className="space-y-5 lg:col-span-2">
            <div className="rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/20">
              <h2 className="text-2xl font-extrabold">Chat with us instantly</h2>
              <p className="mt-3 leading-relaxed text-white/65">
                WhatsApp is the fastest way to reach us. Share your artwork, product and quantity and we will reply with
                next steps.
              </p>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp mt-7 w-full">
                <Icon name="whatsapp" className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            <ul className="space-y-4">
              {INFO.map((info) => (
                <li key={info.label} className="card flex gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Icon name={info.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="mt-1 block break-words font-semibold text-navy-900 transition-colors hover:text-accent-500">
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words font-semibold text-navy-900">{info.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Google Maps placeholder — replace with an <iframe> embed from Google Maps when ready */}
            <div className="overflow-hidden rounded-3xl border border-navy-900/10 bg-slate-100 bg-[linear-gradient(rgba(11,31,58,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.06)_1px,transparent_1px)] bg-[length:28px_28px]">
              <div className="flex aspect-video flex-col items-center justify-center gap-4 p-6 text-center">
                <span className="animate-float grid h-14 w-14 place-items-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/40">
                  <Icon name="pin" className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-bold text-navy-900">Google Maps Location</p>
                  <p className="mt-1 text-xs text-slate-500">Placeholder: replace with your map embed</p>
                </div>
                <a href={mapsLink()} target="_blank" rel="noreferrer" className="btn btn-navy btn-sm">
                  Open in Google Maps
                  <Icon name="external" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-10">
              <p className="eyebrow">Inquiry Form</p>
              <h2 className="mt-3 text-2xl font-extrabold text-navy-900 sm:text-3xl">Request a Quote</h2>
              <p className="mt-3 text-slate-600">
                Fill in the form and our team will get back to you. Fields marked * are required.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
