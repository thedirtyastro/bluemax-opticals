import Link from "next/link";
import { business } from "@/lib/constants";
import { PhoneIcon, WhatsAppIcon, PinIcon, CalendarIcon } from "./ui/Icons";

const items = [
  { href: business.phoneHref, label: "Call", icon: PhoneIcon },
  { href: business.whatsappHref, label: "WhatsApp", icon: WhatsAppIcon, external: true },
  { href: business.mapsDirectionsHref, label: "Directions", icon: PinIcon, external: true },
  { href: "#enquiry", label: "Book", icon: CalendarIcon },
];

export default function StickyMobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-ivory/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-4">
        {items.map(({ href, label, icon: Icon, external }) => (
          <Link
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold text-ink transition-colors active:text-cobalt"
          >
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
