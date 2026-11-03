import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IMG, SERVICES, pageHref } from "@/data/content";
import { waLink } from "@/lib/whatsapp";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        page="services"
        eyebrow="Our Services"
        title="Custom Plastic Printing Services"
        description="From everyday carrier bags to branded packaging and promotional products, we offer printing services for every plastic surface and every order size."
        image={IMG.pressRoller}
      />

      {SERVICES.map((service, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 py-16 lg:py-24 ${reversed ? "bg-slate-50" : "bg-white"}`}
          >
            <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal className={reversed ? "lg:order-2" : ""}>
                <div className="zoom-wrap overflow-hidden rounded-3xl shadow-xl shadow-navy-900/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={120} className={reversed ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-white">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-accent-500">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{service.summary}</p>

                <ul className="mt-7 space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-medium text-navy-900">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={waLink(`Hello, I would like to inquire about your "${service.title}" service.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    Inquire via WhatsApp
                  </a>
                  <a href={pageHref("contact")} className="btn btn-line btn-sm">
                    Request a Quote
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
