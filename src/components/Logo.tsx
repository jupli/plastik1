import { SITE } from "@/config/site";

interface LogoProps {
  light?: boolean;
  className?: string;
}

/**
 * Placeholder logo: initials mark + company name.
 * To use an image logo, replace the mark below with <img src="/images/logo.png" alt={SITE.companyName} />.
 */
export default function Logo({ light = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 shadow-lg shadow-navy-900/20 ring-1 ring-white/10">
        <span className="text-sm font-extrabold tracking-tight text-white">{SITE.logoInitials}</span>
        <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent-500" />
      </div>
      <div className="leading-tight">
        <div className={`text-[15px] font-extrabold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
          {SITE.companyName}
        </div>
        <div
          className={`text-[10.5px] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-white/60" : "text-slate-500"
          }`}
        >
          Plastic Printing
        </div>
      </div>
    </div>
  );
}
