import Icon from "./Icon";
import { waLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 md:bottom-7 md:right-7"
    >
      <span className="hidden translate-x-2 rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat with us
      </span>
      <span className="wa-pulse grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-green-600/30 transition-transform duration-300 group-hover:scale-110">
        <Icon name="whatsapp" className="h-7 w-7" />
      </span>
    </a>
  );
}
