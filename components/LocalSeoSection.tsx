import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function LocalSeoSection() {
  return (
    <section className="border-t border-ink/8 py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-ink">
              Bluemax Opticals in Whitefield
            </h2>
            <p className="mt-4 text-charcoal/70">
              If you've been searching for an optical shop in Whitefield,
              Bluemax Opticals is easy to reach from Nallurahalli, Palm
              Meadows and the ITPL surroundings. We're a local eyewear and
              eye care destination — whether you're looking for everyday
              glasses, sunglasses, contact lenses, or simply want to
              understand your options before an eye test. Customers from
              Hoodi and across East Bengaluru also stop by, and we're happy
              to help over a call or WhatsApp before you visit.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
