import { useMemo, useState } from "react";
import { cn } from "../../utils/cn";
import { site, waLink } from "../../config/site";
import { Icon } from "../Icons";
import { Eyebrow, Reveal } from "../ui";

/* =============================================================
   SPEC BUILDER — interactive quote composer.
   No prices are invented: it estimates a production window and
   builds a detailed WhatsApp brief for the sales team.
   ============================================================= */

const groups = [
  {
    key: "product",
    label: "Product",
    options: ["Plastic bag", "Pouch / sachet", "Bottle / container", "Promotional item", "Rigid sheet / signage", "Other"],
  },
  {
    key: "material",
    label: "Material",
    options: ["HDPE", "LDPE", "PP", "PET", "Laminate (PET/ALU/PE)", "Acrylic / PVC", "Not sure yet"],
  },
  {
    key: "size",
    label: "Size",
    options: ["Small (< 20 cm)", "Medium (20 – 40 cm)", "Large (> 40 cm)", "Custom size"],
  },
  {
    key: "colours",
    label: "Print colours",
    options: ["1 colour", "2 colours", "4 colours", "Full colour CMYK"],
  },
  {
    key: "urgency",
    label: "Timeline",
    options: ["Standard (10 – 14 days)", "Rush (5 – 7 days)", "Scheduled monthly", "Just exploring"],
  },
] as const;

const finishing = ["Zipper", "Degassing valve", "Matte lamination", "Hot stamp / metallic", "Vacuum safe", "Handle / rope", "Tear notch"];

const qtySteps = [500, 1000, 2000, 5000, 10000, 25000, 50000, 100000, 250000, 500000];

type Key = (typeof groups)[number]["key"];

