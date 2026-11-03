import { useEffect, useState } from "react";
import { PAGE_IDS, type PageId } from "@/data/content";

/** Reads the current page from the URL hash, e.g. "#/about" -> "about". */
function readPage(): PageId {
  const raw = window.location.hash.replace(/^#\/?/, "").split("?")[0].toLowerCase();
  return (PAGE_IDS as readonly string[]).includes(raw) ? (raw as PageId) : "home";
}

/** Lightweight hash-based router. Works on any static host without server rewrites. */
export function useHashPage(): PageId {
  const [page, setPage] = useState<PageId>(readPage);

  useEffect(() => {
    const onChange = () => setPage(readPage());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return page;
}
