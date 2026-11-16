import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { WhatsAppIcon, PhoneIcon, PinIcon } from "./ui/Icons";
import { business } from "@/lib/constants";

export default function ConversionSection() {
  return (
    <section className="bg-ink py-20 text-ivory md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tightest md:text-5xl">
              Ready to find your next pair?
            </h2>
            <p className="mt-4 text-lg text-ivory/70">
              Visit Bluemax Opticals in Whitefield, or speak with us before
              you visit.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={business.whatsappHref} variant="light" external icon={<WhatsAppIcon className="h-4 w-4" />}>
                WhatsApp Bluemax
              </Button>
              <Button
                href={business.phoneHref}
                className="border border-ivory/30 bg-transparent text-ivory hover:bg-ivory hover:text-ink"
                icon={<PhoneIcon className="h-4 w-4" />}
              >
                Call {business.phone}
              </Button>
              <Button
                href={business.mapsDirectionsHref}
                external
                className="border border-ivory/30 bg-transparent text-ivory hover:bg-ivory hover:text-ink"
                icon={<PinIcon className="h-4 w-4" />}
              >
                Get directions
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
