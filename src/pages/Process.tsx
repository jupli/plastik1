import { img, site, waLink } from "../config/site";
import { Icon } from "../components/Icons";
import { Btn, Bullets, Reveal, SectionHead, SpecTable } from "../components/ui";
import { CtaBand, Faq, PageHeader, WhyUs } from "../components/sections/Blocks";
import { ProcessFacts, ProcessIntro, ProcessRail } from "../components/sections/Process";

/* =============================================================
   PRODUCTION PROCESS
   ============================================================= */

const leadTimes = [
  { label: "Quotation issued", value: "≤ 1 × 24 hours" },
  { label: "Artwork & digital proof", value: "1 – 2 working days" },
  { label: "Screen / plate making", value: "1 – 2 working days" },
  { label: "Production run", value: "3 – 9 working days" },
  { label: "Quality inspection", value: "1 working day" },
  { label: "Packing & dispatch", value: "1 – 2 working days" },
];

export default function Process() {
  return (
    <>
      <PageHeader
        crumb="Production Process"
        eyebrow="Workflow"
        title={
          <>
            From first message to <span className="text-flame-500">sealed cartons</span>
          </>
        }
        lead="A transparent six-step production workflow. You receive updates at every gate, approve artwork before any press runs, and get a written QC report with your delivery."
        image={img.pressOperator}
        facts={[
          { k: "Steps", v: "6 controlled gates" },
          { k: "Typical total", v: "7 – 14 working days" },
          { k: "Approvals", v: "2 client sign-offs" },
          { k: "QC report", v: "Included per batch" },
        ]}
      />

      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="u-grid-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <ProcessIntro />
          <div className="mt-12">
            <ProcessFacts />
          </div>
        </div>
      </section>

      {/* ---------- rail ---------- */}
      <section className="relative overflow-hidden bg-mist py-20 lg:py-28">
        <div className="u-dots pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
          <ProcessRail />
        </div>
      </section>

      {/* ---------- lead time + qc ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
        <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-flame-600/14 blur-[120px]" />
        <div className="u-noise" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 xl:px-10">
          <div className="lg:col-span-5">
            <SectionHead
              tone="light"
              eyebrow="Timing"
              title={
                <>
                  What each stage <span className="text-flame-400">actually costs you in days</span>
                </>
              }
              lead="These are standard windows for a typical mid-size order. Rush schedules are possible when press capacity allows — ask us before you promise a date to your own customer."
            />
            <div className="mt-8 border border-white/12 bg-white/5 p-6 backdrop-blur-sm">
              <SpecTable rows={leadTimes} tone="light" />
            </div>
            <div className="mt-6">
              <Btn href={waLink(`Halo ${site.name}, saya butuh jadwal produksi cepat. Apakah ada slot kosong minggu ini?`)} external icon="whatsapp">
                Check rush availability
              </Btn>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="right">
              <figure className="overflow-hidden border border-white/12">
                <img
                  src={img.qcInspect}
                  alt="Quality inspection of printed plastic packaging under a light box"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </Reveal>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Reveal delay={60}>
                <div className="border border-white/12 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="flex h-11 w-11 items-center justify-center bg-flame-500 text-white">
                    <Icon name="quality" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.1rem] font-extrabold uppercase tracking-[-0.01em] text-white">
                    Inspection standards
                  </h3>
                  <div className="mt-4">
                    <Bullets
                      tone="light"
                      items={[
                        "Colour measured against the approved master",
                        "Cross-cut and tape-pull adhesion test",
                        "Seal strength / burst test on pouches",
                        "AQL sampling with written report",
                      ]}
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={130}>
                <div className="border border-white/12 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="flex h-11 w-11 items-center justify-center border border-flame-500 text-flame-400">
                    <Icon name="truck" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.1rem] font-extrabold uppercase tracking-[-0.01em] text-white">
                    Packing &amp; dispatch
                  </h3>
                  <div className="mt-4">
                    <Bullets
                      tone="light"
                      items={[
                        "Counted, bundled and cartoned per SKU",
                        "Labelled with batch number and quantity",
                        "Own fleet for Jabodetabek",
                        "Cargo partners for inter-island delivery",
                      ]}
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={180}>
              <div className="mt-6 flex flex-wrap items-center gap-4 border border-white/12 bg-white/5 p-6 backdrop-blur-sm">
                <Icon name="clock" className="h-6 w-6 text-flame-400" />
                <p className="max-w-lg text-[0.92rem] leading-relaxed text-navy-200">
                  Production updates are sent at three points: artwork approval, mid-run photo, and dispatch. You will
                  never have to chase us for a status.
                </p>
                <span className="ml-auto font-mono text-[0.72rem] text-flame-300">
                  {site.phoneMobile}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="relative mx-auto max-w-[1100px] px-5 sm:px-6 xl:px-10">
          <SectionHead
            eyebrow="Questions about production"
            title={
              <>
                Timelines, samples &amp; <span className="text-flame-500">file preparation</span>
              </>
            }
          />
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with a consultation — it costs nothing."
        text="Tell us what you are packing, how many pieces you need per month and when you need the first batch. We will propose the material, print method and schedule that fits."
      />
    </>
  );
}
