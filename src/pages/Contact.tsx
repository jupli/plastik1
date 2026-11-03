import { img, site, waLink, DEFAULT_WA_MESSAGE } from "../config/site";
import { faqs } from "../data/content";
import { Icon } from "../components/Icons";
import { Btn, Eyebrow, Reveal, SectionHead } from "../components/ui";
import { CtaBand, Faq, PageHeader } from "../components/sections/Blocks";
import { ContactChannels, ContactForm, HoursCard, MapPlaceholder } from "../components/sections/ContactBlocks";
import { SpecBuilder } from "../components/sections/SpecBuilder";

/* =============================================================
   CONTACT US
   ============================================================= */

const nextSteps = [
  { n: "1", t: "We read your inquiry", d: "Sales checks material, quantity and artwork feasibility." },
  { n: "2", t: "You get a written quote", d: "Price per piece, total, lead time and payment terms." },
  { n: "3", t: "Proof & approval", d: "Digital proof or physical sample before the press runs." },
  { n: "4", t: "Production & delivery", d: "Progress updates, QC report, then dispatch to your address." },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get a quote"
        title={
          <>
            Tell us what you need <span className="text-flame-500">printed</span>
          </>
        }
        lead="WhatsApp is the fastest route — most inquiries are answered within 15 minutes during working hours. For detailed briefs with attachments, use the form or email below. We reply to every message, even if we cannot take the job."
        image={img.courier}
        facts={[
          { k: "Response time", v: "< 15 minutes" },
          { k: "Quotation", v: "Within 24 hours" },
          { k: "Languages", v: "Bahasa · English" },
          { k: "Coverage", v: "All Indonesia" },
        ]}
      />

      {/* ---------- channels ---------- */}
      <section className="relative overflow-hidden bg-mist py-16 lg:py-20">
        <div className="u-dots pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <ContactChannels />
        </div>
      </section>

      {/* ---------- spec builder ---------- */}
      <section id="spec-builder" className="relative overflow-hidden bg-white pb-20 lg:pb-24">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <Reveal>
            <SpecBuilder />
          </Reveal>
        </div>
      </section>

      {/* ---------- form + sidebar ---------- */}
      <section id="inquiry" className="relative overflow-hidden bg-mist py-20 lg:py-24">
        <div className="u-grid-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-[1400px] gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:gap-10 xl:px-10">
          <div className="lg:col-span-7 xl:col-span-8">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-32">
              <Reveal delay={80}>
                <div className="relative overflow-hidden bg-navy-950 p-6 text-white">
                  <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-60" />
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-flame-600/25 blur-[70px]" />
                  <div className="relative">
                    <span className="u-label inline-flex items-center gap-2 text-flame-400">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-flame-400" />
                      </span>
                      Online now
                    </span>
                    <h3 className="u-display mt-4 text-[1.6rem] leading-tight">Prefer to chat?</h3>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-navy-200">
                      Send a photo of your current packaging, your logo file, or a rough sketch. We will tell you what is
                      possible and what it costs.
                    </p>
                    <a
                      href={waLink(DEFAULT_WA_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-5 flex w-full items-center justify-center gap-2.5 bg-[#25D366] px-5 py-3.5 font-display text-[0.78rem] font-bold uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb457]"
                    >
                      <Icon name="whatsapp" className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                    <p className="mt-3 text-center font-mono text-[0.7rem] text-navy-300">{site.phoneMobile}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <HoursCard />
              </Reveal>

              <Reveal delay={200}>
                <div className="border border-navy-900/10 bg-mist p-6">
                  <h3 className="u-label text-navy-700">What happens next</h3>
                  <ol className="mt-5 space-y-4">
                    {nextSteps.map((s) => (
                      <li key={s.n} className="group flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-navy-900/15 bg-white font-display text-[0.75rem] font-black text-navy-900 transition-colors duration-400 group-hover:border-flame-500 group-hover:bg-flame-500 group-hover:text-white">
                          {s.n}
                        </span>
                        <div>
                          <p className="font-display text-[0.9rem] font-extrabold uppercase tracking-[-0.005em] text-navy-900">
                            {s.t}
                          </p>
                          <p className="mt-1 text-[0.85rem] leading-relaxed text-muted">{s.d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- map ---------- */}
      <section id="location" className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Location"
            title={
              <>
                Visit the <span className="text-flame-500">workshop</span>
              </>
            }
            lead="Production and office are on the same site in East Jakarta. Visits are welcome by appointment so we can prepare samples and a floor tour for you."
            action={
              <Btn href={waLink(`Halo ${site.name}, saya ingin membuat janji kunjungan ke workshop.`)} external variant="outline" icon="whatsapp">
                Book a visit
              </Btn>
            }
          />
          <Reveal delay={100} className="mt-12">
            <MapPlaceholder />
          </Reveal>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "clock", t: "By appointment", d: "Mon – Fri 08:00 – 17:00, Sat 08:00 – 14:00 WIB" },
              { icon: "truck", t: "Loading dock", d: "Trailer access for bulk pickup and cargo" },
              { icon: "pin", t: "Landmark", d: "5 minutes from the industrial estate main gate" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="flex h-full gap-4 border border-navy-900/10 bg-white p-5">
                  <Icon name={c.icon} className="h-5 w-5 shrink-0 text-flame-600" />
                  <div>
                    <p className="font-display text-[0.88rem] font-extrabold uppercase tracking-[-0.005em] text-navy-900">
                      {c.t}
                    </p>
                    <p className="mt-1 text-[0.84rem] leading-relaxed text-muted">{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="relative overflow-hidden bg-mist py-20 lg:py-24">
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 xl:px-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Before you write</Eyebrow>
              </Reveal>
              <Reveal delay={70}>
                <h2 className="u-display mt-5 text-[2rem] leading-[0.96] text-navy-900 sm:text-[2.4rem]">
                  Answers you can use right away
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-[0.96rem] leading-relaxed text-muted">
                  Including the details below in your first message usually cuts the quotation time in half: product
                  type, size, material, number of colours and quantity.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>

      <CtaBand
        title="One message is all it takes."
        text="Send your requirement now and get a written quotation, material recommendation and production schedule within one working day."
      />
    </>
  );
}
