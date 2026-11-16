import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const points = [
  {
    title: "Personalized guidance",
    body: "Get help choosing eyewear based on your needs and preferences, not just what's in stock.",
  },
  {
    title: "Frame + lens guidance",
    body: "Understand your options — frame shape, lens type, coatings — before you make a purchase.",
  },
  {
    title: "Local & convenient",
    body: "A convenient optical destination right here in Whitefield, near Palm Meadows and Nallurahalli.",
  },
  {
    title: "After-sales support",
    body: "Easy to reach us by phone or WhatsApp whenever you need adjustments or assistance.",
  },
];

export default function WhyBluemax() {
  return (
    <section className="border-t border-ink/8 bg-mist/50 py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            Why Bluemax?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="bg-ivory">
              <div className="h-full p-8">
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-3 text-charcoal/70">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
