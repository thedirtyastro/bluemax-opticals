import Link from "next/link";
import Container from "./ui/Container";
import { business } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ivory pb-28 pt-14 lg:pb-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-ink">Bluemax Opticals</p>
            <p className="mt-2 text-sm text-charcoal/60">{business.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Location</p>
            <p className="mt-2 text-sm text-charcoal/60">{business.area}</p>
            {business.hours ? (
              <p className="mt-1 text-sm text-charcoal/60">{business.hours}</p>
            ) : (
              <p className="mt-1 text-sm text-charcoal/40">Contact us to confirm hours</p>
            )}
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Get in touch</p>
            <ul className="mt-2 space-y-1 text-sm text-charcoal/60">
              <li>
                <Link href={business.phoneHref} className="hover:text-cobalt">
                  {business.phone}
                </Link>
              </li>
              <li>
                <Link href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-cobalt">
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link href={business.mapsDirectionsHref} target="_blank" rel="noopener noreferrer" className="hover:text-cobalt">
                  Google Maps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Legal</p>
            <ul className="mt-2 space-y-1 text-sm text-charcoal/60">
              <li>
                <Link href="/privacy-policy" className="hover:text-cobalt">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cobalt">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cobalt">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-ink/8 pt-6 text-xs text-charcoal/40">
          © {new Date().getFullYear()} Bluemax Opticals. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
