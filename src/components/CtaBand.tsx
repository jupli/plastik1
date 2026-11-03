import Icon from "./Icon";
import Reveal from "./Reveal";
import { pageHref } from "@/data/content";
import { waLink } from "@/lib/whatsapp";

interface CtaBandProps {
  title?: string;
  text?: string;
}

/** Full-width call-to-action used at the end of pages. */
export default function CtaBand({
  title = "Ready to print your next project?",
  text = "Tell us what you need — bags, packaging, pouches or promotional products — and we will send you a clear, no-obligation quote.",
}: CtaBandProps) {
  return (
    <section className="container-x pb-20 lg:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" aria-hidden="true" />
          <div className="grid-pattern absolute inset-0 opacity-50" aria-hidden="true" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{text}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <Icon name="whatsapp" className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <a href={pageHref("contact")} className="btn btn-outline">
                Request a Quote
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
