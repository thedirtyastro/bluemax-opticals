import Container from "./ui/Container";
import Button from "./ui/Button";
import { HeroVisual } from "./ui/PlaceholderArt";
import { PhoneIcon, WhatsAppIcon, PinIcon, GlassesIcon, SunIcon, DropletIcon } from "./ui/Icons";
import { business } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-16">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-wideish text-optical">
            Bluemax Opticals · Whitefield
          </p>

          <h1 className="font-display text-[13vw] font-bold leading-[0.95] tracking-tightest text-ink sm:text-6xl md:text-7xl">
            See clearer.
            <br />
            Look better.
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-charcoal/80">
            Thoughtfully selected eyewear, professional optical care and
            everyday vision solutions — right here in Whitefield.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#enquiry">Book an eye test</Button>
            <Button
              href={business.whatsappHref}
              variant="secondary"
              external
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              WhatsApp us
            </Button>
          </div>

          <Button
            href={business.mapsDirectionsHref}
            variant="ghost"
            external
            className="mt-5"
            icon={<PinIcon className="h-4 w-4" />}
          >
            Get directions to Whitefield store
          </Button>
        </div>

        <div className="relative">
          <HeroVisual className="w-full rounded-2xl" />

          {/* floating category chips */}
          <div className="absolute -left-3 top-6 flex items-center gap-2 rounded-full border border-ink/10 bg-ivory/95 px-4 py-2.5 text-xs font-semibold text-ink shadow-hairline backdrop-blur sm:left-2">
            <GlassesIcon className="h-4 w-4 text-cobalt" />
            Eyewear
          </div>
          <div className="absolute -right-2 top-1/3 flex items-center gap-2 rounded-full border border-ink/10 bg-ivory/95 px-4 py-2.5 text-xs font-semibold text-ink shadow-hairline backdrop-blur sm:right-4">
            <SunIcon className="h-4 w-4 text-cobalt" />
            Sunglasses
          </div>
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-ink/10 bg-ivory/95 px-4 py-2.5 text-xs font-semibold text-ink shadow-hairline backdrop-blur">
            <DropletIcon className="h-4 w-4 text-cobalt" />
            Contact Lenses
          </div>
        </div>
      </Container>
    </section>
  );
}
