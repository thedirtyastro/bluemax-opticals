import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { StoreScene } from "./ui/PlaceholderArt";
import { PinIcon } from "./ui/Icons";
import { business } from "@/lib/constants";

export default function StoreExperience() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
                Come in. Try them on.
                <br />
                See the difference.
              </h2>
              <p className="mt-5 max-w-md text-lg text-charcoal/75">
                Frames, sunglasses and a proper lens consultation — the kind
                of detail that's hard to get right online.
              </p>
              <Button
                href={business.mapsDirectionsHref}
                external
                className="mt-8"
                icon={<PinIcon className="h-4 w-4" />}
              >
                Get directions
              </Button>
              <p className="mt-4 text-xs text-charcoal/50">
                Store photography coming soon — this space is ready for it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-ink/10">
              <StoreScene className="w-full" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
