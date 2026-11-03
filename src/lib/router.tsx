import { useEffect, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

/* =============================================================
   Tiny hash router — keeps the single-file build portable
   (works from file://, any static host, or a CDN).
   ============================================================= */

export type Route = { path: string; anchor?: string };

function parse(hash: string): Route {
  const raw = hash.replace(/^#/, "");
  if (!raw) return { path: "/" };
  const [path, anchor] = raw.split("#");
  return { path: path || "/", anchor };
}

function currentHash() {
  return typeof window === "undefined" ? "" : window.location.hash;
}

/** Scrolls to a section id (or to the top) with reduced-motion awareness. */
export function applyScroll(route: Route, instant = false) {
  const behavior: ScrollBehavior =
    instant || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  if (route.anchor) {
    const run = (tries: number) => {
      const el = document.getElementById(route.anchor as string);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior });
      } else if (tries > 0) {
        requestAnimationFrame(() => run(tries - 1));
      }
    };
    requestAnimationFrame(() => run(6));
    return;
  }
  window.scrollTo({ top: 0, behavior: instant ? "auto" : "auto" });
}

export function navigate(to: string) {
  const here = currentHash().replace(/^#/, "") || "/";
  if (here === to) {
    applyScroll(parse(to));
    return;
  }
  window.location.hash = to;
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(currentHash()));

  useEffect(() => {
    const onHash = () => setRoute(parse(currentHash()));
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}

export function Link({
  to,
  children,
  className,
  onClick,
  title,
  ariaLabel,
  style,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
  ariaLabel?: string;
  style?: CSSProperties;
}) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
    navigate(to);
  };
  return (
    <a href={`#${to}`} className={className} onClick={handle} title={title} aria-label={ariaLabel} style={style}>
      {children}
    </a>
  );
}
