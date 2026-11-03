import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { Link } from "../lib/router";
import { useCountUp, useInView } from "../lib/hooks";
import { Icon } from "./Icons";

/* =============================================================
   Shared UI primitives
   ============================================================= */

const NOTCH =
  "polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 11px 100%, 0 calc(100% - 11px))";

export function Reveal({
  children,
  className,
  delay = 0,
  variant,
  as = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "left" | "right" | "scale";
  as?: "div" | "li" | "section" | "article" | "span";
  id?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(
        "reveal",
        variant === "left" && "reveal-left",
        variant === "right" && "reveal-right",
        variant === "scale" && "reveal-scale",
        inView && "is-in",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Headline whose lines slide up from behind a mask. */
export function MaskLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <span ref={ref} className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className={cn("reveal-mask", inView && "is-in", lineClassName)}>
          <span style={{ transitionDelay: `${delay + i * 110}ms` }}>{line}</span>
        </span>
      ))}
    </span>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "u-label inline-flex items-center gap-2.5",
        tone === "dark" ? "text-flame-600" : "text-flame-300",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-flame-500 opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-flame-500" />
      </span>
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  action,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <Reveal>
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal delay={70}>
          <h2
            className={cn(
              "u-display mt-4 text-[2.1rem] leading-[0.95] sm:text-[2.9rem] lg:text-[3.5rem]",
              tone === "dark" ? "text-navy-900" : "text-white"
            )}
          >
            {title}
          </h2>
        </Reveal>
        {lead && (
          <Reveal delay={140}>
            <p className={cn("mt-5 text-[1.02rem] leading-relaxed", tone === "dark" ? "text-muted" : "text-navy-200")}>
              {lead}
            </p>
          </Reveal>
        )}
      </div>
      {action && (
        <Reveal delay={200} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "navy" | "outline" | "light" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconRight?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
};

export function Btn({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconRight = true,
  className,
  type = "button",
  disabled,
  external,
}: BtnProps) {
  const styles = cn(
    "group/btn relative inline-flex items-center justify-center gap-2.5 font-display font-bold uppercase tracking-[-0.01em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-55",
    size === "sm" && "px-4 py-2.5 text-[0.72rem]",
    size === "md" && "px-6 py-3.5 text-[0.79rem]",
    size === "lg" && "px-8 py-4.5 text-[0.85rem]",
    variant === "primary" && "bg-flame-500 text-white hover:bg-flame-600 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(242,98,28,.9)]",
    variant === "navy" && "bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 shadow-[0_12px_30px_-14px_rgba(10,26,47,.95)]",
    variant === "outline" && "border border-navy-900/25 text-navy-900 hover:border-flame-500 hover:text-flame-600 hover:-translate-y-0.5",
    variant === "light" && "border border-white/30 text-white hover:bg-white hover:text-navy-900 hover:-translate-y-0.5",
    variant === "ghost" && "text-navy-900 hover:text-flame-600 px-0",
    (variant === "primary" || variant === "navy") && "hover:shadow-[0_18px_38px_-16px_rgba(10,26,47,.6)]",
    className
  );
  const chamfer = variant === "primary" || variant === "navy" || variant === "light" || variant === "outline";

  const inner = (
    <>
      {icon && !iconRight && <Icon name={icon} className="h-[1.05em] w-[1.05em] transition-transform duration-300 group-hover/btn:scale-110" />}
      <span>{children}</span>
      {icon && iconRight && (
        <Icon name={icon} className="h-[1.05em] w-[1.05em] transition-transform duration-300 group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={styles} style={chamfer ? { clipPath: NOTCH } : undefined}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={styles}
        style={chamfer ? { clipPath: NOTCH } : undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
      style={chamfer ? { clipPath: NOTCH } : undefined}
    >
      {inner}
    </button>
  );
}

export function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "u-label border px-4 py-2.5 transition-all duration-300",
        active
          ? "border-flame-500 bg-flame-500 text-white shadow-[0_8px_20px_-10px_rgba(242,98,28,.9)]"
          : "border-navy-900/15 bg-white text-navy-700 hover:border-flame-400 hover:text-flame-600"
      )}
    >
      {children}
    </button>
  );
}

export function Marquee({
  items,
  tone = "dark",
  speed,
  reverse,
}: {
  items: string[];
  tone?: "dark" | "light";
  speed?: "fast";
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("group relative flex overflow-hidden", tone === "dark" ? "bg-navy-900" : "bg-flame-500")}>
      <div className={cn("u-marquee-track", speed === "fast" && "fast", reverse && "rev")}>
        {row.map((item, i) => (
          <span
            key={i}
            className={cn(
              "u-label flex shrink-0 items-center gap-6 py-3.5 pr-6 text-white/85",
              tone === "dark" ? "text-white/80" : "text-white"
            )}
          >
            {item}
            <span className={cn("h-1.5 w-1.5 rotate-45", tone === "dark" ? "bg-flame-500" : "bg-navy-900")} />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stat({
  value,
  suffix,
  label,
  note,
  tone = "dark",
}: {
  value: number;
  suffix?: string;
  label: string;
  note?: string;
  tone?: "dark" | "light";
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="group relative">
      <div
        className={cn(
          "u-display text-[2.6rem] leading-none sm:text-[3.4rem]",
          tone === "dark" ? "text-navy-900" : "text-white"
        )}
      >
        {n.toLocaleString("id-ID")}
        <span className="text-flame-500">{suffix}</span>
      </div>
      <div className={cn("mt-3 h-px w-full origin-left scale-x-100", tone === "dark" ? "bg-navy-900/12" : "bg-white/18")} />
      <p className={cn("mt-3 text-sm font-semibold", tone === "dark" ? "text-navy-800" : "text-white")}>{label}</p>
      {note && <p className={cn("u-label mt-1", tone === "dark" ? "text-muted/80" : "text-navy-300")}>{note}</p>}
    </div>
  );
}

export function SpecTable({ rows, tone = "dark" }: { rows: { label: string; value: string }[]; tone?: "dark" | "light" }) {
  return (
    <dl className={cn("divide-y", tone === "dark" ? "divide-navy-900/10" : "divide-white/12")}>
      {rows.map((r) => (
        <div key={r.label} className="flex items-baseline justify-between gap-4 py-2.5">
          <dt className={cn("u-label", tone === "dark" ? "text-muted" : "text-navy-300")}>{r.label}</dt>
          <dd className={cn("text-right font-mono text-[0.78rem]", tone === "dark" ? "text-navy-900" : "text-white")}>
            {r.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Bullets({ items, tone = "dark" }: { items: string[]; tone?: "dark" | "light" }) {
  return (
    <ul className="space-y-2.5">
      {items.map((b) => (
        <li key={b} className="flex gap-3">
          <Icon
            name="check"
            className={cn("mt-0.5 h-4 w-4 shrink-0", tone === "dark" ? "text-flame-500" : "text-flame-400")}
            strokeWidth={2.4}
          />
          <span className={cn("text-[0.92rem] leading-relaxed", tone === "dark" ? "text-muted" : "text-navy-200")}>{b}</span>
        </li>
      ))}
    </ul>
  );
}

/** Ambient layered backdrop used behind dark sections. */
export function DarkBackdrop({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-flame-600/16 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-navy-500/25 blur-[120px]" />
      <div className="u-noise" />
      {children}
    </>
  );
}
