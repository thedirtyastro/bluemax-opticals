import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { PinIcon, PhoneIcon, WhatsAppIcon } from "./ui/Icons";
import { business } from "@/lib/constants";

export default function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            Your new optical stop in Whitefield.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal delay={60}>
            <div>
              <p className="font-display text-lg font-bold text-ink">{business.name}</p>
              <address className="mt-3 not-italic leading-relaxed text-charcoal/75">
                {business.address.line1}
                <br />
                {business.address.line2}
                <br />
                {business.address.line3}
                <br />
                {business.address.line4}
              </address>
              <p className="mt-4 font-semibold text-ink">{business.phone}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={business.mapsDirectionsHref} external icon={<PinIcon className="h-4 w-4" />}>
                  Get directions
                </Button>
                <Button href={business.phoneHref} variant="secondary" icon={<PhoneIcon className="h-4 w-4" />}>
                  Call store
                </Button>
                <Button href={business.whatsappHref} variant="secondary" external icon={<WhatsAppIcon className="h-4 w-4" />}>
                  WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Bluemax Opticals location on Google Maps"
                src={business.mapsEmbedSrc}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
