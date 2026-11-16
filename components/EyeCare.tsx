import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { CalendarIcon } from "./ui/Icons";

const steps = [
  {
    n: "01",
    title: "Understand your vision",
    body: "A proper assessment starts with understanding how you actually use your eyes — reading, screens, driving, or all three.",
  },
  {
    n: "02",
    title: "Find the right lens",
    body: "The right lens depends on your prescription and your day-to-day habits, not just what's convenient.",
  },
  {
    n: "03",
    title: "Choose the right frame",
    body: "A frame that fits well and suits you is what makes you want to actually wear your glasses.",
  },
];

export default function EyeCare() {
  return (
    <section id="eye-care" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
              Your vision deserves more than a quick purchase.
            </h2>
            <p className="mt-4 text-lg text-charcoal/75">
              Choosing eyewear is a process, not a transaction — here's how we
              think about it.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="border-t border-ink/15 pt-6">
                <span className="font-display text-sm font-semibold text-cobalt">{step.n}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-charcoal/70">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <Button href="#enquiry" className="mt-12" icon={<CalendarIcon className="h-4 w-4" />}>
            Book / enquire about an eye test
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
