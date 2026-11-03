import { useEffect, type ComponentType } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { PAGE_META, type PageId } from "@/data/content";
import { useHashPage } from "@/hooks/useHashPage";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ProductsPage from "@/pages/ProductsPage";
import PortfolioPage from "@/pages/PortfolioPage";
import ProcessPage from "@/pages/ProcessPage";
import ContactPage from "@/pages/ContactPage";

const PAGES: Record<PageId, ComponentType> = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  products: ProductsPage,
  portfolio: PortfolioPage,
  process: ProcessPage,
  contact: ContactPage,
};

export default function App() {
  const page = useHashPage();
  const CurrentPage = PAGES[page];

  // Per-page SEO metadata and scroll reset on navigation
  useEffect(() => {
    const meta = PAGE_META[page];
    document.title = meta.title;

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = meta.description;

    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent-500 focus:px-5 focus:py-2.5 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar current={page} />
      <main id="main" className="flex-1">
        <CurrentPage />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
