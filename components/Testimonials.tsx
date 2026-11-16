import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { StarIcon, ArrowRightIcon } from "./ui/Icons";
import { business } from "@/lib/constants";

// NOTE FOR THE OWNER: swap the three placeholder slots below for real,
// verified Google reviews (name, quote, rating) — never invent testimonials.
const placeholderSlots = [1, 2, 3];

export default function Testimonials() {
  return (
    <section id="reviews" className="border-t border-ink/8 bg-mist/50 py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
                What Whitefield customers say
              </h2>
              <div className="mt-4 flex items-center gap-2 text-ink">
                <div className="flex text-cobalt">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="font-semibold">{business.rating.value} · {business.rating.count} public reviews</span>
              </div>
            </div>
            <Button
              href={business.mapsReviewsHref}
              variant="secondary"
              external
              icon={<ArrowRightIcon />}
            >
              Read more reviews
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {placeholderSlots.map((slot, i) => (
            <Reveal key={slot} delay={i * 80}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-ink/20 bg-ivory/60 p-6">
                <div className="flex text-ink/20">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-6 text-sm text-charcoal/45">
                  A verified customer review will go here.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
