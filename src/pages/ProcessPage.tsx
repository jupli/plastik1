import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IMG, PROCESS_STEPS } from "@/data/content";

const SHOTS = [
  {
    image: IMG.printSheets,
    title: "Precision Printing",
    text: "Inks are applied with careful registration so colours and details stay sharp across the run.",
  },
  {
    image: IMG.inspection,
    title: "Quality Inspection",
    text: "Finished prints are checked for colour, alignment and finish before anything is packed.",
  },
  {
    image: IMG.delivery,
    title: "Packing & Dispatch",
    text: "Orders are packed to protect the print and dispatched on the agreed schedule.",
  },
];

const CHECKPOINTS = [
  { title: "Artwork & proof approval", text: "You sign off on the digital proof before any screen is prepared." },
  { title: "Colour & registration check", text: "Checked during printing to keep every batch consistent." },
  { title: "Print quality & dimension check", text: "Samples are measured and inspected after printing." },
  { title: "Final packing inspection", text: "A last check before dispatch, so you receive what was approved." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        page="process"
        eyebrow="Production Process"
        title="How We Turn Your Artwork Into Finished Products"
        description="A clear, transparent workflow from your first conversation to the delivery of finished products. You always know where your order stands."
        image={IMG.printSheets}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Six Steps"
            title="Our Production Workflow"
            subtitle="Every order follows the same disciplined steps, so quality, timing and communication stay consistent."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 100}>
                <div className="card h-full p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-white">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-5xl font-extrabold text-navy-900/10">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.title} delay={i * 100}>
              <figure className="zoom-wrap card h-full overflow-hidden">
                <img src={shot.image} alt={shot.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-6">
                  <p className="font-bold text-navy-900">{shot.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{shot.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-16 text-white lg:py-24">
        <div className="grid-pattern absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Quality Assurance</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Quality checkpoints built into every order
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              We do not rely on a single final check. Quality is reviewed at key stages so problems are caught early,
              and your order arrives looking the way you approved it.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {CHECKPOINTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-500 text-white">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white pt-20 lg:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
