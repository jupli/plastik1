import { useEffect, type ComponentType } from "react";
import { site } from "./config/site";
import { applyScroll, Link, useRoute } from "./lib/router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/Floating";
import { Btn, Eyebrow } from "./components/ui";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import Production from "./pages/Process";
import Contact from "./pages/Contact";

/* =============================================================
   ROUTES + per-page SEO metadata
   ============================================================= */
const routes: Record<string, { page: ComponentType; title: string; description: string }> = {
  "/": {
    page: Home,
    title: `${site.name} — Custom Plastic Screen Printing & Packaging Printing Indonesia`,
    description:
      "Professional custom plastic printing solutions: plastic bags, packaging, pouches, food & beverage print, logo printing on bottles and promotional plastic. Get a quote today.",
  },
  "/about": {
    page: About,
    title: `About Us — ${site.name} | Plastic Printing Specialist Since ${site.established}`,
    description:
      "Company profile, vision and mission, screen printing expertise, quality control standards and production capabilities of our plastic printing workshop in Indonesia.",
  },
  "/services": {
    page: Services,
    title: `Our Services — Plastic Bag, Packaging & Logo Printing | ${site.name}`,
    description:
      "Custom plastic bag printing, plastic packaging printing, food & beverage packaging, logo printing on plastic, brand & promotional printing, bulk order production.",
  },
  "/products": {
    page: Products,
    title: `Product Catalogue — Printed Plastic Bags, Pouches & Bottles | ${site.name}`,
    description:
      "Browse printed plastic bags, shopping bags, food packaging, pouches, branded bottles, containers and promotional plastic products with material, size and MOQ specifications.",
  },
  "/portfolio": {
    page: Portfolio,
    title: `Portfolio — Printed Packaging & Plastic Projects | ${site.name}`,
    description:
      "Gallery of finished plastic printing projects for food & beverage, retail, packaging, industrial and promotional clients across Indonesia.",
  },
  "/process": {
    page: Production,
    title: `Production Process — Consultation to Delivery | ${site.name}`,
    description:
      "Six-step plastic printing workflow: customer consultation, design preparation, material selection, printing, quality inspection, packing and delivery.",
  },
  "/contact": {
    page: Contact,
    title: `Contact & Quote — ${site.name} | WhatsApp, Phone, Email`,
    description:
      "Request a quotation for custom plastic printing. WhatsApp, phone, email, workshop address and inquiry form with fast response during working hours.",
  },
};

function NotFound({ path }: { path: string }) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-950 pt-32 text-white">
      <div className="u-grid-dark absolute inset-0 opacity-60" />
      <div className="u-noise" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 xl:px-10">
        <Eyebrow tone="light">Error 404</Eyebrow>
        <h1 className="u-display-wide mt-5 text-[clamp(3rem,12vw,8rem)] text-white">
          Page<span className="text-flame-500">.</span>
          <br />
          Not found
        </h1>
        <p className="mt-6 max-w-lg text-[1rem] leading-relaxed text-navy-200">
          The address <span className="font-mono text-flame-400">{path}</span> does not exist on this site. It may have
          been moved, or the link was typed incorrectly.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Btn to="/" icon="arrow" iconRight={false}>
            Back to home
          </Btn>
          <Btn to="/contact" variant="light" icon="arrow">
            Contact us
          </Btn>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/12 pt-6">
          {Object.keys(routes).map((r) => (
            <Link key={r} to={r} className="font-mono text-[0.75rem] text-navy-300 transition-colors hover:text-flame-400">
              {r === "/" ? "Home" : r.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const route = useRoute();
  const entry = routes[route.path];
  const Page = entry?.page;

  /* scroll behaviour on navigation */
  useEffect(() => {
    applyScroll(route);
  }, [route.path, route.anchor]);

  /* per-route SEO metadata */
  useEffect(() => {
    document.title = entry?.title ?? `Page not found — ${site.name}`;
    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const desc =
      entry?.description ??
      "Custom plastic screen printing and packaging printing services for Indonesian businesses.";
    setMeta("name", "description", desc);
    setMeta("property", "og:title", entry?.title ?? site.name);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", `${window.location.origin}${window.location.pathname}#${route.path}`);
  }, [entry, route.path]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main key={route.path} className="page-in flex-1">
        {Page ? <Page /> : <NotFound path={route.path} />}
      </main>
      <Footer />
      <FloatingActions />
      <style>{`
        .page-in{animation:pageIn .55s cubic-bezier(.16,1,.3,1) both}
        @keyframes pageIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
        @media (prefers-reduced-motion: reduce){.page-in{animation:none}}
      `}</style>
    </div>
  );
}
