import CtaBand from "@/components/CtaBand";
import Icon, { type IconName } from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/config/site";
import { IMG } from "@/data/content";

const MISSION_POINTS = [
  "Deliver sharp, durable prints on every plastic surface we work with.",
  "Make professional custom printing accessible to small and growing businesses.",
  "Keep every order on spec, on schedule and clearly communicated.",
];

const EXPERTISE: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "print",
    title: "Plastic Screen Printing",
    text: "Full-colour and single-colour screen printing on bags, films, sheets and rigid plastics.",
  },
  {
    icon: "box",
    title: "Packaging Print Production",
    text: "Printed packaging for food, beverage, retail and e-commerce products.",
  },
  {
    icon: "tag",
    title: "Brand & Promotional Printing",
    text: "Logos and brand artwork on promotional items that keep your name in front of customers.",
  },
  {
    icon: "pen",
    title: "Design Preparation",
    text: "Print-ready artwork, colour separation and digital proofs before production begins.",
  },
];

const PILLARS: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "eye",
    title: "Quality Control",
    text: "Every batch is checked for colour accuracy, registration, ink adhesion and dimensions before dispatch.",
  },
  {
    icon: "users",
    title: "Customer Satisfaction",
    text: "Clear communication, proof approval before production and friendly support from enquiry to delivery.",
  },
  {
    icon: "factory",
    title: "Production Capability",
    text: "Organised production that handles both small trial runs and large repeat orders with consistent results.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        page="about"
        eyebrow="About Us"
        title="Plastic Printing Experts Built on Craft and Discipline"
        description="Get to know the team behind your custom printed plastic products, and how we work to earn long-term trust with every client."
        image={IMG.pressMachine}
      />

      {/* Company introduction */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="zoom-wrap overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
              <img
                src={IMG.pressMachine}
                alt="Industrial printing machine in operation"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">Company Introduction</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Who We Are
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                {SITE.companyName} is a custom plastic screen printing and packaging printing company based in{" "}
                {SITE.city}. We help businesses turn their logos, designs and brand colours into high-quality prints on
                plastic bags, packaging, pouches and promotional products.
              </p>
              <p>
                We work with small businesses, medium-sized companies, retailers, food and beverage brands,
                manufacturers and corporate clients. Whether you need a first trial run or a large production order, we
                give every project the same attention to detail.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Direction" title="Our Vision & Mission" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-500">
                  <Icon name="eye" className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold">Our Vision</h3>
                <p className="mt-4 text-lg leading-relaxed text-white/75">
                  To be the most trusted plastic printing partner for brands that value quality, creativity and
                  reliability in every product they put into the market.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card h-full p-8 sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-white">
                  <Icon name="target" className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-navy-900">Our Mission</h3>
                <ul className="mt-5 space-y-4">
                  {MISSION_POINTS.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-slate-700">
                      <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-accent-500" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Expertise"
            title="Our Plastic Printing Expertise"
            subtitle="We focus on printing on plastic, which means we understand how inks, films and finishes behave on different materials."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {EXPERTISE.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <div className="card h-full p-7">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <Icon name={e.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-navy-900">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & satisfaction */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white lg:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="zoom-wrap overflow-hidden rounded-3xl">
              <img
                src={IMG.inspection}
                alt="Factory worker inspecting printed material for quality"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              light
              eyebrow="Quality & Service"
              title="Quality, Satisfaction and Production You Can Rely On"
            />
            <div className="mt-10 space-y-7">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 110}>
                  <div className="flex gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-500 text-white">
                      <Icon name={p.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{p.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-white/65">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {SITE.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="card p-7 text-center">
                <p className="text-4xl font-extrabold text-accent-500 sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
