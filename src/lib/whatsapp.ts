import { SITE } from "@/config/site";

/** Build a wa.me link with an optional pre-filled message. */
export function waLink(message: string = SITE.whatsappMessage): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** WhatsApp link pre-filled for a specific product inquiry. */
export function waProductInquiry(productName: string): string {
  return waLink(
    `Hello, I would like to inquire about "${productName}". Could you please share more details, pricing and minimum order quantity?`
  );
}

/** Google Maps search link for the business address. */
export function mapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;
}