export function SpecBuilder() {
  const [choice, setChoice] = useState<Record<Key, string>>({
    product: groups[0].options[0],
    material: groups[1].options[0],
    size: groups[2].options[1],
    colours: groups[3].options[1],
    urgency: groups[4].options[0],
  });
  const [qtyIdx, setQtyIdx] = useState(3);
  const [finish, setFinish] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const qty = qtySteps[qtyIdx];

  const estimate = useMemo(() => {
    const colourFactor = ["1 colour", "2 colours", "4 colours", "Full colour CMYK"].indexOf(choice.colours) + 1;
    const volumeFactor = qty >= 100000 ? 5 : qty >= 25000 ? 3 : qty >= 5000 ? 2 : 1;
    const base = 4 + colourFactor * 1.5 + volumeFactor * 1.6;
    const rush = choice.urgency.startsWith("Rush");
    const min = Math.max(4, Math.round(rush ? base * 0.6 : base));
    return { min, max: Math.round(min * 1.45 + 2), screens: colourFactor, rush };
  }, [choice.colours, choice.urgency, qty]);

  const message = useMemo(() => {
    const lines = [
      `Halo ${site.name}, saya sudah mengisi spec builder di website. Berikut ringkasannya:`,
      ``,
      `Produk        : ${choice.product}`,
      `Material      : ${choice.material}`,
      `Ukuran        : ${choice.size}`,
      `Warna cetak   : ${choice.colours}`,
      `Jumlah        : ${qty.toLocaleString("id-ID")} pcs`,
      `Finishing     : ${finish.length ? finish.join(", ") : "Tidak ada"}`,
      `Timeline      : ${choice.urgency}`,
    ];
    if (notes.trim()) lines.push(`Catatan       : ${notes.trim()}`);
    lines.push(``, `Mohon penawaran harga dan jadwal produksinya. Terima kasih.`);
    return lines.join("\n");
  }, [choice, qty, finish, notes]);

  const toggleFinish = (f: string) =>
    setFinish((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  return (
    <div className="grid gap-px overflow-hidden border border-navy-900/12 bg-navy-900/12 lg:grid-cols-12">
      {/* builder */}
      <div className="bg-white p-6 sm:p-8 lg:col-span-7 xl:col-span-8">
        <Eyebrow>Spec builder</Eyebrow>
        <h3 className="u-display mt-4 text-[1.7rem] leading-[0.98] text-navy-900 sm:text-[2.1rem]">
          Build your brief in <span className="text-flame-500">30 seconds</span>
        </h3>
        <p className="mt-3 max-w-xl text-[0.94rem] leading-relaxed text-muted">
          Pick the options that match your product. The panel on the right updates live and turns your selection into a
          complete brief you can send straight to our sales team on WhatsApp.
        </p>

        <div className="mt-8 space-y-7">
          {groups.map((g) => (
            <div key={g.key}>
              <p className="u-label text-navy-800">{g.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.options.map((o) => {
                  const active = choice[g.key] === o;
                  return (
                    <button
                      key={o}
                      type="button"
                      onClick={() => setChoice((prev) => ({ ...prev, [g.key]: o }))}
                      className={cn(
                        "border px-3.5 py-2 font-mono text-[0.74rem] transition-all duration-300",
                        active
                          ? "border-flame-500 bg-flame-500 text-white shadow-[0_8px_18px_-10px_rgba(242,98,28,.9)]"
                          : "border-navy-900/15 bg-white text-navy-800 hover:-translate-y-0.5 hover:border-flame-400 hover:text-flame-600"
                      )}
                      aria-pressed={active}
                    >
                      {o}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* quantity */}
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <p className="u-label text-navy-800">Quantity</p>
              <p className="u-display text-[1.5rem] leading-none text-navy-900">
                {qty.toLocaleString("id-ID")}
                <span className="ml-1 font-mono text-[0.7rem] font-normal uppercase tracking-[0.16em] text-muted">pcs</span>
              </p>
            </div>
            <input
              type="range"
              min={0}
              max={qtySteps.length - 1}
              step={1}
              value={qtyIdx}
              onChange={(e) => setQtyIdx(Number(e.target.value))}
              aria-label="Order quantity"
              className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-navy-900/12 accent-flame-500 outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-flame-500 [&::-webkit-slider-thumb]:shadow-[0_4px_12px_-2px_rgba(242,98,28,.8)]"
            />
            <div className="mt-2 flex justify-between font-mono text-[0.62rem] text-muted">
              <span>500</span>
              <span>10.000</span>
              <span>100.000</span>
              <span>500.000</span>
            </div>
          </div>

          {/* finishing */}
          <div>
            <p className="u-label text-navy-800">Finishing &amp; features</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {finishing.map((f) => {
                const active = finish.includes(f);
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => toggleFinish(f)}
                    aria-pressed={active}
                    className={cn(
                      "inline-flex items-center gap-2 border px-3.5 py-2 font-mono text-[0.74rem] transition-all duration-300",
                      active
                        ? "border-navy-900 bg-navy-900 text-white"
                        : "border-navy-900/15 bg-white text-navy-800 hover:-translate-y-0.5 hover:border-navy-900/40"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-3.5 w-3.5 items-center justify-center border transition-colors",
                        active ? "border-flame-400 bg-flame-500" : "border-navy-900/30"
                      )}
                    >
                      {active && <Icon name="check" className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                    </span>
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="u-label text-navy-800">Extra notes</p>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: logo 2 warna, ukuran 30 × 40 cm, ada file AI, target kirim sebelum lebaran."
              className="mt-3 w-full resize-y border border-navy-900/15 bg-white px-4 py-3 text-[0.9rem] text-navy-900 placeholder:text-muted/60 focus:border-flame-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* live summary */}
      <div className="relative overflow-hidden bg-navy-950 p-6 text-white sm:p-8 lg:col-span-5 xl:col-span-4">
        <div className="u-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-16 top-10 h-52 w-52 rounded-full bg-flame-600/22 blur-[80px]" />
        <div className="u-noise" />

        <div className="relative">
          <p className="u-label text-flame-400">Live summary</p>
          <p className="mt-4 font-display text-[1.35rem] font-extrabold uppercase leading-tight tracking-[-0.015em]">
            {choice.product}
          </p>

          <dl className="mt-5 divide-y divide-white/12 border-y border-white/12">
            {[
              ["Material", choice.material],
              ["Size", choice.size],
              ["Colours", choice.colours],
              ["Quantity", `${qty.toLocaleString("id-ID")} pcs`],
              ["Finishing", finish.length ? finish.join(", ") : "—"],
              ["Timeline", choice.urgency],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start justify-between gap-4 py-2.5">
                <dt className="u-label shrink-0 text-navy-300">{k}</dt>
                <dd className="text-right font-mono text-[0.76rem] leading-snug text-white">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 border border-flame-500/35 bg-flame-500/10 p-5">
            <p className="u-label text-flame-300">Indicative production window</p>
            <p className="u-display mt-2 text-[2rem] leading-none text-white">
              {estimate.min}–{estimate.max}
              <span className="ml-2 font-mono text-[0.72rem] font-normal uppercase tracking-[0.16em] text-navy-200">
                working days
              </span>
            </p>
            <ul className="mt-4 space-y-1.5 font-mono text-[0.7rem] text-navy-200">
              <li>· {estimate.screens} screen{estimate.screens > 1 ? "s" : ""} / plate{estimate.screens > 1 ? "s" : ""} required</li>
              <li>· {qty.toLocaleString("id-ID")} pcs {qty >= 100000 ? "= bulk run schedule" : qty >= 5000 ? "= standard production run" : "= short run"}</li>
              <li>· {estimate.rush ? "Rush slot subject to press availability" : "Includes artwork proof & QC"}</li>
            </ul>
            <p className="mt-4 font-mono text-[0.64rem] leading-relaxed text-navy-300">
              Estimate only — final lead time and price are confirmed in your written quotation.
            </p>
          </div>

          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex w-full items-center justify-center gap-2.5 bg-[#25D366] px-5 py-4 font-display text-[0.78rem] font-bold uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb457]"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Send this spec on WhatsApp
          </a>

          <Reveal delay={60}>
            <div className="mt-4 flex items-center gap-3 font-mono text-[0.68rem] text-navy-300">
              <Icon name="clock" className="h-4 w-4 shrink-0 text-flame-400" />
              Average reply: under 15 minutes during working hours
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
